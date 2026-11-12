'use client';

import { useState } from 'react';

const modes = [
  {
    id: 'build',
    label: 'Build',
    symbol: '⌘',
    title: 'Ship the thing.',
    description: 'I use ChatGPT to turn rough ideas into prototypes, work through bugs, and get projects live.',
    examples: [
      ['Browser memory', 'Explore a local-first extension that remembers pages and finds them again.'],
      ['Almost', 'Iterate on a dating stories site, from the confession feed to quizzes.'],
      ['This portfolio', 'Trim a busy homepage down to an intro, a blog, and this.'],
    ],
  },
  {
    id: 'learn',
    label: 'Learn',
    symbol: '↗',
    title: 'Pull on a thread.',
    description: 'I start with one question, then keep going until I can explain the moving parts myself.',
    examples: [
      ['LLM inference', 'Connect prefill, KV cache, and GPU memory to what happens when a model answers.'],
      ['Chip verification', 'Start with what an IC is and work up to a small design verification project.'],
      ['Networking', 'Trace a request from DNS resolution through a TLS connection.'],
    ],
  },
  {
    id: 'think',
    label: 'Think',
    symbol: '◇',
    title: 'Put ideas under pressure.',
    description: 'I use it to compare directions, catch weak assumptions, and decide what to test first.',
    examples: [
      ['Product ideas', 'Ask what would bring people back to a dating tool after the first visit.'],
      ['Building in public', 'Figure out which parts of the work make for an honest, useful video.'],
      ['Architecture', 'Talk through where memory should live and what can stay on-device.'],
    ],
  },
  {
    id: 'write',
    label: 'Write',
    symbol: '✎',
    title: 'Cut until it sounds like me.',
    description: 'I bring a rough thought, a voice dump, or a draft and work it into something worth sharing.',
    examples: [
      ['Short posts', 'Fit the idea for this portfolio into a single post without losing the hook.'],
      ['Video scripts', 'Turn the story of a website pivot into something I can say on camera.'],
      ['Engineering guides', 'Outline a practical guide for software engineers moving into applied AI.'],
    ],
  },
  {
    id: 'play',
    label: 'Play',
    symbol: '✦',
    title: 'Follow the weird idea.',
    description: 'Some chats start with “what if” and end with a game, an image, or something I want to try.',
    examples: [
      ['Algorithm stories', 'Turn data structures and algorithms into stories I can remember.'],
      ['Tiny games', 'Brainstorm short, calming games built around one satisfying action.'],
      ['Visual experiments', 'Imagine ChatGPT usage as a cyberpunk dashboard and see how it feels.'],
    ],
  },
] as const;

export function ActivityPanel() {
  const [active, setActive] = useState(0);
  const mode = modes[active];

  return (
    <div className="usage-console">
      <div className="usage-console-top">
        <div className="usage-console-lights" aria-hidden="true"><i /><i /><i /></div>
        <span>Sid’s ChatGPT Wrapped</span>
        <span className="usage-console-status">Curated snapshot</span>
      </div>

      <div className="usage-console-body">
        <div className="usage-modes" role="group" aria-label="ChatGPT use cases">
          {modes.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`usage-mode usage-tone-${item.id}`}
              aria-pressed={index === active}
              aria-controls="usage-mode-detail"
              onClick={() => setActive(index)}
            >
              <span aria-hidden="true">{item.symbol}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div id="usage-mode-detail" className={`usage-detail usage-tone-${mode.id}`}>
          <div key={mode.id} className="usage-story">
            <span className="usage-symbol" aria-hidden="true">{mode.symbol}</span>
            <h3>{mode.title}</h3>
            <p>{mode.description}</p>
            <ul className="usage-examples" aria-label="Examples from past chats">
              {mode.examples.map(([title, example]) => (
                <li key={title}><strong>{title}</strong><span>{example}</span></li>
              ))}
            </ul>
          </div>
          <span className="usage-sr-only" role="status">{mode.label}. {mode.title}</span>
        </div>
      </div>

      <div className="usage-console-footer">
        <span>Paraphrased examples from my chats</span>
        <button type="button" onClick={() => setActive((index) => (index + 1) % modes.length)}>
          Next use case <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
