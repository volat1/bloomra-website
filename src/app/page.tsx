import { Header, Footer } from "@/components/layout";
import {
  Hero,
  FeatureGrid,
  SeasonsSection,
  WisdomSection,
  PrivacySection,
  CTASection,
} from "@/components/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SeasonsSection />
        <WisdomSection />
        <FeatureGrid />
        <PrivacySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
