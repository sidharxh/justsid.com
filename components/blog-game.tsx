'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const faces = [
  { name: 'Fox', icon: '' },
  { name: 'Ideas', icon: '✦' },
  { name: 'Code', icon: '</>' },
  { name: 'Care', icon: '♡' },
  { name: 'People', icon: '☺' },
  { name: 'Questions', icon: '¿' },
];
const initialDeck = [0, 1, 2, 3, 4, 5, 3, 0, 5, 2, 1, 4];

export function BlogGame() {
  const [deck, setDeck] = useState(initialDeck);
  const [open, setOpen] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [message, setMessage] = useState('Pick any two cards. Find the matching pair.');
  const complete = matched.length === faces.length;

  useEffect(() => {
    if (open.length !== 2) return;
    const timer = setTimeout(() => setOpen([]), 950);
    return () => clearTimeout(timer);
  }, [open]);

  function reveal(index: number) {
    if (open.length === 2 || open.includes(index) || matched.includes(deck[index])) return;
    if (open.length === 0) {
      setOpen([index]);
      return;
    }
    setMoves(moves + 1);
    if (deck[open[0]] === deck[index]) {
      const next = [...matched, deck[index]];
      setMatched(next);
      setOpen([]);
      setMessage(next.length === faces.length ? 'All six pairs found. A curious mind at work! Play again whenever you like.' : `${faces[deck[index]].name} matched! ${next.length} of 6 pairs found.`);
    } else {
      setOpen([open[0], index]);
      setMessage('Not a pair. Remember those two and try again.');
    }
  }

  function shuffle() {
    const next = [...initialDeck];
    for (let i = next.length - 1; i > 0; i--) {
      const other = Math.floor(Math.random() * (i + 1));
      [next[i], next[other]] = [next[other], next[i]];
    }
    setDeck(next);
    setOpen([]);
    setMatched([]);
    setMoves(0);
    setMessage('Fresh cards. Same curious fox. Find the six pairs.');
  }

  return <section className={`blog-game${complete ? ' game-complete' : ''}`} aria-labelledby="game-title">
    <div className="game-header"><div><p className="eyebrow">A LITTLE GAME WHILE YOU WAIT</p><h2 id="game-title">A match for your curiosity.</h2></div><span className="game-flower" aria-hidden="true">✳</span></div>
    <div className="game-score"><span><strong>{matched.length}/6</strong> pairs</span><span><strong>{moves}</strong> {moves === 1 ? 'try' : 'tries'}</span><span>No timer. No rush.</span></div>
    <div className="memory-board" role="group" aria-label="Matching game, twelve cards">{deck.map((face, index) => {
      const isMatched = matched.includes(face);
      const revealed = open.includes(index) || isMatched;
      return <button className={`memory-card face-${face}${revealed ? ' revealed' : ''}${isMatched ? ' matched' : ''}`} key={index} type="button" disabled={isMatched} aria-label={isMatched ? `${faces[face].name}, matched, card ${index + 1}` : revealed ? `${faces[face].name}, card ${index + 1}` : `Reveal card ${index + 1}`} onClick={() => reveal(index)}>{revealed ? <><span className="memory-face" aria-hidden="true">{face === 0 ? <Image src="/fox.svg" width={45} height={45} alt=""/> : faces[face].icon}</span><span className="memory-name" aria-hidden="true">{faces[face].name}</span>{isMatched ? <span className="match-check" aria-hidden="true">✓</span> : null}</> : <><span className="card-doodle" aria-hidden="true">✧</span><span className="card-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span></>}</button>;
    })}</div>
    <p className="game-message" role="status">{message}</p>
    <div className="game-bottom"><span>{complete ? 'Good things come in pairs. Words come next.' : 'People, ideas, code… some things belong together.'}</span><button type="button" onClick={shuffle}>{complete ? 'Play again' : 'New shuffle'} <span aria-hidden="true">↻</span></button></div>
  </section>;
}
