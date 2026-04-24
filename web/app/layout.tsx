import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { site } from '@/lib/site';

const SITE_URL = 'https://goldfishion.intelliverse.tw';
const DEFAULT_OG = `${SITE_URL}/hero-poster.jpg`;

const keywords = [
  '化妝品代工', '保養品代工', '化妝品 ODM', '化妝品 OEM',
  '一條龍代工', '台中化妝品代工', '台中保養品代工',
  '精油代工', '面膜代工', '乳霜代工', '精華液代工',
  'ODM OEM', 'GMP 化妝品廠', '化妝品工廠',
  '保養品 ODM', '保養品 OEM', '品牌代工',
  '舒園國際', 'Gold Fishion', '舒園國際開發',
  'cosmetics OEM Taiwan', 'skincare ODM Taiwan',
  '包裝設計代工', '配方研發', '美妝品牌代工',
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.nameEn}｜${site.tagline}｜舒園國際`,
    template: `%s｜${site.nameEn} 舒園國際`,
  },
  description: `${site.nameZh} — ${site.sloganZh}。台灣化妝品 ODM / OEM 一條龍代工：配方研發、包裝設計、內容產出、行銷企劃、量產出貨。台中設廠，MOQ 友善，新品牌也能開案。`,
  keywords,
  authors: [{ name: site.nameZh }],
  creator: site.nameZh,
  publisher: site.nameZh,
  applicationName: site.nameEn,
  category: '化妝品代工 / Cosmetics Manufacturing',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: SITE_URL,
    siteName: site.nameEn,
    title: `${site.nameEn}｜${site.tagline}`,
    description: `${site.sloganZh}。化妝品 ODM / OEM 一條龍代工：配方研發、包裝設計、內容產出、行銷企劃。`,
    images: [
      {
        url: DEFAULT_OG,
        width: 1920,
        height: 1071,
        alt: `${site.nameEn} - ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.nameEn}｜${site.tagline}`,
    description: site.sloganZh,
    images: [DEFAULT_OG],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'eBQecTnxY_7xwmP5sqWgCnpTVLZg47BsjpWEtGVn-Uk',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
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
        <StructuredData />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
