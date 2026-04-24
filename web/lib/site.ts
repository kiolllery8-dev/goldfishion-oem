export const site = {
  nameZh: '舒園國際開發有限公司',
  nameZhShort: '舒園國際',
  nameEn: 'Gold Fishion',
  slogan: 'From Formula to Shelf — Beauty Crafted With You',
  sloganZh: '從配方到上架，一站打造你的美妝品牌',
  tagline: 'ODM / OEM｜化妝品代工一條龍',
  phone: '04-2435-6678',
  email: 'salesgoldfishion@gmail.com',
  line: '@goldfishion',
  address: '台中市太平區精美路 122 號',
  hours: '週一至週五 09:00–18:00',
};

/** Public asset path helper. Served from root under custom domain. */
export function asset(p: string) {
  if (!p.startsWith('/')) p = '/' + p;
  return p;
}
