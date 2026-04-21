# 舒園國際 Gold Fishion｜品牌簡報（Claude 專用）

## 品牌基本資料
- 公司全名：舒園國際開發有限公司
- 品牌名稱：舒園國際 / Gold Fishion
- 定位：化妝品 ODM / OEM 一條龍代工（從包裝設計 → 配方研發 → 內容產出 → 行銷企劃 → 市場趨勢）
- Slogan（英）：From Formula to Shelf — Beauty Crafted With You
- Slogan（中）：從配方到上架，一站打造你的美妝品牌
- 視覺：純白底 + 藍綠（teal）框線為主要識別
- 主色：#0E6A6A（teal-700），次色 #C9A14A（gold，暗喻 "Gold Fishion"）

## 技術棧
- Next.js 14 App Router + TypeScript + Tailwind
- 靜態匯出（`output: 'export'`），部署到 GitHub Pages
- 所有圖片 / 影片放 `web/public/`，檔名見 README

## 與 aus-garden 的關係
完全無關。本 repo 為獨立品牌站。請**不要**混用 aus-garden 的資料庫、素材、文案。

## 未來要做的事
- [ ] 確認公司電話、地址、Email、LINE ID，更新 `web/lib/site.ts`
- [ ] 用 TopView 生成 1080p 主視覺 + 3 秒 loop 影片
- [ ] 補上真實案例（去識別化）
- [ ] 部署前綁定自訂網域
