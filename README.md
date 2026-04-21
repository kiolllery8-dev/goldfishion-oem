# 舒園國際 Gold Fishion — ODM / OEM 一條龍代工官網

白色 + 藍綠框風格的化妝品代工官網，Next.js 14（App Router）＋ Tailwind CSS，靜態匯出部署到 GitHub Pages。

## 本機開發

```bash
cd web
npm install
npm run dev
# http://localhost:3000
```

## 靜態建置

```bash
cd web
npm run build      # 產出 web/out
```

## 部署到 GitHub Pages

1. 在 GitHub 開一個新 repo（例：`goldfishion-oem`），把本目錄內容推上去。
2. 在 repo 的 Settings → Pages → Build and deployment → Source 選 **GitHub Actions**。
3. 推到 `main` 即自動建置部署。
4. 若要綁自訂網域：把 CNAME 檔加到 `web/public/`，然後把 workflow 的 `NEXT_PUBLIC_BASE_PATH` 留空。

## 結構

```
web/
├── app/                 # App Router 頁面
│   ├── page.tsx         # 首頁
│   ├── about/           # 關於
│   ├── services/        # 一條龍服務
│   ├── products/        # 代工品項
│   ├── applications/    # 應用領域／案例
│   ├── insights/        # 趨勢洞察
│   └── contact/         # 聯絡表單
├── components/          # Navbar, Footer, Hero 等
├── lib/site.ts          # 全站文案常數
└── public/              # 圖片 / 影片（待由 TopView 產生）
```

## 圖片 / 影片產製

所有主視覺會由 TopView 產生：1080p 靜態圖 + 3 秒 loop 影片。檔名對應：

| 位置 | 靜態 | 影片 |
|---|---|---|
| Hero | `public/hero-poster.jpg` | `public/hero-loop.mp4` |
| 三大能力 | `public/feature-lab.jpg` / `feature-custom.jpg` / `feature-instruments.jpg` | — |
| 關於區 | `public/about-intro.jpg` / `about-team.jpg` | — |
| 品項類別 | `public/cat-oils.jpg` / `cat-liquids.jpg` / `cat-creams.jpg` / `cat-masks.jpg` / `cat-others.jpg` | — |
