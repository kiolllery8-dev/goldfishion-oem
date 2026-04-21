import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white mt-16">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-ink">
        <div>
          <div className="teal-frame-thin inline-block px-3 py-1 text-teal-700 font-serif tracking-wider mb-3">
            {site.nameEn}
          </div>
          <p className="text-mute leading-relaxed">
            {site.nameZh}
            <br />
            {site.sloganZh}
          </p>
        </div>

        <div>
          <h4 className="section-title text-base text-teal-700 mb-3">服務項目</h4>
          <ul className="space-y-2 text-mute">
            <li><Link href="/services/" className="hover:text-teal-700">配方研發與樣品試作</Link></li>
            <li><Link href="/services/" className="hover:text-teal-700">包裝設計與打樣</Link></li>
            <li><Link href="/services/" className="hover:text-teal-700">內容產出與攝影</Link></li>
            <li><Link href="/services/" className="hover:text-teal-700">行銷企劃與通路策略</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="section-title text-base text-teal-700 mb-3">聯絡資訊</h4>
          <ul className="space-y-2 text-mute">
            <li>電話：{site.phone}</li>
            <li>信箱：{site.email}</li>
            <li>LINE：{site.line}</li>
            <li>時間：{site.hours}</li>
            <li>地址：{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container py-4 text-xs text-mute flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} {site.nameZh}. All rights reserved.</span>
          <span>{site.slogan}</span>
        </div>
      </div>
    </footer>
  );
}
