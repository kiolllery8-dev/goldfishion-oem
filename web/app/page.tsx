import Hero from '@/components/Hero';
import IntroBlock from '@/components/IntroBlock';
import FeatureTriple from '@/components/FeatureTriple';
import FullServiceStrip from '@/components/FullServiceStrip';
import ProductGrid from '@/components/ProductGrid';
import ApplicationsGrid from '@/components/ApplicationsGrid';
import CTAStrip from '@/components/CTAStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroBlock />
      <FeatureTriple />
      <FullServiceStrip />
      <ProductGrid />
      <ApplicationsGrid />
      <CTAStrip />
    </>
  );
}
