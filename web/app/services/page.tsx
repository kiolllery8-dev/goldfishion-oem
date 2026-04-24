import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import CTAStrip from '@/components/CTAStrip';

export const metadata: Metadata = {
  title: '一條龍服務｜化妝品 ODM / OEM 六大階段',
  description: '舒園國際提供化妝品 ODM / OEM 六大階段服務：市場洞察與品牌定位、配方研發、包裝設計、內容產出、量產品保、通路上架與行銷企劃。從 0 到 1 陪你把商品做起來。',
  keywords: ['化妝品代工流程', 'ODM 流程', 'OEM 流程', '配方研發', '包裝設計', '行銷企劃', '量產品保'],
  alternates: { canonical: '/services/' },
  openGraph: {
    title: '一條龍代工：從概念到上架的六大階段',
    description: '配方研發、包裝設計、內容產出、量產品保、通路上架、行銷企劃一站整合。',
    url: 'https://goldfishion.intelliverse.tw/services/',
  },
};

const services = [
  {
    n: '01',
    t: '市場洞察與品牌定位',
    en: 'Market Insight & Brand Positioning',
    items: ['競品盤點與價格區間分析', '目標客群 TA 輪廓描繪', '品牌故事與訴求金句', '品項組合建議'],
  },
  {
    n: '02',
    t: '配方研發與樣品試作',
    en: 'R&D & Prototyping',
    items: ['依訴求選擇活性成分', '膚感、安定性、相容性測試', '小批打樣（200g 起）', 'COA 與原料資料齊備'],
  },
  {
    n: '03',
    t: '包裝設計與打樣',
    en: 'Packaging Design & Sampling',
    items: ['瓶器、外盒選型推薦', '平面視覺、Logo、條碼', '印刷工藝與質感打樣', '3D 打樣、外觀 mockup'],
  },
  {
    n: '04',
    t: '內容產出與攝影',
    en: 'Content & Photography',
    items: ['商品情境照、白底照', '短影音腳本與拍攝', '商品文案（電商/社群/通路頁）', 'KOL 合作素材包'],
  },
  {
    n: '05',
    t: '量產、品保與物流',
    en: 'Production, QA & Logistics',
    items: ['自動化填充與人工包裝', '批號追溯、微生物檢驗', 'MOQ 彈性，再生產快速切換', '倉儲與出貨支援'],
  },
  {
    n: '06',
    t: '通路上架與行銷企劃',
    en: 'Channel & Marketing',
    items: ['蝦皮、momo、博客來、LINE 商店上架', '首波廣告投放建議', '電商節檔期規劃', 'PR 新品發表策略'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="One-Stop ODM / OEM"
        title="一條龍服務，從概念到上架的六大階段"
        subtitle="我們相信真正的一條龍，不只是把配方填進瓶子。是陪你把一個想法，養成一個消費者願意回購的品牌。"
      />

      <section className="container py-16 grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <article key={s.n} className="teal-frame-thin bg-white p-7">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="font-serif text-3xl text-teal-700">{s.n}</span>
              <div>
                <h3 className="section-title text-lg text-ink">{s.t}</h3>
                <div className="text-xs text-mute tracking-widest uppercase mt-0.5">{s.en}</div>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-mute pl-1">
              {s.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-teal-700">▎</span>
                  {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <CTAStrip />
    </>
  );
}
