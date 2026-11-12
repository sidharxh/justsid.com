import { ActivityPanel } from '@/components/activity';
import { SocialLinks } from '@/components/social-links';
import { site } from '@/lib/site';

export const metadata = {
  description: 'Sidharth Singh, Forward Deployed Engineer at TimeDoc. See his ChatGPT usage and read his blog.',
  alternates: { canonical: '/' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${site.url}/#person`,
      name: site.name,
      url: site.url,
      jobTitle: site.role,
      worksFor: { '@type': 'Organization', name: site.company },
      sameAs: [site.linkedin, site.x],
    },
    {
      '@type': 'WebSite',
      name: 'Just Sid',
      url: site.url,
      author: { '@id': `${site.url}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <main id="main" className="wrap portfolio-home">
      <section id="home" className="portfolio-intro" aria-labelledby="intro-title">
        <div className="profile-heading">
          <span className="profile-kicker"><span className="profile-spark" aria-hidden="true">✳</span> THE HUMAN BEHIND THE PROMPTS</span>
          <h1 id="intro-title">Sid<span className="profile-period">.</span></h1>
          <p className="profile-lede">Applied AI engineer. Curious by default. Building things with people in mind.</p>
          <SocialLinks compact />
        </div>

        <div className="profile-facts" aria-label="Profile">
          <article className="profile-fact profile-fact-role">
            <span className="profile-icon" aria-hidden="true">⌘</span>
            <div><span className="profile-label">THE DAY JOB</span><h2>Forward Deployed Engineer</h2><p>At TimeDoc, working with healthcare teams to turn real problems into useful software.</p></div>
          </article>
          <article className="profile-fact profile-fact-strength">
            <span className="profile-icon" aria-hidden="true">◎</span>
            <div><span className="profile-label">THE SWEET SPOT</span><h2>People × product × AI</h2><p>Get close to the problem. Make a version people can actually use.</p></div>
          </article>
          <article className="profile-fact profile-fact-base">
            <span className="profile-icon" aria-hidden="true">↗</span>
            <div><span className="profile-label">CURRENT BASE</span><h2>India · working remotely</h2><p>Usually one question away from a new rabbit hole.</p></div>
          </article>
        </div>
      </section>
      <section id="ai" className="portfolio-usage" aria-labelledby="usage-title">
        <div className="usage-section-heading"><span className="profile-kicker"><span className="profile-spark" aria-hidden="true">✳</span> A WINDOW INTO MY AI HABITS</span><h2 id="usage-title">So, what do I ask ChatGPT?</h2></div>
        <ActivityPanel />
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}
