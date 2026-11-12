import { readFile, mkdir, writeFile, rename } from 'node:fs/promises';
import path from 'node:path';
import { aggregate, publicSnapshot } from './metrics-core.mjs';
const args = process.argv.slice(2);
const source = args.find(arg => !arg.startsWith('--'));
if (!source) { console.error('Usage: npm run metrics:import -- /absolute/path/to/conversations.json [--publish]'); process.exit(1); }
try {
  const raw = JSON.parse(await readFile(path.resolve(source), 'utf8'));
  const summary = aggregate(raw);
  console.log('Review this aggregate summary. Topic classification is approximate. No chat text is written.');
  console.log(JSON.stringify(summary, null, 2));
  if (args.includes('--publish')) {
    if (!publicSnapshot(summary)) throw new Error('At least five conversations are required before publishing.');
    const dir = path.join(process.cwd(), '.private'); await mkdir(dir, { recursive: true, mode: 0o700 });
    const temporary = path.join(dir, 'activity.tmp'); await writeFile(temporary, JSON.stringify(summary), { mode: 0o600 });
    await rename(temporary, path.join(dir, 'activity.json')); console.log('Approved aggregate snapshot written to .private/activity.json.');
  } else console.log('Preview only. Nothing saved. Review counts before using --publish.');
} catch (error) { console.error(error instanceof SyntaxError ? 'Invalid JSON export.' : error.message); process.exit(1); }
