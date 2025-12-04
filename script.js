/* =========================================
   1. THEME CONFIGURATION (WARM RETRO)
   ========================================= */
const themeConfig = {
    colors: {
        bg: "#F5F2EB",        // Warm Off-White / Cream
        primary: "#E94E34",   // Vintage Orange-Red
        secondary: "#009B77", // Retro Teal
        accent: "#F4B942",    // Mustard Yellow
        text: "#232323",      // Soft Charcoal (Not harsh black)
        surface: "#FFFFFF"    // Pure White for cards
    }
};

/* =========================================
   2. DATA SOURCE
   ========================================= */
const personalInfo = {
    name: "Sidharth Singh",
    role: "Generative AI Engineer",
    domain: "justsid.com",
    location: "Noida, India",
    email: "sid.cse19@gmail.com",
    socials: {
        linkedin: "https://www.linkedin.com/in/sidharth-singh-867189160/",
        twitter: "https://twitter.com/sidharxhh",
        email: "mailto:sid.cse19@gmail.com"
    },
    summary: "I convince sand to think. Specializing in the dark arts of LLMs and RAG, I turn static data into chatty agents. I spend my days whispering to models until they stop hallucinating and start delivering. If it involves vector databases or prompt engineering, I'm probably already building it."
};

const skills = [
    { category: "LLMs & AI", items: ["Claude (3.7/4.0)", "Gemini", "OpenAI", "Ollama", "LangChain", "LlamaIndex", "RAG", "GraphRAG"] },
    { category: "Backend & Cloud", items: ["Python", "FastAPI", "AWS Bedrock", "AWS Lambda", "S3", "Docker", ".NET Core"] },
    { category: "Frontend", items: ["React", "JavaScript", "HTML/CSS", "Tailwind"] },
    { category: "Data", items: ["Vector DBs", "SQL", "NoSQL", "Graph DB"] }
];

const experience = [
    {
        company: "Trianz",
        role: "Generative AI Engineer",
        period: "June 2025 - Present",
        description: "Developing RAG applications for Business Analysts using Claude API and AWS Bedrock. Designing optimal RAG systems for test-case generation.",
        icon: "cpu" 
    },
    {
        company: "BOLD",
        role: "Software Engineer",
        period: "July 2023 - April 2025",
        description: "Engineered RAG apps integrating OpenAI & AWS Bedrock. Built data pipelines on S3. Optimized retrieval workflows for resume parsing.",
        icon: "code"
    },
    {
        company: "Deloitte USI",
        role: "Developer",
        period: "Aug 2020 - Feb 2023",
        description: "Built APIs with .NET Core. Enhanced UI/UX with Angular/React. Managed SQL Server databases for financial applications.",
        icon: "server"
    },
    {
        company: "TravelCue",
        role: "Frontend Developer",
        period: "Aug 2019 - Aug 2020",
        description: "Developed client-side apps using Kendo UI & JS. Intelligent POS systems with recommendation engines.",
        icon: "terminal"
    }
];

const projects = [
    {
        title: "KAIROS Test Suite",
        tech: "LangChain, OpenSearch, Claude, React",
        desc: "RAG application for testers to generate user-stories and test-cases from meeting transcripts.",
        type: "AI/ML"
    },
    {
        title: "Resume-Now RAG",
        tech: "LangGraph, ChromaDB, OpenAI, Docker",
        desc: "Intelligent querying over user resumes. Secure data pipelines for user-generated content.",
        type: "Product"
    },
    {
        title: "Meeting Minutes Bot",
        tech: "Gemma/Qwen, LangChain, FastAPI",
        desc: "Meeting transcript analyzer using open-source models to retrieve relevant info via natural language.",
        type: "Tool"
    }
];

/* =========================================
   3. RENDERING LOGIC
   ========================================= */

function applyTheme() {
    const r = document.querySelector(':root');
    r.style.setProperty('--bg-color', themeConfig.colors.bg);
    r.style.setProperty('--primary', themeConfig.colors.primary);
    r.style.setProperty('--secondary', themeConfig.colors.secondary);
    r.style.setProperty('--accent', themeConfig.colors.accent);
    r.style.setProperty('--text-main', themeConfig.colors.text);
    r.style.setProperty('--surface', themeConfig.colors.surface);
}

function renderHeader() {
    document.getElementById('header-domain').innerText = personalInfo.domain;
    document.getElementById('header-role').innerText = ">> " + personalInfo.role;
    document.getElementById('header-location').innerText = personalInfo.location.toUpperCase() + " (IST)";
}

function renderProfile() {
    // Readme
    const readmeHTML = `
        <p class="font-mono text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            <span class="font-bold" style="color: var(--primary)">>> Hello_World.</span><br><br>
            I am <span class="px-1 font-bold border border-current" style="background: var(--accent)">${personalInfo.name}</span>.
            <br><br>
            ${personalInfo.summary}
        </p>
        <div class="flex gap-3 md:gap-4 flex-wrap">
            <a href="${personalInfo.socials.linkedin}" target="_blank" class="neo-btn btn-primary text-xs md:text-sm">LINKEDIN</a>
            <a href="${personalInfo.socials.twitter}" target="_blank" class="neo-btn text-xs md:text-sm" style="background: var(--surface)">X_TWITTER</a>
        </div>
    `;
    document.getElementById('readme-content').innerHTML = readmeHTML;

    // Skills
    const skillsContainer = document.getElementById('skills-list');
    skillsContainer.innerHTML = skills.map(grp => `
        <div>
            <p class="font-mono text-[10px] md:text-xs font-bold opacity-60 mb-2">/// ${grp.category.toUpperCase()}</p>
            <div class="flex flex-wrap gap-2">
                ${grp.items.map(item => `<span class="tag">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-list');
    container.innerHTML = experience.map((job, idx) => {
        const isEven = idx % 2 === 0;
        const titleBarClass = isEven ? 'titlebar-primary' : 'titlebar-secondary';
        const iconBg = isEven ? 'var(--primary)' : 'var(--surface)';
        const iconColor = isEven ? 'white' : 'var(--text-main)';

        return `
        <div class="relative">
            <!-- ICON: Absolute positioning adjusted for visual clarity -->
            <div class="absolute -left-[42px] top-0 font-bold p-1 border-2 border-current shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] z-10" 
                 style="background: ${iconBg}; color: ${iconColor}; border-color: var(--text-main);">
                <i data-lucide="${job.icon}" class="w-4 h-4"></i>
            </div>
            
            <div class="neo-window w-full">
                <div class="neo-titlebar ${titleBarClass} flex flex-col xs:flex-row justify-between items-start xs:items-center gap-1 xs:gap-0">
                    <span class="font-bold text-sm md:text-base uppercase tracking-wide">${job.company}</span>
                    <span class="font-mono text-[10px] md:text-xs border border-current px-2 py-1 whitespace-nowrap" 
                          style="background: var(--surface); color: var(--text-main); border-color: var(--text-main);">
                        ${job.period}
                    </span>
                </div>
                <div class="p-4 md:p-6 bg-white">
                    <h3 class="text-lg md:text-xl font-bold mb-2">${job.role}</h3>
                    <p class="border-l-4 pl-4 text-xs md:text-sm leading-relaxed opacity-80" style="border-color: var(--bg-color)">
                        ${job.description}
                    </p>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-grid');
    container.innerHTML = projects.map((proj, idx) => `
        <div class="neo-window group hover:-translate-y-1 transition-transform duration-200 flex flex-col h-full">
            <div class="neo-titlebar flex justify-between items-center" style="background: var(--text-main); color: var(--surface)">
                <span>PROJECT_0${idx + 1}</span>
                <i data-lucide="maximize-2" class="w-3 h-3"></i>
            </div>
            <div class="p-5 md:p-6 bg-white flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-lg md:text-xl font-bold leading-tight">${proj.title}</h3>
                    <span class="border border-current px-2 py-0.5 text-[10px] md:text-xs font-bold uppercase tracking-wider" style="background: var(--accent); border-color: var(--text-main);">${proj.type}</span>
                </div>
                <p class="font-mono text-xs md:text-sm mb-6 flex-grow opacity-80">
                    ${proj.desc}
                </p>
                <div class="mt-auto pt-4 border-t-2 border-dashed border-gray-300">
                    <p class="text-[10px] font-bold uppercase opacity-50 mb-2">Stack_Trace</p>
                    <p class="text-[10px] md:text-xs font-mono font-bold break-words" style="color: var(--secondary)">${proj.tech}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderContact() {
    document.getElementById('contact-email').href = personalInfo.socials.email;
    document.getElementById('contact-email-text').innerText = "EMAIL_ME";
}

/* =========================================
   4. INITIALIZATION
   ========================================= */
window.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    renderHeader();
    renderProfile();
    renderExperience();
    renderProjects();
    renderContact();
    lucide.createIcons();

    // Fade In
    const body = document.getElementById('main-body');
    if (body) {
        body.classList.remove('opacity-0');
        body.classList.add('opacity-100');
    }
});

/* =========================================
   5. TAB NAVIGATION
   ========================================= */
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById(`tab-${tabId}`);
    if (target) target.classList.remove('hidden');

    document.querySelectorAll('.neo-tab').forEach(btn => btn.classList.remove('active-tab'));
    const activeBtn = document.getElementById(`btn-${tabId}`);
    if (activeBtn) activeBtn.classList.add('active-tab');
}
