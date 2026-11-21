/* ===== محتوى الموقع — عدّل من هون بس ===== */

/* الفيديوهات (مونتاج وموشن) — مرفوعة على يوتيوب «غير مُدرج»
   id    = رمز فيديو يوتيوب
   type  = "edit" مونتاج  |  "motion" موشن
   shape = "wide" عرضي 16:9  |  "tall" طولي 9:16
   thumb = صورة الغلاف (assets/video)
   الفيديو الأول بالقائمة = الفيديو المميز بأول الصفحة */
const VIDEOS = [
  { id: "aLlZvtC4z5c", type: "motion", shape: "tall", thumb: "v4", ar: "مراحل المونتاج — الحلقة ١", en: "Editing Stages — Ep. 1", roleAr: "كتابة • مونتاج • موشن", roleEn: "Script • Edit • Motion" },
  { id: "O2lhqY7skkA", type: "motion", shape: "tall", thumb: "v2", ar: "افهم قبل ما تقص", en: "Understand Before You Cut", roleAr: "مونتاج • موشن جرافيك", roleEn: "Edit • Motion Graphics" },
  { id: "HkuNkc4wdu8", type: "edit",   shape: "tall", thumb: "v3", ar: "لستَ مطالباً بالكمال", en: "You Don't Have to Be Perfect", roleAr: "تصوير • مونتاج", roleEn: "Filming • Edit" },
  { id: "hRDvojTwt6A", type: "motion", shape: "tall", thumb: "v1", ar: "ريل أدوات المونتاج", en: "Editing Tools Reel", roleAr: "موشن جرافيك", roleEn: "Motion Graphics" },
  { id: "XlvsiSecJ5U", type: "motion", shape: "tall", thumb: "v5", ar: "مش مطلوب منك تكون كامل", en: "Nobody Expects Perfect", roleAr: "مونتاج • موشن جرافيك", roleEn: "Edit • Motion Graphics" },
];

/* السلايدر بأول الصفحة — أقوى ٣ أعمال (kind: "video" أو "graphic"، ref = id من القوائم) */
const FEATURED = [
  { kind: "video",   ref: "aLlZvtC4z5c" },
  { kind: "graphic", ref: "251559283" },
  { kind: "video",   ref: "O2lhqY7skkA" },
];

/* الجرافيك ديزاين — من Behance */
const BEHANCE = "https://www.behance.net/motasamnemrawei";
const GRAPHIC = [
  /* مرتبة من الأقوى للأضعف */
  { id: "251559283", slug: "_",    ar: "كراج تصليح السيارات",        en: "Car Repair Garage" },
  { id: "252242653", slug: "_",    ar: "مانجا طبيعي",                en: "Natural Mango" },
  { id: "252201773", slug: "_",    ar: "ميلك شيك",                   en: "Milkshake" },
  { id: "251873503", slug: "Iced-latte", ar: "آيس لاتيه",           en: "Iced Latte" },
  { id: "247653955", slug: "Burger-Restaurant-Social-Media-Visual-Identity", ar: "هوية مطعم برجر", en: "Burger Restaurant Identity" },
  { id: "248387591", slug: "_",    ar: "موجودين بكل مكان",           en: "We're Everywhere" },
  { id: "251874543", slug: "_",    ar: "يلا نروق",                   en: "Let's Chill" },
  { id: "248387501", slug: "_",    ar: "أكيد جوعان",                 en: "You Must Be Hungry" },
  { id: "252201793", slug: "_",    ar: "هوية بصرية",                 en: "Visual Identity" },
  { id: "252605089", slug: "(-)",  ar: "مخاطرة",                     en: "Risk" },
  { id: "248387745", slug: "_",    ar: "بوستر مباراة أتلتيكو وبرشلونة", en: "Atlético vs Barcelona Poster" },
  { id: "252605225", slug: "_",    ar: "خطوتك الأولى نحو التداول",   en: "Your First Step into Trading" },
  { id: "253841933", slug: "_",    ar: "دفتر تخرج",                 en: "Graduation Book" },
  { id: "248387551", slug: "_",    ar: "تحذير: في قنبلة",            en: "Warning: Bomb Inside" },
  { id: "252605203", slug: "-(-)", ar: "التحليل الفني",              en: "Technical Analysis" },
  { id: "248387627", slug: "_",    ar: "تصميم سوشل ميديا",           en: "Social Media Design" },
  { id: "252228069", slug: "-3",   ar: "إعلان بداية الصيف",          en: "Summer Kickoff Ad" },
];

/* التواصل */
const CONTACT = {
  whatsapp: "962785730069",
  email: "motasmahmadnamrawei2004@gmail.com",
};
