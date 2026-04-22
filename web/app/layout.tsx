import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: `${site.nameEn}｜${site.tagline}`,
  description: `${site.nameZh} — ${site.sloganZh}。化妝品 ODM / OEM 一條龍：包裝設計、配方研發、內容產出、行銷企劃、市場趨勢分析。`,
  metadataBase: new URL('https://goldfishion.intelliverse.tw'),
  verification: {
    google: 'eBQecTnxY_7xwmP5sqWgCnpTVLZg47BsjpWEtGVn-Uk',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
