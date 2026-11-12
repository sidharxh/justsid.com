'use client';

import { useState } from 'react';

const steps = [
  { label: 'Understand', icon: '?', title: 'Get to the real problem.', question: 'What is this person trying to do, and what keeps getting in the way?', help: 'Organize the situation, list assumptions, and find the questions that still need asking.', judgment: 'Talk to the person. Check that I’ve understood the problem before solving it.', color: 'peach', action: 'Make sense of it' },
  { label: 'Explore', icon: '✦', title: 'Try more than one answer.', question: 'What are three ways to solve this? What does each one trade off?', help: 'Compare approaches, challenge a first idea, and make the trade-offs easier to see.', judgment: 'Choose what fits the person’s needs and constraints, not what sounds most impressive.', color: 'lilac', action: 'Look at the options' },
  { label: 'Build', icon: '⌘', title: 'Make it small enough to try.', question: 'What is the smallest useful version we can put in front of someone?', help: 'Break down the work, reason through API integrations, and untangle a coding problem.', judgment: 'Review the code, handle the details, and decide whether AI belongs in the solution at all.', color: 'sage', action: 'Make something useful' },
  { label: 'Check', icon: '✓', title: 'Did it actually help?', question: 'What could fail here? What would tell us the original problem is getting easier?', help: 'Look for edge cases, suggest checks, and question whether the answer matches the problem.', judgment: 'Test it, hear the feedback, and change what isn’t working.', color: 'peach', action: 'Bring it back to people' },
];

export function ThinkingStudio() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return <div className="thinking-studio">
    <div className="studio-header"><span className="studio-label">A LITTLE THINKING SPACE</span><span>Click a step. Follow a problem.</span></div>
    <div className="studio-steps" role="group" aria-label="Explore an example problem-solving workflow">{steps.map((item, index) => <button key={item.label} type="button" aria-pressed={index === active} aria-controls="thinking-example" onClick={() => setActive(index)}><span className="studio-step-number">0{index + 1}</span><span>{item.label}</span><span className="studio-step-icon" aria-hidden="true">{item.icon}</span></button>)}</div>
    <div id="thinking-example" className={`studio-example studio-${step.color}`} aria-live="polite">
      <div className="studio-illustration" aria-hidden="true"><div className="studio-orbit"/><div className="studio-orbit orbit-offset"/><span className="studio-person">☺<small>A PERSON</small></span><span className="studio-center">{step.icon}<small>{step.action}</small></span><span className="studio-ai">AI<small>A HELPER</small></span><span className="studio-star">✳</span></div>
      <div className="studio-conversation"><p className="eyebrow">EXAMPLE WORKFLOW · NOT A PRIVATE CHAT</p><h3>{step.title}</h3><div className="studio-question"><span>THE QUESTION</span><p>{step.question}</p></div><div className="studio-answer"><span>WHERE AI CAN HELP</span><p>{step.help}</p></div><div className="studio-judgment"><span>STILL MY RESPONSIBILITY</span><p>{step.judgment}</p></div></div>
    </div>
    <div className="studio-footer"><span>Good questions in. Human judgment throughout.</span><button type="button" onClick={() => setActive((active + 1) % steps.length)}>{active === steps.length - 1 ? 'Back to the question' : 'Next step'} <span aria-hidden="true">→</span></button></div>
  </div>;
}
