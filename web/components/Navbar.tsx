import Link from 'next/link';
import { site } from '@/lib/site';

const nav = [
  { href: '/about/', label: '關於我們' },
  { href: '/services/', label: '一條龍服務' },
  { href: '/products/', label: '代工品項' },
  { href: '/applications/', label: '應用領域' },
  { href: '/insights/', label: '趨勢洞察' },
  { href: '/contact/', label: '聯絡諮詢' },
];

export default function Navbar() {
  return (
    <header className="border-b border-line bg-white sticky top-0 z-40">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="teal-frame-thin px-2 py-1 text-teal-700 font-serif tracking-wider text-sm">
            {site.nameEn}
          </span>
          <span className="hidden md:inline text-ink text-sm">
            {site.nameZhShort}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-ink">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-teal-700 transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact/" className="btn-primary text-sm hidden md:inline-flex">
          免費諮詢
        </Link>

        {/* Mobile: simple menu link */}
        <Link href="/contact/" className="md:hidden text-teal-700 text-sm underline">
          聯絡
        </Link>
      </div>
    </header>
  );
}
