import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
export type Post = { slug: string; title: string; description: string; date: string; category: string; content: string; readingTime: number };
export function getPosts(): Post[] { const dir = path.join(process.cwd(), 'content/posts'); if (!fs.existsSync(dir)) return []; return fs.readdirSync(dir).filter(file => file.endsWith('.md')).flatMap(file => { const { data, content } = matter(fs.readFileSync(path.join(dir, file), 'utf8')); if (data.published !== true || typeof data.title !== 'string' || typeof data.description !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(String(data.date)) || Number.isNaN(Date.parse(data.date)) || Date.parse(data.date) > Date.now()) return []; return [{ slug: file.replace(/\.md$/, ''), title: data.title, description: data.description, date: String(data.date), category: typeof data.category === 'string' ? data.category : 'Notes', content, readingTime: Math.max(1, Math.ceil(content.split(/\s+/).length / 220)) }]; }).sort((a,b) => b.date.localeCompare(a.date)); }
export function getPost(slug: string) { return getPosts().find(p => p.slug === slug); }
