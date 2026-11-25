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
   نقطه‌ی بیرون از کندل‌ها (آینده/پیش از تاریخچه): patchTimeScale زمان را با طولِ تایم‌فریم امتداد می‌دهد.
   از index.html برمی‌دارد: apiFetch, esc, SESSION, L, showToast, uiConfirm, closeSheet, coinLogo, jsArg. */
(function () {
  'use strict';
  const SOURCES = [{ id: 'hl', name: 'Hyperliquid' }, { id: 'sodex', name: 'SoDEX' }, { id: 'bybit', name: 'Bybit' }];
  const TFS = [
    { id: '1m', l: '1m', ms: 6e4, poll: 4000 }, { id: '5m', l: '5m', ms: 3e5, poll: 5000 }, { id: '15m', l: '15m', ms: 9e5, poll: 8000 },
    { id: '1h', l: '1H', ms: 36e5, poll: 10000 }, { id: '4h', l: '4H', ms: 144e5, poll: 15000 }, { id: '1d', l: '1D', ms: 864e5, poll: 30000 }
  ];
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
    debug: false, lastFigs: new Map(), figErr: [], lang: 'fa', saveState: null, hintArgs: null, max: false
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
  function levels(k) {
    const on = Array.isArray(k.x.lv) ? k.x.lv : LV_ON;
    return LV.map((l, i) => ({ l, i, col: k.m.c ? k.col : LV_COL[i] })).filter(o => on.includes(o.i)).sort((a, b) => a.l - b.l);
  }
  function levelFigs(k, out, yAt, valAt, x0, x1, opt = {}) {
    const lv = levels(k);
    if (k.x.f !== false) for (let i = 0; i + 1 < lv.length; i++) out.push(F.poly(rectPts(x0, yAt(lv[i].l), x1, yAt(lv[i + 1].l)), hexA(lv[i + 1].col, 0.12)));
    const outside = x0 > 104;
    for (const o of lv) {
      const y = yAt(o.l);
      out.push(F.line([{ x: x0, y }, { x: x1, y }], o.col, k.w, k.s), F.hit([{ x: x0, y }, { x: x1, y }]));
      if (k.x.lb !== false) out.push(F.txt(outside ? x0 - 6 : x0 + 4, outside ? y : y - 2, opt.noPrice ? String(o.l) : `${o.l} (${fmt(valAt(o.l))})`, { color: o.col, align: outside ? 'right' : 'left', base: outside ? 'middle' : 'bottom', size: 11 }));
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
    if (k.x.text) out.push(F.txt(k.W - 10, a.y - 4, k.x.text, { color: k.col, align: 'right', base: 'bottom', size: 12, family: SANS, weight: 600 }));
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
      if (k.x.f !== false) out.push(F.poly([p, q, q2, p2], hexA(k.col, 0.15)), F.hit([p, q, q2, p2], true));
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
      if (k.x.f !== false) out.push(F.poly([p, q, h1, h0], hexA(k.col, 0.15)), F.hit([p, q, h1, h0], true));
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
    if (k.x.f !== false) out.push(F.poly([up[0], up[1], h1[1], h1[0]], hexA(k.col, 0.1)), F.poly([h1[0], h1[1], h2[1], h2[0]], hexA(k.col, 0.16)),
      F.poly([h2[0], h2[1], dn[1], dn[0]], hexA(k.col, 0.1)), F.hit([up[0], up[1], dn[1], dn[0]], true));
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
    if (k.x.f !== false) out.push(F.poly([up[0], up[1], mid[1], mid[0]], hexA(k.col, 0.12)), F.poly([mid[0], mid[1], dn[1], dn[0]], hexA(C.red, 0.1)));
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
    const out = [F.line([a, b], C.gray, 1, 1)];
    return levelFigs(k, out, L => B.y + (A.y - B.y) * L, L => vB + (vA - vB) * L, x0, x1);
  }
  function fibExtFigs(k) {
    const [a, b, c] = k.c; if (!b) return [];
    const out = [F.line([a, b], C.gray, 1, 1), F.hit([a, b])]; if (!c) return out;
    out.push(F.line([b, c], C.gray, 1, 1), F.hit([b, c]));
    let x0 = c.x, x1 = c.x + Math.max(60, Math.abs(b.x - a.x)); if (k.x.el) x0 = 0; if (k.x.er) x1 = k.W;
    return levelFigs(k, out, L => c.y + (b.y - a.y) * L, L => k.v[2] + (k.v[1] - k.v[0]) * L, x0, x1);
  }
  function fibChannelFigs(k) {
    const [a, b, c] = k.c; if (!b) return [];
    if (!c) return [F.line([a, b], k.col, k.w, k.s), F.hit([a, b])];
    const dy = c.y - yOnLine(a, b, c.x), [p, q] = ext(a, b, k.W, k.H, k.x.el, k.x.er), lv = levels(k), out = [];
    const at = (pt, L) => ({ x: pt.x, y: pt.y + dy * L });
    if (k.x.f !== false) for (let i = 0; i + 1 < lv.length; i++) out.push(F.poly([at(p, lv[i].l), at(q, lv[i].l), at(q, lv[i + 1].l), at(p, lv[i + 1].l)], hexA(lv[i + 1].col, 0.12)));
    for (const o of lv) {
      const L = [at(p, o.l), at(q, o.l)];
      out.push(F.line(L, o.col, k.w, k.s), F.hit(L));
      if (k.x.lb !== false) out.push(F.txt(L[0].x - 4, L[0].y, String(o.l), { color: o.col, align: 'right', base: 'middle', size: 11 }));
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
    const box = rectPts(x0, a.y, x1, b.y), out = [F.shape(box, k.x.f !== false ? hexA(k.col, 0.2) : null, k.col, k.w, k.s), F.hit(box, k.x.f !== false)];
    if (k.x.m) out.push(F.line([{ x: x0, y: (a.y + b.y) / 2 }, { x: x1, y: (a.y + b.y) / 2 }], k.col, 1, 1));
    return out;
  }
  function circleFigs(k) {
    const [a, b] = k.c; if (!b) return [];
    const r = Math.hypot(b.x - a.x, b.y - a.y);
    return [F.ell(a.x, a.y, r, r, k.x.f !== false ? hexA(k.col, 0.2) : null, k.col, k.w, k.s, k.x.f !== false)];
  }
  function ellipseFigs(k) {
    const [a, b] = k.c; if (!b) return [];
    return [F.ell((a.x + b.x) / 2, (a.y + b.y) / 2, (b.x - a.x) / 2, (b.y - a.y) / 2, k.x.f !== false ? hexA(k.col, 0.2) : null, k.col, k.w, k.s, k.x.f !== false)];
  }
  function triangleFigs(k) {
    const c = k.c; if (c.length < 2) return [];
    if (c.length < 3) return [F.line(c, k.col, k.w, k.s)];
    return [F.shape(c.slice(0, 3), k.x.f !== false ? hexA(k.col, 0.2) : null, k.col, k.w, k.s), F.hit(c.slice(0, 3), k.x.f !== false)];
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
    'شانه‌ی راست': 'Right shoulder', 'پایان': 'End', 'قیمتِ ورود': 'Entry price', 'گوشه': 'Corner', 'گوشه‌ی مقابل': 'Opposite corner',
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
    { id: 'scHLine', g: 'lines', sec: 'خطوط', fa: 'خطِ افقی', en: 'Horizontal Line', key: 'Alt+H', pts: 1, color: C.blue, opts: ['ax', 'text'], pn: ['قیمت'], ic: svg(`<path d="M2 12h20"/>${dot(12, 12)}`), figs: k => hlineFigs(k), y: k => axisY(k) },
    { id: 'scHRay', g: 'lines', sec: 'خطوط', fa: 'ریِ افقی', en: 'Horizontal Ray', key: 'Alt+J', pts: 1, color: C.blue, opts: ['ax', 'text'], pn: ['شروع'], ic: svg(`<path d="M7 12h15"/>${dot(6, 12)}`), figs: k => hlineFigs(k, true), y: k => axisY(k) },
    { id: 'scVLine', g: 'lines', sec: 'خطوط', fa: 'خطِ عمودی', en: 'Vertical Line', key: 'Alt+V', pts: 1, color: C.blue, opts: ['ax'], pn: ['زمان'], ic: svg(`<path d="M12 2v20"/>${dot(12, 12)}`), figs: vlineFigs, x: k => axisX(k) },
    { id: 'scCross', g: 'lines', sec: 'خطوط', fa: 'خطِ متقاطع', en: 'Cross Line', key: 'Alt+C', pts: 1, color: C.blue, opts: ['ax'], pn: ['نقطه'], ic: svg(`<path d="M12 2v20M2 12h20"/>${dot(12, 12)}`), figs: crossFigs, y: k => axisY(k), x: k => axisX(k) },
    { id: 'scChannel', g: 'lines', sec: 'کانال‌ها', fa: 'کانالِ موازی', en: 'Parallel Channel', pts: 3, color: C.blue, opts: ['f', 'mid', 'el', 'er'], pn: ['شروعِ خط', 'پایانِ خط', 'پهنای کانال'], ic: svg('<path d="M3 15L15 3M9 21L21 9"/><path d="M6 18L18 6" stroke-dasharray="2 2.5"/>'), figs: channelFigs },
    { id: 'scRegression', g: 'lines', sec: 'کانال‌ها', fa: 'روندِ رگرسیون', en: 'Regression Trend', pts: 2, color: C.blue, opts: ['f', 'dev', 'er'], pn: ['شروعِ بازه', 'پایانِ بازه'], noMag: true, ic: svg('<path d="M3 16L21 8" stroke-dasharray="2 2.5"/><path d="M3 12L21 4M3 20L21 12"/>'), figs: regressionFigs, move: regressionMove },
    { id: 'scFlat', g: 'lines', sec: 'کانال‌ها', fa: 'سقف/کفِ صاف', en: 'Flat Top/Bottom', pts: 3, color: C.blue, opts: ['f', 'el', 'er'], pn: ['شروعِ خطِ روند', 'پایانِ خطِ روند', 'سطحِ افقی'], ic: svg('<path d="M3 19L21 11"/><path d="M3 6h18"/>'), figs: flatFigs },
    { id: 'scPitchfork', g: 'lines', sec: 'چنگال', fa: 'چنگالِ اندروز', en: 'Pitchfork', pts: 3, color: C.orange, opts: ['f'], pn: ['دسته', 'سقف/کفِ اول', 'سقف/کفِ دوم'], ic: svg(`<path d="M3 12h18M9 5h12M9 19h12M9 5v14"/>${dot(3, 12)}`), figs: pitchforkFigs },
    { id: 'scFib', g: 'fib', fa: 'فیبوناچیِ اصلاحی', en: 'Fib Retracement', key: 'Alt+F', pts: 2, color: C.gray, opts: ['lv', 'f', 'lb', 'rv', 'el', 'er'], pn: ['شروعِ موج (سطحِ ۱)', 'پایانِ موج (سطحِ ۰)'], ic: svg('<path d="M3 4h18M3 9h18M3 14h18M3 20h18"/><path d="M5 20L19 4" stroke-dasharray="2 2.5"/>'), figs: fibFigs },
    { id: 'scFibExt', g: 'fib', fa: 'فیبوناچیِ گسترشی', en: 'Trend-Based Fib Extension', pts: 3, color: C.gray, opts: ['lv', 'f', 'lb', 'el', 'er'], pn: ['شروعِ موج (A)', 'پایانِ موج (B)', 'پایانِ اصلاح (C)'], ic: svg('<path d="M3 20L8 9l4 6" stroke-dasharray="2 2"/><path d="M13 4h8M13 9h8M13 14h8M13 19h8"/>'), figs: fibExtFigs },
    { id: 'scFibChannel', g: 'fib', fa: 'کانالِ فیبوناچی', en: 'Fib Channel', pts: 3, color: C.gray, opts: ['lv', 'f', 'lb', 'el', 'er'], pn: ['شروعِ خط', 'پایانِ خط', 'پهنا'], ic: svg('<path d="M3 13L13 3M5 17L17 5M8 21L21 8"/>'), figs: fibChannelFigs },
    { id: 'scFibTime', g: 'fib', fa: 'منطقه‌ی زمانیِ فیبوناچی', en: 'Fib Time Zone', pts: 2, color: C.gray, opts: ['lb'], pn: ['شروع', 'یک واحدِ زمانی'], noMag: true, ic: svg('<path d="M3 3v18M6 3v18M9 3v18M14 3v18M21 3v18"/>'), figs: fibTimeFigs },
    { id: 'scXABCD', g: 'patterns', sec: 'الگوها', fa: 'الگوی XABCD', en: 'XABCD Pattern', pts: 5, color: C.blue, opts: ['f', 'lb'], pn: ['X', 'A', 'B', 'C', 'D'], ic: svg('<path d="M2 17L7 6l4 8 5-10 6 14"/>'), figs: xabcdFigs },
    { id: 'scABCD', g: 'patterns', sec: 'الگوها', fa: 'الگوی ABCD', en: 'ABCD Pattern', pts: 4, color: C.green, opts: ['lb'], pn: ['A', 'B', 'C', 'D'], ic: svg('<path d="M3 18L9 6l5 8 7-10"/>'), figs: abcdFigs },
    { id: 'scHS', g: 'patterns', sec: 'الگوها', fa: 'سر و شانه', en: 'Head and Shoulders', pts: 7, color: C.blue, opts: ['f'], pn: ['شروع', 'شانه‌ی چپ', 'خطِ گردن ۱', 'سر', 'خطِ گردن ۲', 'شانه‌ی راست', 'پایان'], ic: svg('<path d="M2 18l4-6 3 4 3-11 3 11 3-4 4 6"/><path d="M4 16h16" stroke-dasharray="2 2"/>'), figs: hsFigs },
    { id: 'scEWImpulse', g: 'patterns', sec: 'امواجِ الیوت', fa: 'موجِ ضربه‌ایِ الیوت', en: 'Elliott Impulse Wave (12345)', pts: 6, color: C.blue, pn: ['شروع', '(1)', '(2)', '(3)', '(4)', '(5)'], ic: svg('<path d="M2 20l4-7 3 3 5-12 3 6 5-7"/>'), figs: waveFigs(['', '(1)', '(2)', '(3)', '(4)', '(5)']) },
    { id: 'scEWCorrection', g: 'patterns', sec: 'امواجِ الیوت', fa: 'موجِ اصلاحیِ الیوت', en: 'Elliott Correction Wave (ABC)', pts: 4, color: C.blue, pn: ['شروع', '(A)', '(B)', '(C)'], ic: svg('<path d="M3 5l6 11 4-6 8 10"/>'), figs: waveFigs(['', '(A)', '(B)', '(C)']) },
    { id: 'scEWTriangle', g: 'patterns', sec: 'امواجِ الیوت', fa: 'موجِ مثلثیِ الیوت', en: 'Elliott Triangle Wave (ABCDE)', pts: 6, color: C.orange, pn: ['شروع', '(A)', '(B)', '(C)', '(D)', '(E)'], ic: svg('<path d="M2 5l4 14 4-10 4 7 4-5 4 3"/>'), figs: waveFigs(['', '(A)', '(B)', '(C)', '(D)', '(E)']) },
    { id: 'scEWCombo', g: 'patterns', sec: 'امواجِ الیوت', fa: 'ترکیبیِ دوگانه‌ی الیوت', en: 'Elliott Double Combo Wave (WXY)', pts: 4, color: C.green, pn: ['شروع', '(W)', '(X)', '(Y)'], ic: svg('<path d="M3 6l6 12 5-7 7 9"/>'), figs: waveFigs(['', '(W)', '(X)', '(Y)']) },
    { id: 'scLong', g: 'measure', sec: 'پیش‌بینی', fa: 'پوزیشنِ خرید', en: 'Long Position', pts: 3, steps: 1, cls: 'up', pn: ['قیمتِ ورود'], ic: svg('<path d="M4 13h16"/><rect x="4" y="4" width="16" height="9" rx="1" fill="currentColor" fill-opacity=".18"/><rect x="4" y="13" width="16" height="6" rx="1" stroke-dasharray="2 2"/>'), figs: k => posFigs(k, true), move: posMove, done: o => posDone(o, true) },
    { id: 'scShort', g: 'measure', sec: 'پیش‌بینی', fa: 'پوزیشنِ فروش', en: 'Short Position', pts: 3, steps: 1, cls: 'down', pn: ['قیمتِ ورود'], ic: svg('<path d="M4 11h16"/><rect x="4" y="11" width="16" height="9" rx="1" fill="currentColor" fill-opacity=".18"/><rect x="4" y="5" width="16" height="6" rx="1" stroke-dasharray="2 2"/>'), figs: k => posFigs(k, false), move: posMove, done: o => posDone(o, false) },
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
    fs: ['fs', 'اندازه‌ی قلم', 'Font size'], b: ['bool', 'درشت (Bold)', 'Bold'], bg: ['bool', 'کادر و پس‌زمینه', 'Border and background']
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
    const run = (fn, arg) => {
      const k = ctxOf(arg);
      try { const f = fn(k) || []; if (S.debug && fn === k.def.figs) S.lastFigs.set(k.o.id, f); return f; }
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

  // ── ظاهر ──
  const TXT = '#8a8274', LINE = '#2a2621';
  const STYLES = {
    grid: { horizontal: { color: 'rgba(255,255,255,.035)' }, vertical: { color: 'rgba(255,255,255,.035)' } },
    candle: {
      bar: { upColor: UP, downColor: DOWN, noChangeColor: TXT, upBorderColor: UP, downBorderColor: DOWN, noChangeBorderColor: TXT, upWickColor: UP, downWickColor: DOWN, noChangeWickColor: TXT },
      priceMark: { high: { color: TXT, textFamily: MONO, textSize: 11 }, low: { color: TXT, textFamily: MONO, textSize: 11 },
        last: { upColor: UP, downColor: DOWN, text: { family: MONO, size: 11, weight: 600 } } },
      tooltip: { showRule: 'always', showType: 'standard', text: { color: '#aea89e', size: 11, family: MONO, marginLeft: 6, marginRight: 6 } }
    },
    indicator: { tooltip: { text: { color: '#aea89e', size: 11, family: MONO } } },
    xAxis: { axisLine: { color: LINE }, tickLine: { color: LINE }, tickText: { color: TXT, size: 11, family: MONO } },
    yAxis: { axisLine: { color: LINE }, tickLine: { color: LINE }, tickText: { color: TXT, size: 11, family: MONO } },
    separator: { color: LINE },
    crosshair: {
      horizontal: { line: { color: 'rgba(200,168,75,.45)' }, text: { backgroundColor: '#3a332a', borderColor: '#3a332a', family: MONO, size: 11, color: '#EFEAE3' } },
      vertical: { line: { color: 'rgba(200,168,75,.45)' }, text: { backgroundColor: '#3a332a', borderColor: '#3a332a', family: MONO, size: 11, color: '#EFEAE3' } }
    },
    overlay: { text: { family: MONO, size: 11 }, rect: { color: 'rgba(41,98,255,.12)' } }
  };
  // دسته‌ها مثلِ TradingView: حلقه‌ی توخالی به رنگِ شکل؛ زیرِ انگشت بزرگ‌تر
  const ovStyles = col => ({
    point: { color: '#0b0a09', borderColor: col, borderSize: 1.6, radius: S.touch ? 6.5 : 4.5, activeColor: col, activeBorderColor: hexA(col, 0.3), activeBorderSize: 4, activeRadius: S.touch ? 7.5 : 5.5 },
    text: { color: ink(col), backgroundColor: col, borderColor: col, family: MONO, size: 11 },
    rect: { color: hexA(col, 0.12) }
  });

  // ── داده ──
  const toK = c => ({ timestamp: c.t, open: c.o, high: c.h, low: c.l, close: c.c, volume: c.v });
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
    S.chart.applyNewData(S.data, S.more);
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
      S.data = res.list.concat(S.data); callback(res.list, res.more && res.list.length > 0);
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
          S.chart.updateData(k);
        }
        paintHead();
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
      onPressedMoveEnd: () => { commit(); return false; },
      onSelected: e => { if (S.tool !== 'eraser') { S.selected = e.overlay.id; paintSel(); } return false; },
      onDeselected: e => { if (S.selected === e.overlay.id) { S.selected = null; paintSel(); } return false; },
      onClick: e => { if (S.tool === 'eraser' && !readOnly()) { const id = e.overlay.id; setTimeout(() => removeId(id), 0); } return false; },
      onDoubleClick: e => { if (!readOnly() && S.recs.has(e.overlay.id)) openSettings(e.overlay.id); return false; },
      onRightClick: e => { if (S.recs.has(e.overlay.id)) openCtx(e.overlay.id, e); return true; },   // true = کتابخانه شکل را پاک نکند
      onRemoved: e => { const id = e.overlay.id; if (S.recs.has(id) && id !== S.drawingId) { S.recs.delete(id); commit(); } return false; }
    };
  }
  const lockOf = m => readOnly() || S.lockAll || !!m.k;
  // آخرین ظاهرِ هر ابزار = پیش‌فرضِ شکلِ بعدی (مثلِ TradingView). متنِ هر شکل و مسیرِ قلم مالِ خودِ همان شکل‌اند.
  const TD_X = new Set(['el', 'er', 'st', 'ax', 'f', 'mid', 'm', 'dev', 'lb', 'rv', 'lv', 'fs', 'b', 'bg']);
  function styleFor(n) {
    const td = S.store?.prefs?.td?.[n]; if (!td || typeof td !== 'object') return {};
    const out = {};
    if (/^#[0-9A-Fa-f]{6}$/.test(td.c || '')) out.c = td.c;
    if ([2, 3, 4].includes(td.w)) out.w = td.w;
    if ([1, 2].includes(td.s)) out.s = td.s;
    if (td.x && typeof td.x === 'object') { const x = {}; for (const [k, v] of Object.entries(td.x)) if (TD_X.has(k)) x[k] = Array.isArray(v) ? v.slice() : v; if (Object.keys(x).length) out.x = x; }
    return out;
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
    const o = { id: rec.id, name: rec.n, mode: 'normal', visible: !S.hidden && !m.h, lock: lockOf(m), extendData: { ...m }, styles: ovStyles(m.c || def.color || C.blue), ...callbacks() };
    if (!drawing) o.points = rec.p.map(([t, v]) => ({ timestamp: t, value: v }));
    S.quiet = !drawing; let id = null;
    try { id = S.chart.createOverlay(o); } finally { S.quiet = false; }
    if (id) S.recs.set(id, m);
    return id;
  }
  function refresh(id) {
    const m = S.recs.get(id); if (!m) return;
    S.quiet = true;
    try { S.chart.overrideOverlay({ id, extendData: { ...m }, styles: ovStyles(m.c || T[m.n].color || C.blue), lock: lockOf(m), visible: !S.hidden && !m.h }); }
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
    S.drawingId = makeOverlay({ id: newId(), n: id, p: [], ...styleFor(id) }, true);
    hint(id, 1);
  }
  function onDrawn(o) {
    const def = T[o.name]; if (!def) return;
    if (S.drawingId === o.id) S.drawingId = null;
    hint(null);
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
    el.addEventListener('pointerdown', e => {
      if (!T[S.tool]?.pad) return; e.preventDefault(); el.setPointerCapture?.(e.pointerId);
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
    if (id === 'eraser') { el.textContent = tr('پاک‌کن: روی هر شکل بزنی پاک می‌شود — Esc یا نشانگر برای خروج', 'Eraser: tap a drawing to remove it — Esc or the cursor to exit'); el.hidden = false; return; }
    const def = T[id]; if (!def) return;
    let t;
    if (def.pad) t = `${nm(def)}: ${tr('روی نمودار بکش', 'draw on the chart')}`;
    else {
      const n = def.steps || def.pts, i = clamp((step || 1) - 1, 0, n - 1);
      t = `${nm(def)}: ${ptName(def, i, n === 2)}` + (n > 1 ? tr(` (${fa(i + 1)} از ${fa(n)})`, ` (${i + 1} of ${n})`) : '');
      if (def.steps === 1 && def.pts > 1) t += tr(' — بعد هدف و حد ضرر را بکش', ' — then drag the target and stop');
    }
    el.textContent = t + (S.touch ? '' : tr(' · Esc لغو', ' · Esc to cancel')); el.hidden = false;
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
    setMeta(id, { c: c || null }); rememberStyle(id); closePop();
  }
  function setWidth(w) { if ([1, 2, 3, 4].includes(w)) { setMeta(S.selected, { w }); rememberStyle(S.selected); } closePop(); }
  function setLineStyle(s) { if ([0, 1, 2].includes(s)) { setMeta(S.selected, { s }); rememberStyle(S.selected); } closePop(); }

  // ── منوی راست‌کلیک ──
  function openCtx(id, e) {
    const box = $('ch-ctx'), m = S.recs.get(id); if (!box || !m || readOnly()) return;
    closePop(); closeFly(); selectId(id);
    const it = (a, icon, t, k) => `<button type="button" class="ch-ctxi" data-a="${a}" onclick="SCCHART.ctx('${a}')">${icon}<span>${t}</span>${k ? `<kbd dir="ltr">${k}</kbd>` : ''}</button>`;
    box.innerHTML = it('settings', ICON.gear, tr('تنظیمات…', 'Settings…')) + it('clone', ICON.clone, tr('کپی', 'Clone'))
      + it('lock', m.k ? ICON.lock : ICON.unlock, m.k ? tr('باز کردنِ قفل', 'Unlock') : tr('قفل', 'Lock'))
      + it('hide', ICON.eyeOff, tr('پنهان کردن', 'Hide')) + '<hr>' + it('delete', ICON.trash, tr('حذف', 'Remove'), 'Del');
    box.hidden = false;
    const sr = box.parentElement.getBoundingClientRect();
    box.style.left = clamp((e?.x ?? 40), 4, sr.width - box.offsetWidth - 4) + 'px'; box.style.top = clamp((e?.y ?? 40), 4, sr.height - box.offsetHeight - 4) + 'px';
  }
  function closeCtx() { const b = $('ch-ctx'); if (b) { b.hidden = true; b.innerHTML = ''; } }
  function ctxAction(a) {
    const id = S.selected; closeCtx();
    if (a === 'settings') openSettings(id); else if (a === 'clone') cloneSel(id); else if (a === 'lock') toggleLock(id);
    else if (a === 'hide') toggleHideOne(id); else if (a === 'delete') removeId(id);
  }

  // ── تنظیماتِ هر شکل (مثلِ پنجره‌ی Settings در TradingView) ──
  function openSettings(id = S.selected) {
    const m = S.recs.get(id), o = id && S.chart.getOverlayById(id), box = $('ch-modal'); if (!m || !o || !box || readOnly()) return;
    closePop(); closeCtx();
    const def = T[m.n], x = m.x || {}, opts = def.opts || [];
    const f = [];
    for (const key of opts) {
      const [type, labFa, labEn] = OPT[key], lab = tr(labFa, labEn);
      if (type === 'bool' || type === 'boolOn') { const on = type === 'boolOn' ? x[key] !== false : !!x[key]; f.push(`<label class="ch-ck"><input type="checkbox" data-o="${key}" data-t="${type}"${on ? ' checked' : ''}><span>${lab}</span></label>`); }
      else if (type === 'text') f.push(`<label class="fl" for="ch-o-text">${lab}</label><textarea id="ch-o-text" class="fi" data-o="text" rows="2" maxlength="200" placeholder="${def.text ? tr('متن', 'Text') : tr('اختیاری', 'Optional')}">${esc(x.text || '')}</textarea>`);
      else if (type === 'fs') f.push(`<label class="ch-row"><span>${lab}</span><select class="fi" data-o="fs">${[10, 12, 14, 16, 20, 24, 28, 36].map(s => `<option value="${s}"${(+x.fs || 14) === s ? ' selected' : ''}>${s}</option>`).join('')}</select></label>`);
      else if (type === 'dev') f.push(`<label class="ch-row"><span>${lab}</span><select class="fi" data-o="dev">${[1, 1.5, 2, 2.5, 3].map(s => `<option value="${s}"${(isNum(x.dev) ? x.dev : 2) === s ? ' selected' : ''}>${s}</option>`).join('')}</select></label>`);
      else if (type === 'levels') { const on = Array.isArray(x.lv) ? x.lv : LV_ON; f.push(`<div class="fl">${lab}</div><div class="ch-lvs">${LV.map((l, i) => `<label class="ch-lv" style="--c:${LV_COL[i]}"><input type="checkbox" data-lv="${i}"${on.includes(i) ? ' checked' : ''}><span dir="ltr">${l}</span></label>`).join('')}</div>`); }
    }
    const pts = def.pad ? [] : o.points.slice(0, def.pts);
    const coord = pts.length ? `<div class="fl">${tr('مختصات (قیمتِ هر نقطه)', 'Coordinates (price of each point)')}</div><div class="ch-coords">${pts.map((p, i) => `<label class="ch-row"><span>${esc(ptName(def, i, true))}</span><input class="fi" dir="ltr" inputmode="decimal" data-pt="${i}" value="${isNum(p.value) ? (+p.value).toFixed(prec()) : ''}" data-was="${isNum(p.value) ? (+p.value).toFixed(prec()) : ''}"></label>`).join('')}</div>` : '';
    box.innerHTML = `<div class="ch-mcard ch-set" role="dialog" aria-label="${esc(tr('تنظیماتِ ' + def.fa, def.en + ' settings'))}"><div class="ch-mh"><b>${esc(nm(def))}</b>${EN() ? '' : `<small dir="ltr">${esc(def.en)}</small>`}</div>
      ${f.length ? `<div class="ch-sec">${f.join('')}</div>` : ''}${coord}
      <div class="ch-mrow"><button type="button" class="btn btn-ghost ch-sdef" id="ch-sdef">${tr('بازگشت به پیش‌فرض', 'Reset to default')}</button><button type="button" class="btn btn-ghost" id="ch-sno">${tr('انصراف', 'Cancel')}</button><button type="button" class="btn btn-primary" id="ch-sok">${tr('ثبت', 'Ok')}</button></div></div>`;
    box.hidden = false;
    const close = ok => {
      if (ok) {
        const nx = { ...x };
        box.querySelectorAll('[data-o]').forEach(el => {
          const k = el.dataset.o;
          if (el.type === 'checkbox') { if (el.dataset.t === 'boolOn') { if (el.checked) delete nx[k]; else nx[k] = false; } else { if (el.checked) nx[k] = true; else delete nx[k]; } }
          else if (k === 'text') { const v = String(el.value || '').trim().slice(0, 200); if (v) nx.text = v; else delete nx.text; }
          else if (k === 'fs') { const v = +el.value; if (v === 14) delete nx.fs; else nx.fs = v; }
          else if (k === 'dev') { const v = +el.value; if (v === 2) delete nx.dev; else nx.dev = v; }
        });
        if (box.querySelector('[data-lv]')) {
          const lv = [...box.querySelectorAll('[data-lv]')].filter(e => e.checked).map(e => +e.dataset.lv);
          if (JSON.stringify(lv) === JSON.stringify(LV_ON)) delete nx.lv; else nx.lv = lv;
        }
        const np = o.points.map(p => ({ ...p })); let moved = false;
        box.querySelectorAll('[data-pt]').forEach(el => { const v = parseFloat(String(el.value).replace(/[٠-٩۰-۹]/g, d => '0123456789'['٠١٢٣٤٥٦٧٨٩'.indexOf(d) >= 0 ? '٠١٢٣٤٥٦٧٨٩'.indexOf(d) : '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)]).replace(/,/g, '')); const i = +el.dataset.pt; if (isNum(v) && v > 0 && np[i] && String(el.value).trim() !== el.dataset.was) { np[i].value = v; moved = true; } });
        if (moved) setPoints(id, np.map(p => ({ timestamp: tsOfPoint(p), value: p.value })));
        m.x = nx; rememberStyle(id); refresh(id); commit(); paintSel();
      }
      box.hidden = true; box.innerHTML = '';
    };
    $('ch-sok').onclick = () => close(true); $('ch-sno').onclick = () => close(false);
    // ظاهرِ پیش‌فرضِ خودِ ابزار برای همین شکل و شکل‌های بعدی (متنِ شکل می‌ماند)
    $('ch-sdef').onclick = () => {
      const keep = m.x?.text ? { text: m.x.text } : {};
      Object.assign(m, { c: null, w: 1, s: 0, x: keep });
      const all = { ...(S.store.prefs.td || {}) }; delete all[m.n]; S.store.prefs.td = all;
      box.hidden = true; box.innerHTML = ''; refresh(id); commit(); paintSel();
    };
    box.onkeydown = ev => { if (ev.key === 'Escape') { ev.stopPropagation(); close(false); } };
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
      rows.push(`<div class="ch-tri${S.selected === id ? ' on' : ''}${m.h ? ' off' : ''}" data-id="${id}"><button type="button" class="ch-trn" onclick="SCCHART.pickObj('${id}')"><span class="ch-tric" style="color:${m.c || def.color || C.blue}">${def.ic}</span><span><b>${esc(nm(def))}</b><small dir="ltr">${def.pad ? '' : esc(fmt(v))}${m.x?.text ? ` · <span class="ch-utext" dir="auto">${esc(String(m.x.text).slice(0, 24))}</span>` : ''}</small></span></button>`
        + `<button type="button" class="ch-trb" title="${m.h ? tr('نمایش', 'Show') : tr('پنهان', 'Hide')}" aria-label="${tr('پنهان/نمایش', 'Hide/show')}" onclick="SCCHART.objHide('${id}')">${m.h ? ICON.eyeOff : ICON.eye}</button>`
        + (ro ? '' : `<button type="button" class="ch-trb" title="${m.k ? tr('باز کردنِ قفل', 'Unlock') : tr('قفل', 'Lock')}" aria-label="${tr('قفل', 'Lock')}" onclick="SCCHART.objLock('${id}')">${m.k ? ICON.lock : ICON.unlock}</button><button type="button" class="ch-trb del" title="${tr('حذف', 'Remove')}" aria-label="${tr('حذف', 'Remove')}" onclick="SCCHART.objDel('${id}')">${ICON.trash}</button>`) + '</div>');
    }
    t.innerHTML = `<div class="ch-flyh">${tr('شکل‌های ' + esc(S.coin), 'Object tree · ' + esc(S.coin))} <small>(${num(rows.length)})</small><button type="button" class="ch-x" aria-label="${tr('بستن', 'Close')}" onclick="SCCHART.tree()">${ICON.close}</button></div>`
      + (rows.length ? rows.reverse().join('') : `<div class="ch-pempty">${tr('هنوز شکلی رسم نشده.', 'No drawings yet.')}</div>`);
  }

  function shell() {
    const d = dirOf();
    return `<div class="ch-wrap" dir="${d}">
      <div class="ch-head">
        <button type="button" class="ch-coin" id="ch-coinb" onclick="SCCHART.pick()" aria-label="${tr('انتخابِ نماد و منبع', 'Symbol search')}"><span id="ch-logo">${typeof coinLogo === 'function' ? coinLogo(S.coin) : ''}</span><span class="ch-cname"><span class="ch-cl" dir="ltr"><b id="ch-coinname">${esc(S.coin)}</b><small id="ch-quote"></small></span><small class="ch-csrc" id="ch-csrc"></small></span>${ICON.chev}</button>
        <div class="ch-px" dir="ltr"><b id="ch-last">—</b><span id="ch-chg" class="ch-chg"></span></div>
        <div class="ch-srcs" id="ch-srcs" role="group" aria-label="${tr('منبعِ داده', 'Data source')}">${SOURCES.map(s => `<button type="button" data-src="${s.id}" onclick="SCCHART.src('${s.id}')">${s.name}</button>`).join('')}</div>
        <div class="ch-lang" id="ch-lang" role="group" aria-label="${tr('زبانِ نمودار', 'Chart language')}"><button type="button" data-l="fa" lang="fa" onclick="SCCHART.lang('fa')">فا</button><button type="button" data-l="en" lang="en" onclick="SCCHART.lang('en')">EN</button></div>
      </div>
      <div class="ch-bar">
        <div class="ch-tfs" id="ch-tfs" role="group" aria-label="${tr('تایم‌فریم', 'Time interval')}" dir="ltr">${TFS.map(t => `<button type="button" data-tf="${t.id}" onclick="SCCHART.tf('${t.id}')">${t.l}</button>`).join('')}</div>
        <button type="button" class="ch-indb" onclick="SCCHART.indMenu()" aria-haspopup="true">${ICON.ind}<span id="ch-indl">${tr('اندیکاتور', 'Indicators')}</span></button>
        <button type="button" class="ch-fullb" id="ch-full" onclick="SCCHART.max()" aria-pressed="false">${ICON.full}</button>
      </div>
      <div class="ch-main" dir="ltr">
        <div class="ch-tb" id="ch-tools" role="toolbar" aria-label="${tr('ابزارهای رسم', 'Drawing tools')}"></div>
        <div class="ch-stage" id="ch-stage">
          <div class="ch-canvas" id="ch-canvas"></div>
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
      </div>
      <div class="ch-foot"><span id="ch-save" class="ch-save"></span><span id="ch-srcinfo"></span></div>
    </div>`;
  }

  // ── اندیکاتورها ──
  const INDICATORS = [
    { id: 'VOL', t: 'حجم', en: 'Volume', main: false }, { id: 'MA', t: 'میانگینِ متحرک (MA)', en: 'Moving Average (MA)', main: true },
    { id: 'EMA', t: 'میانگینِ نمایی (EMA)', en: 'Exponential Moving Average (EMA)', main: true }, { id: 'BOLL', t: 'باندِ بولینگر', en: 'Bollinger Bands (BOLL)', main: true },
    { id: 'RSI', t: 'RSI', en: 'Relative Strength Index (RSI)', main: false }, { id: 'MACD', t: 'MACD', en: 'MACD', main: false }
  ];
  // دوره‌های پیش‌فرضِ KLineChart و برچسبِ هر عدد
  const IND_DEF = { VOL: [5, 10, 20], MA: [5, 10, 30, 60], EMA: [6, 12, 20], BOLL: [20, 2], RSI: [6, 12, 24], MACD: [12, 26, 9] };
  const indLabel = (name, i) => ({
    VOL: () => tr('میانگینِ حجمِ ' + fa(i + 1), 'Volume MA ' + (i + 1)), MA: () => tr('دوره‌ی MA ' + fa(i + 1), 'MA length ' + (i + 1)),
    EMA: () => tr('دوره‌ی EMA ' + fa(i + 1), 'EMA length ' + (i + 1)), RSI: () => tr('دوره‌ی RSI ' + fa(i + 1), 'RSI length ' + (i + 1)),
    BOLL: () => [tr('دوره', 'Length'), tr('ضریبِ انحرافِ معیار', 'StdDev multiplier')][i], MACD: () => [tr('میانگینِ سریع', 'Fast length'), tr('میانگینِ کند', 'Slow length'), tr('خطِ سیگنال', 'Signal smoothing')][i]
  }[name] || (() => String(i + 1)))();
  const FIXED_N = new Set(['BOLL', 'MACD']);   // تعدادِ عددها ثابت؛ بقیه را می‌شود کم کرد (مثلاً فقط RSI ۱۴)
  function indParams(name) {
    const p = S.store?.prefs?.ip?.[name], d = IND_DEF[name];
    if (!d || !Array.isArray(p) || !p.length || p.length > d.length || (FIXED_N.has(name) && p.length !== d.length)) return null;
    return p.every((v, i) => isNum(v) && v > 0 && v <= 500 && (name === 'BOLL' && i === 1 ? v <= 10 : Number.isInteger(v))) ? p.slice() : null;
  }
  function applyIndicators() {
    for (const [name, pane] of Object.entries(S.panes)) S.chart.removeIndicator(pane, name);
    S.panes = {};
    const ph = S.store.prefs.ph || {};
    for (const name of S.store.prefs.ind || []) {
      const def = INDICATORS.find(x => x.id === name); if (!def) continue;
      const p = indParams(name), v = p ? { name, calcParams: p } : name;
      const h = clamp(+ph[name] || 90, 50, 400);
      const pane = def.main ? S.chart.createIndicator(v, true, { id: 'candle_pane' }) : S.chart.createIndicator(v, false, { height: h });
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
  function paintInd() {
    const box = $('ch-indm'); if (!box || box.hidden) return;
    const on = new Set(S.store.prefs.ind || []);
    const ro = readOnly();
    box.innerHTML = INDICATORS.map(x => `<div class="ch-indr"><button type="button" class="ch-indi${on.has(x.id) ? ' on' : ''}" onclick="SCCHART.ind('${x.id}')" aria-pressed="${on.has(x.id)}"><i></i>${esc(tr(x.t, x.en))}<small dir="ltr">${(indParams(x.id) || IND_DEF[x.id]).join(', ')}</small></button>`
      + (ro ? '' : `<button type="button" class="ch-indg" data-ind="${x.id}" title="${esc(tr('تنظیماتِ ', 'Settings · ') + x.id)}" aria-label="${esc(tr('تنظیماتِ ', 'Settings · ') + x.id)}" onclick="SCCHART.indSet('${x.id}')">${ICON.gear}</button>`) + '</div>').join('');
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
    remember(); const logo = $('ch-logo'); if (logo && typeof coinLogo === 'function') logo.innerHTML = coinLogo(c);
    loadSeries();
  }
  function setSrc(src) { if (!SOURCES.some(s => s.id === src) || src === S.src) return; cancelDrawing(); S.src = src; remember(); loadSeries(); }
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
    S.stay = !!pf.stay; S.lockAll = !!pf.lock; S.lang = pf.lang === 'en' ? 'en' : 'fa'; S.hidden = !!pf.hid;
    el.innerHTML = shell();
    document.querySelectorAll('#ch-lang button').forEach(b => { const on = b.dataset.l === S.lang; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    paintMax();
    paintTools(); status(S.loadedStore ? 'saved' : 'local'); if (!S.loadedStore && !L.g(cacheKey())) $('ch-save').textContent = '';
    const phone = window.matchMedia('(max-width: 600px)').matches;
    S.chart = kc.init($('ch-canvas'), { locale: 'en-US', timezone: 'Asia/Tehran', styles: phone ? { ...STYLES, candle: { ...STYLES.candle, tooltip: { ...STYLES.candle.tooltip, showRule: 'follow_cross' } },
      indicator: { tooltip: { ...STYLES.indicator.tooltip, showRule: 'follow_cross' } } } : STYLES });
    patchEngine(S.chart);
    S.chart.setLoadDataCallback(onLoadData);
    S.chart.setOffsetRightDistance(48);
    applyIndicators();
    S.chart.subscribeAction('onZoom', saveZoomSoon);
    S.chart.subscribeAction('onPaneDrag', () => setTimeout(savePaneHeights, 50));
    const cv = $('ch-canvas');
    if ('ResizeObserver' in window) new ResizeObserver(() => S.chart && S.chart.resize()).observe(cv);
    // جای آخرین اشاره (برای دوضربه‌ی سریع)، خط‌کش با Shift، و پاک شدنِ خط‌کش با کلیکِ بعدی
    cv.addEventListener('pointerdown', e => {
      const r = cv.getBoundingClientRect(); S.lastPtr = { x: e.clientX - r.left, y: e.clientY - r.top };
      if (S.measureId && !S.drawingId) { dropMeasure(); paintTools(); }
      if (e.shiftKey && S.tool === 'cursor' && !readOnly()) startTool('scMeasure');
    }, true);
    cv.addEventListener('contextmenu', e => e.preventDefault());
    padEvents($('ch-pad'));
    document.addEventListener('keydown', onKey);
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
  const CHART_CSS = `.ch-lang{flex:0 0 auto;display:flex;background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:3px;gap:2px}.ch-lang button{background:none;border:0;color:var(--text2);font:600 12px var(--f-body);padding:6px 8px;border-radius:8px;cursor:pointer;min-height:34px;min-width:34px}.ch-lang button[lang=en]{font-family:var(--f-mono);letter-spacing:.3px}.ch-lang button.on{background:var(--gold);color:#0e0d0c}.ch-wrap[dir=ltr],.ch-pick[dir=ltr]{--f-body:-apple-system,BlinkMacSystemFont,'Trebuchet MS',Roboto,Ubuntu,'Segoe UI',sans-serif;font-family:var(--f-body)}.ch-fullb{flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:36px;min-height:34px;padding:0;background:var(--surface);border:1px solid var(--border);color:var(--text2);border-radius:9px;cursor:pointer}.ch-fullb svg{width:17px;height:17px}.ch-fullb.on{border-color:var(--gold-dim);color:var(--gold);background:rgba(200,168,75,.1)}html.ch-max,html.ch-max body{overflow:hidden}html.ch-max .chart-screen.active{position:fixed;inset:0;z-index:150;height:100dvh;max-width:none;margin:0;background:var(--bg);padding:calc(var(--safe-top,0px) + 8px) max(8px,env(safe-area-inset-right)) calc(var(--safe-bottom,0px) + 2px) max(8px,env(safe-area-inset-left))}html.ch-max .chart-screen .mkt-tabs{display:none}@media(orientation:landscape) and (max-height:520px){html.ch-max .ch-main{flex-direction:row}html.ch-max .ch-tb{order:0;flex-direction:column;align-items:center;width:46px;gap:2px;overflow-y:auto;overflow-x:hidden;padding:2px 0;-webkit-mask-image:none;mask-image:none}html.ch-max .ch-tool{width:40px;height:34px;background:none;border-color:transparent;border-radius:8px}html.ch-max .ch-sep{flex:0 0 1px;align-self:stretch;height:1px;margin:3px 7px}html.ch-max .ch-foot{display:none}html.ch-max .ch-wrap{gap:5px}}@media(min-width:900px){html.ch-max .chart-screen.active{padding:10px 14px 4px}}@media(max-width:600px){.ch-lang button{padding:4px 6px;min-width:32px}}@media(max-width:380px){.ch-bar{gap:6px}.ch-tfs{gap:3px}.ch-tfs button{font-size:11px;padding:6px 1px}}.ch-indr{display:flex;align-items:center;gap:2px}.ch-indr .ch-indi{flex:1;min-width:0}.ch-indi small{margin-inline-start:auto;font:500 10.5px var(--f-mono);color:var(--muted);padding-inline-start:10px}.ch-indg{flex:0 0 auto;width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:none;border:0;border-radius:9px;color:var(--muted);cursor:pointer}.ch-indg:hover,.ch-indg:focus-visible{color:var(--text);background:rgba(255,255,255,.05)}.ch-indg svg{width:17px;height:17px}.ch-sdef{margin-inline-end:auto}.ch-merr{color:var(--red);font-size:12px;margin-top:6px}.ch-merr[hidden]{display:none}`;
  function injectCss() { if (document.getElementById('ch-css')) return; const st = document.createElement('style'); st.id = 'ch-css'; st.textContent = CHART_CSS; document.head.appendChild(st); }
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
    for (const id of ['ch-hint', 'ch-sel', 'ch-fly', 'ch-pop', 'ch-ctx', 'ch-tree', 'ch-indm', 'ch-modal']) $(id)?.setAttribute('dir', d);
    const al = (id, v) => $(id)?.setAttribute('aria-label', v);
    al('ch-coinb', tr('انتخابِ نماد و منبع', 'Symbol search')); al('ch-srcs', tr('منبعِ داده', 'Data source')); al('ch-tfs', tr('تایم‌فریم', 'Time interval'));
    al('ch-tools', tr('ابزارهای رسم', 'Drawing tools')); al('ch-lang', tr('زبانِ نمودار', 'Chart language'));
    const il = $('ch-indl'); if (il) il.textContent = tr('اندیکاتور', 'Indicators');
    document.querySelectorAll('#ch-lang button').forEach(b => { const on = b.dataset.l === S.lang; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    paintTools(); paintSel(); paintTree(); paintInd(); paintHead(); paintMax();
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
    src: setSrc, tf: setTf, coin: setCoin, pick, lang: setLang, max: on => setMax(on), maxExit: () => setMax(false), isMax: () => S.max,
    indMenu: () => { const m = $('ch-indm'); if (!m) return; m.hidden = !m.hidden; paintInd(); },
    ind: toggleIndicator, indSet: openIndSettings,
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
