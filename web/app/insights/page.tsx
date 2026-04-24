import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import CTAStrip from '@/components/CTAStrip';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '趨勢洞察｜化妝品代工與品牌知識',
  description: '舒園國際分享日常累積的化妝品代工觀察：OEM 與 ODM 的差異、新品牌 MOQ 策略、一支新商品的素材清單、2026 保養品包裝趨勢等實戰內容。',
  keywords: ['OEM ODM 差別', 'MOQ 策略', '化妝品趨勢', '保養品包裝趨勢', '新品牌上架'],
  alternates: { canonical: '/insights/' },
  openGraph: {
    title: '化妝品代工與品牌知識洞察',
    description: '把日常與客戶討論的觀察整理出來，讓還沒合作的品牌也先看得到。',
    url: 'https://goldfishion.intelliverse.tw/insights/',
  },
};

const posts = [
  {
    slug: 'oem-vs-odm',
    date: '2026-01-10',
    cat: '基礎知識',
    t: 'OEM 與 ODM 差在哪？新品牌怎麼選？',
    d: '三句話講清楚代工兩大模式的差別，以及第一次創業的品牌適合哪一種。',
  },
  {
    slug: 'moq-strategy',
    date: '2026-01-28',
    cat: '創業策略',
    t: 'MOQ 不再是夢魘：新品牌的首批下單策略',
    d: '從資金、庫存週轉、市場驗證三個角度，拆解小品牌的首批量怎麼抓。',
  },
  {
    slug: 'content-stack',
    date: '2026-02-14',
    cat: '內容行銷',
    t: '一支新商品該準備哪些素材才能上架？',
    d: '電商頁、IG、短影音、通路提案——實際清單在這裡。',
  },
  {
    slug: 'packaging-trend-2026',
    date: '2026-03-03',
    cat: '趨勢洞察',
    t: '2026 保養品包裝三大趨勢',
    d: '從永續、極簡到可重填裝，看消費者正在為什麼樣的包裝買單。',
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="趨勢洞察與品牌知識"
        subtitle="我們把日常與客戶討論的觀察整理出來，讓還沒合作的品牌也能先看到。"
      />

      <div className="container py-16 grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <Link
            href={`/insights/${p.slug}/`}
            key={p.slug}
            className="teal-frame-thin p-7 bg-white hover:bg-teal-50 transition-colors block"
          >
            <div className="flex items-center gap-3 text-xs text-mute mb-3">
              <span className="text-teal-700 tracking-widest uppercase">{p.cat}</span>
              <span>·</span>
              <span>{p.date}</span>
            </div>
            <h2 className="section-title text-lg text-ink mb-2 leading-snug">{p.t}</h2>
            <p className="text-sm text-mute leading-relaxed">{p.d}</p>
            <div className="text-teal-700 text-sm mt-4 link-arrow">閱讀文章</div>
          </Link>
        ))}
      </div>

      <CTAStrip />
    </>
  );
}
