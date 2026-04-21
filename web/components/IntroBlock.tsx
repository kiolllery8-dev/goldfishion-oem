import Link from 'next/link';
import { asset } from '@/lib/site';

export default function IntroBlock() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-line">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div
          className="teal-frame aspect-[4/3] img-placeholder overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${asset('/about-intro.jpg')})` }}
        />
        <div>
          <span className="tag-pill">About Us</span>
          <h2 className="section-title text-2xl md:text-3xl mt-4 text-ink leading-snug">
            不是只做代工，
            <br className="hidden md:block" />
            是陪你一起把品牌做起來。
          </h2>
          <p className="text-mute mt-5 leading-relaxed">
            舒園國際（Gold Fishion）成立於台灣，深耕化妝品 ODM / OEM 代工。
            我們相信一個好品牌不只需要一支好配方，更需要對的包裝、對的故事、
            對的上架策略。因此我們從單純製造，延伸到品牌顧問、內容產製與
            通路規劃，讓合作夥伴少走一大段冤枉路。
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink">
            <li className="flex gap-2"><span className="text-teal-700">▎</span> GMP / ISO 22716 等級品保與文件齊備</li>
            <li className="flex gap-2"><span className="text-teal-700">▎</span> 最小起訂量（MOQ）友善，新品牌也能開案</li>
            <li className="flex gap-2"><span className="text-teal-700">▎</span> 一位窗口，從配方到上架一路對接</li>
          </ul>
          <Link href="/about/" className="btn-outline mt-7">更認識我們</Link>
        </div>
      </div>
    </section>
  );
}
