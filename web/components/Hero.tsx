import Link from 'next/link';
import { asset, site } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="tag-pill mb-5">ODM · OEM · One-Stop</span>
          <h1 className="section-title text-3xl md:text-5xl leading-tight text-ink mb-5">
            {site.sloganZh}
            <span className="block text-teal-700 mt-2 text-xl md:text-2xl font-normal">
              {site.slogan}
            </span>
          </h1>
          <p className="text-mute leading-relaxed max-w-xl mb-7">
            舒園國際開發（Gold Fishion）是一間整合配方研發、包裝設計、
            內容產出、行銷企劃與市場趨勢分析的化妝品代工合作夥伴。
            從一個想法，到一瓶上架商品，我們陪你走完每一步。
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact/" className="btn-primary">開始你的品牌</Link>
            <Link href="/services/" className="btn-outline">看我們能做什麼</Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] teal-frame overflow-hidden">
          {/* Video placeholder — swapped with TopView 3s loop once generated */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster={asset('/hero-poster.jpg')}
          >
            <source src={asset('/hero-loop.mp4')} type="video/mp4" />
          </video>
          <div className="img-placeholder absolute inset-0 pointer-events-none opacity-0">
            HERO LOOP
          </div>
        </div>
      </div>
    </section>
  );
}
