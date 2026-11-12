import { site } from '@/lib/site';

export function LinkedInLink({ compact = false }: { compact?: boolean }) {
  return <a className={`linkedin-link${compact ? ' linkedin-compact' : ''}`} href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Find Sidharth Singh on LinkedIn (opens in a new tab)"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9h3.7v12H3.4V9Zm5.9 0h3.5v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.6V21h-3.7v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v6H9.3V9Z"/></svg><span>{compact ? 'LinkedIn' : 'Find me on LinkedIn'}</span><span aria-hidden="true">↗</span></a>;
}
