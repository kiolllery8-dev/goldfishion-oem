import PageHeader from '@/components/PageHeader';
import { site } from '@/lib/site';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="留下需求，1 個工作天內回覆"
        subtitle="不論只是想問一下報價，或已經有具體的配方、包裝、預算方向，都歡迎寫信或加 LINE 給我們。"
      />

      <section className="container py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="section-title text-xl text-ink mb-5">聯絡資訊</h2>
          <ul className="space-y-4 text-ink">
            <li>
              <div className="text-xs text-teal-700 tracking-widest uppercase">Phone</div>
              <a href={`tel:${site.phone}`} className="text-lg hover:text-teal-700">{site.phone}</a>
            </li>
            <li>
              <div className="text-xs text-teal-700 tracking-widest uppercase">Email</div>
              <a href={`mailto:${site.email}`} className="text-lg hover:text-teal-700">{site.email}</a>
            </li>
            <li>
              <div className="text-xs text-teal-700 tracking-widest uppercase">LINE</div>
              <span className="text-lg">{site.line}</span>
            </li>
            <li>
              <div className="text-xs text-teal-700 tracking-widest uppercase">服務時段</div>
              <span className="text-lg">{site.hours}</span>
            </li>
            <li>
              <div className="text-xs text-teal-700 tracking-widest uppercase">地址</div>
              <span className="text-lg">{site.address}</span>
            </li>
          </ul>
        </div>

        <form
          className="teal-frame-thin p-7 bg-white space-y-5"
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
        >
          <h2 className="section-title text-xl text-ink">需求表單</h2>

          <div>
            <label className="text-sm text-ink block mb-1">公司／品牌名稱</label>
            <input required name="brand" className="w-full border border-line focus:border-teal-600 outline-none px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm text-ink block mb-1">聯絡人</label>
            <input required name="contact" className="w-full border border-line focus:border-teal-600 outline-none px-3 py-2 text-sm" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-ink block mb-1">Email</label>
              <input required type="email" name="email" className="w-full border border-line focus:border-teal-600 outline-none px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm text-ink block mb-1">電話</label>
              <input name="phone" className="w-full border border-line focus:border-teal-600 outline-none px-3 py-2 text-sm" />
            </div>
          </div>
          <div>
            <label className="text-sm text-ink block mb-1">想做的品項</label>
            <select name="category" className="w-full border border-line focus:border-teal-600 outline-none px-3 py-2 text-sm bg-white">
              <option>還不確定，先聊聊</option>
              <option>油類保養</option>
              <option>液態保養</option>
              <option>乳霜乳液</option>
              <option>面膜敷體</option>
              <option>潔顏沐浴</option>
              <option>其他</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-ink block mb-1">需求說明</label>
            <textarea required name="message" rows={5} className="w-full border border-line focus:border-teal-600 outline-none px-3 py-2 text-sm" placeholder="例如：想做一款清爽型精華，預算 30-50 萬，預計 8 月上架..." />
          </div>

          <button type="submit" className="btn-primary w-full justify-center">送出諮詢</button>
          <p className="text-xs text-mute">送出後系統會開啟 Email 程式；也可直接寄信至 {site.email}</p>
        </form>
      </section>
    </>
  );
}
