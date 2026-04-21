import Link from 'next/link';

const steps = [
  { n: '01', t: '概念與市場', d: '盤點目標客群、定位與競品' },
  { n: '02', t: '配方研發', d: '依訴求打樣、膚感測試' },
  { n: '03', t: '包裝設計', d: '瓶器、視覺、印刷打樣' },
  { n: '04', t: '內容產出', d: '商品文案、形象照、影片' },
  { n: '05', t: '量產與出貨', d: '品保、批號管理、物流' },
  { n: '06', t: '行銷落地', d: '通路上架、社群企劃、投放' },
];

export default function FullServiceStrip() {
  return (
    <section className="bg-teal-50 py-16 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <span className="tag-pill">One-Stop Service</span>
            <h2 className="section-title text-2xl md:text-3xl mt-4 text-ink leading-tight">
              一條龍代工：
              <br />
              從概念到上架
              <br />
              的每個步驟。
            </h2>
            <p className="text-mute mt-4 leading-relaxed">
              一般 OEM 只做生產；我們連品牌定位、內容素材、行銷企劃都一起做。
              你只要帶著「想做一個怎樣的商品」來，其他交給我們。
            </p>
            <Link href="/services/" className="btn-outline mt-6">完整流程</Link>
          </div>

          <ol className="grid sm:grid-cols-2 gap-4">
            {steps.map((s) => (
              <li key={s.n} className="bg-white teal-frame-thin p-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl text-teal-700">{s.n}</span>
                  <h3 className="section-title text-base text-ink">{s.t}</h3>
                </div>
                <p className="text-sm text-mute mt-2 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
