import { Header, Footer } from "@/components/layout";
import {
  Hero,
  FeatureGrid,
  SeasonsSection,
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
        <FeatureGrid />
        <PrivacySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
