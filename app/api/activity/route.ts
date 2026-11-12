import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { publicSnapshot } from '@/scripts/metrics-core.mjs';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET() {
  let data = null;
  try { const raw = JSON.parse(await readFile(path.join(process.cwd(), '.private/activity.json'), 'utf8')); data = publicSnapshot(raw); } catch { /* Missing or invalid summaries fail closed. */ }
  return Response.json(data || { status: 'unavailable' }, { headers: { 'Cache-Control':'no-store', 'X-Robots-Tag':'noindex' } });
}
