import PageHeader from '@/components/PageHeader';
import CTAStrip from '@/components/CTAStrip';
import { asset } from '@/lib/site';

const values = [
  { t: '誠信', d: '配方、原料、成本透明，不打模糊仗。' },
  { t: '專業', d: '每一個品項都經得起品保、送驗、法規檢視。' },
  { t: '共好', d: '客戶的品牌起飛，我們才算真的完成工作。' },
];

const milestones = [
  { y: '2015', t: '公司成立，從代工小批量起家。' },
  { y: '2018', t: '導入 GMP 廠規與自動化填充設備。' },
  { y: '2021', t: '延伸品牌顧問、內容產製服務。' },
  { y: '2024', t: '建置一條龍體系，跨足跨境電商代工。' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Gold Fishion"
        title="我們不是工廠，而是品牌夥伴。"
        subtitle="舒園國際開發有限公司（Gold Fishion）深耕化妝品 ODM / OEM 代工，從配方研發、包裝設計、內容產出到行銷企劃，提供一站式的品牌孵化服務。"
      />

      <section className="container py-16 grid md:grid-cols-2 gap-12 items-center">
        <div
          className="teal-frame aspect-[4/3] img-placeholder overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${asset('/about-team.jpg')})` }}
        />
        <div>
          <h2 className="section-title text-2xl text-ink mb-4">品牌信念</h2>
          <p className="text-mute leading-relaxed mb-4">
            保養品產業正在快速變動——消費者要的不只是成分，更是品牌的溫度與敘事。
            許多創業者有很棒的點子，卻卡在不知道下一步該做什麼。我們的存在，
            就是補上這一段。
          </p>
          <p className="text-mute leading-relaxed">
            用工廠的嚴謹、品牌顧問的眼光，陪你走完從配方到上架的完整旅程。
          </p>
        </div>
      </section>

      <section className="bg-teal-50 py-16">
        <div className="container">
          <h2 className="section-title text-2xl text-ink mb-10 text-center">核心價值</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.t} className="bg-white teal-frame-thin p-7">
                <div className="text-teal-700 font-serif text-3xl mb-2">{v.t}</div>
                <p className="text-sm text-mute leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="section-title text-2xl text-ink mb-10">發展歷程</h2>
        <ol className="relative border-l-2 border-teal-700 pl-8 space-y-8">
          {milestones.map((m) => (
            <li key={m.y}>
              <div className="absolute -left-[9px] w-4 h-4 bg-teal-700 rounded-full" />
              <div className="text-teal-700 font-serif text-xl">{m.y}</div>
              <p className="text-ink mt-1">{m.t}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTAStrip />
    </>
  );
}
