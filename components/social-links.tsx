import { LinkedInLink } from '@/components/linkedin-link';
import { site } from '@/lib/site';

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return <div className="social-links" role="group" aria-label="Find Sid on social media"><LinkedInLink compact={compact}/><a className={`x-link${compact ? ' x-compact' : ''}`} href={site.x} target="_blank" rel="noopener noreferrer" aria-label="Find Sid on X, @sidharxhh (opens in a new tab)"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.4L5.5 22H2.3l7.3-8.5L1 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L6.5 3.9H4.7L17.8 20Z"/></svg><span>{compact ? '@sidharxhh' : 'Find me on X'}</span><span aria-hidden="true">↗</span></a></div>;
}
