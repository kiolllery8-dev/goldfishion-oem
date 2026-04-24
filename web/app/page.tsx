import type { Metadata } from 'next';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Gold Fishion 舒園國際｜台灣化妝品 ODM / OEM 一條龍代工',
  description: '舒園國際開發有限公司（Gold Fishion）是台灣化妝品 ODM / OEM 一條龍代工夥伴。從配方研發、包裝設計、內容產出、行銷企劃到量產出貨全包。台中設廠、GMP 等級品保、MOQ 友善。從配方到上架，一站打造你的美妝品牌。',
  alternates: { canonical: '/' },
};
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
