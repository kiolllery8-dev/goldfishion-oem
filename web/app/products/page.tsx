import PageHeader from '@/components/PageHeader';
import CTAStrip from '@/components/CTAStrip';
import { asset } from '@/lib/site';

const categories = [
  {
    slug: 'oils',
    title: '油類保養',
    en: 'Oils & Serums',
    img: '/cat-oils.jpg',
    desc: '高濃度活性精華、護理油類，支援單方、複方與冷壓原料應用。',
    items: ['臉部精華油', '身體按摩油', '頭皮護理油', '卸妝油', '天然單方精華'],
  },
  {
    slug: 'liquids',
    title: '液態保養',
    en: 'Liquids & Toners',
    img: '/cat-liquids.jpg',
    desc: '化妝水、精華液、噴霧等水相劑型，支援微乳化與多層次質地。',
    items: ['化妝水/保濕水', '精華液', '定妝噴霧', '護髮水', '卸妝液'],
  },
  {
    slug: 'creams',
    title: '乳霜乳液',
    en: 'Creams & Lotions',
    img: '/cat-creams.jpg',
    desc: '乳化系統穩定，膚感可客製從清爽到絲絨厚潤多種質地。',
    items: ['面霜/晚霜', '身體乳', '護手霜', '眼霜', '防曬乳'],
  },
  {
    slug: 'masks',
    title: '面膜敷體',
    en: 'Masks & Sheets',
    img: '/cat-masks.jpg',
    desc: '片狀、塗抹式、泥膜、冷凍膜——可指定膜布材質與精華液配比。',
    items: ['生物纖維面膜', '片狀面膜', '泥膜/凍膜', '腳膜/手膜', '身體敷泥'],
  },
  {
    slug: 'others',
    title: '其他品項',
    en: 'Others',
    img: '/cat-others.jpg',
    desc: '潔顏、沐浴、香氛、頭皮、寵物系列等周邊與跨品類品項。',
    items: ['潔顏慕斯/凝露', '沐浴露/身體慕斯', '香氛噴霧/擴香', '頭皮精華', '寵物清潔保養'],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Make"
        title="代工品項一覽"
        subtitle="我們的劑型能力涵蓋 5 大類、數十種品項。找不到你想做的？直接來談，許多新品項都是跟客戶一起開發出來的。"
      />

      <div className="container py-16 space-y-16">
        {categories.map((c) => (
          <section key={c.slug} id={c.slug} className="scroll-mt-24 grid md:grid-cols-[1fr_1.3fr] gap-10 items-center">
            <div
              className="teal-frame aspect-[4/3] img-placeholder overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${asset(c.img)})` }}
            />
            <div>
              <div className="text-xs tracking-widest text-teal-700 uppercase mb-2">{c.en}</div>
              <h2 className="section-title text-2xl text-ink mb-3">{c.title}</h2>
              <p className="text-mute leading-relaxed mb-5">{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.items.map((i) => (
                  <span key={i} className="teal-frame-thin px-3 py-1 text-sm text-ink">{i}</span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTAStrip />
    </>
  );
}
