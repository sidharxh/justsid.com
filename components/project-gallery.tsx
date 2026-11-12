'use client';

import { useState } from 'react';
import type { Project } from '@/lib/site';

const filters = [
  { label: 'All', icon: '✳' },
  { label: 'Personal', icon: '☺' },
  { label: 'AI', icon: '✦' },
  { label: 'Everyday tools', icon: '⌘' },
  { label: 'Websites', icon: '↗' },
  { label: 'Creative', icon: '✎' },
];

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState('All');
  const [expanded, setExpanded] = useState(false);
  const matching = projects.filter(project => filter === 'All' || (filter === 'Personal' ? project.origin === 'Personal' : project.tags.includes(filter)));
  const visible = expanded ? matching : matching.slice(0, 6);

  return <>
    <div className="project-filter-row">
      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map(({ label, icon }) => <button key={label} type="button" aria-pressed={filter === label} aria-controls="project-results" onClick={() => { setFilter(label); setExpanded(false); }}><span aria-hidden="true">{icon}</span>{label}</button>)}
      </div>
      <p className="project-count" role="status">{matching.length} {matching.length === 1 ? 'project' : 'projects'}{filter !== 'All' ? ` · ${filter.toLowerCase()}` : ' · plenty to explore'}</p>
    </div>
    <div id="project-results" className="project-grid">
      {visible.map(project => <article className="project" key={project.title}>
        <div className={`project-art ${project.color}`}>
          <span className="project-number">{project.origin.toUpperCase()} PROJECT</span>
          <span className="project-symbol" aria-hidden="true">{project.symbol}</span>
          <span className="art-caption">{project.caption}</span>
          <svg viewBox="0 0 300 200" aria-hidden="true"><ellipse cx="150" cy="100" rx="110" ry="55"/><ellipse cx="150" cy="100" rx="55" ry="90"/><path d="M10 100h280M150 10v180"/></svg>
        </div>
        <div className="project-copy">
          <p className="eyebrow">{project.kind}</p><h3>{project.title}</h3><p>{project.description}</p>
          {project.stack?.length ? <div className="stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div> : null}
          <details><summary>About this project <span>+</span></summary><p>{project.detail}</p></details>
        </div>
      </article>)}
    </div>
    {matching.length > 6 ? <div className="project-more"><button type="button" className="button" aria-expanded={expanded} aria-controls="project-results" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show fewer' : `Show ${matching.length - 6} more`} <span aria-hidden="true">{expanded ? '−' : '+'}</span></button></div> : null}
  </>;
}
