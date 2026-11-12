import Link from 'next/link';
import Image from 'next/image';
import { BlogGame } from '@/components/blog-game';
import { getPosts } from '@/lib/posts';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Blog — People, problems & things I’m learning',
  description: 'Notes by Sidharth Singh on understanding people’s problems, forward deployed engineering, building useful software, and working with AI.',
  alternates: { canonical: '/blog' },
};

export default function Blog() {
  const posts = getPosts();
  return <main id="main" className="wrap blog-page">
    {posts.length ? <><section className="page-intro"><p className="eyebrow">THE BLOG / NOTES FROM SID</p><h1>Good questions.<br/><em>A few useful words.</em></h1><p>What I’m learning about people, their problems, and building things that help.</p><a className="text-link" href={site.linkedin} target="_blank" rel="noopener noreferrer">Follow me on LinkedIn ↗</a></section><section className="blog-content" aria-label="Published posts"><div className="post-list">{posts.map(post => <Link href={`/blog/${post.slug}`} key={post.slug}><span>{post.category} · {post.readingTime} min</span><div><h3>{post.title}</h3><p>{post.description}</p></div><span aria-hidden="true">↗</span></Link>)}</div></section></> : <div className="blog-coming-soon"><section className="blog-waiting-copy"><p className="eyebrow"><span className="status-dot"/> THE BLOG / COMING SOON</p><h1>Good words<br/>take a <em>little <br/>thinking.</em></h1><p>Notes on people, problems, and the things I build to help. The first post is on its way.</p><p className="blog-game-invite">While I find the right words,<br/>find a few matching pairs. <span aria-hidden="true">↘</span></p><div className="blog-fox-note"><Image src="/fox.svg" width={55} height={55} alt=""/><span>Our fox is keeping<br/>the page warm.</span></div><a className="text-link" href={site.linkedin} target="_blank" rel="noopener noreferrer">Find me on LinkedIn ↗</a><Link className="blog-back" href="/">← Back to my portfolio</Link></section><BlogGame/></div>}
  </main>;
}
