import Link from 'next/link';

const apps = [
  { t: '品牌新創', d: '從 0 到 1 建立品牌的創業者', k: '定位 · 產品 · 首批上架' },
  { t: '電商品牌', d: '電商通路擴張、拓品項、換包裝', k: '選品 · 打樣 · 內容' },
  { t: '連鎖通路', d: 'PB 自有品牌、獨家品項開發', k: '客製 · 批量 · 穩供' },
  { t: '跨業合作', d: '醫美診所、健身、旅宿的聯名品項', k: '聯名 · 禮盒 · 體驗' },
];

export default function ApplicationsGrid() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-line">
      <div className="container">
        <div className="text-center mb-10">
          <span className="tag-pill">Who We Work With</span>
          <h2 className="section-title text-2xl md:text-3xl mt-4 text-ink">
            四種典型合作場景
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {apps.map((a) => (
            <article key={a.t} className="teal-frame-thin p-6 hover:bg-teal-50 transition-colors">
              <h3 className="section-title text-lg text-ink mb-2">{a.t}</h3>
              <p className="text-sm text-mute mb-4 leading-relaxed">{a.d}</p>
              <div className="text-xs tracking-wider text-teal-700 uppercase">{a.k}</div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/applications/" className="btn-outline">完整案例</Link>
        </div>
      </div>
    </section>
  );
}
