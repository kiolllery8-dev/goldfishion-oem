import Link from 'next/link';
import { site } from '@/lib/site';

export default function CTAStrip() {
  return (
    <section className="bg-teal-700 text-white">
      <div className="container py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="section-title text-xl md:text-2xl">
            有想做的商品，不知道從哪裡開始？
          </h3>
          <p className="text-teal-100 mt-2 text-sm">
            留下你的需求，我們 1 個工作天內回覆報價與樣品方案。
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link href="/contact/" className="bg-white text-teal-700 px-6 py-3 font-medium rounded-[2px] hover:bg-teal-50 transition-colors">
            立即諮詢
          </Link>
          <a href={`tel:${site.phone}`} className="border border-white/80 px-6 py-3 font-medium rounded-[2px] hover:bg-white/10 transition-colors">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
