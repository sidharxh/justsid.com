export const site = {
  name: 'Sidharth Singh',
  role: 'Forward Deployed Engineer',
  company: 'TimeDoc',
  url: 'https://justsid.com',
  description: 'Sidharth Singh is a Forward Deployed Engineer at TimeDoc, working remotely and directly with healthcare practitioners. Explore his work, personal projects, ideas, and writing.',
  linkedin: 'https://www.linkedin.com/in/justsid/',
  x: 'https://x.com/sidharxhh',
};

export type Project = {
  title: string;
  kind: string;
  description: string;
  tags: string[];
  origin: 'Personal' | 'Work';
  symbol: string;
  color: 'peach' | 'lilac' | 'sage';
  caption: string;
  detail: string;
  stack?: string[];
};

export const projects: Project[] = [
  { title: 'PopIn — AI Reading Assistant', kind: 'Understand text without switching tabs', description: 'Highlight text to explain it, summarize it, or ask a follow-up question in a small window beside your cursor.', tags: ['AI'], origin: 'Personal', symbol: '✦', color: 'lilac', caption: 'highlight → ask → keep reading', detail: 'A small, cursor-following window keeps the selected text and AI help together. The focus is on understanding what you’re reading without switching tabs.' },
  { title: 'Diva Art Mania', kind: 'Artist portfolio, commissions & digital books', description: 'A website for browsing paintings, requesting custom artwork, and buying a digital book about seeing like an artist.', tags: ['Websites', 'Creative'], origin: 'Personal', symbol: '✳', color: 'peach', caption: 'paintings, stories, and little details', detail: 'An artwork collection, individual painting pages, commission enquiries, and a digital-book checkout, all in one place.', stack: ['Next.js', 'React', 'Razorpay'] },
  { title: 'Multi-Slot Clipboard', kind: 'Keep several copied items within reach', description: 'Copy different items into separate slots, then choose which one to paste using repeated keyboard shortcuts.', tags: ['Everyday tools'], origin: 'Personal', symbol: '⌘', color: 'sage', caption: 'copy this. keep that. paste either.', detail: 'Repeated copy and paste shortcuts choose different slots. One press for the first item, two for the second, and so on.' },
  { title: 'Calm Play — Relaxing Games', kind: 'Simple games at a gentler pace', description: 'Simple games centered on a calm, unhurried experience.', tags: ['Creative'], origin: 'Personal', symbol: '◌', color: 'sage', caption: 'a little play. a little pause.', detail: 'A collection of simple games focused on a slower, more relaxed experience.' },
  { title: 'Grainbodha', kind: 'Makhana brand & product website', description: 'A website that introduces Grainbodha’s makhana flavors and helps retail and bulk buyers get in touch.', tags: ['Websites'], origin: 'Personal', symbol: '◒', color: 'peach', caption: 'meet the flavors', detail: 'Flavor pages, a guide to makhana, and direct contact options for retail and bulk enquiries.', stack: ['Next.js', 'React'] },
  { title: 'TalkTask — Conversational To-Dos', kind: 'A task list with a talking AI agent', description: 'A to-do list paired with an AI agent you can talk to.', tags: ['AI'], origin: 'Personal', symbol: '✓', color: 'lilac', caption: 'tasks meet conversation', detail: 'Pairs a to-do list with a conversational AI agent, bringing tasks and conversation into the same place.' },
  { title: 'Glance — Android Widgets', kind: 'Useful information on the home screen', description: 'Widgets for Android that put useful information on the home screen.', tags: ['Everyday tools'], origin: 'Personal', symbol: '▦', color: 'peach', caption: 'less opening apps. more at a glance.', detail: 'A collection of Android home-screen widgets, focused on small, useful interactions.' },
  { title: 'AI Development Dashboard', kind: 'A shared dashboard for AI development teams', description: 'A Metabase-inspired dashboard for teams developing AI applications.', tags: ['AI'], origin: 'Personal', symbol: '▥', color: 'sage', caption: 'AI work, in one view', detail: 'Applies the idea of a shared, easy-to-read dashboard to an AI development team’s work.' },
  { title: 'Smartwatch Listening Assistant', kind: 'A wearable listening assistant', description: 'A listening assistant designed around a smartwatch rather than a separate device.', tags: ['Everyday tools'], origin: 'Personal', symbol: '◉', color: 'lilac', caption: 'a small screen. a listening ear.', detail: 'A listening assistant that puts the smartwatch at the center of the experience.' },
  { title: 'Tai Chi Video Library', kind: 'A website for AI-generated Tai Chi videos', description: 'A Tai Chi website centered on AI-generated video content.', tags: ['Websites', 'Creative'], origin: 'Personal', symbol: '〰', color: 'sage', caption: 'movement, made visual', detail: 'Bringing Tai Chi content and AI-generated videos together in a dedicated website.' },
  { title: 'AI Comic Videos', kind: 'AI-assisted comic reading for YouTube', description: 'A video project that brings comic reading and AI together for YouTube.', tags: ['Creative', 'AI'], origin: 'Personal', symbol: '▤', color: 'peach', caption: 'from comic pages to video', detail: 'A project connecting comic reading, AI, and a video format for YouTube.' },
  { title: 'Almost — Dating Quizzes', kind: 'Playful quizzes about dating & texting', description: 'A dating website with playful quizzes about texting, first dates, and how people connect.', tags: ['Websites', 'Creative'], origin: 'Personal', symbol: '♡', color: 'lilac', caption: 'a little self-reflection. a little fun.', detail: 'Short quizzes, immediate results, and shareable result cards. A lighthearted way to explore dating situations and start a conversation.' },
  { title: 'KAIROS — Test Case Generator', kind: 'Turn meeting transcripts into test cases', description: 'An AI tool that turns meeting notes into user stories and test cases for software testers.', tags: ['AI'], origin: 'Work', symbol: '✳', color: 'peach', caption: 'meeting notes → test cases', detail: 'Retrieval-augmented generation (RAG) supplies relevant transcript passages as context for generating user stories and test cases.', stack: ['LangChain', 'OpenSearch', 'Claude API', 'React'] },
  { title: 'Resume-Now — Resume Q&A', kind: 'Find resume information through questions', description: 'A tool that lets people ask questions about resumes and find relevant information.', tags: ['AI'], origin: 'Work', symbol: '↗', color: 'lilac', caption: 'ask a question → find an answer', detail: 'Retrieval-augmented generation (RAG) uses relevant resume content to answer natural-language questions, with vector search and document processing behind it.', stack: ['LangGraph', 'Chroma', 'OpenAI API', 'Docker'] },
  { title: 'Meeting Transcript Q&A', kind: 'Ask questions about meeting transcripts', description: 'A question-answering tool that finds information in meeting transcripts using open-source language models.', tags: ['AI'], origin: 'Work', symbol: '⌘', color: 'sage', caption: 'meeting notes → useful answers', detail: 'Natural-language questions help find relevant information in meeting transcripts.', stack: ['Gemma & Qwen models', 'LangChain', 'FastAPI'] },
];

export const skillGroups = [
  { title: 'Direct AI API integration', description: 'Connecting applications to language models through API requests and JSON responses.', examples: ['OpenAI API', 'Amazon Bedrock', 'HTTP & JSON'] },
  { title: 'Retrieval & agent workflows', description: 'Finding relevant information and passing it into AI workflows with retrieval-augmented generation (RAG).', examples: ['LangChain', 'LangGraph', 'OpenSearch', 'Chroma'] },
  { title: 'Applications & backend APIs', description: 'Building backend services, web interfaces, and the connections between them.', examples: ['Python', 'FastAPI', 'REST APIs', 'React', 'Next.js', 'Docker'] },
];
