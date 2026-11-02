const translations = {
  th: {
    pageTitle: "ไพโรจน์ค้าเหล็กเก่า - สังขละบุรี กาญจนบุรี",
    shopName: "ไพโรจน์ค้าเหล็กเก่า",
    subTitle: "สังขละบุรี กาญจนบุรี",
    category: "ร้านขายวัสดุก่อสร้างและรับซื้อเศษเหล็ก",
    tagline: "รับซื้อ-ขาย เศษเหล็ก เหล็กใหม่ เกรด A/B และอุปกรณ์ก่อสร้างให้เช่า",
    callUs: "โทร 087-985-3774",
    getDirections: "เปิด Google Maps",
    hoursTitle: "🕒 เวลาทำการ",
    hoursValue: "เปิดให้บริการ 24 ชั่วโมง",
    addressTitle: "📍 ที่อยู่ร้าน",
    addressValue: "หมู่บ้าน บ้านใหม่น้ำ, เลขที่ 448, ต.หนองลู อ.สังขละบุรี จ.กาญจนบุรี 71240",
    viewMap: "ดูแผนที่บน Google Maps →",
    servicesTitle: "🛠️ สินค้าและบริการ",
    service1: "✓ รับซื้อเศษเหล็ก และขายเศษเหล็กราคาดี",
    service2: "✓ ขายเหล็กใหม่ เกรด A และ เกรด B",
    service3: "✓ อุปกรณ์ก่อสร้าง และเครื่องมือช่างให้เช่า",
    service4: "✓ บริการจัดส่งในพื้นที่สังขละบุรีและใกล้เคียง",
    callShort: "โทรทันที",
    mapShort: "แผนที่ร้าน"
  },
  my: {
    pageTitle: "ပိုင်ရော့ သံဟောင်းနှင့် ဆောက်လုပ်ရေးပစ္စည်းဆိုင်",
    shopName: "ပိုင်ရော့ သံဟောင်းဆိုင်",
    subTitle: "စံခလဘူရီ၊ ကန်ချနဘူရီ",
    category: "ဆောက်လုပ်ရေးပစ္စည်းနှင့် သံဟောင်း ရောင်းဝယ်ရေး",
    tagline: "သံဟောင်း ရောင်းဝယ်ခြင်း၊ သံသစ် Grade A/B နှင့် ဆောက်လုပ်ရေးပစ္စည်းများ ငှားရမ်းခြင်း",
    callUs: "ဖုန်းခေါ်ရန် 087-985-3774",
    getDirections: "Google Maps ဖြင့် သွားရန်",
    hoursTitle: "🕒 ဖွင့်လှစ်ချိန်",
    hoursValue: "၂၄ နာရီ ဖွင့်လှစ်ထားပါသည်",
    addressTitle: "📍 ဆိုင်လိပ်စာ",
    addressValue: "အမှတ် ၄၄၈၊ ဘာမိုင်းနမ်ရွာ၊ နောင်လူ၊ စံခလဘူရီ၊ ကန်ချနဘူရီ ၇၁၂၄၀",
    viewMap: "Google Maps တွင်ကြည့်ရန် →",
    servicesTitle: "🛠️ ဝန်ဆောင်မှုများ",
    service1: "✓ သံဟောင်း ဝယ်ယူ/ရောင်းချခြင်း",
    service2: "✓ သံသစ် (Grade A / Grade B) ရောင်းချခြင်း",
    service3: "✓ ဆောက်လုပ်ရေးသုံး ကိရိယာများ ငှားရမ်းခြင်း",
    service4: "✓ စံခလဘူရီ မြို့နယ်အတွင်း ပို့ဆောင်ပေးခြင်း",
    callShort: "ဖုန်းခေါ်ရန်",
    mapShort: "လမ်းကြောင်း"
  },
  en: {
    pageTitle: "Secondhand Steel by Pairot - Sangkhla Buri",
    shopName: "Secondhand Steel by Pairot",
    subTitle: "Sangkhla Buri, Kanchanaburi",
    category: "Scrap Steel & Building Materials",
    tagline: "Buy & sell scrap steel, new steel (Grade A / Grade B), and construction equipment rentals",
    callUs: "Call 087-985-3774",
    getDirections: "Open Google Maps",
    hoursTitle: "🕒 Business Hours",
    hoursValue: "Open 24 Hours",
    addressTitle: "📍 Location",
    addressValue: "448 Ban Mai Nam, Nong Lu, Sangkhla Buri District, Kanchanaburi 71240",
    viewMap: "View on Google Maps →",
    servicesTitle: "🛠️ Our Services",
    service1: "✓ Buy & sell scrap steel at fair prices",
    service2: "✓ New steel supply (Grade A & Grade B)",
    service3: "✓ Construction equipment for rent",
    service4: "✓ Local delivery service in Sangkhla Buri",
    callShort: "Call Now",
    mapShort: "Directions"
  }
};

function switchLanguage(lang) {
  if (!translations[lang]) return;

  localStorage.setItem('selectedLang', lang);

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeBtn = Array.from(document.querySelectorAll('.lang-btn')).find(btn => 
    btn.getAttribute('onclick').includes(`'${lang}'`)
  );
  if (activeBtn) activeBtn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Default language is Thai ('th'), falls back to stored preference
  const savedLang = localStorage.getItem('selectedLang') || 'th';
  switchLanguage(savedLang);
});