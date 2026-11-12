import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';
import { SocialLinks } from '@/components/social-links';
import { Navigation } from '@/components/navigation';
import { site } from '@/lib/site';
import './globals.css';
const sans = localFont({ src: '../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2', variable: '--font-dm', display: 'swap', weight: '100 900' });
const mono = localFont({ src: [{ path: '../node_modules/@fontsource/space-mono/files/space-mono-latin-400-normal.woff2', weight: '400' }, { path: '../node_modules/@fontsource/space-mono/files/space-mono-latin-700-normal.woff2', weight: '700' }], variable: '--font-space', display: 'swap' });
export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: 'Sidharth Singh — Forward Deployed Engineer at TimeDoc', template: '%s — Just Sid' }, description: site.description, openGraph: { type: 'website', siteName: 'Just Sid', title: 'Sidharth Singh — I’m Sid.', description: site.description, locale: 'en_IN' }, twitter: { card: 'summary_large_image', creator: '@sidharxhh' }, robots: { index: true, follow: true }, icons: { icon: '/icon.png' } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${mono.variable}`}><body><a className="skip-link" href="#main">Skip to content</a><header className="header wrap"><Link href="/#home" className="wordmark" aria-label="Sid — back to the top">just sid<Image className="brand-fox" src="/fox.svg" width={38} height={38} alt="" aria-hidden="true"/></Link><Navigation/></header>{children}<footer className="wrap footer"><Link className="wordmark" href="/">just sid<Image className="brand-fox" src="/fox.svg" width={38} height={38} alt="" aria-hidden="true"/></Link><p>A person, a few projects, and plenty of questions.</p><div className="footer-links"><SocialLinks compact/><Link href="/blog">Blog ↗</Link><Link href="/privacy">Privacy</Link></div><small>© {new Date().getFullYear()} Sidharth Singh</small></footer></body></html>; }
