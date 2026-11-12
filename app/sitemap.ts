import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { getPosts } from '@/lib/posts';
export default function sitemap(): MetadataRoute.Sitemap { return [{url:site.url, priority:1}, {url:`${site.url}/privacy`,priority:.2}, ...getPosts().map(p=>({url:`${site.url}/blog/${p.slug}`,lastModified:p.date,priority:.7}))]; }
