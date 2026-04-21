import { asset } from '@/lib/site';

const features = [
  {
    title: '研發實驗室',
    subtitle: 'R&D Laboratory',
    desc: '自有配方資料庫與研發團隊，能快速依據訴求、膚感、劑型完成樣品試作與安定性驗證。',
    img: '/feature-lab.jpg',
  },
  {
    title: '客製化能力',
    subtitle: 'Customization',
    desc: '從配方、香氣、膚感到包材選配、印刷工藝與外觀打樣，支援小批量試作到規模化量產。',
    img: '/feature-custom.jpg',
  },
  {
    title: '精密儀器',
    subtitle: 'Precision Instruments',
    desc: '導入自動化填充、即時檢測與品保系統，每一批成品都可追溯、可驗證、可複製。',
    img: '/feature-instruments.jpg',
  },
];

export default function FeatureTriple() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-10">
          <span className="tag-pill">Core Capability</span>
          <h2 className="section-title text-2xl md:text-3xl mt-4 text-ink">
            三大核心能力，陪你把好商品做對
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <article key={f.title} className="teal-frame-thin bg-white p-6 flex flex-col">
              <div
                className="aspect-video teal-frame-thin img-placeholder mb-4 overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${asset(f.img)})` }}
              />
              <div className="text-xs text-teal-700 tracking-widest uppercase mb-1">
                {f.subtitle}
              </div>
              <h3 className="section-title text-lg text-ink mb-2">{f.title}</h3>
              <p className="text-sm text-mute leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
