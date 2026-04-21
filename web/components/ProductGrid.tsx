import Link from 'next/link';
import { asset } from '@/lib/site';

const categories = [
  { slug: 'oils', title: '油類保養', en: 'Oils & Serums', img: '/cat-oils.jpg', desc: '精華油、美容油、按摩油、頭皮油' },
  { slug: 'liquids', title: '液態保養', en: 'Liquids & Toners', img: '/cat-liquids.jpg', desc: '化妝水、精華液、噴霧、卸妝液' },
  { slug: 'creams', title: '乳霜乳液', en: 'Creams & Lotions', img: '/cat-creams.jpg', desc: '面霜、身體乳、護手霜、眼霜' },
  { slug: 'masks', title: '面膜敷體', en: 'Masks & Sheets', img: '/cat-masks.jpg', desc: '片狀面膜、泥膜、凍膜、腳膜' },
  { slug: 'others', title: '其他品項', en: 'Others', img: '/cat-others.jpg', desc: '潔顏、沐浴、香氛、寵物保養' },
];

export default function ProductGrid() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="tag-pill">Product Categories</span>
            <h2 className="section-title text-2xl md:text-3xl mt-4 text-ink">
              我們能代工的品項
            </h2>
          </div>
          <Link href="/products/" className="text-teal-700 text-sm link-arrow">看全部品項</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              href={`/products/#${c.slug}`}
              className={`teal-frame-thin bg-white overflow-hidden group block ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div
                className={`img-placeholder ${i === 0 ? 'aspect-[16/11]' : 'aspect-[4/3]'} overflow-hidden bg-cover bg-center group-hover:scale-[1.01] transition-transform`}
                style={{ backgroundImage: `url(${asset(c.img)})` }}
              />
              <div className="p-5 border-t border-line">
                <div className="text-xs text-teal-700 tracking-widest uppercase mb-1">{c.en}</div>
                <h3 className="section-title text-lg text-ink mb-1">{c.title}</h3>
                <p className="text-sm text-mute">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
