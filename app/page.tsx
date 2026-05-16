import { LandingPage } from '@/components/sections/landing-page';
import { landingContentByLocale, siteMetaByLocale } from '@/lib/content';

export const dynamic = 'force-static';

export default function Home() {
  return <LandingPage contentByLocale={landingContentByLocale} siteMetaByLocale={siteMetaByLocale} />;
}
