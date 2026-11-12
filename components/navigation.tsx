'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="portfolio-nav" aria-label="Main navigation">
      <Link href="/#ai">ChatGPT usage</Link>
      <Link
        className="portfolio-blog-link"
        href="/blog"
        aria-current={pathname === '/blog' || pathname.startsWith('/blog/') ? 'page' : undefined}
      >
        Blogs <span aria-hidden="true">↗</span>
      </Link>
    </nav>
  );
}
