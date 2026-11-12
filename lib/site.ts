export const site = {
  name: 'Sidharth Singh',
  role: 'Forward Deployed Engineer',
  company: 'TimeDoc',
  url: 'https://justsid.com',
  description: 'Sidharth Singh is a Forward Deployed Engineer at TimeDoc, working remotely and directly with healthcare practitioners. Explore his work, personal projects, ideas, and writing.',
  linkedin: 'https://www.linkedin.com/in/sidharth-singh-867189160/',
  twitter: 'https://twitter.com/sidharxhh',
  email: 'sid.cse19@gmail.com',
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
  { title: 'PopIn', kind: 'AI, right where you read', description: 'Select text and get an explanation, a summary, or space to ask a question in a small window beside your cursor.', tags: ['AI & tools'], origin: 'Personal', symbol: '✦', color: 'lilac', caption: 'highlight → ask → keep reading', detail: 'A small, cursor-following window keeps the selected text and AI help together. The focus is on understanding what you’re reading without switching tabs.' },
  { title: 'Diva Art Mania', kind: 'A home for art', description: 'An art-first website with paintings, custom commissions, and a digital book about learning to see like an artist.', tags: ['Websites', 'Creative'], origin: 'Personal', symbol: '✳', color: 'peach', caption: 'paintings, stories, and little details', detail: 'An artwork collection, individual painting pages, commission enquiries, and a digital-book checkout, all in one place.', stack: ['Next.js', 'React', 'Razorpay'] },
  { title: 'Multi-Slot Clipboard', kind: 'Copy more. Switch less.', description: 'A clipboard with several slots, so different copied items don’t keep replacing each other.', tags: ['AI & tools'], origin: 'Personal', symbol: '⌘', color: 'sage', caption: 'copy this. keep that. paste either.', detail: 'Repeated copy and paste shortcuts choose different slots. One press for the first item, two for the second, and so on.' },
  { title: 'Calming Games', kind: 'A quieter kind of play', description: 'Simple games centered on a calm, unhurried experience.', tags: ['Creative'], origin: 'Personal', symbol: '◌', color: 'sage', caption: 'a little play. a little pause.', detail: 'A collection of games built around a calmer mood and a gentler pace.' },
  { title: 'Grainbodha', kind: 'Food, with a little character', description: 'A website for a makhana brand, bringing its flavors, product information, and business enquiries together.', tags: ['Websites'], origin: 'Personal', symbol: '◒', color: 'peach', caption: 'meet the flavors', detail: 'Flavor pages, a guide to makhana, and direct contact options for retail and bulk enquiries.', stack: ['Next.js', 'React'] },
  { title: 'Talking To-Do List', kind: 'Talk through the to-dos', description: 'A to-do list paired with an AI agent you can talk to.', tags: ['AI & tools'], origin: 'Personal', symbol: '✓', color: 'lilac', caption: 'tasks meet conversation', detail: 'Bringing a talking agent into the everyday task list, so the experience feels more conversational.' },
  { title: 'Android Widgets', kind: 'Little tools, right up front', description: 'Widgets for Android that put useful information on the home screen.', tags: ['AI & tools'], origin: 'Personal', symbol: '▦', color: 'peach', caption: 'less opening apps. more at a glance.', detail: 'A collection of Android home-screen widgets, focused on small, useful interactions.' },
  { title: 'AI Team Dashboard', kind: 'A clearer view for AI teams', description: 'A dashboard for development teams working with AI, inspired by the simplicity of Metabase.', tags: ['AI & tools'], origin: 'Personal', symbol: '▥', color: 'sage', caption: 'AI work, in one view', detail: 'A shared place for an AI development team to view its work through a dashboard.' },
  { title: 'Smartwatch Listener', kind: 'A listening assistant on your wrist', description: 'A smartwatch-centered project exploring a wearable listening assistant.', tags: ['AI & tools'], origin: 'Personal', symbol: '◉', color: 'lilac', caption: 'a small screen. a listening ear.', detail: 'A listening assistant that puts the smartwatch at the center of the experience.' },
  { title: 'Tai Chi Videos', kind: 'Movement meets creative AI', description: 'A Tai Chi website centered on AI-generated video content.', tags: ['Websites', 'Creative'], origin: 'Personal', symbol: '〰', color: 'sage', caption: 'movement, made visual', detail: 'Bringing Tai Chi content and AI-generated videos together in a dedicated website.' },
  { title: 'AI Comic Reader', kind: 'Comics, in a different format', description: 'AI-assisted comic reading for YouTube videos.', tags: ['Creative', 'AI & tools'], origin: 'Personal', symbol: '▤', color: 'peach', caption: 'from comic pages to video', detail: 'A project connecting comic reading, AI, and a video format for YouTube.' },
  { title: 'Almost — Unfiltered Dating', kind: 'Dating, with a playful twist', description: 'A dating website with playful quizzes about texting, first dates, and how people connect.', tags: ['Websites', 'Creative'], origin: 'Personal', symbol: '♡', color: 'lilac', caption: 'a little self-reflection. a little fun.', detail: 'Short quizzes, immediate results, and shareable result cards. A lighthearted way to explore dating situations and start a conversation.' },
  { title: 'KAIROS Test Suite', kind: 'From meetings to test cases', description: 'An AI tool that turns meeting notes into user stories and test cases for software testers.', tags: ['AI & tools'], origin: 'Work', symbol: '✳', color: 'peach', caption: 'meeting notes → test cases', detail: 'Retrieval supplies the source transcript as context before the model generates user stories and test cases.', stack: ['LangChain', 'OpenSearch', 'Claude', 'React'] },
  { title: 'Resume-Now RAG', kind: 'Ask questions about a resume', description: 'A tool that lets people ask questions about resumes and find relevant information.', tags: ['AI & tools'], origin: 'Work', symbol: '↗', color: 'lilac', caption: 'ask a question → find an answer', detail: 'Document retrieval finds relevant resume information, backed by a secure data pipeline.', stack: ['LangGraph', 'ChromaDB', 'OpenAI', 'Docker'] },
  { title: 'Meeting Minutes Bot', kind: 'Find the useful part', description: 'A tool that answers questions about meeting transcripts using open-source AI models.', tags: ['AI & tools'], origin: 'Work', symbol: '⌘', color: 'sage', caption: 'meeting notes → useful answers', detail: 'Natural-language questions help find relevant information in meeting transcripts.', stack: ['Gemma / Qwen', 'LangChain', 'FastAPI'] },
];
