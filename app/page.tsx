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
        <h1 id="intro-title">I’m Sid.</h1>
        <p>
          I’m Sidharth Singh, a Forward Deployed Engineer at TimeDoc. I work directly
          with healthcare practitioners to understand where they get stuck and build
          software that helps.
        </p>
        <SocialLinks compact />
      </section>

      <section id="ai" className="portfolio-usage" aria-labelledby="usage-title">
        <h2 id="usage-title">ChatGPT usage</h2>
        <ActivityPanel />
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}
