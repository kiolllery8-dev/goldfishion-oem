import { site } from '@/lib/site';

const SITE_URL = 'https://goldfishion.intelliverse.tw';

/**
 * JSON-LD structured data for SEO. Emits Organization + LocalBusiness + WebSite.
 * Google uses these to power the knowledge panel and rich results.
 */
export default function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: site.nameZh,
    alternateName: [site.nameEn, site.nameZhShort],
    url: SITE_URL,
    logo: `${SITE_URL}/hero-poster.jpg`,
    image: `${SITE_URL}/hero-poster.jpg`,
    description: `${site.nameZh}（${site.nameEn}）是台灣化妝品 ODM / OEM 一條龍代工合作夥伴。${site.sloganZh}——提供配方研發、包裝設計、內容產出、行銷企劃與量產出貨的整合服務。`,
    telephone: '+886-4-2435-6678',
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '精美路122號',
      addressLocality: '太平區',
      addressRegion: '台中市',
      addressCountry: 'TW',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Approximate centroid for 台中市太平區精美路
      latitude: 24.1260,
      longitude: 120.7210,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'Taiwan' },
      { '@type': 'Country', name: 'Japan' },
      { '@type': 'Country', name: 'South Korea' },
      { '@type': 'Country', name: 'Hong Kong' },
    ],
    knowsAbout: [
      '化妝品代工', '保養品代工', '配方研發', '包裝設計',
      'ODM', 'OEM', 'GMP', '美妝品牌孵化', '行銷企劃',
    ],
    slogan: site.sloganZh,
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.nameEn,
    description: site.sloganZh,
    inLanguage: 'zh-Hant',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: '化妝品 ODM / OEM 一條龍代工',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: 'Taiwan',
    description:
      '舒園國際 Gold Fishion 提供化妝品 ODM / OEM 一站式代工服務：從市場洞察、配方研發、包裝設計、內容產出、量產品保，到通路上架與行銷企劃全包。',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '代工品項',
      itemListElement: [
        { '@type': 'OfferCatalog', name: '油類保養（精華油、按摩油、頭皮油、卸妝油）' },
        { '@type': 'OfferCatalog', name: '液態保養（化妝水、精華液、噴霧、卸妝液）' },
        { '@type': 'OfferCatalog', name: '乳霜乳液（面霜、身體乳、護手霜、眼霜）' },
        { '@type': 'OfferCatalog', name: '面膜敷體（片狀、泥膜、凍膜、腳膜）' },
        { '@type': 'OfferCatalog', name: '潔顏沐浴、香氛、寵物保養等其他品項' },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  );
}
