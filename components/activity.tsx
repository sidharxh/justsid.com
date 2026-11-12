const modes = [
  { icon: '⌘', label: 'Make it', detail: 'Turn a rough thought into a working next step.', tone: 'make' },
  { icon: '◎', label: 'Understand it', detail: 'Learn a technical idea from first principles.', tone: 'learn' },
  { icon: '✎', label: 'Say it better', detail: 'Shape a post, script, or message until it sounds right.', tone: 'write' },
  { icon: '↗', label: 'Choose a direction', detail: 'Compare options and pressure-test the plan.', tone: 'decide' },
];

const facts = [
  {
    icon: '↻',
    eyebrow: 'THE SIGNATURE MOVE',
    title: '“Think again.”',
    detail: 'A first draft is a starting point. You’ll redirect the whole answer until it fits.',
    tone: 'fact-peach',
  },
  {
    icon: '⌕',
    eyebrow: 'THE LEARNING CURVE',
    title: 'Start simple. Go deep.',
    detail: 'You’ll go from “what is an IC?” to a design verification project in the same learning arc.',
    tone: 'fact-lilac',
  },
  {
    icon: '✂',
    eyebrow: 'THE EDITING PASS',
    title: 'Shorter. More you.',
    detail: 'You often bring a big thought, then keep trimming until the useful line survives.',
    tone: 'fact-mint',
  },
  {
    icon: '↗',
    eyebrow: 'THE CONVERSATION SHAPE',
    title: 'Idea → test → rethink.',
    detail: 'You use ChatGPT to challenge an idea, find the smallest version, and decide what to try.',
    tone: 'fact-blue',
  },
];

export function ActivityPanel() {
  return (
    <div className="usage-profile">
      <div className="usage-profile-head">
        <div>
          <span className="usage-kicker">A PERSONAL USAGE SNAPSHOT</span>
          <h3>Less “ask a question.”<br /><em>More “work it out with me.”</em></h3>
        </div>
        <span className="usage-stamp" aria-label="Based on conversation themes">NO TOKEN COUNTS<br />JUST CHAT HABITS</span>
      </div>

      <section className="usage-mix" aria-labelledby="usage-mix-title">
        <div className="usage-subhead">
          <h4 id="usage-mix-title">What our chats tend to do</h4>
          <span>THE USUAL SUSPECTS</span>
        </div>
        <div className="usage-mode-grid">
          {modes.map((mode) => (
            <article className={`usage-mode-card mode-${mode.tone}`} key={mode.label}>
              <span className="usage-mode-icon" aria-hidden="true">{mode.icon}</span>
              <div><h5>{mode.label}</h5><p>{mode.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="usage-facts" aria-labelledby="usage-facts-title">
        <div className="usage-subhead">
          <h4 id="usage-facts-title">A few very Sid things</h4>
          <span>OBSERVED IN OUR CHATS</span>
        </div>
        <div className="usage-fact-grid">
          {facts.map((fact) => (
            <article className={`usage-fact ${fact.tone}`} key={fact.eyebrow}>
              <span className="usage-fact-icon" aria-hidden="true">{fact.icon}</span>
              <span className="usage-fact-label">{fact.eyebrow}</span>
              <h5>{fact.title}</h5>
              <p>{fact.detail}</p>
            </article>
          ))}
        </div>
      </section>
      <p className="usage-note">A hand-curated read of recurring chat patterns, not measured account analytics.</p>
    </div>
  );
}
