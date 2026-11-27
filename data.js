/* ===== محتوى الموقع — عدّل من هون بس ===== */

/* الفيديوهات (مونتاج وموشن) — مرفوعة على يوتيوب «غير مُدرج»
   id    = رمز فيديو يوتيوب
   type  = "edit" مونتاج  |  "motion" موشن
   shape = "wide" عرضي 16:9  |  "tall" طولي 9:16
   thumb = صورة الغلاف (assets/video)
   الفيديو الأول بالقائمة = الفيديو المميز بأول الصفحة */
const VIDEOS = [
  { id: "RNFH9c0QHDE", type: "motion", shape: "tall", thumb: "v7", ar: "الرف اللي قدّام عينك", en: "The Shelf in Front of Your Eyes", roleAr: "سلسلة سردّاد • موشن جرافيك", roleEn: "Sarddaad series • Motion Graphics" },
  { id: "8CToh3Jvgwg", type: "motion", shape: "tall", thumb: "v6", ar: "ليش الأسعار بتخلص بـ99؟", en: "Why Prices End in .99", roleAr: "سلسلة سردّاد • موشن جرافيك", roleEn: "Sarddaad series • Motion Graphics" },
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
  /* مرتبة من الأقوى للأضعف — shape "tall" = غلاف ريل، video = بيشغّل الريل */
  { id: "sard-ep01-1", shape: "tall", video: "8CToh3Jvgwg", ar: "غلاف ريل — دماغك شاف 9", en: "Reel Cover — Your Brain Saw 9" },
  { id: "251559283", slug: "_",    ar: "كراج تصليح السيارات",        en: "Car Repair Garage" },
  { id: "252242653", slug: "_",    ar: "مانجا طبيعي",                en: "Natural Mango" },
  { id: "252201773", slug: "_",    ar: "ميلك شيك",                   en: "Milkshake" },
  { id: "251873503", slug: "Iced-latte", ar: "آيس لاتيه",           en: "Iced Latte" },
  { id: "sard-ep01-2", shape: "tall", video: "8CToh3Jvgwg", ar: "غلاف ريل — الدماغ عليه سعر", en: "Reel Cover — A Price on the Brain" },
  { id: "247653955", slug: "Burger-Restaurant-Social-Media-Visual-Identity", ar: "هوية مطعم برجر", en: "Burger Restaurant Identity" },
  { id: "248387591", slug: "_",    ar: "موجودين بكل مكان",           en: "We're Everywhere" },
  { id: "sard-ep01-3", shape: "tall", video: "8CToh3Jvgwg", ar: "غلاف ريل — إيد وسعر", en: "Reel Cover — Hand & Price" },
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

/* الأدوات للبيع
   status = "soon" قريباً (زر: بلّغني)  |  "available" متوفر
   buy    = رابط صفحة الدفع (Lemon Squeezy / Payhip ...). إذا فاضي، الطلب بيكون بالواتساب
   icon   = wave | beat | box | frame | subs | guide
   badge  = شارة اختيارية فوق البطاقة */
const PRODUCTS = [
  { id: "quietcut", icon: "wave", price: 9, status: "soon", buy: "", badgeAr: "الأقوى", badgeEn: "Flagship",
    ar: "QuietCut — قص الصمت", en: "QuietCut — Silence Cutter",
    descAr: "بتحطله فيديو الكلام، وبيطلعلك تايملاين مقصوص جاهز بدون فراغات.", descEn: "Drop in a talking video, get a cut timeline with the silences removed.",
    ptsAr: ["بيكتشف الصمت تلقائياً", "تايملاين بكبسة وحدة", "بيوفّر ساعات بكل فيديو"], ptsEn: ["Auto silence detection", "One-click timeline import", "Saves hours per video"] },
  { id: "subsfixer", icon: "subs", price: 8, status: "soon", buy: "",
    ar: "Arabic Subs Fixer", en: "Arabic Subs Fixer",
    descAr: "ترجمة عربية بتطلع صح بدافنشي: الاتجاه والأرقام والتشكيل.", descEn: "Arabic subtitles that render right in Resolve: direction, numbers, diacritics.",
    ptsAr: ["بيصلّح ملفات SRT", "ستايلات نص جاهزة", "مخصص للعربي"], ptsEn: ["Fixes SRT files", "Ready text styles", "Built for Arabic"] },
  { id: "toolbox", icon: "box", price: 7, status: "soon", buy: "",
    ar: "Editor's Toolbox", en: "Editor's Toolbox",
    descAr: "سكربتات بكبسة وحدة للخطوات المملة اللي بتتكرر بكل مشروع.", descEn: "One-click scripts for the boring steps you repeat every project.",
    ptsAr: ["ترتيب الميديا", "تلوين الكليبات", "فصول يوتيوب من الماركرز"], ptsEn: ["Organize media", "Color-code clips", "YouTube chapters from markers"] },
  { id: "beatmarker", icon: "beat", price: 5, status: "soon", buy: "",
    ar: "BeatMarker — ماركرز عالإيقاع", en: "BeatMarker",
    descAr: "بتحطله الأغنية، وبيحط ماركر على كل بيت عشان تقص عالإيقاع.", descEn: "Drop in the song, get a marker on every beat for rhythm cuts.",
    ptsAr: ["كشف الإيقاع تلقائياً", "مثالي للريلز", "بيشتغل مع أي أغنية"], ptsEn: ["Auto beat detection", "Perfect for reels", "Works with any track"] },
  { id: "safezone", icon: "frame", price: 3, status: "soon", buy: "",
    ar: "Safe-Zone Pack", en: "Safe-Zone Pack",
    descAr: "حدود واجهة تيك توك وريلز وشورتس عشان نصّك ما يختفي تحت الأزرار.", descEn: "TikTok, Reels and Shorts UI guides so your text never hides under buttons.",
    ptsAr: ["9:16 و 4:5", "دبل كليك وبيشتغل", "شفاف وخفيف"], ptsEn: ["9:16 and 4:5", "Double-click install", "Transparent & light"] },
  { id: "coach", icon: "guide", price: 12, status: "soon", buy: "",
    ar: "Resolve Coach", en: "Resolve Coach",
    descAr: "دليل تفاعلي: «بدي أعمل X» وبيعطيك الخطوات والاختصارات بالضبط.", descEn: "Interactive guide: \"I want to do X\" → exact steps and shortcuts.",
    ptsAr: ["وصفات جاهزة", "بالعربي", "للمبتدئين والمحترفين"], ptsEn: ["Ready recipes", "In Arabic", "Beginner to pro"] },
];

/* التواصل */
const CONTACT = {
  whatsapp: "962785730069",
  email: "motasmahmadnamrawei2004@gmail.com",
};
