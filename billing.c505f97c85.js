/* SamadiCapital Journal — اشتراک (v25.0)
   فقط وقتی لازم است بارگذاری می‌شود: عضوِ غیر CIP، صفحه‌ی ثبت‌نام، و تب «اشتراک» مالک.
   از index.html این‌ها را برمی‌دارد: apiFetch, esc, faNum, showToast, _ltr, setToken, startSession,
   L, SESSION, isMember, nav, renderStudentDashboard, closeSheet, loadQR.
   جدول قیمت: ساختار «Pricing Table» از 21st.dev (kokonutd) — انتخاب دوره، کارت‌های قابل‌انتخاب با
   قیمتِ متحرک، ماتریس مقایسه با ستونِ برجسته — به‌علاوه‌ی برچسب تخفیفِ نوار دوره (Dub.co). */
(function () {
  'use strict';
  const TERMS = [1, 3, 6, 12];
  const TERM_FA = { 1: '۱ ماه', 3: '۳ ماه', 6: '۶ ماه', 12: '۱۲ ماه' };
  const st = { me: null, term: 12, plan: null, inv: null, poll: null, clock: null, signup: null, suPoll: null,
               admin: null, tab: 'overview', memQ: '', invFilter: 'open', openMem: null };

  // ── قالب‌بندی ──
  const n2 = v => String(Math.round(Number(v) * 1000) / 1000);
  const usdt = v => `<bdi dir="ltr" class="bl-num">${n2(v)} USDT</bdi>`;
  const pct = v => faNum(Math.round(v)) + '٪';
  const faDate = iso => {
    if (!iso) return '—';
    try { return new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Tehran' }).format(new Date(iso)); }
    catch (_) { return String(iso).slice(0, 10); }
  };
  const faTime = iso => { try { return new Intl.DateTimeFormat('fa-IR', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tehran' }).format(new Date(iso)); } catch (_) { return ''; } };
  const shortAddr = a => a ? a.slice(0, 8) + '…' + a.slice(-6) : '';
  const discount = (p, t) => { const m = p.prices[1]; return m && t > 1 && p.prices[t] ? Math.max(0, (1 - p.prices[t] / (m * t)) * 100) : 0; };
  async function jfetch(path, opts) {
    const r = await apiFetch(path, opts);
    if (!r) return { ok: false, status: 0, body: { error: 'offline' } };
    return { ok: r.ok, status: r.status, body: await r.json().catch(() => ({})) };
  }
  function copy(text, label) {
    const done = () => showToast('📋 ' + (label || 'کپی شد'));
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(done, () => fallback());
    else fallback();
    function fallback() { const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done(); } catch (_) {} t.remove(); }
  }
  async function qrSvg(text) {
    try { const QR = await loadQR(); return await new Promise(res => QR.toString(text, { type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: { dark: '#191714', light: '#ffffff' } }, (e, s) => res(e ? '' : s))); }
    catch (_) { return ''; }
  }

  // ── امکانات برای ماتریس مقایسه ──
  // v25.4: ردیف‌های جدول مقایسه از پنل مالک (items هر پلن)؛ هشدار و مربی از خود پلن
  const featureRows = cat => [
    ...(cat[0]?.items || []).map((f, i) => [esc(f.label), p => !!p.items?.[i]?.on]),
    ['هشدار قیمت (تلگرام، گوشی، داخل برنامه)', p => p.alerts ? faNum(p.alerts) + ' هشدار' : false],
    ['تحلیلگر خودکار عملکرد', p => !!p.ai]
  ];

  // ══════════ استایل ══════════
  const css = `
  .bl-num{font-family:var(--f-mono);unicode-bidi:isolate}
  .bl-ov{position:fixed;inset:0;z-index:900;background:rgba(9,8,7,.86);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);overflow-y:auto;overscroll-behavior:contain}
  .bl-sheet{max-width:760px;margin:0 auto;padding:18px 16px calc(120px + var(--safe-bottom,0px));min-height:100%}
  .bl-top{display:flex;align-items:center;gap:10px;margin-bottom:14px}
  .bl-top h2{flex:1;margin:0;font-family:var(--f-display);font-size:20px;font-weight:900;color:var(--gold-light)}
  .bl-x{width:40px;height:40px;border-radius:12px;border:1px solid var(--border2);background:var(--surface);color:var(--text2);font-size:18px;cursor:pointer}
  .bl-back{background:none;border:0;color:var(--gold-light);font:inherit;font-size:12px;cursor:pointer;padding:6px 0}
  .bl-status{border-radius:14px;padding:11px 13px;margin-bottom:14px;font-size:12px;line-height:1.9;border:1px solid var(--border2);background:var(--surface);color:var(--text2)}
  .bl-status b{color:var(--text)}
  .bl-status.warn{border-color:rgba(232,80,91,.35);background:rgba(232,80,91,.07)}
  .bl-status.ok{border-color:rgba(34,201,122,.3);background:rgba(34,201,122,.06)}
  .bl-terms{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;padding:4px;border-radius:14px;background:#110f0d;border:1px solid var(--border);margin-bottom:14px}
  .bl-terms button{position:relative;min-height:46px;border:0;border-radius:10px;background:transparent;color:var(--muted);font:inherit;font-size:12.5px;font-weight:700;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}
  .bl-terms button.on{background:rgba(200,168,75,.15);color:var(--gold-light);box-shadow:inset 0 0 0 1px rgba(200,168,75,.5)}
  .bl-terms small{font-size:9.5px;font-weight:700;color:var(--green);background:rgba(34,201,122,.12);padding:1px 7px;border-radius:99px}
  .bl-plans{display:grid;gap:10px;margin-bottom:14px}
  @media(min-width:700px){.bl-plans{grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}}
  .bl-plan{position:relative;text-align:right;padding:15px 15px 14px;border-radius:16px;border:1px solid var(--border2);background:linear-gradient(160deg,rgba(255,255,255,.03),rgba(255,255,255,.008));color:var(--text);font:inherit;cursor:pointer;transition:border-color .18s,box-shadow .18s,transform .12s}
  .bl-plan:active{transform:scale(.99)}
  .bl-plan.on{border-color:var(--gold);box-shadow:0 0 0 2px rgba(200,168,75,.55),0 14px 34px -18px rgba(200,168,75,.5)}
  .bl-plan[disabled]{opacity:.45;cursor:not-allowed}
  .bl-ph{display:flex;align-items:center;gap:8px;margin-bottom:3px}
  .bl-ph b{font-size:15px}
  .bl-badge{font-size:9.5px;font-weight:800;padding:2px 9px;border-radius:99px;background:rgba(200,168,75,.16);color:var(--gold-light);border:1px solid rgba(200,168,75,.4)}
  .bl-badge.vip{background:rgba(155,120,255,.15);color:#c9b6ff;border-color:rgba(155,120,255,.4)}
  .bl-radio{margin-inline-start:auto;width:18px;height:18px;border-radius:50%;border:2px solid var(--border2);flex:none}
  .bl-plan.on .bl-radio{border-color:var(--gold);background:radial-gradient(circle,var(--gold) 45%,transparent 50%)}
  .bl-tag{font-size:11px;color:var(--muted);line-height:1.8;min-height:20px}
  .bl-price{display:flex;align-items:baseline;gap:6px;margin:10px 0 2px;direction:ltr;justify-content:flex-end}
  .bl-price b{font-family:var(--f-mono);font-size:30px;font-weight:800;letter-spacing:-1px;color:var(--text)}
  .bl-price span{font-size:12px;color:var(--muted);font-family:var(--f-mono)}
  .bl-per{font-size:11px;color:var(--text2);min-height:18px}
  .bl-per s{color:var(--muted);margin-inline:4px}
  .bl-per em{font-style:normal;color:var(--green);font-weight:800}
  .bl-pf{display:flex;flex-wrap:wrap;gap:5px;margin-top:10px}
  .bl-pf span{font-size:10.5px;padding:3px 9px;border-radius:99px;background:var(--surface);border:1px solid var(--border);color:var(--text2)}
  .bl-pf span.off{opacity:.5;text-decoration:line-through}
  .bl-pf span.dim{opacity:.55}
  #su-panel a.btn{text-decoration:none}
  .bl-cmpw{border:1px solid var(--border);border-radius:14px;overflow-x:auto;margin-bottom:12px}
  .bl-cmp{width:100%;border-collapse:collapse;font-size:11.5px;min-width:340px}
  .bl-cmp th,.bl-cmp td{padding:10px 8px;border-bottom:1px solid var(--border);text-align:center}
  .bl-cmp th{font-size:11px;color:var(--text2);background:rgba(255,255,255,.02)}
  .bl-cmp td:first-child,.bl-cmp th:first-child{text-align:right;color:var(--text2);width:46%}
  .bl-cmp .sel{background:rgba(200,168,75,.08);color:var(--gold-light);font-weight:700}
  .bl-cmp .yes{color:var(--green);font-weight:800}
  .bl-cmp .no{color:var(--muted)}
  .bl-cmp tr:last-child td{border-bottom:0}
  .bl-note{font-size:10.5px;color:var(--muted);line-height:1.9;text-align:center;margin:6px 4px 0}
  .bl-cta{position:fixed;inset-inline:0;bottom:0;z-index:5;padding:10px 16px calc(12px + var(--safe-bottom,0px));background:linear-gradient(0deg,rgba(11,10,9,.98) 70%,transparent)}
  .bl-cta .btn{max-width:728px;margin:0 auto;display:flex;min-height:52px;font-size:14.5px;font-weight:800}
  .bl-box{border:1px solid var(--border2);border-radius:16px;padding:14px;background:var(--surface);margin-bottom:12px}
  .bl-lbl{font-size:11px;color:var(--muted);margin-bottom:6px}
  .bl-amtrow{display:flex;align-items:center;gap:10px}
  .bl-amtrow b{flex:1;font-family:var(--f-mono);font-size:26px;font-weight:800;color:var(--gold-light);direction:ltr;text-align:left}
  .bl-copy{min-height:38px;padding:0 14px;border-radius:10px;border:1px solid rgba(200,168,75,.5);background:rgba(200,168,75,.1);color:var(--gold-light);font:inherit;font-size:12px;font-weight:700;cursor:pointer}
  .bl-hint{font-size:11px;color:var(--text2);line-height:1.9;margin-top:8px}
  .bl-net{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px;font-size:11.5px}
  .bl-net b{padding:4px 11px;border-radius:99px;background:rgba(240,185,11,.14);color:#f3c643;border:1px solid rgba(240,185,11,.4)}
  .bl-net span{color:#ffb0b0}
  .bl-addr{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:center}
  .bl-qr{width:128px;height:128px;border-radius:12px;background:#fff;padding:6px}
  .bl-qr svg{width:100%;height:100%;display:block}
  .bl-addr code{display:block;font-family:var(--f-mono);font-size:11.5px;line-height:1.7;word-break:break-all;direction:ltr;text-align:left;color:var(--text);margin-bottom:8px}
  @media(max-width:380px){.bl-addr{grid-template-columns:1fr}.bl-qr{margin:0 auto}}
  .bl-live{display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:14px;border:1px solid var(--border2);margin-bottom:12px;font-size:12px;color:var(--text2)}
  .bl-dot{width:10px;height:10px;border-radius:50%;background:var(--gold);box-shadow:0 0 0 0 rgba(200,168,75,.6);animation:blPulse 1.6s infinite;flex:none}
  @keyframes blPulse{0%{box-shadow:0 0 0 0 rgba(200,168,75,.55)}70%{box-shadow:0 0 0 10px rgba(200,168,75,0)}100%{box-shadow:0 0 0 0 rgba(200,168,75,0)}}
  .bl-live .t{margin-inline-start:auto;font-family:var(--f-mono);color:var(--muted)}
  .bl-steps{margin:0;padding-inline-start:18px;font-size:11.5px;color:var(--text2);line-height:2.1}
  .bl-tx{display:flex;gap:8px;margin-top:10px}
  .bl-tx input{flex:1;direction:ltr;font-family:var(--f-mono);font-size:12px}
  .bl-msg{font-size:11.5px;line-height:1.9;margin-top:8px;padding:9px 11px;border-radius:10px;display:none}
  .bl-msg.show{display:block}
  .bl-msg.bad{background:rgba(232,80,91,.08);border:1px solid rgba(232,80,91,.3);color:#ffb0b0}
  .bl-msg.info{background:rgba(96,140,255,.08);border:1px solid rgba(96,140,255,.28);color:var(--text2)}
  .bl-done{text-align:center;padding:40px 10px}
  .bl-done .ic{width:78px;height:78px;margin:0 auto 16px;border-radius:50%;display:grid;place-items:center;font-size:38px;background:rgba(34,201,122,.12);border:1px solid rgba(34,201,122,.4)}
  .bl-done h3{font-family:var(--f-display);font-size:22px;color:var(--green);margin:0 0 8px}
  .bl-done p{font-size:12.5px;color:var(--text2);line-height:2}
  .bill-card{display:flex;align-items:center;gap:12px;padding:13px 14px;border-radius:16px;border:1px solid rgba(200,168,75,.34);background:linear-gradient(135deg,rgba(200,168,75,.12),rgba(200,168,75,.02) 70%);margin-bottom:12px}
  .bill-card.warn{border-color:rgba(232,80,91,.4);background:linear-gradient(135deg,rgba(232,80,91,.12),rgba(232,80,91,.02) 70%)}
  .bill-card .ic{font-size:22px}
  .bill-card .tx{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
  .bill-card .tx b{font-size:13px;color:var(--text)}
  .bill-card .tx span{font-size:11px;color:var(--text2);line-height:1.7}
  .bill-card .btn{width:auto;margin:0;min-height:40px;padding:0 14px;font-size:12px}
  .bl-lock{text-align:center;padding:26px 16px;border:1px dashed rgba(200,168,75,.4);border-radius:18px;margin:12px 0}
  .bl-lock h3{margin:6px 0 6px;font-size:16px;color:var(--gold-light)}
  .bl-lock p{font-size:12px;color:var(--text2);line-height:2;margin:0 0 14px}
  .bl-lock .btn{width:auto;display:inline-flex;padding:0 20px}
  /* ثبت‌نام */
  .su-link{text-align:center;margin-top:14px;font-size:12px;color:var(--text2)}
  .su-link button{background:none;border:0;color:var(--gold-light);font:inherit;font-weight:800;cursor:pointer;text-decoration:underline;text-underline-offset:4px}
  .su-steps{list-style:none;margin:6px 0 12px;padding:0;display:grid;gap:8px}
  .su-steps li{display:flex;gap:10px;align-items:flex-start;font-size:12px;color:var(--text2);line-height:1.8}
  .su-steps i{font-style:normal;width:22px;height:22px;flex:none;border-radius:7px;display:grid;place-items:center;font-size:11px;font-weight:800;background:rgba(200,168,75,.14);color:var(--gold);border:1px solid rgba(200,168,75,.35)}
  .su-state{display:flex;align-items:center;gap:10px;padding:11px 12px;border-radius:12px;border:1px solid var(--border2);font-size:12px;color:var(--text2);margin-top:12px;line-height:1.8}
  .su-state.bad{border-color:rgba(232,80,91,.4);color:#ffb0b0}
  .su-qr{display:none;margin:12px auto 0;width:150px;height:150px;background:#fff;border-radius:12px;padding:6px}
  .su-qr svg{width:100%;height:100%}
  @media(min-width:760px){.su-qr{display:block}}
  /* پنل مالک */
  .ab-tabs{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;margin-bottom:12px}
  .ab-tabs::-webkit-scrollbar{display:none}
  .ab-tabs button{flex:0 0 auto;min-height:36px;padding:0 14px;border-radius:99px;border:1px solid var(--border2);background:var(--surface);color:var(--text2);font:inherit;font-size:12px;font-weight:700;cursor:pointer}
  .ab-tabs button.on{background:rgba(200,168,75,.15);border-color:rgba(200,168,75,.5);color:var(--gold-light)}
  .ab-tabs button em{font-style:normal;margin-inline-start:5px;padding:0 6px;border-radius:99px;background:var(--red);color:#fff;font-size:10px}
  .ab-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px}
  .ab-kpis div{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:10px}
  .ab-kpis small{display:block;font-size:10px;color:var(--muted)}
  .ab-kpis b{display:block;font-family:var(--f-mono);font-size:19px;margin-top:3px}
  .ab-check{display:grid;gap:6px;margin-bottom:12px}
  .ab-check div{display:flex;align-items:center;gap:9px;font-size:12px;color:var(--text2);padding:9px 11px;border-radius:10px;border:1px solid var(--border)}
  .ab-check .ok b{color:var(--green)} .ab-check .no b{color:var(--red)}
  .ab-row{border:1px solid var(--border);border-radius:13px;margin-bottom:8px;background:rgba(255,255,255,.015)}
  .ab-rh{display:flex;align-items:center;gap:10px;padding:11px 12px;cursor:pointer}
  .ab-rh .who{flex:1;min-width:0}
  .ab-rh .who b{display:block;font-size:13px}
  .ab-rh .who span{display:block;font-size:10.5px;color:var(--muted);font-family:var(--f-mono)}
  .ab-chip{font-size:10px;font-weight:800;padding:3px 9px;border-radius:99px;border:1px solid var(--border2);color:var(--text2);white-space:nowrap}
  .ab-chip.g{color:var(--green);border-color:rgba(34,201,122,.4)} .ab-chip.r{color:var(--red);border-color:rgba(232,80,91,.4)}
  .ab-chip.y{color:#f3c643;border-color:rgba(240,185,11,.4)} .ab-chip.v{color:#c9b6ff;border-color:rgba(155,120,255,.4)}
  .ab-rb{padding:0 12px 12px;display:none}
  .ab-row.open .ab-rb{display:block}
  .ab-act{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
  .ab-act .btn,.ab-act select,.ab-act input{width:auto;min-height:36px;margin:0;font-size:12px}
  .ab-act input{width:80px}
  .ab-meta{font-size:11px;color:var(--text2);line-height:1.9}
  .ab-plan{border:1px solid var(--border2);border-radius:14px;padding:12px;margin-bottom:10px}
  .ab-feats{border:1px dashed var(--border2);border-radius:14px;padding:12px;margin-bottom:10px}
  .ab-fl{font-weight:800;font-size:13px;margin-bottom:4px}
  .ab-feat{border-top:1px solid var(--border);padding:10px 0}
  .ab-feat:first-of-type{border-top:0}
  .ab-fh{display:flex;gap:6px;align-items:center}
  .ab-fh .fi{flex:1;min-width:0}
  .ab-fh .icon-btn:disabled{opacity:.35}
  .ab-en{margin-top:6px;font-size:12px}
  .ab-feats>.btn{margin-top:8px}
  .ab-plan .fgrid{grid-template-columns:1fr 1fr}
  .ab-prices{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
  .ab-prices input{direction:ltr;text-align:center;font-family:var(--f-mono)}
  .ab-tg{display:flex;flex-wrap:wrap;gap:12px;margin-top:10px;font-size:12px;color:var(--text2)}
  .ab-tg label{display:flex;align-items:center;gap:6px;cursor:pointer}
  .ab-disc{font-size:10.5px;color:var(--green);margin-top:6px;line-height:1.8}
  .ab-search{margin-bottom:10px}
  `;
  const styleEl = document.createElement('style'); styleEl.textContent = css; document.head.appendChild(styleEl);

  // ══════════ وضعیت عضو ══════════
  async function refresh() {
    const r = await jfetch('/api/billing/me');
    if (!r.ok || !r.body?.member) return null;
    st.me = r.body;
    applyGates();
    fillCard();
    const q = new URLSearchParams(location.search);
    if (q.get('open') === 'billing') { q.delete('open'); history.replaceState(null, '', location.pathname + (q.toString() ? '?' + q : '')); openPlans(); }
    return st.me;
  }
  const active = () => !!st.me?.subscription?.active && !st.me?.blocked;
  function applyGates() {
    if (!isMember()) return;
    const ai = document.getElementById('nav-ai');
    if (ai) ai.style.display = st.me?.subscription?.ai ? '' : 'none';
  }

  function cardHTML() {
    const me = st.me; if (!me) return '';
    const s = me.subscription || {};
    if (me.invoice?.status === 'review') return card('🔎', 'پرداخت در حال بررسی', 'واریزت رسید و برای تأیید نهایی به مدیر فرستاده شد.', 'جزئیات', 'BILLING.openInvoice()');
    if (me.invoice?.status === 'pending') return card('⏳', `صورت‌حساب باز: ${usdt(me.invoice.amount)}`, 'واریز که برسد خودکار تأیید می‌شود.', 'ادامه‌ی پرداخت', 'BILLING.openInvoice()');
    if (s.active && s.trial) return card('🎁', `دوره‌ی رایگان، ${faNum(s.daysLeft)} روز مانده`, `پلن «${esc(s.planName)}» تا ${faDate(s.endsAt)}`, 'انتخاب پلن', 'BILLING.openPlans()');
    if (s.active) return card('💎', `پلن ${esc(s.planName)}، ${faNum(s.daysLeft)} روز مانده`, `فعال تا ${faDate(s.endsAt)}`, 'تمدید یا ارتقا', 'BILLING.openPlans()', s.daysLeft <= 3 ? 'warn' : '');
    return card('⛔', 'اشتراک ژورنال فعال نیست', 'تریدهایت محفوظ است و می‌بینی‌شان؛ برای ثبت ترید تازه اشتراک را فعال کن.', 'انتخاب پلن', 'BILLING.openPlans()', 'warn');
  }
  const card = (ic, title, sub, cta, fn, cls = '') =>
    `<div class="bill-card ${cls}"><span class="ic">${ic}</span><div class="tx"><b>${title}</b><span>${sub}</span></div><button class="btn btn-primary" onclick="${fn}">${cta}</button></div>`;
  function fillCard() { const el = document.getElementById('bill-card'); if (el) el.innerHTML = cardHTML(); }

  function alertsLock() {
    const s = st.me?.subscription;
    if (!st.me) { refresh().then(() => { if (typeof renderPriceAlerts === 'function') renderPriceAlerts(); }); return '<div class="bl-lock"><p>در حال بررسی اشتراک…</p></div>'; }
    if (s?.active && !s.alerts) return `<div class="bl-lock"><div style="font-size:30px">🔔</div><h3>هشدار قیمت در پلن «${esc(s.planName)}» نیست</h3>
      <p>پلن پایه ${faNum(10)} هشدار و پلن حرفه‌ای ${faNum(30)} هشدار دارد — تلگرام، گوشی و داخل برنامه.</p>
      <button class="btn btn-primary" onclick="BILLING.openPlans()">مشاهده‌ی پلن‌ها</button></div>`;
    return `<div class="bl-lock"><div style="font-size:30px">🔔</div><h3>اشتراک فعال نیست</h3>
      <p>با فعال‌کردن یک پلن، هشدارهای قیمت روشن می‌شوند.</p><button class="btn btn-primary" onclick="BILLING.openPlans()">انتخاب پلن</button></div>`;
  }

  // ══════════ جدول قیمت ══════════
  function overlay(html) {
    let ov = document.getElementById('bl-ov');
    if (!ov) { ov = document.createElement('div'); ov.id = 'bl-ov'; ov.className = 'bl-ov'; document.body.appendChild(ov); }
    ov.innerHTML = `<div class="bl-sheet">${html}</div>`;
    ov.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    return ov;
  }
  function close() {
    stopPoll();
    const ov = document.getElementById('bl-ov'); if (ov) ov.remove();
    document.body.style.overflow = '';
    fillCard();
  }
  function stopPoll() { clearInterval(st.poll); clearInterval(st.clock); st.poll = st.clock = null; }

  async function openPlans(reason) {
    if (!st.me) await refresh();
    if (!st.me) { showToast('اتصال به سرور برقرار نشد'); return; }
    stopPoll();
    const cat = st.me.catalog || [];
    if (!st.plan || !cat.some(p => p.id === st.plan)) st.plan = (cat.find(p => p.audience === 'vip') || cat.find(p => p.featured) || cat[0] || {}).id;
    const plan = cat.find(p => p.id === st.plan);
    if (plan && !plan.prices[st.term]) st.term = [12, 6, 3, 1].find(t => plan.prices[t]) || 1;
    renderPlans(reason);
  }
  function renderPlans(reason) {
    const me = st.me, cat = me.catalog || [], s = me.subscription || {};
    const terms = TERMS.filter(t => cat.some(p => p.prices[t]));
    const best = t => Math.max(0, ...cat.map(p => discount(p, t)));
    const status = reason === 'write' ? `<div class="bl-status warn">⛔ <b>برای ثبت ترید تازه اشتراک لازم است.</b> تریدهای قبلی‌ات سر جایش است و دیده می‌شود.</div>`
      : s.active && s.trial ? `<div class="bl-status ok">🎁 <b>دوره‌ی رایگان</b> — ${faNum(s.daysLeft)} روز مانده (پلن ${esc(s.planName)})</div>`
      : s.active ? `<div class="bl-status ok">💎 <b>پلن ${esc(s.planName)}</b> تا ${faDate(s.endsAt)} فعال است. خرید تازه ${'از انتهای همین دوره'} ادامه پیدا می‌کند؛ تغییر پلن، روزهای باقی‌مانده را به نسبت قیمت نگه می‌دارد.</div>`
      : `<div class="bl-status warn">⛔ <b>اشتراک فعال نیست.</b> تریدهایت محفوظ است؛ برای ثبت ترید تازه یک پلن انتخاب کن.</div>`;
    const planBtn = p => {
      const price = p.prices[st.term], d = discount(p, st.term), m = p.prices[1];
      const per = !price ? 'این مدت برای این پلن نیست'
        : st.term === 1 ? 'ماهانه — هر وقت خواستی تمدید کن'
        : `ماهی ${usdt(Math.round(price / st.term * 100) / 100)}${m ? `<s><bdi dir="ltr">${n2(m * st.term)}</bdi></s>` : ''}${d >= 1 ? ` <em>${pct(d)} صرفه‌جویی</em>` : ''}`;
      return `<button type="button" class="bl-plan ${p.id === st.plan ? 'on' : ''}" ${price ? '' : 'disabled'} onclick="BILLING.pick('${p.id}')" aria-pressed="${p.id === st.plan}">
        <div class="bl-ph"><b>${esc(p.name)}</b>${p.audience === 'vip' ? '<span class="bl-badge vip">ویژه‌ی دانشجو</span>' : p.featured ? '<span class="bl-badge">محبوب‌ترین</span>' : ''}<span class="bl-radio"></span></div>
        <div class="bl-tag">${esc(p.tagline || '')}</div>
        <div class="bl-price"><b data-v="${price || 0}">${price ? n2(price) : '—'}</b><span>USDT</span></div>
        <div class="bl-per">${per}</div>
        <div class="bl-pf"><span class="${p.alerts ? '' : 'dim'}">${p.alerts ? '🔔 ' + faNum(p.alerts) + ' هشدار' : '🔕 بدون هشدار'}</span><span class="${p.ai ? '' : 'off'}">📊 تحلیلگر خودکار</span>${(p.bullets || []).map(b => `<span>${esc(b)}</span>`).join('')}</div>
      </button>`;
    };
    const sel = cat.find(p => p.id === st.plan);
    const cmp = `<div class="bl-cmpw"><table class="bl-cmp"><thead><tr><th>امکانات</th>${cat.map(p => `<th class="${p.id === st.plan ? 'sel' : ''}">${esc(p.name)}</th>`).join('')}</tr></thead>
      <tbody>${featureRows(cat).map(([label, fn]) => `<tr><td>${label}</td>${cat.map(p => { const v = fn(p); return `<td class="${p.id === st.plan ? 'sel ' : ''}${v ? 'yes' : 'no'}">${v === true ? '✓' : v || '—'}</td>`; }).join('')}</tr>`).join('')}</tbody></table></div>`;
    const price = sel?.prices[st.term];
    overlay(`
      <div class="bl-top"><h2>اشتراک ژورنال</h2><button class="bl-x" onclick="BILLING.close()" aria-label="بستن">✕</button></div>
      ${status}
      <div class="bl-terms" role="tablist">${terms.map(t => `<button type="button" class="${t === st.term ? 'on' : ''}" onclick="BILLING.term(${t})">${TERM_FA[t]}${best(t) >= 1 ? `<small>−${pct(best(t))}</small>` : ''}</button>`).join('')}</div>
      <div class="bl-plans">${cat.map(planBtn).join('')}</div>
      ${cmp}
      <div class="bl-note">پرداخت با تتر (USDT) روی شبکه‌ی BEP20 — تأیید خودکار، بدون کارت بانکی.<br>ژورنال‌های خارجیِ مشابه معمولاً ماهی ۳۰ دلار به بالا هستند.</div>
      <div class="bl-cta"><button class="btn btn-primary" ${price ? '' : 'disabled'} onclick="BILLING.checkout()">${price ? `پرداخت ${usdt(price)} — ${esc(sel.name)}، ${TERM_FA[st.term]}` : 'یک پلن و مدت انتخاب کن'}</button></div>`);
  }
  // قیمتِ متحرک هنگام عوض‌شدن دوره (همان حس NumberFlowِ 21st.dev)
  function animatePrices(before) {
    document.querySelectorAll('#bl-ov .bl-price b[data-v]').forEach((b, i) => {
      const to = Number(b.dataset.v), from = before[i];
      if (!to || !from || from === to) return;
      const t0 = performance.now(), dur = 380;
      const step = now => { const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3); b.textContent = n2(from + (to - from) * e); if (k < 1) requestAnimationFrame(step); else b.textContent = n2(to); };
      requestAnimationFrame(step);
    });
  }
  function setTerm(t) {
    const before = [...document.querySelectorAll('#bl-ov .bl-price b[data-v]')].map(b => Number(b.dataset.v));
    st.term = t;
    const plan = st.me.catalog.find(p => p.id === st.plan);
    if (plan && !plan.prices[t]) st.plan = (st.me.catalog.find(p => p.prices[t] && p.featured) || st.me.catalog.find(p => p.prices[t]) || {}).id;
    const y = document.getElementById('bl-ov')?.scrollTop || 0;
    renderPlans(); document.getElementById('bl-ov').scrollTop = y;
    animatePrices(before);
  }
  function pick(id) { st.plan = id; const y = document.getElementById('bl-ov')?.scrollTop || 0; renderPlans(); document.getElementById('bl-ov').scrollTop = y; }

  async function checkout() {
    const btn = document.querySelector('#bl-ov .bl-cta .btn'); if (btn) { btn.disabled = true; btn.textContent = 'در حال ساخت صورت‌حساب…'; }
    const r = await jfetch('/api/billing/invoices', { method: 'POST', body: JSON.stringify({ planId: st.plan, term: st.term }) });
    if (!r.ok) {
      showToast(r.body?.error === 'payment_not_configured' ? 'پرداخت هنوز راه‌اندازی نشده؛ با پشتیبانی تماس بگیر' : 'ساخت صورت‌حساب انجام نشد؛ دوباره تلاش کن');
      renderPlans(); return;
    }
    st.me.invoice = r.body.invoice;
    renderInvoice(r.body.invoice);
  }

  // ══════════ صورت‌حساب ══════════
  async function openInvoice() {
    if (!st.me) await refresh();
    if (st.me?.invoice) renderInvoice(st.me.invoice); else openPlans();
  }
  async function renderInvoice(inv) {
    stopPoll();
    st.inv = inv;
    const plan = (st.me.catalog || []).find(p => p.id === inv.planId);
    const review = inv.status === 'review';
    overlay(`
      <div class="bl-top"><button class="bl-back" onclick="BILLING.openPlans()">→ تغییر پلن</button><h2 style="text-align:center">پرداخت</h2><button class="bl-x" onclick="BILLING.close()" aria-label="بستن">✕</button></div>
      <div class="bl-status">پلن <b>${esc(plan?.name || inv.planId)}</b>، ${TERM_FA[inv.term] || faNum(inv.term) + ' ماه'}</div>
      <div class="bl-box">
        <div class="bl-lbl">مبلغ دقیقی که باید به ولت برسد</div>
        <div class="bl-amtrow"><b>${n2(inv.amount)} <small style="font-size:13px;color:var(--muted)">USDT</small></b><button class="bl-copy" onclick="BILLING.copy('${inv.amount}','مبلغ کپی شد')">کپی مبلغ</button></div>
        <div class="bl-hint">سه رقمِ بعد از ممیز (<bdi dir="ltr">${n2(inv.amount)}</bdi>) واریزت را از بقیه جدا می‌کند و تأیید را خودکار می‌کند. اگر صرافی کارمزد را از مبلغ کم می‌کند، کارمزد را اضافه کن تا <b>مبلغِ دریافتی</b> همین باشد.</div>
      </div>
      <div class="bl-net"><b>BEP20 — BNB Smart Chain</b><span>⚠️ فقط همین شبکه — واریز روی شبکه‌ی دیگر برنمی‌گردد</span></div>
      <div class="ab-meta" style="margin:-2px 0 10px"><b>پرداخت قطعی است و برگشت داده نمی‌شود</b> — <a href="/terms#refund" target="_blank" style="color:var(--gold-light)">شرایط پرداخت</a>.</div>
      <div class="bl-box">
        <div class="bl-lbl">آدرس ولت (تتر USDT)</div>
        <div class="bl-addr"><div class="bl-qr" id="bl-qr"></div><div><code>${esc(inv.address)}</code><button class="bl-copy" onclick="BILLING.copy('${esc(inv.address)}','آدرس کپی شد')">کپی آدرس</button></div></div>
      </div>
      <div class="bl-live" id="bl-live">${review ? '🔎 واریزت رسیده و برای تأیید نهایی به مدیر فرستاده شد.' : '<span class="bl-dot"></span><span>در انتظار واریز… هر دقیقه خودکار بررسی می‌شود</span><span class="t" id="bl-left"></span>'}</div>
      <details class="bl-box" ${review ? 'open' : ''}>
        <summary style="cursor:pointer;font-size:12.5px;color:var(--gold-light)">واریز کردی ولی تأیید نشد؟ هش تراکنش (TxID) را بزن</summary>
        <div class="bl-tx"><input id="bl-hash" class="fi" placeholder="0x…" autocomplete="off" spellcheck="false"><button class="btn btn-primary" style="width:auto;margin:0" onclick="BILLING.submitTx()">بررسی</button></div>
        <div class="bl-msg" id="bl-txmsg"></div>
      </details>
      <div class="bl-box"><div class="bl-lbl">راهنما</div><ol class="bl-steps">
        <li>در صرافی (مثلاً نوبیتکس، بایننس یا والت شخصی) «برداشت تتر» را بزن.</li>
        <li>شبکه را <b>BEP20 (BSC)</b> انتخاب کن و آدرس بالا را بچسبان.</li>
        <li>مبلغ را طوری بزن که دقیقاً <bdi dir="ltr">${n2(inv.amount)} USDT</bdi> برسد.</li>
        <li>همین صفحه را باز بگذار؛ معمولاً یکی دو دقیقه بعد از رسیدن، اشتراک خودکار فعال می‌شود.</li></ol></div>
      <div class="bl-note">اگر زمان صورت‌حساب هم تمام شود، واریزِ این مبلغ تا ۴۸ ساعت خودکار شناخته می‌شود.</div>`);
    qrSvg(inv.address).then(svg => { const q = document.getElementById('bl-qr'); if (q) { if (svg) q.innerHTML = svg; else q.style.display = 'none'; } });
    if (review) return;
    const left = () => {
      const el = document.getElementById('bl-left'); if (!el) return stopPoll();
      const ms = Date.parse(inv.expiresAt) - Date.now();
      el.textContent = ms > 0 ? `${String(Math.floor(ms / 60000)).padStart(2, '0')}:${String(Math.floor(ms / 1000) % 60).padStart(2, '0')}` : 'زمان تمام شد';
    };
    left(); st.clock = setInterval(left, 1000);
    st.poll = setInterval(pollInvoice, 8000);
  }
  async function pollInvoice() {
    if (!st.inv || !document.getElementById('bl-ov')) return stopPoll();
    const r = await jfetch('/api/billing/invoices/' + st.inv.id);
    if (!r.ok) return;
    const inv = r.body.invoice;
    if (inv.status === 'paid') return success(r.body.subscription);
    if (inv.status === 'review' && st.inv.status !== 'review') { st.me.invoice = inv; renderInvoice(inv); }
  }
  async function submitTx() {
    const h = (document.getElementById('bl-hash')?.value || '').trim();
    const msg = document.getElementById('bl-txmsg');
    const say = (text, cls = 'bad') => { msg.className = 'bl-msg show ' + cls; msg.textContent = text; };
    if (!/^0x[0-9a-fA-F]{64}$/.test(h)) return say('هش باید با 0x شروع شود و ۶۴ حرف بعدش داشته باشد. از جزئیات برداشت در صرافی کپی‌اش کن.');
    say('در حال بررسی روی شبکه‌ی BSC…', 'info');
    const r = await jfetch(`/api/billing/invoices/${st.inv.id}/tx`, { method: 'POST', body: JSON.stringify({ hash: h }) });
    const s = r.body?.state;
    if (s === 'paid') return success(r.body.subscription);
    const text = {
      confirming: 'تراکنش هنوز تأیید کافی ندارد؛ نیم دقیقه‌ی دیگر دوباره «بررسی» را بزن.',
      not_found: 'این هش روی شبکه‌ی BSC پیدا نشد. شبکه‌ی برداشت BEP20 بوده؟ اگر همین حالا فرستادی، کمی صبر کن.',
      failed_tx: 'این تراکنش روی شبکه ناموفق بوده است.',
      not_to_wallet: 'این تراکنش تتر به آدرس ولتِ ما نفرستاده. آدرس مقصد را چک کن.',
      already_used: 'این تراکنش قبلاً برای صورت‌حساب دیگری استفاده شده است.',
      review: 'واریز رسید ولی مبلغ یا زمانش با این صورت‌حساب نمی‌خواند؛ برای مدیر فرستاده شد تا دستی بررسی کند.',
      chain_unreachable: 'اتصال به شبکه برقرار نشد؛ کمی بعد دوباره امتحان کن.'
    }[s] || (r.body?.error === 'invoice_closed' ? 'این صورت‌حساب بسته شده؛ یک صورت‌حساب تازه بساز.' : 'بررسی انجام نشد؛ دوباره امتحان کن.');
    say(text, s === 'review' ? 'info' : 'bad');
    if (s === 'review') { st.inv.status = 'review'; st.me.invoice = r.body.invoice; }
  }
  function success(sub) {
    stopPoll();
    st.me.invoice = null;
    if (sub) st.me.subscription = sub;
    overlay(`<div class="bl-done"><div class="ic">✓</div><h3>پرداخت تأیید شد</h3>
      <p>پلن <b>${esc(sub?.planName || '')}</b> تا <b>${faDate(sub?.endsAt)}</b> فعال است.<br>ممنون که همراه SamadiCapital هستی.</p>
      <button class="btn btn-primary" style="max-width:320px;margin:18px auto 0" onclick="BILLING.close()">بازگشت به ژورنال</button></div>`);
    refresh();
  }

  // ══════════ ثبت‌نام ══════════
  // v25.20: منبعِ ثبت‌نام — ?ref= / ?utm_source= همین صفحه، وگرنه آنچه صفحهٔ اصلی در sc_src نگه داشته
  function signupSource() {
    const ok = v => (v = String(v || '').trim().toLowerCase(), /^[a-z0-9][a-z0-9_.-]{0,39}$/.test(v) ? v : null);
    try { const q = new URLSearchParams(location.search); const u = ok(q.get('ref') || q.get('utm_source') || q.get('src')); if (u) return u; } catch (_) {}
    try { const s = JSON.parse(localStorage.getItem('sc_src') || 'null'); if (s && Date.now() - s.at < 30 * 864e5) return ok(s.s); } catch (_) {}
    return null;
  }
  function signupLinkHTML() { return `<div class="su-link" id="su-link">حساب نداری؟ <button type="button" onclick="openSignup()">ثبت‌نام — ${faNum(7)} روز رایگان</button></div>`; }
  function openSignup() {
    const lc = document.querySelector('#login-screen .lc'); if (!lc) return;
    lc.dataset.mode = 'signup';
    for (const el of lc.children) if (el.id !== 'su-panel') el.style.display = 'none';
    let p = document.getElementById('su-panel');
    if (!p) { p = document.createElement('div'); p.id = 'su-panel'; lc.appendChild(p); }
    p.style.display = '';
    p.innerHTML = `
      <div class="lg-head"><b>ساخت حساب ژورنال</b><span>${faNum(7)} روز رایگان، بدون کارت. شماره‌ات با تلگرام تأیید می‌شود.</span></div>
      <div class="fg"><div class="fl">نام و نام خانوادگی</div><input id="su-name" class="fi" autocomplete="name" maxlength="60"></div>
      <div class="fg" style="margin-top:12px"><div class="fl">شماره موبایل</div><input id="su-phone" class="fi lg-in" type="tel" inputmode="numeric" autocomplete="tel" placeholder="09xxxxxxxxx" maxlength="11" oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(0,11)"></div>
      <div class="fgrid" style="margin-top:12px">
        <div class="fg"><div class="fl">PIN چهاررقمی</div><input id="su-pin" class="fi lg-in" type="password" inputmode="numeric" autocomplete="new-password" maxlength="4" placeholder="••••" oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(0,4)"></div>
        <div class="fg"><div class="fl">تکرار PIN</div><input id="su-pin2" class="fi lg-in" type="password" inputmode="numeric" autocomplete="new-password" maxlength="4" placeholder="••••" oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(0,4)"></div>
      </div>
      <div id="su-err" class="err-msg" style="display:none"></div>
      <button class="btn btn-primary lg-go" id="su-go" onclick="BILLING.signupStart()">ادامه — تأیید با تلگرام</button>
      <div class="ab-meta" style="text-align:center;margin-top:10px">با ثبت‌نام، <a href="/terms" target="_blank" style="color:var(--gold-light)">شرایط استفاده و پرداخت</a> و <a href="/privacy" target="_blank" style="color:var(--gold-light)">حریم خصوصی</a> را می‌پذیری.</div>
      <div class="su-link"><button type="button" onclick="BILLING.closeSignup()">حساب دارم — ورود</button></div>`;
    document.getElementById('su-name').focus();
  }
  function closeSignup() {
    clearInterval(st.suPoll); st.suPoll = null;
    const lc = document.querySelector('#login-screen .lc'); if (!lc) return;
    delete lc.dataset.mode;
    const p = document.getElementById('su-panel'); if (p) p.remove();
    for (const el of lc.children) el.style.display = '';
    if (typeof setLoginMode === 'function') setLoginMode('student');
  }
  async function signupStart() {
    const g = id => (document.getElementById(id)?.value || '').trim();
    const err = document.getElementById('su-err');
    const fail = t => { err.textContent = t; err.style.display = 'block'; const b = document.getElementById('su-go'); if (b) { b.disabled = false; b.textContent = 'ادامه — تأیید با تلگرام'; } };
    err.style.display = 'none';
    const name = g('su-name'), phone = g('su-phone'), pin = g('su-pin'), pin2 = g('su-pin2');
    if (name.length < 2) return fail('⚠️ نامت را بنویس.');
    if (!/^09\d{9}$/.test(phone)) return fail('⚠️ شماره موبایل باید ۱۱ رقم و با 09 شروع شود.');
    if (!/^\d{4}$/.test(pin)) return fail('⚠️ PIN باید چهار رقم باشد.');
    if (pin !== pin2) return fail('⚠️ دو PIN با هم یکی نیستند.');
    const b = document.getElementById('su-go'); b.disabled = true; b.textContent = 'لطفاً صبر کن…';
    const r = await jfetch('/api/signup/start', { method: 'POST', body: JSON.stringify({ phone, name, pin, source: signupSource() }) });
    if (!r.ok) return fail({ cip_student: '⚠️ تو دانشجوی دوره‌ای و حساب ژورنالت از قبل ساخته شده؛ با همان شماره و PIN وارد شو.',
      account_exists: '⚠️ این شماره از قبل حساب دارد؛ «ورود» را بزن.', capacity_full: '⚠️ ظرفیت ژورنال فعلاً تکمیل است؛ به‌زودی دوباره باز می‌شود.', rate_limited: '⚠️ الان درخواست زیاد است؛ چند دقیقه‌ی دیگر دوباره امتحان کن.',
      telegram_not_configured: '⚠️ ثبت‌نام موقتاً در دسترس نیست.', offline: '⚠️ اتصال به سرور برقرار نشد.' }[r.body?.error] || '⚠️ ثبت‌نام انجام نشد؛ دوباره امتحان کن.');
    st.signup = { ...r.body, phone, name };
    renderSignupWait('waiting');
    clearInterval(st.suPoll);
    st.suPoll = setInterval(signupPoll, 2500);
    qrSvg(r.body.botUrl).then(svg => { const q = document.getElementById('su-qr'); if (q && svg) q.innerHTML = svg; });
  }
  function renderSignupWait(state) {
    const p = document.getElementById('su-panel'); if (!p || !st.signup) return;
    const s = st.signup;
    const line = {
      waiting: ['⏳', 'منتظر باز شدن ربات…', ''],
      bot_opened: ['📱', 'ربات باز شد. حالا در تلگرام دکمه‌ی «تأیید شماره‌ی من» را بزن.', ''],
      phone_mismatch: ['⚠️', `شماره‌ی تلگرامت با ${s.phone} یکی نیست. با تلگرامِ همین شماره وارد شو، یا برگرد و شماره را درست کن.`, 'bad'],
      cip_student: ['⚠️', 'تو دانشجوی دوره‌ای؛ با شماره و PIN دوره وارد شو.', 'bad'],
      account_exists: ['⚠️', 'این شماره حساب دارد؛ با شماره و PIN وارد شو.', 'bad'],
      capacity_full: ['⚠️', 'ظرفیت ژورنال فعلاً تکمیل است؛ ثبت‌نام انجام نشد.', 'bad'],
      expired: ['⌛', 'زمان این ثبت‌نام تمام شد؛ دوباره شروع کن.', 'bad']
    }[state] || ['⏳', 'منتظر تأیید…', ''];
    p.innerHTML = `
      <div class="lg-head"><b>تأیید شماره با تلگرام</b><span>${esc(s.name)}، <bdi dir="ltr">${s.phone}</bdi></span></div>
      <ol class="su-steps">
        <li><i>۱</i><span>دکمه‌ی پایین را بزن تا ربات ژورنال در تلگرام باز شود و <b>Start</b> را بزن.</span></li>
        <li><i>۲</i><span>در ربات، دکمه‌ی <b>«📱 تأیید شماره‌ی من»</b> را بزن.</span></li>
        <li><i>۳</i><span>همین صفحه خودکار وارد ژورنال می‌شود و دوره‌ی رایگانت شروع می‌شود — دانشجوی VIP آکادمی دوره‌ی طولانی‌تری می‌گیرد.</span></li>
      </ol>
      <a class="btn btn-primary lg-go" href="${esc(tgDeep(s.botUrl))}">باز کردن ربات تلگرام</a>
      <div class="su-link">تلگرام باز نشد؟ <a href="${esc(s.botUrl)}" target="_blank" rel="noopener" style="color:var(--gold-light)">این پیوند</a> را بزن یا کد زیر را با گوشی اسکن کن.</div>
      <div class="su-qr" id="su-qr" title="با گوشی اسکن کن"></div>
      <div class="su-state ${line[2]}"><span>${line[0]}</span><span>${line[1]}</span></div>
      <div class="su-link"><button type="button" onclick="BILLING.openSignupAgain()">شماره یا نام را اصلاح کن</button></div>`;
    if (state !== 'waiting') qrSvg(s.botUrl).then(svg => { const q = document.getElementById('su-qr'); if (q && svg) q.innerHTML = svg; });
  }
  // t.me در ایران بی‌فیلترشکن باز نمی‌شود؛ tg:// مستقیم اپِ تلگرام را باز می‌کند
  const tgDeep = u => { const m = /^https:\/\/t\.me\/([A-Za-z0-9_]{5,32})\?start=([A-Za-z0-9_-]{1,64})$/.exec(String(u || '')); return m ? `tg://resolve?domain=${m[1]}&start=${m[2]}` : String(u || ''); };
  async function signupPoll() {
    if (!st.signup || !document.getElementById('su-panel')) { clearInterval(st.suPoll); return; }
    const r = await jfetch('/api/signup/status?token=' + st.signup.token);
    const s = r.body?.state;
    if (!s) return;
    if (s === 'verified') {
      clearInterval(st.suPoll); st.suPoll = null;
      setToken(r.body.token);
      L.s('sc_offline_ok_' + r.body.uid, r.body.name || true); L.s('sc_acct_' + r.body.uid, r.body.accountType);
      closeSignup();
      startSession({ role: 'student', uid: r.body.uid, name: r.body.name, accountType: r.body.accountType });
      setTimeout(() => showToast(r.body.trialDays > 0 ? `🎉 خوش آمدی — ${faNum(r.body.trialDays)} روز رایگان فعال شد` : '🎉 خوش آمدی'), 600);
      return;
    }
    if (s === 'done') { clearInterval(st.suPoll); closeSignup(); showToast('حسابت ساخته شد؛ با شماره و PIN وارد شو'); return; }
    if (['expired', 'account_exists', 'cip_student', 'unknown'].includes(s)) { clearInterval(st.suPoll); st.suPoll = null; }
    if (st.signup.last !== s) { st.signup.last = s; renderSignupWait(s === 'unknown' ? 'expired' : s); }
  }

  // ══════════ پنل مالک ══════════
  async function renderAdmin(el) {
    if (!el) return;
    if (!st.admin) el.innerHTML = '<div class="card"><div style="color:var(--muted);text-align:center;padding:24px">در حال بارگذاری اشتراک‌ها…</div></div>';
    const r = await jfetch('/api/mentor/billing');
    if (!r.ok) { el.innerHTML = '<div class="card"><div class="err-msg" style="display:block">بارگذاری اشتراک‌ها انجام نشد.</div></div>'; return; }
    st.admin = r.body;
    drawAdmin(el);
  }
  const adminEl = () => document.getElementById('mbill');
  function drawAdmin(el = adminEl()) {
    if (!el || !st.admin) return;
    const a = st.admin, s = a.stats;
    const tabs = [['overview', 'خلاصه'], ['members', 'مشترکین'], ['payments', 'پرداخت‌ها', s.review + s.unmatched], ['funnel', 'قیف و منبع'], ['plans', 'پلن‌ها و قیمت'], ['settings', 'تنظیمات پرداخت']];
    el.innerHTML = `<div class="card">
      <div class="card-title">💳 اشتراک ژورنال (غیر CIP)</div>
      <div class="ab-tabs">${tabs.map(([k, l, n]) => `<button class="${st.tab === k ? 'on' : ''}" onclick="BILLING.adminTab('${k}')">${l}${n ? `<em>${faNum(n)}</em>` : ''}</button>`).join('')}</div>
      <div id="ab-body">${({ overview: abOverview, members: abMembers, payments: abPayments, funnel: abFunnel, plans: abPlans, settings: abSettings })[st.tab]()}</div></div>`;
  }
  function abOverview() {
    const a = st.admin, s = a.stats, c = a.config;
    const ago = a.scan?.at ? Math.round((Date.now() - Date.parse(a.scan.at)) / 60000) : null;
    const check = (ok, text, fix) => `<div class="${ok ? 'ok' : 'no'}"><b>${ok ? '✓' : '✗'}</b><span>${text}${!ok && fix ? ` — <a href="#" onclick="${fix};return false" style="color:var(--gold-light)">درست کن</a>` : ''}</span></div>`;
    return `<div class="ab-kpis">
        <div><small>کل کاربران</small><b style="color:${s.maxUsers && s.users >= s.maxUsers * 0.9 ? 'var(--red)' : 'inherit'}">${faNum(s.users ?? 0)}${s.maxUsers ? `<span style="font-size:11px;color:var(--muted)"> / ${faNum(s.maxUsers)}</span>` : ''}</b></div>
        <div><small>اعضا</small><b>${faNum(s.members)}</b></div>
        <div><small>اشتراک پولی فعال</small><b style="color:var(--green)">${faNum(s.active)}</b></div>
        <div><small>دوره‌ی رایگان</small><b style="color:var(--gold)">${faNum(s.trials)}</b></div>
        <div><small>تمام‌شده</small><b style="color:var(--muted)">${faNum(s.expired)}</b></div>
        <div><small>درآمد ۳۰ روز</small><b><bdi dir="ltr">${n2(s.revenue30)}</bdi></b></div>
        <div><small>نیازمند بررسی</small><b style="color:${s.review ? 'var(--red)' : 'var(--muted)'}">${faNum(s.review)}</b></div></div>
      <div class="ab-check">
        ${check(!!c.address, c.address ? `ولت دریافت: <bdi dir="ltr">${shortAddr(c.address)}</bdi> (BEP20)` : 'آدرس ولت دریافت هنوز وارد نشده؛ بدون آن هیچ‌کس نمی‌تواند پرداخت کند', "BILLING.adminTab('settings')")}
        ${check(a.system.telegramConfigured, 'ربات تلگرام برای ثبت‌نام و یادآوری' + (a.system.bot ? ` (@${esc(a.system.bot)})` : ''))}
        ${check(a.system.mentorChatLinked, 'تلگرام مدیر برای خبرِ پرداخت و دکمه‌ی تأیید/رد')}
        ${check(!!a.scan && !a.scanError, a.scan ? `آخرین اسکن زنجیره: ${ago != null ? faNum(ago) + ' دقیقه پیش' : '—'}، ${faNum(a.scan.found || 0)} واریز دیده شد` : 'زنجیره هنوز اسکن نشده (فقط وقتی صورت‌حساب باز باشد اسکن می‌شود)')}
        ${a.scanError ? `<div class="no"><b>!</b><span>خطای آخر اسکن: ${esc(a.scanError.error || '')}</span></div>` : ''}
        ${c.academyVip === 'off' ? '' : check(academyOk(), academyLine(), "BILLING.adminTab('settings')")}
      </div>
      <button class="btn btn-ghost" onclick="BILLING.scanNow(this)">🔄 اسکن زنجیره همین حالا</button>`;
  }
  // v25.20: قیف — بازدید ← شروعِ ثبت‌نام ← ثبت‌نامِ کامل ← پرداخت، به تفکیکِ منبع
  const SRC_FA = { direct: 'مستقیم', unknown: 'پیش از اندازه‌گیری', instagram: 'اینستاگرام', telegram: 'تلگرام', google: 'گوگل',
    search: 'جست‌وجوی دیگر', x: 'ایکس', youtube: 'یوتیوب', linkedin: 'لینکدین', samadicapital: 'سایت آکادمی', other: 'سایت‌های دیگر' };
  async function loadFunnel(days) {
    st.funnelDays = days; st.funnel = null; drawAdmin();
    const r = await jfetch('/api/mentor/billing/funnel?days=' + days);
    st.funnel = r.ok ? r.body : { error: true }; if (st.tab === 'funnel') drawAdmin();
  }
  function abFunnel() {
    const days = st.funnelDays || 30;
    if (st.funnel === undefined) { setTimeout(() => loadFunnel(days)); return '<div class="ab-meta">در حال بارگذاری…</div>'; }
    const f = st.funnel;
    const pick = [7, 30, 90].map(d => `<button class="${d === days ? 'on' : ''}" onclick="BILLING.funnelDays(${d})">${faNum(d)} روز</button>`).join('');
    const pct = (a, b) => b ? faNum(Math.round(a / b * 100)) + '٪' : '—';
    const body = !f ? '<div class="ab-meta">در حال بارگذاری…</div>' : f.error ? '<div class="err-msg" style="display:block">بارگذاری نشد.</div>'
      : !f.rows.length ? '<div class="ab-meta" style="padding:10px 0">هنوز در این بازه چیزی ثبت نشده.</div>'
      : `<div style="overflow-x:auto"><table class="ab-funnel" style="width:100%;border-collapse:collapse;font-size:12.5px">
          <thead><tr style="color:var(--muted);text-align:start"><th style="text-align:start;padding:6px 4px">منبع</th><th>بازدید</th><th>شروع ثبت‌نام</th><th>ثبت‌نام کامل</th><th>پرداخت</th><th>درآمد (USDT)</th></tr></thead>
          <tbody>${f.rows.concat([{ ...f.total, source: '__total' }]).map(r => `<tr style="border-top:1px solid var(--border);${r.source === '__total' ? 'font-weight:700' : ''}">
            <td style="padding:7px 4px">${r.source === '__total' ? 'جمع' : esc(SRC_FA[r.source] || r.source)}</td>
            <td style="text-align:center">${faNum(r.visits)}</td><td style="text-align:center">${faNum(r.starts)}</td>
            <td style="text-align:center">${faNum(r.signups)} <small style="color:var(--muted)">${pct(r.signups, r.visits)}</small></td>
            <td style="text-align:center">${faNum(r.paid)} <small style="color:var(--muted)">${pct(r.paid, r.signups)}</small></td>
            <td style="text-align:center"><bdi dir="ltr">${n2(r.usdt)}</bdi></td></tr>`).join('')}</tbody></table></div>`;
    return `<div class="ab-tabs" style="margin-bottom:10px">${pick}</div>${body}
      <div class="ab-meta" style="margin-top:12px;line-height:2">درصدِ زیر «ثبت‌نام کامل» = از بازدیدها؛ زیر «پرداخت» = از ثبت‌نام‌ها. بازدید بی‌نام شمرده می‌شود (بی‌کوکی و بی‌IP). «پیش از اندازه‌گیری» = عضوهایی که قبل از این قابلیت ثبت‌نام کرده‌اند.</div>
      <div class="fg" style="margin-top:14px"><div class="fl">ساختِ لینکِ کمپین — برای هر کانال یا اینفلوئنسر یک اسم انگلیسی کوتاه</div>
        <input class="fi" id="ab-ref" dir="ltr" placeholder="مثلاً kanal-ali" maxlength="40" oninput="BILLING.refLink(this.value)"></div>
      <div id="ab-reflink" class="ab-meta" dir="ltr" style="margin-top:6px;word-break:break-all"></div>`;
  }
  const academyOk = () => { const ac = st.admin.academy || {}; return !!(ac.binding && ac.at && !ac.error); };
  function academyLine() {
    const ac = st.admin.academy || {}, c = st.admin.config;
    if (!ac.binding) return 'اتصال به آکادمی برقرار نیست';
    if (!ac.at) return ac.error ? 'خواندن از آکادمی انجام نشد: ' + esc(ac.error) : 'VIPهای آکادمی هنوز خوانده نشده‌اند';
    const ago = Math.round((Date.now() - Date.parse(ac.at)) / 60000);
    const when = ago < 60 ? `${faNum(ago)} دقیقه پیش` : `${faNum(Math.round(ago / 60))} ساعت پیش`;
    const n = c.academyVip === 'active' ? `${faNum(ac.active)} VIP فعلی` : `${faNum(ac.active)} VIP فعلی و ${faNum(ac.all - ac.active)} قبلی`;
    return `VIPهای آکادمی خودکار شناخته می‌شوند: ${n}، به‌روز ${when}${ac.error ? '، آخرین تلاش ناموفق' : ''}`;
  }
  function subChip(sub) {
    if (sub.active && sub.trial) return `<span class="ab-chip y">رایگان، ${faNum(sub.daysLeft)} روز</span>`;
    if (sub.active) return `<span class="ab-chip g">${esc(sub.planName)}، ${faNum(sub.daysLeft)} روز</span>`;
    return `<span class="ab-chip r">${sub.status === 'none' ? 'بدون اشتراک' : 'تمام‌شده'}</span>`;
  }
  function abMembers() {
    const a = st.admin, q = st.memQ.trim();
    const list = a.members.filter(m => !q || m.name.includes(q) || m.uid.includes(q));
    const planOpts = a.config.plans.map(p => `<option value="${p.id}">${esc(p.name)}</option>`).join('');
    return `<input class="fi ab-search" placeholder="🔍 جستجوی نام یا شماره" value="${esc(st.memQ)}" oninput="BILLING.memSearch(this.value)">
      ${list.length ? list.map(m => `<div class="ab-row ${st.openMem === m.uid ? 'open' : ''}">
        <div class="ab-rh" onclick="BILLING.toggleMem('${m.uid}')"><div class="who"><b>${esc(m.name)} ${m.blocked ? '⛔' : ''}</b><span>${m.uid}${m.telegram_username ? '، @' + esc(m.telegram_username) : ''}</span></div>
          ${m.tier === 'vip' ? `<span class="ab-chip v">${m.fromAcademy ? 'VIP آکادمی' : 'VIP'}</span>` : ''}${subChip(m.subscription)}</div>
        <div class="ab-rb"><div class="ab-meta">عضو از ${faDate(m.created_at?.replace(' ', 'T') + 'Z')}${m.subscription.endsAt ? `، پایان ${faDate(m.subscription.endsAt)}` : ''}${m.subscription.trialUsed ? '، دوره‌ی رایگان گرفته' : ''}</div>
          <div class="ab-act"><select class="fi" id="g-plan-${m.uid}">${planOpts}</select><input class="fi" id="g-days-${m.uid}" type="number" min="1" value="30"><button class="btn btn-primary" onclick="BILLING.grant('${m.uid}')">+ روز اشتراک</button></div>
          <div class="ab-act">
            <button class="btn btn-ghost" onclick="BILLING.member('${m.uid}',{tier:'${m.tier === 'vip' ? 'public' : 'vip'}'})">${m.tier === 'vip' ? 'برداشتن VIP' : 'VIP کن'}</button>
            <button class="btn btn-ghost" onclick="BILLING.member('${m.uid}',{blocked:${!m.blocked}})">${m.blocked ? 'رفع مسدودی' : 'مسدود کن'}</button>
            ${m.subscription.active ? `<button class="btn btn-danger" onclick="BILLING.member('${m.uid}',{end:true},'اشتراک ${esc(m.name)} همین حالا تمام شود؟')">پایان اشتراک</button>` : ''}
          </div></div></div>`).join('') : '<div style="color:var(--muted);text-align:center;padding:18px;font-size:12px">هنوز عضوی نیست</div>'}`;
  }
  const INV_STATUS = { pending: ['در انتظار واریز', 'y'], review: ['نیازمند بررسی', 'r'], paid: ['پرداخت‌شده', 'g'], expired: ['منقضی', ''], cancelled: ['لغوشده', ''], rejected: ['ردشده', 'r'] };
  function abPayments() {
    const a = st.admin, f = st.invFilter;
    const list = a.invoices.filter(i => f === 'all' || (f === 'open' ? ['pending', 'review'].includes(i.status) : i.status === f));
    const openInv = a.invoices.filter(i => ['pending', 'review', 'expired'].includes(i.status));
    const planName = id => a.config.plans.find(p => p.id === id)?.name || id;
    const filters = [['open', 'باز'], ['review', 'بررسی'], ['paid', 'پرداخت‌شده'], ['all', 'همه']];
    return `<div class="ab-tabs">${filters.map(([k, l]) => `<button class="${f === k ? 'on' : ''}" onclick="BILLING.invFilter('${k}')">${l}</button>`).join('')}</div>
      ${list.length ? list.map(i => { const [sl, sc] = INV_STATUS[i.status] || [i.status, '']; let note = null; try { note = JSON.parse(i.reviewNote || 'null'); } catch (_) {}
        return `<div class="ab-row open"><div class="ab-rh" style="cursor:default"><div class="who"><b>${esc(i.name || i.uid)}، ${esc(planName(i.planId))} ${faNum(i.term)} ماه</b>
          <span><bdi dir="ltr">${n2(i.amount)} USDT</bdi>، ${faDate(i.createdAt)} ${faTime(i.createdAt)}</span></div><span class="ab-chip ${sc}">${sl}</span></div>
          <div class="ab-rb">${note ? `<div class="ab-meta">واریز ${usdt(note.amount)} — ${esc(note.reason || '')}</div>` : ''}
            ${i.status === 'paid' ? `<div class="ab-meta">پرداخت ${i.paidAmount ? usdt(i.paidAmount) : ''}، ${{ chain: 'اسکن خودکار', hash: 'هش تراکنش', manual: 'تأیید دستی' }[i.confirmedBy] || ''}${i.txRef ? `، <a href="https://bscscan.com/tx/${i.txRef.split(':')[0]}" target="_blank" rel="noopener" style="color:var(--gold-light)">BscScan</a>` : ''}</div>` : ''}
            ${['pending', 'review', 'expired'].includes(i.status) ? `<div class="ab-act"><button class="btn btn-primary" onclick="BILLING.approve('${i.id}')">✓ تأیید و فعال‌سازی</button><button class="btn btn-danger" onclick="BILLING.reject('${i.id}')">رد</button></div>` : ''}</div></div>`; }).join('')
        : '<div style="color:var(--muted);text-align:center;padding:14px;font-size:12px">موردی نیست</div>'}
      ${a.transfers.length ? `<div class="card-title" style="margin-top:14px">واریزهایی که به صورت‌حسابی نخوردند</div>
        ${a.transfers.map(t => `<div class="ab-row open"><div class="ab-rh" style="cursor:default"><div class="who"><b>${usdt(t.amount)} ${t.status === 'ambiguous' ? '<span class="ab-chip r">دوپهلو</span>' : ''}</b>
          <span>از <bdi dir="ltr">${shortAddr(t.from_address || '')}</bdi>، ${faDate(t.ts)} ${faTime(t.ts)}، <a href="https://bscscan.com/tx/${t.tx_hash}" target="_blank" rel="noopener" style="color:var(--gold-light)">BscScan</a></span></div></div>
          <div class="ab-rb"><div class="ab-act"><select class="fi" id="tr-${t.ref.slice(2, 14)}"><option value="">وصل به صورت‌حساب…</option>${openInv.map(i => `<option value="${i.id}">${esc(i.name || i.uid)}، ${n2(i.amount)}</option>`).join('')}</select>
            <button class="btn btn-primary" onclick="BILLING.assign('${t.ref}','tr-${t.ref.slice(2, 14)}')">وصل و فعال کن</button><button class="btn btn-ghost" onclick="BILLING.ignore('${t.ref}')">نادیده</button></div></div></div>`).join('')}` : ''}`;
  }
  function abPlans() {
    const plans = st.admin.config.plans;
    return `<div class="ab-meta" style="margin-bottom:10px">قیمت‌ها به تتر (USDT). خانه‌ی خالی یعنی آن مدت برای آن پلن فروخته نمی‌شود. «هشدار» = حداکثر تعداد هشدار قیمت؛ صفر یعنی بدون هشدار.</div>
      ${plans.map((p, i) => `<div class="ab-plan" data-i="${i}">
        <div class="fgrid"><div class="fg"><div class="fl">نام پلن</div><input class="fi" data-k="name" value="${esc(p.name)}" maxlength="40"></div>
          <div class="fg"><div class="fl">شناسه</div><input class="fi" data-k="id" value="${esc(p.id)}" dir="ltr" maxlength="20"></div></div>
        <div class="fg tf-gap"><div class="fl">توضیح کوتاه</div><input class="fi" data-k="tagline" value="${esc(p.tagline)}" maxlength="140"></div>
        <div class="fg tf-gap"><div class="fl">قیمت (USDT) — ۱ / ۳ / ۶ / ۱۲ ماه</div><div class="ab-prices">${TERMS.map(t => `<input class="fi" data-t="${t}" inputmode="decimal" value="${p.prices[t] ?? ''}" placeholder="—">`).join('')}</div>
          <div class="ab-disc">${TERMS.filter(t => t > 1 && p.prices[t] && p.prices[1]).map(t => `${TERM_FA[t]}: ${pct(discount(p, t))} تخفیف`).join('، ') || ''}</div></div>
        <div class="fgrid tf-gap"><div class="fg"><div class="fl">هشدار قیمت</div><input class="fi" data-k="alerts" type="number" min="0" max="200" value="${p.alerts}"></div>
          <div class="fg"><div class="fl">چه کسی می‌بیند</div><select class="fi" data-k="audience"><option value="public" ${p.audience === 'public' ? 'selected' : ''}>همه</option><option value="vip" ${p.audience === 'vip' ? 'selected' : ''}>فقط VIP</option></select></div></div>
        <div class="fg tf-gap"><div class="fl">نکته‌های اضافه روی کارت (هر خط یکی)</div><textarea class="fi" data-k="bullets" rows="2">${esc((p.bullets || []).join('\n'))}</textarea></div>
        <div class="ab-tg"><label><input type="checkbox" data-k="ai" ${p.ai ? 'checked' : ''}> تحلیلگر خودکار عملکرد</label><label><input type="checkbox" data-k="featured" ${p.featured ? 'checked' : ''}> «محبوب‌ترین»</label>
          <label><input type="checkbox" data-k="active" ${p.active ? 'checked' : ''}> فعال (در فروش)</label>
          <button class="btn btn-ghost" style="width:auto;min-height:32px;padding:0 10px;font-size:11px" onclick="BILLING.delPlan(${i})">حذف پلن</button></div></div>`).join('')}
      ${abFeatures(plans)}
      <div class="ab-act"><button class="btn btn-ghost" onclick="BILLING.addPlan()">+ پلن تازه</button><button class="btn btn-primary" onclick="BILLING.savePlans()">ذخیره‌ی پلن‌ها، امکانات و قیمت‌ها</button></div>`;
  }
  // v25.4: فهرستِ امکانات — هر ردیف یک امکان؛ تیکِ هر پلن یعنی آن پلن دارد
  function abFeatures(plans) {
    const feats = st.admin.config.features || [];
    return `<div class="ab-feats"><div class="ab-fl">امکاناتِ پلن‌ها</div>
      <div class="ab-meta">همین فهرست در جدول مقایسه‌ی برنامه و کارت‌های صفحه‌ی معرفی دیده می‌شود. تیک یعنی آن پلن این امکان را دارد. «هشدار قیمت» و «تحلیلگر خودکار عملکرد» از تنظیمات خود پلن می‌آیند.</div>
      ${feats.map((f, i) => `<div class="ab-feat">
        <div class="ab-fh"><input class="fi" data-f="label" value="${esc(f.label)}" maxlength="80" placeholder="عنوان امکان">
          <button type="button" class="icon-btn" onclick="BILLING.moveFeat(${i},-1)" ${i ? '' : 'disabled'} aria-label="بالا">↑</button>
          <button type="button" class="icon-btn" onclick="BILLING.moveFeat(${i},1)" ${i < feats.length - 1 ? '' : 'disabled'} aria-label="پایین">↓</button>
          <button type="button" class="icon-btn danger" onclick="BILLING.delFeat(${i})" aria-label="حذف">×</button></div>
        <input class="fi ab-en" data-f="en" value="${esc(f.en || '')}" maxlength="80" dir="ltr" placeholder="English (optional) — for the English landing page">
        <div class="ab-tg">${plans.map((p, pi) => `<label><input type="checkbox" data-pi="${pi}" ${(f.off || []).includes(p.id) ? '' : 'checked'}> ${esc(p.name)}</label>`).join('')}</div></div>`).join('')
        || '<div class="ab-meta" style="padding:8px 0">هنوز امکانی نیست — فقط هشدار و تحلیلگر خودکار نشان داده می‌شود.</div>'}
      <button type="button" class="btn btn-ghost" onclick="BILLING.addFeat()">+ امکان تازه</button></div>`;
  }
  function abSettings() {
    const c = st.admin.config;
    return `<div class="fg"><div class="fl">آدرس ولت دریافت (USDT روی BEP20)</div><input class="fi" id="ab-addr" dir="ltr" value="${esc(c.address)}" placeholder="0x…" spellcheck="false">
        <div class="ab-meta">بهتر است ولتی جدا فقط برای اشتراک‌ها باشد تا واریزهای دیگرت با صورت‌حساب‌ها قاطی نشود.${c.address ? ` <a href="https://bscscan.com/address/${c.address}#tokentxns" target="_blank" rel="noopener" style="color:var(--gold-light)">دیدن در BscScan</a>` : ''}</div></div>
      <div class="fg tf-gap"><div class="fl">سقف کل کاربران (دانشجوی CIP + اعضا)</div><input class="fi" id="ab-maxusers" type="number" min="0" value="${c.maxUsers}">
        <div class="ab-meta">در سقف، ثبت‌نامِ تازه و ساختِ دانشجوی تازه بسته می‌شود. ۰ یعنی بی‌سقف. از ۹۰٪ در تلگرام خبر می‌گیری.</div></div>
      <div class="fgrid tf-gap"><div class="fg"><div class="fl">روزهای رایگانِ VIPِ آکادمی</div><input class="fi" id="ab-vtrial" type="number" min="0" max="90" value="${c.vipTrialDays}"></div>
        <div class="fg"><div class="fl">پلنِ دوره‌ی رایگانِ VIP</div><select class="fi" id="ab-vtrialplan">${c.plans.map(p => `<option value="${p.id}" ${p.id === c.vipTrialPlan ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}</select></div></div>
      <div class="fgrid tf-gap"><div class="fg"><div class="fl">روزهای رایگانِ عضو تازه (غیر VIP)</div><input class="fi" id="ab-trial" type="number" min="0" max="60" value="${c.trialDays}"></div>
        <div class="fg"><div class="fl">پلن دوره‌ی رایگان</div><select class="fi" id="ab-trialplan">${c.plans.map(p => `<option value="${p.id}" ${p.id === c.trialPlan ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}</select></div></div>
      <div class="fgrid tf-gap"><div class="fg"><div class="fl">اعتبار صورت‌حساب (دقیقه)</div><input class="fi" id="ab-invmin" type="number" min="15" max="1440" value="${c.invoiceMinutes}"></div>
        <div class="fg"><div class="fl">کسریِ قابل‌قبول (USDT)</div><input class="fi" id="ab-tol" type="number" min="0" max="5" step="0.1" value="${c.underpayTolerance}"></div></div>
      <div class="ab-meta">کسری: اگر صرافی کارمزد را از مبلغ کم کند، واریزی که تا این مقدار کمتر است هم پذیرفته می‌شود.</div>
      <div class="fg tf-gap"><div class="fl">دانشجوهای VIP آکادمی (samadicapital.com)</div>
        <select class="fi" id="ab-acvip">${[['all', 'همه‌ی VIPها — فعلی و قبلی'], ['active', 'فقط VIPهای فعلی'], ['off', 'خاموش — فقط فهرست دستیِ پایین']]
          .map(([v, t]) => `<option value="${v}" ${c.academyVip === v ? 'selected' : ''}>${t}</option>`).join('')}</select>
        <div class="ab-meta">${academyLine()}. لازم نیست شماره‌شان را بنویسی: موقع ثبت‌نام از آکادمی چک می‌شود و هر ۶ ساعت VIPهای تازه روی عضوهای موجود هم اعمال می‌شود. آکادمی فقط شماره‌ی VIPها را می‌دهد، نه اطلاعات دیگر.</div>
        <button class="btn btn-ghost" style="margin-top:8px" onclick="BILLING.academySync(this)">🔄 همین حالا از آکادمی بخوان</button></div>
      <div class="fg tf-gap"><div class="fl">شماره‌های VIPِ اضافه (دستی) — ${faNum(c.vipPhones.length)} شماره</div><textarea class="fi" id="ab-vip" rows="4" dir="ltr" placeholder="09121234567">${esc(c.vipPhones.join('\n'))}</textarea>
        <div class="ab-meta">برای کسی که در آکادمی VIP نیست ولی می‌خواهی قیمت VIP بگیرد. هر خط یک شماره؛ روی عضوهای موجود هم همین حالا اعمال می‌شود.</div></div>
      <button class="btn btn-primary" onclick="BILLING.saveSettings()">ذخیره‌ی تنظیمات</button>`;
  }
  async function putConfig(next, ok) {
    const r = await jfetch('/api/mentor/billing/config', { method: 'PUT', body: JSON.stringify({ config: next }) });
    if (!r.ok) { showToast(r.body?.error === 'bad_address' ? '⚠️ آدرس ولت نامعتبر است (0x و ۴۰ حرف)' : 'ذخیره انجام نشد'); return false; }
    showToast(ok || '✅ ذخیره شد');
    await renderAdmin(adminEl());
    return true;
  }
  function collectFeatures(plans) {
    return [...document.querySelectorAll('.ab-feat')].map(box => ({
      label: box.querySelector('[data-f="label"]').value.trim(), en: box.querySelector('[data-f="en"]').value.trim(),
      off: [...box.querySelectorAll('[data-pi]')].filter(c => !c.checked).map(c => plans[+c.dataset.pi]?.id).filter(Boolean)
    }));
  }
  // تغییرهای ذخیره‌نشده‌ی تب پلن‌ها پیش از هر بازچینی نگه داشته می‌شوند
  function stashPlans() { const plans = collectPlans(); st.admin.config.features = collectFeatures(plans); st.admin.config.plans = plans; return plans; }
  function collectPlans() {
    return [...document.querySelectorAll('.ab-plan')].map(box => {
      const v = k => box.querySelector(`[data-k="${k}"]`);
      const prices = {}; box.querySelectorAll('[data-t]').forEach(i => { const x = parseFloat(String(i.value).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))); if (x > 0) prices[i.dataset.t] = x; });
      return { id: v('id').value.trim().toLowerCase(), name: v('name').value.trim(), tagline: v('tagline').value.trim(), prices,
               alerts: Number(v('alerts').value) || 0, audience: v('audience').value, ai: v('ai').checked, featured: v('featured').checked,
               active: v('active').checked, bullets: v('bullets').value.split('\n').map(x => x.trim()).filter(Boolean) };
    });
  }

  // ── عمل‌ها ──
  const api = {
    refresh, active: () => active(), fillCard, alertsLock, openPlans, openInvoice, close, copy,
    term: setTerm, pick, checkout, submitTx, signupLinkHTML, openSignup, closeSignup, signupStart,
    openSignupAgain: () => { clearInterval(st.suPoll); st.signup = null; openSignup(); },
    renderAdmin, adminTab: k => { st.tab = k; drawAdmin(); },
    funnelDays: d => loadFunnel(d),
    refLink(v) {
      const s = String(v || '').trim().toLowerCase(), el = document.getElementById('ab-reflink'); if (!el) return;
      if (!s) { el.textContent = ''; return; }
      if (!/^[a-z0-9][a-z0-9_.-]{0,39}$/.test(s)) { el.textContent = 'فقط حروف انگلیسی کوچک، عدد، خط تیره و نقطه.'; return; }
      const link = 'https://journal.samadicapital.com/?ref=' + s;
      el.innerHTML = `<code>${link}</code> <button class="bl-copy" onclick="BILLING.copy('${link}','لینک کپی شد')">کپی</button>`;
    },
    memSearch: q => { st.memQ = q; const b = document.getElementById('ab-body'); const pos = document.activeElement?.selectionStart; if (b) b.innerHTML = abMembers(); const i = b?.querySelector('.ab-search'); if (i) { i.focus(); try { i.setSelectionRange(pos, pos); } catch (_) {} } },
    toggleMem: uid => { st.openMem = st.openMem === uid ? null : uid; drawAdmin(); },
    invFilter: f => { st.invFilter = f; drawAdmin(); },
    async member(uid, body, ask) {
      if (ask && !confirm(ask)) return;
      const r = await jfetch('/api/mentor/billing/members/' + uid, { method: 'POST', body: JSON.stringify(body) });
      showToast(r.ok ? '✅ انجام شد' : 'انجام نشد'); if (r.ok) await renderAdmin(adminEl());
    },
    async grant(uid) {
      const planId = document.getElementById('g-plan-' + uid)?.value, days = Number(document.getElementById('g-days-' + uid)?.value);
      if (!(days > 0)) return showToast('تعداد روز را بزن');
      await api.member(uid, { grant: { planId, days } });
    },
    async approve(id, ref) {
      if (!confirm('این صورت‌حساب تأیید و اشتراک فعال شود؟')) return;
      const r = await jfetch(`/api/mentor/billing/invoices/${id}/approve`, { method: 'POST', body: JSON.stringify(ref ? { ref } : {}) });
      showToast(r.ok ? '✅ تأیید و فعال شد' : 'انجام نشد: ' + (r.body?.error || '')); if (r.ok) await renderAdmin(adminEl());
    },
    async reject(id) {
      if (!confirm('این صورت‌حساب رد شود؟ به عضو خبر داده می‌شود.')) return;
      const r = await jfetch(`/api/mentor/billing/invoices/${id}/reject`, { method: 'POST', body: '{}' });
      showToast(r.ok ? 'رد شد' : 'انجام نشد'); if (r.ok) await renderAdmin(adminEl());
    },
    assign(ref, selId) { const id = document.getElementById(selId)?.value; if (!id) return showToast('اول صورت‌حساب را انتخاب کن'); api.approve(id, ref); },
    async ignore(ref) { await jfetch('/api/mentor/billing/transfers/ignore', { method: 'POST', body: JSON.stringify({ ref }) }); await renderAdmin(adminEl()); },
    async academySync(btn) {
      if (btn) { btn.disabled = true; btn.textContent = 'در حال خواندن…'; }
      const r = await jfetch('/api/mentor/billing/academy-sync', { method: 'POST', body: '{}' });
      const b = r.body || {};
      showToast(b.status === 'ok' ? `✅ از آکادمی: ${faNum(b.active)} VIP فعلی، ${faNum(b.all)} با قبلی‌ها${b.changed ? `؛ ${faNum(b.changed)} عضو به‌روز شد` : ''}`
        : b.status === 'no_binding' ? 'اتصال به آکادمی برقرار نیست' : 'خواندن از آکادمی انجام نشد');
      await renderAdmin(adminEl());
    },
    async scanNow(btn) {
      if (btn) { btn.disabled = true; btn.textContent = 'در حال اسکن…'; }
      const r = await jfetch('/api/mentor/billing/scan', { method: 'POST', body: '{}' });
      showToast(r.body?.status === 'ok' ? `اسکن شد: ${faNum(r.body.found || 0)} واریز، ${faNum(r.body.matched || 0)} تأیید` : r.body?.status === 'no_address' ? 'اول آدرس ولت را وارد کن' : 'اسکن انجام نشد');
      await renderAdmin(adminEl());
    },
    addFeat() { stashPlans(); st.admin.config.features.push({ label: '', en: '', off: [] }); drawAdmin(); document.querySelector('.ab-feat:last-of-type [data-f="label"]')?.focus(); },
    delFeat(i) { stashPlans(); st.admin.config.features.splice(i, 1); drawAdmin(); },
    moveFeat(i, d) { stashPlans(); const f = st.admin.config.features, j = i + d; if (j < 0 || j >= f.length) return; [f[i], f[j]] = [f[j], f[i]]; drawAdmin(); },
    addPlan() { st.admin.config.plans = stashPlans().concat([{ id: 'plan' + (st.admin.config.plans.length + 1), name: 'پلن تازه', tagline: '', prices: { 1: 5 }, alerts: 0, audience: 'public', ai: false, featured: false, active: false, bullets: [] }]); drawAdmin(); },
    delPlan(i) { const ps = stashPlans(); if (ps.length <= 1) return showToast('دست‌کم یک پلن لازم است'); if (!confirm(`پلن «${ps[i].name}» حذف شود؟ اشتراک‌های فعالِ آن تا پایان دوره می‌مانند.`)) return; ps.splice(i, 1); st.admin.config.plans = ps; drawAdmin(); },
    savePlans() {
      const plans = collectPlans();
      if (plans.some(p => !/^[a-z0-9_-]{2,20}$/.test(p.id))) return showToast('⚠️ شناسه‌ی پلن فقط حروف انگلیسی کوچک، عدد، - و _');
      if (new Set(plans.map(p => p.id)).size !== plans.length) return showToast('⚠️ شناسه‌ی دو پلن یکی است');
      if (plans.some(p => !Object.keys(p.prices).length)) return showToast('⚠️ هر پلن دست‌کم یک قیمت می‌خواهد');
      const features = collectFeatures(plans);
      if (features.some(f => !f.label)) return showToast('⚠️ عنوانِ هر امکان را بنویس یا ردیفش را حذف کن');
      putConfig({ ...st.admin.config, plans, features }, '✅ پلن‌ها، امکانات و قیمت‌ها ذخیره شد');
    },
    saveSettings() {
      const c = st.admin.config, g = id => document.getElementById(id)?.value ?? '';
      const address = g('ab-addr').trim();
      if (address && !/^0x[0-9a-fA-F]{40}$/.test(address)) return showToast('⚠️ آدرس ولت باید 0x و ۴۰ حرف باشد');
      putConfig({ ...c, address, trialDays: Number(g('ab-trial')), trialPlan: g('ab-trialplan'), vipTrialDays: Number(g('ab-vtrial')), maxUsers: Number(g('ab-maxusers')), vipTrialPlan: g('ab-vtrialplan'), invoiceMinutes: Number(g('ab-invmin')),
                  underpayTolerance: Number(g('ab-tol')), academyVip: g('ab-acvip') || c.academyVip, vipPhones: g('ab-vip').split(/[\s,،]+/).map(x => x.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))).filter(Boolean) });
    }
  };
  window.BILLING = api;
})();
