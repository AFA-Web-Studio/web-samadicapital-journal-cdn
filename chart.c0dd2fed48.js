/* SamadiCapital Journal — نمودار و تحلیل
   v26.37 (فاز ۱): نمودارِ زنده روی Hyperliquid، SoDEX و Bybit (جای بایننس) + ذخیره‌ی تحلیلِ هر نفر برای هر نماد
   (کلیدِ sc_chart_<uid>؛ یکی روی همه‌ی دستگاه‌ها).
   v26.38 (درخواستِ مالک ۱۴۰۵/۰۹/۰۳: «سخت‌گیرانه عینِ TradingView»): جعبه‌ابزارِ کامل با همان گروه‌ها و نام‌ها،
   آهنربای دوحالته‌ی واقعی (ضعیف/قوی، Ctrl = برعکس)، نوارِ شکلِ انتخاب‌شده (رنگ/ضخامت/خط‌چین/تنظیمات/قفل/کپی/حذف)،
   برگرداندن و دوباره‌انجام، فهرستِ شکل‌ها، خط‌کش، پاک‌کن، «ماندن در حالتِ رسم»، قفل و پنهانِ همه.
   موتور: KLineChart 9.8.12 (Apache-2.0، klinecharts.min.js کنارِ همین فایل). همه‌ی شکل‌ها اختصاصی‌اند (نام‌ها با sc)
   تا آهنربا، محدوده‌ی لمس، برچسب‌ها و رفتار دقیقاً در اختیارِ خودمان باشد. سه ایرادِ خودِ کتابخانه این‌جا جبران شده:
     ۱) آهنربای «ضعیفِ» کتابخانه زیرِ کفِ کندل هرگز نمی‌چسبید و درونِ کندل همیشه می‌چسبید ⇒ آهنربای خودمان؛
     ۲) راست‌کلیک روی شکل آن را بی‌پرسش پاک می‌کرد ⇒ منوی شکل؛
     ۳) دو کلیک/ضربه‌ی سریع وسطِ رسم، شکل را با نقطه‌های ناقص «تمام» می‌کرد ⇒ همان ضربه یک نقطه می‌گذارد.
   v26.39 (درخواستِ مالک ۱۴۰۵/۰۹/۰۴: «انگلیسی هم مثلِ TradingView باشد و فارسی هم بشود انتخاب کرد»): زبانِ نمودار
   فارسی (پیش‌فرض) یا English با همان نام‌های TradingView؛ دکمه‌ی «فا | EN» در سرِ نمودار، ذخیره در prefs.lang.
   v26.40 (درخواستِ مالک ۱۴۰۵/۰۹/۰۴: «صفحه‌ی نمودار را حرفه‌ای و اصولی بزرگ کن مثلِ بقیه»): حالتِ تمام‌صفحه مثلِ TradingView
   (دکمه‌ی کنارِ اندیکاتور و Shift+F): کلاسِ ch-max روی <html> همه‌ی پنجره را به نمودار می‌دهد و اگر مرورگر اجازه دهد
   Fullscreen API نوارهای مرورگر را هم پنهان می‌کند (گوشیِ اندروید: چرخش به افقی هم آزاد می‌شود). Esc، دکمه‌ی «بازگشت»ِ
   گوشی یا رفتن به صفحه‌ی دیگر از آن بیرون می‌آورد.
   v26.40 (همان روز: «هر تنظیمی که هر دانشجو می‌زند روی نمودارش بماند»): مثلِ TradingView آخرین ظاهرِ هر ابزار
   (رنگ/ضخامت/نوعِ خط/گزینه‌ها مثلِ سطوحِ فیبو) پیش‌فرضِ شکلِ بعدیِ همان ابزار می‌شود (prefs.td، با «بازگشت به پیش‌فرض»)؛
   زوم (prefs.bs)، ارتفاعِ پنلِ اندیکاتور (prefs.ph)، دوره‌های اندیکاتور (prefs.ip، پنجره‌ی تنظیمات) و «پنهانِ همه» (prefs.hid)
   هم ذخیره می‌شوند — همه در sc_chart_<uid>، روی همه‌ی دستگاه‌ها.
   v26.41 (همان روز: «مثلِ TradingView، راحت‌تر؛ تنظیماتِ فیبو یک‌جا؛ برچسبِ فیبو سمتِ راست؛ حجم پاک نمی‌شود؛ تمِ تیره/روشن»):
   پنجره‌ی تنظیماتِ چهار زبانه‌ای (ظاهر/متن/مختصات/نمایش) با پیش‌نمایشِ زنده، جدولِ ۲۴ سطحِ فیبو با مقدار و رنگ (x.lvl)،
   جای برچسب (چپ/راست، بالا/وسط/پایین)، نمایش روی تایم‌فریم‌های انتخابی (x.vis)، دکمه‌های ⚙ و ✕ کنارِ نامِ هر اندیکاتور،
   و تمِ روشن به سبکِ TradingView (prefs.theme).
   v26.42 (مالک: «از همه لحاظ با سخت‌گیریِ خیلی بیشتر مثلِ TradingView؛ کاربرپسندتر؛ خودت منتشر کن»): تایم‌فریمِ ۳۰m و 1W
   (گوشی: فهرستِ کشویی مثلِ اپِ TradingView)، نوعِ نمودار (شمعی/توخالی/میله‌ای/خطی/ناحیه‌ای/هیکن‌آشی)، مقیاسِ لگاریتمی و درصدی،
   دکمه‌ی «بازگشت به آخرین کندل» و Alt+R، عکسِ نمودار، تنظیماتِ نمودار (رنگِ شمع‌ها، خطِ وضعیت، خطِ قیمت، سقف/کف، شبکه)،
   هفت اندیکاتورِ تازه با جست‌وجو، کپی/چسباندنِ شکل (Ctrl+C/V) و نامِ نقطه‌های ابزارِ پوزیشن.
   v26.43 (مالک: «حالتِ واچ‌لیست هم کامل داشته باشم»): واچ‌لیستِ کامل مثلِ TradingView — پنلِ کنارِ نمودار (دسکتاپ) /
   کشوی رویِ نمودار (گوشی)، چند لیستِ نام‌دار، قیمت و تغییرِ ۲۴ساعته‌ی زنده (/api/chart/quotes)، چشمکِ تغییرِ قیمت،
   افزودن/حذف، جابه‌جایی با کشیدن، مرتب‌سازیِ ستون‌ها، ↑↓ برای نمادِ بعدی؛ در prefs.wl.
   v26.44 (مالک: «لبه‌های قیمت و زمانِ نمودار با اسکرولِ موس تغییر نمی‌کند»): چرخِ موس روی محورِ قیمت = زومِ عمودی،
   روی محورِ زمان = زومِ زمان (مثلِ TradingView).
   v26.45: دسته‌ی نقطه‌ها حلقه‌ی نازکِ توخالی (نه دایره‌ی رنگیِ پُر)؛ هنگامِ رسم زیرِ نشانگر فقط یک حلقه‌ی ریز.
   v26.46 (مالک: «در تریدینگ‌ویو وسطِ رسم راست‌کلیک کنی شکلِ نیمه‌کاره پاک می‌شود»): راست‌کلیک وسطِ رسم = لغو
   (مثلِ Esc؛ قبلاً منوی راست‌کلیکِ شکلِ نیمه‌کاره باز می‌شد)؛ در قلم‌مو هم؛ دکمه‌ی ✕ در نوارِ راهنما برای گوشی.
   v26.47 (مالک: «جابه‌جاییِ لانگ و شورت و… با کیبورد انجام نمی‌شود»): شکلِ انتخاب‌شده با کلیدهای جهت جابه‌جا می‌شود،
   مثلِ TradingView: ←/→ یک کندل، ↑/↓ یک واحدِ قیمت (کوچک‌ترین رقمِ قیمت)؛ Shift = ده برابر؛ نگه‌داشتنِ کلید = یک «برگرداندن».
   نقطه‌ی بیرون از کندل‌ها (آینده/پیش از تاریخچه): patchTimeScale زمان را با طولِ تایم‌فریم امتداد می‌دهد.
   از index.html برمی‌دارد: apiFetch, esc, SESSION, L, showToast, uiConfirm, closeSheet, coinLogo, jsArg. */
(function () {
  'use strict';
  const SOURCES = [{ id: 'hl', name: 'Hyperliquid' }, { id: 'sodex', name: 'SoDEX' }, { id: 'bybit', name: 'Bybit' }];
  const TFS = [
    { id: '1m', l: '1m', ms: 6e4, poll: 4000 }, { id: '5m', l: '5m', ms: 3e5, poll: 5000 }, { id: '15m', l: '15m', ms: 9e5, poll: 8000 },
    { id: '1h', l: '1H', ms: 36e5, poll: 10000 }, { id: '4h', l: '4H', ms: 144e5, poll: 15000 }, { id: '1d', l: '1D', ms: 864e5, poll: 30000 },
    { id: '30m', l: '30m', ms: 18e5, poll: 9000 }, { id: '1w', l: '1W', ms: 6048e5, poll: 60000 }
  ];
  const TF_VIEW = ['1m', '5m', '15m', '30m', '1h', '4h', '1d', '1w'].map(id => TFS.find(t => t.id === id));
  const ALL_TF = (1 << TFS.length) - 1;
  const tfName = t => ({ '1m': tr('۱ دقیقه', '1 minute'), '5m': tr('۵ دقیقه', '5 minutes'), '15m': tr('۱۵ دقیقه', '15 minutes'), '30m': tr('۳۰ دقیقه', '30 minutes'),
    '1h': tr('۱ ساعت', '1 hour'), '4h': tr('۴ ساعت', '4 hours'), '1d': tr('۱ روز', '1 day'), '1w': tr('۱ هفته', '1 week') }[t.id] || t.l);
  const GOLD = '#C8A84B', UP = '#22C97A', DOWN = '#E8505B';
  // رنگ‌های پیش‌فرضِ TradingView
  const C = { blue: '#2962FF', red: '#F23645', green: '#089981', orange: '#FF9800', purple: '#9C27B0', gray: '#787B86', cyan: '#00BCD4',
    pink: '#E91E63', yellow: '#FFEB3B', lime: '#4CAF50', violet: '#673AB7' };
  const PALETTE = ['#FFFFFF', '#D1D4DC', '#9598A1', '#5D606B', C.red, C.orange, C.yellow, C.lime, C.green, C.cyan, C.blue, C.violet, C.purple, C.pink, GOLD, UP];
  const POPULAR = ['BTC', 'ETH', 'SOL', 'HYPE', 'XRP', 'BNB', 'DOGE', 'SUI', 'LINK', 'AVAX'];
  const MAX_DRAWINGS = 200, BARS = 400, MAX_PATH = 400;
  const MONO = 'JetBrains Mono, Estedad, monospace', SANS = 'Estedad, Vazirmatn, system-ui, sans-serif';
  const LEGACY = { segment: 'scTrend', rayLine: 'scRay', straightLine: 'scExtended', horizontalStraightLine: 'scHLine', horizontalRayLine: 'scHRay',
    verticalStraightLine: 'scVLine', parallelStraightLine: 'scChannel', priceChannelLine: 'scChannel', priceLine: 'scHRay' };

  const S = {
    chart: null, root: null, src: 'hl', coin: 'BTC', tf: '1h', data: [], more: true, poll: null, pollBusy: false,
    tool: 'cursor', recs: new Map(), selected: null, drawingId: null, hidden: false, mag: 1, magLast: 1, stay: false, lockAll: false,
    hist: [], redo: [], store: null, rev: null, loadedStore: false, saveTimer: null, saving: false, saveAgain: false, panes: {}, symbols: {}, gen: 0,
    quiet: false, ctrl: false, lastPtr: null, measureId: null, fly: null, pop: null, touch: false, tol: 6, magTol: 16, stroke: null,
    debug: false, lastFigs: new Map(), lastHandles: new Map(), figErr: [], lang: 'fa', saveState: null, hintArgs: null, max: false
  };
  const readOnly = () => !!SESSION?.isViewOnly;
  const storeKey = () => 'sc_chart_' + (SESSION?.uid || 'guest');
  const cacheKey = () => 'sc_chart_cache_' + (SESSION?.uid || 'guest');
  const tfOf = id => TFS.find(t => t.id === id) || TFS[3];
  const tfMs = () => tfOf(S.tf).ms;
  const isNum = v => typeof v === 'number' && Number.isFinite(v);
  const $ = id => document.getElementById(id);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const fa = n => Number(n).toLocaleString('fa-IR');
  // زبانِ نمودار: tr(فارسی، English) — متن‌های روی خودِ نمودار مثلِ TradingView همیشه انگلیسی‌اند
  const EN = () => S.lang === 'en';
  const tr = (f, e) => EN() ? e : f;
  const num = n => EN() ? Number(n).toLocaleString('en-US') : fa(n);
  const nm = d => EN() ? d.en : d.fa;
  const dirOf = () => EN() ? 'ltr' : 'rtl';
  const hexA = (hex, a) => { const n = parseInt(String(hex).slice(1), 16); return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`; };
  const ink = hex => { const n = parseInt(String(hex).slice(1), 16); return ((n >> 16 & 255) * 0.299 + (n >> 8 & 255) * 0.587 + (n & 255) * 0.114) > 160 ? '#131722' : '#FFFFFF'; };
  function precisionOf(p) { p = Math.abs(+p) || 0; return p >= 1000 ? 1 : p >= 100 ? 2 : p >= 1 ? 3 : p >= 0.1 ? 4 : p >= 0.01 ? 5 : p >= 0.0001 ? 6 : 8; }
  const prec = () => S.chart?.getPriceVolumePrecision?.()?.price ?? 2;
  const fmt = (v, p = prec()) => isNum(v) ? v.toLocaleString('en-US', { minimumFractionDigits: p, maximumFractionDigits: p }) : '—';
  const fmtP = v => { if (!isNum(v)) return '—'; const d = precisionOf(v); return v.toLocaleString('en-US', { minimumFractionDigits: Math.min(d, 2), maximumFractionDigits: d }); };
  const sgn = v => v > 0 ? '+' : v < 0 ? '−' : '';
  const fmtS = v => sgn(v) + fmt(Math.abs(v));
  const pct = (a, b) => (b - a) / a * 100;
  const fmtPct = v => isNum(v) ? sgn(v) + Math.abs(v).toFixed(2) + '%' : '';
  const fmtVol = v => !isNum(v) ? '—' : v >= 1e9 ? (v / 1e9).toFixed(2) + 'B' : v >= 1e6 ? (v / 1e6).toFixed(2) + 'M' : v >= 1e3 ? (v / 1e3).toFixed(2) + 'K' : v.toFixed(2);
  function fmtDur(ms) {
    const m = Math.round(Math.abs(ms) / 6e4), d = Math.floor(m / 1440), h = Math.floor(m % 1440 / 60), mm = m % 60;
    return d ? `${d}d${h ? ' ' + h + 'h' : ''}` : h ? `${h}h${mm ? ' ' + mm + 'm' : ''}` : `${mm}m`;
  }
  const dtf = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tehran', day: '2-digit', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });
  const fmtDate = t => isNum(t) ? dtf.format(new Date(t)).replace(',', '') : '';
  const newId = () => 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

  // ── هندسه ──
  const distSeg = (p, a, b) => { const dx = b.x - a.x, dy = b.y - a.y, l = dx * dx + dy * dy; let t = l ? ((p.x - a.x) * dx + (p.y - a.y) * dy) / l : 0; t = clamp(t, 0, 1); return Math.hypot(p.x - a.x - t * dx, p.y - a.y - t * dy); };
  function inPoly(p, c) { let r = false; for (let i = 0, j = c.length - 1; i < c.length; j = i++) if ((c[i].y > p.y) !== (c[j].y > p.y) && p.x < (c[j].x - c[i].x) * (p.y - c[i].y) / (c[j].y - c[i].y) + c[i].x) r = !r; return r; }
  // بازه‌ی t که خطِ بی‌نهایتِ a→b درونِ قاب است (Liang–Barsky)
  function lineBox(a, b, W, H) {
    const dx = b.x - a.x, dy = b.y - a.y; let lo = -Infinity, hi = Infinity;
    const clip = (p, q) => { if (Math.abs(p) < 1e-12) return q >= 0; const r = q / p; if (p < 0) { if (r > hi) return false; if (r > lo) lo = r; } else { if (r < lo) return false; if (r < hi) hi = r; } return true; };
    if (!clip(-dx, a.x + 2) || !clip(dx, W + 2 - a.x) || !clip(-dy, a.y + 2) || !clip(dy, H + 2 - a.y)) return null;
    return [lo, hi];
  }
  // امتدادِ پاره‌خط: el = آن‌سوی نقطه‌ی اول، er = آن‌سوی نقطه‌ی دوم (مثلِ «Extend left/right» در TradingView)
  function ext(a, b, W, H, el, er) {
    if ((!el && !er) || (Math.abs(a.x - b.x) < 1e-9 && Math.abs(a.y - b.y) < 1e-9)) return [a, b];
    const box = lineBox(a, b, W, H); if (!box) return [a, b];
    const t0 = el ? Math.min(0, box[0]) : 0, t1 = er ? Math.max(1, box[1]) : 1;
    const P = t => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
    return [P(t0), P(t1)];
  }
  const yOnLine = (a, b, x) => Math.abs(b.x - a.x) < 1e-9 ? a.y : a.y + (b.y - a.y) * (x - a.x) / (b.x - a.x);
  const rectPts = (x0, y0, x1, y1) => [{ x: x0, y: y0 }, { x: x1, y: y0 }, { x: x1, y: y1 }, { x: x0, y: y1 }];
  function arrowHead(from, to, size) {
    const g = Math.atan2(to.y - from.y, to.x - from.x), a1 = g + Math.PI * 0.82, a2 = g - Math.PI * 0.82;
    return [{ x: to.x, y: to.y }, { x: to.x + size * Math.cos(a1), y: to.y + size * Math.sin(a1) }, { x: to.x + size * Math.cos(a2), y: to.y + size * Math.sin(a2) }];
  }
  // ساده‌سازیِ مسیرِ قلم (Ramer–Douglas–Peucker)
  function rdp(pts, eps) {
    if (pts.length < 3) return pts.slice();
    let idx = 0, max = 0; const a = pts[0], b = pts[pts.length - 1];
    for (let i = 1; i < pts.length - 1; i++) { const d = distSeg(pts[i], a, b); if (d > max) { max = d; idx = i; } }
    if (max <= eps) return [a, b];
    const l = rdp(pts.slice(0, idx + 1), eps), r = rdp(pts.slice(idx), eps);
    return l.slice(0, -1).concat(r);
  }

  // ── اندازه‌ی متن (برای کادرِ برچسب‌ها) ──
  let mctx0 = null; const mctx = () => mctx0 || (mctx0 = document.createElement('canvas').getContext('2d'));
  const RTL = /[֐-ࣿיִ-﷿ﹰ-﻿]/;
  function textBox(a) {
    if (a._b) return a._b;
    const size = a.size || 11, lh = Math.round(size * 1.38), pad = a.bg || a.border ? (a.pad ?? 5) : (a.pad ?? 0);
    const m = mctx(); m.font = `${a.weight || 500} ${size}px ${a.family || MONO}`;
    const w = Math.max(1, ...a.lines.map(l => m.measureText(l).width)) + pad * 2, h = a.lines.length * lh + (pad ? pad * 2 - (lh - size) * 0.5 : 0);
    let x = a.align === 'right' ? a.x - w : a.align === 'center' ? a.x - w / 2 : a.x;
    let y = a.base === 'bottom' ? a.y - h : a.base === 'middle' ? a.y - h / 2 : a.y;
    if (a.cw) x = clamp(x, 2, Math.max(2, a.cw - w - 2));
    if (a.ch) y = clamp(y, 2, Math.max(2, a.ch - h - 2));
    return (a._b = { x, y, w, h, lh, pad, size });
  }

  // ── سازنده‌های شکل (figure) ──
  const lineSt = (color, w = 1, s = 0) => s ? { style: 'dashed', dashedValue: s === 2 ? [Math.max(1, w), w * 2 + 1.5] : [w * 4 + 2, w * 3], size: w, color } : { style: 'solid', size: w, color };
  const F = {
    line: (pts, color, w, s) => ({ type: 'line', ignoreEvent: true, attrs: { coordinates: pts }, styles: lineSt(color, w, s) }),
    poly: (pts, fill) => ({ type: 'polygon', ignoreEvent: true, attrs: { coordinates: pts }, styles: { style: 'fill', color: fill } }),
    shape: (pts, fill, border, w, s) => ({ type: 'polygon', ignoreEvent: true, attrs: { coordinates: pts },
      styles: { style: fill && border ? 'stroke_fill' : fill ? 'fill' : 'stroke', color: fill || 'rgba(0,0,0,0)', borderColor: border || 'rgba(0,0,0,0)', borderSize: w || 1,
        borderStyle: s ? 'dashed' : 'solid', borderDashedValue: s === 2 ? [Math.max(1, w), w * 2 + 1.5] : [w * 4 + 2, w * 3] } }),
    hit: (pts, area) => ({ type: 'scHit', attrs: { coordinates: pts, area: !!area } }),
    ell: (x, y, rx, ry, fill, border, w, s, area) => ({ type: 'scEll', attrs: { x, y, rx: Math.abs(rx), ry: Math.abs(ry), area: !!area }, styles: { fill, border, w, s } }),
    arc: (x, y, r, a0, a1, color, w) => ({ type: 'arc', ignoreEvent: true, attrs: { x, y, r, startAngle: a0, endAngle: a1 }, styles: { style: 'solid', size: w || 1, color } }),
    dot: (x, y, r, color) => ({ type: 'circle', ignoreEvent: true, attrs: { x, y, r }, styles: { style: 'fill', color } }),
    path: (pts, color, w) => ({ type: 'scPath', ignoreEvent: true, attrs: { coordinates: pts }, styles: { color, w } }),
    // متن با جهتِ درستِ فارسی، چندخطی، با کادرِ اختیاری؛ o.ev = قابلِ کلیک
    txt: (x, y, text, o = {}) => ({ type: 'scTxt', ignoreEvent: !o.ev, attrs: { x, y, lines: Array.isArray(text) ? text : String(text).split('\n'), ...o } })
  };
  const label = (k, x, y, lines, color, o = {}) => F.txt(x, y, lines, { color: o.fg || ink(color), bg: color, size: 11, weight: 600, align: 'center', base: 'middle', cw: k.W, ch: k.H, radius: 3, ...o });

  // ── سطوح فیبوناچی (رنگ‌های پیش‌فرضِ TradingView) ──
  const LV = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1, 1.618, 2.618, 3.618, 4.236];
  const LV_COL = ['#787B86', '#F23645', '#FF9800', '#4CAF50', '#089981', '#00BCD4', '#787B86', '#2962FF', '#F23645', '#9C27B0', '#E91E63'];
  const LV_ON = [0, 1, 2, 3, 4, 5, 6, 7];
  // v26.41: همان ۲۴ سطحِ پنجره‌ی Fib در TradingView (۱۱ سطحِ اول همان سطوحِ قبلی‌اند)؛ هر سطر = [مقدار، روشن، رنگ]
  const LV_TV = LV.map((l, i) => [l, LV_COL[i]]).concat([[1.272, '#FF9800'], [1.414, '#F23645'], [2, '#089981'], [2.272, '#FF9800'], [2.414, '#4CAF50'],
    [3, '#00BCD4'], [3.272, '#787B86'], [3.414, '#2962FF'], [4, '#F23645'], [4.272, '#9C27B0'], [4.414, '#E91E63'], [4.618, '#FF9800'], [4.764, '#089981']]);
  function levelRows(x) {
    if (Array.isArray(x?.lvl) && x.lvl.length) return x.lvl.map(r => [+r[0], r[1] ? 1 : 0, /^#[0-9A-Fa-f]{6}$/.test(r[2] || '') ? r[2] : C.gray]);
    const on = Array.isArray(x?.lv) ? x.lv : LV_ON;   // داده‌ی پیش از v26.41: شماره‌ی سطوحِ روشن از ۱۱ سطحِ اول
    return LV_TV.map(([l, c], i) => [l, i < LV.length && on.includes(i) ? 1 : 0, c]);
  }
  function levels(k) {
    const one = !!k.x.oc || (!Array.isArray(k.x.lvl) && !!k.m.c);   // «یک رنگ برای همه»؛ داده‌ی قدیم: رنگِ شکل = همه‌ی سطوح
    return levelRows(k.x).filter(r => r[1] && isNum(r[0])).map(([l, , c]) => ({ l, col: one ? k.col : c })).sort((a, b) => a.l - b.l);
  }
  // شفافیتِ پس‌زمینه (x.fo = درصد، از پنجره‌ی تنظیمات)؛ پیش‌فرضِ هر ابزار همان قبلی
  const fillA = (k, d) => isNum(k.x.fo) ? clamp(k.x.fo, 0, 100) / 100 : d;
  function levelFigs(k, out, yAt, valAt, x0, x1, opt = {}) {
    const lv = levels(k);
    if (k.x.f !== false) for (let i = 0; i + 1 < lv.length; i++) out.push(F.poly(rectPts(x0, yAt(lv[i].l), x1, yAt(lv[i + 1].l)), hexA(lv[i + 1].col, fillA(k, 0.12))));
    const center = k.x.lpos === 2, right = k.x.lpos === 1, outside = center ? false : right ? x1 + 130 < k.W : x0 > 104;
    const vp = [0, 1, 2].includes(k.x.lvp) ? k.x.lvp : (outside ? 1 : 0), dy = [-2, 0, 2][vp], base = ['bottom', 'middle', 'top'][vp];
    for (const o of lv) {
      const y = yAt(o.l), t = opt.noPrice || k.x.lp === false ? String(o.l) : `${o.l} (${fmt(valAt(o.l))})`;
      out.push(F.line([{ x: x0, y }, { x: x1, y }], o.col, k.w, k.s), F.hit([{ x: x0, y }, { x: x1, y }]));
      if (k.x.lb === false) continue;
      if (center) out.push(F.txt((x0 + x1) / 2, y + dy, t, { color: o.col, align: 'center', base, size: 11 }));
      else if (right) out.push(F.txt(outside ? x1 + 6 : x1 - 4, y + dy, t, { color: o.col, align: outside ? 'left' : 'right', base, size: 11 }));
      else out.push(F.txt(outside ? x0 - 6 : x0 + 4, y + dy, t, { color: o.col, align: outside ? 'right' : 'left', base, size: 11 }));
    }
    if (k.x.f !== false && lv.length > 1) out.push(F.hit(rectPts(x0, yAt(lv[0].l), x1, yAt(lv[lv.length - 1].l)), true));
    return out;
  }
  const isPeak = (c, i) => { const n = [c[i - 1], c[i + 1]].filter(Boolean); return !n.length || n.every(p => c[i].y <= p.y); };
  const ptLabel = (k, i, text, color) => { const up = isPeak(k.c, i); return F.txt(k.c[i].x, k.c[i].y + (up ? -8 : 8), text, { color: color || k.col, align: 'center', base: up ? 'bottom' : 'top', size: 12, weight: 700 }); };
  const ratio = (num, den) => { const r = Math.abs(num) / Math.abs(den); return isNum(r) ? r.toFixed(3) : '—'; };
  const midPt = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

  // ── سازنده‌ی شکل‌های هر ابزار ──
  function trendFigs(k, el, er, stats) {
    const [a, b] = k.c; if (!b) return [];
    const [p, q] = ext(a, b, k.W, k.H, el || k.x.el, er || k.x.er);
    const out = [F.line([p, q], k.col, k.w, k.s), F.hit([p, q])];
    if (stats || k.x.st) out.push(...infoFigs(k, a, b));
    return out;
  }
  function infoFigs(k, a, b) {
    const [v0, v1] = k.v, [t0, t1] = k.t; if (!isNum(v0) || !isNum(v1) || !isNum(t0) || !isNum(t1)) return [];
    const bars = Math.round((t1 - t0) / tfMs()), ang = Math.atan2(a.y - b.y, b.x - a.x) * 180 / Math.PI;
    const lines = [`${fmtS(v1 - v0)} (${fmtPct(pct(v0, v1))})`, `${bars} bars, ${fmtDur(t1 - t0)}`, `∠ ${ang.toFixed(2)}°`];
    const right = b.x + 150 < k.W;
    return [F.txt(b.x + (right ? 12 : -12), b.y, lines, { color: '#D1D4DC', bg: 'rgba(19,23,34,.92)', border: hexA(k.col, 0.7), size: 11, align: right ? 'left' : 'right', base: 'middle', cw: k.W, ch: k.H, pad: 6 })];
  }
  function angleFigs(k) {
    const [a, b] = k.c; if (!b) return [];
    const out = [F.line([a, b], k.col, k.w, k.s), F.hit([a, b])];
    const len = Math.max(40, Math.min(140, Math.abs(b.x - a.x)));
    const dir = b.x >= a.x ? 1 : -1;
    out.push(F.line([a, { x: a.x + len * dir, y: a.y }], k.col, 1, 1));
    const g = Math.atan2(b.y - a.y, b.x - a.x), base = dir > 0 ? 0 : Math.PI;
    const r = clamp(len * 0.55, 26, 64), lo = Math.min(base, g), hi = Math.max(base, g);
    if (Math.abs(hi - lo) <= Math.PI) out.push(F.arc(a.x, a.y, r, lo, hi, k.col, 1));
    const deg = Math.atan2(a.y - b.y, Math.abs(b.x - a.x)) * 180 / Math.PI, mid = (lo + hi) / 2;
    out.push(F.txt(a.x + Math.cos(mid) * (r + 10), a.y + Math.sin(mid) * (r + 10), `${deg.toFixed(2)}°`, { color: '#D1D4DC', bg: 'rgba(19,23,34,.9)', border: hexA(k.col, 0.7), align: dir > 0 ? 'left' : 'right', base: 'middle', size: 11, weight: 600, cw: k.W, ch: k.H }));
    return out;
  }
  const axisY = (k, i = 0) => (k.x.ax === false || !k.c[i]) ? [] : [{ type: 'text', ignoreEvent: true, attrs: { x: 0, y: k.c[i].y, text: fmt(k.v[i]), align: 'left', baseline: 'middle' },
    styles: { style: 'fill', color: ink(k.col), size: 11, family: MONO, weight: 600, backgroundColor: k.col, borderColor: k.col, borderSize: 1, borderRadius: 2, paddingLeft: 4, paddingRight: 4, paddingTop: 3, paddingBottom: 3 } }];
  const axisX = (k, i = 0) => (k.x.ax === false || !k.c[i] || !isNum(k.t[i])) ? [] : [{ type: 'text', ignoreEvent: true, attrs: { x: k.c[i].x, y: 2, text: fmtDate(k.t[i]), align: 'center', baseline: 'top' },
    styles: { style: 'fill', color: ink(k.col), size: 11, family: MONO, weight: 600, backgroundColor: k.col, borderColor: k.col, borderSize: 1, borderRadius: 2, paddingLeft: 4, paddingRight: 4, paddingTop: 3, paddingBottom: 3 } }];
  function hlineFigs(k, ray) {
    const a = k.c[0]; if (!a) return [];
    const p = { x: ray ? a.x : 0, y: a.y }, q = { x: k.W, y: a.y };
    const out = [F.line([p, q], k.col, k.w, k.s), F.hit([p, q])];
    if (k.x.text) {
      const left = k.x.lpos === 0, mid = k.x.lpos === 2, vp = [0, 1, 2].includes(k.x.lvp) ? k.x.lvp : 0;
      out.push(F.txt(mid ? ((ray ? a.x : 0) + k.W) / 2 : left ? (ray ? a.x + 8 : 10) : k.W - 10, a.y + [-4, 0, 4][vp], k.x.text, { color: k.col, align: mid ? 'center' : left ? 'left' : 'right', base: ['bottom', 'middle', 'top'][vp], size: 12, family: SANS, weight: 600,
        ...(vp === 1 ? { bg: TH().bg, pad: 3 } : {}) }));
    }
    return out;
  }
  function vlineFigs(k) { const a = k.c[0]; if (!a) return []; const p = { x: a.x, y: 0 }, q = { x: a.x, y: k.H }; return [F.line([p, q], k.col, k.w, k.s), F.hit([p, q])]; }
  function crossFigs(k) {
    const a = k.c[0]; if (!a) return [];
    const h = [{ x: 0, y: a.y }, { x: k.W, y: a.y }], v = [{ x: a.x, y: 0 }, { x: a.x, y: k.H }];
    return [F.line(h, k.col, k.w, k.s), F.line(v, k.col, k.w, k.s), F.hit(h), F.hit(v)];
  }
  function channelFigs(k) {
    const [a, b, c] = k.c; if (!b) return [];
    const [p, q] = ext(a, b, k.W, k.H, k.x.el, k.x.er), out = [];
    if (c) {
      const dy = c.y - yOnLine(a, b, c.x), p2 = { x: p.x, y: p.y + dy }, q2 = { x: q.x, y: q.y + dy };
      if (k.x.f !== false) out.push(F.poly([p, q, q2, p2], hexA(k.col, fillA(k, 0.15))), F.hit([p, q, q2, p2], true));
      if (k.x.mid !== false) out.push(F.line([{ x: p.x, y: p.y + dy / 2 }, { x: q.x, y: q.y + dy / 2 }], k.col, 1, 1));
      out.push(F.line([p2, q2], k.col, k.w, k.s), F.hit([p2, q2]));
    }
    out.push(F.line([p, q], k.col, k.w, k.s), F.hit([p, q]));
    return out;
  }
  function flatFigs(k) {
    const [a, b, c] = k.c; if (!b) return [];
    const [p, q] = ext(a, b, k.W, k.H, k.x.el, k.x.er), out = [];
    if (c) {
      const h0 = { x: p.x, y: c.y }, h1 = { x: q.x, y: c.y };
      if (k.x.f !== false) out.push(F.poly([p, q, h1, h0], hexA(k.col, fillA(k, 0.15))), F.hit([p, q, h1, h0], true));
      out.push(F.line([h0, h1], k.col, k.w, k.s), F.hit([h0, h1]));
    }
    out.push(F.line([p, q], k.col, k.w, k.s), F.hit([p, q]));
    return out;
  }
  function pitchforkFigs(k) {
    const [a, b, c] = k.c; if (!b) return [];
    if (!c) return [F.line([a, b], k.col, k.w, k.s), F.hit([a, b])];
    const m = midPt(b, c), d = { x: m.x - a.x, y: m.y - a.y };
    if (Math.hypot(d.x, d.y) < 1) return [F.line([b, c], k.col, k.w, k.s), F.hit([b, c])];
    const ray = from => ext(from, { x: from.x + d.x, y: from.y + d.y }, k.W, k.H, false, true);
    const med = ext(a, m, k.W, k.H, false, true), up = ray(b), dn = ray(c), h1 = ray(midPt(b, m)), h2 = ray(midPt(c, m));
    const out = [];
    const fp = fillA(k, 0.1);
    if (k.x.f !== false) out.push(F.poly([up[0], up[1], h1[1], h1[0]], hexA(k.col, fp)), F.poly([h1[0], h1[1], h2[1], h2[0]], hexA(k.col, Math.min(1, fp * 1.6))),
      F.poly([h2[0], h2[1], dn[1], dn[0]], hexA(k.col, fp)), F.hit([up[0], up[1], dn[1], dn[0]], true));
    out.push(F.line(h1, k.col, 1, 1), F.line(h2, k.col, 1, 1));
    for (const L of [med, up, dn]) out.push(F.line(L, k.col, k.w, k.s), F.hit(L));
    out.push(F.line([b, c], k.col, k.w, k.s), F.hit([b, c]), F.line([a, m], k.col, 1, 1));
    return out;
  }
  // رگرسیون روی قیمتِ بسته‌شدن، با انحرافِ معیار (مثلِ Regression Trend در TradingView)
  function idxAt(t) {
    const list = S.chart?.getDataList?.() || []; let lo = 0, hi = list.length - 1;
    if (hi < 0 || !isNum(t)) return -1;
    if (t <= list[0].timestamp) return 0; if (t >= list[hi].timestamp) return hi;
    while (lo < hi) { const m = (lo + hi + 1) >> 1; if (list[m].timestamp <= t) lo = m; else hi = m - 1; }
    return lo;
  }
  function regression(t0, t1) {
    const list = S.chart?.getDataList?.() || [];
    let i0 = idxAt(Math.min(t0, t1)), i1 = idxAt(Math.max(t0, t1));
    if (i0 < 0 || i1 - i0 < 2) return null;
    let n = 0, sx = 0, sy = 0, sxx = 0, sxy = 0, syy = 0;
    for (let i = i0; i <= i1; i++) { const x = i - i0, y = list[i].close; n++; sx += x; sy += y; sxx += x * x; sxy += x * y; syy += y * y; }
    const den = n * sxx - sx * sx; if (!den) return null;
    const slope = (n * sxy - sx * sy) / den, icpt = (sy - slope * sx) / n;
    let ss = 0; for (let i = i0; i <= i1; i++) { const r = list[i].close - (icpt + slope * (i - i0)); ss += r * r; }
    const vy = n * syy - sy * sy, r = vy > 0 ? (n * sxy - sx * sy) / Math.sqrt(den * vy) : 0;
    return { i0, i1, slope, icpt, sd: Math.sqrt(ss / n), r };
  }
  function regressionFigs(k) {
    const [a, b] = k.c; if (!b) return [];
    const R = isNum(k.t[0]) && isNum(k.t[1]) ? regression(k.t[0], k.t[1]) : null;
    if (!R) return [F.line([a, b], k.col, k.w, 1), F.hit([a, b])];
    const dev = isNum(k.x.dev) ? k.x.dev : 2, X = i => k.xAxis.convertToPixel(i), Y = v => k.yAxis.convertToPixel(v);
    const iE = k.x.er ? Math.max(R.i1, k.xAxis.convertFromPixel(k.W)) : R.i1;
    const P = (i, off) => ({ x: X(i), y: Y(R.icpt + R.slope * (i - R.i0) + off) });
    const up = [P(R.i0, dev * R.sd), P(iE, dev * R.sd)], mid = [P(R.i0, 0), P(iE, 0)], dn = [P(R.i0, -dev * R.sd), P(iE, -dev * R.sd)];
    const out = [];
    if (k.x.f !== false) out.push(F.poly([up[0], up[1], mid[1], mid[0]], hexA(k.col, fillA(k, 0.12))), F.poly([mid[0], mid[1], dn[1], dn[0]], hexA(C.red, fillA(k, 0.12) * 0.85)));
    out.push(F.line(up, k.col, k.w, k.s), F.line(dn, k.col, k.w, k.s), F.line(mid, C.red, k.w, 1), F.hit([up[0], up[1], dn[1], dn[0]], true));
    out.push(F.txt(dn[0].x, dn[0].y + 6, `Pearson's R ${R.r.toFixed(3)}`, { color: k.col, align: 'left', base: 'top', size: 11 }));
    return out;
  }
  function regressionMove({ points }) {
    if (points.length < 2) return;
    const t = points.map(tsOfPoint); if (!isNum(t[0]) || !isNum(t[1])) return;
    const R = regression(t[0], t[1]); if (!R) return;
    const vAt = tt => R.icpt + R.slope * (idxAt(tt) - R.i0);
    points[0].value = vAt(t[0]); points[1].value = vAt(t[1]);
  }
  function fibFigs(k) {
    const [a, b] = k.c; if (!b) return [];
    const rv = !!k.x.rv, A = rv ? b : a, B = rv ? a : b, vA = rv ? k.v[1] : k.v[0], vB = rv ? k.v[0] : k.v[1];
    let x0 = Math.min(a.x, b.x), x1 = Math.max(a.x, b.x); if (k.x.el) x0 = 0; if (k.x.er) x1 = k.W;
    const out = k.x.tl === false ? [] : [F.line([a, b], C.gray, 1, 1)];
    return levelFigs(k, out, L => B.y + (A.y - B.y) * L, L => vB + (vA - vB) * L, x0, x1);
  }
  function fibExtFigs(k) {
    const [a, b, c] = k.c; if (!b) return [];
    const tl = k.x.tl !== false, out = [...(tl ? [F.line([a, b], C.gray, 1, 1)] : []), F.hit([a, b])]; if (!c) return out;
    out.push(...(tl ? [F.line([b, c], C.gray, 1, 1)] : []), F.hit([b, c]));
    let x0 = c.x, x1 = c.x + Math.max(60, Math.abs(b.x - a.x)); if (k.x.el) x0 = 0; if (k.x.er) x1 = k.W;
    return levelFigs(k, out, L => c.y + (b.y - a.y) * L, L => k.v[2] + (k.v[1] - k.v[0]) * L, x0, x1);
  }
  function fibChannelFigs(k) {
    const [a, b, c] = k.c; if (!b) return [];
    if (!c) return [F.line([a, b], k.col, k.w, k.s), F.hit([a, b])];
    const dy = c.y - yOnLine(a, b, c.x), [p, q] = ext(a, b, k.W, k.H, k.x.el, k.x.er), lv = levels(k), out = [];
    const at = (pt, L) => ({ x: pt.x, y: pt.y + dy * L });
    if (k.x.f !== false) for (let i = 0; i + 1 < lv.length; i++) out.push(F.poly([at(p, lv[i].l), at(q, lv[i].l), at(q, lv[i + 1].l), at(p, lv[i + 1].l)], hexA(lv[i + 1].col, fillA(k, 0.12))));
    for (const o of lv) {
      const L = [at(p, o.l), at(q, o.l)];
      out.push(F.line(L, o.col, k.w, k.s), F.hit(L));
      if (k.x.lb !== false) out.push(k.x.lpos === 2 ? F.txt((L[0].x + L[1].x) / 2, L[0].y / 2 + L[1].y / 2 - 2, String(o.l), { color: o.col, align: 'center', base: 'bottom', size: 11 }) : k.x.lpos === 1
        ? F.txt(L[1].x + (L[1].x + 40 < k.W ? 4 : -4), L[1].y, String(o.l), { color: o.col, align: L[1].x + 40 < k.W ? 'left' : 'right', base: 'middle', size: 11 })
        : F.txt(L[0].x - 4, L[0].y, String(o.l), { color: o.col, align: 'right', base: 'middle', size: 11 }));
    }
    return out;
  }
  const FIB_N = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
  function fibTimeFigs(k) {
    const [a, b] = k.c; if (!b) return [];
    const dx = b.x - a.x, out = [F.line([a, b], C.gray, 1, 1)];
    if (Math.abs(dx) < 0.5) return out;
    FIB_N.forEach((n, i) => {
      const x = a.x + dx * n; if (x < -2 || x > k.W + 2) return;
      const col = k.m.c ? k.col : LV_COL[(i + 1) % LV_COL.length], L = [{ x, y: 0 }, { x, y: k.H }];
      out.push(F.line(L, col, k.w, k.s), F.hit(L));
      if (k.x.lb !== false) out.push(F.txt(x + 4, k.H - 6, String(n), { color: col, align: 'left', base: 'bottom', size: 11, weight: 600 }));
    });
    return out;
  }
  function xabcdFigs(k) {
    const c = k.c, v = k.v, col = k.col, out = [];
    if (k.x.f !== false) { if (c.length >= 3) out.push(F.poly([c[0], c[1], c[2]], hexA(col, 0.18))); if (c.length >= 5) out.push(F.poly([c[2], c[3], c[4]], hexA(col, 0.18))); }
    if (c.length > 1) out.push(F.line(c, col, k.w, k.s), F.hit(c));
    const rl = (i, j, txt) => { out.push(F.line([c[i], c[j]], col, 1, 1)); if (k.x.lb !== false) out.push(label(k, midPt(c[i], c[j]).x, midPt(c[i], c[j]).y, txt, col, { size: 10 })); };
    if (c.length >= 3) rl(0, 2, ratio(v[2] - v[1], v[1] - v[0]));
    if (c.length >= 4) rl(1, 3, ratio(v[3] - v[2], v[2] - v[1]));
    if (c.length >= 5) { rl(2, 4, ratio(v[4] - v[3], v[3] - v[2])); rl(0, 4, ratio(v[4] - v[1], v[1] - v[0])); }
    ['X', 'A', 'B', 'C', 'D'].forEach((n, i) => { if (c[i]) out.push(ptLabel(k, i, n)); });
    return out;
  }
  function abcdFigs(k) {
    const c = k.c, v = k.v, col = k.col, out = [];
    if (c.length > 1) out.push(F.line(c, col, k.w, k.s), F.hit(c));
    const rl = (i, j, txt) => { out.push(F.line([c[i], c[j]], col, 1, 1)); if (k.x.lb !== false) out.push(label(k, midPt(c[i], c[j]).x, midPt(c[i], c[j]).y, txt, col, { size: 10 })); };
    if (c.length >= 3) rl(0, 2, ratio(v[2] - v[1], v[1] - v[0]));
    if (c.length >= 4) rl(1, 3, ratio(v[3] - v[2], v[2] - v[1]));
    ['A', 'B', 'C', 'D'].forEach((n, i) => { if (c[i]) out.push(ptLabel(k, i, n)); });
    return out;
  }
  function hsFigs(k) {
    const c = k.c, col = k.col, out = [];
    if (k.x.f !== false) for (const [i, j, l] of [[0, 1, 2], [2, 3, 4], [4, 5, 6]]) if (c[l]) out.push(F.poly([c[i], c[j], c[l]], hexA(col, 0.16)));
    if (c.length > 1) out.push(F.line(c, col, k.w, k.s), F.hit(c));
    if (c[4]) {
      const x0 = c[0].x, x1 = (c[6] || c[4]).x, L = [{ x: x0, y: yOnLine(c[2], c[4], x0) }, { x: x1, y: yOnLine(c[2], c[4], x1) }];
      out.push(F.line(L, col, k.w, 1), F.hit(L));
    }
    [[1, 'Left Shoulder'], [3, 'Head'], [5, 'Right Shoulder']].forEach(([i, n]) => { if (c[i]) out.push(ptLabel(k, i, n)); });
    return out;
  }
  const waveFigs = names => k => {
    const c = k.c, out = [];
    if (c.length > 1) out.push(F.line(c, k.col, k.w, k.s), F.hit(c));
    c.forEach((p, i) => { if (names[i]) out.push(ptLabel(k, i, names[i])); });
    return out;
  };
  // پوزیشن: نقطه‌ها = [ورود، هدف، حد ضرر]؛ هدف و حد ضرر هم‌ستون‌اند و لبه‌ی راستِ جعبه را می‌سازند
  function posDefaults(entry, long, ex) {
    const list = S.chart.getDataList(), vr = S.chart.getVisibleRange?.() || { from: 0, to: list.length };
    let hi = -Infinity, lo = Infinity;
    for (let i = Math.max(0, Math.floor(vr.from)); i < Math.min(list.length, Math.ceil(vr.to)); i++) { hi = Math.max(hi, list[i].high); lo = Math.min(lo, list[i].low); }
    const r = isNum(hi - lo) && hi > lo ? (hi - lo) * 0.11 : Math.abs(entry) * 0.01;
    // پهنا: ~۲۳۰px، ولی هرگز بیرون از قابِ نمودار (روی گوشی جعبه از لبه‌ی راست بیرون می‌زد و دیگر گرفته نمی‌شد)
    const bs = S.chart.getBarSpace?.() || 6, paneW = S.chart.getSize?.('candle_pane', 'main')?.width || $('ch-canvas')?.clientWidth || 600;
    const room = isNum(ex) ? paneW - ex - 14 : 230, px = clamp(Math.min(230, room), 56, 230), bars = clamp(Math.round(px / bs), 2, 120);
    return { tp: long ? entry + 2 * r : entry - 2 * r, sl: long ? entry - r : entry + r, bars };
  }
  function posFigs(k, long) {
    const e = k.c[0]; if (!e || !isNum(k.v[0])) return [];
    const ev = k.v[0];
    let tv, sv, ty, sy, xr;
    if (k.c.length >= 3 && isNum(k.v[1]) && isNum(k.v[2])) { tv = k.v[1]; sv = k.v[2]; ty = k.c[1].y; sy = k.c[2].y; xr = k.c[1].x; }
    else { const d = posDefaults(ev, long, e.x); tv = d.tp; sv = d.sl; ty = k.yAxis.convertToPixel(tv); sy = k.yAxis.convertToPixel(sv); xr = e.x + d.bars * k.bs; }
    const xa = Math.min(e.x, xr), xb = Math.max(e.x, xr, xa + 24), mid = (xa + xb) / 2;
    const prof = rectPts(xa, e.y, xb, ty), stop = rectPts(xa, e.y, xb, sy);
    const gain = Math.abs(tv - ev), loss = Math.abs(ev - sv), rr = loss > 0 ? gain / loss : null;
    const tUp = ty < e.y, sUp = sy < e.y;
    return [
      F.poly(prof, 'rgba(8,153,129,.22)'), F.poly(stop, 'rgba(242,54,69,.22)'),
      F.line([{ x: xa, y: e.y }, { x: xb, y: e.y }], '#9598A1', 1, 0),
      F.hit(prof, true), F.hit(stop, true),
      label(k, mid, ty + (tUp ? -12 : 12), `Target: ${fmt(tv)} (${Math.abs(pct(ev, tv)).toFixed(2)}%) ${fmt(gain)}`, C.green),
      label(k, mid, sy + (sUp ? -12 : 12), `Stop: ${fmt(sv)} (${Math.abs(pct(ev, sv)).toFixed(2)}%) ${fmt(loss)}`, C.red),
      label(k, mid, e.y, rr ? `Risk/Reward Ratio: ${rr.toFixed(2)}` : (long ? 'Long' : 'Short'), '#2A2E39', { fg: '#D1D4DC' })
    ];
  }
  function posMove({ points, performPointIndex }) {
    if (points.length < 3) return;
    const src = performPointIndex === 2 ? points[2] : points[1], dst = src === points[1] ? points[2] : points[1];
    if (performPointIndex === 1 || performPointIndex === 2) { dst.timestamp = src.timestamp; dst.dataIndex = src.dataIndex; }
  }
  function rangeFigs(k, mode) {
    const [a, b] = k.c; if (!b) return [];
    const [v0, v1] = k.v, [t0, t1] = k.t, up = v1 >= v0;
    const col = k.m.c ? k.col : (mode === 'd' ? C.blue : up ? C.blue : C.red);
    const x0 = Math.min(a.x, b.x), x1 = Math.max(a.x, b.x), y0 = Math.min(a.y, b.y), y1 = Math.max(a.y, b.y);
    const box = rectPts(x0, y0, x1, y1), out = [F.poly(box, hexA(col, 0.18)), F.hit(box, true)];
    const lines = [];
    if (mode !== 'd') {
      out.push(F.line([{ x: x0, y: a.y }, { x: x1, y: a.y }], col, 1, 0), F.line([{ x: x0, y: b.y }, { x: x1, y: b.y }], col, 1, 0));
      const mx = (x0 + x1) / 2, s = { x: mx, y: a.y }, e = { x: mx, y: b.y };
      out.push(F.line([s, e], col, k.w, 0)); if (Math.abs(b.y - a.y) > 8) out.push(F.poly(arrowHead(s, e, 7 + k.w), col));
      lines.push(`${fmtS(v1 - v0)} (${fmtPct(pct(v0, v1))})`);
    }
    if (mode !== 'p') {
      out.push(F.line([{ x: a.x, y: y0 }, { x: a.x, y: y1 }], col, 1, 0), F.line([{ x: b.x, y: y0 }, { x: b.x, y: y1 }], col, 1, 0));
      const my = (y0 + y1) / 2, s = { x: a.x, y: my }, e = { x: b.x, y: my };
      out.push(F.line([s, e], col, k.w, 0)); if (Math.abs(b.x - a.x) > 8) out.push(F.poly(arrowHead(s, e, 7 + k.w), col));
      if (isNum(t0) && isNum(t1)) {
        const bars = Math.round((t1 - t0) / tfMs());
        lines.push(`${bars} bars, ${fmtDur(t1 - t0)}`);
        const list = S.chart.getDataList(), i0 = idxAt(Math.min(t0, t1)), i1 = idxAt(Math.max(t0, t1)); let vol = 0;
        for (let i = Math.max(0, i0); i <= i1 && i < list.length; i++) vol += list[i].volume || 0;
        lines.push(`Vol ${fmtVol(vol)}`);
      }
    }
    const below = y1 + 70 < k.H;
    out.push(F.txt((x0 + x1) / 2, below ? y1 + 8 : y0 - 8, lines, { color: '#FFFFFF', bg: hexA(col, 0.9), size: 11, weight: 600, align: 'center', base: below ? 'top' : 'bottom', cw: k.W, ch: k.H, pad: 6 }));
    return out;
  }
  function arrowFigs(k) {
    const [a, b] = k.c; if (!b) return [];
    const size = 13 + k.w * 3, d = Math.hypot(b.x - a.x, b.y - a.y);
    const tip = d > size ? { x: b.x - (b.x - a.x) / d * size * 0.6, y: b.y - (b.y - a.y) / d * size * 0.6 } : b;
    return [F.line([a, tip], k.col, k.w, k.s), F.poly(arrowHead(a, b, size), k.col), F.hit([a, b])];
  }
  function rectFigs(k) {
    const [a, b] = k.c; if (!b) return [];
    let x0 = Math.min(a.x, b.x), x1 = Math.max(a.x, b.x); if (k.x.el) x0 = 0; if (k.x.er) x1 = k.W;
    const box = rectPts(x0, a.y, x1, b.y), out = [F.shape(box, k.x.f !== false ? hexA(k.col, fillA(k, 0.2)) : null, k.col, k.w, k.s), F.hit(box, k.x.f !== false)];
    if (k.x.m) out.push(F.line([{ x: x0, y: (a.y + b.y) / 2 }, { x: x1, y: (a.y + b.y) / 2 }], k.col, 1, 1));
    return out;
  }
  function circleFigs(k) {
    const [a, b] = k.c; if (!b) return [];
    const r = Math.hypot(b.x - a.x, b.y - a.y);
    return [F.ell(a.x, a.y, r, r, k.x.f !== false ? hexA(k.col, fillA(k, 0.2)) : null, k.col, k.w, k.s, k.x.f !== false)];
  }
  function ellipseFigs(k) {
    const [a, b] = k.c; if (!b) return [];
    return [F.ell((a.x + b.x) / 2, (a.y + b.y) / 2, (b.x - a.x) / 2, (b.y - a.y) / 2, k.x.f !== false ? hexA(k.col, fillA(k, 0.2)) : null, k.col, k.w, k.s, k.x.f !== false)];
  }
  function triangleFigs(k) {
    const c = k.c; if (c.length < 2) return [];
    if (c.length < 3) return [F.line(c, k.col, k.w, k.s)];
    return [F.shape(c.slice(0, 3), k.x.f !== false ? hexA(k.col, fillA(k, 0.2)) : null, k.col, k.w, k.s), F.hit(c.slice(0, 3), k.x.f !== false)];
  }
  // قلم: نقطه‌ی ۱ لنگر است؛ مسیر = [فاصله‌ی زمانی (ms)، فاصله‌ی قیمت] از لنگر ⇒ با جابه‌جایی و تایم‌فریمِ دیگر درست می‌ماند
  function brushFigs(k, hl) {
    const a = k.c[0], d = Array.isArray(k.x.d) ? k.x.d : []; if (!a || !d.length || !isNum(k.v[0])) return [];
    const tf = tfMs(), pts = d.map(([dt, dv]) => ({ x: a.x + dt / tf * k.bs, y: k.yAxis.convertToPixel(k.v[0] + dv) }));
    return [F.path(pts, hl ? hexA(k.col, 0.38) : k.col, hl ? 10 + k.w * 4 : k.w + 0.5), F.hit(pts)];
  }
  const fontOf = k => ({ size: clamp(+k.x.fs || 14, 8, 48), weight: k.x.b ? 700 : 500 });
  function textFigs(k) {
    const a = k.c[0]; if (!a) return [];
    const { size, weight } = fontOf(k);
    return [F.txt(a.x, a.y, k.x.text || 'Text', { ev: true, color: k.col, size, weight, family: SANS, align: 'left', base: 'bottom', bg: k.x.bg ? 'rgba(19,23,34,.88)' : null, border: k.x.bg ? hexA(k.col, 0.6) : null, pad: k.x.bg ? 7 : 2, radius: 5 })];
  }
  function calloutFigs(k) {
    const [a, b] = k.c; if (!a) return [];
    if (!b) return [F.dot(a.x, a.y, 3, k.col)];
    const { size, weight } = fontOf(k);
    const t = F.txt(b.x, b.y - 2, k.x.text || 'Callout', { ev: true, color: ink(k.col), bg: k.col, size, weight, family: SANS, align: 'center', base: 'bottom', pad: 8, radius: 6 });
    const bx = textBox(t.attrs), cx = bx.x + bx.w / 2, cy = bx.y + bx.h / 2;
    // دنباله از لبه‌ی کادر تا نقطه‌ی اشاره
    const dx = a.x - cx, dy = a.y - cy, s = Math.min(Math.abs(dx) > 1e-9 ? (bx.w / 2) / Math.abs(dx) : Infinity, Math.abs(dy) > 1e-9 ? (bx.h / 2) / Math.abs(dy) : Infinity);
    const edge = s < 1 ? { x: cx + dx * s, y: cy + dy * s } : { x: cx, y: cy };
    return [F.line([edge, a], k.col, Math.max(1.5, k.w), 0), F.dot(a.x, a.y, 3.5, k.col), F.hit([edge, a]), t];
  }
  function priceLabelFigs(k) {
    const a = k.c[0]; if (!a || !isNum(k.v[0])) return [];
    const t = F.txt(a.x, a.y - 10, fmt(k.v[0]), { ev: true, color: ink(k.col), bg: k.col, size: 12, weight: 700, align: 'center', base: 'bottom', pad: 6, radius: 4 });
    return [F.poly([{ x: a.x - 6, y: a.y - 10.5 }, { x: a.x + 6, y: a.y - 10.5 }, { x: a.x, y: a.y - 2 }], k.col), F.dot(a.x, a.y, 2.5, k.col), t];
  }
  function markFigs(k, up) {
    const a = k.c[0]; if (!a) return [];
    const s = 1 + (k.w - 1) * 0.3, d = up ? 1 : -1, hh = 10 * s, hw = 9 * s, sw = 3.6 * s, sl = 13 * s;
    const pts = [{ x: a.x, y: a.y }, { x: a.x + hw, y: a.y + d * hh }, { x: a.x + sw, y: a.y + d * hh }, { x: a.x + sw, y: a.y + d * (hh + sl) },
      { x: a.x - sw, y: a.y + d * (hh + sl) }, { x: a.x - sw, y: a.y + d * hh }, { x: a.x - hw, y: a.y + d * hh }];
    const out = [F.poly(pts, k.col), F.hit(pts, true)];
    if (k.x.text) out.push(F.txt(a.x, a.y + d * (hh + sl + 6), k.x.text, { color: k.col, size: 12, weight: 600, family: SANS, align: 'center', base: up ? 'top' : 'bottom' }));
    return out;
  }

  // ── فهرستِ ابزارها: نام‌ها و ترتیب مثلِ TradingView ──
  const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="1.7" fill="currentColor" stroke="none"/>`;
  const P2 = ['نقطه‌ی اول', 'نقطه‌ی دوم'];
  const PN_EN = { 'نقطه‌ی اول': 'Point 1', 'نقطه‌ی دوم': 'Point 2', 'قیمت': 'Price', 'شروع': 'Start', 'زمان': 'Time', 'نقطه': 'Point',
    'شروعِ خط': 'Line start', 'پایانِ خط': 'Line end', 'پهنای کانال': 'Channel width', 'شروعِ بازه': 'Range start', 'پایانِ بازه': 'Range end',
    'شروعِ خطِ روند': 'Trend line start', 'پایانِ خطِ روند': 'Trend line end', 'سطحِ افقی': 'Flat level', 'دسته': 'Handle',
    'سقف/کفِ اول': 'First pivot', 'سقف/کفِ دوم': 'Second pivot', 'شروعِ موج (سطحِ ۱)': 'Swing start (level 1)', 'پایانِ موج (سطحِ ۰)': 'Swing end (level 0)',
    'شروعِ موج (A)': 'Swing start (A)', 'پایانِ موج (B)': 'Swing end (B)', 'پایانِ اصلاح (C)': 'Retracement end (C)', 'پهنا': 'Width',
    'یک واحدِ زمانی': 'One time unit', 'شانه‌ی چپ': 'Left shoulder', 'خطِ گردن ۱': 'Neckline 1', 'سر': 'Head', 'خطِ گردن ۲': 'Neckline 2',
    'شانه‌ی راست': 'Right shoulder', 'پایان': 'End', 'قیمتِ ورود': 'Entry price', 'حدِ سود': 'Target', 'حدِ ضرر': 'Stop', 'گوشه': 'Corner', 'گوشه‌ی مقابل': 'Opposite corner',
    'مرکز': 'Center', 'لبه': 'Edge', 'رأسِ اول': 'Vertex 1', 'رأسِ دوم': 'Vertex 2', 'رأسِ سوم': 'Vertex 3', 'جای متن': 'Text position', 'نقطه‌ی اشاره': 'Pointer' };
  const SEC_EN = { 'خطوط': 'Lines', 'کانال‌ها': 'Channels', 'چنگال': 'Pitchforks', 'الگوها': 'Chart patterns', 'امواجِ الیوت': 'Elliott waves',
    'پیش‌بینی': 'Forecasting', 'اندازه‌گیری': 'Measurers', 'قلم‌ها': 'Brushes', 'اشکال': 'Shapes' };
  // نامِ نقطه‌ی i ام (p2 = برای ابزارِ دو‌نقطه‌ای بی‌نام، «نقطه‌ی اول/دوم»)
  function ptName(def, i, p2) {
    const s = (def.pn || (p2 ? P2 : null))?.[i];
    return s ? tr(s, PN_EN[s] ?? s) : tr('نقطه‌ی ' + fa(i + 1), 'Point ' + (i + 1));
  }
  const T = {};
  const TOOL_LIST = [
    { id: 'cursor', g: 'cur', fa: 'نشانگرِ صلیبی', en: 'Cross', special: true, ic: svg('<path d="M12 3v18M3 12h18"/>') },
    { id: 'eraser', g: 'cur', fa: 'پاک‌کن', en: 'Eraser', special: true, ic: svg('<path d="M9 20h11"/><path d="M4.6 15.4l9.2-9.2a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 1 0 2.8L12 18H8.2z"/><path d="M9 11l4 4"/>') },
    { id: 'scTrend', g: 'lines', sec: 'خطوط', fa: 'خطِ روند', en: 'Trend Line', key: 'Alt+T', pts: 2, color: C.blue, opts: ['el', 'er', 'st'], ic: svg(`<path d="M5 19L19 5"/>${dot(5, 19)}${dot(19, 5)}`), figs: k => trendFigs(k) },
    { id: 'scRay', g: 'lines', sec: 'خطوط', fa: 'ری', en: 'Ray', pts: 2, color: C.blue, opts: ['st'], ic: svg(`<path d="M5 19L21 3"/>${dot(5, 19)}${dot(12, 12)}`), figs: k => trendFigs(k, false, true) },
    { id: 'scInfo', g: 'lines', sec: 'خطوط', fa: 'خطِ اطلاعات', en: 'Info Line', pts: 2, color: C.blue, opts: ['el', 'er'], ic: svg(`<path d="M4 20L13 11"/>${dot(4, 20)}${dot(13, 11)}<rect x="14" y="3" width="7" height="6" rx="1"/>`), figs: k => trendFigs(k, false, false, true) },
    { id: 'scExtended', g: 'lines', sec: 'خطوط', fa: 'خطِ ممتد', en: 'Extended Line', pts: 2, color: C.blue, opts: ['st'], ic: svg(`<path d="M2 22L22 2"/>${dot(8, 16)}${dot(16, 8)}`), figs: k => trendFigs(k, true, true) },
    { id: 'scAngle', g: 'lines', sec: 'خطوط', fa: 'زاویه‌ی روند', en: 'Trend Angle', pts: 2, color: C.blue, ic: svg(`<path d="M4 19h16" stroke-dasharray="2 2"/><path d="M4 19L18 6"/><path d="M11 19a7 7 0 0 0-2-5"/>${dot(4, 19)}`), figs: angleFigs },
    { id: 'scHLine', g: 'lines', sec: 'خطوط', fa: 'خطِ افقی', en: 'Horizontal Line', key: 'Alt+H', pts: 1, color: C.blue, opts: ['ax', 'text', 'lpos', 'lvp'], pn: ['قیمت'], ic: svg(`<path d="M2 12h20"/>${dot(12, 12)}`), figs: k => hlineFigs(k), y: k => axisY(k) },
    { id: 'scHRay', g: 'lines', sec: 'خطوط', fa: 'ریِ افقی', en: 'Horizontal Ray', key: 'Alt+J', pts: 1, color: C.blue, opts: ['ax', 'text', 'lpos', 'lvp'], pn: ['شروع'], ic: svg(`<path d="M7 12h15"/>${dot(6, 12)}`), figs: k => hlineFigs(k, true), y: k => axisY(k) },
    { id: 'scVLine', g: 'lines', sec: 'خطوط', fa: 'خطِ عمودی', en: 'Vertical Line', key: 'Alt+V', pts: 1, color: C.blue, opts: ['ax'], pn: ['زمان'], ic: svg(`<path d="M12 2v20"/>${dot(12, 12)}`), figs: vlineFigs, x: k => axisX(k) },
    { id: 'scCross', g: 'lines', sec: 'خطوط', fa: 'خطِ متقاطع', en: 'Cross Line', key: 'Alt+C', pts: 1, color: C.blue, opts: ['ax'], pn: ['نقطه'], ic: svg(`<path d="M12 2v20M2 12h20"/>${dot(12, 12)}`), figs: crossFigs, y: k => axisY(k), x: k => axisX(k) },
    { id: 'scChannel', g: 'lines', sec: 'کانال‌ها', fa: 'کانالِ موازی', en: 'Parallel Channel', pts: 3, color: C.blue, opts: ['f', 'mid', 'el', 'er'], pn: ['شروعِ خط', 'پایانِ خط', 'پهنای کانال'], ic: svg('<path d="M3 15L15 3M9 21L21 9"/><path d="M6 18L18 6" stroke-dasharray="2 2.5"/>'), figs: channelFigs },
    { id: 'scRegression', g: 'lines', sec: 'کانال‌ها', fa: 'روندِ رگرسیون', en: 'Regression Trend', pts: 2, color: C.blue, opts: ['f', 'dev', 'er'], pn: ['شروعِ بازه', 'پایانِ بازه'], noMag: true, ic: svg('<path d="M3 16L21 8" stroke-dasharray="2 2.5"/><path d="M3 12L21 4M3 20L21 12"/>'), figs: regressionFigs, move: regressionMove },
    { id: 'scFlat', g: 'lines', sec: 'کانال‌ها', fa: 'سقف/کفِ صاف', en: 'Flat Top/Bottom', pts: 3, color: C.blue, opts: ['f', 'el', 'er'], pn: ['شروعِ خطِ روند', 'پایانِ خطِ روند', 'سطحِ افقی'], ic: svg('<path d="M3 19L21 11"/><path d="M3 6h18"/>'), figs: flatFigs },
    { id: 'scPitchfork', g: 'lines', sec: 'چنگال', fa: 'چنگالِ اندروز', en: 'Pitchfork', pts: 3, color: C.orange, opts: ['f'], pn: ['دسته', 'سقف/کفِ اول', 'سقف/کفِ دوم'], ic: svg(`<path d="M3 12h18M9 5h12M9 19h12M9 5v14"/>${dot(3, 12)}`), figs: pitchforkFigs },
    { id: 'scFib', g: 'fib', fa: 'فیبوناچیِ اصلاحی', en: 'Fib Retracement', key: 'Alt+F', pts: 2, color: C.gray, opts: ['lv', 'tl', 'f', 'lb', 'lp', 'lpos', 'lvp', 'rv', 'el', 'er'], pn: ['شروعِ موج (سطحِ ۱)', 'پایانِ موج (سطحِ ۰)'], ic: svg('<path d="M3 4h18M3 9h18M3 14h18M3 20h18"/><path d="M5 20L19 4" stroke-dasharray="2 2.5"/>'), figs: fibFigs },
    { id: 'scFibExt', g: 'fib', fa: 'فیبوناچیِ گسترشی', en: 'Trend-Based Fib Extension', pts: 3, color: C.gray, opts: ['lv', 'tl', 'f', 'lb', 'lp', 'lpos', 'lvp', 'el', 'er'], pn: ['شروعِ موج (A)', 'پایانِ موج (B)', 'پایانِ اصلاح (C)'], ic: svg('<path d="M3 20L8 9l4 6" stroke-dasharray="2 2"/><path d="M13 4h8M13 9h8M13 14h8M13 19h8"/>'), figs: fibExtFigs },
    { id: 'scFibChannel', g: 'fib', fa: 'کانالِ فیبوناچی', en: 'Fib Channel', pts: 3, color: C.gray, opts: ['lv', 'f', 'lb', 'lpos', 'el', 'er'], pn: ['شروعِ خط', 'پایانِ خط', 'پهنا'], ic: svg('<path d="M3 13L13 3M5 17L17 5M8 21L21 8"/>'), figs: fibChannelFigs },
    { id: 'scFibTime', g: 'fib', fa: 'منطقه‌ی زمانیِ فیبوناچی', en: 'Fib Time Zone', pts: 2, color: C.gray, opts: ['lb'], pn: ['شروع', 'یک واحدِ زمانی'], noMag: true, ic: svg('<path d="M3 3v18M6 3v18M9 3v18M14 3v18M21 3v18"/>'), figs: fibTimeFigs },
    { id: 'scXABCD', g: 'patterns', sec: 'الگوها', fa: 'الگوی XABCD', en: 'XABCD Pattern', pts: 5, color: C.blue, opts: ['f', 'lb'], pn: ['X', 'A', 'B', 'C', 'D'], ic: svg('<path d="M2 17L7 6l4 8 5-10 6 14"/>'), figs: xabcdFigs },
    { id: 'scABCD', g: 'patterns', sec: 'الگوها', fa: 'الگوی ABCD', en: 'ABCD Pattern', pts: 4, color: C.green, opts: ['lb'], pn: ['A', 'B', 'C', 'D'], ic: svg('<path d="M3 18L9 6l5 8 7-10"/>'), figs: abcdFigs },
    { id: 'scHS', g: 'patterns', sec: 'الگوها', fa: 'سر و شانه', en: 'Head and Shoulders', pts: 7, color: C.blue, opts: ['f'], pn: ['شروع', 'شانه‌ی چپ', 'خطِ گردن ۱', 'سر', 'خطِ گردن ۲', 'شانه‌ی راست', 'پایان'], ic: svg('<path d="M2 18l4-6 3 4 3-11 3 11 3-4 4 6"/><path d="M4 16h16" stroke-dasharray="2 2"/>'), figs: hsFigs },
    { id: 'scEWImpulse', g: 'patterns', sec: 'امواجِ الیوت', fa: 'موجِ ضربه‌ایِ الیوت', en: 'Elliott Impulse Wave (12345)', pts: 6, color: C.blue, pn: ['شروع', '(1)', '(2)', '(3)', '(4)', '(5)'], ic: svg('<path d="M2 20l4-7 3 3 5-12 3 6 5-7"/>'), figs: waveFigs(['', '(1)', '(2)', '(3)', '(4)', '(5)']) },
    { id: 'scEWCorrection', g: 'patterns', sec: 'امواجِ الیوت', fa: 'موجِ اصلاحیِ الیوت', en: 'Elliott Correction Wave (ABC)', pts: 4, color: C.blue, pn: ['شروع', '(A)', '(B)', '(C)'], ic: svg('<path d="M3 5l6 11 4-6 8 10"/>'), figs: waveFigs(['', '(A)', '(B)', '(C)']) },
    { id: 'scEWTriangle', g: 'patterns', sec: 'امواجِ الیوت', fa: 'موجِ مثلثیِ الیوت', en: 'Elliott Triangle Wave (ABCDE)', pts: 6, color: C.orange, pn: ['شروع', '(A)', '(B)', '(C)', '(D)', '(E)'], ic: svg('<path d="M2 5l4 14 4-10 4 7 4-5 4 3"/>'), figs: waveFigs(['', '(A)', '(B)', '(C)', '(D)', '(E)']) },
    { id: 'scEWCombo', g: 'patterns', sec: 'امواجِ الیوت', fa: 'ترکیبیِ دوگانه‌ی الیوت', en: 'Elliott Double Combo Wave (WXY)', pts: 4, color: C.green, pn: ['شروع', '(W)', '(X)', '(Y)'], ic: svg('<path d="M3 6l6 12 5-7 7 9"/>'), figs: waveFigs(['', '(W)', '(X)', '(Y)']) },
    { id: 'scLong', g: 'measure', sec: 'پیش‌بینی', fa: 'پوزیشنِ خرید', en: 'Long Position', pts: 3, steps: 1, cls: 'up', pn: ['قیمتِ ورود', 'حدِ سود', 'حدِ ضرر'], ic: svg('<path d="M4 13h16"/><rect x="4" y="4" width="16" height="9" rx="1" fill="currentColor" fill-opacity=".18"/><rect x="4" y="13" width="16" height="6" rx="1" stroke-dasharray="2 2"/>'), figs: k => posFigs(k, true), move: posMove, done: o => posDone(o, true) },
    { id: 'scShort', g: 'measure', sec: 'پیش‌بینی', fa: 'پوزیشنِ فروش', en: 'Short Position', pts: 3, steps: 1, cls: 'down', pn: ['قیمتِ ورود', 'حدِ سود', 'حدِ ضرر'], ic: svg('<path d="M4 11h16"/><rect x="4" y="11" width="16" height="9" rx="1" fill="currentColor" fill-opacity=".18"/><rect x="4" y="5" width="16" height="6" rx="1" stroke-dasharray="2 2"/>'), figs: k => posFigs(k, false), move: posMove, done: o => posDone(o, false) },
    { id: 'scPriceRange', g: 'measure', sec: 'اندازه‌گیری', fa: 'بازه‌ی قیمت', en: 'Price Range', pts: 2, color: C.blue, pn: ['شروع', 'پایان'], ic: svg('<path d="M5 4h14M5 20h14M12 7v11"/><path d="M9 10l3-3 3 3"/>'), figs: k => rangeFigs(k, 'p') },
    { id: 'scDateRange', g: 'measure', sec: 'اندازه‌گیری', fa: 'بازه‌ی زمان', en: 'Date Range', pts: 2, color: C.blue, pn: ['شروع', 'پایان'], noMag: true, ic: svg('<path d="M4 5v14M20 5v14M7 12h11"/><path d="M15 9l3 3-3 3"/>'), figs: k => rangeFigs(k, 'd') },
    { id: 'scDPRange', g: 'measure', sec: 'اندازه‌گیری', fa: 'بازه‌ی زمان و قیمت', en: 'Date and Price Range', pts: 2, color: C.blue, pn: ['شروع', 'پایان'], ic: svg('<rect x="4" y="5" width="16" height="14" rx="1"/><path d="M12 8v8M8 12h8"/>'), figs: k => rangeFigs(k, 'dp') },
    { id: 'scMeasure', g: 'ruler', fa: 'خط‌کش (اندازه‌گیریِ موقت)', en: 'Measure', pts: 2, color: C.blue, transient: true, pn: ['شروع', 'پایان'], ic: svg('<path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>'), figs: k => rangeFigs(k, 'dp') },
    { id: 'scBrush', g: 'shapes', sec: 'قلم‌ها', fa: 'قلم', en: 'Brush', pts: 1, pad: true, color: C.blue, noHandles: true, ic: svg('<path d="M4 20c2.5 0 4-1.2 4-3.5a2.5 2.5 0 0 0-5 0"/><path d="M8.6 14.6l10-10a1.6 1.6 0 0 1 2.3 2.3l-10 10"/>'), figs: k => brushFigs(k, false) },
    { id: 'scHighlighter', g: 'shapes', sec: 'قلم‌ها', fa: 'ماژیک', en: 'Highlighter', pts: 1, pad: true, color: C.yellow, noHandles: true, ic: svg('<path d="M9 15l-4 4h6l2-2"/><path d="M9 15l8.5-8.5 3 3L12 18z"/>'), figs: k => brushFigs(k, true) },
    { id: 'scArrow', g: 'shapes', sec: 'اشکال', fa: 'فلش', en: 'Arrow', pts: 2, color: C.blue, ic: svg('<path d="M5 19L18 6"/><path d="M10 6h8v8"/>'), figs: arrowFigs },
    { id: 'scRect', g: 'shapes', sec: 'اشکال', fa: 'مستطیل', en: 'Rectangle', key: 'Alt+Shift+R', pts: 2, color: C.purple, opts: ['f', 'm', 'el', 'er'], pn: ['گوشه', 'گوشه‌ی مقابل'], ic: svg('<rect x="4" y="6" width="16" height="12" rx="1"/>'), figs: rectFigs },
    { id: 'scCircle', g: 'shapes', sec: 'اشکال', fa: 'دایره', en: 'Circle', pts: 2, color: C.orange, opts: ['f'], pn: ['مرکز', 'لبه'], noMag: true, ic: svg('<circle cx="12" cy="12" r="8"/>'), figs: circleFigs },
    { id: 'scEllipse', g: 'shapes', sec: 'اشکال', fa: 'بیضی', en: 'Ellipse', pts: 2, color: C.pink, opts: ['f'], pn: ['گوشه', 'گوشه‌ی مقابل'], noMag: true, ic: svg('<ellipse cx="12" cy="12" rx="9" ry="6"/>'), figs: ellipseFigs },
    { id: 'scTriangle', g: 'shapes', sec: 'اشکال', fa: 'مثلث', en: 'Triangle', pts: 3, color: C.green, opts: ['f'], pn: ['رأسِ اول', 'رأسِ دوم', 'رأسِ سوم'], ic: svg('<path d="M12 4l9 16H3z"/>'), figs: triangleFigs },
    { id: 'scText', g: 'notes', fa: 'متن', en: 'Text', pts: 1, color: C.blue, text: true, opts: ['text', 'fs', 'b', 'bg'], pn: ['جای متن'], noMag: true, ic: svg('<path d="M5 6.5V4.5h14v2M12 4.5v15M9 19.5h6"/>'), figs: textFigs },
    { id: 'scCallout', g: 'notes', fa: 'بالونِ متن', en: 'Callout', pts: 2, color: C.blue, text: true, opts: ['text', 'fs', 'b'], pn: ['نقطه‌ی اشاره', 'جای متن'], ic: svg('<path d="M4 4h16v11h-9l-5 5v-5H4z"/>'), figs: calloutFigs },
    { id: 'scPriceLabel', g: 'notes', fa: 'برچسبِ قیمت', en: 'Price Label', pts: 1, color: C.blue, pn: ['قیمت'], ic: svg('<path d="M4 5h16v10h-6l-2 3-2-3H4z"/><path d="M8 10h8"/>'), figs: priceLabelFigs },
    { id: 'scArrowUp', g: 'notes', fa: 'علامتِ فلشِ بالا', en: 'Arrow Mark Up', pts: 1, color: C.green, opts: ['text'], pn: ['نقطه'], ic: svg('<path d="M12 4l6 7h-3.5v9h-5v-9H6z"/>'), figs: k => markFigs(k, true) },
    { id: 'scArrowDown', g: 'notes', fa: 'علامتِ فلشِ پایین', en: 'Arrow Mark Down', pts: 1, color: C.red, opts: ['text'], pn: ['نقطه'], ic: svg('<path d="M12 20l6-7h-3.5V4h-5v9H6z"/>'), figs: k => markFigs(k, false) }
  ];
  for (const t of TOOL_LIST) T[t.id] = t;
  // نسخه‌ی قدیم (v26.37) با همین نام‌ها ذخیره کرده بود — فقط برای بارگذاری
  T.scFib.legacy = T.scRect.legacy = T.scText.legacy = T.scLong.legacy = T.scShort.legacy = true;
  const GROUPS = [
    { id: 'cur', fa: 'نشانگر', en: 'Cursors' }, { id: 'lines', fa: 'خطوط و کانال‌ها', en: 'Trend line tools' }, { id: 'fib', fa: 'فیبوناچی', en: 'Fibonacci tools' },
    { id: 'patterns', fa: 'الگوها و امواج', en: 'Patterns' }, { id: 'measure', fa: 'پیش‌بینی و اندازه‌گیری', en: 'Prediction and measurement tools' },
    { id: 'shapes', fa: 'اشکالِ هندسی', en: 'Geometric shapes' }, { id: 'notes', fa: 'متن و یادداشت', en: 'Annotation tools' }
  ].map(g => ({ ...g, tools: TOOL_LIST.filter(t => t.g === g.id).map(t => t.id) }));
  const OPT = {
    el: ['bool', 'امتداد به چپ (آن‌سوی نقطه‌ی اول)', 'Extend left'], er: ['bool', 'امتداد به راست (آن‌سوی نقطه‌ی دوم)', 'Extend right'],
    st: ['bool', 'نمایشِ آمار: تغییرِ قیمت، درصد، تعدادِ کندل، زاویه', 'Stats: price change, percent, bars, angle'],
    ax: ['boolOn', 'برچسبِ قیمت/زمان روی محور', 'Price/time label on axis'], text: ['text', 'متن', 'Text'], f: ['boolOn', 'پس‌زمینه', 'Background'],
    mid: ['boolOn', 'خطِ میانی', 'Middle line'], m: ['bool', 'خطِ میانی', 'Middle line'], dev: ['dev', 'انحرافِ معیار', 'Deviation'],
    lb: ['boolOn', 'برچسبِ سطوح', 'Labels'], rv: ['bool', 'معکوس (سطحِ ۰ روی نقطه‌ی اول)', 'Reverse (level 0 on point 1)'], lv: ['levels', 'سطوح', 'Levels'],
    fs: ['fs', 'اندازه‌ی قلم', 'Font size'], b: ['bool', 'درشت (Bold)', 'Bold'], bg: ['bool', 'کادر و پس‌زمینه', 'Border and background'],
    tl: ['boolOn', 'خطِ روند', 'Trend line'], lp: ['boolOn', 'قیمت در برچسب‌ها', 'Prices in labels'],
    lpos: ['lpos', 'جای برچسب‌ها (افقی)', 'Labels position'], lvp: ['lvp', 'جای برچسب‌ها (عمودی)', 'Labels vertical position']
  };
  const ICON = {
    tri: '<svg viewBox="0 0 6 6" aria-hidden="true"><path d="M6 0v6H0z" fill="currentColor"/></svg>',
    magnet: svg('<path d="M6 4v8a6 6 0 0 0 12 0V4h-4v8a2 2 0 0 1-4 0V4z"/><path d="M6 8h4M14 8h4"/>'),
    magnetS: svg('<path d="M6 4v8a6 6 0 0 0 12 0V4h-4v8a2 2 0 0 1-4 0V4z" fill="currentColor" fill-opacity=".35"/><path d="M6 8h4M14 8h4"/>'),
    stay: svg('<path d="M13.5 5.5l4 4L9 18H5v-4z"/><rect x="15" y="15" width="6" height="5" rx="1"/><path d="M16.5 15v-1.3a1.5 1.5 0 0 1 3 0V15"/>'),
    lock: svg('<rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
    unlock: svg('<rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 7.6-1.8"/>'),
    eye: svg('<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
    eyeOff: svg('<path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.6C3.7 8.3 2 12 2 12s3.6 7 10 7a9.6 9.6 0 0 0 5.4-1.6"/>'),
    trash: svg('<path d="M4 7h16M9 7V4h6v3M6.5 7l1 13h9l1-13"/>'),
    undo: svg('<path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>'),
    redo: svg('<path d="M15 14l5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/>'),
    tree: svg('<path d="M4 6h3M4 12h3M4 18h3M10 6h10M10 12h10M10 18h10"/>'),
    gear: svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'),
    clone: svg('<rect x="8" y="8" width="12" height="12" rx="1.5"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>'),
    width: svg('<path d="M4 6h16" stroke-width="1"/><path d="M4 11.5h16" stroke-width="2.2"/><path d="M4 18h16" stroke-width="3.6"/>'),
    style: svg('<path d="M3 7h18"/><path d="M3 12h3M9 12h3M15 12h3" /><path d="M3 17h1M7 17h1M11 17h1M15 17h1M19 17h1"/>'),
    textEdit: svg('<path d="M5 6.5V4.5h14v2M12 4.5v15M9 19.5h6"/>'),
    ind: svg('<path d="M3 17l5-6 4 3 6-8 3 3"/>'),
    chev: svg('<path d="M6 9l6 6 6-6"/>'),
    close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
    full: svg('<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'),
    wl: svg('<path d="M4 6h10M4 12h10M4 18h7"/><path d="M18 13.5l1.4 2.8 3.1.5-2.2 2.1.5 3.1-2.8-1.5-2.8 1.5.5-3.1-2.2-2.1 3.1-.5z"/>'),
    plus: svg('<path d="M12 5v14M5 12h14"/>'),
    pen: svg('<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>'),
    grip: svg('<circle cx="9" cy="6" r="1.2" fill="currentColor"/><circle cx="15" cy="6" r="1.2" fill="currentColor"/><circle cx="9" cy="12" r="1.2" fill="currentColor"/><circle cx="15" cy="12" r="1.2" fill="currentColor"/><circle cx="9" cy="18" r="1.2" fill="currentColor"/><circle cx="15" cy="18" r="1.2" fill="currentColor"/>'),
    camera: svg('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'),
    rt: svg('<path d="M6 7l5 5-5 5M13 7l5 5-5 5"/>'),
    sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    moon: svg('<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>'),
    unfull: svg('<path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5"/>')
  };

  // ── ثبتِ شکل‌ها در موتور ──
  let registered = false;
  function registerOverlays() {
    if (registered) return; registered = true;
    const kc = window.klinecharts;
    kc.registerFigure({ name: 'scHit', draw: () => {}, checkEventOn: (p, a) => {
      const c = a.coordinates || [], tol = S.tol;
      if (a.area && c.length > 2 && inPoly(p, c)) return true;
      for (let i = 1; i < c.length; i++) if (distSeg(p, c[i - 1], c[i]) <= tol) return true;
      if (a.area && c.length > 2 && distSeg(p, c[c.length - 1], c[0]) <= tol) return true;
      return c.length === 1 && Math.hypot(p.x - c[0].x, p.y - c[0].y) <= tol;
    } });
    kc.registerFigure({ name: 'scEll', draw: (ctx, a, s) => {
      ctx.beginPath(); ctx.ellipse(a.x, a.y, Math.max(0.5, a.rx), Math.max(0.5, a.ry), 0, 0, Math.PI * 2);
      if (s.fill) { ctx.fillStyle = s.fill; ctx.fill(); }
      if (s.border) { ctx.lineWidth = s.w || 1; ctx.strokeStyle = s.border; ctx.setLineDash(s.s ? (s.s === 2 ? [Math.max(1, s.w), s.w * 2 + 1.5] : [s.w * 4 + 2, s.w * 3]) : []); ctx.stroke(); ctx.setLineDash([]); }
    }, checkEventOn: (p, a) => {
      const rx = Math.max(1, a.rx), ry = Math.max(1, a.ry), r = Math.hypot((p.x - a.x) / rx, (p.y - a.y) / ry);
      return a.area ? r <= 1 + S.tol / Math.min(rx, ry) : Math.abs(r - 1) * Math.min(rx, ry) <= S.tol;
    } });
    kc.registerFigure({ name: 'scPath', draw: (ctx, a, s) => {
      const c = a.coordinates || []; if (c.length < 2) return;
      ctx.save(); ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.lineWidth = s.w || 1; ctx.strokeStyle = s.color;
      ctx.beginPath(); ctx.moveTo(c[0].x, c[0].y);
      for (let i = 1; i < c.length - 1; i++) { const m = midPt(c[i], c[i + 1]); ctx.quadraticCurveTo(c[i].x, c[i].y, m.x, m.y); }
      ctx.lineTo(c[c.length - 1].x, c[c.length - 1].y); ctx.stroke(); ctx.restore();
    }, checkEventOn: () => false });
    kc.registerFigure({ name: 'scTxt', draw: (ctx, a) => {
      const b = textBox(a);
      ctx.save();
      if (a.bg || a.border) {
        ctx.beginPath(); const r = Math.min(a.radius ?? 3, b.h / 2);
        if (ctx.roundRect) ctx.roundRect(b.x, b.y, b.w, b.h, r); else ctx.rect(b.x, b.y, b.w, b.h);
        if (a.bg) { ctx.fillStyle = a.bg; ctx.fill(); }
        if (a.border) { ctx.lineWidth = 1; ctx.strokeStyle = a.border; ctx.stroke(); }
      }
      ctx.font = `${a.weight || 500} ${b.size}px ${a.family || MONO}`; ctx.fillStyle = a.color || '#D1D4DC'; ctx.textBaseline = 'middle';
      a.lines.forEach((l, i) => {
        const rtl = RTL.test(l), y = b.y + (b.pad ? b.pad - (b.lh - b.size) * 0.25 : 0) + b.lh * i + b.lh / 2;
        ctx.direction = rtl ? 'rtl' : 'ltr';
        if (a.align === 'center') { ctx.textAlign = 'center'; ctx.fillText(l, b.x + b.w / 2, y); }
        else if (rtl || a.align === 'right') { ctx.textAlign = 'right'; ctx.fillText(l, b.x + b.w - b.pad, y); }
        else { ctx.textAlign = 'left'; ctx.fillText(l, b.x + b.pad, y); }
      });
      ctx.restore();
    }, checkEventOn: (p, a) => { const b = textBox(a); return p.x >= b.x - 2 && p.x <= b.x + b.w + 2 && p.y >= b.y - 2 && p.y <= b.y + b.h + 2; } });
    const ctxOf = arg => {
      const o = arg.overlay, m = o.extendData || {}, def = T[o.name];
      return { o, m, def, c: arg.coordinates || [], W: arg.bounding.width, H: arg.bounding.height, bs: arg.barSpace?.bar || S.chart?.getBarSpace?.() || 6,
        xAxis: arg.xAxis, yAxis: arg.yAxis, col: m.c || def.color || C.blue, w: clamp(+m.w || 1, 1, 4), s: +m.s || 0, x: m.x || {},
        v: (o.points || []).map(p => p.value), t: (o.points || []).map(tsOfPoint) };
    };
    // دسته‌ها مثلِ TradingView: حلقه‌ی نازکِ توخالی روی نقطه‌ها، فقط وقتی شکل انتخاب‌شده، زیرِ موس یا در حالِ رسم است
    const handleFigs = k => {
      const id = k.o.id, drawing = id === S.drawingId || !!k.o.isDrawing?.();
      if (readOnly() || !(drawing || id === S.selected || id === S.hoverId)) return [];
      // نقطه‌ای که الان با نشانگر جابه‌جا می‌شود (فقط اگر واقعاً حرکتی بوده؛ با انگشت تا ضربه‌ی بعد چنین نقطه‌ای نیست)
      const step = k.o.currentStep || 0, moving = drawing && k.o.points?.length >= step ? step - 1 : -1;
      const r = S.touch ? 6 : 4.5, out = [];
      k.c.forEach((c, i) => {
        if (!c || !isNum(c.x) || !isNum(c.y)) return;
        const cur = i === moving;   // زیرِ نشانگر: فقط حلقه‌ی ریز، تا کندل و قیمت دیده شود
        out.push({ type: 'scEll', ignoreEvent: true, attrs: { x: c.x, y: c.y, rx: cur ? 2.5 : r, ry: cur ? 2.5 : r, area: false, handle: true }, styles: { fill: null, border: k.col, w: cur ? 1 : 1.5, s: 0 } });
      });
      return out;
    };
    const run = (fn, arg) => {
      const k = ctxOf(arg);
      try {
        const f = fn(k) || [];
        if (fn === k.def.figs) { if (S.debug) S.lastFigs.set(k.o.id, f.slice()); if (!k.def.noHandles) { const h = handleFigs(k); if (S.debug) S.lastHandles.set(k.o.id, h); f.push(...h); } }
        return f;
      }
      catch (e) { if (S.figErr.length < 50) S.figErr.push(k.o.name + ': ' + (e?.message || e)); return []; }
    };
    for (const def of TOOL_LIST) {
      if (def.special) continue;
      const hook = arg => { if (!S.quiet && !def.noMag) magnetize(arg.performPoint); if (def.move) def.move(arg); };
      kc.registerOverlay({
        name: def.id, totalStep: (def.steps || def.pts) + 1, needDefaultPointFigure: !def.noHandles, needDefaultXAxisFigure: !def.pad && def.pts <= 3, needDefaultYAxisFigure: !def.pad,
        createPointFigures: arg => run(def.figs, arg),
        createYAxisFigures: def.y ? arg => run(def.y, arg) : null,
        createXAxisFigures: def.x ? arg => run(def.x, arg) : null,
        performEventMoveForDrawing: hook, performEventPressedMove: hook
      });
    }
  }

  // ── آهنربا: ضعیف = فقط نزدیکِ OHLC، قوی = همیشه نزدیک‌ترین OHLC؛ Ctrl موقتاً برعکسش می‌کند ──
  const magMode = () => S.ctrl ? (S.mag ? 0 : (S.magLast || 1)) : S.mag;
  function magnetize(pt) {
    const m = magMode(); if (!m || !pt || !isNum(pt.value) || !isNum(pt.dataIndex) || !S.chart) return;
    const k = S.chart.getDataList()[pt.dataIndex]; if (!k) return;
    const yOf = v => S.chart.convertToPixel({ dataIndex: pt.dataIndex, value: v }, { paneId: 'candle_pane' })?.y;
    const y = yOf(pt.value); if (!isNum(y)) return;
    let best = null, bd = Infinity;
    for (const v of [k.open, k.high, k.low, k.close]) { const d = Math.abs(yOf(v) - y); if (d < bd) { bd = d; best = v; } }
    if (m === 2 || bd <= S.magTol) pt.value = best;
  }

  // ── وصله‌ها روی خودِ موتور (یک بار) ──
  let patched = false;
  function patchEngine(chart) {
    // v26.40: رسم و کشیدنِ شکل همیشه روی پنلِ اصلی. کتابخانه شکل را به پنلی می‌برد که اولین ضربه آن‌جا بود
    // (حجم/RSI ⇒ «قیمتِ» نقطه عددِ حجم می‌شد) و ضربه‌ی بعدی در پنلِ دیگر را نادیده می‌گرفت ⇒ شکلِ نیمه‌کاره.
    // حالا وسطِ رسم/کشیدن، اشاره روی پنلِ اندیکاتور = همان قیمت آن‌سوی لبه‌ی پایینِ نمودارِ اصلی.
    const ce = chart._chartEvent;
    if (ce && typeof ce._findWidgetByEvent === 'function' && !ce.__scPane) {
      const find = ce._findWidgetByEvent.bind(ce); ce.__scPane = true;
      ce._findWidgetByEvent = e => {
        const r = find(e);
        try {
          if (r?.pane && r.pane.getId() !== 'candle_pane' && r.widget && r.widget === r.pane.getMainWidget()) {
            const os = chart.getChartStore().getOverlayStore();
            if (os.getProgressInstanceInfo() || os.getPressedInstanceInfo()?.instance) {
              const cp = chart.getDrawPaneById('candle_pane'); if (cp) return { pane: cp, widget: cp.getMainWidget() };
            }
          }
        } catch (_) {}
        return r;
      };
    }
    // v26.41: نمودار از وسط بالا/پایین هم می‌رود (مثلِ TradingView): کشیدنِ عمودی روی نمودارِ اصلی مقیاسِ خودکارِ قیمت را
    // خاموش می‌کند تا کتابخانه همان کشیدن را جابه‌جاییِ عمودی کند؛ دکمه‌ی «A» گوشه‌ی محورِ قیمت آن را برمی‌گرداند.
    if (ce && typeof ce.pressedMouseMoveEvent === 'function' && !ce.__scPan) {
      const pm = ce.pressedMouseMoveEvent.bind(ce); ce.__scPan = true;
      ce.pressedMouseMoveEvent = e => {
        try {
          const w = ce._mouseDownWidget, st = ce._startScrollCoordinate, os = chart.getChartStore().getOverlayStore();
          if (w && st && w.getName() === 'main' && w.getPane().getId() === 'candle_pane' && !os.getPressedInstanceInfo()?.instance && !os.getProgressInstanceInfo() && !T[S.tool]?.pad) {
            const ax = w.getPane().getAxisComponent(), b = w.getBounding(), dy = e.y - b.top - st.y, dx = e.x - b.left - st.x;
            if (ax.getAutoCalcTickFlag() && Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx) * 0.5) { ax.setAutoCalcTickFlag(false); setTimeout(paintAuto, 0); }
          }
        } catch (_) {}
        return pm(e);
      };
    }
    // v26.44: چرخِ موس روی محورها (مثلِ TradingView) — روی محورِ قیمت = زومِ عمودیِ همان پنل (و «A» خاموش)،
    // روی محورِ زمان = زومِ زمان دورِ همان نقطه. کتابخانه چرخ را فقط روی خودِ نمودار می‌شناخت.
    if (ce && typeof ce.mouseWheelVertEvent === 'function' && !ce.__scWheel) {
      const mw = ce.mouseWheelVertEvent.bind(ce); ce.__scWheel = true;
      ce.mouseWheelVertEvent = (e, scale) => {
        try {
          const f = ce._findWidgetByEvent(e), w = f.widget, pane = f.pane, name = w?.getName?.();
          if (name === 'yAxis' && pane) {
            const ax = pane.getAxisComponent(), r = ax.getRange();
            if (r && isNum(r.range) && ax.getScrollZoomEnabled()) {
              const range = r.range * (1 - clamp(scale, -1, 1) * 0.12), d = (range - r.range) / 2, from = r.from - d, to = r.to + d;
              const rf = ax.convertToRealValue(from), rt = ax.convertToRealValue(to);
              ax.setRange({ from, to, range, realFrom: rf, realTo: rt, realRange: rt - rf });
              chart.adjustPaneViewport(false, true, true, true);
              if (pane.getId() === 'candle_pane') setTimeout(paintAuto, 0);
              return true;
            }
          }
          if (name === 'xAxis' && w) { const b = w.getBounding(); chart.getChartStore().getTimeScaleStore().zoom(scale, { x: e.x - b.left, y: 0 }); return true; }
        } catch (_) {}
        return mw(e, scale);
      };
    }
    // لمس: کتابخانه کشیدنِ انگشت را فقط افقی می‌کند؛ همان جابه‌جاییِ عمودیِ موس این‌جا برای انگشت هم ساخته شده
    if (ce && typeof ce.touchMoveEvent === 'function' && typeof ce.touchStartEvent === 'function' && !ce.__scTouchPan) {
      const tsE = ce.touchStartEvent.bind(ce), tmE = ce.touchMoveEvent.bind(ce); ce.__scTouchPan = true;
      ce.touchStartEvent = e => { ce.__scRange = null; ce.__scY = null; return tsE(e); };
      ce.touchMoveEvent = e => {
        try {
          const st = ce._startScrollCoordinate, os = chart.getChartStore().getOverlayStore(), f = ce._findWidgetByEvent(e), w = f.widget, pane = f.pane;
          if (st && ce._touchCoordinate == null && w && pane && w.getName() === 'main' && pane.getId() === 'candle_pane' && !os.getPressedInstanceInfo()?.instance && !os.getProgressInstanceInfo() && !T[S.tool]?.pad) {
            const ax = pane.getAxisComponent(), b = w.getBounding(), x = e.x - b.left, y = e.y - b.top;
            let go = !ax.getAutoCalcTickFlag();
            if (!go && Math.abs(y - st.y) > 10 && Math.abs(y - st.y) >= Math.abs(x - st.x) * 0.5) { ax.setAutoCalcTickFlag(false); go = true; setTimeout(paintAuto, 0); }
            if (go) {
              if (!ce.__scRange) { ce.__scRange = { ...ax.getRange() }; ce.__scY = y; }
              const { from, range } = ce.__scRange, dist = ax.isReverse() ? ce.__scY - y : y - ce.__scY, nf = from + range * dist / b.height, nt = nf + range;
              const rf = ax.convertToRealValue(nf), rt = ax.convertToRealValue(nt);
              ax.setRange({ from: nf, to: nt, range, realFrom: rf, realTo: rt, realRange: rt - rf });
              chart.getChartStore().getTimeScaleStore().scroll(x - st.x);   // بازرسمِ همه + حرکتِ افقیِ هم‌زمان (مثلِ موس)
              return true;
            }
          }
        } catch (_) {}
        return tmE(e);
      };
    }
    if (patched) return;
    const ts = chart.getChartStore?.()?.getTimeScaleStore?.();
    const OvProto = Object.getPrototypeOf(window.klinecharts.getOverlayClass('scTrend')?.prototype || {});
    if (!ts || !OvProto || typeof OvProto.forceComplete !== 'function') return;
    patched = true;
    // زمان ⇄ جایگاه، بیرون از محدوده‌ی کندل‌ها هم (با طولِ تایم‌فریم)
    const proto = Object.getPrototypeOf(ts), t2i = proto.timestampToDataIndex, i2t = proto.dataIndexToTimestamp;
    proto.timestampToDataIndex = function (t) {
      const list = this._chartStore?.getDataList?.() || [], n = list.length, step = tfMs();
      if (n && isNum(t)) {
        if (t > list[n - 1].timestamp) return n - 1 + Math.round((t - list[n - 1].timestamp) / step);
        if (t < list[0].timestamp) return Math.round((t - list[0].timestamp) / step);
      }
      return t2i.call(this, t);
    };
    proto.dataIndexToTimestamp = function (i) {
      const list = this._chartStore?.getDataList?.() || [], n = list.length, step = tfMs();
      if (n && isNum(i)) {
        if (i > n - 1) return list[n - 1].timestamp + (i - (n - 1)) * step;
        if (i < 0) return list[0].timestamp + i * step;
      }
      return i2t.call(this, i);
    };
    // دو ضربه‌ی سریع وسطِ رسم: کتابخانه شکل را ناقص «تمام» می‌کرد؛ این‌جا همان ضربه نقطه‌ی بعدی را می‌گذارد
    const fc = OvProto.forceComplete, ns = OvProto.nextStep;
    OvProto.forceComplete = function () {
      if (!T[this.name] || !this.isDrawing()) return fc.call(this);
      const lp = S.lastPtr, prev = this.points[this.currentStep - 2];
      if (!lp || !S.chart) return;
      const pt = S.chart.convertFromPixel([{ x: lp.x, y: lp.y }], { paneId: 'candle_pane' })?.[0];
      if (!pt || !isNum(pt.value)) return;
      const pp = prev ? S.chart.convertToPixel({ timestamp: tsOfPoint(prev), value: prev.value }, { paneId: 'candle_pane' }) : null;
      if (pp && isNum(pp.x) && Math.hypot(pp.x - lp.x, pp.y - lp.y) < 6) return;     // دوبار-کلیکِ واقعی روی همان نقطه
      this.eventMoveForDrawing(pt); this.nextStep();
    };
    OvProto.nextStep = function () { ns.call(this); if (T[this.name] && this.id === S.drawingId) setTimeout(() => { if (this.isDrawing() && this.id === S.drawingId) hint(this.name, this.currentStep); }, 0); };
  }

  // ── ظاهر: تمِ تیره (رنگ‌های خودِ اپ) و روشن (همان رنگ‌های TradingView) ──
  const THEME = {
    dark: { bg: '#0b0a09', txt: '#8a8274', line: '#2a2621', grid: 'rgba(255,255,255,.035)', up: UP, down: DOWN, tip: '#aea89e', cross: 'rgba(200,168,75,.45)', crossBg: '#3a332a', crossTxt: '#EFEAE3', icon: '#8a8274', iconOn: '#EFEAE3', iconBg: 'rgba(255,255,255,.12)' },
    light: { bg: '#FFFFFF', txt: '#131722', line: '#E0E3EB', grid: '#F0F3FA', up: '#089981', down: '#F23645', tip: '#131722', cross: '#9598A1', crossBg: '#131722', crossTxt: '#FFFFFF', icon: '#787B86', iconOn: '#131722', iconBg: 'rgba(19,23,34,.08)' }
  };
  const TH = () => THEME[S.theme] || THEME.dark;
  const ICON_FONT = "'Segoe UI Symbol','Apple Symbols','Noto Sans Symbols 2','Noto Sans Symbols',sans-serif";
  function stylesFor() {
    const t = TH(), rule = S.phone ? 'follow_cross' : 'always';
    // ⚙ و ✕ کنارِ نامِ هر اندیکاتور (مثلِ TradingView): تنظیمات و حذف
    const ic = (id, icon, ml) => ({ id, position: 'middle', marginLeft: ml, marginTop: 0, marginRight: 0, marginBottom: 0, paddingLeft: 3, paddingTop: 1, paddingRight: 3, paddingBottom: 1,
      size: 12, color: t.icon, activeColor: t.iconOn, backgroundColor: 'rgba(0,0,0,0)', activeBackgroundColor: t.iconBg, fontFamily: ICON_FONT, icon });
    const tick = { color: t.txt, size: 11, family: MONO };
    const cs = S.cs || {}, up = /^#[0-9A-Fa-f]{6}$/.test(cs.up || '') ? cs.up : t.up, down = /^#[0-9A-Fa-f]{6}$/.test(cs.down || '') ? cs.down : t.down;
    const ctype = { hollow: 'candle_up_stroke', bars: 'ohlc', line: 'area', area: 'area' }[S.ct] || 'candle_solid';
    const fill = S.ct === 'line' ? ['rgba(41,98,255,0)', 'rgba(41,98,255,0)'] : ['rgba(41,98,255,0.01)', 'rgba(41,98,255,0.24)'];
    const crossText = { backgroundColor: t.crossBg, borderColor: t.crossBg, family: MONO, size: 11, color: t.crossTxt };
    return {
      grid: { show: cs.grid !== false, horizontal: { color: t.grid }, vertical: { color: t.grid } },
      candle: {
        type: ctype,
        bar: { upColor: up, downColor: down, noChangeColor: t.txt, upBorderColor: up, downBorderColor: down, noChangeBorderColor: t.txt, upWickColor: up, downWickColor: down, noChangeWickColor: t.txt },
        area: { lineSize: 2, lineColor: '#2962FF', smooth: false, value: 'close', backgroundColor: [{ offset: 0, color: fill[0] }, { offset: 1, color: fill[1] }], point: { show: false } },
        priceMark: { show: true, high: { show: cs.hl !== false, color: t.txt, textFamily: MONO, textSize: 11 }, low: { show: cs.hl !== false, color: t.txt, textFamily: MONO, textSize: 11 },
          last: { show: cs.last !== false, upColor: up, downColor: down, text: { family: MONO, size: 11, weight: 600 } } },
        tooltip: { showRule: cs.legend === false ? 'none' : rule, showType: 'standard', text: { color: t.tip, size: 11, family: MONO, marginLeft: 6, marginRight: 6 } }
      },
      indicator: { tooltip: { showRule: cs.legend === false ? 'none' : rule, text: { color: t.tip, size: 11, family: MONO }, icons: readOnly() ? [] : [ic('set', '⚙', 8), ic('del', '✕', 2)] } },
      xAxis: { axisLine: { color: t.line }, tickLine: { color: t.line }, tickText: tick },
      yAxis: { type: S.ys === 'log' ? 'log' : S.ys === 'pct' ? 'percentage' : 'normal', axisLine: { color: t.line }, tickLine: { color: t.line }, tickText: tick },
      separator: { color: t.line },
      crosshair: { horizontal: { line: { color: t.cross }, text: crossText }, vertical: { line: { color: t.cross }, text: crossText } },
      overlay: { text: { family: MONO, size: 11 }, rect: { color: 'rgba(41,98,255,.12)' } }
    };
  }
  // v26.45 (مالک: «موقعِ کشیدن، دایره‌ی رنگیِ زیرِ نشانگر نمی‌گذارد درست ببینیم»): کتابخانه هر دسته را دو دایره‌ی پُر می‌کشید
  // (در حالِ رسم یک لکه‌ی رنگیِ ۱۹ پیکسلی روی کندل). حالا دایره‌ی کتابخانه نامرئی است و فقط برای گرفتن/کشیدن می‌ماند؛
  // حلقه‌ی نازک و توخالی را خودمان می‌کشیم (handleFigs) و نقطه‌ی زیرِ نشانگر هنگامِ رسم فقط یک حلقه‌ی ریز است.
  const NONE = 'rgba(0,0,0,0)';
  const ovStyles = col => ({
    point: { color: NONE, borderColor: NONE, borderSize: 2, radius: S.touch ? 8 : 5, activeColor: NONE, activeBorderColor: NONE, activeBorderSize: 2, activeRadius: S.touch ? 8 : 5 },
    text: { color: ink(col), backgroundColor: col, borderColor: col, family: MONO, size: 11 },
    rect: { color: hexA(col, 0.12) }
  });

  // ── داده ──
  const toK = c => ({ timestamp: c.t, open: c.o, high: c.h, low: c.l, close: c.c, volume: c.v });
  // هیکن‌آشی (مثلِ TradingView): از کلِ تاریخچه‌ی بارشده ساخته می‌شود؛ داده‌ی خام (S.data) دست نمی‌خورد
  function toHA(list) {
    const out = []; let po = null, pc = null;
    for (const k of list) {
      const c = (k.open + k.high + k.low + k.close) / 4, o = po == null ? (k.open + k.close) / 2 : (po + pc) / 2;
      out.push({ ...k, open: o, close: c, high: Math.max(k.high, o, c), low: Math.min(k.low, o, c) }); po = o; pc = c;
    }
    return out;
  }
  const viewData = list => S.ct === 'ha' ? toHA(list) : list;
  async function fetchCandles({ before = 0, limit = BARS } = {}) {
    const q = `src=${S.src}&coin=${encodeURIComponent(S.coin)}&tf=${S.tf}&limit=${limit}` + (before ? `&before=${before}` : '');
    const r = await apiFetch('/api/chart/candles?' + q, {}, { retries: 1 });
    if (!r) return { ok: false, err: 'offline' };
    const d = await r.json().catch(() => ({}));
    if (!r.ok) return { ok: false, err: d.error || 'http_' + r.status, status: r.status };
    return { ok: true, list: (d.candles || []).map(toK), more: !!d.more };
  }
  async function loadSeries() {
    const gen = ++S.gen;
    stopPoll(); msg(tr('در حالِ بارگذاری…', 'Loading…'), 'load');
    const res = await fetchCandles();
    if (gen !== S.gen) return;
    if (!res.ok) {
      S.data = []; cancelDrawing(); clearOverlays(); S.chart.clearData();
      msg(res.status === 404 ? tr(`${S.coin} در ${srcName()} پیدا نشد — منبعِ دیگری را امتحان کن.`, `${S.coin} was not found on ${srcName()} — try another source.`)
        : res.err === 'offline' ? tr('اینترنت در دسترس نیست. با اتصال دوباره، نمودار بارگذاری می‌شود.', 'No internet connection. The chart will load when you are back online.')
        : tr(`${srcName()} الان پاسخ نمی‌دهد — منبعِ دیگری را امتحان کن.`, `${srcName()} is not responding — try another source.`), 'err');
      paintHead(); return;
    }
    S.data = res.list; S.more = res.more;
    if (S.store) S.store.recent = [S.coin, ...(S.store.recent || []).filter(x => x !== S.coin)].slice(0, 10);
    const last = S.data[S.data.length - 1];
    S.chart.setPriceVolumePrecision(precisionOf(last?.close), 2);
    { const a = candleAxis(); if (a && !a.getAutoCalcTickFlag()) a.setAutoCalcTickFlag(true); }   // نماد/تایم‌فریمِ تازه = مقیاسِ خودکار
    S.chart.applyNewData(viewData(S.data), S.more);
    setTimeout(() => { paintAuto(); updRT(); }, 0);
    const bs = S.store?.prefs?.bs; if (isNum(bs) && bs >= 1 && bs <= 50) S.chart.setBarSpace(bs);   // زومِ خودِ دانشجو
    msg('');
    restoreDrawings();
    paintHead();
    startPoll();
  }
  function onLoadData({ type, data, callback }) {
    if (type !== 'forward' || !data) { callback([], false); return; }
    const gen = S.gen;
    fetchCandles({ before: data.timestamp }).then(res => {
      if (gen !== S.gen) { callback([], false); return; }
      if (!res.ok) { callback([], true); return; }
      S.data = res.list.concat(S.data); callback(S.ct === 'ha' ? toHA(S.data).slice(0, res.list.length) : res.list, res.more && res.list.length > 0);
    });
  }
  function startPoll() {
    stopPoll();
    S.poll = setInterval(async () => {
      if (S.pollBusy || document.hidden || !$('screen-chart')?.classList.contains('active') || !S.data.length) return;
      S.pollBusy = true; const gen = S.gen;
      try {
        const res = await fetchCandles({ limit: 3 });
        if (gen !== S.gen || !res.ok) return;
        const lastT = S.data[S.data.length - 1].timestamp;
        for (const k of res.list) {
          if (k.timestamp < lastT) continue;
          if (k.timestamp === S.data[S.data.length - 1].timestamp) S.data[S.data.length - 1] = k; else S.data.push(k);
          S.chart.updateData(S.ct === 'ha' ? toHA(S.data.slice(-300)).pop() : k);
        }
        paintHead(); updRT();
      } finally { S.pollBusy = false; }
    }, tfOf(S.tf).poll);
  }
  function stopPoll() { if (S.poll) clearInterval(S.poll); S.poll = null; }

  // ── ذخیره ──
  const emptyPrefs = () => ({ ind: ['VOL'], mag: 1, magLast: 1, gl: {} });
  function emptyStore() { return { v: 2, last: { src: S.src, coin: S.coin, tf: S.tf }, prefs: emptyPrefs(), layouts: {} }; }
  // v26.37 ⇒ v26.38: نام‌های قدیمی، رنگِ طلاییِ پیش‌فرضِ آن نسخه، فیبوی تا لبه‌ی راست و متنِ کادردار حفظ می‌شود
  const GOLD_DEFAULT = new Set(['segment', 'rayLine', 'straightLine', 'horizontalStraightLine', 'horizontalRayLine', 'verticalStraightLine', 'parallelStraightLine', 'priceChannelLine', 'priceLine', 'scRect', 'scText']);
  function migrateRec(r) {
    const n = LEGACY[r.n] || r.n, out = { ...r, n };
    if (GOLD_DEFAULT.has(r.n) && !r.c) out.c = GOLD;
    if (r.n === 'scFib') out.x = { er: true, ...(r.x || {}) };
    if (r.n === 'scText') out.x = { bg: true, fs: 13, b: true, ...(r.x || {}) };
    return out;
  }
  function migrate(store) {
    if (!store || (+store.v || 1) >= 2) return store;
    for (const lay of Object.values(store.layouts || {})) if (Array.isArray(lay?.d)) lay.d = lay.d.map(migrateRec);
    const p = store.prefs || {};
    store.prefs = { ...emptyPrefs(), ...p, mag: p.mag ?? (p.magnet === false ? 0 : 1) }; delete store.prefs.magnet;
    store.v = 2;
    return store;
  }
  async function loadStore() {
    S.store = migrate(L.g(cacheKey()) || null);
    const r = await apiFetch('/api/kv/' + storeKey(), {}, { retries: 1 });
    if (r && r.ok) {
      const d = await r.json().catch(() => ({}));
      S.rev = d.revision || null;
      if (d.value && typeof d.value === 'object') { const sv = migrate(d.value); S.store = S.store ? merge(S.store, sv) : sv; }
      S.loadedStore = true;
    }
    if (!S.store) S.store = emptyStore();
    S.store.v = 2; S.store.layouts = S.store.layouts || {}; S.store.prefs = { ...emptyPrefs(), ...(S.store.prefs || {}) };
  }
  function merge(local, server) {
    const out = { ...server, layouts: { ...(server.layouts || {}) } };
    for (const [coin, lay] of Object.entries(local.layouts || {}))
      if (!out.layouts[coin] || (+lay.u || 0) > (+out.layouts[coin].u || 0)) out.layouts[coin] = lay;
    out.last = local.last || server.last; out.prefs = local.prefs || server.prefs; out.v = 2;
    return out;
  }
  function scheduleSave() {
    if (readOnly()) return;
    L.s(cacheKey(), S.store);
    clearTimeout(S.saveTimer); S.saveTimer = setTimeout(save, 1200);
    status('saving');
  }
  async function save() {
    if (readOnly()) return;
    if (S.saving) { S.saveAgain = true; return; }
    S.saving = true;
    try {
      for (let i = 0; i < 3; i++) {
        const r = await apiFetch('/api/kv/' + storeKey(), { method: 'PUT', headers: S.rev ? { 'If-Match': S.rev } : {}, body: JSON.stringify({ value: S.store }) }, { retries: 1 });
        if (!r) { status('local'); return; }
        const d = await r.json().catch(() => ({}));
        if (r.ok) { S.rev = d.revision || null; L.s(cacheKey(), S.store); status('saved'); return; }
        if (r.status === 409 && d.value) { S.store = merge(S.store, migrate(d.value)); S.rev = d.revision || null; continue; }
        if (r.status === 413 || r.status === 422) { status('full'); return; }
        status('local'); return;
      }
    } finally {
      S.saving = false;
      if (S.saveAgain) { S.saveAgain = false; save(); }
    }
  }
  function status(k) {
    S.saveState = k;
    const el = $('ch-save'); if (!el) return;
    if (readOnly()) { el.textContent = tr('فقط‌خواندنی (نمای ناظر)', 'Read-only (mentor view)'); el.className = 'ch-save'; return; }
    const m = { saving: [tr('در حالِ ذخیره…', 'Saving…'), ''], saved: [tr('✓ ذخیره شد', '✓ Saved'), 'ok'],
      local: [tr('روی همین دستگاه ذخیره شد — با اتصال همگام می‌شود', 'Saved on this device — will sync when online'), 'warn'],
      full: [tr('حجمِ تحلیل‌ها از سقف گذشت — چند شکلِ قدیمی را پاک کن', 'Drawing storage is full — remove some old drawings'), 'warn'] }[k] || ['', ''];
    el.textContent = m[0]; el.className = 'ch-save ' + m[1];
  }

  // ── شکل‌ها ──
  function tsOfPoint(pt) {
    if (isNum(pt?.timestamp)) return pt.timestamp;
    const list = S.chart?.getDataList?.() || S.data;
    if (isNum(pt?.dataIndex) && list.length) {
      const n = list.length - 1, step = tfMs();
      if (pt.dataIndex > n) return list[n].timestamp + (pt.dataIndex - n) * step;
      if (pt.dataIndex < 0) return list[0].timestamp + pt.dataIndex * step;
      return list[pt.dataIndex]?.timestamp ?? null;
    }
    return null;
  }
  const metaOf = r => ({ n: r.n, c: r.c || null, w: clamp(+r.w || 1, 1, 4), s: [0, 1, 2].includes(+r.s) ? +r.s : 0, k: !!r.k, h: !!r.h, x: r.x && typeof r.x === 'object' ? JSON.parse(JSON.stringify(r.x)) : {} });
  function callbacks() {
    return {
      onDrawEnd: e => { onDrawn(e.overlay); return false; },
      onMouseEnter: e => { S.hoverId = e.overlay.id; return false; },
      onMouseLeave: e => { if (S.hoverId === e.overlay.id) S.hoverId = null; return false; },
      onPressedMoveEnd: () => { commit(); return false; },
      onSelected: e => { if (S.tool !== 'eraser') { S.selected = e.overlay.id; paintSel(); } return false; },
      onDeselected: e => { if (S.selected === e.overlay.id) { S.selected = null; paintSel(); } return false; },
      onClick: e => { if (S.tool === 'eraser' && !readOnly()) { const id = e.overlay.id; setTimeout(() => removeId(id), 0); } return false; },
      onDoubleClick: e => { if (!readOnly() && S.recs.has(e.overlay.id)) openSettings(e.overlay.id); return false; },
      onRightClick: e => {   // true = کتابخانه شکل را پاک نکند
        if (S.drawingId) { startTool('cursor'); return true; }   // وسطِ رسم (روی هر شکلی) = لغو، مثلِ TradingView (نه منوی شکلِ نیمه‌کاره)
        if (S.recs.has(e.overlay.id)) openCtx(e.overlay.id, e); return true; },
      onRemoved: e => { const id = e.overlay.id; if (S.recs.has(id) && id !== S.drawingId) { S.recs.delete(id); commit(); } return false; }
    };
  }
  const lockOf = m => readOnly() || S.lockAll || !!m.k;
  // x.vis = تایم‌فریم‌هایی که شکل روی‌شان دیده می‌شود (بیتِ i = TFS[i])؛ نبودنش = همه
  const visOn = m => !isNum(m.x?.vis) || !!(m.x.vis & (1 << Math.max(0, TFS.findIndex(t => t.id === S.tf))));
  // آخرین ظاهرِ هر ابزار = پیش‌فرضِ شکلِ بعدی (مثلِ TradingView). متنِ هر شکل و مسیرِ قلم مالِ خودِ همان شکل‌اند.
  const TD_X = new Set(['el', 'er', 'st', 'ax', 'f', 'mid', 'm', 'dev', 'lb', 'rv', 'lv', 'fs', 'b', 'bg', 'fo', 'tl', 'lp', 'lpos', 'lvp', 'oc', 'lvl']);
  function styleFor(n) {
    const td = S.store?.prefs?.td?.[n]; if (!td || typeof td !== 'object') return {};
    const out = {};
    if (/^#[0-9A-Fa-f]{6}$/.test(td.c || '')) out.c = td.c;
    if ([2, 3, 4].includes(td.w)) out.w = td.w;
    if ([1, 2].includes(td.s)) out.s = td.s;
    if (td.x && typeof td.x === 'object') { const x = {}; for (const [k, v] of Object.entries(td.x)) if (TD_X.has(k)) x[k] = Array.isArray(v) ? v.slice() : v; if (Object.keys(x).length) out.x = x; }
    return out;
  }
  // ابزارِ سطح‌دارِ تازه (فیبوی اصلاحی/گسترشی/کانال) با همان سطوحِ پیش‌فرضِ TradingView: ۱۱ سطح تا ۴٫۲۳۶ (پیش‌تر فقط تا ۱٫۶۱۸)؛
  // شکل‌های ذخیره‌شده‌ی قبلی دست نمی‌خورند. اگر دانشجو سطوحِ خودش را ساخته باشد (td)، همان می‌آید.
  function newStyle(id) {
    const st = styleFor(id);
    if (T[id]?.opts?.includes('lv') && !st.x?.lvl && !st.x?.lv) st.x = { ...(st.x || {}), lvl: LV_TV.map(([l, c], i) => [l, i < LV.length ? 1 : 0, c]) };
    return st;
  }
  function rememberStyle(id) {
    const m = S.recs.get(id); if (!m || readOnly() || !S.store) return;
    const def = T[m.n]; if (!def || def.transient) return;
    const x = {}; for (const [k, v] of Object.entries(m.x || {})) if (TD_X.has(k)) x[k] = Array.isArray(v) ? v.slice() : v;
    const td = { ...(m.c ? { c: m.c } : {}), ...(m.w > 1 ? { w: m.w } : {}), ...(m.s ? { s: m.s } : {}), ...(Object.keys(x).length ? { x } : {}) };
    const all = { ...(S.store.prefs.td || {}) };
    if (Object.keys(td).length) all[m.n] = td; else delete all[m.n];
    S.store.prefs.td = all;
  }
  function makeOverlay(rec, drawing) {
    const def = T[rec.n]; if (!def || def.special) return null;
    const m = metaOf(rec);
    const o = { id: rec.id, name: rec.n, mode: 'normal', visible: !S.hidden && !m.h && visOn(m), lock: lockOf(m), extendData: { ...m }, styles: ovStyles(m.c || def.color || C.blue), ...callbacks() };
    if (!drawing) o.points = rec.p.map(([t, v]) => ({ timestamp: t, value: v }));
    S.quiet = !drawing; let id = null;
    try { id = S.chart.createOverlay(o); } finally { S.quiet = false; }
    if (id) S.recs.set(id, m);
    return id;
  }
  function refresh(id) {
    const m = S.recs.get(id); if (!m) return;
    S.quiet = true;
    try { S.chart.overrideOverlay({ id, extendData: { ...m }, styles: ovStyles(m.c || T[m.n].color || C.blue), lock: lockOf(m), visible: !S.hidden && !m.h && visOn(m) }); }
    finally { S.quiet = false; }
  }
  function setPoints(id, points) { S.quiet = true; try { S.chart.overrideOverlay({ id, points }); } finally { S.quiet = false; } }
  function serialize() {
    const d = [];
    for (const [id, m] of S.recs) {
      if (id === S.drawingId) continue;
      const def = T[m.n]; if (!def || def.transient) continue;
      const o = S.chart.getOverlayById(id);
      if (!o) { S.recs.delete(id); continue; }
      const p = (o.points || []).map(pt => [tsOfPoint(pt), pt.value]).filter(([t, v]) => isNum(t) && isNum(v)).map(([t, v]) => [Math.round(t), +(+v).toPrecision(10)]);
      if (p.length < def.pts) continue;
      const rec = { id, n: m.n, p: p.slice(0, def.pts) };
      if (m.c) rec.c = m.c;
      if (m.w > 1) rec.w = m.w;
      if (m.s) rec.s = m.s;
      if (m.k) rec.k = true;
      if (m.h) rec.h = true;
      if (m.x && Object.keys(m.x).length) rec.x = m.x;
      d.push(rec);
    }
    return d;
  }
  function commit({ history = true } = {}) {
    if (readOnly() || !S.store) return;
    const prev = S.store.layouts[S.coin]?.d || [];
    const d = serialize();
    if (JSON.stringify(prev) === JSON.stringify(d)) { paintTools(); return; }
    if (history) { S.hist.push(prev); if (S.hist.length > 60) S.hist.shift(); S.redo = []; }
    S.store.layouts[S.coin] = { d, u: Date.now() };
    paintTools(); paintTree(); scheduleSave();
  }
  function clearOverlays() {
    const ids = [...S.recs.keys()]; S.recs.clear();
    for (const id of ids) S.chart.removeOverlay(id);
    if (S.drawingId) { const id = S.drawingId; S.drawingId = null; S.chart.removeOverlay(id); }
    S.measureId = null; S.selected = null; paintSel();
  }
  function restoreDrawings() {
    clearOverlays();
    for (const raw of S.store?.layouts?.[S.coin]?.d || []) {
      const rec = LEGACY[raw?.n] ? migrateRec(raw) : raw;
      if (T[rec?.n] && Array.isArray(rec.p) && rec.p.length >= T[rec.n].pts) makeOverlay(rec, false);
    }
    paintTools(); paintTree();
  }
  function cancelDrawing() {
    if (S.drawingId) { const id = S.drawingId; S.drawingId = null; S.recs.delete(id); S.chart.removeOverlay(id); }
    pad(false); hint(null);
  }
  function dropMeasure() { if (S.measureId) { const id = S.measureId; S.measureId = null; S.recs.delete(id); S.chart.removeOverlay(id); } }
  function startTool(id) {
    if (readOnly()) return;
    closeFly(); closePop(); closeCtx(); dropMeasure();
    cancelDrawing();
    const def = T[id]; if (!def) return;
    if (def.special) { S.tool = id; paintTools(); if (id === 'eraser') { deselect(); hint('eraser'); } return; }
    if (!def.transient && S.recs.size >= MAX_DRAWINGS) { showToast(tr(`حداکثر ${fa(MAX_DRAWINGS)} شکل برای هر نماد — چند تا را پاک کن`, `Up to ${MAX_DRAWINGS} drawings per symbol — remove a few first`)); S.tool = 'cursor'; paintTools(); return; }
    if (S.hidden) toggleHidden();
    S.tool = id; if (def.g && def.g !== 'ruler') S.store.prefs.gl = { ...(S.store.prefs.gl || {}), [def.g]: id };
    deselect(); paintTools();
    if (def.pad) { pad(true); hint(id, 1); return; }
    S.drawingId = makeOverlay({ id: newId(), n: id, p: [], ...newStyle(id) }, true);
    hint(id, 1);
  }
  function onDrawn(o) {
    const def = T[o.name]; if (!def) return;
    if (S.drawingId === o.id) S.drawingId = null;
    hint(null);
    setTimeout(() => refresh(o.id), 0);   // دسته‌ها همان لحظه از «در حالِ رسم» به حالتِ عادی برگردند
    if (def.done) def.done(o);
    if (def.transient) { S.measureId = o.id; S.tool = 'cursor'; paintTools(); return; }
    if (def.text) setTimeout(() => editText(o.id, true), 0);
    commit();
    if (S.stay && !def.text) setTimeout(() => { if (S.tool === def.id && !S.drawingId) startTool(def.id); }, 0);
    else {
      S.tool = 'cursor'; paintTools();
      // مثلِ TradingView: شکلِ تازه انتخاب‌شده می‌ماند تا نوارش (رنگ/ضخامت/…) همان‌جا دمِ دست باشد.
      // (کتابخانه «انتخاب» را در کلیکِ اولِ رسم می‌فرستد؛ آن موقع هنوز در حالِ رسم بود و نوار پنهان ماند)
      setTimeout(() => { if (S.recs.has(o.id) && !S.drawingId && S.tool === 'cursor') selectId(o.id); }, 0);
    }
  }
  function posDone(o, long) {
    const e = o.points[0]; if (!e || !isNum(e.value)) return;
    const ex = S.chart.convertToPixel({ timestamp: tsOfPoint(e), value: e.value }, { paneId: 'candle_pane' })?.x;
    const d = posDefaults(e.value, long, ex), t = tsOfPoint(e) + d.bars * tfMs();
    setPoints(o.id, [{ timestamp: tsOfPoint(e), value: e.value }, { timestamp: t, value: d.tp }, { timestamp: t, value: d.sl }]);
  }
  function removeId(id, silent) {
    if (!S.recs.has(id)) return;
    S.recs.delete(id); S.chart.removeOverlay(id);
    if (S.selected === id) { S.selected = null; paintSel(); }
    if (!silent) commit();
  }
  function selectId(id) {
    const ov = id ? S.chart.getOverlayById(id) : null, store = S.chart.getChartStore?.()?.getOverlayStore?.();
    try { store?.setClickInstanceInfo({ paneId: 'candle_pane', instance: ov || null, figureType: ov ? 2 : 0, figureKey: '', figureIndex: ov ? 0 : -1, attrsIndex: ov ? 0 : -1 }); } catch (_) {}
    S.selected = ov ? id : null; paintSel();
  }
  const deselect = () => { if (S.selected) selectId(null); };
  function cloneSel(id = S.selected) {
    const m = S.recs.get(id), o = id && S.chart.getOverlayById(id); if (!m || !o || readOnly()) return;
    if (S.recs.size >= MAX_DRAWINGS) { showToast(tr(`حداکثر ${fa(MAX_DRAWINGS)} شکل برای هر نماد`, `Up to ${MAX_DRAWINGS} drawings per symbol`)); return; }
    const shift = 3 * tfMs();
    const rec = { id: newId(), n: m.n, p: o.points.map(pt => [tsOfPoint(pt) + shift, pt.value]), c: m.c, w: m.w, s: m.s, x: JSON.parse(JSON.stringify(m.x || {})) };
    const nid = makeOverlay(rec, false); commit(); closeCtx(); if (nid) selectId(nid);
  }
  function setMeta(id, patch) {
    const m = S.recs.get(id); if (!m || readOnly()) return;
    Object.assign(m, patch); refresh(id); commit(); paintSel();
  }
  function toggleLock(id = S.selected) { const m = S.recs.get(id); if (m) setMeta(id, { k: !m.k }); closeCtx(); }
  function toggleHideOne(id = S.selected) { const m = S.recs.get(id); if (!m) return; setMeta(id, { h: !m.h }); if (m.h && S.selected === id) deselect(); closeCtx(); }
  async function clearAll() {
    closePop();
    if (!S.recs.size) return;
    // انگلیسی: هر خط داخلِ جداسازِ چپ‌به‌راست (U+2066…U+2069) تا علامت‌ها در پنجره‌ی راست‌چینِ اپ جابه‌جا نشوند
    const q = EN() ? `\u2066Remove all ${S.recs.size} drawings on ${S.coin}?\u2069\n\n\u2066You can bring them back with Undo (Ctrl+Z).\u2069`
      : `همه‌ی ${fa(S.recs.size)} شکلِ ${S.coin} پاک شود؟\n\nبا «برگرداندن» (Ctrl+Z) می‌شود پس گرفت.`;
    if (!await uiConfirm(q, EN() ? { ok: 'Remove', cancel: 'Cancel' } : undefined)) return;
    cancelDrawing(); clearOverlays(); commit();
  }
  function undo() {
    if (!S.hist.length || readOnly()) return;
    cancelDrawing(); dropMeasure();
    S.redo.push(S.store.layouts[S.coin]?.d || []);
    S.store.layouts[S.coin] = { d: S.hist.pop(), u: Date.now() };
    restoreDrawings(); scheduleSave();
  }
  function redo() {
    if (!S.redo.length || readOnly()) return;
    cancelDrawing(); dropMeasure();
    S.hist.push(S.store.layouts[S.coin]?.d || []);
    S.store.layouts[S.coin] = { d: S.redo.pop(), u: Date.now() };
    restoreDrawings(); scheduleSave();
  }
  function toggleHidden() {
    S.hidden = !S.hidden;
    if (S.store) { S.store.prefs.hid = S.hidden; scheduleSave(); }
    if (S.hidden) { cancelDrawing(); deselect(); }
    for (const id of S.recs.keys()) refresh(id);
    paintTools();
  }
  function toggleLockAll() {
    S.lockAll = !S.lockAll; S.store.prefs.lock = S.lockAll;
    for (const id of S.recs.keys()) refresh(id);
    paintTools(); scheduleSave();
    showToast(S.lockAll ? tr('همه‌ی شکل‌ها قفل شدند — جابه‌جا نمی‌شوند', 'All drawings locked — they can no longer be moved') : tr('قفلِ شکل‌ها باز شد', 'All drawings unlocked'));
  }
  function toggleStay() {
    S.stay = !S.stay; S.store.prefs.stay = S.stay; paintTools(); scheduleSave();
    showToast(S.stay ? tr('ماندن در حالتِ رسم: ابزار بعد از هر شکل فعال می‌ماند', 'Stay in drawing mode: the tool stays active after each drawing')
      : tr('بعد از هر شکل، به نشانگر برمی‌گردد', 'Back to the cursor after each drawing'));
  }
  function setMagnet(mode) {
    mode = [0, 1, 2].includes(mode) ? mode : (S.mag ? 0 : (S.magLast || 1));
    S.mag = mode; if (mode) S.magLast = mode;
    S.store.prefs.mag = S.mag; S.store.prefs.magLast = S.magLast;
    closePop(); paintTools(); scheduleSave();
    showToast((EN() ? ['Magnet off', 'Weak magnet: snaps when you are near a candle\'s open, high, low or close', 'Strong magnet: always snaps to the nearest candle price']
      : ['آهنربا خاموش', 'آهنربای ضعیف: نزدیکِ سقف/کف/باز/بسته‌ی کندل که باشی، می‌چسبد', 'آهنربای قوی: همیشه به نزدیک‌ترین قیمتِ کندل می‌چسبد'])[S.mag]);
  }

  // ── قلم و ماژیک: کشیدنِ آزاد روی لایه‌ی رویِ نمودار ──
  function pad(on) {
    const el = $('ch-pad'); if (!el) return;
    el.hidden = !on;
    if (on) { const cv = el.querySelector('canvas'), r = el.getBoundingClientRect(), dpr = window.devicePixelRatio || 1; cv.width = r.width * dpr; cv.height = r.height * dpr; cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); }
  }
  function padEvents(el) {
    const cv = el.querySelector('canvas'), g = () => cv.getContext('2d');
    const pos = e => { const r = el.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    el.addEventListener('contextmenu', e => e.preventDefault());
    el.addEventListener('pointerdown', e => {
      if (!T[S.tool]?.pad) return;
      if (e.button !== 0) { e.preventDefault(); if (e.button === 2 && !S.stroke) startTool('cursor'); return; }   // راست‌کلیک = لغو؛ دکمه‌ی وسط خط نکشد
      e.preventDefault(); el.setPointerCapture?.(e.pointerId);
      S.stroke = [pos(e)];
      const def = T[S.tool], col = styleFor(S.tool).c || S.store.prefs?.pc?.[S.tool] || def.color, ctx = g();
      ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = def.id === 'scHighlighter' ? hexA(col, 0.38) : col; ctx.lineWidth = def.id === 'scHighlighter' ? 14 : 1.5;
    });
    el.addEventListener('pointermove', e => {
      if (!S.stroke) return; const p = pos(e), q = S.stroke[S.stroke.length - 1];
      if (Math.hypot(p.x - q.x, p.y - q.y) < 1.5) return;
      S.stroke.push(p); const ctx = g(); ctx.beginPath(); ctx.moveTo(q.x, q.y); ctx.lineTo(p.x, p.y); ctx.stroke();
    });
    const end = () => { if (!S.stroke) return; const pts = S.stroke; S.stroke = null; const r = el.getBoundingClientRect(); g().clearRect(0, 0, r.width, r.height); finishStroke(pts); };
    el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
  }
  function finishStroke(pts) {
    const id = S.tool, def = T[id]; if (!def?.pad || pts.length < 2) return;
    let eps = 0.8, path = rdp(pts, eps); while (path.length > MAX_PATH) { eps *= 1.6; path = rdp(pts, eps); }
    const first = S.chart.convertFromPixel([{ x: path[0].x, y: path[0].y }], { paneId: 'candle_pane' })?.[0];
    if (!first || !isNum(first.value) || !isNum(first.dataIndex)) return;
    const anchor = S.chart.convertToPixel({ dataIndex: first.dataIndex, value: first.value }, { paneId: 'candle_pane' });
    const bs = S.chart.getBarSpace() || 6, tf = tfMs();
    const d = path.map(p => { const v = S.chart.convertFromPixel([{ x: p.x, y: p.y }], { paneId: 'candle_pane' })?.[0]?.value; return [Math.round((p.x - anchor.x) / bs * tf), isNum(v) ? +(v - first.value).toPrecision(8) : 0]; });
    const t0 = tsOfPoint(first), st = styleFor(id), col = st.c || S.store.prefs?.pc?.[id] || null;
    const nid = makeOverlay({ id: newId(), n: id, p: [[t0, first.value]], c: col, x: { ...(st.x || {}), d } }, false);
    commit();
    if (!S.stay) { pad(false); S.tool = 'cursor'; hint(null); paintTools(); if (nid) selectId(nid); }
  }

  // ── رابط ──
  const srcName = () => SOURCES.find(s => s.id === S.src)?.name || S.src;
  function msg(text, kind) { const el = $('ch-msg'); if (!el) return; el.textContent = text || ''; el.className = 'ch-msg' + (kind ? ' ' + kind : ''); el.hidden = !text; }
  function hint(id, step) {
    const el = $('ch-hint'); if (!el) return;
    S.hintArgs = id ? [id, step] : null;
    if (!id) { el.hidden = true; el.textContent = ''; return; }
    const put = (t, x) => {
      el.textContent = ''; const sp = document.createElement('span'); sp.textContent = t; el.append(sp);
      const b = document.createElement('button'); b.type = 'button'; b.className = 'ch-hintx'; b.innerHTML = ICON.close;
      b.title = x; b.setAttribute('aria-label', x); b.addEventListener('click', ev => { ev.stopPropagation(); startTool('cursor'); }); el.append(b); el.hidden = false; };
    if (id === 'eraser') { put(tr('پاک‌کن: روی هر شکل بزنی پاک می‌شود — Esc یا نشانگر برای خروج', 'Eraser: tap a drawing to remove it — Esc or the cursor to exit'), tr('خروج از پاک‌کن', 'Exit the eraser')); return; }
    const def = T[id]; if (!def) return;
    let t;
    if (def.pad) t = `${nm(def)}: ${tr('روی نمودار بکش', 'draw on the chart')}`;
    else {
      const n = def.steps || def.pts, i = clamp((step || 1) - 1, 0, n - 1);
      t = `${nm(def)}: ${ptName(def, i, n === 2)}` + (n > 1 ? tr(` (${fa(i + 1)} از ${fa(n)})`, ` (${i + 1} of ${n})`) : '');
      if (def.steps === 1 && def.pts > 1) t += tr(' — بعد هدف و حد ضرر را بکش', ' — then drag the target and stop');
    }
    put(t + (S.touch ? '' : tr(' · Esc یا راست‌کلیک = لغو', ' · Esc or right-click to cancel')), tr('لغوِ رسم', 'Cancel drawing'));
  }
  function paintHead() {
    const last = S.data[S.data.length - 1];
    const coinEl = $('ch-coinname'); if (coinEl) coinEl.textContent = S.coin;
    const quote = $('ch-quote'); if (quote) quote.textContent = S.src === 'bybit' ? '/USDT' : '/USD';
    const lastEl = $('ch-last'), chg = $('ch-chg');
    if (lastEl) lastEl.textContent = last ? fmtP(last.close) : '—';
    if (chg) {
      let ref = null;
      if (last) { const from = last.timestamp - 864e5; ref = S.data.find(k => k.timestamp >= from) || null; }
      const p = last && ref ? pct(ref.open, last.close) : null;
      chg.textContent = isNum(p) ? `${p >= 0 ? '+' : '−'}${Math.abs(p).toFixed(2)}% · 24h` : '';
      chg.className = 'ch-chg ' + (isNum(p) ? (p >= 0 ? 'up' : 'down') : '');
    }
    document.querySelectorAll('#ch-srcs button').forEach(b => { const on = b.dataset.src === S.src; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    document.querySelectorAll('#ch-tfs button').forEach(b => { const on = b.dataset.tf === S.tf; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    const tl = $('ch-tfl'); if (tl) tl.textContent = tfOf(S.tf).l;
    const cs = $('ch-csrc'); if (cs) cs.textContent = srcName();
    const info = $('ch-srcinfo'); if (info) info.textContent = tr(`داده: ${srcName()}${S.src === 'bybit' ? ' (به‌جای بایننس)' : ''} · زمانِ تهران`, `Data: ${srcName()}${S.src === 'bybit' ? ' (Binance stand-in)' : ''} · Tehran time`);
  }
  const groupTool = g => { const last = S.store?.prefs?.gl?.[g.id]; return g.tools.includes(last) ? last : g.tools[0]; };
  const btn = (cls, title, onclick, inner, extra = '') => `<button type="button" class="ch-tool${cls}" title="${esc(title)}" aria-label="${esc(title)}" onclick="${onclick}"${extra}>${inner}</button>`;
  function paintTools() {
    const box = $('ch-tools'); if (!box) return;
    const ro = readOnly();
    let h = '';
    if (!ro) {
      for (const g of GROUPS) {
        const cur = g.tools.includes(S.tool) ? S.tool : groupTool(g), d = T[cur], on = g.tools.includes(S.tool);
        h += `<div class="ch-gw">${btn(`${on ? ' on' : ''}${d.cls ? ' ' + d.cls : ''}`, `${EN() ? d.en : d.fa + ' — ' + d.en}${d.key ? ' (' + d.key + ')' : ''}`, `SCCHART.gclick('${g.id}',this)`, d.ic, ` data-g="${g.id}" aria-pressed="${on}"`)}`
          + `<button type="button" class="ch-garr" aria-label="${esc(tr('ابزارهای ' + g.fa, g.en))}" onclick="SCCHART.fly('${g.id}',this)">${ICON.tri}</button></div>`;
      }
      h += '<span class="ch-sep"></span>';
      h += btn(S.tool === 'scMeasure' || S.measureId ? ' on' : '', tr('خط‌کش — اندازه‌گیریِ موقت (Shift + کلیک)', 'Measure (Shift + Click)'), "SCCHART.tool('scMeasure')", T.scMeasure.ic, ' data-t="ruler"');
      h += '<span class="ch-sep"></span>';
      h += `<div class="ch-gw">${btn(S.mag ? ' on' : '', S.mag === 2 ? tr('آهنربای قوی', 'Strong magnet') : S.mag ? tr('آهنربای ضعیف', 'Weak magnet') : tr('آهنربا (خاموش)', 'Magnet mode (off)'), 'SCCHART.magBtn(this)', S.mag === 2 ? ICON.magnetS : ICON.magnet, ` data-t="magnet" aria-pressed="${!!S.mag}"`)}`
        + `<button type="button" class="ch-garr" aria-label="${tr('حالتِ آهنربا', 'Magnet mode')}" onclick="SCCHART.magMenu(this)">${ICON.tri}</button></div>`;
      h += btn(S.stay ? ' on' : '', tr('ماندن در حالتِ رسم', 'Stay in drawing mode'), 'SCCHART.stay()', ICON.stay, ` data-t="stay" aria-pressed="${S.stay}"`);
      h += btn(S.lockAll ? ' on' : '', S.lockAll ? tr('باز کردنِ قفلِ همه‌ی شکل‌ها', 'Unlock all drawings') : tr('قفلِ همه‌ی شکل‌ها', 'Lock all drawings'), 'SCCHART.lockAll()', S.lockAll ? ICON.lock : ICON.unlock, ` data-t="lockall" aria-pressed="${S.lockAll}"`);
    }
    h += btn(S.hidden ? ' on' : '', S.hidden ? tr('نمایشِ شکل‌ها', 'Show all drawings') : tr('پنهان کردنِ همه‌ی شکل‌ها', 'Hide all drawings'), 'SCCHART.hide()', S.hidden ? ICON.eyeOff : ICON.eye, ` data-t="hide" aria-pressed="${S.hidden}"`);
    if (!ro) {
      h += btn('', tr('پاک کردنِ همه‌ی شکل‌های این نماد', 'Remove all drawings'), 'SCCHART.clear()', ICON.trash, ` data-t="clear"${S.recs.size ? '' : ' disabled'}`);
      h += '<span class="ch-sep"></span>';
      h += btn('', tr('برگرداندن (Ctrl+Z)', 'Undo (Ctrl+Z)'), 'SCCHART.undo()', ICON.undo, ` data-t="undo"${S.hist.length ? '' : ' disabled'}`);
      h += btn('', tr('دوباره انجام دادن (Ctrl+Y)', 'Redo (Ctrl+Y)'), 'SCCHART.redo()', ICON.redo, ` data-t="redo"${S.redo.length ? '' : ' disabled'}`);
    }
    h += btn($('ch-tree') && !$('ch-tree').hidden ? ' on' : '', tr('فهرستِ شکل‌ها', 'Object tree'), 'SCCHART.tree()', ICON.tree, ' data-t="tree"');
    box.innerHTML = h;
  }
  // گروهِ ابزار: دسکتاپ = آخرین ابزارِ گروه فعال می‌شود، فلش = فهرست؛ گوشی = همیشه فهرست (مثلِ اپِ TradingView)
  function gclick(gid, el) {
    const g = GROUPS.find(x => x.id === gid); if (!g) return;
    if (S.touch) { openFly(gid, el); return; }
    const cur = groupTool(g);
    if (S.tool === cur && !T[cur].special) { startTool('cursor'); return; }
    startTool(cur);
  }
  function openFly(gid, el) {
    const box = $('ch-fly'), g = GROUPS.find(x => x.id === gid); if (!box || !g) return;
    if (S.fly === gid && !box.hidden) { closeFly(); return; }
    closePop(); closeCtx();
    let h = `<div class="ch-flyh">${esc(tr(g.fa, g.en))}<button type="button" class="ch-x" aria-label="${tr('بستن', 'Close')}" onclick="SCCHART.closeFly()">${ICON.close}</button></div>`, sec = null;
    for (const id of g.tools) {
      const d = T[id];
      if (d.sec && d.sec !== sec) { sec = d.sec; h += `<div class="ch-flys">${esc(tr(sec, SEC_EN[sec]))}</div>`; }
      h += `<button type="button" class="ch-flyi${S.tool === id ? ' on' : ''}${d.cls ? ' ' + d.cls : ''}" data-tool="${id}" onclick="SCCHART.tool('${id}')">${d.ic}<span class="ch-flyt"><b>${esc(nm(d))}</b>${EN() ? '' : `<small dir="ltr">${esc(d.en)}</small>`}</span>${d.key && !S.touch ? `<kbd dir="ltr">${esc(d.key)}</kbd>` : ''}</button>`;
    }
    box.innerHTML = h; box.hidden = false; S.fly = gid;
    place(box, el);
  }
  function place(box, el) {
    const stage = box.parentElement, sr = stage.getBoundingClientRect(), er = el?.getBoundingClientRect?.();
    box.style.top = box.style.left = box.style.bottom = '';
    if (window.matchMedia('(min-width: 900px)').matches && er) {
      const h = box.offsetHeight;
      box.style.left = '6px';
      box.style.top = clamp(er.top - sr.top, 6, Math.max(6, sr.height - h - 6)) + 'px';
    }
  }
  function closeFly() { const b = $('ch-fly'); if (b) { b.hidden = true; b.innerHTML = ''; } S.fly = null; }
  function openPop(kind, el, html) {
    const box = $('ch-pop'); if (!box) return;
    if (S.pop === kind && !box.hidden) { closePop(); return; }
    closeFly(); box.innerHTML = html; box.hidden = false; S.pop = kind;
    const stage = box.parentElement, sr = stage.getBoundingClientRect(), er = el.getBoundingClientRect(), w = box.offsetWidth, h = box.offsetHeight;
    let left = er.left - sr.left + er.width / 2 - w / 2, top = er.bottom - sr.top + 6;
    if (top + h > sr.height - 4) top = er.top - sr.top - h - 6;
    box.style.left = clamp(left, 4, Math.max(4, sr.width - w - 4)) + 'px'; box.style.top = clamp(top, 4, Math.max(4, sr.height - h - 4)) + 'px';
  }
  function closePop() { const b = $('ch-pop'); if (b) { b.hidden = true; b.innerHTML = ''; } S.pop = null; }
  function magMenu(el) {
    const row = (m, t, d) => `<button type="button" class="ch-popi${S.mag === m ? ' on' : ''}" data-mag="${m}" onclick="SCCHART.setMag(${m})"><i></i><span><b>${t}</b>${d ? `<small>${d}</small>` : ''}</span></button>`;
    openPop('mag', el, `<div class="ch-poph">${tr('آهنربا', 'Magnet mode')}</div>`
      + row(0, tr('خاموش', 'Off'), tr('نقطه دقیقاً همان‌جا که می‌زنی', 'Points go exactly where you click'))
      + row(1, tr('آهنربای ضعیف', 'Weak magnet'), tr('نزدیکِ سقف/کف/باز/بسته‌ی کندل که باشی، می‌چسبد', 'Snaps when you are near a candle\'s open, high, low or close'))
      + row(2, tr('آهنربای قوی', 'Strong magnet'), tr('همیشه به نزدیک‌ترین قیمتِ کندل می‌چسبد', 'Always snaps to the nearest candle price'))
      + (S.touch ? '' : `<div class="ch-popn">${tr('نگه‌داشتنِ Ctrl، آهنربا را موقتاً برعکس می‌کند', 'Hold Ctrl to temporarily invert the magnet')}</div>`));
  }
  function magBtn(el) { if (S.touch) magMenu(el); else setMagnet(); }

  // ── نوارِ شکلِ انتخاب‌شده ──
  function paintSel() {
    const bar = $('ch-sel'); if (!bar) return;
    const id = S.selected, m = id && S.recs.get(id);
    if (!m || readOnly() || S.drawingId) { bar.hidden = true; bar.innerHTML = ''; closePop(); return; }
    const def = T[m.n], col = m.c || def.color || C.blue;
    const b = (a, t, inner, extra = '', on = '') => `<button type="button" class="ch-selb${on}" data-a="${a}" title="${esc(t)}" aria-label="${esc(t)}"${extra}>${inner}</button>`;
    bar.innerHTML = `<span class="ch-seln">${esc(nm(def))}</span>`
      + b('color', tr('رنگ', 'Color'), `<i class="ch-sw" style="--c:${col}"></i>`, ' onclick="SCCHART.colorMenu(this)"')
      + (def.pad || ['scLong', 'scShort', 'scText', 'scPriceLabel'].includes(m.n) ? '' :
        b('width', tr('ضخامتِ خط', 'Line width'), `${ICON.width}<em>${m.w}px</em>`, ' onclick="SCCHART.widthMenu(this)"')
        + b('style', tr('نوعِ خط', 'Line style'), ICON.style, ' onclick="SCCHART.styleMenu(this)"'))
      + (def.text ? b('text', tr('ویرایشِ متن', 'Edit text'), ICON.textEdit, ' onclick="SCCHART.editText()"') : '')
      + b('settings', tr('تنظیمات', 'Settings'), ICON.gear, ' onclick="SCCHART.settings()"')
      + b('lock', m.k ? tr('باز کردنِ قفل', 'Unlock') : tr('قفل', 'Lock'), m.k ? ICON.lock : ICON.unlock, ` aria-pressed="${m.k}" onclick="SCCHART.lock()"`, m.k ? ' on' : '')
      + b('clone', tr('کپی', 'Clone'), ICON.clone, ' onclick="SCCHART.clone()"')
      + b('delete', tr('حذف (Delete)', 'Remove (Delete)'), ICON.trash, ' onclick="SCCHART.removeSelected()"', ' del');
    bar.hidden = false;
  }
  function colorMenu(el) {
    const id = S.selected, m = S.recs.get(id); if (!m) return;
    const cur = m.c || T[m.n].color;
    openPop('color', el, `<div class="ch-pal">${PALETTE.map(c => `<button type="button" class="ch-dot${c === cur ? ' on' : ''}" style="--c:${c}" data-c="${c}" aria-label="${tr('رنگ', 'Color')} ${c}" onclick="SCCHART.color('${c}')"></button>`).join('')}</div>`
      + `<button type="button" class="ch-popi" data-c="" onclick="SCCHART.color('')"><i></i><span><b>${tr('رنگِ پیش‌فرض', 'Default color')}</b></span></button>`);
  }
  function widthMenu(el) {
    const m = S.recs.get(S.selected); if (!m) return;
    openPop('width', el, [1, 2, 3, 4].map(w => `<button type="button" class="ch-popi${m.w === w ? ' on' : ''}" data-w="${w}" onclick="SCCHART.width(${w})"><i></i><span class="ch-wl" style="--w:${w}px"></span><small dir="ltr">${w}px</small></button>`).join(''));
  }
  function styleMenu(el) {
    const m = S.recs.get(S.selected); if (!m) return;
    const names = EN() ? ['Solid', 'Dashed', 'Dotted'] : ['خطِ پیوسته', 'خط‌چین', 'نقطه‌چین'];
    openPop('style', el, [0, 1, 2].map(s => `<button type="button" class="ch-popi${m.s === s ? ' on' : ''}" data-s="${s}" onclick="SCCHART.lstyle(${s})"><i></i><span class="ch-sl s${s}"></span><small>${names[s]}</small></button>`).join(''));
  }
  function setColor(c) {
    const id = S.selected; if (!S.recs.has(id)) return;
    if (c && !/^#[0-9A-Fa-f]{6}$/.test(c)) return;
    const m = S.recs.get(id);
    if (T[m.n]?.opts?.includes('lv')) { m.x = { ...(m.x || {}) }; if (c) m.x.oc = true; else delete m.x.oc; }
    setMeta(id, { c: c || null }); rememberStyle(id); closePop();
  }
  function setWidth(w) { if ([1, 2, 3, 4].includes(w)) { setMeta(S.selected, { w }); rememberStyle(S.selected); } closePop(); }
  function setLineStyle(s) { if ([0, 1, 2].includes(s)) { setMeta(S.selected, { s }); rememberStyle(S.selected); } closePop(); }

  // ── منوی راست‌کلیک ──
  function openCtx(id, e) {
    const box = $('ch-ctx'), m = S.recs.get(id); if (!box || !m || readOnly()) return;
    closePop(); closeFly(); selectId(id);
    const it = (a, icon, t, k) => `<button type="button" class="ch-ctxi" data-a="${a}" onclick="SCCHART.ctx('${a}')">${icon}<span>${t}</span>${k ? `<kbd dir="ltr">${k}</kbd>` : ''}</button>`;
    box.innerHTML = it('settings', ICON.gear, tr('تنظیمات…', 'Settings…')) + it('clone', ICON.clone, tr('نسخه‌ی دوم (Clone)', 'Clone')) + it('copy', ICON.clone, tr('کپی', 'Copy'), 'Ctrl+C')
      + it('lock', m.k ? ICON.lock : ICON.unlock, m.k ? tr('باز کردنِ قفل', 'Unlock') : tr('قفل', 'Lock'))
      + it('hide', ICON.eyeOff, tr('پنهان کردن', 'Hide')) + '<hr>' + it('delete', ICON.trash, tr('حذف', 'Remove'), 'Del');
    box.hidden = false;
    const sr = box.parentElement.getBoundingClientRect();
    box.style.left = clamp((e?.x ?? 40), 4, sr.width - box.offsetWidth - 4) + 'px'; box.style.top = clamp((e?.y ?? 40), 4, sr.height - box.offsetHeight - 4) + 'px';
  }
  function closeCtx() { const b = $('ch-ctx'); if (b) { b.hidden = true; b.innerHTML = ''; } }
  function ctxAction(a) {
    const id = S.selected; closeCtx();
    if (a === 'settings') openSettings(id); else if (a === 'clone') cloneSel(id); else if (a === 'copy') { S.selected = id; copySel(); } else if (a === 'lock') toggleLock(id);
    else if (a === 'hide') toggleHideOne(id); else if (a === 'delete') removeId(id);
  }

  // ── تنظیماتِ هر شکل (مثلِ پنجره‌ی Settings در TradingView) ──
  // ── پنجره‌ی تنظیماتِ شکل، مثلِ TradingView: «ظاهر / متن / مختصات / نمایش»؛ هر تغییر همان لحظه روی نمودار دیده می‌شود
  //    (پیش‌نمایشِ زنده) و «انصراف» / Esc همه را برمی‌گرداند. رنگ، ضخامت و نوعِ خط هم این‌جاست، نه فقط در نوارِ شکل.
  const NO_LINE = new Set(['scLong', 'scShort', 'scText', 'scPriceLabel']);
  const NO_COLOR = new Set(['scLong', 'scShort']);
  const TEXT_KEYS = new Set(['text', 'fs', 'b', 'bg']);
  const FO_DEF = { scFib: 12, scFibExt: 12, scFibChannel: 12, scChannel: 15, scFlat: 15, scPitchfork: 10, scRegression: 12, scRect: 20, scCircle: 20, scEllipse: 20, scTriangle: 20 };
  const numIn = s => parseFloat(String(s).replace(/[٠-٩]/g, c => '٠١٢٣٤٥٦٧٨٩'.indexOf(c)).replace(/[۰-۹]/g, c => '۰۱۲۳۴۵۶۷۸۹'.indexOf(c)).replace(/,/g, ''));
  const WIDTH_IC = w => `<i class="chs-wl" style="--w:${w}px"></i>`;
  const STYLE_IC = s => `<i class="chs-sl s${s}"></i>`;
  function openSettings(id = S.selected, tab) {
    const m = S.recs.get(id), o = id && S.chart.getOverlayById(id), box = $('ch-modal'); if (!m || !o || !box || readOnly()) return;
    closePop(); closeCtx();
    const def = T[m.n], opts = def.opts || [];
    m.x = m.x || {};
    const snap = JSON.parse(JSON.stringify(m)), pts0 = o.points.slice(0, def.pts).map(p => ({ timestamp: tsOfPoint(p), value: p.value }));
    const lineOk = !def.pad && !NO_LINE.has(m.n), colorOk = !NO_COLOR.has(m.n), hasLv = opts.includes('lv');
    // جای برچسب برای ابزارِ متن‌دار (خطِ افقی) در زبانه‌ی «متن» است، برای فیبو در «ظاهر»
    const inText = k => TEXT_KEYS.has(k) || ((k === 'lpos' || k === 'lvp') && opts.includes('text'));
    const textOpts = opts.filter(inText), styleOpts = opts.filter(k => !inText(k) && k !== 'lv');
    const lposDef = ['scHLine', 'scHRay'].includes(m.n) ? 1 : 0;
    const posRow = (key, lab) => key === 'lpos'
      ? `<div class="chs-r"><span class="chs-l">${lab}</span><div dir="ltr">${seg('lpos', [[0, tr('چپ', 'Left'), tr('چپ', 'Left')], [2, tr('وسط', 'Center'), tr('وسط', 'Center')], [1, tr('راست', 'Right'), tr('راست', 'Right')]], [0, 1, 2].includes(m.x.lpos) ? m.x.lpos : lposDef)}</div></div>`
      : `<div class="chs-r"><span class="chs-l">${lab}</span>${seg('lvp', [[-1, tr('خودکار', 'Auto'), tr('خودکار', 'Auto')], [0, tr('بالا', 'Top'), tr('بالا', 'Top')], [1, tr('وسط', 'Middle'), tr('وسط', 'Middle')], [2, tr('پایین', 'Bottom'), tr('پایین', 'Bottom')]], [0, 1, 2].includes(m.x.lvp) ? m.x.lvp : -1)}</div>`;
    const tabs = [['style', tr('ظاهر', 'Style')]];
    if (textOpts.length) tabs.push(['text', tr('متن', 'Text')]);
    if (!def.pad) tabs.push(['coords', tr('مختصات', 'Coordinates')]);
    tabs.push(['vis', tr('نمایش', 'Visibility')]);
    let cur = tabs.some(t => t[0] === tab) ? tab : 'style', rows = hasLv ? levelRows(m.x) : null, lvTouched = false, palFor = null, moved = false;
    const colOf = () => m.c || def.color || C.blue;
    const live = () => { if (hasLv && lvTouched) { m.x.lvl = rows.map(r => r.slice()); delete m.x.lv; } refresh(id); paintSel(); };
    const sw = (key, col, cls = '') => `<button type="button" class="chs-sw${cls}" data-sw="${key}" style="--c:${col}" title="${tr('رنگ', 'Color')}" aria-label="${tr('رنگ', 'Color')}"></button>`;
    const seg = (key, vals, now) => `<div class="chs-seg" role="group" data-seg="${key}">${vals.map(([v, inner, t]) => `<button type="button" data-v="${v}" class="${v === now ? 'on' : ''}" title="${esc(t)}" aria-label="${esc(t)}" aria-pressed="${v === now}">${inner}</button>`).join('')}</div>`;
    const ck = (key, on, lab, extra = '') => `<div class="chs-r chs-rc"><label class="chs-ck"><input type="checkbox" data-o="${key}"${on ? ' checked' : ''}><span>${lab}</span></label>${extra}</div>`;
    const optOn = key => OPT[key][0] === 'boolOn' ? m.x[key] !== false : !!m.x[key];
    function stylePanel() {
      const h = [];
      if (colorOk) h.push(`<div class="chs-r"><span class="chs-l">${lineOk ? tr('خط', 'Line') : tr('رنگ', 'Color')}</span><div class="chs-c">${sw('c', colOf())}`
        + (lineOk ? seg('w', [1, 2, 3, 4].map(w => [w, WIDTH_IC(w), w + 'px']), m.w || 1) + seg('s', [[0, STYLE_IC(0), tr('پیوسته', 'Solid')], [1, STYLE_IC(1), tr('خط‌چین', 'Dashed')], [2, STYLE_IC(2), tr('نقطه‌چین', 'Dotted')]], m.s || 0) : '') + '</div></div>');
      // مثلِ TradingView: «برچسب‌ها» (نمایش، قیمت، جای افقی و عمودی) درست زیرِ خط، بی نیاز به پیمایش
      const LBL = { lb: tr('نمایشِ برچسب‌ها', 'Show labels'), lp: tr('قیمت در برچسب', 'Prices in labels'), lpos: tr('جای افقی', 'Horizontal position'), lvp: tr('جای عمودی', 'Vertical position') };
      const lblKeys = ['lb', 'lp', 'lpos', 'lvp'].filter(k => styleOpts.includes(k));
      const ordered = styleOpts.filter(k => !lblKeys.includes(k));
      if (lblKeys.length) {
        // دو ردیفِ فشرده مثلِ TradingView: [نمایشِ برچسب‌ها | چپ وسط راست] و [قیمت | خودکار بالا وسط پایین]
        const segH = lblKeys.includes('lpos') ? posRow('lpos', LBL.lpos).replace(/^<div class="chs-r"><span class="chs-l">[^<]*<\/span>/, '').replace(/<\/div>$/, '') : '';
        const segV = lblKeys.includes('lvp') ? posRow('lvp', LBL.lvp).replace(/^<div class="chs-r"><span class="chs-l">[^<]*<\/span>/, '').replace(/<\/div>$/, '') : '';
        h.push(`<div class="chs-h">${tr('برچسب‌ها', 'Labels')}</div>`);
        h.push(lblKeys.includes('lb') ? ck('lb', optOn('lb'), LBL.lb, segH) : segH ? `<div class="chs-r"><span class="chs-l">${LBL.lpos}</span>${segH}</div>` : '');
        h.push(lblKeys.includes('lp') ? ck('lp', optOn('lp'), LBL.lp, segV) : segV ? `<div class="chs-r"><span class="chs-l">${LBL.lvp}</span>${segV}</div>` : '');
        if (ordered.length) h.push(`<div class="chs-h">${tr('گزینه‌ها', 'Options')}</div>`);
      }
      for (const key of ordered) {
        const [type, lf, le] = OPT[key], lab = tr(lf, le);
        if (type === 'bool' || type === 'boolOn') {
          const fo = key === 'f' && FO_DEF[m.n] != null ? (isNum(m.x.fo) ? m.x.fo : FO_DEF[m.n]) : null;
          h.push(ck(key, optOn(key), lab, fo == null ? '' : `<div class="chs-c chs-op"><input type="range" dir="ltr" min="0" max="100" step="1" value="${fo}" data-fo aria-label="${tr('شفافیتِ پس‌زمینه', 'Background opacity')}"><b dir="ltr" data-fov>${fo}%</b></div>`));
        } else if (type === 'dev') h.push(`<div class="chs-r"><span class="chs-l">${lab}</span><select class="fi chs-in" data-o="dev">${[1, 1.5, 2, 2.5, 3].map(v => `<option value="${v}"${(isNum(m.x.dev) ? m.x.dev : 2) === v ? ' selected' : ''}>${v}</option>`).join('')}</select></div>`);
        else if (type === 'lpos' || type === 'lvp') h.push(posRow(key, lab));
      }
      if (hasLv) {
        h.push(`<div class="chs-h">${tr('سطوح', 'Levels')}</div><div class="chs-lvs">${rows.map((r, i) => `<div class="chs-lv"><input type="checkbox" data-lvon="${i}"${r[1] ? ' checked' : ''} aria-label="${tr('سطحِ ', 'Level ') + r[0]}">`
          + `<input class="chs-lvv" dir="ltr" inputmode="decimal" data-lvv="${i}" value="${r[0]}" aria-label="${tr('مقدارِ سطح', 'Level value')}">${sw('lv' + i, r[2], ' sm')}</div>`).join('')}</div>`);
        h.push(ck('oc', !!m.x.oc, tr('یک رنگ برای همه‌ی سطوح (رنگِ خط)', 'Use one color (line color)')));
      }
      return h.join('');
    }
    function textPanel() {
      const h = [];
      for (const key of textOpts) {
        const [type, lf, le] = OPT[key], lab = tr(lf, le);
        if (type === 'text') h.push(`<label class="chs-h" for="chs-text">${lab}</label><textarea id="chs-text" class="fi chs-ta" data-o="text" rows="3" maxlength="200" dir="auto" placeholder="${def.text ? tr('متن', 'Text') : tr('اختیاری', 'Optional')}">${esc(m.x.text || '')}</textarea>`);
        else if (type === 'lpos' || type === 'lvp') h.push(posRow(key, lab));
        else if (type === 'fs') h.push(`<div class="chs-r"><span class="chs-l">${lab}</span><select class="fi chs-in" data-o="fs">${[10, 12, 14, 16, 20, 24, 28, 36].map(v => `<option value="${v}"${(+m.x.fs || 14) === v ? ' selected' : ''}>${v}</option>`).join('')}</select></div>`);
        else h.push(ck(key, optOn(key), lab));
      }
      return h.join('');
    }
    function coordsPanel() {
      const pts = o.points.slice(0, def.pts);
      return `<div class="chs-hint">${tr('قیمتِ هر نقطه را دقیق بنویس؛ زمان را با کشیدنِ نقطه روی نمودار عوض کن.', 'Type the exact price of each point; move a point on the chart to change its time.')}</div>`
        + pts.map((p, i) => { const v = isNum(p.value) ? (+p.value).toFixed(prec()) : ''; return `<div class="chs-r"><span class="chs-l">${esc(ptName(def, i, true))}<small dir="ltr">${esc(fmtDate(tsOfPoint(p)))}</small></span>`
          + `<input class="fi chs-in" dir="ltr" inputmode="decimal" data-pt="${i}" value="${v}" aria-label="${tr('قیمت', 'Price')}"></div>`; }).join('');
    }
    function visPanel() {
      const mask = isNum(m.x.vis) ? m.x.vis : ALL_TF;
      return `<div class="chs-hint">${tr('این شکل روی کدام تایم‌فریم‌ها دیده شود؟', 'Show this drawing on which time intervals?')}</div><div class="chs-vis">`
        + TF_VIEW.map(t => { const i = TFS.indexOf(t); return `<label class="chs-ck"><input type="checkbox" data-vis="${i}"${mask & (1 << i) ? ' checked' : ''}><span dir="ltr">${t.l}</span></label>`; }).join('') + '</div>';
    }
    function render() {
      const panels = { style: stylePanel, text: textPanel, coords: coordsPanel, vis: visPanel };
      box.innerHTML = `<div class="ch-mcard ch-set chs" role="dialog" aria-label="${esc(tr('تنظیماتِ ' + def.fa, def.en + ' settings'))}">`
        + `<div class="chs-top"><b>${esc(nm(def))}</b><button type="button" class="chs-x" id="chs-x" aria-label="${tr('بستن', 'Close')}">${ICON.close}</button></div>`
        + `<div class="chs-tabs" role="tablist">${tabs.map(([k, t]) => `<button type="button" role="tab" data-tab="${k}" class="${k === cur ? 'on' : ''}" aria-selected="${k === cur}">${t}</button>`).join('')}</div>`
        + `<div class="chs-body">${tabs.map(([k]) => `<div class="chs-p" data-p="${k}"${k === cur ? '' : ' hidden'}>${panels[k]()}</div>`).join('')}`
        + `<div class="chs-pal" id="chs-pal" hidden></div></div>`
        + `<div class="chs-foot"><div class="chs-tpl"><button type="button" class="btn btn-ghost chs-tb" id="chs-tpl" aria-haspopup="true">${tr('قالب', 'Template')} ▾</button>`
        + `<div class="chs-tm" id="chs-tm" hidden><button type="button" id="chs-save">${tr('ذخیره به‌عنوانِ پیش‌فرض', 'Save as default')}</button><button type="button" id="ch-sdef">${tr('بازگشت به پیش‌فرض', 'Reset to default')}</button></div></div>`
        + `<button type="button" class="btn btn-ghost" id="ch-sno">${tr('انصراف', 'Cancel')}</button><button type="button" class="btn btn-primary" id="ch-sok">${tr('ثبت', 'Ok')}</button></div></div>`;
      box.hidden = false;
    }
    function openPal(key, el) {
      const pal = $('chs-pal'), body = box.querySelector('.chs-body'); if (!pal || !body) return;
      if (palFor === key && !pal.hidden) { pal.hidden = true; palFor = null; return; }
      palFor = key;
      const now = key === 'c' ? colOf() : rows[+key.slice(2)][2];
      pal.innerHTML = `<div class="ch-pal">${PALETTE.map(c => `<button type="button" class="ch-dot${c.toLowerCase() === String(now).toLowerCase() ? ' on' : ''}" style="--c:${c}" data-pc="${c}" aria-label="${tr('رنگ', 'Color')} ${c}"></button>`).join('')}</div>`
        + (key === 'c' ? `<button type="button" class="ch-popi" data-pc=""><i></i><span><b>${tr('رنگِ پیش‌فرض', 'Default color')}</b></span></button>` : '');
      pal.hidden = false;
      const br = body.getBoundingClientRect(), er = el.getBoundingClientRect();
      pal.style.top = (er.bottom - br.top + body.scrollTop + 4) + 'px';
      pal.style.left = clamp(er.left - br.left, 4, Math.max(4, br.width - pal.offsetWidth - 4)) + 'px';
    }
    const close = ok => {
      if (ok) { rememberStyle(id); commit(); paintSel(); }
      else {
        for (const k of Object.keys(m)) delete m[k];
        Object.assign(m, JSON.parse(JSON.stringify(snap)));
        if (moved) setPoints(id, pts0);
        refresh(id); paintSel();
      }
      box.hidden = true; box.innerHTML = ''; box.onclick = box.oninput = box.onchange = box.onkeydown = null;
    };
    render();
    box.onclick = ev => {
      const t = ev.target;
      if (t === box) { close(false); return; }   // کلیک روی پس‌زمینه‌ی تیره = انصراف
      const tabB = t.closest('[data-tab]'); if (tabB) { cur = tabB.dataset.tab; box.querySelectorAll('[data-tab]').forEach(b => { const on = b === tabB; b.classList.toggle('on', on); b.setAttribute('aria-selected', on); }); box.querySelectorAll('[data-p]').forEach(p => { p.hidden = p.dataset.p !== cur; }); $('chs-pal').hidden = true; return; }
      const swB = t.closest('[data-sw]'); if (swB) { openPal(swB.dataset.sw, swB); return; }
      const pc = t.closest('[data-pc]');
      if (pc) {
        const c = pc.dataset.pc;
        if (palFor === 'c') { m.c = c || null; if (hasLv) { if (c) m.x.oc = true; else delete m.x.oc; const oc = box.querySelector('[data-o="oc"]'); if (oc) oc.checked = !!m.x.oc; } box.querySelector('[data-sw="c"]')?.style.setProperty('--c', colOf()); }
        else if (palFor && palFor.startsWith('lv')) { const i = +palFor.slice(2); rows[i][2] = c; lvTouched = true; box.querySelector(`[data-sw="lv${i}"]`)?.style.setProperty('--c', c); }
        $('chs-pal').hidden = true; palFor = null; live(); return;
      }
      if (!t.closest('#chs-pal') && !t.closest('[data-sw]')) { const p = $('chs-pal'); if (p) p.hidden = true; palFor = null; }
      const sg = t.closest('.chs-seg button');
      if (sg) {
        const key = sg.parentElement.dataset.seg, v = +sg.dataset.v;
        sg.parentElement.querySelectorAll('button').forEach(b => { const on = b === sg; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
        if (key === 'w') m.w = v; else if (key === 's') m.s = v; else if (key === 'lpos') m.x.lpos = v; else if (key === 'lvp') { if (v < 0) delete m.x.lvp; else m.x.lvp = v; }
        live(); return;
      }
      if (t.id === 'chs-tpl') { const tm = $('chs-tm'); tm.hidden = !tm.hidden; return; }
      if (t.id === 'chs-save') { rememberStyle(id); scheduleSave(); $('chs-tm').hidden = true; showToast(tr('ظاهرِ این شکل پیش‌فرضِ ' + def.fa + ' شد', 'Saved as the default for ' + def.en)); return; }
      if (t.id === 'ch-sdef') {
        const keep = {}; if (m.x.text) keep.text = m.x.text; if (isNum(m.x.vis)) keep.vis = m.x.vis;
        m.c = null; m.w = 1; m.s = 0; m.x = keep; if (hasLv) { rows = levelRows({}); lvTouched = false; }
        const all = { ...(S.store.prefs.td || {}) }; delete all[m.n]; S.store.prefs.td = all; scheduleSave();
        render(); live(); return;
      }
      if (t.id === 'ch-sok') { close(true); return; }
      if (t.id === 'ch-sno' || t.closest('#chs-x')) { close(false); return; }
      const tm = $('chs-tm'); if (tm && !t.closest('.chs-tpl')) tm.hidden = true;
    };
    box.onchange = ev => {
      const t = ev.target, key = t.dataset.o;
      if (t.type === 'checkbox' && key) {
        if (key === 'oc') { if (t.checked) m.x.oc = true; else delete m.x.oc; }
        else if (OPT[key]?.[0] === 'boolOn') { if (t.checked) delete m.x[key]; else m.x[key] = false; }
        else { if (t.checked) m.x[key] = true; else delete m.x[key]; }
        live(); return;
      }
      if (t.dataset.lvon != null) { rows[+t.dataset.lvon][1] = t.checked ? 1 : 0; lvTouched = true; live(); return; }
      if (t.dataset.vis != null) {
        let mask = 0; box.querySelectorAll('[data-vis]').forEach(e => { if (e.checked) mask |= 1 << +e.dataset.vis; });
        if (mask === ALL_TF) delete m.x.vis; else m.x.vis = mask;
        live(); return;
      }
      if (key === 'dev') { const v = +t.value; if (v === 2) delete m.x.dev; else m.x.dev = v; live(); return; }
      if (key === 'fs') { const v = +t.value; if (v === 14) delete m.x.fs; else m.x.fs = v; live(); return; }
    };
    box.oninput = ev => {
      const t = ev.target;
      if (t.dataset.fo != null) { const v = +t.value; if (v === FO_DEF[m.n]) delete m.x.fo; else m.x.fo = v; const b = box.querySelector('[data-fov]'); if (b) b.textContent = v + '%'; live(); return; }
      if (t.dataset.o === 'text') { const v = String(t.value || '').slice(0, 200); if (v.trim()) m.x.text = v.trim(); else delete m.x.text; live(); return; }
      if (t.dataset.lvv != null) { const v = numIn(t.value), okv = isNum(v) && Math.abs(v) <= 100; t.classList.toggle('bad', !okv); if (okv) { rows[+t.dataset.lvv][0] = v; lvTouched = true; live(); } return; }
      if (t.dataset.pt != null) {
        const v = numIn(t.value), i = +t.dataset.pt, okv = isNum(v) && v > 0; t.classList.toggle('bad', !okv);
        if (okv) { const np = o.points.slice(0, def.pts).map(p => ({ timestamp: tsOfPoint(p), value: p.value })); np[i].value = v; setPoints(id, np); moved = true; refresh(id); }
      }
    };
    box.onkeydown = ev => { if (ev.key === 'Escape') { ev.stopPropagation(); close(false); } else if (ev.key === 'Enter' && ev.target.tagName !== 'TEXTAREA' && !ev.target.closest('button')) { ev.preventDefault(); close(true); } };
  }
  // متن: برگه‌ی کوچکِ خودِ نمودار (نه prompt مرورگر)
  function editText(id, fresh) {
    id = id || S.selected; const m = S.recs.get(id); if (!m || readOnly()) return;
    const box = $('ch-modal'); if (!box) return;
    const lab = tr('متن روی نمودار', 'Text on the chart');
    box.innerHTML = `<div class="ch-mcard" role="dialog" aria-label="${lab}"><label class="fl" for="ch-txt">${lab}</label>
      <textarea id="ch-txt" class="fi" rows="3" maxlength="200" dir="auto" placeholder="${tr('مثلاً: شکستِ مقاومت با حجم', 'e.g. Breakout above resistance on volume')}">${esc(m.x?.text || '')}</textarea>
      <div class="ch-mrow"><button type="button" class="btn btn-ghost" id="ch-tno">${tr('انصراف', 'Cancel')}</button><button type="button" class="btn btn-primary" id="ch-tok">${tr('ثبت', 'Ok')}</button></div></div>`;
    box.hidden = false;
    const ta = $('ch-txt'); setTimeout(() => ta?.focus(), 30);
    const close = ok => {
      const v = String(ta.value || '').trim().slice(0, 200);
      box.hidden = true; box.innerHTML = '';
      if (ok && v) { m.x = { ...(m.x || {}), text: v }; refresh(id); commit(); }
      else if (fresh && !m.x?.text) removeId(id);
      if (fresh && S.stay && T[m.n]?.text) setTimeout(() => startTool(m.n), 0);
    };
    $('ch-tok').onclick = () => close(true); $('ch-tno').onclick = () => close(false);
    ta.onkeydown = ev => { if (ev.key === 'Enter' && !ev.shiftKey) { ev.preventDefault(); close(true); } if (ev.key === 'Escape') { ev.stopPropagation(); close(false); } };
  }

  // ── فهرستِ شکل‌ها (Object Tree) ──
  function toggleTree() { const t = $('ch-tree'); if (!t) return; t.hidden = !t.hidden; paintTree(); paintTools(); }
  function paintTree() {
    const t = $('ch-tree'); if (!t || t.hidden) return;
    const ro = readOnly(), rows = [];
    for (const [id, m] of S.recs) {
      if (id === S.drawingId || T[m.n]?.transient) continue;
      const def = T[m.n], o = S.chart.getOverlayById(id), v = o?.points?.[0]?.value;
      rows.push(`<div class="ch-tri${S.selected === id ? ' on' : ''}${m.h || !visOn(m) ? ' off' : ''}" data-id="${id}"><button type="button" class="ch-trn" onclick="SCCHART.pickObj('${id}')"><span class="ch-tric" style="color:${m.c || def.color || C.blue}">${def.ic}</span><span><b>${esc(nm(def))}</b><small dir="ltr">${def.pad ? '' : esc(fmt(v))}${m.x?.text ? ` · <span class="ch-utext" dir="auto">${esc(String(m.x.text).slice(0, 24))}</span>` : ''}</small></span></button>`
        + `<button type="button" class="ch-trb" title="${m.h ? tr('نمایش', 'Show') : tr('پنهان', 'Hide')}" aria-label="${tr('پنهان/نمایش', 'Hide/show')}" onclick="SCCHART.objHide('${id}')">${m.h ? ICON.eyeOff : ICON.eye}</button>`
        + (ro ? '' : `<button type="button" class="ch-trb" title="${m.k ? tr('باز کردنِ قفل', 'Unlock') : tr('قفل', 'Lock')}" aria-label="${tr('قفل', 'Lock')}" onclick="SCCHART.objLock('${id}')">${m.k ? ICON.lock : ICON.unlock}</button><button type="button" class="ch-trb del" title="${tr('حذف', 'Remove')}" aria-label="${tr('حذف', 'Remove')}" onclick="SCCHART.objDel('${id}')">${ICON.trash}</button>`) + '</div>');
    }
    t.innerHTML = `<div class="ch-flyh">${tr('شکل‌های ' + esc(S.coin), 'Object tree · ' + esc(S.coin))} <small>(${num(rows.length)})</small><button type="button" class="ch-x" aria-label="${tr('بستن', 'Close')}" onclick="SCCHART.tree()">${ICON.close}</button></div>`
      + (rows.length ? rows.reverse().join('') : `<div class="ch-pempty">${tr('هنوز شکلی رسم نشده.', 'No drawings yet.')}</div>`);
  }

  function shell() {
    const d = dirOf();
    return `<div class="ch-wrap" dir="${d}" data-theme="${S.theme === 'light' ? 'light' : 'dark'}">
      <div class="ch-head">
        <button type="button" class="ch-coin" id="ch-coinb" onclick="SCCHART.pick()" aria-label="${tr('انتخابِ نماد و منبع', 'Symbol search')}"><span id="ch-logo">${typeof coinLogo === 'function' ? coinLogo(S.coin) : ''}</span><span class="ch-cname"><span class="ch-cl" dir="ltr"><b id="ch-coinname">${esc(S.coin)}</b><small id="ch-quote"></small></span><small class="ch-csrc" id="ch-csrc"></small></span>${ICON.chev}</button>
        <div class="ch-px" dir="ltr"><b id="ch-last">—</b><span id="ch-chg" class="ch-chg"></span></div>
        <div class="ch-srcs" id="ch-srcs" role="group" aria-label="${tr('منبعِ داده', 'Data source')}">${SOURCES.map(s => `<button type="button" data-src="${s.id}" onclick="SCCHART.src('${s.id}')">${s.name}</button>`).join('')}</div>
        <div class="ch-lang" id="ch-lang" role="group" aria-label="${tr('زبانِ نمودار', 'Chart language')}"><button type="button" data-l="fa" lang="fa" onclick="SCCHART.lang('fa')">فا</button><button type="button" data-l="en" lang="en" onclick="SCCHART.lang('en')">EN</button></div>
        <button type="button" class="ch-thm" id="ch-thm" onclick="SCCHART.theme()" aria-pressed="false"></button>
      </div>
      <div class="ch-bar">
        <div class="ch-tfs" id="ch-tfs" role="group" aria-label="${tr('تایم‌فریم', 'Time interval')}" dir="ltr">${TF_VIEW.map(t => `<button type="button" data-tf="${t.id}" onclick="SCCHART.tf('${t.id}')">${t.l}</button>`).join('')}</div>
        <button type="button" class="ch-tfb" id="ch-tfb" onclick="SCCHART.tfMenu(this)" aria-haspopup="true"><b id="ch-tfl" dir="ltr">${tfOf(S.tf).l}</b>${ICON.chev}</button>
        <button type="button" class="ch-fullb ch-bb" id="ch-ctb" onclick="SCCHART.ctMenu(this)" aria-haspopup="true">${CT_IC[S.ct] || CT_IC.candle}</button>
        <button type="button" class="ch-indb" onclick="SCCHART.indMenu()" aria-haspopup="true">${ICON.ind}<span id="ch-indl">${tr('اندیکاتور', 'Indicators')}</span></button>
        <button type="button" class="ch-fullb ch-bb" id="ch-cset" onclick="SCCHART.chartSettings()">${ICON.gear}</button>
        <button type="button" class="ch-fullb ch-bb" id="ch-shot" onclick="SCCHART.snapshot()">${ICON.camera}</button>
        <button type="button" class="ch-fullb" id="ch-full" onclick="SCCHART.max()" aria-pressed="false">${ICON.full}</button>
        <button type="button" class="ch-fullb ch-bb" id="ch-wlb" onclick="SCCHART.watchlist()" aria-pressed="false">${ICON.wl}</button>
      </div>
      <div class="ch-main" dir="ltr">
        <div class="ch-tb" id="ch-tools" role="toolbar" aria-label="${tr('ابزارهای رسم', 'Drawing tools')}"></div>
        <div class="ch-stage" id="ch-stage">
          <div class="ch-canvas" id="ch-canvas"></div>
          <button type="button" class="ch-auto on" id="ch-auto" onclick="SCCHART.auto()" aria-pressed="true">A</button>
          <button type="button" class="ch-auto ch-scl" id="ch-log" data-ys="log" onclick="SCCHART.scale('log')" aria-pressed="false">L</button>
          <button type="button" class="ch-auto ch-scl" id="ch-pct" data-ys="pct" onclick="SCCHART.scale('pct')" aria-pressed="false">%</button>
          <button type="button" class="ch-rt" id="ch-rt" onclick="SCCHART.realtime()" hidden>${ICON.rt}</button>
          <div class="ch-pad" id="ch-pad" hidden><canvas></canvas></div>
          <div class="ch-msg" id="ch-msg" hidden></div>
          <div class="ch-hint" id="ch-hint" dir="${d}" hidden></div>
          <div class="ch-sel" id="ch-sel" dir="${d}" hidden></div>
          <div class="ch-fly" id="ch-fly" dir="${d}" hidden></div>
          <div class="ch-pop" id="ch-pop" dir="${d}" hidden></div>
          <div class="ch-ctx" id="ch-ctx" dir="${d}" hidden></div>
          <div class="ch-tree" id="ch-tree" dir="${d}" hidden></div>
          <div class="ch-indm" id="ch-indm" dir="${d}" hidden></div>
          <div class="ch-modal" id="ch-modal" dir="${d}" hidden></div>
        </div>
        <aside class="ch-wl" id="ch-wl" dir="${d}" hidden></aside>
      </div>
      <div class="ch-foot"><span id="ch-save" class="ch-save"></span><span id="ch-srcinfo"></span></div>
    </div>`;
  }

  // ── اندیکاتورها ──
  const INDICATORS = [
    { id: 'VOL', t: 'حجم', en: 'Volume', main: false }, { id: 'MA', t: 'میانگینِ متحرک (MA)', en: 'Moving Average (MA)', main: true },
    { id: 'EMA', t: 'میانگینِ نمایی (EMA)', en: 'Exponential Moving Average (EMA)', main: true }, { id: 'BOLL', t: 'باندِ بولینگر', en: 'Bollinger Bands (BOLL)', main: true },
    { id: 'RSI', t: 'RSI', en: 'Relative Strength Index (RSI)', main: false }, { id: 'MACD', t: 'MACD', en: 'MACD', main: false },
    { id: 'SAR', t: 'پارابولیک سار (SAR)', en: 'Parabolic SAR', main: true }, { id: 'KDJ', t: 'استوکاستیک (KDJ)', en: 'Stochastic (KDJ)', main: false },
    { id: 'CCI', t: 'CCI', en: 'Commodity Channel Index (CCI)', main: false }, { id: 'DMI', t: 'ADX / DMI', en: 'Directional Movement (DMI / ADX)', main: false },
    { id: 'OBV', t: 'OBV (حجمِ تعادلی)', en: 'On Balance Volume (OBV)', main: false }, { id: 'WR', t: 'ویلیامز %R', en: 'Williams %R', main: false },
    { id: 'AO', t: 'اسیلاتورِ شگفت‌انگیز (AO)', en: 'Awesome Oscillator (AO)', main: false }
  ];
  // دوره‌های پیش‌فرضِ KLineChart و برچسبِ هر عدد
  const IND_DEF = { VOL: [5, 10, 20], MA: [5, 10, 30, 60], EMA: [6, 12, 20], BOLL: [20, 2], RSI: [6, 12, 24], MACD: [12, 26, 9],
    SAR: [2, 2, 20], KDJ: [9, 3, 3], CCI: [20], DMI: [14, 6], OBV: [30], WR: [6, 10, 14], AO: [5, 34] };
  const indLabel = (name, i) => ({
    VOL: () => tr('میانگینِ حجمِ ' + fa(i + 1), 'Volume MA ' + (i + 1)), MA: () => tr('دوره‌ی MA ' + fa(i + 1), 'MA length ' + (i + 1)),
    EMA: () => tr('دوره‌ی EMA ' + fa(i + 1), 'EMA length ' + (i + 1)), RSI: () => tr('دوره‌ی RSI ' + fa(i + 1), 'RSI length ' + (i + 1)),
    BOLL: () => [tr('دوره', 'Length'), tr('ضریبِ انحرافِ معیار', 'StdDev multiplier')][i], MACD: () => [tr('میانگینِ سریع', 'Fast length'), tr('میانگینِ کند', 'Slow length'), tr('خطِ سیگنال', 'Signal smoothing')][i]
    , SAR: () => [tr('شروع (٪)', 'Start (%)'), tr('گام (٪)', 'Increment (%)'), tr('بیشینه (٪)', 'Max value (%)')][i],
    KDJ: () => [tr('دوره‌ی %K', '%K length'), tr('هموارسازیِ %K', '%K smoothing'), tr('هموارسازیِ %D', '%D smoothing')][i],
    DMI: () => [tr('دوره‌ی DI', 'DI length'), tr('هموارسازیِ ADX', 'ADX smoothing')][i], AO: () => [tr('میانگینِ سریع', 'Fast length'), tr('میانگینِ کند', 'Slow length')][i],
    CCI: () => tr('دوره', 'Length'), OBV: () => tr('میانگینِ OBV', 'OBV MA length'), WR: () => tr('دوره‌ی ' + fa(i + 1), 'Length ' + (i + 1))
  }[name] || (() => String(i + 1)))();
  const FIXED_N = new Set(['BOLL', 'MACD', 'SAR', 'KDJ', 'CCI', 'DMI', 'OBV', 'AO']);   // تعدادِ عددها ثابت؛ بقیه را می‌شود کم کرد (مثلاً فقط RSI ۱۴)
  function indParams(name) {
    const p = S.store?.prefs?.ip?.[name], d = IND_DEF[name];
    if (!d || !Array.isArray(p) || !p.length || p.length > d.length || (FIXED_N.has(name) && p.length !== d.length)) return null;
    return p.every((v, i) => isNum(v) && v > 0 && v <= 500 && (name === 'BOLL' && i === 1 ? v <= 10 : Number.isInteger(v))) ? p.slice() : null;
  }
  function applyIndicators() {
    for (const [name, pane] of Object.entries(S.panes)) S.chart.removeIndicator(pane, name);
    S.panes = {};
    const ph = S.store.prefs.ph || {};
    // مثلِ TradingView: نمودارِ اصلی همیشه بزرگ‌ترین است — پنل‌های اندیکاتور روی‌هم حداکثر نصفِ ارتفاع را می‌گیرند
    const subs = (S.store.prefs.ind || []).filter(n => INDICATORS.some(x => x.id === n && !x.main)).length;
    const cap = subs ? Math.max(20, Math.floor(($('ch-canvas')?.clientHeight || 520) * 0.5 / subs)) : 400;
    for (const name of S.store.prefs.ind || []) {
      const def = INDICATORS.find(x => x.id === name); if (!def) continue;
      const p = indParams(name), v = p ? { name, calcParams: p } : name;
      const h = clamp(Math.min(+ph[name] || 90, cap), 20, 400);
      const pane = def.main ? S.chart.createIndicator(v, true, { id: 'candle_pane' }) : S.chart.createIndicator(v, false, { height: h, minHeight: 20 });
      S.panes[name] = def.main ? 'candle_pane' : pane;
    }
  }
  // کشیدنِ مرزِ پنل ⇒ ارتفاعِ هر پنلِ اندیکاتور ذخیره می‌شود
  function savePaneHeights() {
    if (!S.store || readOnly()) return;
    const ph = { ...(S.store.prefs.ph || {}) };
    for (const [name, pane] of Object.entries(S.panes)) { if (pane === 'candle_pane') continue; const h = S.chart.getSize(pane)?.height; if (isNum(h) && h > 20) ph[name] = Math.round(h); }
    S.store.prefs.ph = ph; scheduleSave();
  }
  let zoomTimer = null;
  function saveZoomSoon() {
    if (!S.store || readOnly()) return;
    clearTimeout(zoomTimer);
    zoomTimer = setTimeout(() => { const bs = S.chart?.getBarSpace?.(); if (isNum(bs) && bs > 0) { S.store.prefs.bs = Math.round(bs * 100) / 100; scheduleSave(); } }, 700);
  }
  function openIndSettings(name) {
    const box = $('ch-modal'), d = IND_DEF[name]; if (!box || !d || readOnly()) return;
    $('ch-indm').hidden = true;
    const cur = indParams(name) || d;
    const n = d.length, rows = [];
    for (let i = 0; i < n; i++) {
      const v = cur[i], float = name === 'BOLL' && i === 1;
      rows.push(`<label class="ch-row"><span>${esc(indLabel(name, i))}</span><input class="fi" dir="ltr" inputmode="${float ? 'decimal' : 'numeric'}" data-ip="${i}" value="${v ?? ''}" placeholder="${FIXED_N.has(name) ? d[i] : tr('خالی = بی این خط', 'empty = no line')}"></label>`);
    }
    const title = INDICATORS.find(x => x.id === name);
    box.innerHTML = `<div class="ch-mcard ch-set" role="dialog" aria-label="${esc(tr('تنظیماتِ ', 'Settings · ') + name)}"><div class="ch-mh"><b>${esc(tr(title.t, title.en))}</b></div>
      <div class="ch-coords">${rows.join('')}</div><div class="ch-merr" id="ch-ierr" hidden></div>
      <div class="ch-mrow"><button type="button" class="btn btn-ghost ch-sdef" id="ch-idef">${tr('بازگشت به پیش‌فرض', 'Reset to default')}</button><button type="button" class="btn btn-ghost" id="ch-ino">${tr('انصراف', 'Cancel')}</button><button type="button" class="btn btn-primary" id="ch-iok">${tr('ثبت', 'Ok')}</button></div></div>`;
    box.hidden = false;
    const done = p => {
      const all = { ...(S.store.prefs.ip || {}) };
      if (!p || JSON.stringify(p) === JSON.stringify(d)) delete all[name]; else all[name] = p;
      S.store.prefs.ip = all; box.hidden = true; box.innerHTML = ''; applyIndicators(); scheduleSave();
    };
    const toNum = s => parseFloat(String(s).replace(/[٠-٩]/g, c => '٠١٢٣٤٥٦٧٨٩'.indexOf(c)).replace(/[۰-۹]/g, c => '۰۱۲۳۴۵۶۷۸۹'.indexOf(c)));
    $('ch-iok').onclick = () => {
      const vals = [...box.querySelectorAll('[data-ip]')].map(e => String(e.value).trim());
      const out = [];
      for (let i = 0; i < vals.length; i++) {
        if (!vals[i]) { if (FIXED_N.has(name)) return bad(); continue; }
        const v = toNum(vals[i]), float = name === 'BOLL' && i === 1;
        if (!isNum(v) || v <= 0 || v > (float ? 10 : 500) || (!float && !Number.isInteger(v))) return bad();
        out.push(v);
      }
      if (!out.length) return bad();
      done(out);
    };
    function bad() { const e = $('ch-ierr'); e.textContent = tr('عددها باید مثبت باشند: دوره‌ها عددِ صحیح تا ۵۰۰' + (name === 'BOLL' ? '، ضریب تا ۱۰' : '') + '.', 'Values must be positive: whole-number lengths up to 500' + (name === 'BOLL' ? ', multiplier up to 10' : '') + '.'); e.hidden = false; }
    $('ch-ino').onclick = () => { box.hidden = true; box.innerHTML = ''; };
    $('ch-idef').onclick = () => done(null);
    box.onkeydown = ev => { if (ev.key === 'Escape') { ev.stopPropagation(); box.hidden = true; box.innerHTML = ''; } };
  }
  function toggleIndicator(name) {
    const set = new Set(S.store.prefs.ind || []);
    set.has(name) ? set.delete(name) : set.add(name);
    S.store.prefs.ind = [...set]; applyIndicators(); paintInd(); scheduleSave();
  }
  function paintInd(listOnly) {
    const box = $('ch-indm'); if (!box || box.hidden) return;
    const on = new Set(S.store.prefs.ind || []), ro = readOnly(), q = String(S.indQ || '').trim().toLowerCase();
    const list = INDICATORS.filter(x => !q || [x.id, x.t, x.en].some(v => String(v).toLowerCase().includes(q)));
    const rows = (list.length ? '' : `<div class="ch-pempty">${tr('اندیکاتوری پیدا نشد', 'No indicators found')}</div>`)
      + list.map(x => `<div class="ch-indr"><button type="button" class="ch-indi${on.has(x.id) ? ' on' : ''}" onclick="SCCHART.ind('${x.id}')" aria-pressed="${on.has(x.id)}"><i></i>${esc(tr(x.t, x.en))}<small dir="ltr">${(indParams(x.id) || IND_DEF[x.id]).join(', ')}</small></button>`
        + (ro ? '' : `<button type="button" class="ch-indg" data-ind="${x.id}" title="${esc(tr('تنظیماتِ ', 'Settings · ') + x.id)}" aria-label="${esc(tr('تنظیماتِ ', 'Settings · ') + x.id)}" onclick="SCCHART.indSet('${x.id}')">${ICON.gear}</button>`) + '</div>').join('');
    if (listOnly && $('ch-indlist')) { $('ch-indlist').innerHTML = rows; return; }
    box.innerHTML = `<input class="fi ch-inds" id="ch-inds" type="search" dir="auto" autocomplete="off" value="${esc(S.indQ || '')}" placeholder="${tr('جست‌وجوی اندیکاتور', 'Search indicators')}" aria-label="${tr('جست‌وجوی اندیکاتور', 'Search indicators')}" oninput="SCCHART.indFind(this.value)">`
      + `<div class="ch-indlist" id="ch-indlist">${rows}</div>`;
  }


  // ── انتخابگرِ نماد ──
  async function symbolsOf(src) {
    if (S.symbols[src]) return S.symbols[src];
    const r = await apiFetch('/api/chart/symbols?src=' + src, {}, { retries: 1 });
    const d = r && r.ok ? await r.json().catch(() => ({})) : {};
    return (S.symbols[src] = Array.isArray(d.symbols) ? d.symbols : []);
  }
  async function pick() {
    const recent = (S.store?.recent || []).filter(c => c !== S.coin).slice(0, 8);
    const chip = c => `<button type="button" class="ch-pchip" onclick="SCCHART.coin('${jsArg(c)}')">${typeof coinLogo === 'function' ? coinLogo(c) : ''}<span dir="ltr">${esc(c)}</span></button>`;
    $('det-content').innerHTML = `<div class="ch-pick" dir="${dirOf()}"><h3>${tr('انتخابِ نماد و منبع', 'Symbol search')}</h3>
      <div class="ch-psrc" role="group" aria-label="${tr('منبعِ داده', 'Data source')}">${SOURCES.map(s => `<button type="button" class="${s.id === S.src ? 'on' : ''}" aria-pressed="${s.id === S.src}" onclick="SCCHART.src('${s.id}');SCCHART.pick()">${s.name}</button>`).join('')}</div>
      <input id="ch-psearch" class="fi" dir="ltr" placeholder="${tr('جست‌وجو: BTC، ETH، SOL…', 'Search: BTC, ETH, SOL…')}" autocomplete="off" autocapitalize="characters">
      ${recent.length ? `<div class="ch-plab">${tr('اخیر', 'Recent')}</div><div class="ch-pchips">${recent.map(chip).join('')}</div>` : ''}
      <div class="ch-plab">${tr('پرطرفدار', 'Popular')}</div><div class="ch-pchips">${POPULAR.map(chip).join('')}</div>
      <div class="ch-plab" id="ch-plabel">${tr('همه‌ی نمادها', 'All symbols')}</div><div class="ch-plist" id="ch-plist"><div class="ch-pempty">${tr('در حالِ بارگذاری…', 'Loading…')}</div></div></div>`;
    document.getElementById('det-sheet').classList.add('open');
    const all = await symbolsOf(S.src), list = $('ch-plist'), input = $('ch-psearch');
    const draw = () => {
      const q = String(input.value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      let items = all.filter(s => !q || s.includes(q)).slice(0, 120);
      if (q && !items.includes(q) && /^[A-Z0-9]{1,15}$/.test(q)) items = [q, ...items];
      list.innerHTML = items.length ? items.map(chip).join('') : `<div class="ch-pempty">${tr('نمادی پیدا نشد', 'No symbols found')}</div>`;
    };
    input.oninput = draw; draw();
    input.onkeydown = ev => { if (ev.key === 'Enter') { const q = String(input.value || '').toUpperCase().replace(/[^A-Z0-9]/g, ''); if (q) setCoin(q); } };
  }
  function setCoin(c) {
    c = String(c || '').toUpperCase(); if (!/^[A-Z0-9]{1,15}$/.test(c)) return;
    if (typeof closeSheet === 'function') closeSheet();
    if (c === S.coin) return;
    cancelDrawing(); S.coin = c; S.hist = []; S.redo = [];
    paintWL();
    remember(); const logo = $('ch-logo'); if (logo && typeof coinLogo === 'function') logo.innerHTML = coinLogo(c);
    loadSeries();
  }
  function setSrc(src) { if (!SOURCES.some(s => s.id === src) || src === S.src) return; cancelDrawing(); S.src = src; remember(); loadSeries(); S.q = {}; paintWL(); wlPoll(); }
  function setTf(tf) { if (!TFS.some(t => t.id === tf) || tf === S.tf) return; cancelDrawing(); S.tf = tf; remember(); loadSeries(); }
  function remember() { if (!S.store) return; S.store.last = { src: S.src, coin: S.coin, tf: S.tf }; if (!readOnly()) { L.s(cacheKey(), S.store); clearTimeout(S.saveTimer); S.saveTimer = setTimeout(save, 2500); } }

  // ── صفحه‌کلید (همان میان‌برهای TradingView) ──
  const KEYS = { t: 'scTrend', h: 'scHLine', j: 'scHRay', v: 'scVLine', c: 'scCross', f: 'scFib' };
  function onKey(ev) {
    if (ev.key === 'Control') S.ctrl = true;
    if (!$('screen-chart')?.classList.contains('active') || /INPUT|TEXTAREA|SELECT/.test(ev.target?.tagName || '')) return;
    if (!$('ch-modal')?.hidden) return;
    const k = String(ev.key || '').toLowerCase();
    if ((ev.key === 'Delete' || ev.key === 'Backspace') && S.selected) { ev.preventDefault(); removeId(S.selected); }
    else if ((ev.ctrlKey || ev.metaKey) && (k === 'y' || (k === 'z' && ev.shiftKey))) { ev.preventDefault(); redo(); }
    else if ((ev.ctrlKey || ev.metaKey) && k === 'z') { ev.preventDefault(); undo(); }
    else if (ev.altKey && ev.shiftKey && ev.code === 'KeyR') { ev.preventDefault(); startTool('scRect'); }
    else if (ev.altKey && !ev.shiftKey && !ev.ctrlKey && ev.code === 'KeyR') { ev.preventDefault(); resetView(); }
    else if (wlOpen() && !ev.altKey && !ev.ctrlKey && !ev.metaKey && !ev.shiftKey && (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') && !S.drawingId) { ev.preventDefault(); wlStep(ev.key === 'ArrowDown' ? 1 : -1); }
    else if ((ev.ctrlKey || ev.metaKey) && !ev.shiftKey && ev.code === 'KeyC' && S.selected && !String(window.getSelection?.() || '')) { if (copySel()) ev.preventDefault(); }
    else if ((ev.ctrlKey || ev.metaKey) && !ev.shiftKey && ev.code === 'KeyV' && S.clip) { if (pasteClip()) ev.preventDefault(); }
    else if (ev.shiftKey && !ev.altKey && !ev.ctrlKey && !ev.metaKey && ev.code === 'KeyF') { ev.preventDefault(); setMax(); }
    else if (ev.altKey && !ev.ctrlKey && !ev.metaKey && KEYS[ev.code?.replace('Key', '').toLowerCase()]) { ev.preventDefault(); startTool(KEYS[ev.code.replace('Key', '').toLowerCase()]); }
    else if (ev.key === 'Escape') {
      if (S.fly || S.pop || !$('ch-ctx')?.hidden) { closeFly(); closePop(); closeCtx(); }
      else if (S.drawingId || T[S.tool]?.pad || S.tool === 'eraser') startTool('cursor');
      else if (S.measureId) { dropMeasure(); paintTools(); }
      else if (S.selected) deselect();
      else if (S.max) setMax(false);
    }
  }
  function onKeyUp(ev) { if (ev.key === 'Control') S.ctrl = false; }

  async function mount(el) {
    const kc = window.klinecharts;
    if (!kc) throw new Error('klinecharts_missing');
    S.touch = window.matchMedia('(pointer: coarse)').matches;
    S.tol = S.touch ? 12 : 6; S.magTol = S.touch ? 28 : 16;
    registerOverlays();
    if (S.chart && S.root === el && el.querySelector('.ch-wrap')) { show(); return; }
    S.root = el; injectCss();
    await loadStore();
    const last = S.store.last || {}, pf = S.store.prefs;
    if (SOURCES.some(s => s.id === last.src)) S.src = last.src;
    if (/^[A-Z0-9]{1,15}$/.test(last.coin || '')) S.coin = last.coin;
    if (TFS.some(t => t.id === last.tf)) S.tf = last.tf;
    S.mag = [0, 1, 2].includes(pf.mag) ? pf.mag : 1; S.magLast = [1, 2].includes(pf.magLast) ? pf.magLast : 1;
    S.stay = !!pf.stay; S.lockAll = !!pf.lock; S.lang = pf.lang === 'en' ? 'en' : 'fa'; S.hidden = !!pf.hid; S.theme = pf.theme === 'light' ? 'light' : 'dark';
    S.ct = CT.includes(pf.ct) ? pf.ct : 'candle'; S.ys = pf.ys === 'log' || pf.ys === 'pct' ? pf.ys : null;
    S.cs = pf.cs && typeof pf.cs === 'object' ? JSON.parse(JSON.stringify(pf.cs)) : {};
    el.innerHTML = shell();
    document.querySelectorAll('#ch-lang button').forEach(b => { const on = b.dataset.l === S.lang; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    paintMax(); paintTheme(); paintAuto(); paintBar();
    paintTools(); status(S.loadedStore ? 'saved' : 'local'); if (!S.loadedStore && !L.g(cacheKey())) $('ch-save').textContent = '';
    const phone = window.matchMedia('(max-width: 600px)').matches;
    S.phone = phone;
    S.chart = kc.init($('ch-canvas'), { locale: 'en-US', timezone: 'Asia/Tehran', styles: stylesFor() });
    patchEngine(S.chart);
    S.chart.setLoadDataCallback(onLoadData);
    S.chart.setOffsetRightDistance(48);
    applyIndicators();
    S.chart.subscribeAction('onZoom', saveZoomSoon);
    for (const a of ['onZoom', 'onScroll', 'onVisibleRangeChange']) S.chart.subscribeAction(a, updRTSoon);
    S.chart.subscribeAction('onPaneDrag', () => setTimeout(savePaneHeights, 50));
    S.chart.subscribeAction('onTooltipIconClick', d => {
      if (!d?.indicatorName || readOnly()) return;
      if (d.iconId === 'set') openIndSettings(d.indicatorName);
      else if (d.iconId === 'del' && (S.store.prefs.ind || []).includes(d.indicatorName)) toggleIndicator(d.indicatorName);
    });
    const cv = $('ch-canvas');
    if ('ResizeObserver' in window) new ResizeObserver(() => S.chart && S.chart.resize()).observe(cv);
    // جای آخرین اشاره (برای دوضربه‌ی سریع)، خط‌کش با Shift، و پاک شدنِ خط‌کش با کلیکِ بعدی
    cv.addEventListener('pointerdown', e => {
      const r = cv.getBoundingClientRect(); S.lastPtr = { x: e.clientX - r.left, y: e.clientY - r.top };
      if (S.measureId && !S.drawingId) { dropMeasure(); paintTools(); }
      if (e.shiftKey && S.tool === 'cursor' && !readOnly()) startTool('scMeasure');
    }, true);
    cv.addEventListener('contextmenu', e => { e.preventDefault(); if (e.pointerType === 'mouse' && !readOnly() && (S.drawingId || T[S.tool]?.pad)) startTool('cursor'); });
    // کشیدن یا دوبار-کلیکِ محورِ قیمت هم حالتِ خودکار را عوض می‌کند ⇒ دکمه‌ی A همگام بماند
    for (const t of ['pointerup', 'dblclick']) cv.addEventListener(t, () => setTimeout(paintAuto, 0));
    padEvents($('ch-pad'));
    const wlp = $('ch-wl'); wlp.addEventListener('click', wlClick); wlp.addEventListener('pointerdown', wlPointerDown);
    wlp.addEventListener('keydown', e => { if (e.target.id === 'ch-wlname') { if (e.key === 'Enter') { e.preventDefault(); wlSaveName(); } else if (e.key === 'Escape') { e.stopPropagation(); S.wlRename = null; paintWL(); } } });
    setInterval(() => wlPoll(), 8000);
    if (pf.wlo && wide()) toggleWL(true);
    document.addEventListener('keydown', onKey);
    window.addEventListener('keydown', onNudgeKey, true);   // پیش از کتابخانه (که Shift+←/→ را برای جابه‌جاییِ نمودار می‌گیرد)
    document.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', () => { S.ctrl = false; });
    // بستنِ منوها با کلیکِ بیرون
    document.addEventListener('pointerdown', e => {
      const t = e.target;
      if (S.fly && !t.closest?.('#ch-fly, .ch-gw')) closeFly();
      if (S.pop && !t.closest?.('#ch-pop, .ch-selb, .ch-gw')) closePop();
      if (!$('ch-ctx')?.hidden && !t.closest?.('#ch-ctx')) closeCtx();
      if (!$('ch-indm')?.hidden && !t.closest?.('#ch-indm, .ch-indb')) $('ch-indm').hidden = true;
    }, true);
    // مرورگر خودش از تمام‌صفحه بیرون آمد (Esc / حرکتِ گوشی) ⇒ پوشش هم برداشته شود
    document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement && S.max) setMax(false); });
    document.addEventListener('visibilitychange', () => { if (!document.hidden && $('screen-chart')?.classList.contains('active')) startPoll(); });
    window.addEventListener('online', () => { if (S.store && !readOnly()) save(); });
    await loadSeries();
  }
  // ظاهرِ تازه‌ی نمودار (v26.39–40: دکمه‌ی زبان، قلمِ انگلیسی، تمام‌صفحه، گوشیِ باریک، تنظیماتِ اندیکاتور) همراهِ خودِ
  // chart.js می‌آید و فقط با باز شدنِ نمودار بار می‌شود، نه با کلِ اپ (اپِ اصلی روی اینترنتِ ایران سبک بماند).
  const CHART_CSS = `.ch-lang{flex:0 0 auto;display:flex;background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:3px;gap:2px}.ch-lang button{background:none;border:0;color:var(--text2);font:600 12px var(--f-body);padding:6px 8px;border-radius:8px;cursor:pointer;min-height:34px;min-width:34px}.ch-lang button[lang=en]{font-family:var(--f-mono);letter-spacing:.3px}.ch-lang button.on{background:var(--gold);color:#0e0d0c}.ch-wrap[dir=ltr],.ch-pick[dir=ltr]{--f-body:-apple-system,BlinkMacSystemFont,'Trebuchet MS',Roboto,Ubuntu,'Segoe UI',sans-serif;font-family:var(--f-body)}.ch-fullb{flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:36px;min-height:34px;padding:0;background:var(--surface);border:1px solid var(--border);color:var(--text2);border-radius:9px;cursor:pointer}.ch-fullb svg{width:17px;height:17px}.ch-fullb.on{border-color:var(--gold-dim);color:var(--gold);background:rgba(200,168,75,.1)}html.ch-max,html.ch-max body{overflow:hidden}html.ch-max .chart-screen.active{position:fixed;inset:0;z-index:150;height:100dvh;max-width:none;margin:0;background:var(--bg);padding:calc(var(--safe-top,0px) + 8px) max(8px,env(safe-area-inset-right)) calc(var(--safe-bottom,0px) + 2px) max(8px,env(safe-area-inset-left))}html.ch-max .chart-screen .mkt-tabs{display:none}@media(orientation:landscape) and (max-height:520px){html.ch-max .ch-main{flex-direction:row}html.ch-max .ch-tb{order:0;flex-direction:column;align-items:center;width:46px;gap:2px;overflow-y:auto;overflow-x:hidden;padding:2px 0;-webkit-mask-image:none;mask-image:none}html.ch-max .ch-tool{width:40px;height:34px;background:none;border-color:transparent;border-radius:8px}html.ch-max .ch-sep{flex:0 0 1px;align-self:stretch;height:1px;margin:3px 7px}html.ch-max .ch-foot{display:none}html.ch-max .ch-wrap{gap:5px}}@media(min-width:900px){html.ch-max .chart-screen.active{padding:10px 14px 4px}}@media(max-width:600px){.ch-lang button{padding:4px 6px;min-width:32px}}@media(max-width:380px){.ch-bar{gap:6px}.ch-tfs{gap:3px}.ch-tfs button{font-size:11px;padding:6px 1px}}.ch-indr{display:flex;align-items:center;gap:2px}.ch-indr .ch-indi{flex:1;min-width:0}.ch-indi small{margin-inline-start:auto;font:500 10.5px var(--f-mono);color:var(--muted);padding-inline-start:10px}.ch-indg{flex:0 0 auto;width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:none;border:0;border-radius:9px;color:var(--muted);cursor:pointer}.ch-indg:hover,.ch-indg:focus-visible{color:var(--text);background:rgba(255,255,255,.05)}.ch-indg svg{width:17px;height:17px}.ch-sdef{margin-inline-end:auto}.ch-merr{color:var(--red);font-size:12px;margin-top:6px}.ch-merr[hidden]{display:none}.ch-thm{flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:38px;height:38px;padding:0;background:var(--surface);border:1px solid var(--border);color:var(--text2);border-radius:11px;cursor:pointer}.ch-thm svg{width:18px;height:18px}.ch-thm:hover{color:var(--text)}@media(max-width:600px){.ch-coin{min-width:0;flex:0 1 auto;overflow:hidden}.ch-cname{min-width:0}.ch-cl{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ch-thm{width:34px;height:34px}}.ch-indi i{display:flex;align-items:center;justify-content:center;font:800 11px/1 system-ui,sans-serif;color:#0e0d0c}.ch-indi.on i::after{content:'✓'}.chs{width:min(470px,100%);padding:0;gap:0;display:flex;flex-direction:column;max-height:calc(100% - 8px);overflow:hidden;overflow:clip}.ch-stage{overflow:clip}.chs-top,.chs-tabs,.chs-foot{flex:none}.chs-top{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:12px 14px 6px}.chs-top b{font:700 14.5px var(--f-body);color:var(--text)}.chs-x{width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:none;border:0;border-radius:8px;color:var(--muted);cursor:pointer}.chs-x:hover{background:rgba(127,127,127,.14);color:var(--text)}.chs-x svg{width:16px;height:16px}.chs-tabs{display:flex;gap:2px;padding:0 10px;border-bottom:1px solid var(--border);overflow-x:auto;scrollbar-width:none}.chs-tabs button{flex:0 0 auto;background:none;border:0;border-bottom:2px solid transparent;color:var(--text2);font:600 12.5px var(--f-body);padding:9px 10px;cursor:pointer;margin-bottom:-1px}.chs-tabs button.on{color:var(--text);border-bottom-color:var(--gold)}.chs-body{position:relative;overflow:auto;padding:12px 14px;flex:1;min-height:0;overscroll-behavior:contain}.chs-p{display:grid;gap:8px}.chs-r{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:34px;font-size:12.5px;color:var(--text2)}.chs-l{display:flex;flex-direction:column;line-height:1.5}.chs-l small{font:500 10.5px var(--f-mono);color:var(--muted)}.chs-c{display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:flex-end}.chs-ck{display:flex;align-items:center;gap:9px;cursor:pointer;color:var(--text2);font-size:12.5px;line-height:1.6}.chs-ck input,.chs-lv input[type=checkbox]{width:17px;height:17px;margin:0;accent-color:var(--gold);flex:none}.chs-sw{width:32px;height:28px;border-radius:7px;border:1px solid var(--border2);background:linear-gradient(var(--c),var(--c)) center/18px 14px no-repeat,var(--surface);cursor:pointer;padding:0;flex:none}.chs-sw.sm{width:28px;height:26px;background-size:14px 12px}.chs-seg{display:flex;border:1px solid var(--border2);border-radius:8px;overflow:hidden}.chs-seg button{background:var(--surface);border:0;color:var(--text2);min-width:34px;height:28px;padding:0 8px;cursor:pointer;display:flex;align-items:center;justify-content:center;font:600 11.5px var(--f-body)}.chs-seg button+button{border-inline-start:1px solid var(--border2)}.chs-seg button.on{background:rgba(200,168,75,.2);color:var(--gold-light)}.chs-wl{display:block;width:18px;height:var(--w);background:currentColor;border-radius:1px}.chs-sl{display:block;width:20px;border-top:2px solid currentColor}.chs-sl.s1{border-top-style:dashed}.chs-sl.s2{border-top-style:dotted}.chs-op{gap:8px}.chs-op input{width:110px;accent-color:var(--gold)}.chs-op b{font:600 11px var(--f-mono);color:var(--muted);min-width:36px;text-align:end}.chs-h{font:700 12px var(--f-body);color:var(--text);margin-top:6px}.chs-lvs{display:grid;grid-template-columns:1fr 1fr;gap:6px 14px}.chs-lv{display:flex;align-items:center;gap:6px;min-width:0}.chs-lvv{width:100%;min-width:0;height:28px;background:var(--surface);border:1px solid var(--border2);border-radius:7px;color:var(--text);font:600 12px var(--f-mono);padding:0 7px}.chs-lvv.bad,.chs-in.bad{border-color:var(--red)!important}.chs-in{width:min(200px,55%);margin:0;flex:none;padding:7px 10px;font-size:13px}.chs-ta{margin:0;font-size:13px}.chs-hint{font-size:11.5px;color:var(--muted);line-height:1.8}.chs-vis{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.chs-pal{position:absolute;z-index:3;background:var(--card);border:1px solid var(--border2);border-radius:11px;padding:6px;box-shadow:0 14px 34px -10px rgba(0,0,0,.55);width:min(250px,calc(100% - 8px))}.chs-pal .ch-pal{grid-template-columns:repeat(auto-fill,26px)}.chs-foot{display:flex;align-items:center;gap:8px;padding:10px 14px;border-top:1px solid var(--border)}.chs-foot .btn{width:auto;margin:0;padding:8px 14px;font-size:12.5px;border-radius:9px;box-shadow:none}.chs-tpl{position:relative;margin-inline-end:auto}.chs-tm{position:absolute;bottom:calc(100% + 6px);inset-inline-start:0;background:var(--card);border:1px solid var(--border2);border-radius:10px;padding:4px;display:grid;min-width:200px;box-shadow:0 14px 34px -10px rgba(0,0,0,.55);z-index:4}.chs-tm button{background:none;border:0;color:var(--text2);text-align:start;padding:9px 10px;border-radius:7px;cursor:pointer;font:600 12.5px var(--f-body)}.chs-tm button:hover{background:rgba(127,127,127,.14);color:var(--text)}.chs-p[hidden],.chs-pal[hidden],.chs-tm[hidden]{display:none}@media(max-width:600px){.chs-foot .btn{padding:8px 10px}.chs-lvs{gap:6px 10px}}.ch-wrap[data-theme=light]{--surface:#fff;--surface2:#f0f3fa;--card:#fff;--border:#e0e3eb;--border2:#d1d4dc;--text:#131722;--text2:#434651;--muted:#787b86;--gold:#a07a26;--gold-light:#8a6618;--gold-dim:#c9ad6b;--green:#089981;--red:#f23645;background:#fff;color:#131722;border-radius:14px;padding:8px;color-scheme:light}.ch-wrap[data-theme=light] .ch-stage{background:#fff;border-color:#e0e3eb}.ch-wrap[data-theme=light] .ch-msg{background:rgba(255,255,255,.82)}.ch-wrap[data-theme=light] .ch-hint{background:rgba(255,255,255,.98);box-shadow:0 4px 14px rgba(19,23,34,.14)}.ch-wrap[data-theme=light] .ch-fly,.ch-wrap[data-theme=light] .ch-pop,.ch-wrap[data-theme=light] .ch-ctx,.ch-wrap[data-theme=light] .ch-tree,.ch-wrap[data-theme=light] .ch-indm,.ch-wrap[data-theme=light] .ch-sel{background:#fff;box-shadow:0 10px 30px -8px rgba(19,23,34,.25)}.ch-wrap[data-theme=light] .ch-flyh{background:#fff}.ch-wrap[data-theme=light] .ch-modal{background:rgba(19,23,34,.32)}.ch-wrap[data-theme=light] .ch-mcard,.ch-wrap[data-theme=light] .chs-pal,.ch-wrap[data-theme=light] .chs-tm{box-shadow:0 18px 44px -12px rgba(19,23,34,.35)}.ch-wrap[data-theme=light] .ch-flyi:hover,.ch-wrap[data-theme=light] .ch-popi:hover,.ch-wrap[data-theme=light] .ch-selb:hover,.ch-wrap[data-theme=light] .ch-ctxi:hover,.ch-wrap[data-theme=light] .ch-indg:hover,.ch-wrap[data-theme=light] .ch-tool:not(:disabled):not(.on):hover{background:rgba(19,23,34,.06)}.ch-wrap[data-theme=light] .ch-tool.on,.ch-wrap[data-theme=light] .ch-flyi.on,.ch-wrap[data-theme=light] .ch-selb.on,.ch-wrap[data-theme=light] .ch-tri.on,.ch-wrap[data-theme=light] .chs-seg button.on{background:rgba(160,122,38,.13)}.ch-wrap[data-theme=light] .ch-tfs button.on{background:rgba(160,122,38,.1)}.ch-wrap[data-theme=light] .ch-srcs button.on,.ch-wrap[data-theme=light] .ch-lang button.on{background:#131722;color:#fff}.ch-wrap[data-theme=light] .ch-dot{border-color:rgba(19,23,34,.12)}.ch-wrap[data-theme=light] .ch-dot.on{border-color:#131722;box-shadow:0 0 0 2px rgba(19,23,34,.15)}.ch-wrap[data-theme=light] .btn-ghost:hover{background:rgba(19,23,34,.05)}.ch-wrap[data-theme=light] .ch-indi i{border-color:#b2b5be}html.ch-max .chart-screen.active:has(.ch-wrap[data-theme=light]){background:#fff}html.ch-max .ch-wrap[data-theme=light]{border-radius:0;padding:0}.ch-auto{position:absolute;right:4px;bottom:3px;z-index:2;min-width:24px;height:20px;padding:0 5px;border-radius:5px;border:1px solid var(--border2);background:var(--surface);color:var(--muted);font:700 11px var(--f-mono);cursor:pointer;line-height:1}.ch-auto.on{color:var(--gold-light);border-color:var(--gold-dim)}@media(max-width:600px){.ch-auto{height:24px;min-width:28px}}.ch-tfb{display:none;flex:0 0 auto;align-items:center;gap:4px;background:var(--surface);border:1px solid var(--border);color:var(--text);font:700 12.5px var(--f-mono);padding:6px 10px;border-radius:9px;cursor:pointer;min-height:34px}.ch-tfb svg{width:14px;height:14px;color:var(--muted)}.ch-bb svg{width:18px;height:18px}.ch-auto{min-width:20px;height:18px;font-size:10.5px;padding:0 4px}#ch-log{right:27px}#ch-pct{right:50px}.ch-rt{position:absolute;bottom:30px;right:74px;z-index:2;width:30px;height:26px;display:flex;align-items:center;justify-content:center;border-radius:7px;border:1px solid var(--border2);background:var(--surface);color:var(--text2);cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.35)}.ch-rt[hidden]{display:none}.ch-rt svg{width:15px;height:15px}.ch-rt:hover{color:var(--text)}.ch-cti svg{width:20px;height:20px;flex:none}.ch-inds{margin:0 0 4px;padding:8px 10px;font-size:12.5px}.ch-indm{max-height:calc(100% - 16px);grid-template-rows:auto minmax(0,1fr)}.ch-indlist{display:grid;align-content:start;gap:2px;min-height:0;overflow:auto;overscroll-behavior:contain}@media(max-width:600px){.ch-tfs{display:none}.ch-tfb{display:flex}.ch-auto{height:24px;min-width:26px;font-size:11px}#ch-log{right:33px}#ch-pct{right:62px}.ch-rt{right:64px;bottom:34px;width:34px;height:30px}}@media(max-width:380px){.ch-indb span{display:none}.ch-bar{gap:5px}}.ch-main{position:relative}.ch-wl{display:flex;flex-direction:column;background:var(--card);border:1px solid var(--border);border-radius:13px;overflow:hidden;min-height:0;color:var(--text)}.ch-wl[hidden]{display:none}@media(min-width:900px){.ch-wl{flex:0 0 280px;width:280px}}@media(max-width:899px){.ch-wl{position:absolute;inset:0;z-index:11;box-shadow:0 18px 44px -12px rgba(0,0,0,.6)}}.ch-wlh{display:flex;align-items:center;gap:2px;padding:6px;border-bottom:1px solid var(--border);flex:none}.ch-wlsel{flex:1;min-width:0;display:flex;align-items:center;gap:6px;background:none;border:0;color:var(--text);font:700 13px var(--f-body);padding:6px 8px;border-radius:8px;cursor:pointer;text-align:start}.ch-wlsel:hover{background:rgba(127,127,127,.1)}.ch-wlsel b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ch-wlsel small{color:var(--muted);font:500 11px var(--f-mono)}.ch-wlsel svg{width:14px;height:14px;color:var(--muted);flex:none}.ch-wlbtn{flex:none;width:34px;height:34px;display:flex;align-items:center;justify-content:center;background:none;border:0;border-radius:8px;color:var(--text2);cursor:pointer;padding:0}.ch-wlbtn svg{width:18px;height:18px}.ch-wlbtn:hover{background:rgba(127,127,127,.12);color:var(--text)}.ch-wlbtn.on{color:var(--gold-light);background:rgba(200,168,75,.14)}.ch-wlm{display:grid;padding:4px;border-bottom:1px solid var(--border);gap:1px;flex:none;max-height:45%;overflow:auto}.ch-wlm hr{border:0;border-top:1px solid var(--border);margin:4px 2px}.ch-wlm .ch-popi small{margin-inline-start:auto;font:500 10.5px var(--f-mono);color:var(--muted)}.ch-wlmi{background:none;border:0;color:var(--text2);text-align:start;padding:9px 10px;border-radius:7px;cursor:pointer;font:600 12.5px var(--f-body)}.ch-wlmi:hover{background:rgba(127,127,127,.12);color:var(--text)}.ch-wlmi.del{color:var(--red)}.ch-wlin{display:flex;align-items:center;gap:6px;padding:6px;border-bottom:1px solid var(--border);flex:none}.ch-wlin .fi{margin:0;padding:7px 10px;font-size:13px;min-width:0}.ch-wlin .btn{width:auto;margin:0;padding:7px 12px;font-size:12.5px;box-shadow:none;flex:none}.ch-wlcols,.ch-wlr{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr) 64px 22px;align-items:center;gap:4px}.ch-wlcols{padding:3px 8px;border-bottom:1px solid var(--border);flex:none}.ch-wlcols button{background:none;border:0;color:var(--muted);font:600 11px var(--f-body);text-align:start;padding:5px 2px;cursor:pointer;white-space:nowrap}.ch-wlcols button:hover{color:var(--text)}.ch-wlcols button:nth-child(2),.ch-wlcols button:nth-child(3){text-align:end}.ch-wll{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;padding:2px 0}.ch-wlr{position:relative;padding:7px 8px;cursor:pointer;border-inline-start:2px solid transparent;min-height:38px}.ch-wlr:hover{background:rgba(127,127,127,.08)}.ch-wlr.on{background:rgba(200,168,75,.12);border-inline-start-color:var(--gold)}.ch-wlr.drag{opacity:.75;background:rgba(200,168,75,.2);z-index:1}.ch-wls{display:flex;align-items:center;gap:7px;min-width:0}.ch-wls .t-icon{width:20px;height:20px;border-radius:6px;flex:none}.ch-wls b{font:700 12.5px var(--f-mono);color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ch-wlp{font:600 12px var(--f-mono);color:var(--text);text-align:end;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-radius:4px;padding:1px 2px}.ch-wlch{font:600 11.5px var(--f-mono);text-align:end;color:var(--muted);white-space:nowrap}.ch-wlch.up{color:var(--green)}.ch-wlch.down{color:var(--red)}.ch-wlp.fu{animation:chfu .9s}.ch-wlp.fd{animation:chfd .9s}@keyframes chfu{0%{background:rgba(8,153,129,.38)}100%{background:transparent}}@keyframes chfd{0%{background:rgba(242,54,69,.38)}100%{background:transparent}}.ch-wlrm{width:22px;height:22px;display:flex;align-items:center;justify-content:center;background:none;border:0;border-radius:6px;color:var(--muted);cursor:pointer;visibility:hidden;padding:0}.ch-wlrm svg{width:13px;height:13px}.ch-wlrm:hover{color:var(--red);background:rgba(242,54,69,.1)}.ch-wl.edit .ch-wlrm{visibility:visible}.ch-wlg{position:absolute;inset-inline-start:0;top:0;bottom:0;width:16px;display:none;align-items:center;justify-content:center;color:var(--muted);cursor:grab;touch-action:none}.ch-wlg svg{width:12px;height:12px}.ch-wl.edit .ch-wlg{display:flex}.ch-wl.edit .ch-wlr{padding-inline-start:18px}@media(hover:hover){.ch-wlr:hover .ch-wlrm{visibility:visible}.ch-wlr:hover .ch-wlg{display:flex}}.ch-wlf{flex:none;padding:6px 10px;border-top:1px solid var(--border);font-size:10.5px;color:var(--muted)}.ch-pchip.on{border-color:var(--gold-dim);background:rgba(200,168,75,.12)}.ch-pchip i{font-style:normal;margin-inline-start:4px;color:var(--muted);font-weight:700}.ch-pchip.on i{color:var(--gold-light)}.ch-wdone{margin-top:12px}@media(max-width:420px){.ch-indb span{display:none}}.ch-hintx{pointer-events:auto;display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;margin-inline-start:8px;vertical-align:middle;border:0;border-radius:50%;background:rgba(127,127,127,.2);color:inherit;cursor:pointer;padding:0}.ch-hintx svg{width:12px;height:12px}.ch-hintx:hover{background:rgba(242,54,69,.2);color:var(--red)}@media(pointer:coarse){.ch-hintx{width:28px;height:28px;margin-inline-start:6px}.ch-hintx svg{width:14px;height:14px}}`;
  function injectCss() { if (document.getElementById('ch-css')) return; const st = document.createElement('style'); st.id = 'ch-css'; st.textContent = CHART_CSS; document.head.appendChild(st); }
  // ── مقیاسِ خودکارِ قیمت (A) ──
  const candleAxis = () => { try { return S.chart?.getDrawPaneById?.('candle_pane')?.getAxisComponent?.() || null; } catch (_) { return null; } };
  const isAuto = () => { const a = candleAxis(); return !a || !!a.getAutoCalcTickFlag(); };
  function setAuto() {
    const a = candleAxis(); if (!a) return;
    a.setAutoCalcTickFlag(true);
    try { S.chart.adjustPaneViewport(false, true, true, true); } catch (_) {}
    paintAuto();
  }
  function paintAuto() {
    const b = $('ch-auto'); if (!b) return;
    const on = isAuto(), t = tr('مقیاسِ خودکارِ قیمت', 'Auto (fits data to screen)');
    b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); b.title = t; b.setAttribute('aria-label', t);
  }
  // ── نوعِ نمودار (مثلِ TradingView) ──
  const CT = ['candle', 'hollow', 'bars', 'line', 'area', 'ha'];
  const CT_IC = {
    candle: svg('<path d="M8 3v3M8 16v5M16 2v5M16 15v5"/><rect x="6" y="6" width="4" height="10" rx=".6" fill="currentColor"/><rect x="14" y="7" width="4" height="8" rx=".6"/>'),
    hollow: svg('<path d="M8 3v3M8 16v5M16 2v5M16 15v5"/><rect x="6" y="6" width="4" height="10" rx=".6"/><rect x="14" y="7" width="4" height="8" rx=".6" fill="currentColor"/>'),
    bars: svg('<path d="M8 4v15M5 7h3M8 15h3M16 3v15M13 13h3M16 6h3"/>'),
    line: svg('<path d="M3 17l5-6 4 3 8-9"/>'),
    area: svg('<path d="M3 17l5-6 4 3 8-9v15H3z" fill="currentColor" fill-opacity=".22"/><path d="M3 17l5-6 4 3 8-9"/>'),
    ha: svg('<path d="M8 3v3M8 16v5M16 3v4M16 15v6"/><rect x="6" y="6" width="4" height="10" rx="2" fill="currentColor"/><rect x="14" y="7" width="4" height="8" rx="2" fill="currentColor"/>')
  };
  const ctName = c => ({ candle: tr('شمعی', 'Candles'), hollow: tr('شمعیِ توخالی', 'Hollow candles'), bars: tr('میله‌ای (OHLC)', 'Bars'), line: tr('خطی', 'Line'), area: tr('ناحیه‌ای', 'Area'), ha: tr('هیکن‌آشی', 'Heikin Ashi') }[c]);
  function ctMenu(el) {
    openPop('ct', el, `<div class="ch-poph">${tr('نوعِ نمودار', 'Chart type')}</div>` + CT.map(c => `<button type="button" class="ch-popi ch-cti${(S.ct || 'candle') === c ? ' on' : ''}" data-ct="${c}" onclick="SCCHART.chartType('${c}')">${CT_IC[c]}<span><b>${ctName(c)}</b></span></button>`).join(''));
  }
  function setChartType(c) {
    c = CT.includes(c) ? c : 'candle';
    const was = S.ct || 'candle'; closePop();
    if (c === was) return;
    S.ct = c; if (S.store) { if (c === 'candle') delete S.store.prefs.ct; else S.store.prefs.ct = c; if (!readOnly()) scheduleSave(); }
    S.chart?.setStyles(stylesFor());
    if ((was === 'ha') !== (c === 'ha') && S.data.length) S.chart.applyNewData(viewData(S.data), S.more);
    paintBar();
  }
  // ── مقیاسِ قیمت: لگاریتمی / درصدی (مثلِ «log» و «%» گوشه‌ی TradingView) ──
  function setScale(v) {
    v = v === S.ys ? null : (v === 'log' || v === 'pct' ? v : null);
    S.ys = v; if (S.store) { if (v) S.store.prefs.ys = v; else delete S.store.prefs.ys; if (!readOnly()) scheduleSave(); }
    S.chart?.setStyles(stylesFor()); paintBar();
  }
  // ── بازگشت به آخرین کندل (مثلِ دکمه‌ی »» در TradingView) و Alt+R ──
  function updRT() {
    const b = $('ch-rt'); if (!b || !S.chart) return;
    const n = S.chart.getDataList().length, W = S.chart.getSize('candle_pane', 'main')?.width || 0;
    const x = n ? S.chart.convertToPixel({ dataIndex: n - 1 }, { paneId: 'candle_pane' })?.x : null;
    b.hidden = !(isNum(x) && W && (x > W - 4 || x < 0));
  }
  let rtTimer = null; const updRTSoon = () => { clearTimeout(rtTimer); rtTimer = setTimeout(updRT, 120); };
  function toRealtime() { S.chart?.scrollToRealTime(250); setTimeout(updRT, 320); }
  function resetView() { setAuto(); toRealtime(); }
  // ── عکسِ نمودار (مثلِ دوربینِ TradingView): نمودار + شکل‌ها + سرتیترِ نماد/تایم‌فریم/منبع ──
  async function snapshot() {
    if (!S.chart) return;
    const t = TH(), url = S.chart.getConvertPictureUrl(true, 'png', t.bg);
    const img = new Image();
    try { await new Promise((ok, no) => { img.onload = ok; img.onerror = no; img.src = url; }); } catch (_) { showToast(tr('ساختِ عکس نشد', 'Could not create the snapshot')); return; }
    const k = img.width / Math.max(1, $('ch-canvas')?.clientWidth || img.width), pad = Math.round(34 * k);
    const cv = document.createElement('canvas'); cv.width = img.width; cv.height = img.height + pad;
    const g = cv.getContext('2d'); g.fillStyle = t.bg; g.fillRect(0, 0, cv.width, cv.height); g.drawImage(img, 0, pad);
    g.textBaseline = 'middle'; g.direction = 'ltr';
    g.fillStyle = t.txt; g.font = `700 ${Math.round(14 * k)}px ${MONO}`; g.textAlign = 'left';
    g.fillText(`${S.coin}${S.src === 'bybit' ? '/USDT' : '/USD'} · ${tfOf(S.tf).l} · ${srcName()}`, Math.round(12 * k), pad / 2);
    g.fillStyle = t.icon; g.font = `500 ${Math.round(11 * k)}px ${MONO}`; g.textAlign = 'right';
    g.fillText(`${fmtDate(Date.now())} (Tehran) · SamadiCapital Journal`, cv.width - Math.round(12 * k), pad / 2);
    const name = `${S.coin}_${tfOf(S.tf).l}_${new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-')}.png`;
    const blob = await new Promise(r => cv.toBlob(r, 'image/png'));
    S.lastShot = { w: cv.width, h: cv.height, size: blob?.size || 0, name };
    if (!blob) { showToast(tr('ساختِ عکس نشد', 'Could not create the snapshot')); return; }
    try {
      const file = new File([blob], name, { type: 'image/png' });
      if (S.touch && navigator.canShare?.({ files: [file] })) { await navigator.share({ files: [file], title: name }); return; }
    } catch (e) { if (e?.name === 'AbortError') return; }
    const a = document.createElement('a'), u = URL.createObjectURL(blob);
    a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 4000);
    showToast(tr('عکسِ نمودار ذخیره شد', 'Chart snapshot saved'));
  }
  // ── تایم‌فریم در گوشی: فهرستِ کشویی (مثلِ اپِ TradingView) ──
  function tfMenu(el) {
    openPop('tf', el, `<div class="ch-poph">${tr('تایم‌فریم', 'Time interval')}</div>` + TF_VIEW.map(t => `<button type="button" class="ch-popi${t.id === S.tf ? ' on' : ''}" data-tf="${t.id}" onclick="SCCHART.tf('${t.id}');SCCHART.closePop()"><i></i><span><b>${tfName(t)}</b></span><small dir="ltr">${t.l}</small></button>`).join(''));
  }
  // ── کپی/چسباندنِ شکل (Ctrl+C / Ctrl+V، مثلِ TradingView) ──
  function copySel() {
    const id = S.selected, m = S.recs.get(id), o = id && S.chart.getOverlayById(id); if (!m || !o) return false;
    S.clip = { n: m.n, p: o.points.map(pt => [tsOfPoint(pt), pt.value]), c: m.c, w: m.w, s: m.s, x: JSON.parse(JSON.stringify(m.x || {})) };
    showToast(tr('شکل کپی شد — Ctrl+V برای چسباندن', 'Drawing copied — Ctrl+V to paste')); return true;
  }
  function pasteClip() {
    const c = S.clip; if (!c || readOnly() || !T[c.n]) return false;
    if (S.recs.size >= MAX_DRAWINGS) { showToast(tr(`حداکثر ${fa(MAX_DRAWINGS)} شکل برای هر نماد`, `Up to ${MAX_DRAWINGS} drawings per symbol`)); return false; }
    const shift = 3 * tfMs(); c.p = c.p.map(([t, v]) => [t + shift, v]);   // هر چسباندن کمی جلوتر، تا روی هم نیفتند
    const nid = makeOverlay({ id: newId(), n: c.n, p: c.p.map(q => q.slice()), c: c.c, w: c.w, s: c.s, x: JSON.parse(JSON.stringify(c.x)) }, false);
    commit(); if (nid) selectId(nid); return true;
  }
  // ── جابه‌جاییِ شکلِ انتخاب‌شده با کلیدهای جهت (v26.47، مثلِ TradingView) ──
  // ←/→ = یک کندل، ↑/↓ = یک واحدِ قیمت (۱۰^-دقت)؛ Shift ده برابر. همه‌ی نقطه‌ها با هم (لانگ/شورت: ورود، هدف و حد ضرر با هم).
  // یک رشته فشار (یا نگه‌داشتنِ کلید) = یک قدمِ «برگرداندن» (Ctrl+Z)، نه صدها قدم.
  function idxOfTs(t, list) {
    const n = list.length - 1, step = tfMs();
    if (t >= list[n].timestamp) return n + (t - list[n].timestamp) / step;
    if (t <= list[0].timestamp) return (t - list[0].timestamp) / step;
    let lo = 0, hi = n;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (list[mid].timestamp <= t) lo = mid; else hi = mid; }
    return t === list[lo].timestamp ? lo : lo + (t - list[lo].timestamp) / Math.max(1, list[hi].timestamp - list[lo].timestamp);
  }
  function tsOfIdx(i, list) {
    const n = list.length - 1, step = tfMs();
    if (Number.isInteger(i) && i >= 0 && i <= n) return list[i].timestamp;
    if (i > n) return Math.round(list[n].timestamp + (i - n) * step);
    if (i < 0) return Math.round(list[0].timestamp + i * step);
    const lo = Math.floor(i); return Math.round(list[lo].timestamp + (i - lo) * (list[lo + 1].timestamp - list[lo].timestamp));
  }
  function nudge(dBars, dTicks) {
    const id = S.selected, m = S.recs.get(id), o = id && S.chart?.getOverlayById(id);
    if (!m || !o || readOnly() || S.drawingId || !o.points?.length) return false;
    if (lockOf(m)) return 'locked';
    const list = S.chart.getDataList?.() || S.data; if (!list?.length) return false;
    const tick = Math.pow(10, -prec());
    const pts = o.points.map(pt => {
      const t = tsOfPoint(pt); if (!isNum(t) || !isNum(pt.value)) return pt;
      const i = idxOfTs(t, list) + dBars;
      return { timestamp: dBars ? tsOfIdx(i, list) : t, dataIndex: Number.isInteger(i) ? i : Math.round(i), value: dTicks ? +(pt.value + dTicks * tick).toPrecision(12) : pt.value };
    });
    setPoints(id, pts);
    const now = Date.now(), first = !(S.nudge && S.nudge.id === id && now - S.nudge.t < 800);
    S.nudge = { id, t: now };
    commit({ history: first });
    return true;
  }
  function onNudgeKey(ev) {
    const dir = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] }[ev.key];
    if (!dir || ev.ctrlKey || ev.metaKey || ev.altKey || !S.selected || S.drawingId) return;
    if (!$('screen-chart')?.classList.contains('active') || /INPUT|TEXTAREA|SELECT/.test(ev.target?.tagName || '') || ev.target?.isContentEditable) return;
    if (!$('ch-modal')?.hidden || S.fly || S.pop || !$('ch-ctx')?.hidden) return;
    const k = ev.shiftKey ? 10 : 1, r = nudge(dir[0] * k, dir[1] * k);
    if (!r) return;
    ev.preventDefault(); ev.stopPropagation();   // نه اسکرولِ صفحه، نه جابه‌جاییِ نمودار (Shift+←/→ کتابخانه)، نه واچ‌لیست
    if (r === 'locked' && !ev.repeat) showToast(tr('این شکل قفل است — اول قفل را باز کن', 'This drawing is locked — unlock it first'));
  }
  // ── تنظیماتِ نمودار (مثلِ Settings در TradingView): رنگِ شمع‌ها، خطِ وضعیت، خطِ قیمت، سقف/کف، شبکه، مقیاس، تم ──
  function openChartSettings() {
    const box = $('ch-modal'); if (!box || !S.chart) return;
    closePop(); closeCtx(); closeFly(); $('ch-indm').hidden = true;
    const snap = { cs: JSON.parse(JSON.stringify(S.cs || {})), ys: S.ys || null, theme: S.theme || 'dark' };
    const cs = JSON.parse(JSON.stringify(S.cs || {}));
    let palFor = null;
    const live = () => { S.cs = JSON.parse(JSON.stringify(cs)); S.chart.setStyles(stylesFor()); };
    const swc = key => (key === 'up' ? cs.up : cs.down) || (key === 'up' ? TH().up : TH().down);
    const ck = (key, lab) => `<div class="chs-r chs-rc"><label class="chs-ck"><input type="checkbox" data-cs="${key}"${cs[key] !== false ? ' checked' : ''}><span>${lab}</span></label></div>`;
    const seg = (key, vals, now) => `<div class="chs-seg" role="group" data-seg="${key}">${vals.map(([v, t]) => `<button type="button" data-v="${v}" class="${v === now ? 'on' : ''}" aria-pressed="${v === now}">${t}</button>`).join('')}</div>`;
    const render = () => {
      box.innerHTML = `<div class="ch-mcard ch-set chs" role="dialog" aria-label="${tr('تنظیماتِ نمودار', 'Chart settings')}"><div class="chs-top"><b>${tr('تنظیماتِ نمودار', 'Chart settings')}</b><button type="button" class="chs-x" id="chs-x" aria-label="${tr('بستن', 'Close')}">${ICON.close}</button></div>`
        + `<div class="chs-body"><div class="chs-p">`
        + `<div class="chs-h">${tr('شمع‌ها', 'Candles')}</div>`
        + `<div class="chs-r"><span class="chs-l">${tr('رنگِ صعودی', 'Up color')}</span><button type="button" class="chs-sw" data-csw="up" style="--c:${swc('up')}" aria-label="${tr('رنگِ صعودی', 'Up color')}"></button></div>`
        + `<div class="chs-r"><span class="chs-l">${tr('رنگِ نزولی', 'Down color')}</span><button type="button" class="chs-sw" data-csw="down" style="--c:${swc('down')}" aria-label="${tr('رنگِ نزولی', 'Down color')}"></button></div>`
        + `<div class="chs-r"><span class="chs-l">${tr('نوعِ نمودار', 'Chart type')}</span><select class="fi chs-in" data-ct>${CT.map(c => `<option value="${c}"${(S.ct || 'candle') === c ? ' selected' : ''}>${ctName(c)}</option>`).join('')}</select></div>`
        + `<div class="chs-h">${tr('نمایش', 'Appearance')}</div>`
        + ck('legend', tr('خطِ وضعیت (OHLC و مقدارِ اندیکاتورها)', 'Status line (OHLC and indicator values)'))
        + ck('last', tr('خط و برچسبِ قیمتِ آخر', 'Last price line and label'))
        + ck('hl', tr('برچسبِ بالاترین و پایین‌ترین قیمتِ صفحه', 'High and low price labels'))
        + ck('grid', tr('خطوطِ شبکه', 'Grid lines'))
        + `<div class="chs-r"><span class="chs-l">${tr('تم', 'Theme')}</span>${seg('theme', [['dark', tr('تیره', 'Dark')], ['light', tr('روشن', 'Light')]], S.theme === 'light' ? 'light' : 'dark')}</div>`
        + `<div class="chs-h">${tr('مقیاسِ قیمت', 'Price scale')}</div>`
        + `<div class="chs-r"><span class="chs-l">${tr('نوعِ مقیاس', 'Scale type')}</span>${seg('ys', [['n', tr('عادی', 'Regular')], ['pct', tr('درصدی', 'Percent')], ['log', tr('لگاریتمی', 'Logarithmic')]], S.ys || 'n')}</div>`
        + `</div><div class="chs-pal" id="chs-pal" hidden></div></div>`
        + `<div class="chs-foot"><button type="button" class="btn btn-ghost chs-tb" id="chs-def" style="margin-inline-end:auto">${tr('بازگشت به پیش‌فرض', 'Reset to default')}</button>`
        + `<button type="button" class="btn btn-ghost" id="ch-sno">${tr('انصراف', 'Cancel')}</button><button type="button" class="btn btn-primary" id="ch-sok">${tr('ثبت', 'Ok')}</button></div></div>`;
      box.hidden = false;
    };
    const close = ok => {
      if (ok) {
        const clean = {}; for (const [k, v] of Object.entries(S.cs || {})) if (v === false || /^#[0-9A-Fa-f]{6}$/.test(String(v))) clean[k] = v;
        S.cs = clean; if (S.store) { if (Object.keys(clean).length) S.store.prefs.cs = clean; else delete S.store.prefs.cs; if (!readOnly()) scheduleSave(); }
      } else {
        S.cs = snap.cs; if (S.ys !== snap.ys) { S.ys = snap.ys; if (S.store) { if (snap.ys) S.store.prefs.ys = snap.ys; else delete S.store.prefs.ys; } }
        if ((S.theme || 'dark') !== snap.theme) setTheme(snap.theme);
        S.chart.setStyles(stylesFor()); paintBar();
      }
      box.hidden = true; box.innerHTML = ''; box.onclick = box.onchange = box.onkeydown = null;
    };
    render();
    box.onclick = ev => {
      const t = ev.target;
      if (t === box) { close(false); return; }
      const sw = t.closest('[data-csw]');
      if (sw) {
        const pal = $('chs-pal'), body = box.querySelector('.chs-body');
        if (palFor === sw.dataset.csw && !pal.hidden) { pal.hidden = true; palFor = null; return; }
        palFor = sw.dataset.csw;
        pal.innerHTML = `<div class="ch-pal">${PALETTE.concat([TH().up, TH().down]).filter((c, i, a) => a.indexOf(c) === i).map(c => `<button type="button" class="ch-dot" style="--c:${c}" data-pc="${c}" aria-label="${tr('رنگ', 'Color')} ${c}"></button>`).join('')}</div>`
          + `<button type="button" class="ch-popi" data-pc=""><i></i><span><b>${tr('رنگِ پیش‌فرض', 'Default color')}</b></span></button>`;
        pal.hidden = false;
        const br = body.getBoundingClientRect(), er = sw.getBoundingClientRect();
        pal.style.top = (er.bottom - br.top + body.scrollTop + 4) + 'px'; pal.style.left = clamp(er.left - br.left, 4, Math.max(4, br.width - pal.offsetWidth - 4)) + 'px';
        return;
      }
      const pc = t.closest('[data-pc]');
      if (pc && palFor) { if (pc.dataset.pc) cs[palFor] = pc.dataset.pc; else delete cs[palFor]; box.querySelector(`[data-csw="${palFor}"]`)?.style.setProperty('--c', swc(palFor)); $('chs-pal').hidden = true; palFor = null; live(); return; }
      if (!t.closest('#chs-pal')) { const p = $('chs-pal'); if (p) p.hidden = true; palFor = null; }
      const sg = t.closest('.chs-seg button');
      if (sg) {
        const key = sg.parentElement.dataset.seg, v = sg.dataset.v;
        sg.parentElement.querySelectorAll('button').forEach(b => { const on = b === sg; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
        if (key === 'theme') setTheme(v);
        else if (key === 'ys') { S.ys = v === 'n' ? null : v; if (S.store) { if (S.ys) S.store.prefs.ys = S.ys; else delete S.store.prefs.ys; } S.chart.setStyles(stylesFor()); paintBar(); }
        return;
      }
      if (t.id === 'chs-def') { for (const k of Object.keys(cs)) delete cs[k]; live(); render(); return; }
      if (t.id === 'ch-sok') { close(true); return; }
      if (t.id === 'ch-sno' || t.closest('#chs-x')) { close(false); return; }
    };
    box.onchange = ev => {
      const t = ev.target;
      if (t.dataset.cs) { if (t.checked) delete cs[t.dataset.cs]; else cs[t.dataset.cs] = false; live(); return; }
      if (t.dataset.ct != null) { setChartType(t.value); return; }
    };
    box.onkeydown = ev => { if (ev.key === 'Escape') { ev.stopPropagation(); close(false); } };
  }
  function paintBar() {
    const tl = $('ch-tfl'); if (tl) tl.textContent = tfOf(S.tf).l;
    const set = (id, t, extra) => { const b = $(id); if (!b) return; b.title = t; b.setAttribute('aria-label', t); if (extra) extra(b); };
    set('ch-tfb', tr('تایم‌فریم: ', 'Time interval: ') + tfName(tfOf(S.tf)));
    set('ch-ctb', tr('نوعِ نمودار: ', 'Chart type: ') + ctName(S.ct || 'candle'), b => { b.innerHTML = CT_IC[S.ct || 'candle']; });
    set('ch-cset', tr('تنظیماتِ نمودار', 'Chart settings'));
    set('ch-shot', tr('عکس از نمودار', 'Take a snapshot'));
    set('ch-wlb', tr('واچ‌لیست', 'Watchlist'), b => { const on = wlOpen(); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    set('ch-rt', tr('بازگشت به آخرین کندل (Alt+R)', 'Scroll to the most recent bar (Alt+R)'));
    set('ch-log', tr('مقیاسِ لگاریتمی', 'Log scale'), b => { const on = S.ys === 'log'; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    set('ch-pct', tr('مقیاسِ درصدی', 'Percent scale'), b => { const on = S.ys === 'pct'; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  }
  // ── واچ‌لیست (مثلِ TradingView): چند فهرستِ نام‌دار، قیمت و تغییرِ ۲۴ساعته‌ی زنده، کلیک = همان نماد روی نمودار،
  //    افزودن/حذف/جابه‌جایی با کشیدن/مرتب‌سازیِ ستون‌ها، ↑↓ برای نمادِ قبلی/بعدی. همه در prefs.wl (روی همه‌ی دستگاه‌ها).
  const WL_MAX_LISTS = 10, WL_MAX_ITEMS = 100;
  function wlData() {
    const fresh = () => ({ lists: [{ id: 'w1', name: '', items: POPULAR.slice() }], cur: 'w1' });
    const p = S.store?.prefs; if (!p) return fresh();
    if (!p.wl || !Array.isArray(p.wl.lists) || !p.wl.lists.length) p.wl = fresh();
    return p.wl;
  }
  const wlCur = () => { const w = wlData(); return w.lists.find(l => l.id === w.cur) || w.lists[0]; };
  const wlName = l => l.name || tr('واچ‌لیست', 'Watchlist');
  function wlItems(l = wlCur()) {
    const it = (l.items || []).slice(), so = l.sort; if (!so) return it;
    const k = so.replace('-', ''), dir = so[0] === '-' ? -1 : 1, val = c => k === 'sym' ? c : k === 'p' ? S.q?.[c]?.p : S.q?.[c]?.c;
    return it.sort((a, b) => { const x = val(a), y = val(b); if (x == null && y == null) return 0; if (x == null) return 1; if (y == null) return -1; return (k === 'sym' ? String(x).localeCompare(String(y)) : x - y) * dir; });
  }
  const wlSave = () => { if (!readOnly()) scheduleSave(); };
  const wlOpen = () => !!$('ch-wl') && !$('ch-wl').hidden;
  const wide = () => window.matchMedia('(min-width: 900px)').matches;
  function toggleWL(on) {
    const p = $('ch-wl'); if (!p) return;
    on = on === undefined ? p.hidden : !!on;
    p.hidden = !on; S.wlEdit = false; S.wlMenu = false; S.wlRename = null;
    if (!on) p.innerHTML = '';   // بسته = خالی (با تعویضِ زبان، متنِ کهنه پنهان نماند)
    if (S.store && wide()) { if (on) S.store.prefs.wlo = true; else delete S.store.prefs.wlo; wlSave(); }
    const b = $('ch-wlb'); if (b) { b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); }
    if (on) { paintWL(); wlPoll(); }
    requestAnimationFrame(() => S.chart?.resize());
  }
  const fmtQ = p => isNum(p) ? fmtP(p) : '—';
  const fmtC = c => isNum(c) ? (c > 0 ? '+' : c < 0 ? '−' : '') + Math.abs(c).toFixed(2) + '%' : '—';
  const chgCls = c => isNum(c) ? (c > 0 ? 'up' : c < 0 ? 'down' : '') : '';
  function paintWL() {
    const p = $('ch-wl'); if (!p || p.hidden || S.wlDrag) return;
    const w = wlData(), l = wlCur(), ro = readOnly(), items = wlItems(l), so = l.sort || '';
    const arrow = k => so === k ? ' ▲' : so === '-' + k ? ' ▼' : '';
    const row = c => {
      const q = S.q?.[c], on = c === S.coin;
      return `<div class="ch-wlr${on ? ' on' : ''}" role="listitem" data-c="${esc(c)}" aria-current="${on}">`
        + (ro || so ? '' : `<span class="ch-wlg" data-drag="${esc(c)}" title="${tr('برای جابه‌جایی بکش', 'Drag to reorder')}">${ICON.grip}</span>`)
        + `<span class="ch-wls">${typeof coinLogo === 'function' ? coinLogo(c) : ''}<b dir="ltr">${esc(c)}</b></span>`
        + `<span class="ch-wlp" dir="ltr">${fmtQ(q?.p)}</span><span class="ch-wlch ${chgCls(q?.c)}" dir="ltr">${fmtC(q?.c)}</span>`
        + (ro ? '<span></span>' : `<button type="button" class="ch-wlrm" data-rm="${esc(c)}" title="${tr('حذف از لیست', 'Remove from watchlist')}" aria-label="${tr('حذفِ ', 'Remove ') + esc(c)}">${ICON.close}</button>`) + '</div>';
    };
    const menu = !S.wlMenu ? '' : `<div class="ch-wlm" role="menu">${w.lists.map(x => `<button type="button" role="menuitemradio" aria-checked="${x.id === l.id}" class="ch-popi${x.id === l.id ? ' on' : ''}" data-wl="${x.id}"><i></i><span><b${x.name ? ' class="ch-utext"' : ''}>${esc(wlName(x))}</b></span><small dir="ltr">${num((x.items || []).length)}</small></button>`).join('')}`
      + (ro ? '' : `<hr><button type="button" class="ch-wlmi" data-wa="new">${tr('+ لیستِ تازه', '+ Create new list')}</button><button type="button" class="ch-wlmi" data-wa="rename">${tr('تغییرِ نامِ این لیست', 'Rename this list')}</button>`
        + (w.lists.length > 1 ? `<button type="button" class="ch-wlmi del" data-wa="del">${tr('حذفِ این لیست', 'Delete this list')}</button>` : '')) + '</div>';
    const ren = !S.wlRename ? '' : `<div class="ch-wlin"><input class="fi" id="ch-wlname" maxlength="30" dir="auto" value="${esc(S.wlRename.mode === 'rename' ? l.name || '' : '')}" placeholder="${tr('نامِ لیست', 'List name')}" aria-label="${tr('نامِ لیست', 'List name')}">`
      + `<button type="button" class="btn btn-primary" data-wa="nameok">${tr('ثبت', 'Ok')}</button><button type="button" class="ch-wlbtn" data-wa="namecancel" aria-label="${tr('انصراف', 'Cancel')}">${ICON.close}</button></div>`;
    p.classList.toggle('edit', !!S.wlEdit);
    p.innerHTML = `<div class="ch-wlh"><button type="button" class="ch-wlsel" data-wa="menu" aria-haspopup="true" aria-expanded="${!!S.wlMenu}" title="${tr('لیست‌های من', 'My watchlists')}"><b${l.name ? ' class="ch-utext"' : ''}>${esc(wlName(l))}</b><small dir="ltr">${num(items.length)}</small>${ICON.chev}</button>`
      + (ro ? '' : `<button type="button" class="ch-wlbtn" data-wa="add" title="${tr('افزودنِ نماد', 'Add symbol')}" aria-label="${tr('افزودنِ نماد', 'Add symbol')}">${ICON.plus}</button>`
        + `<button type="button" class="ch-wlbtn${S.wlEdit ? ' on' : ''}" data-wa="edit" aria-pressed="${!!S.wlEdit}" title="${tr('ویرایشِ لیست (حذف و جابه‌جایی)', 'Edit list (remove and reorder)')}" aria-label="${tr('ویرایشِ لیست', 'Edit list')}">${ICON.pen}</button>`)
      + `<button type="button" class="ch-wlbtn" data-wa="close" title="${tr('بستنِ واچ‌لیست', 'Close watchlist')}" aria-label="${tr('بستنِ واچ‌لیست', 'Close watchlist')}">${ICON.close}</button></div>`
      + menu + ren
      + `<div class="ch-wlcols" role="row"><button type="button" data-sort="sym">${tr('نماد', 'Symbol')}${arrow('sym')}</button><button type="button" data-sort="p">${tr('آخرین', 'Last')}${arrow('p')}</button><button type="button" data-sort="c">${tr('تغییر٪', 'Chg%')}${arrow('c')}</button><span></span></div>`
      + `<div class="ch-wll" role="list" aria-label="${tr('واچ‌لیست', 'Watchlist')}">${items.length ? items.map(row).join('') : `<div class="ch-pempty">${tr('این لیست خالی است — با «+» نماد اضافه کن.', 'This list is empty — add symbols with «+».')}</div>`}</div>`
      + `<div class="ch-wlf">${tr('قیمت‌ها از ', 'Prices from ') + srcName()}</div>`;
    if (S.wlRename) setTimeout(() => $('ch-wlname')?.focus(), 30);
  }
  // فقط عددها (بی بازسازیِ فهرست تا اسکرول و کشیدن نپرد) + چشمکِ سبز/قرمز مثلِ TradingView
  function updQuotes(prev) {
    const p = $('ch-wl'); if (!p || p.hidden || S.wlDrag) return;
    // مرتب بر اساسِ قیمت/تغییر: فقط ردیف‌ها جابه‌جا شوند، نه کلِ پنل (وگرنه کلیکی که همان لحظه در جریان است گم می‌شد)
    const so = wlCur().sort || '', list = p.querySelector('.ch-wll');
    if (so && so.replace('-', '') !== 'sym' && list) {
      const want = wlItems(), rows = new Map([...list.querySelectorAll('.ch-wlr')].map(r => [r.dataset.c, r]));
      if (want.join() !== [...rows.keys()].join()) for (const c of want) { const r = rows.get(c); if (r) list.appendChild(r); }
    }
    p.querySelectorAll('.ch-wlr').forEach(r => {
      const c = r.dataset.c, q = S.q?.[c], pe = r.querySelector('.ch-wlp'), ce = r.querySelector('.ch-wlch'), old = prev?.[c]?.p;
      pe.textContent = fmtQ(q?.p); ce.textContent = fmtC(q?.c); ce.className = 'ch-wlch ' + chgCls(q?.c);
      if (isNum(old) && isNum(q?.p) && q.p !== old) { pe.classList.remove('fu', 'fd'); void pe.offsetWidth; pe.classList.add(q.p > old ? 'fu' : 'fd'); }
    });
  }
  let wlBusy = false;
  async function wlPoll() {
    if (!wlOpen() || wlBusy || document.hidden || !$('screen-chart')?.classList.contains('active')) return;
    const items = (wlCur().items || []).slice(0, WL_MAX_ITEMS); if (!items.length) return;
    wlBusy = true; const src = S.src;
    try {
      const chunks = []; for (let i = 0; i < items.length; i += 40) chunks.push(items.slice(i, i + 40));
      const res = await Promise.all(chunks.map(ch => apiFetch('/api/chart/quotes?src=' + src + '&coins=' + encodeURIComponent(ch.join(',')), {}, { retries: 0 })
        .then(r => r && r.ok ? r.json() : null).catch(() => null)));
      if (src !== S.src) return;
      const prev = S.qSrc === src ? (S.q || {}) : {}, next = { ...prev };
      for (const d of res) if (d?.quotes) Object.assign(next, d.quotes);
      S.q = next; S.qSrc = src; updQuotes(prev);
    } finally { wlBusy = false; }
  }
  function wlToggleItem(c, addOnly) {
    c = String(c || '').toUpperCase(); if (!/^[A-Z0-9]{1,15}$/.test(c) || readOnly()) return;
    const l = wlCur(); l.items = Array.isArray(l.items) ? l.items : [];
    if (l.items.includes(c)) { if (addOnly) return; l.items = l.items.filter(x => x !== c); }
    else { if (l.items.length >= WL_MAX_ITEMS) { showToast(tr(`حداکثر ${fa(WL_MAX_ITEMS)} نماد در هر لیست`, `Up to ${WL_MAX_ITEMS} symbols per list`)); return; } l.items.push(c); }
    wlSave(); paintWL(); wlPoll();
  }
  function wlCycleSort(k) {
    const l = wlCur(), s = l.sort || '', first = k === 'sym' ? k : '-' + k, second = k === 'sym' ? '-' + k : k;
    l.sort = s === first ? second : s === second ? '' : first; if (!l.sort) delete l.sort;
    wlSave(); paintWL();
  }
  function wlStep(d) {
    const items = wlItems(); if (!items.length) return;
    const i = items.indexOf(S.coin), n = items.length;
    setCoin(items[i < 0 ? 0 : (i + d + n) % n]);
  }
  async function wlDeleteList() {
    const w = wlData(), l = wlCur(); if (w.lists.length < 2) return;
    const q = EN() ? `⁦Delete the list «${wlName(l)}»?⁩` : `لیستِ «${wlName(l)}» حذف شود؟`;
    if (!await uiConfirm(q, EN() ? { ok: 'Delete', cancel: 'Cancel' } : undefined)) return;
    w.lists = w.lists.filter(x => x.id !== l.id); w.cur = w.lists[0].id; S.wlMenu = false;
    wlSave(); paintWL(); wlPoll();
  }
  function wlSaveName() {
    const w = wlData(), v = String($('ch-wlname')?.value || '').trim().slice(0, 30), mode = S.wlRename?.mode;
    if (mode === 'new') {
      if (w.lists.length >= WL_MAX_LISTS) { showToast(tr(`حداکثر ${fa(WL_MAX_LISTS)} لیست`, `Up to ${WL_MAX_LISTS} lists`)); return; }
      const id = 'w' + Date.now().toString(36); w.lists.push({ id, name: v || tr('لیستِ تازه', 'New list'), items: [] }); w.cur = id;
    } else if (mode === 'rename') wlCur().name = v;
    S.wlRename = null; wlSave(); paintWL(); wlPoll();
  }
  function wlClick(ev) {
    const t = ev.target, a = t.closest('[data-wa]')?.dataset.wa;
    if (a === 'close') { toggleWL(false); return; }
    if (a === 'menu') { S.wlMenu = !S.wlMenu; S.wlRename = null; paintWL(); return; }
    if (a === 'add') { wlPickAdd(); return; }
    if (a === 'edit') { S.wlEdit = !S.wlEdit; paintWL(); return; }
    if (a === 'new' || a === 'rename') { S.wlRename = { mode: a }; S.wlMenu = false; paintWL(); return; }
    if (a === 'del') { wlDeleteList(); return; }
    if (a === 'nameok') { wlSaveName(); return; }
    if (a === 'namecancel') { S.wlRename = null; paintWL(); return; }
    const lid = t.closest('[data-wl]')?.dataset.wl;
    if (lid) { wlData().cur = lid; S.wlMenu = false; wlSave(); paintWL(); wlPoll(); return; }
    const so = t.closest('[data-sort]')?.dataset.sort; if (so) { wlCycleSort(so); return; }
    const rm = t.closest('[data-rm]')?.dataset.rm; if (rm) { wlToggleItem(rm); return; }
    if (t.closest('[data-drag]')) return;
    const c = t.closest('.ch-wlr')?.dataset.c;
    if (c) { if (c !== S.coin) setCoin(c); if (!wide()) toggleWL(false); else paintWL(); }
  }
  // جابه‌جاییِ ردیف با کشیدنِ دستگیره (موس و انگشت)
  function wlPointerDown(ev) {
    const h = ev.target.closest('[data-drag]'); if (!h || readOnly() || wlCur().sort) return;
    ev.preventDefault();
    const row = h.closest('.ch-wlr'), list = row.parentElement;
    // روی سند گوش می‌دهیم، نه خودِ دستگیره: جابه‌جا کردنِ ردیف در DOM اتصالِ اشاره‌گر (pointer capture) را قطع می‌کند
    S.wlDrag = true; row.classList.add('drag');
    const move = e => {
      let before = null;
      for (const r of list.querySelectorAll('.ch-wlr')) { if (r === row) continue; const b = r.getBoundingClientRect(); if (e.clientY < b.top + b.height / 2) { before = r; break; } }
      if (before) { if (row.nextSibling !== before) list.insertBefore(row, before); } else if (list.lastElementChild !== row) list.appendChild(row);
    };
    const up = () => {
      document.removeEventListener('pointermove', move); document.removeEventListener('pointerup', up); document.removeEventListener('pointercancel', up);
      row.classList.remove('drag'); S.wlDrag = false;
      const order = [...list.querySelectorAll('.ch-wlr')].map(r => r.dataset.c), l = wlCur();
      if (JSON.stringify(order) !== JSON.stringify(l.items)) { l.items = order; wlSave(); }
      paintWL();
    };
    document.addEventListener('pointermove', move); document.addEventListener('pointerup', up); document.addEventListener('pointercancel', up);
  }
  // افزودن: همان برگه‌ی انتخابِ نماد، با تیک برای نمادهای داخلِ لیست؛ چند نماد پشتِ هم، بعد «تمام»
  async function wlPickAdd() {
    const l = wlCur(), has = c => (l.items || []).includes(c);
    const chip = c => `<button type="button" class="ch-pchip${has(c) ? ' on' : ''}" data-wadd="${esc(c)}" aria-pressed="${has(c)}">${typeof coinLogo === 'function' ? coinLogo(c) : ''}<span dir="ltr">${esc(c)}</span><i aria-hidden="true">${has(c) ? '✓' : '+'}</i></button>`;
    $('det-content').innerHTML = `<div class="ch-pick" dir="${dirOf()}"><h3>${tr('افزودن به ', 'Add to ') + esc(wlName(l))}</h3>
      <input id="ch-wsearch" class="fi" dir="ltr" placeholder="${tr('جست‌وجو: BTC، ETH، SOL…', 'Search: BTC, ETH, SOL…')}" autocomplete="off" autocapitalize="characters">
      <div class="ch-plab">${tr('پرطرفدار', 'Popular')}</div><div class="ch-pchips" id="ch-wpop"></div>
      <div class="ch-plab">${tr('همه‌ی نمادهای ', 'All symbols on ') + srcName()}</div><div class="ch-plist ch-pchips" id="ch-wall"><div class="ch-pempty">${tr('در حالِ بارگذاری…', 'Loading…')}</div></div>
      <button type="button" class="btn btn-primary ch-wdone" id="ch-wdone">${tr('تمام', 'Done')}</button></div>`;
    document.getElementById('det-sheet').classList.add('open');
    const box = $('det-content').querySelector('.ch-pick'), input = $('ch-wsearch');
    let all = [];
    const norm = () => String(input.value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    const draw = () => {
      const q = norm(); let items = all.filter(s => !q || s.includes(q)).slice(0, 120);
      if (q && !items.includes(q) && /^[A-Z0-9]{1,15}$/.test(q)) items = [q, ...items];
      $('ch-wpop').innerHTML = POPULAR.map(chip).join('');
      $('ch-wall').innerHTML = items.length ? items.map(chip).join('') : `<div class="ch-pempty">${tr('نمادی پیدا نشد', 'No symbols found')}</div>`;
    };
    box.onclick = ev => { const b = ev.target.closest('[data-wadd]'); if (b) { wlToggleItem(b.dataset.wadd); draw(); return; } if (ev.target.id === 'ch-wdone' && typeof closeSheet === 'function') closeSheet(); };
    input.oninput = draw;
    input.onkeydown = ev => { if (ev.key === 'Enter') { const q = norm(); if (q) { wlToggleItem(q, true); input.value = ''; draw(); } } };
    draw();
    all = await symbolsOf(S.src); if ($('ch-wall')) draw();
  }
  // ── تمِ تیره/روشن ──
  function setTheme(t) {
    t = t === undefined ? (S.theme === 'light' ? 'dark' : 'light') : (t === 'light' ? 'light' : 'dark');
    if (t === S.theme) { paintTheme(); return; }
    S.theme = t;
    if (S.store) { S.store.prefs.theme = t; if (!readOnly()) scheduleSave(); }
    const w = S.root?.querySelector('.ch-wrap'); if (w) w.dataset.theme = t;
    closePop(); closeCtx();
    S.chart?.setStyles(stylesFor());
    for (const id of S.recs.keys()) refresh(id);
    paintTheme();
  }
  function paintTheme() {
    const b = $('ch-thm'); if (!b) return;
    const light = S.theme === 'light', t = light ? tr('تمِ تیره', 'Dark theme') : tr('تمِ روشن', 'Light theme');
    b.title = t; b.setAttribute('aria-label', t); b.setAttribute('aria-pressed', light); b.innerHTML = light ? ICON.moon : ICON.sun;
  }
  // ── تمام‌صفحه ──
  function setMax(on) {
    on = on === undefined ? !S.max : !!on;
    if (on === S.max) return;
    S.max = on;
    const d = document, root = d.documentElement;
    root.classList.toggle('ch-max', on);
    closeFly(); closePop(); closeCtx(); paintMax();
    if (on) {
      // نوارهای مرورگر هم کنار بروند (دسکتاپ و اندروید)؛ آیفون این را ندارد و همان پوششِ CSS کافی است
      if (!d.fullscreenElement && root.requestFullscreen) {
        try {
          root.requestFullscreen({ navigationUI: 'hide' }).then(() => {
            if (!S.max) { if (d.fullscreenElement) d.exitFullscreen?.().catch(() => {}); return; }
            try { screen.orientation?.lock?.('any')?.catch?.(() => {}); } catch (_) {}   // اپِ نصب‌شده عمودی قفل است؛ تمام‌صفحه = چرخشِ آزاد
          }).catch(() => {});
        } catch (_) {}
      }
    } else if (d.fullscreenElement && d.exitFullscreen) d.exitFullscreen().catch(() => {});
    requestAnimationFrame(() => S.chart?.resize());
  }
  function paintMax() {
    const b = $('ch-full'); if (!b) return;
    const t = S.max ? tr('خروج از تمام‌صفحه', 'Exit fullscreen mode') : tr('تمام‌صفحه', 'Fullscreen mode');
    const k = S.touch ? '' : ' (Shift+F)';
    b.title = t + k; b.setAttribute('aria-label', t); b.setAttribute('aria-pressed', S.max);
    b.classList.toggle('on', S.max); b.innerHTML = S.max ? ICON.unfull : ICON.full;
  }
  // تعویضِ زبان: همه‌ی متن‌ها و جهتِ پنل‌ها همان لحظه، بی بارگذاریِ دوباره‌ی نمودار
  function setLang(l) {
    l = l === 'en' ? 'en' : 'fa'; if (l === S.lang && S.store?.prefs?.lang === l) { paintLang(); return; }
    S.lang = l;
    if (S.store) { S.store.prefs.lang = l; if (!readOnly()) scheduleSave(); }
    closeFly(); closePop(); closeCtx();
    paintLang();
  }
  function paintLang() {
    const d = dirOf(), w = S.root?.querySelector('.ch-wrap'); if (w) w.setAttribute('dir', d);
    for (const id of ['ch-hint', 'ch-sel', 'ch-fly', 'ch-pop', 'ch-ctx', 'ch-tree', 'ch-indm', 'ch-modal', 'ch-wl']) $(id)?.setAttribute('dir', d);
    const al = (id, v) => $(id)?.setAttribute('aria-label', v);
    al('ch-coinb', tr('انتخابِ نماد و منبع', 'Symbol search')); al('ch-srcs', tr('منبعِ داده', 'Data source')); al('ch-tfs', tr('تایم‌فریم', 'Time interval'));
    al('ch-tools', tr('ابزارهای رسم', 'Drawing tools')); al('ch-lang', tr('زبانِ نمودار', 'Chart language'));
    const il = $('ch-indl'); if (il) il.textContent = tr('اندیکاتور', 'Indicators');
    document.querySelectorAll('#ch-lang button').forEach(b => { const on = b.dataset.l === S.lang; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    paintTools(); paintSel(); paintTree(); paintInd(); paintHead(); paintMax(); paintTheme(); paintAuto(); paintBar(); paintWL();
    if (S.saveState || readOnly()) status(S.saveState);
    if (S.hintArgs) hint(...S.hintArgs);
  }
  function show() { if (S.chart) { S.chart.resize(); if (S.data.length) startPoll(); else loadSeries(); } }
  function hide() { stopPoll(); if (S.max) setMax(false); }

  window.SCCHART = {
    mount, show, hideScreen: hide,
    tool: startTool, gclick, fly: openFly, closeFly, magBtn, magMenu, setMag: setMagnet, magnet: () => setMagnet(), stay: toggleStay, lockAll: toggleLockAll,
    undo, redo, hide: toggleHidden, clear: clearAll, tree: toggleTree,
    removeSelected: () => S.selected && removeId(S.selected), color: setColor, width: setWidth, lstyle: setLineStyle,
    colorMenu, widthMenu, styleMenu, settings: () => openSettings(), lock: () => toggleLock(), clone: () => cloneSel(), editText: () => editText(), ctx: ctxAction,
    pickObj: id => { selectId(id); paintTree(); }, objHide: id => { toggleHideOne(id); paintTree(); }, objLock: id => { toggleLock(id); paintTree(); }, objDel: id => { removeId(id); paintTree(); },
    src: setSrc, tf: setTf, coin: setCoin, pick, lang: setLang, watchlist: on => toggleWL(on), _wlPoll: wlPoll, theme: t => setTheme(t), auto: setAuto, _auto: isAuto, max: on => setMax(on), maxExit: () => setMax(false), isMax: () => S.max,
    indMenu: () => { const m = $('ch-indm'); if (!m) return; m.hidden = !m.hidden; paintInd(); },
    ind: toggleIndicator, indSet: openIndSettings, indFind: q => { S.indQ = String(q || '').slice(0, 40); paintInd(true); },
    tfMenu, ctMenu, chartType: setChartType, scale: setScale, realtime: toRealtime, snapshot, chartSettings: openChartSettings, closePop,
    _copy: copySel, _paste: pasteClip, _updRT: updRT,
    // برای تست
    _s: S, _T: T, _merge: merge, _migrate: migrate, _precisionOf: precisionOf, _select: selectId, _magnetize: magnetize, _rdp: rdp,
    // نقطه‌ای روی خودِ شکل که کلیک/کشیدن را می‌گیرد (از شکل‌های آخرین رسم؛ S.debug باید روشن باشد)
    _hitPoint: id => {
      const f = S.lastFigs.get(id) || [], cen = c => ({ x: c.reduce((s, p) => s + p.x, 0) / c.length, y: c.reduce((s, p) => s + p.y, 0) / c.length });
      const line = f.find(g => g.type === 'scHit' && !g.attrs.area && g.attrs.coordinates.length >= 2);
      if (line) { const [a, b] = line.attrs.coordinates; return { x: a.x + (b.x - a.x) * 0.37, y: a.y + (b.y - a.y) * 0.37 }; }
      const area = f.find(g => g.type === 'scHit' && g.attrs.area); if (area) return cen(area.attrs.coordinates);
      const t = f.find(g => g.type === 'scTxt' && !g.ignoreEvent); if (t) { const b = textBox(t.attrs); return { x: b.x + b.w / 2, y: b.y + b.h / 2 }; }
      const e = f.find(g => g.type === 'scEll'); if (e) return { x: e.attrs.x + e.attrs.rx * (e.attrs.area ? 0.5 : 1), y: e.attrs.y };   // مرکزِ دایره دسته‌ی خودش است
      return null;
    },
    _validTools: () => TOOL_LIST.filter(t => !t.special && !t.transient).map(t => t.id), _legacyTools: () => Object.keys(LEGACY),
    _i18n: () => ({ PN_EN, SEC_EN, GROUPS: GROUPS.map(g => ({ id: g.id, fa: g.fa, en: g.en })), OPT, INDICATORS })
  };
})();
