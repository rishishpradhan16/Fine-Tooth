import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Statement from '@/components/Statement';
import Work from '@/components/Work';
import AppsWheel from '@/components/AppsWheel';
import Capabilities from '@/components/Capabilities';
import Reviews from '@/components/Reviews';
import Method from '@/components/Method';
import Team from '@/components/Team';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <Statement />
        <Work />
        <AppsWheel />
        <Capabilities />
        <Method />
        <Team />
        <Reviews />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <SmoothScroll />
    </>
  );
}
