const T = {
  ar: {
    logo: 'معتصم<span>.</span>', navWork: "أعمالي", navAbout: "نبذة", navContact: "تواصل",
    heroEyebrow: "مونتاج • موشن جرافيك • جرافيك ديزاين",
    heroTitle: "بحوّل فكرتك لصورة <em>بتعلق بالذاكرة</em>",
    heroLead: "معتصم النمراوي — صانع محتوى بصري من الأردن.",
    heroBtnWork: "شوف أعمالي", heroBtnTalk: "احكي معي",
    workTitle: "أعمالي", tabVideo: "مونتاج وموشن", tabGraphic: "جرافيك ديزاين",
    fAll: "الكل", fEdit: "مونتاج", fMotion: "موشن",
    behanceAll: "كل الأعمال على Behance ↗",
    aboutTitle: "نبذة",
    bio: "معتصم النمراوي — صانع محتوى بصري (تصوير، مونتاج، وموشن جرافيك). أصنع فيديوهات وتصاميم تجمع بين الدقة الفنية والهوية البصرية المؤثرة لتقديم رسالتك بأفضل صورة.",
    s1: "تصوير", s2: "مونتاج", s3: "موشن جرافيك", s4: "جرافيك ديزاين", s5: "هوية بصرية",
    contactTitle: "عندك مشروع؟ <em>خلينا نحكي.</em>",
    contactLead: "بردّ عليك بأسرع وقت — واتساب أو إيميل، اللي بريحك.",
    btnWa: "واتساب", btnMail: "إيميل", footName: "معتصم النمراوي",
    soon: "قريباً", navTools: "أدوات", bHome: "الرئيسية", toolsTitle: "أدوات بتسرّع شغلك", toolsLead: "إضافات صغيرة للمونتيرية والمصممين، بتوفّر ساعات من الشغل المتكرر.", perk1: "بتشتغل على دافنشي المجاني", perk2: "أسعار رمزية", perk3: "دعم بالعربي", pSoon: "قريباً", pNotify: "بلّغني لما تنزل", pBuy: "اشتري الآن", pOrder: "اطلبها", pNotifyMsg: "مرحبا معتصم، بدي تبلغني لما تنزل أداة", pOrderMsg: "مرحبا معتصم، بدي أشتري أداة", slBadge: "الأبرز", slPlay: "شغّل الفيديو ▶", slView: "شوف التصميم ↗", edit: "مونتاج", motion: "موشن",
    waMsg: "مرحبا معتصم، شفت موقعك وحابب أحكي معك عن مشروع",
    title: "معتصم النمراوي | Portfolio",
  },
  en: {
    logo: 'Moatasem<span>.</span>', navWork: "Work", navAbout: "About", navContact: "Contact",
    heroEyebrow: "Video Editing • Motion Graphics • Graphic Design",
    heroTitle: "Turning your idea into visuals <em>people remember</em>",
    heroLead: "Moatasem Al-Namrawi — Visual Content Creator based in Jordan.",
    heroBtnWork: "See my work", heroBtnTalk: "Let's talk",
    workTitle: "Selected Work", tabVideo: "Editing & Motion", tabGraphic: "Graphic Design",
    fAll: "All", fEdit: "Editing", fMotion: "Motion",
    behanceAll: "All projects on Behance ↗",
    aboutTitle: "About",
    bio: "Moatasem Al-Namrawi — Visual Content Creator (Videography, Video Editing & Motion Graphics). Crafting videos and designs that blend technical precision with compelling visual storytelling.",
    s1: "Videography", s2: "Video Editing", s3: "Motion Graphics", s4: "Graphic Design", s5: "Visual Identity",
    contactTitle: "Got a project? <em>Let's talk.</em>",
    contactLead: "I reply fast — WhatsApp or email, whichever suits you.",
    btnWa: "WhatsApp", btnMail: "Email", footName: "Moatasem Al-Namrawi",
    soon: "Coming soon", navTools: "Tools", bHome: "Home", toolsTitle: "Tools that speed up your work", toolsLead: "Small add-ons for editors and designers that save hours of repetitive work.", perk1: "Works on DaVinci Resolve FREE", perk2: "Fair prices", perk3: "Support in Arabic", pSoon: "Coming soon", pNotify: "Notify me", pBuy: "Buy now", pOrder: "Order", pNotifyMsg: "Hi Moatasem, let me know when this tool is out:", pOrderMsg: "Hi Moatasem, I want to buy", slBadge: "Featured", slPlay: "Play video ▶", slView: "View design ↗", edit: "Editing", motion: "Motion",
    waMsg: "Hi Moatasem, I saw your portfolio and I'd like to talk about a project",
    title: "Moatasem Al-Namrawi | Portfolio",
  },
};

let lang = localStorage.getItem("lang");
if (lang !== "ar" && lang !== "en") lang = "ar";
const esc = (x) => String(x ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const okId = (x) => /^[\w-]{6,20}$/.test(x || "");
let filter = "all";

const $ = (s) => document.querySelector(s);
const PLAY = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M8 5.5v13l11-6.5z"/></svg>';

function renderVideos() {
  const t = T[lang];
  const list = VIDEOS.filter((v) => filter === "all" || v.type === filter);
  $("#videos").innerHTML = list.map((v) => {
    const tall = v.shape === "tall" ? " tall" : "";
    const role = lang === "ar" ? v.roleAr : v.roleEn;
    const meta = `<div class="meta"><div><h3>${esc(v[lang])}</h3>${role ? `<p class="role">${esc(role)}</p>` : ""}</div><span class="tag">${t[v.type]}</span></div>`;
    if (!okId(v.id)) return `<article class="card soon${tall}"><div class="thumb">${t.soon}</div>${meta}</article>`;
    return `<article class="card${tall}">
      <button class="thumb" data-id="${esc(v.id)}" data-shape="${v.shape}" aria-label="${esc(v[lang])}">
        <img src="${v.thumb ? `assets/video/${esc(v.thumb)}.webp` : `https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg`}" alt="" loading="lazy">
        <span class="play">${PLAY}</span>
      </button>${meta}</article>`;
  }).join("");
}

let slideIdx = 0;
function renderSlider() {
  const t = T[lang];
  const items = FEATURED.map((x) => {
    if (x.kind === "video") {
      const v = VIDEOS.find((v) => v.id === x.ref && okId(v.id)); if (!v) return null;
      const img = v.thumb ? `assets/video/${esc(v.thumb)}.webp` : `https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg`;
      return { img, shape: v.shape, title: v[lang], kicker: t[v.type], role: lang === "ar" ? v.roleAr : v.roleEn,
        media: `<button class="thumb" data-id="${esc(v.id)}" data-shape="${esc(v.shape)}" aria-label="${esc(v[lang])}"><img src="${img}" alt=""><span class="play">${PLAY}</span></button>`,
        cta: `<button class="btn primary thumb-cta" data-id="${esc(v.id)}" data-shape="${esc(v.shape)}">${t.slPlay}</button>` };
    }
    const g = GRAPHIC.find((g) => g.id === x.ref); if (!g) return null;
    const url = `https://www.behance.net/gallery/${esc(g.id)}/${encodeURIComponent(g.slug)}`;
    const img = `assets/graphic/${esc(g.id)}.webp`;
    return { img, shape: "wide", title: g[lang], kicker: t.tabGraphic, role: "",
      media: `<a href="${url}" target="_blank" rel="noopener" aria-label="${esc(g[lang])}"><img src="${img}" alt="${esc(g[lang])}"></a>`,
      cta: `<a class="btn primary" href="${url}" target="_blank" rel="noopener">${t.slView}</a>` };
  }).filter(Boolean);
  $("#slides").innerHTML = items.map((it, i) => `
    <article class="slide${i === slideIdx ? " on" : ""}" aria-roledescription="slide" aria-label="${i + 1} / ${items.length}"${i === slideIdx ? "" : " inert"}>
      <img class="s-bg" src="${it.img}" alt="">
      <div class="s-info">
        <span class="s-kicker">${t.slBadge} • ${esc(it.kicker)}</span>
        <h2>${esc(it.title)}</h2>
        ${it.role ? `<p class="role">${esc(it.role)}</p>` : ""}
        <div class="cta">${it.cta}</div>
      </div>
      <div class="s-media ${it.shape === "tall" ? "tall" : "wide"}">${it.media}</div>
    </article>`).join("");
  $("#sthumbs").innerHTML = items.map((it, i) => `
    <button role="tab" aria-selected="${i === slideIdx}" class="${i === slideIdx ? "on" : ""}" data-i="${i}" aria-label="${esc(it.title)}">
      <img src="${it.img}" alt=""><span class="bar"></span>
    </button>`).join("");
}
function goSlide(i) {
  const n = $("#slides").children.length; if (!n) return;
  slideIdx = (i + n) % n;
  [...$("#slides").children].forEach((el, k) => { el.classList.toggle("on", k === slideIdx); el.inert = k !== slideIdx; });
  [...$("#sthumbs").children].forEach((el, k) => { el.classList.toggle("on", k === slideIdx); el.setAttribute("aria-selected", k === slideIdx); });
}

const ICONS = {
  wave: '<path d="M3 12h2M7 8v8M11 5v14M15 9v6M19 7v10M21 12h0"/>',
  beat: '<path d="M4 18V6M9 18v-5M14 18V9M19 18v-8"/><circle cx="4" cy="5" r="1.5"/><circle cx="14" cy="8" r="1.5"/>',
  box: '<path d="M3 8h18v11H3zM8 8V5h8v3M3 13h18"/>',
  frame: '<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M9 7h6M9 17h3"/>',
  subs: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 15h4M13 15h4M7 11h10"/>',
  guide: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
};
function renderProducts() {
  const t = T[lang];
  $("#products").innerHTML = PRODUCTS.map((p) => {
    const name = p[lang], desc = lang === "ar" ? p.descAr : p.descEn, pts = (lang === "ar" ? p.ptsAr : p.ptsEn) || [];
    const badge = lang === "ar" ? p.badgeAr : p.badgeEn;
    const soon = p.status !== "available";
    let href, label;
    if (soon) { href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t.pNotifyMsg + " " + name)}`; label = t.pNotify; }
    else if (/^https:\/\//.test(p.buy || "")) { href = p.buy; label = t.pBuy; }
    else { href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t.pOrderMsg + " " + name)}`; label = t.pOrder; }
    return `<article class="product${badge ? " hot" : ""}">
      ${badge ? `<span class="p-badge">${esc(badge)}</span>` : ""}
      <div class="p-top"><span class="p-icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[p.icon] || ICONS.box}</svg></span>
        ${soon ? `<span class="p-status">${t.pSoon}</span>` : ""}</div>
      <h3>${esc(name)}</h3>
      <p class="p-desc">${esc(desc)}</p>
      <ul class="p-pts">${pts.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      <div class="p-foot"><span class="p-price"><small>$</small>${Number(p.price) || ""}</span>
        <a class="btn ${soon ? "ghost" : "primary"}" href="${esc(href)}" target="_blank" rel="noopener">${label}</a></div>
    </article>`;
  }).join("");
}

function renderGraphic() {
  $("#graphic").innerHTML = GRAPHIC.map((g) => `
    <a class="g-card" href="https://www.behance.net/gallery/${esc(g.id)}/${encodeURIComponent(g.slug)}" target="_blank" rel="noopener">
      <img src="assets/graphic/${esc(g.id)}.webp" alt="${esc(g[lang])}" loading="lazy" width="600" height="469">
      <figcaption>${esc(g[lang])}</figcaption>
    </a>`).join("");
}

function applyLang() {
  const t = T[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t.title;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.innerHTML = t[el.dataset.i18n]; });
  $("#lang").textContent = lang === "ar" ? "EN" : "عربي";
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t.waMsg)}`;
  document.querySelectorAll(".wa-link").forEach((a) => (a.href = wa));
  document.querySelectorAll(".mail-link").forEach((a) => (a.href = `mailto:${CONTACT.email}`));
  document.querySelectorAll(".behance-link").forEach((a) => (a.href = BEHANCE));
  renderVideos();
  renderGraphic();
  renderSlider();
  renderProducts();
}

$("#lang").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", lang);
  applyLang();
});

/* tabs */
document.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach((x) => { x.classList.toggle("active", x === b); x.setAttribute("aria-selected", x === b); });
  document.querySelectorAll(".panel").forEach((p) => {
    const on = p.id === "panel-" + b.dataset.tab;
    p.hidden = !on; p.classList.toggle("active", on);
  });
}));

/* filters */
$("#filters").addEventListener("click", (e) => {
  const c = e.target.closest(".chip"); if (!c) return;
  filter = c.dataset.filter;
  document.querySelectorAll(".chip").forEach((x) => x.classList.toggle("active", x === c));
  renderVideos();
});

/* video modal */
const modal = $("#modal"), frame = $("#frame"), box = $(".modal-box");
let lastFocus;
let curVid = -1;
function playVid(i) {
  const list = VIDEOS.filter((v) => okId(v.id)); if (!list.length) return;
  curVid = (i + list.length) % list.length; const v = list[curVid];
  box.classList.toggle("tall", v.shape === "tall");
  frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${esc(v.id)}?autoplay=1&rel=0&modestbranding=1&playsinline=1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" title="video"></iframe>`;
}
const openVideo = (e) => {
  const b = e.target.closest("button.thumb, button.thumb-cta"); if (!b || !okId(b.dataset.id)) return;
  lastFocus = b;
  box.classList.toggle("tall", b.dataset.shape === "tall");
  frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" title="video"></iframe>`;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  curVid = VIDEOS.filter((v) => okId(v.id)).findIndex((v) => v.id === b.dataset.id);
  $("#close").focus();
};
$("#mprev").addEventListener("click", () => playVid(curVid + (lang === "ar" ? 1 : -1)));
$("#mnext").addEventListener("click", () => playVid(curVid + (lang === "ar" ? -1 : 1)));
document.addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "ArrowLeft") $("#mprev").click();
  if (e.key === "ArrowRight") $("#mnext").click();
});
$("#videos").addEventListener("click", openVideo);
$("#slides").addEventListener("click", openVideo);

/* slider controls: thumbs, progress-driven autoplay, pause on hover/focus/hidden, swipe, arrows */
const slider = $("#slider");
$("#sthumbs").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) goSlide(+b.dataset.i); });
$("#sthumbs").addEventListener("animationend", () => goSlide(slideIdx + 1));
const pause = (on) => slider.classList.toggle("paused", on);
slider.addEventListener("mouseenter", () => pause(true));
slider.addEventListener("mouseleave", () => pause(false));
slider.addEventListener("focusin", () => pause(true));
slider.addEventListener("focusout", () => pause(false));
document.addEventListener("visibilitychange", () => pause(document.hidden));
let sx = null;
slider.addEventListener("pointerdown", (e) => { sx = e.clientX; });
slider.addEventListener("pointerup", (e) => {
  if (sx === null) return; const dx = e.clientX - sx; sx = null;
  if (Math.abs(dx) > 45) goSlide(slideIdx + ((dx < 0) === (lang === "ar") ? -1 : 1));
});
slider.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goSlide(slideIdx + (lang === "ar" ? 1 : -1));
  if (e.key === "ArrowRight") goSlide(slideIdx + (lang === "ar" ? -1 : 1));
});
function closeModal() {
  modal.hidden = true; frame.innerHTML = ""; document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
$("#close").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

/* reveal on scroll */
const io = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

$("#year").textContent = new Date().getFullYear();
applyLang();

/* ripple on click */
document.addEventListener("pointerdown", (e) => {
  const el = e.target.closest(".btn, .tab, .chip, .lang");
  if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const r = el.getBoundingClientRect(), s = document.createElement("span");
  s.className = "ripple";
  s.style.left = e.clientX - r.left + "px";
  s.style.top = e.clientY - r.top + "px";
  s.style.setProperty("--rs", (Math.max(r.width, r.height) / 10) * 2.4);
  el.appendChild(s);
  s.addEventListener("animationend", () => s.remove());
});

/* header: solid on scroll + active section in navs */
const hdr = document.querySelector(".top");
addEventListener("scroll", () => hdr.classList.toggle("scrolled", scrollY > 30), { passive: true });
const navLinks = [...document.querySelectorAll(".nav a, .bnav a")];
const secIO = new IntersectionObserver((es) => es.forEach((x) => {
  if (!x.isIntersecting) return;
  navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + x.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => secIO.observe(s));

/* image shimmer until loaded */
const markLoaded = (img) => img.closest(".thumb, .g-card")?.classList.add("loaded");
document.addEventListener("load", (e) => { if (e.target.tagName === "IMG") markLoaded(e.target); }, true);
setInterval(() => document.querySelectorAll(".thumb img, .g-card img").forEach((i) => i.complete && i.naturalWidth && markLoaded(i)), 1500);
