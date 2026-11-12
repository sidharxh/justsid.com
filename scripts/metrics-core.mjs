export const labels = ['Building & debugging', 'Learning & exploring', 'Writing & thinking', 'Other'];
const floor5 = n => Math.floor(n / 5) * 5;
export function aggregate(conversations, now = new Date()) {
  if (!Array.isArray(conversations)) throw new Error('Expected a conversations.json array.');
  const counts = [0, 0, 0, 0]; let questions = 0; let total = 0;
  for (const chat of conversations) {
    if (!chat || typeof chat !== 'object' || !chat.mapping || typeof chat.mapping !== 'object') continue;
    // Follow only the active branch. Ignore alternate/regenerated branches.
    const seen = new Set(); const messages = []; let id = chat.current_node;
    while (typeof id === 'string' && chat.mapping[id] && !seen.has(id)) {
      seen.add(id); const node = chat.mapping[id]; const message = node.message;
      if (message?.author?.role === 'user') { questions++; messages.push((message.content?.parts || []).filter(p => typeof p === 'string').join(' ')); }
      id = node.parent;
    }
    if (!messages.length) continue;
    total++;
    const text = messages.join(' ').toLowerCase();
    const category = /\b(code|debug|python|javascript|typescript|api|sql|react|error|function|docker|rag)\b/.test(text) ? 0 : /\b(explain|learn|understand|teach|research|why|how does)\b/.test(text) ? 1 : /\b(write|draft|rewrite|brainstorm|outline|idea|summarize|blog)\b/.test(text) ? 2 : 3;
    counts[category]++;
  }
  return { version: 1, updatedAt: now.toISOString().slice(0,10), conversations: floor5(total), messages: floor5(questions), categories: labels.flatMap((label,i) => counts[i] >= 5 ? [{ label, count: floor5(counts[i]) }] : []) };
}
export function publicSnapshot(raw) {
  if (!raw || raw.version !== 1 || !/^\d{4}-\d{2}-\d{2}$/.test(raw.updatedAt) || Number.isNaN(Date.parse(raw.updatedAt)) || !Number.isSafeInteger(raw.conversations) || raw.conversations < 5 || raw.conversations % 5 !== 0 || !Number.isSafeInteger(raw.messages) || raw.messages < raw.conversations || raw.messages % 5 !== 0 || !Array.isArray(raw.categories)) return null;
  const categories = raw.categories.filter(c => c && labels.includes(c.label) && Number.isSafeInteger(c.count) && c.count >= 5 && c.count % 5 === 0).map(c => ({ label: c.label, count: c.count }));
  if (new Set(categories.map(c => c.label)).size !== categories.length || categories.reduce((sum,c) => sum+c.count,0) > raw.conversations) return null;
  // Explicit allowlist: extra keys in a file can never escape into a public response.
  return { status: 'connected', updatedAt: raw.updatedAt, conversations: raw.conversations, messages: raw.messages, categories };
}
