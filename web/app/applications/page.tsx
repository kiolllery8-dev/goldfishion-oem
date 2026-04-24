import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import CTAStrip from '@/components/CTAStrip';

export const metadata: Metadata = {
  title: '合作場景｜品牌新創、電商擴張、通路 PB、聯名合作',
  description: '舒園國際服務過的四種典型合作：品牌新創從 0 到 1、電商品牌擴張品項、連鎖通路 PB 自有品牌、跨業聯名合作。不論創業第一天或年銷千萬都能合作。',
  keywords: ['品牌新創代工', 'PB 自有品牌', '聯名代工', '化妝品 MOQ', '新品牌 ODM'],
  alternates: { canonical: '/applications/' },
  openGraph: {
    title: '四種典型化妝品代工合作場景',
    description: '品牌新創、電商擴張、通路 PB、聯名合作——看哪種模式適合你。',
    url: 'https://goldfishion.intelliverse.tw/applications/',
  },
};

const cases = [
  {
    tag: '品牌新創',
    t: '從零建立的女性私密保養品牌',
    d: '客戶是第一次創業的 IG 經營者。我們從定位、配方、包裝、內容、IG 首波素材一次做完，首批 300 瓶三週內售罄。',
    m: ['定位 + 命名', '配方研發 45 天', '首波電商素材 20 張'],
  },
  {
    tag: '電商擴張',
    t: '銷售破千萬電商品牌的品項擴張',
    d: '原有精華液大賣，想擴品到乳霜與面膜。我們延續配方骨幹、對齊視覺，讓新品上架即被熟客接住。',
    m: ['延伸品項 ×3', '一致膚感體驗', '轉換率提升 38%'],
  },
  {
    tag: '通路 PB',
    t: '連鎖通路的 PB 自有品牌',
    d: '為連鎖藥妝合作獨家洗沐系列。導入穩定供應鏈與品保流程，維持全年無缺貨。',
    m: ['MOQ 6,000 瓶', '兩種香味版本', '三年合約續約'],
  },
  {
    tag: '聯名合作',
    t: '旅宿品牌聯名備品',
    d: '為精品旅宿打造專屬沐浴系列，結合旅宿品牌故事與在地香氛，成為客房加價升級的理由之一。',
    m: ['在地香氛訂製', '環保包材', '禮盒零售同步'],
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Work With"
        title="四種典型合作場景"
        subtitle="不論你是創業第一天，還是年銷上千萬要擴品，都能在這裡找到對應的做法。下面是我們常見的合作型態與案例骨架（已去識別化）。"
      />

      <div className="container py-16 grid md:grid-cols-2 gap-6">
        {cases.map((c) => (
          <article key={c.t} className="teal-frame-thin p-7 bg-white">
            <span className="tag-pill mb-4">{c.tag}</span>
            <h2 className="section-title text-xl text-ink mb-3 mt-2">{c.t}</h2>
            <p className="text-mute text-sm leading-relaxed mb-4">{c.d}</p>
            <ul className="space-y-1.5 text-sm text-ink">
              {c.m.map((x) => (
                <li key={x} className="flex gap-2"><span className="text-teal-700">▎</span>{x}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <CTAStrip />
    </>
  );
}
