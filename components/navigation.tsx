'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'about', label: 'About', path: 'M20 21v-2a7 7 0 0 0-14 0v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z' },
  { id: 'work', label: 'Projects', path: 'm8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 20' },
  { id: 'interests', label: 'Interests', path: 'm12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z' },
  { id: 'ai', label: 'AI & me', path: 'M21 11a8 8 0 0 1-8 8H7l-5 3 2-6a8 8 0 0 1-1-5 9 9 0 0 1 18 0ZM8 11h.01M12 11h.01M16 11h.01' },
  { id: 'blog', label: 'Blog', path: 'M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1m0-15c3-2 6-2 10-1v15c-4-1-7-1-10 1V5Z' },
  { id: 'contact', label: 'Contact', path: 'M3 5h18v14H3V5Zm0 1 9 7 9-7' },
];

export function Navigation() {
  const pathname = usePathname();
  const [active, setActive] = useState('');

  useEffect(() => {
    if (pathname !== '/') return;
    const targets = sections.map(({ id }) => document.getElementById(id)).filter((element): element is HTMLElement => !!element);
    const update = () => {
      const line = window.innerWidth < 720 ? 175 : 145;
      let current = '';
      for (const element of targets) {
        if (element.getBoundingClientRect().top <= line) current = element.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10) current = 'contact';
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [pathname]);

  return <nav className="section-nav" aria-label="Page sections">{sections.map(({ id, label, path }) => <Link key={id} href={`/#${id}`} aria-current={pathname === '/' && active === id ? 'location' : undefined}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path}/></svg><span>{label}</span></Link>)}</nav>;
}
