import { redirect } from 'next/navigation';

// Keep existing bookmarks working. The blog listing now lives on the homepage.
export default function Blog() {
  redirect('/#blog');
}
