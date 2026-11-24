/* SamadiCapital Journal — نمودار و تحلیل (v26.37، فاز ۱؛ درخواستِ مالک ۱۴۰۵/۰۹/۰۳)
   نمودارِ کندلیِ زنده با ابزارهای اصلیِ رسم، روی داده‌ی Hyperliquid، SoDEX و Bybit (جای بایننس)، با ذخیره‌ی
   خودکارِ تحلیلِ هر نفر برای هر نماد روی سرور (کلیدِ sc_chart_<uid>؛ یکی روی همه‌ی دستگاه‌ها).
   موتورِ نمودار: KLineChart 9.8.12 (Apache-2.0، klinecharts.min.js کنارِ همین فایل؛ NOTICE در همان سر).
   فقط وقتی بارگذاری می‌شود که صفحه‌ی «نمودار» باز شود. از index.html این‌ها را برمی‌دارد:
   apiFetch, esc, SESSION, L, showToast, uiConfirm, closeSheet, coinLogo, jsArg.
   نکته‌ی مهم: KLineChart برای نقطه‌ای که بیرون از کندل‌هاست (آینده‌ی سمتِ راست یا پیش از تاریخچه) زمان ندارد
   و بعد از بارگذاریِ دوباره آن را روی آخرین کندل می‌خواباند؛ patchTimeScale آن را با طولِ تایم‌فریم امتداد می‌دهد
   تا هدفِ آینده و شکلِ قدیمی دقیقاً همان‌جا بمانند. */
(function () {
  'use strict';
  const SOURCES = [{ id: 'hl', name: 'Hyperliquid' }, { id: 'sodex', name: 'SoDEX' }, { id: 'bybit', name: 'Bybit' }];
  const TFS = [
    { id: '1m', l: '1m', ms: 6e4, poll: 4000 }, { id: '5m', l: '5m', ms: 3e5, poll: 5000 }, { id: '15m', l: '15m', ms: 9e5, poll: 8000 },
    { id: '1h', l: '1H', ms: 36e5, poll: 10000 }, { id: '4h', l: '4H', ms: 144e5, poll: 15000 }, { id: '1d', l: '1D', ms: 864e5, poll: 30000 }
  ];
  const GOLD = '#C8A84B', UP = '#22C97A', DOWN = '#E8505B';
  const COLORS = [GOLD, UP, DOWN, '#3B82F6', '#8B5CF6', '#EFEAE3'];
  const POPULAR = ['BTC', 'ETH', 'SOL', 'HYPE', 'XRP', 'BNB', 'DOGE', 'SUI', 'LINK', 'AVAX'];
  const MAX_DRAWINGS = 200, BARS = 400;
  // کمترین تعدادِ نقطه برای هر شکلِ کامل — شکلِ نیمه‌کاره (هنوز در حالِ رسم) هرگز ذخیره یا بازسازی نمی‌شود
  const MIN_PTS = { segment: 2, rayLine: 2, straightLine: 2, horizontalStraightLine: 1, horizontalRayLine: 1, verticalStraightLine: 1,
    parallelStraightLine: 3, priceChannelLine: 3, priceLine: 1, scFib: 2, scRect: 2, scLong: 2, scShort: 2, scText: 1 };
  const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const TOOLS = [
    { id: 'cursor', t: 'انتخاب و جابه‌جایی', i: svg('<path d="M5 3l13 8.5-5.6 1.4L9.6 19z"/>') },
    { id: 'segment', t: 'خط روند', i: svg('<path d="M5.5 18.5L18.5 5.5"/><circle cx="5" cy="19" r="1.6"/><circle cx="19" cy="5" r="1.6"/>') },
    { id: 'rayLine', t: 'ری', i: svg('<path d="M5.5 18.5L21 3"/><circle cx="5" cy="19" r="1.6"/>') },
    { id: 'straightLine', t: 'خط ممتد', i: svg('<path d="M2 22L22 2"/>') },
    { id: 'horizontalStraightLine', t: 'خط افقی (حمایت/مقاومت)', i: svg('<path d="M2 12h20"/>') },
    { id: 'horizontalRayLine', t: 'ری افقی', i: svg('<path d="M6.5 12H22"/><circle cx="5" cy="12" r="1.6"/>') },
    { id: 'verticalStraightLine', t: 'خط عمودی', i: svg('<path d="M12 2v20"/>') },
    { id: 'parallelStraightLine', t: 'کانال', i: svg('<path d="M3 15L15 3M9 21L21 9"/>') },
    { id: 'scRect', t: 'ناحیه (عرضه/تقاضا)', i: svg('<rect x="4" y="6" width="16" height="12" rx="1.5"/>') },
    { id: 'scFib', t: 'فیبوناچی اصلاحی', i: svg('<path d="M4 5h16M4 9.5h16M4 13.5h16M4 19h16"/>') },
    { id: 'scLong', t: 'پوزیشنِ خرید (لانگ)', i: svg('<path d="M5 20V12h14v8"/><path d="M5 12V5h14v7" stroke-dasharray="2 2"/><path d="M12 9V4M9.5 6.5L12 4l2.5 2.5"/>'), cls: 'up' },
    { id: 'scShort', t: 'پوزیشنِ فروش (شورت)', i: svg('<path d="M5 4v8h14V4"/><path d="M5 12v7h14v-7" stroke-dasharray="2 2"/><path d="M12 15v5M9.5 17.5L12 20l2.5-2.5"/>'), cls: 'down' },
    { id: 'scText', t: 'متن', i: svg('<path d="M5 6.5V4.5h14v2M12 4.5v15M9 19.5h6"/>') }
  ];
  const ICON = {
    magnet: svg('<path d="M6 4v8a6 6 0 0 0 12 0V4h-4v8a2 2 0 0 1-4 0V4z"/><path d="M6 8h4M14 8h4"/>'),
    undo: svg('<path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>'),
    eye: svg('<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
    eyeOff: svg('<path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.6C3.7 8.3 2 12 2 12s3.6 7 10 7a9.6 9.6 0 0 0 5.4-1.6"/>'),
    trash: svg('<path d="M4 7h16M9 7V4h6v3M6.5 7l1 13h9l1-13"/>'),
    clear: svg('<path d="M4 7h16M9 7V4h6v3M6.5 7l1 13h9l1-13M10 11l4 4M14 11l-4 4"/>'),
    ind: svg('<path d="M3 17l5-6 4 3 6-8 3 3"/>'),
    chev: svg('<path d="M6 9l6 6 6-6"/>')
  };
  const INDICATORS = [
    { id: 'VOL', t: 'حجم', main: false }, { id: 'MA', t: 'میانگینِ متحرک (MA)', main: true }, { id: 'EMA', t: 'میانگینِ نمایی (EMA)', main: true },
    { id: 'BOLL', t: 'باندِ بولینگر', main: true }, { id: 'RSI', t: 'RSI', main: false }, { id: 'MACD', t: 'MACD', main: false }
  ];

  const S = {
    chart: null, root: null, src: 'hl', coin: 'BTC', tf: '1h', data: [], more: true, poll: null, pollBusy: false,
    tool: 'cursor', recs: new Map(), selected: null, drawingId: null, hidden: false, magnet: true, hist: [], store: null, rev: null,
    loadedStore: false, saveTimer: null, saving: false, saveAgain: false, panes: {}, symbols: {}, gen: 0, msgTimer: null
  };
  const readOnly = () => !!SESSION?.isViewOnly;
  const storeKey = () => 'sc_chart_' + (SESSION?.uid || 'guest');
  const cacheKey = () => 'sc_chart_cache_' + (SESSION?.uid || 'guest');
  const tfOf = id => TFS.find(t => t.id === id) || TFS[3];
  const isNum = v => typeof v === 'number' && Number.isFinite(v);
  const $ = id => document.getElementById(id);
  const hexA = (hex, a) => { const n = parseInt(String(hex).slice(1), 16); return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`; };
  function precisionOf(p) { p = Math.abs(+p) || 0; return p >= 1000 ? 1 : p >= 100 ? 2 : p >= 1 ? 3 : p >= 0.1 ? 4 : p >= 0.01 ? 5 : p >= 0.0001 ? 6 : 8; }
  const fmtP = v => { if (!isNum(v)) return '—'; const d = precisionOf(v); return v.toLocaleString('en-US', { minimumFractionDigits: Math.min(d, 2), maximumFractionDigits: d }); };
  const pct = (a, b) => (b - a) / a * 100;
  const newId = () => 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const colorOf = o => o?.styles?.line?.color || GOLD;

  // ── قالب‌های شکل‌های اختصاصی ──
  let registered = false;
  function registerOverlays() {
    if (registered) return; registered = true;
    const kc = window.klinecharts;
    const tx = (x, y, text, color, o = {}) => ({ type: 'text', ignoreEvent: true, attrs: { x, y, text, align: o.align || 'left', baseline: o.baseline || 'middle' },
      styles: { style: 'fill', color: o.fg || '#0e0d0c', size: 11, family: 'JetBrains Mono, Estedad, monospace', weight: 600, backgroundColor: color,
        borderColor: color, borderSize: 0, borderRadius: 3, paddingLeft: 5, paddingRight: 5, paddingTop: 3, paddingBottom: 3 } });
    kc.registerOverlay({
      name: 'scRect', totalStep: 3, needDefaultPointFigure: true, needDefaultXAxisFigure: true, needDefaultYAxisFigure: true,
      createPointFigures: ({ coordinates, overlay }) => {
        if (coordinates.length < 2) return [];
        const [a, b] = coordinates, c = colorOf(overlay);
        return [{ type: 'polygon', attrs: { coordinates: [a, { x: b.x, y: a.y }, b, { x: a.x, y: b.y }] },
          styles: { style: 'stroke_fill', color: hexA(c, 0.13), borderColor: c, borderSize: 1 } }];
      }
    });
    // فیبوناچی: سطحِ ۱ روی نقطه‌ی اول، ۰ روی نقطه‌ی دوم (مثلِ TradingView)؛ از نقطه‌ی چپ تا لبه‌ی راست
    const FIB = [[0, '#8a8274'], [0.236, '#E8505B'], [0.382, '#F59E0B'], [0.5, '#22C97A'], [0.618, '#3B82F6'], [0.786, '#8B5CF6'], [1, '#8a8274']];
    kc.registerOverlay({
      name: 'scFib', totalStep: 3, needDefaultPointFigure: true, needDefaultXAxisFigure: true, needDefaultYAxisFigure: true,
      createPointFigures: ({ coordinates, overlay, bounding }) => {
        const p = overlay.points;
        if (coordinates.length < 2 || !isNum(p[0]?.value) || !isNum(p[1]?.value)) return [];
        const [a, b] = coordinates, x0 = Math.min(a.x, b.x), x1 = bounding.width;
        const out = [{ type: 'line', attrs: { coordinates: [a, b] }, styles: { style: 'dashed', color: 'rgba(200,168,75,.5)', size: 1, dashedValue: [4, 4] } }];
        const yAt = lv => b.y + (a.y - b.y) * lv, vAt = lv => p[1].value + (p[0].value - p[1].value) * lv;
        out.push({ type: 'polygon', ignoreEvent: true, attrs: { coordinates: [{ x: x0, y: yAt(0.5) }, { x: x1, y: yAt(0.5) }, { x: x1, y: yAt(0.618) }, { x: x0, y: yAt(0.618) }] },
          styles: { style: 'fill', color: 'rgba(34,201,122,.07)' } });
        for (const [lv, c] of FIB) {
          const y = yAt(lv);
          out.push({ type: 'line', attrs: { coordinates: [{ x: x0, y }, { x: x1, y }] }, styles: { color: c, size: 1 } });
          out.push({ type: 'text', ignoreEvent: true, attrs: { x: x0 + 4, y: y - 2, text: `${lv} (${fmtP(vAt(lv))})`, align: 'left', baseline: 'bottom' },
            styles: { color: c, size: 11, family: 'JetBrains Mono, monospace', backgroundColor: 'transparent', borderSize: 0, paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 } });
        }
        return out;
      }
    });
    // پوزیشن: نقطه‌ها = [ورود، هدف، حد ضرر]؛ با دو کلیک ساخته می‌شود و حد ضرر نصفِ فاصله‌ی هدف (R:R ۲) پیشنهاد می‌شود
    const position = long => ({
      name: long ? 'scLong' : 'scShort', totalStep: 3, needDefaultPointFigure: true, needDefaultXAxisFigure: false, needDefaultYAxisFigure: true,
      createPointFigures: ({ coordinates, overlay }) => {
        const p = overlay.points;
        if (coordinates.length < 2 || !isNum(p[0]?.value) || !isNum(p[1]?.value)) return [];
        const e = coordinates[0], t = coordinates[1], ev = p[0].value, tv = p[1].value;
        const sv = isNum(p[2]?.value) ? p[2].value : ev - (tv - ev) / 2;
        const sy = coordinates[2] ? coordinates[2].y : e.y - (t.y - e.y) / 2;
        const xa = Math.min(e.x, t.x), xb = Math.max(e.x, t.x, xa + 24), mid = (xa + xb) / 2;
        const box = (y1, y2, c) => ({ type: 'polygon', attrs: { coordinates: [{ x: xa, y: y1 }, { x: xb, y: y1 }, { x: xb, y: y2 }, { x: xa, y: y2 }] },
          styles: { style: 'stroke_fill', color: hexA(c, 0.16), borderColor: hexA(c, 0.55), borderSize: 1 } });
        const gain = long ? pct(ev, tv) : -pct(ev, tv), loss = long ? pct(ev, sv) : -pct(ev, sv);
        const rr = Math.abs(ev - sv) > 0 ? Math.abs(tv - ev) / Math.abs(ev - sv) : null;
        const sg = v => (v >= 0 ? '+' : '−') + Math.abs(v).toFixed(2) + '%';
        return [
          box(e.y, t.y, UP), box(e.y, sy, DOWN),
          { type: 'line', attrs: { coordinates: [{ x: xa, y: e.y }, { x: xb, y: e.y }] }, styles: { color: '#EFEAE3', size: 1 } },
          tx(mid, t.y + (t.y < e.y ? -12 : 12), `TP ${fmtP(tv)} (${sg(gain)})`, UP, { align: 'center' }),
          tx(mid, sy + (sy > e.y ? 12 : -12), `SL ${fmtP(sv)} (${sg(loss)})`, DOWN, { align: 'center', fg: '#fff' }),
          tx(mid, e.y, `${long ? 'LONG' : 'SHORT'} ${fmtP(ev)}${rr ? '  ·  R:R ' + rr.toFixed(2) : ''}`, '#2a2621', { align: 'center', fg: '#EFEAE3' })
        ];
      },
      // حد ضرر همیشه هم‌ستونِ هدف می‌ماند؛ کشیدنِ هر دسته فقط قیمتِ خودش را عوض می‌کند
      performEventPressedMove: ({ points, performPointIndex }) => {
        if (points.length > 2 && (performPointIndex === 1 || performPointIndex === 2)) {
          points[2].timestamp = points[1].timestamp; points[2].dataIndex = points[1].dataIndex;
        }
      }
    });
    kc.registerOverlay(position(true)); kc.registerOverlay(position(false));
    kc.registerOverlay({
      name: 'scText', totalStep: 2, needDefaultPointFigure: true, needDefaultXAxisFigure: false, needDefaultYAxisFigure: false,
      createPointFigures: ({ coordinates, overlay }) => {
        if (!coordinates.length) return [];
        const c = colorOf(overlay), text = String(overlay.extendData?.text || '…');
        return [{ type: 'text', attrs: { x: coordinates[0].x, y: coordinates[0].y, text, align: 'left', baseline: 'bottom' },
          styles: { style: 'stroke_fill', color: c, size: 13, family: 'Estedad, system-ui, sans-serif', weight: 600, backgroundColor: 'rgba(14,13,12,.82)',
            borderColor: hexA(c, 0.6), borderSize: 1, borderRadius: 5, paddingLeft: 7, paddingRight: 7, paddingTop: 4, paddingBottom: 4 } }];
      }
    });
  }

  // زمان ⇄ جایگاه، بیرون از محدوده‌ی کندل‌ها هم (با طولِ تایم‌فریم) — یک بار روی prototype
  let patched = false;
  function patchTimeScale(chart) {
    if (patched) return;
    const ts = chart.getChartStore?.()?.getTimeScaleStore?.();
    if (!ts) return;
    const proto = Object.getPrototypeOf(ts), t2i = proto.timestampToDataIndex, i2t = proto.dataIndexToTimestamp;
    if (typeof t2i !== 'function' || typeof i2t !== 'function') return;
    patched = true;
    proto.timestampToDataIndex = function (t) {
      const list = this._chartStore?.getDataList?.() || [], n = list.length, step = tfOf(S.tf).ms;
      if (n && isNum(t)) {
        if (t > list[n - 1].timestamp) return n - 1 + Math.round((t - list[n - 1].timestamp) / step);
        if (t < list[0].timestamp) return Math.round((t - list[0].timestamp) / step);
      }
      return t2i.call(this, t);
    };
    proto.dataIndexToTimestamp = function (i) {
      const list = this._chartStore?.getDataList?.() || [], n = list.length, step = tfOf(S.tf).ms;
      if (n && isNum(i)) {
        if (i > n - 1) return list[n - 1].timestamp + (i - (n - 1)) * step;
        if (i < 0) return list[0].timestamp + i * step;
      }
      return i2t.call(this, i);
    };
  }

  // ── ظاهر: همان پالتِ ژورنال ──
  const MONO = 'JetBrains Mono, Estedad, monospace', TXT = '#8a8274', LINE = '#2a2621';
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
    overlay: {
      point: { color: GOLD, borderColor: 'rgba(200,168,75,.35)', activeColor: GOLD, activeBorderColor: 'rgba(200,168,75,.35)', radius: 5, activeRadius: 7, activeBorderSize: 4 },
      line: { color: GOLD, size: 1.6 },
      text: { color: '#0e0d0c', backgroundColor: GOLD, borderColor: GOLD, family: MONO, size: 11 },
      rect: { color: 'rgba(200,168,75,.13)', borderColor: GOLD },
      polygon: { color: 'rgba(200,168,75,.13)', borderColor: GOLD }
    }
  };
  const styleFor = c => ({ line: { color: c || GOLD }, point: { color: c || GOLD, activeColor: c || GOLD, borderColor: hexA(c || GOLD, 0.35), activeBorderColor: hexA(c || GOLD, 0.35) },
    text: { backgroundColor: c || GOLD, borderColor: c || GOLD } });

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
    stopPoll(); msg('در حالِ بارگذاری…', 'load');
    const res = await fetchCandles();
    if (gen !== S.gen) return;                                   // در این فاصله نماد/تایم‌فریم عوض شد
    if (!res.ok) {
      S.data = []; S.chart.clearData();
      msg(res.status === 404 ? `${S.coin} در ${srcName()} پیدا نشد — منبعِ دیگری را امتحان کن.` : res.err === 'offline'
        ? 'اینترنت در دسترس نیست. با اتصال دوباره، نمودار بارگذاری می‌شود.' : `${srcName()} الان پاسخ نمی‌دهد — منبعِ دیگری را امتحان کن.`, 'err');
      paintHead(); return;
    }
    S.data = res.list; S.more = res.more;
    // «اخیر» فقط نمادی که واقعاً داده داشت
    if (S.store) S.store.recent = [S.coin, ...(S.store.recent || []).filter(x => x !== S.coin)].slice(0, 10);
    const last = S.data[S.data.length - 1];
    S.chart.setPriceVolumePrecision(precisionOf(last?.close), 2);
    S.chart.applyNewData(S.data, S.more);
    msg('');
    restoreDrawings();
    paintHead();
    startPoll();
  }
  // تاریخچه‌ی عقب‌تر وقتی به اولِ نمودار رسیدی
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
  function emptyStore() { return { v: 1, last: { src: S.src, coin: S.coin, tf: S.tf }, prefs: { ind: ['VOL'], magnet: true }, layouts: {} }; }
  async function loadStore() {
    S.store = L.g(cacheKey()) || null;
    const r = await apiFetch('/api/kv/' + storeKey(), {}, { retries: 1 });
    if (r && r.ok) {
      const d = await r.json().catch(() => ({}));
      S.rev = d.revision || null;
      if (d.value && typeof d.value === 'object') S.store = S.store ? merge(S.store, d.value) : d.value;
      S.loadedStore = true;
    }
    if (!S.store) S.store = emptyStore();
    S.store.layouts = S.store.layouts || {}; S.store.prefs = S.store.prefs || { ind: ['VOL'], magnet: true };
  }
  // دو دستگاه: برای هر نماد، تازه‌ترین (u) می‌ماند
  function merge(local, server) {
    const out = { ...server, layouts: { ...(server.layouts || {}) } };
    for (const [coin, lay] of Object.entries(local.layouts || {}))
      if (!out.layouts[coin] || (+lay.u || 0) > (+out.layouts[coin].u || 0)) out.layouts[coin] = lay;
    out.last = local.last || server.last; out.prefs = local.prefs || server.prefs;
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
        if (r.status === 409 && d.value) { S.store = merge(S.store, d.value); S.rev = d.revision || null; continue; }
        if (r.status === 413 || r.status === 422) { status('full'); return; }
        status('local'); return;
      }
    } finally {
      S.saving = false;
      if (S.saveAgain) { S.saveAgain = false; save(); }
    }
  }
  function status(k) {
    const el = $('ch-save'); if (!el) return;
    if (readOnly()) { el.textContent = 'فقط‌خواندنی (نمای ناظر)'; el.className = 'ch-save'; return; }
    const m = { saving: ['در حالِ ذخیره…', ''], saved: ['✓ ذخیره شد', 'ok'], local: ['روی همین دستگاه ذخیره شد — با اتصال همگام می‌شود', 'warn'],
      full: ['حجمِ تحلیل‌ها از سقف گذشت — چند شکلِ قدیمی را پاک کن', 'warn'] }[k] || ['', ''];
    el.textContent = m[0]; el.className = 'ch-save ' + m[1];
  }

  // ── شکل‌ها ──
  function lastIdx() { return S.data.length - 1; }
  function tsOfPoint(pt) {
    if (isNum(pt.timestamp)) return pt.timestamp;
    if (isNum(pt.dataIndex) && S.data.length) {
      const n = lastIdx(), step = tfOf(S.tf).ms;
      if (pt.dataIndex > n) return S.data[n].timestamp + (pt.dataIndex - n) * step;
      if (pt.dataIndex < 0) return S.data[0].timestamp + pt.dataIndex * step;
      return S.data[pt.dataIndex]?.timestamp ?? null;
    }
    return null;
  }
  function serialize() {
    const d = [];
    for (const [id, meta] of S.recs) {
      if (id === S.drawingId) continue;
      const o = S.chart.getOverlayById(id);
      if (!o) { S.recs.delete(id); continue; }
      const p = (o.points || []).map(pt => [tsOfPoint(pt), pt.value]).filter(([t, v]) => isNum(t) && isNum(v)).map(([t, v]) => [Math.round(t), +(+v).toPrecision(10)]);
      if (p.length < (MIN_PTS[meta.n] || 1)) continue;
      const rec = { id, n: meta.n, p };
      if (meta.x) rec.x = meta.x;
      if (meta.c && meta.c !== GOLD) rec.c = meta.c;
      d.push(rec);
    }
    return d;
  }
  function commit({ history = true } = {}) {
    if (readOnly() || !S.store) return;
    const prev = S.store.layouts[S.coin]?.d || [];
    const d = serialize();
    if (JSON.stringify(prev) === JSON.stringify(d)) return;
    if (history) { S.hist.push(prev); if (S.hist.length > 40) S.hist.shift(); }
    S.store.layouts[S.coin] = { d, u: Date.now() };
    paintTools(); scheduleSave();
  }
  function callbacks() {
    return {
      onDrawEnd: e => { onDrawn(e.overlay); return false; },
      onPressedMoveEnd: () => { commit(); return false; },
      onSelected: e => { select(e.overlay.id); return false; },
      onDeselected: e => { if (S.selected === e.overlay.id) select(null); return false; },
      onDoubleClick: e => { if (e.overlay.name === 'scText') editText(e.overlay.id); return false; }
    };
  }
  function makeOverlay(rec, drawing) {
    const o = { id: rec.id, name: rec.n, mode: S.magnet ? 'weak_magnet' : 'normal', modeSensitivity: 10, visible: !S.hidden, lock: readOnly(),
      extendData: rec.x || null, styles: styleFor(rec.c), ...callbacks() };
    if (!drawing) o.points = rec.p.map(([t, v]) => ({ timestamp: t, value: v }));
    const id = S.chart.createOverlay(o);
    if (id) S.recs.set(id, { n: rec.n, x: rec.x || null, c: rec.c || null });
    return id;
  }
  function clearOverlays() { for (const id of S.recs.keys()) S.chart.removeOverlay(id); S.recs.clear(); if (S.drawingId) S.chart.removeOverlay(S.drawingId); S.drawingId = null; select(null); }
  function restoreDrawings() {
    clearOverlays();
    for (const rec of S.store?.layouts?.[S.coin]?.d || []) if (Array.isArray(rec?.p) && rec.p.length >= (MIN_PTS[rec.n] || 1)) makeOverlay(rec, false);
    paintTools();
  }
  function startTool(id) {
    if (readOnly()) return;
    if (S.drawingId) { S.chart.removeOverlay(S.drawingId); S.recs.delete(S.drawingId); S.drawingId = null; }
    S.tool = id; paintTools();
    if (id === 'cursor') return;
    if (S.recs.size >= MAX_DRAWINGS) { showToast(`حداکثر ${MAX_DRAWINGS} شکل برای هر نماد — چند تا را پاک کن`); S.tool = 'cursor'; paintTools(); return; }
    if (S.hidden) toggleHidden();
    S.drawingId = makeOverlay({ id: newId(), n: id, p: [] }, true);
    hint(id);
  }
  function onDrawn(o) {
    S.drawingId = null; S.tool = 'cursor'; hint(null);
    if (o.name === 'scLong' || o.name === 'scShort') {
      const [e, t] = o.points;
      if (e && t && isNum(e.value) && isNum(t.value)) S.chart.overrideOverlay({ id: o.id, points: [e, t, { timestamp: t.timestamp, dataIndex: t.dataIndex, value: e.value - (t.value - e.value) / 2 }] });
    }
    if (o.name === 'scText') { editText(o.id, true); paintTools(); return; }
    commit(); paintTools();
  }
  function select(id) {
    S.selected = id;
    const bar = $('ch-sel'); if (!bar) return;
    if (!id || readOnly()) { bar.hidden = true; return; }
    const meta = S.recs.get(id), cur = meta?.c || GOLD;
    bar.innerHTML = COLORS.map(c => `<button type="button" class="ch-dot${c === cur ? ' on' : ''}" style="--c:${c}" onclick="SCCHART.color('${c}')" aria-label="رنگ"></button>`).join('')
      + (meta?.n === 'scText' ? `<button type="button" class="ch-selb" onclick="SCCHART.editText()">متن</button>` : '')
      + `<button type="button" class="ch-selb del" onclick="SCCHART.removeSelected()" aria-label="حذفِ شکل">${ICON.trash}<span>حذف</span></button>`;
    bar.hidden = false;
  }
  function setColor(c) {
    const id = S.selected, meta = S.recs.get(id); if (!meta || !COLORS.includes(c)) return;
    meta.c = c; S.chart.overrideOverlay({ id, styles: styleFor(c) }); select(id); commit();
  }
  function removeSelected() {
    const id = S.selected; if (!id) return;
    S.chart.removeOverlay(id); S.recs.delete(id); select(null); commit();
  }
  async function clearAll() {
    if (!S.recs.size) return;
    if (!await uiConfirm(`همه‌ی ${S.recs.size.toLocaleString('fa-IR')} شکلِ ${S.coin} پاک شود؟\n\nبا «برگرداندن» می‌شود پس گرفت.`)) return;
    clearOverlays(); commit();
  }
  function undo() {
    if (!S.hist.length || readOnly()) return;
    const prev = S.hist.pop();
    S.store.layouts[S.coin] = { d: prev, u: Date.now() };
    restoreDrawings(); scheduleSave();
  }
  function toggleHidden() {
    S.hidden = !S.hidden;
    for (const id of S.recs.keys()) S.chart.overrideOverlay({ id, visible: !S.hidden });
    paintTools();
  }
  function toggleMagnet() {
    S.magnet = !S.magnet; S.store.prefs.magnet = S.magnet;
    for (const id of S.recs.keys()) S.chart.overrideOverlay({ id, mode: S.magnet ? 'weak_magnet' : 'normal' });
    paintTools(); scheduleSave();
    showToast(S.magnet ? 'آهنربا روشن: نقطه‌ها به سقف/کف/باز/بسته‌ی کندل می‌چسبند' : 'آهنربا خاموش');
  }
  // متن: برگه‌ی کوچکِ خودِ نمودار (نه prompt مرورگر)
  function editText(id, fresh) {
    id = id || S.selected; const meta = S.recs.get(id); if (!meta || readOnly()) return;
    const box = $('ch-modal'); if (!box) return;
    box.innerHTML = `<div class="ch-mcard" role="dialog" aria-label="متن روی نمودار"><label class="fl" for="ch-txt">متن روی نمودار</label>
      <textarea id="ch-txt" class="fi" rows="2" maxlength="120" placeholder="مثلاً: شکستِ مقاومت با حجم">${esc(meta.x?.text || '')}</textarea>
      <div class="ch-mrow"><button type="button" class="btn btn-ghost" id="ch-tno">انصراف</button><button type="button" class="btn btn-primary" id="ch-tok">ثبت</button></div></div>`;
    box.hidden = false;
    const ta = $('ch-txt'); setTimeout(() => ta?.focus(), 30);
    const close = ok => {
      const v = String(ta.value || '').trim().slice(0, 120);
      box.hidden = true; box.innerHTML = '';
      if (ok && v) { meta.x = { text: v }; S.chart.overrideOverlay({ id, extendData: meta.x }); commit(); }
      else if (fresh && !meta.x?.text) { S.chart.removeOverlay(id); S.recs.delete(id); select(null); }
    };
    $('ch-tok').onclick = () => close(true); $('ch-tno').onclick = () => close(false);
    ta.onkeydown = ev => { if (ev.key === 'Enter' && !ev.shiftKey) { ev.preventDefault(); close(true); } if (ev.key === 'Escape') close(false); };
  }

  // ── اندیکاتورها ──
  function applyIndicators() {
    for (const [name, pane] of Object.entries(S.panes)) S.chart.removeIndicator(pane, name);
    S.panes = {};
    for (const name of S.store.prefs.ind || []) {
      const def = INDICATORS.find(x => x.id === name); if (!def) continue;
      const pane = def.main ? S.chart.createIndicator(name, true, { id: 'candle_pane' }) : S.chart.createIndicator(name, false, { height: 90 });
      S.panes[name] = def.main ? 'candle_pane' : pane;
    }
  }
  function toggleIndicator(name) {
    const set = new Set(S.store.prefs.ind || []);
    set.has(name) ? set.delete(name) : set.add(name);
    S.store.prefs.ind = [...set]; applyIndicators(); paintInd(); scheduleSave();
  }
  function paintInd() {
    const box = $('ch-indm'); if (!box || box.hidden) return;
    const on = new Set(S.store.prefs.ind || []);
    box.innerHTML = INDICATORS.map(x => `<button type="button" class="ch-indi${on.has(x.id) ? ' on' : ''}" onclick="SCCHART.ind('${x.id}')" aria-pressed="${on.has(x.id)}"><i></i>${esc(x.t)}</button>`).join('');
  }

  // ── رابط ──
  const srcName = () => SOURCES.find(s => s.id === S.src)?.name || S.src;
  function msg(text, kind) {
    const el = $('ch-msg'); if (!el) return;
    el.textContent = text || ''; el.className = 'ch-msg' + (kind ? ' ' + kind : ''); el.hidden = !text;
  }
  function hint(tool) {
    const el = $('ch-hint'); if (!el) return;
    const t = { scLong: 'روی ورود بزن، بعد روی هدف — حد ضرر خودش پیشنهاد می‌شود و قابلِ کشیدن است', scShort: 'روی ورود بزن، بعد روی هدف — حد ضرر خودش پیشنهاد می‌شود و قابلِ کشیدن است',
      scText: 'جای متن را روی نمودار بزن', horizontalStraightLine: 'روی قیمتِ مورد نظر بزن', horizontalRayLine: 'روی نقطه‌ی شروع بزن', verticalStraightLine: 'روی زمانِ مورد نظر بزن',
      parallelStraightLine: 'دو نقطه‌ی خط، بعد پهنای کانال', scFib: 'از سقف تا کف (یا برعکس) دو نقطه بزن' }[tool] || (tool ? 'نقطه‌ی اول را بزن، بعد نقطه‌ی دوم' : '');
    el.textContent = t; el.hidden = !t;
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
    const info = $('ch-srcinfo'); if (info) info.textContent = `داده: ${srcName()}${S.src === 'bybit' ? ' (به‌جای بایننس)' : ''} · زمانِ تهران`;
  }
  function paintTools() {
    const box = $('ch-tools'); if (!box) return;
    const ro = readOnly(), sel = S.tool || 'cursor';
    box.innerHTML = (ro ? '' : TOOLS.map(t => `<button type="button" class="ch-tool${t.cls ? ' ' + t.cls : ''}${sel === t.id ? ' on' : ''}" title="${esc(t.t)}" aria-label="${esc(t.t)}" aria-pressed="${sel === t.id}" onclick="SCCHART.tool('${t.id}')">${t.i}</button>`).join('')
      + '<span class="ch-sep"></span>'
      + `<button type="button" class="ch-tool${S.magnet ? ' on' : ''}" title="آهنربا (چسبیدن به کندل)" aria-label="آهنربا" aria-pressed="${S.magnet}" onclick="SCCHART.magnet()">${ICON.magnet}</button>`
      + `<button type="button" class="ch-tool" title="برگرداندن" aria-label="برگرداندن" onclick="SCCHART.undo()"${S.hist.length ? '' : ' disabled'}>${ICON.undo}</button>`)
      + `<button type="button" class="ch-tool${S.hidden ? ' on' : ''}" title="${S.hidden ? 'نمایشِ شکل‌ها' : 'پنهان کردنِ شکل‌ها'}" aria-label="پنهان/نمایشِ شکل‌ها" aria-pressed="${S.hidden}" onclick="SCCHART.hide()">${S.hidden ? ICON.eyeOff : ICON.eye}</button>`
      + (ro ? '' : `<button type="button" class="ch-tool" title="پاک کردنِ همه‌ی شکل‌های این نماد" aria-label="پاک کردنِ همه" onclick="SCCHART.clear()"${S.recs.size ? '' : ' disabled'}>${ICON.clear}</button>`);
  }
  function shell() {
    return `<div class="ch-wrap">
      <div class="ch-head">
        <button type="button" class="ch-coin" onclick="SCCHART.pick()" aria-label="انتخابِ نماد و منبع"><span id="ch-logo">${typeof coinLogo === 'function' ? coinLogo(S.coin) : ''}</span><span class="ch-cname"><span class="ch-cl" dir="ltr"><b id="ch-coinname">${esc(S.coin)}</b><small id="ch-quote"></small></span><small class="ch-csrc" id="ch-csrc"></small></span>${ICON.chev}</button>
        <div class="ch-px" dir="ltr"><b id="ch-last">—</b><span id="ch-chg" class="ch-chg"></span></div>
        <div class="ch-srcs" id="ch-srcs" role="group" aria-label="منبعِ داده">${SOURCES.map(s => `<button type="button" data-src="${s.id}" onclick="SCCHART.src('${s.id}')">${s.name}</button>`).join('')}</div>
      </div>
      <div class="ch-bar">
        <div class="ch-tfs" id="ch-tfs" role="group" aria-label="تایم‌فریم" dir="ltr">${TFS.map(t => `<button type="button" data-tf="${t.id}" onclick="SCCHART.tf('${t.id}')">${t.l}</button>`).join('')}</div>
        <button type="button" class="ch-indb" onclick="SCCHART.indMenu()" aria-haspopup="true">${ICON.ind}<span>اندیکاتور</span></button>
      </div>
      <div class="ch-body">
        <div class="ch-tools" id="ch-tools" role="toolbar" aria-label="ابزارهای رسم"></div>
        <div class="ch-stage">
          <div class="ch-canvas" id="ch-canvas" dir="ltr"></div>
          <div class="ch-msg" id="ch-msg" hidden></div>
          <div class="ch-hint" id="ch-hint" hidden></div>
          <div class="ch-sel" id="ch-sel" hidden></div>
          <div class="ch-indm" id="ch-indm" hidden></div>
          <div class="ch-modal" id="ch-modal" hidden></div>
        </div>
      </div>
      <div class="ch-foot"><span id="ch-save" class="ch-save"></span><span id="ch-srcinfo"></span></div>
    </div>`;
  }

  // ── انتخابگرِ نماد (برگه‌ی پایین) ──
  async function symbolsOf(src) {
    if (S.symbols[src]) return S.symbols[src];
    const r = await apiFetch('/api/chart/symbols?src=' + src, {}, { retries: 1 });
    const d = r && r.ok ? await r.json().catch(() => ({})) : {};
    return (S.symbols[src] = Array.isArray(d.symbols) ? d.symbols : []);
  }
  async function pick() {
    const recent = (S.store?.recent || []).filter(c => c !== S.coin).slice(0, 8);
    const chip = c => `<button type="button" class="ch-pchip" onclick="SCCHART.coin('${jsArg(c)}')">${typeof coinLogo === 'function' ? coinLogo(c) : ''}<span dir="ltr">${esc(c)}</span></button>`;
    $('det-content').innerHTML = `<div class="ch-pick"><h3>انتخابِ نماد و منبع</h3>
      <div class="ch-psrc" role="group" aria-label="منبعِ داده">${SOURCES.map(s => `<button type="button" class="${s.id === S.src ? 'on' : ''}" aria-pressed="${s.id === S.src}" onclick="SCCHART.src('${s.id}');SCCHART.pick()">${s.name}</button>`).join('')}</div>
      <input id="ch-psearch" class="fi" dir="ltr" placeholder="جست‌وجو: BTC، ETH، SOL…" autocomplete="off" autocapitalize="characters">
      ${recent.length ? `<div class="ch-plab">اخیر</div><div class="ch-pchips">${recent.map(chip).join('')}</div>` : ''}
      <div class="ch-plab">پرطرفدار</div><div class="ch-pchips">${POPULAR.map(chip).join('')}</div>
      <div class="ch-plab" id="ch-plabel">همه‌ی نمادها</div><div class="ch-plist" id="ch-plist"><div class="ch-pempty">در حالِ بارگذاری…</div></div></div>`;
    document.getElementById('det-sheet').classList.add('open');
    const all = await symbolsOf(S.src), list = $('ch-plist'), input = $('ch-psearch');
    const draw = () => {
      const q = String(input.value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      let items = all.filter(s => !q || s.includes(q)).slice(0, 120);
      if (q && !items.includes(q) && /^[A-Z0-9]{1,15}$/.test(q)) items = [q, ...items];
      list.innerHTML = items.length ? items.map(chip).join('') : `<div class="ch-pempty">نمادی پیدا نشد</div>`;
    };
    input.oninput = draw; draw();
    input.onkeydown = ev => { if (ev.key === 'Enter') { const q = String(input.value || '').toUpperCase().replace(/[^A-Z0-9]/g, ''); if (q) setCoin(q); } };
  }
  function setCoin(c) {
    c = String(c || '').toUpperCase(); if (!/^[A-Z0-9]{1,15}$/.test(c)) return;
    if (typeof closeSheet === 'function') closeSheet();
    if (c === S.coin) return;
    S.coin = c; S.hist = [];
    remember(); const logo = $('ch-logo'); if (logo && typeof coinLogo === 'function') logo.innerHTML = coinLogo(c);
    loadSeries();
  }
  function setSrc(src) { if (!SOURCES.some(s => s.id === src) || src === S.src) return; S.src = src; remember(); loadSeries(); }
  function setTf(tf) { if (!TFS.some(t => t.id === tf) || tf === S.tf) return; S.tf = tf; remember(); loadSeries(); }
  function remember() { if (!S.store) return; S.store.last = { src: S.src, coin: S.coin, tf: S.tf }; if (!readOnly()) { L.s(cacheKey(), S.store); clearTimeout(S.saveTimer); S.saveTimer = setTimeout(save, 2500); } }

  function onKey(ev) {
    if (!$('screen-chart')?.classList.contains('active') || /INPUT|TEXTAREA|SELECT/.test(ev.target?.tagName || '')) return;
    if ((ev.key === 'Delete' || ev.key === 'Backspace') && S.selected) { ev.preventDefault(); removeSelected(); }
    else if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === 'z') { ev.preventDefault(); undo(); }
    else if (ev.key === 'Escape') { if (S.drawingId) startTool('cursor'); else if (S.selected) select(null); }
  }

  async function mount(el) {
    const kc = window.klinecharts;
    if (!kc) throw new Error('klinecharts_missing');
    registerOverlays();
    if (S.chart && S.root === el && el.querySelector('.ch-wrap')) { show(); return; }
    S.root = el;
    await loadStore();
    const last = S.store.last || {};
    if (SOURCES.some(s => s.id === last.src)) S.src = last.src;
    if (/^[A-Z0-9]{1,15}$/.test(last.coin || '')) S.coin = last.coin;
    if (TFS.some(t => t.id === last.tf)) S.tf = last.tf;
    S.magnet = S.store.prefs.magnet !== false;
    el.innerHTML = shell();
    paintTools(); status(S.loadedStore ? 'saved' : 'local'); if (!S.loadedStore && !L.g(cacheKey())) $('ch-save').textContent = '';
    // گوشی: جعبه‌ی قیمت (OHLC) فقط وقتی انگشت/نشانگر روی نمودار است — بالای نمودار را نمی‌پوشاند
    const phone = window.matchMedia('(max-width: 600px)').matches;
    S.chart = kc.init($('ch-canvas'), { locale: 'en-US', timezone: 'Asia/Tehran', styles: phone ? { ...STYLES, candle: { ...STYLES.candle, tooltip: { ...STYLES.candle.tooltip, showRule: 'follow_cross' } },
      indicator: { tooltip: { ...STYLES.indicator.tooltip, showRule: 'follow_cross' } } } : STYLES });
    patchTimeScale(S.chart);
    S.chart.setLoadDataCallback(onLoadData);
    S.chart.setOffsetRightDistance(48);
    applyIndicators();
    if ('ResizeObserver' in window) new ResizeObserver(() => S.chart && S.chart.resize()).observe($('ch-canvas'));
    document.addEventListener('keydown', onKey);
    document.addEventListener('visibilitychange', () => { if (!document.hidden && $('screen-chart')?.classList.contains('active')) startPoll(); });
    window.addEventListener('online', () => { if (S.store && !readOnly()) save(); });
    await loadSeries();
  }
  function show() { if (S.chart) { S.chart.resize(); if (S.data.length) startPoll(); else loadSeries(); } }
  function hide() { stopPoll(); }

  window.SCCHART = {
    mount, show, hideScreen: hide,
    tool: startTool, magnet: toggleMagnet, undo, hide: toggleHidden, clear: clearAll, removeSelected, color: setColor, editText: () => editText(),
    src: setSrc, tf: setTf, coin: setCoin, pick,
    indMenu: () => { const m = $('ch-indm'); if (!m) return; m.hidden = !m.hidden; paintInd(); },
    ind: toggleIndicator,
    // برای تست
    _s: S, _merge: merge, _precisionOf: precisionOf, _validTools: () => TOOLS.filter(t => t.id !== 'cursor').map(t => t.id)
  };
})();
