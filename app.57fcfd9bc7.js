
// ══════════════════════════════════════════════════════
// v26.2 — آیکون‌های خطی به جای ایموجی (مالک ۱۴۰۵-۰۷-۳۰: «خیلی باکیفیت، جذاب و حرفه‌ای»)
// ایموجی روی هر گوشی شکلِ دیگری دارد و رنگی و شلوغ است. اینجا هر ایموجیِ شناخته‌شده‌ای که در
// صفحه نوشته شود، همان لحظه (پیش از رسم) به یک آیکونِ خطیِ هم‌خانواده تبدیل می‌شود — بدون
// دست‌زدن به صدها قالب. پنجره‌های بومی (alert/confirm)، عنوان تب و نشان‌های رنگیِ «مسیر پیشرفت»
// (.xp2-ico، .xp2-level، [data-raw]) دست‌نخورده می‌مانند. منبع: tools/line_icons.js
// ══════════════════════════════════════════════════════
const LINE_ICONS = (() => {
  const C = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}"/>`;
  const R = (x, y, w, h, rx) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}"/>`;
  const P = (...d) => d.map(x => `<path d="${x}"/>`).join('');
  const I = {
    check: C(12, 12, 10) + P('m8.5 12.2 2.4 2.4 4.6-5'),
    warn: P('M10.3 3.9 2.4 17.6A2 2 0 0 0 4.1 20.6h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z', 'M12 9.5v4', 'M12 17h.01'),
    ban: C(12, 12, 10) + P('m4.9 4.9 14.2 14.2'),
    lock: R(4, 11, 16, 10, 2.5) + P('M8 11V7.5a4 4 0 0 1 8 0V11', 'M12 15.2v1.6'),
    unlock: R(4, 11, 16, 10, 2.5) + P('M8 11V7.5a4 4 0 0 1 7.7-1.5', 'M12 15.2v1.6'),
    shield: P('M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z', 'm9 12 2 2 4-4'),
    target: C(12, 12, 10) + C(12, 12, 6) + C(12, 12, 2),
    hourglass: P('M5 22h14', 'M5 2h14', 'M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22', 'M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2'),
    gem: P('M6 3h12l4 6-10 13L2 9Z', 'M11 3 8 9l4 13 4-13-3-6', 'M2 9h20'),
    cash: R(2, 6, 20, 12, 2.5) + C(12, 12, 2.5) + P('M6 12h.01', 'M18 12h.01'),
    wallet: P('M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1', 'M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4'),
    save: P('M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z', 'M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7', 'M7 3v4a1 1 0 0 0 1 1h7'),
    chat: P('M7.9 20A9 9 0 1 0 4 16.1L2 22Z', 'M8 12h.01', 'M12 12h.01', 'M16 12h.01'),
    search: C(11, 11, 7.5) + P('m20.5 20.5-4.2-4.2'),
    bulb: P('M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5', 'M9 18h6', 'M10 22h4'),
    rocket: P('M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z', 'm12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z', 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0', 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5'),
    trophy: P('M6 9H4.5a2.5 2.5 0 0 1 0-5H6', 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18', 'M4 22h16', 'M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22', 'M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22', 'M18 2H6v7a6 6 0 0 0 12 0V2Z'),
    key: C(7.5, 15.5, 5.5) + P('m21 2-9.6 9.6', 'm15.5 7.5 3 3L22 7l-3-3'),
    users: C(9, 7, 4) + P('M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'),
    sprout: P('M7 20h10', 'M10 20c5.5-2.5.8-6.4 3-10', 'M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z', 'M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z'),
    zap: P('M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'),
    eye: P('M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0') + C(12, 12, 3),
    bell: P('M10.27 21a2 2 0 0 0 3.46 0', 'M3.26 15.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.96 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.41 5.96-2.74 7.33'),
    belloff: P('M10.27 21a2 2 0 0 0 3.46 0', 'M17 17H4a1 1 0 0 1-.74-1.67C4.59 13.96 6 12.5 6 8a6 6 0 0 1 .26-1.74', 'm2 2 20 20', 'M8.67 3.01A6 6 0 0 1 18 8c0 2.69.77 4.65 1.71 6.05'),
    flame: P('M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z'),
    offline: P('M12 20h.01', 'M8.5 16.43a5 5 0 0 1 7 0', 'M5 12.86a10 10 0 0 1 5.17-2.69', 'M19 12.86a10 10 0 0 0-2-1.52', 'M2 8.82a15 15 0 0 1 4.18-2.64', 'M22 8.82a15 15 0 0 0-11.29-3.76', 'm2 2 20 20'),
    scale: P('m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z', 'm2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z', 'M7 21h10', 'M12 3v18', 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'),
    calendar: R(3, 4, 18, 18, 2.5) + P('M8 2v4', 'M16 2v4', 'M3 10h18', 'M8 14h.01', 'M12 14h.01', 'M16 14h.01', 'M8 18h.01', 'M12 18h.01'),
    bars: P('M3 3v16a2 2 0 0 0 2 2h16', 'M18 17V9', 'M13 17V5', 'M8 17v-3'),
    trend: P('M16 7h6v6', 'm22 7-8.5 8.5-5-5L2 17'),
    pencil: P('M21.17 6.81a1 1 0 0 0-3.98-3.99L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z', 'm15 5 4 4'),
    trash: P('M3 6h18', 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6', 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', 'M10 11v6', 'M14 11v6'),
    gear: P('M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z') + C(12, 12, 3),
    alarm: C(12, 13, 8) + P('M12 9v4l2 2', 'M5 3 2 6', 'm22 6-3-3', 'M6.38 18.7 4 21', 'M17.64 18.67 20 21'),
    download: P('M12 15V3', 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'm7 10 5 5 5-5'),
    down: P('M12 5v14', 'm19 12-7 7-7-7'),
    link: P('M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71', 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'),
    timer: C(12, 14, 8) + P('M10 2h4', 'M12 14l3-3'),
    brain: P('M12 5a3 3 0 1 0-6 .13 4 4 0 0 0-2.52 5.77 4 4 0 0 0 .55 6.59A4 4 0 1 0 12 18Z', 'M12 5a3 3 0 1 1 6 .13 4 4 0 0 1 2.52 5.77 4 4 0 0 1-.55 6.59A4 4 0 1 1 12 18Z', 'M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4', 'M12 5v13'),
    cap: P('M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z', 'M22 10v6', 'M6 12.5V16a6 3 0 0 0 12 0v-3.5'),
    calc: R(4, 2, 16, 20, 2.5) + P('M8 6h8', 'M16 14v4', 'M16 10h.01', 'M12 10h.01', 'M8 10h.01', 'M12 14h.01', 'M8 14h.01', 'M12 18h.01', 'M8 18h.01'),
    plus: P('M5 12h14', 'M12 5v14'),
    clipboard: R(8, 2, 8, 4, 1) + P('M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M9 12h6', 'M9 16h4'),
    party: P('M5.8 11.3 2 22l10.7-3.79', 'M4 3h.01', 'M22 8h.01', 'M15 2h.01', 'M22 20h.01', 'm22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10', 'm22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11-.11.7-.72 1.22-1.43 1.22H17', 'm11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7', 'M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z'),
    file: P('M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', 'M14 2v4a2 2 0 0 0 2 2h4', 'M10 9H8', 'M16 13H8', 'M16 17H8'),
    book: P('M12 7v14', 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z'),
    refresh: P('M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8', 'M21 3v5h-5', 'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16', 'M8 16H3v5'),
    phone: R(5, 2, 14, 20, 2.5) + P('M12 18h.01'),
    star: P('M11.53 2.3a.53.53 0 0 1 .95 0l2.31 4.68a2.12 2.12 0 0 0 1.6 1.16l5.16.76a.53.53 0 0 1 .3.9l-3.74 3.64a2.12 2.12 0 0 0-.61 1.88l.88 5.14a.53.53 0 0 1-.77.56l-4.62-2.43a2.12 2.12 0 0 0-1.97 0L6.4 21.01a.53.53 0 0 1-.77-.56l.88-5.14a2.12 2.12 0 0 0-.61-1.88L2.16 9.8a.53.53 0 0 1 .3-.91l5.16-.75a2.12 2.12 0 0 0 1.6-1.16z'),
    history: P('M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', 'M3 3v5h5', 'M12 7v5l4 2'),
    ruler: P('M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z', 'm14.5 12.5 2-2', 'm11.5 9.5 2-2', 'm8.5 6.5 2-2', 'm17.5 15.5 2-2'),
    sparkles: P('M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0l1.58 6.14a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96l-6.14 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z', 'M20 3v4', 'M22 5h-4'),
    award: C(12, 8, 6) + P('m15.48 12.89 1.51 8.53a.5.5 0 0 1-.81.47l-3.58-2.69a1 1 0 0 0-1.2 0l-3.59 2.69a.5.5 0 0 1-.81-.47l1.51-8.53'),
    megaphone: P('m3 11 18-5v12L3 14v-3z', 'M11.6 16.8a3 3 0 1 1-5.8-1.6'),
    hand: P('M18 11V6a2 2 0 0 0-4 0', 'M14 10V4a2 2 0 0 0-4 0v2', 'M10 10.5V6a2 2 0 0 0-4 0v8', 'M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15'),
    help: C(12, 12, 10) + P('M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', 'M12 17h.01'),
    radio: C(12, 12, 2) + P('M4.9 19.1C1 15.2 1 8.8 4.9 4.9', 'M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5', 'M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5', 'M19.1 4.9C23 8.8 23 15.1 19.1 19'),
    card: R(2, 5, 20, 14, 2.5) + P('M2 10h20', 'M6 15h4'),
    wrench: P('M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'),
    globe: C(12, 12, 10) + P('M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20', 'M2 12h20'),
    gift: R(3, 8, 18, 4, 1) + P('M12 8v13', 'M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7', 'M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5'),
    pause: R(6, 4, 4, 16, 1.2) + R(14, 4, 4, 16, 1.2),
    send: P('m22 2-7 20-4-9-9-4z', 'M22 2 11 13'),
    stop: P('M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86z', 'M8 12h8'),
    note: P('M12 20h9', 'M16.38 3.62a1 1 0 0 1 3 3L7.37 18.64a2 2 0 0 1-.86.5l-2.87.84a.5.5 0 0 1-.62-.62l.84-2.87a2 2 0 0 1 .5-.86z'),
    radar: P('M19.07 4.93A10 10 0 0 0 6.99 3.34', 'M4 6h.01', 'M2.29 9.62A10 10 0 1 0 21.31 8.35', 'M16.24 7.76A6 6 0 1 0 8.23 16.67', 'M12 18h.01', 'M17.99 11.66A6 6 0 0 1 15.77 16.67') + C(12, 12, 2) + P('m13.41 10.59 5.66-5.66')
  };
  // ایموجی ⇒ [آیکون، لحن]. لحن فقط رنگ است؛ بقیه رنگِ متنِ کنارشان را می‌گیرند.
  const MAP = {
    '✅': ['check', 'ok'], '⚠': ['warn', 'warn'], '⛔': ['ban', 'bad'], '🔒': ['lock', 'gold'], '🔓': ['unlock', 'gold'], '🔐': ['lock', 'gold'],
    '🛡': ['shield'], '🎯': ['target'], '⏳': ['hourglass'], '⌛': ['hourglass'], '💎': ['gem', 'gold'], '💵': ['cash', 'ok'], '💰': ['wallet', 'gold'],
    '💾': ['save'], '💬': ['chat'], '🔍': ['search'], '🔎': ['search'], '💡': ['bulb', 'gold'], '🚀': ['rocket'], '🏆': ['trophy', 'gold'], '🔑': ['key', 'gold'],
    '👥': ['users'], '🌱': ['sprout', 'ok'], '⚡': ['zap', 'gold'], '👁': ['eye'], '🔔': ['bell'], '🔕': ['belloff'], '🔥': ['flame', 'warn'], '📴': ['offline'],
    '⚖': ['scale'], '🗓': ['calendar'], '📅': ['calendar'], '📊': ['bars'], '📈': ['trend', 'ok'], '✏': ['pencil'], '📝': ['note'], '🗑': ['trash'], '⚙': ['gear'],
    '⏰': ['alarm'], '📥': ['download'], '⬇': ['down'], '🔗': ['link'], '⏱': ['timer'], '🧠': ['brain'], '🎓': ['cap'], '🧮': ['calc'], '➕': ['plus'],
    '📋': ['clipboard'], '🎉': ['party', 'gold'], '📄': ['file'], '📘': ['book'], '📖': ['book'], '🔄': ['refresh'], '📱': ['phone'], '⭐': ['star', 'gold'],
    '🕘': ['history'], '📐': ['ruler'], '✨': ['sparkles', 'gold'], '🎖': ['award', 'gold'], '📣': ['megaphone', 'gold'], '👋': ['hand'], '❔': ['help'],
    '📡': ['radio'], '💳': ['card'], '🔧': ['wrench'], '🌐': ['globe'], '🎁': ['gift', 'gold'], '⏸': ['pause'], '🛑': ['stop', 'bad'], '✈': ['send', 'gold']
  };
  const keys = Object.keys(MAP).sort((a, b) => b.length - a.length);
  const RE = new RegExp('(' + keys.join('|') + ')\\uFE0F?', 'gu');
  const SKIP = 'script,style,textarea,option,select,title,svg,.xp2-ico,.xp2-level,[data-raw]';
  const svg = (name, tone) => `<svg class="lic${tone ? ' lic-' + tone : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${I[name]}</svg>`;
  // برای قالب‌هایی که بخواهند مستقیم آیکون بگذارند: ${lic('gem','gold')}
  const lic = (name, tone) => I[name] ? svg(name, tone) : '';
  function swap(node) {
    const text = node.nodeValue;
    RE.lastIndex = 0;
    if (!RE.test(text)) return;
    const host = node.parentNode;
    if (!host || (host.closest && host.closest(SKIP))) return;
    const tpl = document.createElement('template');
    const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
    RE.lastIndex = 0;
    tpl.innerHTML = esc(text).replace(RE, m => { const [n, t] = MAP[m.replace('️', '')] || []; return n ? svg(n, t) : m; });
    host.replaceChild(tpl.content, node);
  }
  function scan(root) {
    if (!root) return;
    if (root.nodeType === 3) { swap(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 11) return;
    if (root.nodeType === 1 && root.closest(SKIP)) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), hits = [];
    for (let n = w.nextNode(); n; n = w.nextNode()) { RE.lastIndex = 0; if (RE.test(n.nodeValue)) hits.push(n); }
    hits.forEach(swap);
  }
  function start() {
    scan(document.body);
    new MutationObserver(muts => {
      for (const m of muts) {
        if (m.type === 'characterData') swap(m.target);
        else m.addedNodes.forEach(scan);
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (typeof document !== 'undefined' && typeof MutationObserver !== 'undefined') {
    if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
  }
  return { lic, MAP, names: Object.keys(I) };
})();

// ── LOGO BASE64 CONSTANTS ──


// ══════════════════════════════════════════════════════
// CONSTANTS
// ══════════════════════════════════════════════════════
// localStorage helper — باید قبل از هر استفاده‌ای تعریف شود (رفع خطای TDZ)
const L = {
  g: k => { try { return JSON.parse(localStorage.getItem(k)) } catch { return null } },
  s: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch(e) {} },
  d: k => localStorage.removeItem(k)
};
const esc = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({
  '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'
}[ch]));
const safeColor = value => /^#[0-9a-f]{6}$/i.test(String(value || '')) ? String(value) : '#C8A84B';
const safeUid = value => String(value || '').replace(/[^0-9A-Za-z_-]/g, '');
const S = L; // backward compat

// v14.3: هیچ رمزی در سورس نیست. برای ورود اضطراری آفلاین فقط یک «هش» محلی
// روی همین دستگاه نگه داشته می‌شود (بعد از اولین ورود موفقِ آنلاین).
async function mentorLocalHash(pw){
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('sc-mentor|' + pw));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}
async function rememberMentorPass(pw){
  try {
    L.s('sc_mentor_lochash', await mentorLocalHash(pw));
    L.d('sc_mentor_pass'); // پاک‌سازی رمزِ متنیِ نسخه‌های قبلی از این دستگاه
  } catch(e) { console.warn('rememberMentorPass:', e.message); }
}
async function mentorPassMatchesLocal(pw){
  const h = L.g('sc_mentor_lochash');
  if (!h) return false;
  try { return (await mentorLocalHash(pw)) === h; } catch(e) { return false; }
}

// ── DEFAULT REASON LISTS (used if mentor hasn't customized yet) ──
// ── دلایل ورود — دقیقاً همان‌طور که منتور تعریف کرده ──
// ══════════════════════════════════════════════════════
// اصول ورود (v20)
//
// استانداردِ آکادمی برای «ورود حداقلیِ درست»:
//   دلیل ورود ≥ ۳ · دلیل حد ضرر ≥ ۲ · دلیل حد سود ≥ ۲
// دلیل ورود مهم‌ترین وزن را دارد، بعد حد ضرر و حد سود.
//
// «یادداشت» عمداً هیچ‌جا نمره نمی‌دهد: شخصی و سلیقه‌ای است و یکی می‌نویسد و
// یکی نمی‌نویسد — قضاوت با آن منصفانه نیست.
//
// این تعریف تنها مرجع است؛ دیسیپلین، پایبندی به پلن، تکمیل سریع و مقایسه‌ی
// کلاس همه از همین‌جا می‌خوانند تا هرگز دو عدد ناهماهنگ نشان داده نشود.
// ══════════════════════════════════════════════════════
const ENTRY_PRINCIPLES = { entry: 3, sl: 2, tp: 2 };
// v23.3: بعد از پله‌ی آخرِ نردبان (۱۵۰) — درآمد دلاری شروع می‌شود و اصول سخت‌تر.
const PRO_PRINCIPLES = { entry: 4, sl: 2, tp: 2 };
// سقف اهرم برای حساب‌های دوره. اهرم ۳ بعداً و با معیار عملکرد — هنوز تعریف نشده.
const LEVERAGE_MAX = 2;
// حداقل نسبت سود به ضرر به تایم‌فریم بستگی دارد (قانون مالک، v23.6):
//   ۱ ساعت و بالاتر ≥ ۲ · زیر ۱ ساعت (۱۵ دقیقه و …) ≥ ۱٫۵ · تایم‌فریم نامشخص ≥ ۲
// فرم، پرسشِ هنگام ثبت و قانونِ پلن همه از rrMinFor می‌خوانند.
const RR_MIN = 2;
const RR_MIN_INTRADAY = 1.5;
// «15m»، «1H»، «4h»، «1D»، «1W»، «۱۵ دقیقه» ⇒ دقیقه؛ نامفهوم ⇒ null.
// فهرست تایم‌فریم‌ها را منتور می‌تواند ویرایش کند، پس به فهرست ثابت تکیه نمی‌شود.
function tfMinutes(tf){
  const raw = String(tf || '').trim().replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
  const m = raw.match(/^(\d+(?:\.\d+)?)\s*(m|min|mins|minute|minutes|دقیقه|h|hr|hour|hours|ساعت|ساعته|d|day|days|روز|روزه|w|week|weeks|هفته|M|mo|month|ماه)$/i);
  if (!m) return null;
  const n = +m[1], u = m[2];
  if (u === 'M' || /^(mo|month|ماه)$/i.test(u)) return n * 43200;
  const k = u.toLowerCase();
  if (/^(m|min|mins|minute|minutes|دقیقه)$/.test(k)) return n;
  if (/^(h|hr|hour|hours|ساعت|ساعته)$/.test(k)) return n * 60;
  if (/^(d|day|days|روز|روزه)$/.test(k)) return n * 1440;
  return n * 10080;
}
function rrMinFor(tf){ const mins = tfMinutes(tf); return mins !== null && mins < 60 ? RR_MIN_INTRADAY : RR_MIN; }
// تریدهایی که بعد از مرز افتاده‌اند؛ proSplit پرش می‌کند.
const _PRO_TRADES = new WeakSet();
function ensureProMarks(){
  if (typeof TRADES !== 'undefined' && Array.isArray(TRADES)) proSplit(TRADES);
  if (typeof ALL_TRADES !== 'undefined' && ALL_TRADES)
    for (const a of Object.values(ALL_TRADES)) if (Array.isArray(a)) proSplit(a);
}
// قاعده‌ی حرفه‌ای فقط برای دانشجوی دوره؛ منتور همان دانشجوهای دوره را می‌بیند.
function proRuleOn(){ return SESSION?.role === 'mentor' || isCourseAccount(); }
// آستانه‌ی اصول برای یک تریدِ موجود
function needFor(t){
  if (!t || !proRuleOn()) return ENTRY_PRINCIPLES;
  ensureProMarks();
  return _PRO_TRADES.has(t) ? PRO_PRINCIPLES : ENTRY_PRINCIPLES;
}
// آستانه برای ترید بعدیِ خودِ کاربر — تریدی که هنوز در فهرست نیست
function needForNext(){
  const n = (Array.isArray(TRADES) ? TRADES : []).filter(t => t && !t._deleted).length;
  return isCourseAccount() && n >= proThreshold() ? PRO_PRINCIPLES : ENTRY_PRINCIPLES;
}
// آستانه‌ی فرمِ باز — موقع ساختن فرم تعیین می‌شود
let FORM_NEED = null;

// ── ماشین‌حساب مبلغ ورود (فاز حرفه‌ای) ──
const RISK_MIN = 1, RISK_MAX = 2;          // درصدِ مجازِ ریسک هر معامله
const PRO_PHASE1_TRADES = 100;             // ۱۰۰ تریدِ نخستِ اهرمی: اهرم قفل روی ۲
const PRO_LOCKED_LEVERAGE = 2;
// تابع خالص: همه‌ی ورودی‌ها را می‌گیرد و یا نتیجه می‌دهد یا دلیلِ محاسبه‌نشدن.
function calcEntrySize({ B, r, entry, stop, L = PRO_LOCKED_LEVERAGE, openMargin = 0, rMin = RISK_MIN, rMax = RISK_MAX }){
  B = +B; r = +r; entry = +entry; stop = +stop; L = +L; openMargin = +openMargin || 0;
  if (!(B > 0))      return { ok:false, why:'کل موجودی حساب صرافی را وارد کن' };
  if (!(r >= rMin && r <= rMax))
                     return { ok:false, why:`حداکثر ضرر هر معامله باید بین ${faNum(rMin)} تا ${faNum(rMax)}٪ کل حساب باشد` };
  if (!(entry > 0) || !(stop > 0) || entry === stop)
                     return { ok:false, why:'برای محاسبه، قیمت ورود و حد ضرر را وارد کن' };
  if (!(L >= 1))     return { ok:false, why:'اهرم نامعتبر است' };
  const s = Math.abs(entry - stop) / entry * 100;        // فاصله‌ی حد ضرر، درصد
  // حد ضرری که پشتِ قیمت لیکوییدیشن باشد هرگز فعال نمی‌شود
  if (s >= 100 / L)  return { ok:false, why:`حد ضرر ${faNum(s.toFixed(1))}٪ دور است — با اهرم ${faNum(L)}× قبل از رسیدن به آن لیکویید می‌شوی` };
  const R = B * r / 100;                                  // زیان برنامه‌ریزی‌شده
  const M = R / ((s / 100) * L);                          // مارجین لازم
  const free = Math.max(0, B - openMargin);
  return { ok:true, s, R, M, position: M * L, L, free, shortfall: Math.max(0, M - free) };
}
// v26.8: وقتی موجودی برای ریسکِ کامل کافی نیست — کمترین فاصله‌ی حد ضرر که با مارجینِ M و اهرمِ L همان زیانِ R را بدهد
function calcMinStopFor({ R, M, L, entry, long }){
  R = +R; M = +M; L = +L; entry = +entry;
  if (!(R > 0) || !(M > 0) || !(L >= 1) || !(entry > 0)) return null;
  const pct = R / (M * L) * 100;
  if (pct >= 100 / L) return null;                       // پشتِ قیمتِ لیکوییدیشن ⇒ معنا ندارد
  return { pct, price: long ? entry * (1 - pct / 100) : entry * (1 + pct / 100) };
}
// ریسکِ واقعیِ یک تریدِ ثبت‌شده، به درصدِ موجودی — برای تحلیل
function tradeRiskPct(t, capital){
  const B = +(t.capital || capital), e = +t.entry, sl = +t.stopLoss, m = +t.size, lev = +t.leverage || 1;
  if (!(B > 0) || !(m > 0)) return null;
  const atStop = (e > 0 && sl > 0) ? m * lev * (Math.abs(e - sl) / e) : null;
  // حالت ۳: بیشترین زیان خودِ مارجین ایزوله است، به‌اضافه‌ی ذخیره‌ی هزینه
  if (isIsolatedBudget(t)) return (Math.min(m, atStop ?? m) + (+t.feeReserve || 0)) / B * 100;
  return atStop === null ? null : atStop / B * 100;
}
function capitalKey(){ return 'sc_capital_' + (SESSION?.uid || 'guest'); }
function riskKey(){ return 'sc_riskpct_' + (SESSION?.uid || 'guest'); }
function calcModeKey(){ return 'sc_calcmode_' + (SESSION?.uid || 'guest'); }
function fixedMarginKey(){ return 'sc_fixedmargin_' + (SESSION?.uid || 'guest'); }
function feeReserveKey(){ return 'sc_feereserve_' + (SESSION?.uid || 'guest'); }

// ── سه حالتِ ماشین‌حساب (v23.4) ──
// حالت ۱ از ترید ۱۵۱؛ حالت ۲ بعد از ۱۰۰ تریدِ حالت ۱ (ترید ۲۵۱)؛ حالت ۳ بعد از
// ۳۰۰ ترید کلی (ترید ۳۰۱). روی هم باز می‌شوند — حالت ۱ بعد از بقیه هم می‌ماند.
const PRO_MODE3_AT = 300;
const PRO_MODES = {
  1: { name:'اهرم ثابت',     sub:'مبلغ ورود حساب می‌شود' },
  2: { name:'مارجین ثابت',   sub:'اهرم حساب می‌شود' },
  3: { name:'مارجین ایزوله', sub:'بدون سفارش حد ضرر · ویژه SoDEX' }
};
function proModeUnlocks(){
  const n = proThreshold(), two = n + PRO_PHASE1_TRADES;
  return { 1: n, 2: two, 3: Math.max(PRO_MODE3_AT, two) };
}
// حالت‌های باز برای تریدی در جایگاهِ p (ترید اول = ۱)
function proModesOpenAt(p){ const u = proModeUnlocks(); return [1, 2, 3].filter(k => p > u[k]); }
// حالت‌های بازِ ماشین‌حسابِ همین کاربر — مدیر هر سه را دارد
function calcModesOpen(p){ return ownerJournal() ? [1, 2, 3] : proModesOpenAt(p); }
// بازه‌ی مجازِ «حداکثر ضرر» در ماشین‌حساب؛ برای مدیر قفل نیست (هشدارِ بالای ۲٪ موقع ثبت می‌ماند)
const OWNER_RISK = { rMin: 0.01, rMax: 100 };
// جایگاهِ تریدِ فرم: ویرایش ⇒ جایگاه خودش، ترید تازه ⇒ بعدی
function formTradePosition(editId){ return proThreshold() + proTradeIndex(editId); }
function nextTradePosition(){ return (Array.isArray(TRADES) ? TRADES : []).filter(t => t && !t._deleted).length + 1; }
// تریدی که با حالت ۳ اندازه گرفته شده: سقف زیانش مارجین ایزوله است، نه حد ضرر
function isIsolatedBudget(t){ return !!t && +t.sizeMode === 3 && t.marginType === 'isolated'; }
// زیانِ برنامه‌ریزی‌شده مشخص است: حد ضرر دارد، یا مارجین ایزوله‌ی حالت ۳
function hasDefinedRisk(t){ return !!t && (+t.stopLoss > 0 || isIsolatedBudget(t)); }

// حالت ۲: مارجین ثابت است و اهرم مجهول. L = R / (M × s/100)
function calcLeverageForMargin({ B, r, M, entry, stop, maxLev = LEVERAGE_MAX, openMargin = 0, rMin = RISK_MIN, rMax = RISK_MAX }){
  B = +B; r = +r; M = +M; entry = +entry; stop = +stop; maxLev = +maxLev; openMargin = +openMargin || 0;
  if (!(B > 0)) return { ok:false, why:'کل موجودی حساب صرافی را وارد کن' };
  if (!(r >= rMin && r <= rMax))
                return { ok:false, why:`حداکثر ضرر هر معامله باید بین ${faNum(rMin)} تا ${faNum(rMax)}٪ کل حساب باشد` };
  if (!(M > 0)) return { ok:false, why:'مارجین ثابت هر معامله را وارد کن' };
  if (!(entry > 0) || !(stop > 0) || entry === stop)
                return { ok:false, why:'بدون فاصله‌ی حد ضرر، اهرم قابل محاسبه نیست — ورود و حد ضرر را وارد کن' };
  const s = Math.abs(entry - stop) / entry * 100;
  const R = B * r / 100;
  const lev = R * 100 / (M * s);                          // اهرم محاسباتی
  const fit = lev < 1 - 1e-9 ? 'low' : lev > maxLev + 1e-9 ? 'high' : 'ok';
  // اهرمی که واقعاً زده می‌شود: بالاتر از سقف نه، کمتر از ۱ ممکن نیست، و
  // گرد کردن رو به پایین — اهرمِ بالاتر از عدد محاسبه‌شده ریسک را بیشتر می‌کند.
  const useLev = fit === 'high' ? maxLev : fit === 'low' ? 1 : Math.floor(lev * 100 + 1e-6) / 100;
  // حتی بدون اهرم زیان از بودجه بیشتر است ⇒ بیشترین مارجینِ مجاز با اهرم ۱
  const useM = fit === 'low' ? R * 100 / s : M;
  if (s >= 100 / useLev)
                return { ok:false, why:`حد ضرر ${faNum(s.toFixed(1))}٪ دور است — با اهرم ${faNum(useLev)}× قبل از رسیدن به آن لیکویید می‌شوی` };
  const free = Math.max(0, B - openMargin);
  return { ok:true, s, R, M, lev, fit, maxLev, useLev, useM, position: useM * useLev,
           loss: useM * useLev * s / 100, free, shortfall: Math.max(0, useM - free) };
}
// حالت ۳: مارجین ایزوله از بودجه‌ی ریسک می‌آید و حد ضرر تعریف نمی‌شود. M = R − C
function calcIsolatedBudget({ B, r, C = 0, lev = LEVERAGE_MAX, openMargin = 0, rMin = RISK_MIN, rMax = RISK_MAX }){
  B = +B; r = +r; C = (C === '' || C == null) ? 0 : +C; lev = +lev; openMargin = +openMargin || 0;
  if (!(B > 0)) return { ok:false, why:'کل موجودی حساب صرافی را وارد کن' };
  if (!(r >= rMin && r <= rMax))
                return { ok:false, why:`حداکثر ضرر هر معامله باید بین ${faNum(rMin)} تا ${faNum(rMax)}٪ کل حساب باشد` };
  if (!(C >= 0)) return { ok:false, why:'ذخیره‌ی هزینه‌ها نمی‌تواند منفی باشد' };
  if (!(lev >= 1)) return { ok:false, why:'اهرم نامعتبر است' };
  const R = B * r / 100;
  if (C >= R)   return { ok:false, why:`ذخیره‌ی هزینه‌ها (${faNum(+C.toFixed(2))}) از بودجه‌ی ریسک (${faNum(+R.toFixed(2))}) کمتر نیست — مارجینی تخصیص داده نمی‌شود` };
  const M = R - C;
  const free = Math.max(0, B - openMargin);
  return { ok:true, R, C, M, lev, position: M * lev, free, shortfall: Math.max(0, M - free) };
}
// v26.7: خودِ معامله‌های باز — تا کاربر ببیند کدام‌ها موجودیِ آزاد را گرفته‌اند
function openTradesExcept(id){
  return (Array.isArray(TRADES) ? TRADES : []).filter(t => t && !t._deleted && !(+t.exit > 0) && t.id !== id && +t.size > 0);
}
function openTradesNote(id){
  const list = openTradesExcept(id).sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  if (!list.length) return '';
  const row = t => `<a href="#" class="pc-open-t" onclick="event.preventDefault();showDetail('${esc(t.id)}')"><b>${esc(t.coin || '—')}</b><span>${t.date ? fmtDateFa(t.date) : ''}</span><em><bdi dir="ltr">$${(+t.size).toLocaleString('en-US', { maximumFractionDigits: 2 })}</bdi></em></a>`;
  return `<div class="pc-open"><div class="pc-open-h">${faNum(list.length)} معامله‌ی باز در ژورنال — مارجینشان از موجودی کم شده:</div>
    ${list.slice(0, 3).map(row).join('')}${list.length > 3 ? `<div class="pc-open-more">و ${faNum(list.length - 3)} معامله‌ی بازِ دیگر</div>` : ''}
    <div class="pc-open-f">اگر در صرافی بسته‌اند، این‌جا هم قیمتِ خروجشان را بزن تا موجودیِ آزاد درست حساب شود.</div></div>`;
}
// مارجینِ پوزیشن‌های بازِ کاربر، به‌جز همان تریدی که دارد ویرایش می‌شود
function openMarginExcept(id){
  return (Array.isArray(TRADES) ? TRADES : [])
    .filter(t => t && !t._deleted && !(+t.exit > 0) && t.id !== id)
    .reduce((a, t) => a + (+t.size || 0), 0);
}
// چندمین تریدِ اهرمیِ فاز حرفه‌ای است؟ (۱ یعنی ترید ۱۵۱)
function proTradeIndex(editId){
  const sp = proSplit(TRADES);
  if (editId) { const arr=[...sp.pro]; const i=arr.findIndex(t=>t.id===editId); if(i>=0) return i+1; }
  return sp.pro.size + 1;
}
// برچسب «دلیل ورود ۳+» وقتی دانشجو هر دو فاز را دارد
function entryNeedText(){
  const sp = (typeof TRADES !== 'undefined' && isCourseAccount()) ? proSplit(TRADES) : null;
  return sp && sp.pro.size
    ? `${faNum(ENTRY_PRINCIPLES.entry)}+ · ${faNum(PRO_PRINCIPLES.entry)}+ بعد از ${faNum(sp.n)}`
    : `${faNum(ENTRY_PRINCIPLES.entry)}+`;
}
const PRINCIPLE_WEIGHTS = { entry: .5, sl: .25, tp: .25 };

const _rc = a => Array.isArray(a) ? a.length : 0;

// چند چیپ که در واقع یک دلیل‌اند: فیبوی ۲ و ۳ نقطه‌ای دو ابزار برای یک ایده‌ی
// واحدند، پس با هم یک دلیل حساب می‌شوند — وگرنه دو کلیک روی یک ایده حس
// می‌دهد که تحلیل سه‌لایه بوده. برای افزودن خانواده‌ی جدید فقط یک الگو اضافه کن.
const REASON_FAMILIES = [/فیبوناچی/];
function effectiveReasonCount(list){
  const arr = Array.isArray(list) ? list : [];
  const fams = new Set(); let n = 0;
  for (const r of arr){
    const i = REASON_FAMILIES.findIndex(re => re.test(String(r)));
    if (i < 0) { n++; continue; }          // دلیل مستقل
    if (fams.has(i)) continue;             // هم‌خانواده‌ی چیزی که قبلاً شمرده شد
    fams.add(i); n++;
  }
  return n;
}
function principleCounts(t){
  return { entry:effectiveReasonCount(t?.entryReasons), sl:_rc(t?.slReasons), tp:_rc(t?.tpReasons) };
}
// آیا هر سه شرط رعایت شده؟
function principlesMet(t){
  const c=principleCounts(t);
  const n=needFor(t);
  return c.entry>=n.entry && c.sl>=n.sl && c.tp>=n.tp;
}
// نمره‌ی جزئی ۰ تا ۱۰۰ — برای نشان دادن پیشرفت، نه فقط قبول/رد
function principlesScore(t){
  const c=principleCounts(t);
  const f=(have,need)=>Math.min(1,have/need);
  const n=needFor(t);
  return Math.round((f(c.entry,n.entry)*PRINCIPLE_WEIGHTS.entry
                    +f(c.sl,n.sl)*PRINCIPLE_WEIGHTS.sl
                    +f(c.tp,n.tp)*PRINCIPLE_WEIGHTS.tp)*100);
}
// ── بایگانیِ دوره‌ی کاغذی ──
// پیش از راه‌افتادن ژورنال، بچه‌ها روی دفتر می‌نوشتند و دفتر جایی برای «دلیل
// ورود» نداشت. وقتی تریدهای گذشته را وارد اپ کردند، قیمت‌ها را داشتند ولی
// دلایل را دیگر به یاد نمی‌آوردند. چنین تریدی ژورنالِ ناقص نیست، اصلاً در اپ
// ژورنال نشده — و نباید نمره‌ی اصول را پایین بیاورد.
//
// هر دو شرط لازم است. شرط تاریخ نگهبانِ اصلی است: تریدِ امروز که دلیل ندارد
// واقعاً دلیل ندارد و باید در نمره بماند، وگرنه این قاعده به راهِ فرار تبدیل
// می‌شود. سود و زیان و وین‌ریت هیچ‌کدام دست نمی‌خورند — معامله‌ی کاغذی هم
// سودش واقعی بوده.
// کفِ سراسری: پیش از این تاریخ، ژورنال هنوز به دست بچه‌ها نرسیده بود.
const JOURNAL_ERA_FROM = '2026-05-01';

// مرزِ شخصیِ هر دانشجو = دیرترِ کفِ سراسری و روزی که خودش اولین دلیل را ثبت کرد.
// «دیرتر» عمدی است: کسی که دیر پیوسته نباید بابت ماه‌های قبلش جریمه شود، و
// کسی که یک بار روی تریدی از پارسال دلیلی زده نباید کل بایگانی‌اش برگردد.
//
// روی همان فهرستی حساب می‌شود که به آن داده شده — پس در پنل منتور برای هر
// دانشجو مرزِ خودش درمی‌آید، نه مرزِ استاد. WeakMap کش می‌کند و چون آرایه‌ی
// TRADES با هر ذخیره از نو ساخته می‌شود، خودبه‌خود باطل می‌شود.
const _journalStartCache = new WeakMap();
function journalStartFor(list){
  const arr = Array.isArray(list) ? list : [];
  if (_journalStartCache.has(arr)) return _journalStartCache.get(arr);
  let first = '';
  for (const t of arr){
    const c = principleCounts(t);
    if (!(c.entry || c.sl || c.tp)) continue;
    const d = String(t?.date || '');
    if (d && (!first || d < first)) first = d;
  }
  const out = first && first > JOURNAL_ERA_FROM ? first : JOURNAL_ERA_FROM;
  _journalStartCache.set(arr, out);
  return out;
}

function tradeArchival(t, start){
  const c = principleCounts(t);
  if (c.entry || c.sl || c.tp) return false;              // دلیلی دارد ⇒ ژورنال شده
  // نوعِ start را چک می‌کنیم چون .filter(tradeTouched) ایندکس را به‌عنوان
  // آرگومان دوم می‌فرستد و یک عدد اینجا مقایسه را بی‌صدا خراب می‌کرد.
  const from = typeof start === 'string' && start ? start
             : journalStartFor(typeof TRADES !== 'undefined' ? TRADES : []);
  return String(t?.date || '') < from;                    // و مالِ دوره‌ی دفتر است
}
// آیا این معامله در خودِ اپ ژورنال شده و قابل قضاوت است؟
function tradeTouched(t, start){ return !tradeArchival(t, start) }
function principlesGap(t){
  const c=principleCounts(t), g=[];
  const n=needFor(t);
  if(c.entry<n.entry) g.push(`${faNum(n.entry-c.entry)} دلیل ورود`);
  if(c.sl<n.sl) g.push(`${faNum(n.sl-c.sl)} دلیل حد ضرر`);
  if(c.tp<n.tp) g.push(`${faNum(n.tp-c.tp)} دلیل حد سود`);
  return g;
}

const DEFAULT_ENTRY_REASONS = [
  'حمایت استاتیک','مقاومت استاتیک','حمایت داینامیک','مقاومت داینامیک',
  'فیبوناچی 2 نقطه ای','فیبوناچی 3 نقطه ای',
  'کانال صعودی','کانال نزولی','کانال رنج',
  'الگوی مثلث جمع شونده','الگوی پرچم','الگوی سر و شانه',
  'اشباع خرید RSI','اشباع فروش RSI','واگرایی','پولبک',
  'پرایس اکشن - شکست روند کوتاه مدت','پرایس اکشن - شکست روند میان مدت','پرایس اکشن - شکست روند بلند مدت',
  'قدرت روند صعودی بیشتر','قدرت روند نزولی بیشتر',
  'شکست سطح کلیدی (سطح مهم)'
];

// ── حد ضرر/سود: دو ست جداگانه برای Long و Short ──
// Long SL = زیر سطح | Short SL = بالای سطح
const DEFAULT_SL_LONG = [
  'زیر حمایت استاتیک','زیر حمایت داینامیک',
  'زیر فیبو','زیر کانال','زیر الگو',
  'زیر کف اخیر','زیر سطح شکسته',
  'ATR-Based','Fixed %','Risk/Reward Based'
];
const DEFAULT_SL_SHORT = [
  'بالای مقاومت استاتیک','بالای مقاومت داینامیک',
  'بالای فیبو','بالای کانال','بالای الگو',
  'بالای سقف اخیر','بالای سطح شکسته',
  'ATR-Based','Fixed %','Risk/Reward Based'
];

// Long TP = بالای سطح | Short TP = زیر سطح
const DEFAULT_TP_LONG = [
  'مقاومت استاتیک','مقاومت داینامیک',
  'بالای فیبو','بالای کانال','هدف الگو',
  'سقف تاریخی','R:R 1:2','R:R 1:3','R:R 1:4',
  'ATR Target','فریم بالاتر','خبر/رویداد'
];
const DEFAULT_TP_SHORT = [
  'حمایت استاتیک','حمایت داینامیک',
  'زیر فیبو','زیر کانال','هدف الگو',
  'کف تاریخی','R:R 1:2','R:R 1:3','R:R 1:4',
  'ATR Target','فریم بالاتر','خبر/رویداد'
];

// helper: لیست SL یا TP را بر اساس جهت معامله برمی‌گرداند
function getSLList(direction) {
  const saved = S.g('sc_reasons_sl_'+(direction==='Short'?'short':'long'));
  return saved || (direction==='Short' ? DEFAULT_SL_SHORT : DEFAULT_SL_LONG);
}
function getTPList(direction) {
  const saved = S.g('sc_reasons_tp_'+(direction==='Short'?'short':'long'));
  return saved || (direction==='Short' ? DEFAULT_TP_SHORT : DEFAULT_TP_LONG);
}
function saveSLList(direction, arr) { S.s('sc_reasons_sl_'+(direction==='Short'?'short':'long'), arr); }
function saveTPList(direction, arr) { S.s('sc_reasons_tp_'+(direction==='Short'?'short':'long'), arr); }

// کلیدهای settings panel — برای backward-compat با DEFAULT_SL_REASONS
const DEFAULT_SL_REASONS = DEFAULT_SL_LONG;
const DEFAULT_TP_REASONS = DEFAULT_TP_LONG;

// ── DYNAMIC REASON GETTERS (reads mentor's saved lists) ──
function getReasonList(key, def) {
  return S.g('sc_reasons_'+key) || def;
}
function saveReasonList(key, arr) {
  S.s('sc_reasons_'+key, arr);
}
// Load reason lists from cloud
// همه‌ی تنظیماتِ قابل‌ویرایش توسط ادمین را از سرور می‌گیرد و محلی را همگام می‌کند
// تا تغییرات منتور برای همه‌ی دانشجوها هم اعمال شود.
async function loadAllSettings(){
  const keys=[
    'sc_reasons_entry','sc_reasons_sl_long','sc_reasons_sl_short','sc_reasons_tp_long','sc_reasons_tp_short',
    'sc_coins','sc_strategies','sc_sessions','sc_emotions','sc_timeframes',
    'sc_xp_milestones','sc_academy_name','sc_base_budget','sc_tilt'
  ];
  await Promise.all(keys.map(async k=>{
    const v = await cloudGetRaw(k);
    if(v!==undefined && v!==null) L.s(k, v); // همیشه آخرین نسخه‌ی سرور را جایگزین کن
  }));
}
// سازگاری با کد قبلی
async function loadReasonLists(){ return loadAllSettings(); }
const SETTINGS_KEYS=[
  'sc_reasons_entry','sc_reasons_sl_long','sc_reasons_sl_short','sc_reasons_tp_long','sc_reasons_tp_short',
  'sc_coins','sc_strategies','sc_sessions','sc_emotions','sc_timeframes','sc_xp_milestones','sc_academy_name','sc_base_budget','sc_tilt'
];
// مهاجرتِ تنظیماتِ محلیِ ادمین به سرور (وقتی سرور هنوز آن کلید را ندارد)
// تا سفارشی‌سازی‌های قبلیِ منتور برای دانشجوها هم اعمال شود.
async function pushMentorSettingsToCloud(){
  await Promise.all(SETTINGS_KEYS.map(async k=>{
    const local=L.g(k);
    if(local===null||local===undefined) return;
    const cloud=await cloudGetRaw(k);
    if(cloud===undefined) return;          // آفلاین: کاری نکن
    if(cloud===null) await cloudSet(k, local); // سرور خالی بود → نسخه‌ی ادمین را بالا ببر
  }));
}

// Shortcuts
const ENTRY_REASONS = () => getReasonList('entry', DEFAULT_ENTRY_REASONS);
// SL/TP are direction-aware — pass direction arg
const SL_REASONS = (dir='Long') => getSLList(dir);
const TP_REASONS = (dir='Long') => getTPList(dir);

const STRATEGIES = ['Scalping','Day Trade','Swing','Position','Breakout','Range','News/Event','DCA','Other'];
const SESSIONS   = ['Asian','London','New York','London/NY Overlap'];
const EMOTIONS   = ['Confident','Disciplined','Neutral','FOMO','Greedy','Fearful','Nervous','Revenge'];
// معنی فارسی دقیق هر احساس (مقدار ذخیره‌شده انگلیسی می‌ماند، فقط نمایش دوزبانه می‌شود)
const EMOTIONS_FA = {
  'Confident':'با اطمینان','Disciplined':'منضبط','Neutral':'خنثی','FOMO':'ترس از جا‌ماندن',
  'Greedy':'طمع','Fearful':'ترسیده','Nervous':'مضطرب','Revenge':'انتقامی'
};
const emoLabel = v => EMOTIONS_FA[v] ? `${v} — ${EMOTIONS_FA[v]}` : v;
const TIMEFRAMES = ['1m','3m','5m','15m','30m','1H','2H','4H','6H','12H','1D','1W'];
const COINS      = ['BTC','ETH','BNB','SOL','HYPE','PAXG','XAUT','XRP','ADA','DOGE','AVAX','DOT','MATIC','LINK','UNI','LTC','ATOM','ARB','OP','INJ','TIA','SUI','APT','Other'];
// لیست کامل آفلاین رمزارزها (پشتیبان وقتی CoinGecko در دسترس نیست) — بدون شلوغی، فقط نماد
const COINS_FULL = ['BTC','ETH','BNB','SOL','HYPE','PAXG','XAUT','XRP','ADA','DOGE','AVAX','DOT','TRX','LINK','MATIC','TON','SHIB','LTC','BCH','UNI','ATOM','XLM','ETC','FIL','HBAR','APT','ARB','OP','NEAR','VET','ICP','INJ','TIA','SUI','SEI','RNDR','GRT','AAVE','MKR','ALGO','QNT','FTM','EGLD','SAND','MANA','AXS','THETA','FLOW','XTZ','CHZ','EOS','KAVA','ZEC','DASH','NEO','IOTA','GALA','PEPE','WIF','BONK','FLOKI','JUP','PYTH','STRK','ENA','ORDI','BLUR','LDO','CRV','SNX','COMP','1INCH','DYDX','RUNE','KAS','CFX','WLD','FET','AGIX','OCEAN','ROSE','CELO','ZIL','ENJ','BAT','ANKR','SUSHI','YFI','UMA','BAL','REN','KSM','WAVES','DCR','XMR','TWT','GMT','APE','LRC','IMX','MINA','CAKE','USDT','USDC','USDS','WBT','LEO','RAIN','USDE','DAI','CC','USD1','GRAM','USDG','TAO','CRO','PYUSD','OKB','BTW','USYC','RLUSD','USDY','ONDO','BUIDL','PUMP','ASTER','USDF','MNT','WLFI','SKY','USDD','M','EURSAFO','MORPHO','U','HTX','BGB','BFUSD','USDGO','VVV','JST','GT','KCS','POL','RENDER','PI','PEARL','LIT','AERO','OUSD','NEXO','ZRO','USTB','GHO','STX','ETHFI','XDC','NIGHT','AKE','BDX','JAAA','FLR','Q','USD0','KAU','RAY','EUTBL','TRUMP','PENGU','EURC','YLDS','TUSD','STABLE','A7A5','VIRTUAL','GRASS','HASH','DRV','PENDLE','BSV','BTT','XPL','FF','SPX','SOFID','REUSD','UB','JTRSY','OUSG','SUN','CARDS','APXUSD','FDUSD','GNO','OHM','PIEVERSE','KITE','BP','KAIA','MON','USDAI','JTO','LUNC','AR','APEPE','CVX','ENS','SHFL','KMNO','ZBCN','SYRUP','SAFO','JASMY','NFT','EIGEN','PC0000031','AKT','S','FRAX','KOGE','CRVUSD','KAG','USX','FLUID','GRX','MET','ZAMA','PONS','EURCV','USAT','BR','TRAC','AUSD','ANVL','BTSE','USTBL','ZK','SENT','2Z','PC0000033','XCN','BORG','STRCX','CRCLB','A','BEAM','USELESS','APYUSD','COCO','MX','VSN','NPC','SPCXB','GOMINING','FARTCOIN','GUSD','SN51','RAIL','0G','AIOZ','B','AWE','DGAI','XEC','JPYC','PC0000097','SUPER','SFP','JPYSC','CASH','ONYC','GEOD','MSTRX','OZO','H','PLUME','ATH','ULTIMA','BC','AVUSD','RSR','MGLO','META','KNTQ','THBILL','GLM','NOPAL','CASHCAT','ZEN','DBR','PC0000023','ALFW','RLB','SKR','SN64','ORCA','CRCLX','PC0000085','SOON','USDAT','AUTO','PC0000015','SOSO','SHX','CAP','EDGE','STAC','GENIUS','W','WAL','USD3','FRXUSD','CRCLON','PROM','UUSD','NXM','BGBTC','PEAQ','STONK','FUN','QRL','FORM','ZRX','ACRED','CHEEMS','USDA','QTUM','DOG','BABYCLAW','WEMIX','ARKM','CHIP','GMX','MELANIA','AI','YZY','SN4','SAFE','GGBR','HNT','CUSD','LPT','GAS','RED','PROS','NMR','PGOLD','MARSCOIN','FXUSD','PC0000019','COW','USDSUI','WM','OMI','ADI','PC0000101','MTBILL','CKB','RIF','CGUSD','LISUSD','FEUSD','VELO','DOLA','UNT','TSLAX','APES','BRLV','UAI','FXSAVE','ALT','NOXO','AMP','TRUSD','UNP','ZETA','PC0000049','DIEM','XAUM','TEMPLE','O','MCAT','BABYDOGE','TFUEL','IUSD','LINEA','VTHO','KAITO','HOODINU','BABY','HOT','SPYX','FT','ZIG','USDX','IO','DUSK','GAL','PRIZE','MAGMA','SPK','NILA','AXL','USDON','ELG','QUBIC','SNDKB','SPCXX','BANANAS31','DEXE','ZANO','ORE','DGB','BERA','RE','REUR','RLC','EDU','AP3X','ESP','TURBO','IVVON','SWOP','STRCON','PC0000027','PURR','PC0000081','IOST','PC0016245','BAN','ALEO','AZTEC','NOCK','EARNUSD','ONE','ZCAT','MUB','DATA','ARC','SN44','T','WIN','ASTR','FONQ','MUBARAK','HUMA','BRZ','ONT','BIO','XPR','TAG','EXOD','USDU','MSTRB','NUSD','SNEK','TOSHI','ALLO','GBPSAFO','NXPC','NOS','METAL','AB','XVS','JCT','LCX','PMUSD','TRB','ARIAX','JELLYJELLY','MEME','ID','ELF','TPT','PHA','SN120','FIDD','GPS','BRETT','ACRDX','CX','INTCB','ICNT','BRSRV','SN53','CTC','MHORSE','MEGA','AUSDT','USDKG','RNT','POD','DEEP','COAI','CHFAU','MOOLAH','HOLO','VBILL','UMXM','BIM','FIUSD','VEREM','ARX','ARRR','POLYX','OZA','Other'];

// ── شخصی‌سازی هر دانشجو: پیش‌فرض کوین/تایم‌فریم/لوریج بر اساس آخرین ترید ──
function _prefsKey(){ return 'sc_prefs_' + (SESSION?.uid || 'guest'); }
function getStudentPrefs(){
  const saved = L.g(_prefsKey());
  if(saved && saved.coin) return saved;
  // اگر ذخیره‌ای نبود، از آخرین تریدِ انجام‌شده بساز
  if(Array.isArray(TRADES) && TRADES.length){
    const last = [...TRADES].sort((a,b)=>((b.date||'')+(b.time||'')).localeCompare((a.date||'')+(a.time||'')))[0];
    if(last) return { coin:last.coin, pair:last.pair, timeframe:last.timeframe, leverage:last.leverage, session:last.session, strategy:last.strategy };
  }
  return null;
}
function saveStudentPrefs(t){
  if(!SESSION || SESSION.role!=='student' || SESSION.isViewOnly) return;
  L.s(_prefsKey(), { coin:t.coin, pair:t.pair, timeframe:t.timeframe, leverage:t.leverage, session:t.session, strategy:t.strategy });
}

// ══════════════════════════════════════════════════════
// COINGECKO — لوگو و قیمت زنده (با fallback آفلاین، تمیز و بدون شلوغی)
// ══════════════════════════════════════════════════════
const CG_IDS = {
  PAXG:'pax-gold',XAUT:'tether-gold',
  BTC:'bitcoin',ETH:'ethereum',BNB:'binancecoin',SOL:'solana',HYPE:'hyperliquid',XRP:'ripple',ADA:'cardano',DOGE:'dogecoin',
  AVAX:'avalanche-2',DOT:'polkadot',TRX:'tron',LINK:'chainlink',MATIC:'matic-network',TON:'the-open-network',
  SHIB:'shiba-inu',LTC:'litecoin',BCH:'bitcoin-cash',UNI:'uniswap',ATOM:'cosmos',XLM:'stellar',ETC:'ethereum-classic',
  FIL:'filecoin',HBAR:'hedera-hashgraph',APT:'aptos',ARB:'arbitrum',OP:'optimism',NEAR:'near',VET:'vechain',
  ICP:'internet-computer',INJ:'injective-protocol',TIA:'celestia',SUI:'sui',SEI:'sei-network',RNDR:'render-token',
  GRT:'the-graph',AAVE:'aave',MKR:'maker',ALGO:'algorand',QNT:'quant-network',FTM:'fantom',EGLD:'elrond-erd-2',
  SAND:'the-sandbox',MANA:'decentraland',AXS:'axie-infinity',THETA:'theta-token',FLOW:'flow',XTZ:'tezos',
  CHZ:'chiliz',EOS:'eos',KAVA:'kava',ZEC:'zcash',DASH:'dash',NEO:'neo',IOTA:'iota',GALA:'gala',PEPE:'pepe',
  WIF:'dogwifcoin',BONK:'bonk',FLOKI:'floki',JUP:'jupiter-exchange-solana',PYTH:'pyth-network',STRK:'starknet',
  ENA:'ethena',ORDI:'ordinals',BLUR:'blur',LDO:'lido-dao',CRV:'curve-dao-token',SNX:'havven',
  COMP:'compound-governance-token','1INCH':'1inch',DYDX:'dydx',RUNE:'thorchain',KAS:'kaspa',CFX:'conflux-token',
  WLD:'worldcoin-wld',FET:'fetch-ai',AGIX:'singularitynet',OCEAN:'ocean-protocol',ROSE:'oasis-network',CELO:'celo',
  ZIL:'zilliqa',ENJ:'enjincoin',BAT:'basic-attention-token',ANKR:'ankr',SUSHI:'sushi',YFI:'yearn-finance',
  UMA:'uma',BAL:'balancer',REN:'republic-protocol',KSM:'kusama',WAVES:'waves',DCR:'decred',XMR:'monero',
  TWT:'trust-wallet-token',GMT:'stepn',APE:'apecoin',LRC:'loopring',IMX:'immutable-x',MINA:'mina-protocol',
  // v25.32: بقیهٔ ۵۰۰ رمزارزِ اولِ بازار (CoinGecko، ۲۹ مهر ۱۴۰۵)
  USDT:'tether',USDC:'usd-coin',USDS:'usds',WBT:'whitebit',LEO:'leo-token',RAIN:'rain',USDE:'ethena-usde',DAI:'dai',
  CC:'canton-network',USD1:'usd1-wlfi',GRAM:'the-open-network',USDG:'global-dollar',TAO:'bittensor',CRO:'crypto-com-chain',PYUSD:'paypal-usd',OKB:'okb',
  BTW:'bitway',USYC:'hashnote-usyc',RLUSD:'ripple-usd',USDY:'ondo-us-dollar-yield',ONDO:'ondo-finance',BUIDL:'blackrock-usd-institutional-digital-liquidity-fund',PUMP:'pump-fun',ASTER:'aster-2',
  USDF:'falcon-finance',MNT:'mantle',WLFI:'world-liberty-financial',SKY:'sky',USDD:'usdd',M:'memecore',EURSAFO:'spiko-amundi-overnight-swap-fund-eur',MORPHO:'morpho',
  U:'united-stables',HTX:'htx-dao',BGB:'bitget-token',BFUSD:'bfusd',USDGO:'usdgo',VVV:'venice-token',JST:'just',GT:'gatechain-token',
  KCS:'kucoin-shares',POL:'polygon-ecosystem-token',RENDER:'render-token',PI:'pi-network',PEARL:'pearl-2',LIT:'lighter',AERO:'aerodrome-finance',OUSD:'open-usd',
  NEXO:'nexo',ZRO:'layerzero',USTB:'superstate-short-duration-us-government-securities-fund-ustb',CAKE:'pancakeswap-token',GHO:'gho',STX:'blockstack',ETHFI:'ether-fi',XDC:'xdce-crowd-sale',
  NIGHT:'midnight-3',AKE:'akedo',BDX:'beldex',JAAA:'janus-henderson-anemoy-aaa-clo-fund',FLR:'flare-networks',Q:'quack-ai',USD0:'usual-usd',KAU:'kinesis-gold',
  RAY:'raydium',EUTBL:'eutbl',TRUMP:'official-trump',PENGU:'pudgy-penguins',EURC:'euro-coin',YLDS:'ylds',TUSD:'true-usd',STABLE:'stable-2',
  A7A5:'a7a5',VIRTUAL:'virtual-protocol',GRASS:'grass',HASH:'hash-2',DRV:'derive',PENDLE:'pendle',BSV:'bitcoin-cash-sv',BTT:'bittorrent',
  XPL:'plasma',FF:'falcon-finance-ff',SPX:'spx6900',SOFID:'sofiusd',REUSD:'re-protocol-reusd',UB:'unibase',JTRSY:'janus-henderson-anemoy-treasury-fund',OUSG:'ousg',
  SUN:'sun-token',CARDS:'collector-crypt',APXUSD:'apxusd',FDUSD:'first-digital-usd',GNO:'gnosis',OHM:'olympus',PIEVERSE:'pieverse',KITE:'kite-2',
  BP:'backpack',KAIA:'kaia',MON:'monad',USDAI:'usdai',JTO:'jito-governance-token',LUNC:'terra-luna',AR:'arweave',APEPE:'ape-and-pepe',
  CVX:'convex-finance',ENS:'ethereum-name-service',SHFL:'shuffle-2',KMNO:'kamino',ZBCN:'zebec-network',SYRUP:'syrup',SAFO:'safo',JASMY:'jasmycoin',
  NFT:'apenft',EIGEN:'eigenlayer',PC0000031:'tradable-na-rent-financing-platform-sstn',AKT:'akash-network',S:'sonic-3',FRAX:'frax',KOGE:'bnb48-club-token',CRVUSD:'crvusd',
  KAG:'kinesis-silver',USX:'usx',FLUID:'instadapp',GRX:'grx-chain',MET:'meteora',ZAMA:'zama',PONS:'pons',EURCV:'societe-generale-forge-eurcv',
  USAT:'usa',BR:'bedrock-token',TRAC:'origintrail',AUSD:'agora-dollar',ANVL:'anvil',BTSE:'btse-token',USTBL:'spiko-us-t-bills-money-market-fund',ZK:'zksync',
  SENT:'sentient','2Z':'doublezero',PC0000033:'tradable-apac-diversified-finance-provider-sstn',XCN:'chain-2',BORG:'swissborg',STRCX:'strategy-pp-variable-xstock',CRCLB:'circle-internet-group-bstock',A:'vaulta',
  BEAM:'beam-2',USELESS:'useless-3',APYUSD:'apyusd',COCO:'coco-2',MX:'mx-token',VSN:'vision-3',NPC:'non-playable-coin',SPCXB:'spacex-bstocks-tokenized-stock',
  GOMINING:'gmt-token',FARTCOIN:'fartcoin',GUSD:'gusd',SN51:'celium',RAIL:'railgun','0G':'zero-gravity',AIOZ:'aioz-network',B:'build-on',
  AWE:'stp-network',DGAI:'dgrid-ai',XEC:'ecash',JPYC:'jpycoin',PC0000097:'tradable-latam-fintech-sstn',SUPER:'superfarm',SFP:'safepal',JPYSC:'jpysc',
  CASH:'cash-4',ONYC:'onyc',GEOD:'geodnet',MSTRX:'microstrategy-xstock',OZO:'ozone-chain',H:'humanity',PLUME:'plume',ATH:'aethir',
  ULTIMA:'ultima',BC:'bc-token',AVUSD:'avant-usd',RSR:'reserve-rights-token',MGLO:'midas-fasanara-global-open',META:'meta-2-2',KNTQ:'kinetiq',THBILL:'theo-short-duration-us-treasury-fund',
  GLM:'golem',NOPAL:'nest-blackopal-liquidstone-ii-vault',CASHCAT:'cash-cat',ZEN:'zencash',DBR:'debridge',PC0000023:'tradable-singapore-fintech-ssl-2',ALFW:'alpha-bulgaria-warrants',RLB:'rollbit-coin',
  SKR:'seeker',SN64:'chutes',ORCA:'orca',CRCLX:'circle-xstock',PC0000085:'tradable-latam-middle-market-lender-sstl',SOON:'soon-2',USDAT:'saturn-dollar',AUTO:'hastra-auto',
  PC0000015:'tradable-na-third-party-online-merchant-sstn',SOSO:'sosovalue',SHX:'stronghold-token',CAP:'cap-4',EDGE:'edgex',STAC:'securitize-tokenized-aaa-clo-fund',GENIUS:'genius-3',W:'wormhole',
  WAL:'walrus-2',USD3:'3jane-usd3',FRXUSD:'frax-usd',CRCLON:'circle-internet-group-ondo-tokenized-stock',PROM:'prometeus',UUSD:'unity-usd',NXM:'nxm',BGBTC:'bitget-wrapped-btc',
  PEAQ:'peaq-2',STONK:'stonk-3',FUN:'funfair',QRL:'quantum-resistant-ledger',FORM:'four',ZRX:'0x',ACRED:'apollo-diversified-credit-securitize-fund',CHEEMS:'cheems-token',
  USDA:'usda-2',QTUM:'qtum',DOG:'dog-go-to-the-moon-rune',BABYCLAW:'baby-claw',WEMIX:'wemix-token',ARKM:'arkham',CHIP:'chip-2',GMX:'gmx',
  MELANIA:'melania-meme',AI:'artificial-inu-3',YZY:'yzy',SN4:'targon',SAFE:'safe',GGBR:'goldfish-gold',HNT:'helium',CUSD:'cap-usd',
  LPT:'livepeer',GAS:'gas',RED:'redstone-oracles',PROS:'pharos-network',NMR:'numeraire',PGOLD:'pleasing-gold',MARSCOIN:'marscoin-4',FXUSD:'f-x-protocol-fxusd',
  PC0000019:'tradable-north-america-pos-lender-sstn',COW:'cow-protocol',USDSUI:'usdsui',WM:'wrappedm-by-m0',OMI:'ecomi',ADI:'adi-token',PC0000101:'na-post-settlement-legal-financing-receivables',MTBILL:'midas-mtbill',
  CKB:'nervos-network',RIF:'rif-token',CGUSD:'cygnus-finance-global-usd',LISUSD:'helio-protocol-hay',FEUSD:'felix-feusd',VELO:'velo',DOLA:'dola-usd',UNT:'unitywallet-token',
  TSLAX:'tesla-xstock',APES:'apes-2-2',BRLV:'crown-brlv',UAI:'unifai-network',FXSAVE:'fx-usd-saving',ALT:'altlayer',NOXO:'noxo',AMP:'amp-token',
  TRUSD:'tori-trusd',UNP:'unipoly',ZETA:'zetachain',PC0000049:'tradable-eu-latam-pos-financing-sstl',DIEM:'diem',XAUM:'matrixdock-gold',TEMPLE:'temple',O:'o1-exchange',
  MCAT:'marscat-token',BABYDOGE:'baby-doge-coin',TFUEL:'theta-fuel',IUSD:'infinifi-usd',LINEA:'linea',VTHO:'vethor-token',KAITO:'kaito',HOODINU:'hood-sword-inu',
  BABY:'babylon',HOT:'holotoken',SPYX:'sp500-xstock',FT:'flying-tulip',ZIG:'zignaly',USDX:'axis-usd',IO:'io',DUSK:'dusk-network',
  GAL:'project-galaxy',PRIZE:'prize-protocol',MAGMA:'magma-finance',SPK:'spark-2',NILA:'mindwavedao',AXL:'axelar',USDON:'ondo-u-s-dollar-token',ELG:'escoin-token',
  QUBIC:'qubic-network',SNDKB:'sandisk-bstocks-tokenized-stock',SPCXX:'spacex-xstocks',BANANAS31:'banana-for-scale-2',DEXE:'dexe',ZANO:'zano',ORE:'ore',DGB:'digibyte',
  BERA:'berachain-bera',RE:'re',REUR:'royal-euro',RLC:'iexec-rlc',EDU:'edu-coin',AP3X:'apex-4',ESP:'espresso',TURBO:'turbo',
  IVVON:'ishares-core-s-p-500-etf-ondo-tokenized-etf',SWOP:'swop-2',STRCON:'strategy-stretch-preferred-ondo-tokenized',PC0000027:'tradable-latam-bnpl-sstn',PURR:'purr-2',PC0000081:'tradable-na-legal-receivables-ssl',IOST:'iostoken',PC0016245:'na-capital-as-a-service-sstn',
  BAN:'comedian',ALEO:'aleo',AZTEC:'aztec',NOCK:'nockchain',EARNUSD:'lido-earnusd',ONE:'cross-2',ZCAT:'anonymous-cat',MUB:'micron-technology-bstock',
  DATA:'story-2',ARC:'ai-rig-complex',SN44:'score',T:'threshold-network-token',WIN:'wink',ASTR:'astar',FONQ:'fonq',MUBARAK:'mubarak',
  HUMA:'huma-finance',BRZ:'brz',ONT:'ontology',BIO:'bio-protocol',XPR:'proton',TAG:'tagger',EXOD:'exod',USDU:'usdu',
  MSTRB:'strategy-tokenized-bstocks',NUSD:'nusd-2',SNEK:'snek',TOSHI:'toshi',ALLO:'allora',GBPSAFO:'spiko-amundi-overnight-swap-fund-gbp',NXPC:'nexpace',NOS:'nosana',
  METAL:'metal-blockchain',AB:'newton-project',XVS:'venus',JCT:'janction',LCX:'lcx',PMUSD:'precious-metals-usd',TRB:'tellor',ARIAX:'aria-chain',
  JELLYJELLY:'jelly-my-jelly',MEME:'memetoon',ID:'space-id',ELF:'aelf',TPT:'token-pocket',PHA:'pha',SN120:'affine',FIDD:'fidelity-digital-dollar',
  GPS:'goplus-security',BRETT:'based-brett',ACRDX:'anemoy-tokenized-apollo-diversified-credit-fund',CX:'cortex-2',INTCB:'intel-tokenized-bstocks',ICNT:'impossible-cloud-network-token',BRSRV:'blackrock-daily-reinvestment-stablecoin-reserve-vehicle',SN53:'efficientfrontier',
  CTC:'creditcoin-2',MHORSE:'meme-horse',MEGA:'megaeth',AUSDT:'alloy-tether',USDKG:'usdkg',RNT:'reental',POD:'dolphin-2',DEEP:'deep',
  COAI:'chainopera-ai',CHFAU:'allunity-chf',MOOLAH:'moolah',HOLO:'holoworld',VBILL:'vaneck-treasury-fund',UMXM:'manadia',BIM:'bim-2',FIUSD:'sygnum-fiusd-liquidity-fund',
  VEREM:'verified-emeralds',ARX:'arcium',ARRR:'pirate-chain',POLYX:'polymesh',OZA:'ozapay'
};
const CG_CACHE = {};
async function fetchCoinInfo(sym){
  const id = CG_IDS[sym]; if(!id) return null;
  if(CG_CACHE[sym] && Date.now()-CG_CACHE[sym].t < 120000) return CG_CACHE[sym].d; // کش ۲ دقیقه‌ای
  try{
    const r = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`);
    if(!r.ok) return null;
    const a = await r.json();
    if(!a || !a[0]) return null;
    const d = { name:a[0].name, image:a[0].image, price:a[0].current_price, ch:a[0].price_change_percentage_24h };
    CG_CACHE[sym] = { t:Date.now(), d };
    return d;
  }catch(e){ return null; }
}
function fmtPrice(n){
  if(n==null) return '—';
  if(n>=1) return '$'+n.toLocaleString('en-US',{maximumFractionDigits:2});
  return '$'+n.toLocaleString('en-US',{maximumSignificantDigits:4});
}
// جستجوی سریع رمزارز در فرم ثبت ترید (v20.3)
// فهرست بیش از ۱۰۰ رمزارز دارد و پیدا کردن با اسکرول کند بود.
// گزینه‌های نامرتبط پنهان می‌شوند و اگر فقط یکی بماند، خودکار انتخاب می‌شود.
// ── v26.11: جستجوی رمزارز (فرم ثبت ترید و فرم هشدار) ──
const COIN_FA = { 'بیت':'BTC','بیتکوین':'BTC','بیت‌کوین':'BTC','اتریوم':'ETH','اتر':'ETH','سولانا':'SOL','ریپل':'XRP','بایننس':'BNB',
  'دوج':'DOGE','دوج‌کوین':'DOGE','کاردانو':'ADA','ترون':'TRX','تون':'TON','لایت‌کوین':'LTC','لایتکوین':'LTC','آوالانچ':'AVAX',
  'چین‌لینک':'LINK','پولکادات':'DOT','شیبا':'SHIB','هایپر':'HYPE','هایپرلیکویید':'HYPE','طلا':['PAXG','XAUT'],'پکس':'PAXG' };
function coinQuery(q){ return String(q || '').trim().replace(/\s+/g, '').replace(/\/?USDT$/i, ''); }
function coinMatches(list, q){
  const raw = coinQuery(q); if (!raw) return list.slice();
  const T = raw.toUpperCase(), low = raw.toLowerCase(), out = [], seen = new Set(), add = x => { if (!seen.has(x)) { seen.add(x); out.push(x); } };
  const fa = Object.entries(COIN_FA).filter(([k]) => k.startsWith(raw)).flatMap(([, v]) => [].concat(v));
  for (const x of list) if (x.toUpperCase() === T) add(x);
  for (const x of fa) if (list.includes(x)) add(x);
  for (const x of list) if (x.toUpperCase().startsWith(T)) add(x);
  for (const x of list) if (x.toUpperCase().includes(T)) add(x);
  // نامِ انگلیسی، فقط از ابتدای یک کلمه: gold ⇒ pax-gold، ولی eth نه tether
  if (low.length >= 3) for (const x of list) if ((CG_IDS[x] || '').split('-').some(w => w.startsWith(low))) add(x);
  return out;
}
// نتیجه‌ای که خودکار انتخاب شود: نمادِ دقیق، یا تنها نتیجه
function coinPick(list, q){
  const T = coinQuery(q).toUpperCase(); if (!T) return null;
  const exact = list.find(x => x.toUpperCase() === T); if (exact) return exact;
  const m = coinMatches(list, q); return m.length === 1 ? m[0] : null;
}
// اگر نتیجه‌ای هست و انتخابِ فعلی جزوِ آن نیست، اولین نتیجه انتخاب می‌شود (بقیه در فهرست می‌مانند)
function coinAutoPick(list, q, cur){
  const m = coinMatches(list, q); if (!coinQuery(q) || !m.length) return null;
  return coinPick(list, q) || (m.includes(cur) ? null : m[0]);
}
function coinHint(n, picked){
  return picked ? `✓ ${picked} انتخاب شد${n > 1 ? `؛ ${faNum(n - 1)} رمزارزِ دیگر هم پیدا شد (از فهرست عوض کن)` : ''}`   // «·» کنارِ رقمِ فارسی شبیهِ صفر است
    : n ? `${faNum(n)} رمزارز پیدا شد — از فهرست انتخاب کن` : 'رمزارزی با این نام پیدا نشد';
}
function filterCoinOptions(q){
  const sel=document.getElementById('f-coin'); if(!sel)return;
  const hint=document.getElementById('f-coin-hint');
  const all=getDynList('sc_coins',COINS_FULL), cur=sel.value, term=coinQuery(q);
  const m=coinMatches(all,q), pick=coinAutoPick(all,q,cur);
  const list=term?(cur&&!m.includes(cur)?[cur,...m]:m):all;     // انتخابِ فعلی گم نشود
  sel.innerHTML=`<option value="">${term?(m.length?'— '+faNum(m.length)+' نتیجه —':'نتیجه‌ای نیست'):'انتخاب کنید'}</option>`
    +list.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');
  sel.value=pick||cur||'';
  if(pick&&pick!==cur) updateCoinInfo();
  const now=sel.value&&m.includes(sel.value)?sel.value:null;
  if(hint){ hint.textContent=term?coinHint(m.length,now):''; hint.className='coin-hint'+(!term?'':m.length===0?' none':now?' one':''); }
}

async function updateCoinInfo(){
  const box = document.getElementById('coin-info'); if(!box) return;
  const sym = document.getElementById('f-coin')?.value; if(!sym){ box.innerHTML=''; return; }
  box.innerHTML = `<span style="color:var(--muted);font-size:11px">دریافت قیمت زنده ${sym}…</span>`;
  const info = await fetchCoinInfo(sym);
  if(!info){ box.innerHTML=''; return; } // آفلاین/تحریم/نامشخص: چیزی نشان نده تا شلوغ نشود
  const up = (info.ch||0) >= 0;
  box.innerHTML = `
    <div style="display:flex;align-items:center;gap:9px;background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:8px 12px">
      <img src="${info.image}" alt="" width="22" height="22" style="border-radius:50%;flex-shrink:0" onerror="this.replaceWith(Object.assign(document.createElement('div'),{textContent:'${sym[0]}',style:'width:22px;height:22px;border-radius:50%;background:var(--gold-dim);color:#0a0a0a;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700'}))"/>
      <span style="font-size:12px;font-weight:600">${info.name}</span>
      <span style="font-family:var(--f-mono);font-size:13px;color:var(--text)">${fmtPrice(info.price)}</span>
      <span style="font-family:var(--f-mono);font-size:11px;font-weight:600;color:${up?'var(--green)':'var(--red)'};margin-inline-start:auto;display:flex;align-items:center;gap:3px">${up?'▲':'▼'} ${Math.abs(info.ch||0).toFixed(2)}%</span>
    </div>`;
}
function getDynList(key,def){return S.g(key)||def;}

// XP milestones — قابل تنظیم توسط منتور
// v14.2: نردبان بودجه دلاری — نام، آیکون، تعداد و بودجه هر پله (ادمین-ویرایش‌پذیر)
const XP_DEFAULTS=[
  {n:30,  label:'۳۰',  title:'رصدگر بازار',  icon:'🌱', color:'#887f72', budget:100},
  {n:50,  label:'۵۰',  title:'شکارچی ستاپ', icon:'🎯', color:'#3B82F6', budget:200},
  {n:80,  label:'۸۰',  title:'مدیر ریسک',   icon:'🛡️', color:'#8B5CF6', budget:300},
  {n:100, label:'۱۰۰', title:'تریدر منضبط', icon:'🔥', color:'#F59E0B', budget:400},
  {n:150, label:'۱۵۰', title:'حرفه‌ای',     icon:'💎', color:'#C8A84B', budget:500},
];
// اسامی قدیمی پیش‌فرض → اسامی جدید (سفارشی‌سازی ادمین دست‌نخورده می‌ماند)
const _XP_OLD_TITLES={'شروع':'رصدگر بازار','مبتدی':'شکارچی ستاپ','متوسط':'مدیر ریسک','پیشرفته':'تریدر منضبط'};
function getXPMilestones(){
  const saved = S.g('sc_xp_milestones');
  if(saved && Array.isArray(saved) && saved.length===5){
    return saved.map((m,i)=>({
      ...XP_DEFAULTS[i], ...m,
      title:String(_XP_OLD_TITLES[m.title]||m.title||XP_DEFAULTS[i].title).slice(0,80),
      icon:String(m.icon||XP_DEFAULTS[i].icon).slice(0,8),
      color:safeColor(m.color||XP_DEFAULTS[i].color),
      n:Number.isFinite(+m.n)?Math.max(1,Math.min(500,+m.n)):XP_DEFAULTS[i].n,
      budget:(m.budget!==undefined&&m.budget!==null&&m.budget!==''&&Number.isFinite(+m.budget))?Math.max(0,+m.budget):XP_DEFAULTS[i].budget
    }));
  }
  return XP_DEFAULTS.map(m=>({...m}));
}
function getBaseBudget(){ const v=S.g('sc_base_budget'); return (v===null||v===undefined||v==='')?30:+v; }
function currentBudget(count){ let b=getBaseBudget(); for(const m of getXPMilestones()){ if(count>=m.n) b=m.budget; } return b; }
const XP_MILESTONES = getXPMilestones();

// ══════════════════════════════════════════════════════
// v13 CORE — تقویم شمسی (الگوریتم jalaali-js)، اعداد فارسی، فیدبک منتور
// ══════════════════════════════════════════════════════
function _div(a,b){return ~~(a/b)}
function jalCal(jy){
  const breaks=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];
  const bl=breaks.length,gy=jy+621;let leapJ=-14,jp=breaks[0],jm,jump=0,leap,n,i;
  for(i=1;i<bl;i+=1){jm=breaks[i];jump=jm-jp;if(jy<jm)break;leapJ=leapJ+_div(jump,33)*8+_div(jump%33,4);jp=jm}
  n=jy-jp;
  leapJ=leapJ+_div(n,33)*8+_div((n%33)+3,4);
  if((jump%33)===4&&jump-n===4)leapJ+=1;
  const leapG=_div(gy,4)-_div((_div(gy,100)+1)*3,4)-150;
  const march=20+leapJ-leapG;
  if(jump-n<6)n=n-jump+_div(jump+4,33)*33;
  leap=(((n+1)%33)-1)%4;
  if(leap===-1)leap=4;
  return{leap,gy,march};
}
function g2d(gy,gm,gd){let d=_div((gy+_div(gm-8,6)+100100)*1461,4)+_div(153*((gm+9)%12)+2,5)+gd-34840408;d=d-_div(_div(gy+100100+_div(gm-8,6),100)*3,4)+752;return d}
function d2g(jdn){let j=4*jdn+139361631;j=j+_div(_div(4*jdn+183187720,146097)*3,4)*4-3908;const i=_div((j%1461),4)*5+308;const gd=_div((i%153),5)+1;const gm=(_div(i,153)%12)+1;const gy=_div(j,1461)-100100+_div(8-gm,6);return{gy,gm,gd}}
function j2d(jy,jm,jd){const r=jalCal(jy);return g2d(r.gy,3,r.march)+(jm-1)*31-_div(jm,7)*(jm-7)+jd-1}
function d2j(jdn){const gy=d2g(jdn).gy;let jy=gy-621;const r=jalCal(jy);const jdn1f=g2d(gy,3,r.march);let jd,jm,k=jdn-jdn1f;
  if(k>=0){if(k<=185){jm=1+_div(k,31);jd=(k%31)+1;return{jy,jm,jd}}else k-=186}
  else{jy-=1;k+=179;if(r.leap===1)k+=1}
  jm=7+_div(k,30);jd=(k%30)+1;return{jy,jm,jd}}
function g2j(gy,gm,gd){return d2j(g2d(gy,gm,gd))}
function j2gParts(jy,jm,jd){return d2g(j2d(jy,jm,jd))}
function jMonthLen(jy,jm){if(jm<=6)return 31;if(jm<=11)return 30;return jalCal(jy).leap===0?30:29}
const JMONTHS=['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
const WD_FA=['یکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنجشنبه','جمعه','شنبه']; // ایندکس = Date.getDay()
function faNum(x){return String(x).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d])}
// مرتب‌سازی نزولی بر اساس تاریخ/ساعت — در برابر رکورد ناقص مقاوم است.
// یک تریدِ بدون date کل صفحه‌ی ژورنال را می‌شکست و دانشجو راهی برای
// بازگشت نداشت؛ رکورد خراب باید ته لیست برود، نه اینکه همه‌چیز را بخواباند.
function byDateDesc(a,b){
  const d=(String(b?.date||'')).localeCompare(String(a?.date||''));
  return d || (String(b?.time||'')).localeCompare(String(a?.time||''));
}

function fmtDateFa(iso){
  if(!iso||String(iso).length<10)return iso||'—';
  const[gy,gm,gd]=String(iso).slice(0,10).split('-').map(Number);
  if(!gy||!gm||!gd)return iso;
  try{const j=g2j(gy,gm,gd);return faNum(j.jd)+' '+JMONTHS[j.jm-1]+' '+faNum(j.jy)}catch(e){return iso}
}
function fmtDateFaShort(iso){
  if(!iso||String(iso).length<10)return iso||'—';
  const[gy,gm,gd]=String(iso).slice(0,10).split('-').map(Number);
  if(!gy||!gm||!gd)return iso;
  try{const j=g2j(gy,gm,gd);return faNum(j.jd)+' '+JMONTHS[j.jm-1]}catch(e){return iso}
}
function isoOfG(g){return String(g.gy).padStart(4,'0')+'-'+String(g.gm).padStart(2,'0')+'-'+String(g.gd).padStart(2,'0')}

// ── فیدبک منتور روی ترید — کلید جدید sc_feedback_<uid> (به دیتای موجود دست نمی‌زند) ──
let FEEDBACK={};        // برای دانشجوی جاری: {tradeId:{text,at}}
let MENTOR_FB={_uid:null,_loaded:false,data:{}};
function _fbKey(uid){return 'sc_feedback_'+uid.replace(/[^a-zA-Z0-9_-]/g,'_')}
async function loadFeedback(uid){
  const v=await cloudGet(_fbKey(uid));
  return (v&&typeof v==='object')?v:{};
}
async function saveFeedbackEntry(uid,tradeId,text){
  const fb=await loadFeedback(uid);
  if(text&&text.trim())fb[tradeId]={text:text.trim(),at:new Date().toISOString()};
  else delete fb[tradeId];
  const ok = await cloudSet(_fbKey(uid),fb);
  return ok === true ? fb : null;            // v26.9: شکست ⇒ null (فراخواننده پیامِ موفقیت نمی‌دهد)
}

// ══════════════════════════════════════════════════════
// v14.1: جمله‌ی روز — نقل‌قول‌های معتبر بزرگان معامله‌گری (فارسی ساده)
// cat: risk=مدیریت ریسک | loss=پذیرش ضرر | patience=صبر | discipline=نظم | mind=ذهن
// ══════════════════════════════════════════════════════
const QUOTES=[
 {t:'پول بزرگ در نشستن و صبر کردن است، نه در خرید و فروش مداوم.',by:'جسی لیورمور',cat:'patience'},
 {t:'بازار هرگز اشتباه نمی‌کند؛ این نظر آدم‌هاست که اشتباه از آب درمی‌آید.',by:'جسی لیورمور',cat:'mind'},
 {t:'هرگز روی معامله‌ی در ضرر، میانگین نگیر.',by:'جسی لیورمور',cat:'loss'},
 {t:'قانون اول: هرگز پول از دست نده. قانون دوم: قانون اول را هرگز فراموش نکن.',by:'وارن بافت',cat:'risk'},
 {t:'بازار ابزاری برای انتقال پول از آدم‌های عجول به آدم‌های صبور است.',by:'وارن بافت',cat:'patience'},
 {t:'مهم‌ترین قانون معامله‌گری، دفاعِ عالی است؛ نه حمله‌ی عالی.',by:'پل تودور جونز',cat:'risk'},
 {t:'من هر روز فرض می‌کنم پوزیشن‌هایم اشتباه‌اند؛ برای همین همیشه می‌دانم کجا خارج می‌شوم.',by:'پل تودور جونز',cat:'risk'},
 {t:'بازنده‌ها روی پوزیشنِ بازنده میانگین می‌گیرند.',by:'پل تودور جونز',cat:'loss'},
 {t:'مهم نیست چند بار درست بگویی؛ مهم این است وقتی درستی چقدر سود کنی و وقتی اشتباهی چقدر ضرر.',by:'جورج سوروس',cat:'mind'},
 {t:'اول زنده ماندن؛ درآوردن پول بعداً می‌آید.',by:'جورج سوروس',cat:'risk'},
 {t:'ضررها را کوتاه کن، سودها را رها کن رشد کنند، حجم را کوچک نگه دار.',by:'اد سیکوتا',cat:'discipline'},
 {t:'سه رکنِ معامله‌گری خوب: قطع ضرر، قطع ضرر و قطع ضرر.',by:'اد سیکوتا',cat:'loss'},
 {t:'قبل از اینکه وارد معامله شوم، می‌دانم کجا خارج می‌شوم.',by:'بروس کاونر',cat:'discipline'},
 {t:'هر حجمی فکر می‌کنی درست است، نصفش کن؛ تازه‌کارها همیشه چند برابرِ حدِ درست ریسک می‌کنند.',by:'بروس کاونر',cat:'risk'},
 {t:'حرفه‌ای‌ها حتی با ۳۰٪ معامله‌ی درست هم سود می‌سازند — چون ضررشان کوچک و سودشان بزرگ است.',by:'بیل لیپشوتز',cat:'mind'},
 {t:'هدف معامله‌گر موفق، انجامِ بهترین معامله‌هاست؛ پول در درجه‌ی دوم است.',by:'الکساندر الدر',cat:'discipline'},
 {t:'بعد از یک ضرر سنگین، حجم را خیلی کوچک کن تا اعتمادت برگردد.',by:'مارتی شوارتز',cat:'loss'},
 {t:'از بازنده به برنده تبدیل شدم وقتی یاد گرفتم غرورم را از معامله جدا کنم.',by:'مارتی شوارتز',cat:'mind'},
 {t:'راهِ ساختن سود بلندمدت: حفظ سرمایه و شکار فرصت‌های بزرگ.',by:'استنلی دراکن‌میلر',cat:'risk'},
 {t:'اگر ریسک را تو مدیریت نکنی، ریسک تو را از بازار حذف می‌کند.',by:'لری هایت',cat:'risk'},
 {t:'اگر بازی نکنی نمی‌بری؛ اما اگر همه‌ی سرمایه‌ات را ببازی، دیگر نمی‌توانی بازی کنی.',by:'لری هایت',cat:'risk'},
 {t:'معامله‌گرها بازار را معامله نمی‌کنند؛ باورهای خودشان درباره‌ی بازار را معامله می‌کنند.',by:'ون تارپ',cat:'mind'},
 {t:'در بازار هر اتفاقی ممکن است؛ نتیجه‌ی یک معامله چیزی درباره‌ی مهارت تو نمی‌گوید — نتیجه‌ی صد معامله می‌گوید.',by:'مارک داگلاس',cat:'mind'},
 {t:'معامله‌گر برنده، ضرر را مثل هزینه‌ی کسب‌وکار می‌پذیرد؛ نه مثل شکست شخصی.',by:'مارک داگلاس',cat:'loss'},
 {t:'ثبات در نتیجه از ثبات در رفتار می‌آید، نه از تحلیلِ بیشتر.',by:'مارک داگلاس',cat:'discipline'},
 {t:'صبر کن تا پول گوشه‌ی اتاق افتاده باشد؛ کار تو فقط برداشتنِ آن باشد.',by:'جیم راجرز',cat:'patience'},
 {t:'من هیچ‌وقت کف نخریدم و سقف نفروختم؛ فقط وسطِ روند را سوار شدم.',by:'نیکلاس دارواس',cat:'patience'},
 {t:'بدان چه چیزی در دست داری و چرا آن را داری.',by:'پیتر لینچ',cat:'discipline'},
 {t:'کل رازِ برنده شدن در بازار: وقتی اشتباه می‌کنی، کمترین ضرر ممکن را بده.',by:'ویلیام اونیل',cat:'loss'},
 {t:'قوانین من را می‌شود در روزنامه چاپ کرد و باز کسی سود نمی‌کند — چون رمزِ کار، نظم در اجراست.',by:'ریچارد دنیس',cat:'discipline'},
 {t:'برنامه‌ات را معامله کن و معامله‌ات را برنامه‌ریزی کن.',by:'اصل حرفه‌ای بازار',cat:'discipline'},
 {t:'روند دوست توست؛ با آن نجنگ.',by:'اصل حرفه‌ای بازار',cat:'patience'},
 {t:'امید استراتژی نیست؛ برای همین حد ضرر اختراع شده.',by:'اصل حرفه‌ای بازار',cat:'risk'},
 {t:'اول ریسکِ هر معامله را تعیین کن، بعد به سودش فکر کن.',by:'اصل حرفه‌ای بازار',cat:'risk'},
 {t:'ورودِ خوب بدون خروجِ مشخص، فقط نصفِ معامله است.',by:'اصل حرفه‌ای بازار',cat:'discipline'},
 {t:'معامله‌ی خوب معامله‌ای است که طبق برنامه باشد — حتی اگر ضرر کند.',by:'اصل حرفه‌ای بازار',cat:'discipline'},
 {t:'بازار فردا هم هست؛ فرصت تمام نمی‌شود، سرمایه تمام می‌شود.',by:'اصل حرفه‌ای بازار',cat:'patience'},
 {t:'حجمِ کم یعنی ذهنِ آرام؛ و ذهنِ آرام یعنی تصمیمِ درست.',by:'اصل حرفه‌ای بازار',cat:'risk'},
 {t:'لازم نیست هر روز معامله کنی؛ بیرون بودن از بازار هم خودش یک پوزیشن است.',by:'اصل حرفه‌ای بازار',cat:'patience'},
 {t:'ژورنالت را بنویس؛ معامله‌گری که نمی‌نویسد، اشتباهش را تکرار می‌کند.',by:'اصل حرفه‌ای بازار',cat:'discipline'},
 {t:'بعد از سه ضررِ پشت‌سرهم از میز فاصله بگیر — بازار جایی نمی‌رود.',by:'اصل حرفه‌ای بازار',cat:'loss'},
 {t:'چیزی به نام انتقام از بازار وجود ندارد؛ فقط ضررِ دوم وجود دارد.',by:'اصل حرفه‌ای بازار',cat:'mind'},
 {t:'سود کردن مهارت نیست؛ نگه داشتنِ سود مهارت است.',by:'اصل حرفه‌ای بازار',cat:'discipline'},
 {t:'کیفیتِ معامله‌هایت را بشمار، نه تعدادشان را.',by:'اصل حرفه‌ای بازار',cat:'patience'},
 {t:'حد ضرر جای شرمندگی نیست؛ امضای معامله‌گرِ حرفه‌ای است.',by:'اصل حرفه‌ای بازار',cat:'risk'},
 {t:'وقتی مطمئن‌ترین حالتت را داری، خطرناک‌ترین لحظه است — چک‌لیستت را دوباره ببین.',by:'اصل حرفه‌ای بازار',cat:'mind'},
 {t:'پول درآوردنِ آهسته از پول از دست دادنِ سریع خیلی بهتر است.',by:'اصل حرفه‌ای بازار',cat:'patience'},
 {t:'اگر برای ورود دلیل نداری، برای خروج هم دلیلی نخواهی داشت.',by:'اصل حرفه‌ای بازار',cat:'discipline'}
];

// انتخاب هوشمند: حال‌وروزِ اخیر دانشجو تعیین می‌کند از کدام دسته جمله بیاید
function pickDailyQuote(){
  let pool=QUOTES;
  try{
    const closed=TRADES.filter(t=>t.exit)
      .sort((a,b)=>((a.date||'')+(a.time||'')).localeCompare((b.date||'')+(b.time||'')));
    const last5=closed.slice(-5).map(calcPnl);
    const recentLosses=last5.filter(p=>p!==null&&p<0).length;
    const today=new Date().toISOString().slice(0,10);
    const todayCount=TRADES.filter(t=>t.date===today).length;
    const withSL=closed.length?closed.filter(hasDefinedRisk).length/closed.length:1;
    if(closed.length>=5&&recentLosses>=3)      pool=QUOTES.filter(q=>q.cat==='loss'||q.cat==='mind');   // ضررهای اخیر → آرامش و پذیرش
    else if(closed.length>=5&&withSL<0.7)      pool=QUOTES.filter(q=>q.cat==='risk');                    // حد ضرر نمی‌گذارد → ریسک
    else if(todayCount>=4)                     pool=QUOTES.filter(q=>q.cat==='patience');                // اورتریدینگ امروز → صبر
  }catch(e){}
  if(!pool.length)pool=QUOTES;
  // چرخش قطعی: هر دانشجو هر روز جمله‌ی بعدیِ دسته‌ی خودش را می‌بیند (بدون تکرار تا پایان چرخه)
  let h=0;const uid=SESSION?.uid||'';
  for(let i=0;i<uid.length;i++)h=(h*31+uid.charCodeAt(i))>>>0;
  const dayNum=Math.floor(Date.now()/864e5);
  return pool[(h+dayNum)%pool.length];
}

function showDailyQuote(){
  if(!SESSION||SESSION.role!=='student'||SESSION.isViewOnly)return;
  const today=new Date().toISOString().slice(0,10);
  const k='sc_quote_day_'+SESSION.uid;
  if(L.g(k)===today)return; // امروز دیده
  const q=pickDailyQuote();
  if(!q)return;
  L.s(k,today);
  document.getElementById('det-content').innerHTML=`
    <div style="text-align:center;padding:8px 6px 4px">
      <div style="width:56px;height:56px;border-radius:50%;background:var(--grad-gold);display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 14px;box-shadow:0 8px 24px -6px rgba(200,168,75,.5)">💡</div>
      <div style="font-size:10px;font-weight:700;letter-spacing:3px;color:var(--gold);margin-bottom:16px">جمله امروز · ${fmtDateFa(today)}</div>
      <div style="font-size:16px;line-height:2.3;color:var(--text);font-weight:600;margin-bottom:12px">«${q.t}»</div>
      <div style="font-size:12px;color:var(--gold-dim);margin-bottom:22px">— ${q.by}</div>
      <button class="btn btn-primary" style="margin-top:0" onclick="closeSheet()">✅ امروز منضبط می‌مانم</button>
    </div>`;
  document.getElementById('det-sheet').classList.add('open');
}

// ══════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════
let SESSION=null, TRADES=[], STUDENTS={}, ALL_TRADES={};
// v25.29: اعضای VIPِ آکادمی — فقط برای نمایش در پنل منتور؛ هرگز در STUDENTS/sc_students ذخیره نمی‌شوند
let VIPS={};
const ROSTER=()=>({...VIPS,...STUDENTS});          // اگر شماره‌ای هر دو بود، CIP برنده است
async function loadAcademyVips(){
  try{ const r=await apiFetch('/api/mentor/billing/academy-vips'); if(!r||!r.ok) return {}; const d=await r.json(); return d&&d.members||{}; }catch(_){ return {}; }
}
async function loadVipTrades(){ VIPS=await loadAcademyVips(); for(const uid of Object.keys(VIPS)){ ALL_TRADES[uid]=await loadTrades(uid); } }
const vipTag=st=>st&&st.type==='vip'?' <span class="vip-tag">VIP</span>':'';
let dashRange='all';   // all | month | 30 | 90
let dashBreak='coin';  // بُعدِ فعالِ ماژول تحلیل
let dashPhase='all';   // all | pre | pro — فاز نسبت به پله‌ی آخرِ نردبان
let calOffset=0;       // آفست ماه شمسیِ تقویم حرارتی (۰ = ماه جاری)
let editingTrade=null, mentorTab='overview', mentorSelected=null;
let tradesPage=1; const TRADES_PER_PAGE=10;
let mentorSort='attention';   // attention | pnl | activity | discipline | name
let MENTOR_HIST={uid:null,n:20}; // چند ردیف از تاریخچه‌ی دانشجوی بازشده نمایش داده شود
// کارت‌هایی که از TRADES می‌خوانند، در نمای منتور باید تریدهای همان دانشجو را ببینند
function withTrades(list,fn){ const keep=TRADES; TRADES=list; try{ return fn(); } finally{ TRADES=keep; } }
let tradesSort='date';   // date | pnl | loss | quality
let loginMode='student';

// ══════════════════════════════════════════════════════
// STORAGE
// ══════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════
// CLOUD STORAGE — Cloudflare Worker + D1 (v14) با احراز هویت واقعی
// ══════════════════════════════════════════════════════
// آدرس Worker: بعد از دیپلوی، آدرس واقعی workers.dev (یا دامنه) را جایگزین کن.
// v25.9: روی دامنهٔ خودِ ژورنال، API از همان دامنه (/api ⇒ ورکرِ API با Service Binding).
// *.workers.dev در بیشتر اینترنت‌های ایران فیلتر است؛ فقط وقتی برنامه جای دیگری باز شده از آن استفاده می‌شود.
const API_URL = (location.hostname==='localhost'||location.hostname==='127.0.0.1')
  ? 'http://127.0.0.1:8787'
  : location.hostname==='journal.samadicapital.com' ? ''
  : 'https://samadicapital-journal.samadi-capitaltm.workers.dev';

// توکن فقط تا زمان بازبودن همین تب نگه‌داری می‌شود و هر توکن قدیمی localStorage پاک می‌شود.
let TOKEN = null;
try { localStorage.removeItem('sc_token'); TOKEN = JSON.parse(sessionStorage.getItem('sc_token')) } catch(e) {}
function setToken(t){ TOKEN = t; try { t ? sessionStorage.setItem('sc_token', JSON.stringify(t)) : sessionStorage.removeItem('sc_token') } catch(e) {} }
const KV_REVISIONS = new Map();
let _authExpiredShown = false;
function handleAuthExpired(){
  if (_authExpiredShown) return; _authExpiredShown = true;
  setToken(null);
  try { showToast('🔐 نشست شما منقضی شده؛ دوباره وارد شوید') } catch(e) {}
  setTimeout(() => { _authExpiredShown = false; doLogout(); }, 900);
}
// v18.1: شبکه‌ی کاربران ناپایدار است (اندازه‌گیری شد: گاهی ۱۷ ثانیه). پس تایم‌اوت بلند
// و تلاش مجدد با فاصله، قبل از اینکه «آفلاین» اعلام کنیم.
const NET_TIMEOUT_MS = 20000;
const NET_RETRIES = 2; // یعنی مجموعاً ۳ تلاش
function _sleep(ms){ return new Promise(r => setTimeout(r, ms)); }
async function apiFetch(path, opts = {}, { retries = NET_RETRIES } = {}) {
  for (let attempt = 0; ; attempt++) {
    let timer = null;
    try {
      const ctrl = new AbortController();
      timer = setTimeout(() => ctrl.abort(), NET_TIMEOUT_MS);
      const r = await fetch(API_URL + path, {
        ...opts, signal: ctrl.signal,
        headers: { 'Content-Type': 'application/json', ...(TOKEN ? { 'Authorization': 'Bearer ' + TOKEN } : {}), ...(opts.headers || {}) }
      });
      clearTimeout(timer);
      if (r.status === 401 && TOKEN) { handleAuthExpired(); return undefined; }
      return r;
    } catch(e) {
      if (timer) clearTimeout(timer);
      if (attempt >= retries) return undefined;      // واقعاً در دسترس نیست
      await _sleep(attempt === 0 ? 1200 : 3000);     // فاصله‌ی فزاینده
    }
  }
}

// ── حالت آنلاین/آفلاین ──────────────────────────────
function isOnline(){ return !!TOKEN; }
function apiErrMsg(r, action){
  if (!r) return `${action} انجام نشد — سرور در دسترس نیست. اینترنت را بررسی کن و دوباره تلاش کن.`;
  if (r.status === 401) return `${action} انجام نشد — نشست شما معتبر نیست.\n\nیک‌بار «خروج» بزن و دوباره وارد شو.`;
  if (r.status === 403) return `${action} انجام نشد — دسترسی لازم را ندارید.`;
  if (r.status === 409) return `${action} انجام نشد — نسخه‌ی جدیدتری روی سرور ثبت شده. صفحه را تازه کن و دوباره تلاش کن.`;
  if (r.status === 400 || r.status === 422) return `${action} انجام نشد — اطلاعات واردشده معتبر نیست.`;
  return `${action} انجام نشد — خطای سرور (${r.status}).`;
}
function requireOnline(action){
  if (isOnline()) return true;
  alert(`⚠️ شما در «حالت آفلاین» هستید و ${action} روی سرور ثبت نمی‌شود.\n\nوقتی اینترنت وصل شد، «خروج» بزن و دوباره وارد شو.`);
  return false;
}
function updateOfflineBanner(){
  const app = document.getElementById('app');
  const existing = document.getElementById('offline-banner');
  const show = SESSION && !isOnline();
  if (!show) { if (existing) { existing.remove(); const tb = document.getElementById('topbar'); if (tb) tb.style.marginTop = ''; } return; }
  if (existing || !app) return;
  const b = document.createElement('div');
  b.id = 'offline-banner';
  b.innerHTML = '<span>📴 حالت آفلاین — فقط مشاهده؛ تغییرات روی سرور ذخیره نمی‌شود</span><button onclick="doLogout()">ورود دوباره</button>';
  app.prepend(b);
  const tb = document.getElementById('topbar');
  if (tb && !document.getElementById('mentor-view-banner')) tb.style.marginTop = '40px';
}

// ── همان قرارداد قبلی (سازگار با منطق merge-safe) ─────
// cloudGetRaw:
//   undefined = سرور در دسترس نبود (آفلاین) → به داده‌ی لوکال دست نزن
//   null      = سرور وصل بود ولی این کلید داده‌ای ندارد
//   value     = داده‌ی واقعی سرور
async function cloudGetRaw(key) {
  const r = await apiFetch('/api/kv/' + key);
  if (!r) { L.s('_fb_connected', false); return undefined; }
  if (r.status === 403) { L.s('_fb_connected', true); return null; } // دسترسی نداری → مثل «داده‌ای نیست»
  if (!r.ok) { L.s('_fb_connected', false); return undefined; }
  L.s('_fb_connected', true);
  const d = await r.json().catch(() => ({}));
  if (d.revision) KV_REVISIONS.set(key, d.revision);
  return d.value === undefined ? null : d.value;
}

// سازگاری با کد قدیمی: اگر سرور نبود، لوکال را برمی‌گرداند
async function cloudGet(key) {
  const data = await cloudGetRaw(key);
  if (data === undefined) return L.g(key);
  if (data === null) return null;
  if (L.g(key) === null) L.s(key, data);
  return data;
}

async function cloudSet(key, value) {
  L.s(key, value); // همیشه localStorage رو هم آپدیت کن
  const revision = KV_REVISIONS.get(key);
  const r = await apiFetch('/api/kv/' + key, {
    method: 'PUT', body: JSON.stringify({ value }),
    headers: revision ? { 'If-Match': revision } : {}
  });
  if (r?.status === 409) {
    const d = await r.json().catch(() => ({}));
    if (d.revision) KV_REVISIONS.set(key, d.revision);
    // تریدها باید حتماً ادغام شوند (در saveTrades)، ولی تنظیمات آخرین‌نویسنده‌برنده‌اند:
    // با revision تازه یک‌بار دوباره تلاش کن تا پیام «ذخیره شد» دروغ نباشد.
    if (!key.startsWith('sc_trades_')) {
      const retry = await apiFetch('/api/kv/' + key, {
        method: 'PUT', body: JSON.stringify({ value }),
        headers: d.revision ? { 'If-Match': d.revision } : {}
      });
      if (retry?.ok) {
        const rd = await retry.json().catch(() => ({}));
        if (rd.revision) KV_REVISIONS.set(key, rd.revision);
        L.s('_fb_connected', true);
        return true;
      }
      return false;
    }
    return { conflict: true, serverValue: d.value };
  }
  // v25.0: عضوِ بی‌اشتراک — نوشتن رد شد ولی داده روی گوشی هست
  if (r?.status === 402) return { paywall: true };
  if (!r || !r.ok) { L.s('_fb_connected', false); console.warn('cloudSet local only:', key, r ? r.status : 'offline'); return false; }
  L.s('_fb_connected', true);
  const d = await r.json().catch(() => ({}));
  if (d.revision) KV_REVISIONS.set(key, d.revision);
  return true;
}

async function cloudDelete(key) {
  L.d(key);
  const r = await apiFetch('/api/kv/' + key, { method: 'DELETE' });
  if (!r || !r.ok) { console.warn('cloudDelete:', key, r ? r.status : 'offline'); return false; }
  return true;
}
// v26.9: نتیجه‌ی ذخیره روی سرور — پیامِ «ذخیره شد» فقط وقتی سرور واقعاً پذیرفته
function savedOrWarn(...results){
  if (results.every(x => x === true)) return true;
  showToast('⚠️ روی سرور ذخیره نشد — فقط روی همین دستگاه ماند. اتصال را بررسی کن و دوباره بزن');
  return false;
}

// ══════════════════════════════════════════════════════
// MERGE — ادغام امن سرور و گوشی (هیچ داده‌ای پاک نمی‌شود)
// ══════════════════════════════════════════════════════
// تریدها: اجتماع بر اساس id. اگر تریدی هم در گوشی هم سرور باشد،
// نسخه‌ای که updatedAt جدیدتری دارد برنده است؛ رکوردهای قدیمیِ بدون زمان، سمت سرور را حفظ می‌کنند.
function mergeTrades(localArr, cloudArr) {
  const local = Array.isArray(localArr) ? localArr : [];
  const cloud = Array.isArray(cloudArr) ? cloudArr : [];
  const map = new Map();
  for (const t of cloud) { if (t && t.id) map.set(t.id, t); }
  for (const t of local) {
    if (!t || !t.id) continue;
    const prior = map.get(t.id);
    if (!prior || (t.updatedAt && (!prior.updatedAt || t.updatedAt > prior.updatedAt))) map.set(t.id, t);
  }
  const merged = Array.from(map.values());
  // تریدهای قدیمی بدون id را هم نگه دار (حذف نکن)
  for (const t of cloud) { if (t && !t.id) merged.push(t); }
  for (const t of local) { if (t && !t.id) merged.push(t); }
  return merged;
}
// دانشجوها: اجتماع کلیدها. در تعارض، نسخه‌ی لوکال برنده.
function mergeStudents(localObj, cloudObj) {
  const local = (localObj && typeof localObj === 'object') ? localObj : {};
  const cloud = (cloudObj && typeof cloudObj === 'object') ? cloudObj : {};
  return { ...cloud, ...local };
}

// Async data functions — همگی merge-safe
async function loadStudents() {
  const local = L.g('sc_students') || {};
  const cloud = await cloudGetRaw('sc_students');
  if (cloud === undefined) return local;            // آفلاین: لوکال دست‌نخورده
  const merged = mergeStudents(local, cloud);
  delete merged['__mentor__'];          // ژورنال شخصی مدیر هرگز «دانشجو» نیست
  L.s('sc_students', merged);
  // اگر گوشی دانشجویی داشت که سرور نداشت، به سرور برگردان
  if (Object.keys(merged).length !== Object.keys(cloud || {}).length) {
    cloudSet('sc_students', merged);
  }
  return merged;
}
async function saveStudents(d) {
  await cloudSet('sc_students', d);
}
async function loadTrades(uid) {
  const safeUid = uid.replace(/[^a-zA-Z0-9_-]/g, '_');
  const key = 'sc_trades_' + safeUid;
  // داده‌ی لوکال ممکن است زیر کلید uid خام یا safe ذخیره شده باشد
  const local = L.g('sc_trades_' + uid) || L.g(key) || [];
  const cloud = await cloudGetRaw(key);
  if (cloud === undefined) return local;            // آفلاین: تریدهای گوشی حفظ می‌شوند
  const merged = mergeTrades(local, cloud);
  L.s('sc_trades_' + uid, merged);
  L.s(key, merged);
  // اگر گوشی تریدهایی داشت که هنوز روی سرور نبود، همان لحظه سینک کن
  const cloudLen = Array.isArray(cloud) ? cloud.length : 0;
  if (merged.length !== cloudLen) {
    cloudSet(key, merged);
  }
  return merged.filter(t => !t?._deleted);
}
// فیلدهای محاسبه‌ای که نسخه‌های قبلی روی تریدها گذاشتند؛ هرگز ذخیره نشوند
const DERIVED_TRADE_FIELDS = ['_notRevenge', '_sizeOk'];
function stripDerived(list){
  return (Array.isArray(list) ? list : []).map(x => {
    if (!x || typeof x !== 'object' || !DERIVED_TRADE_FIELDS.some(k => k in x)) return x;
    const c = { ...x }; for (const k of DERIVED_TRADE_FIELDS) delete c[k]; return c;
  });
}
async function saveTrades(uid, t) {
  t = stripDerived(t);
  const safeUid = uid.replace(/[^a-zA-Z0-9_-]/g, '_');
  const key = 'sc_trades_' + safeUid;
  let server = await cloudGetRaw(key);
  if (server === undefined) return cloudSet(key, t);
  let merged = mergeTrades(t, server || []);
  let result = await cloudSet(key, merged);
  for (let i = 0; i < 2 && result?.conflict; i++) {   // مجموعاً ۳ تلاش با ادغام دوباره
    merged = mergeTrades(merged, result.serverValue || []);
    result = await cloudSet(key, merged);
  }
  return result;
}

// ══════════════════════════════════════════════════════
// AUTO-BACKUP — پشتیبان خودکار محلی + دانلود کامل
// ══════════════════════════════════════════════════════
// یک عکس فوری از کل دیتابیس (دانشجوها + تریدها) می‌سازد
async function snapshotAllData() {
  const out = {};
  const students = (await cloudGetRaw('sc_students')) || L.g('sc_students') || {};
  out.sc_students = students;
  for (const uid of Object.keys(students)) {
    const safeUid = uid.replace(/[^a-zA-Z0-9_-]/g, '_');
    const key = 'sc_trades_' + safeUid;
    let tr = await cloudGetRaw(key);
    if (tr === undefined) tr = L.g('sc_trades_' + uid) || L.g(key) || [];
    out[key] = tr || [];
  }
  return out;
}
// آخرین ۵ بکاپ را در localStorage نگه می‌دارد (در برابر پاک‌شدن سرور)
async function autoBackupLocal() {
  try {
    const snap = await snapshotAllData();
    const stamp = new Date().toISOString();
    L.s('sc_backup_last', { at: stamp, data: snap });
    let idx = L.g('sc_backup_index') || [];
    L.s('sc_backup_' + stamp, snap);
    idx.push(stamp);
    while (idx.length > 5) { const old = idx.shift(); L.d('sc_backup_' + old); }
    L.s('sc_backup_index', idx);
  } catch(e) { console.warn('autoBackupLocal failed:', e.message); }
}
// فایل JSON کامل دانلود می‌کند (هم‌شکل با خروجی Firebase)
async function downloadFullBackup() {
  showToast('⏳ در حال آماده‌سازی بکاپ...');
  const snap = await snapshotAllData();
  const blob = new Blob([JSON.stringify(snap, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `samadicapital-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  const n = Object.keys(snap.sc_students || {}).length;
  showToast(`✅ بکاپ ${n} دانشجو دانلود شد`);
}

// ══════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════
function genId(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}

function calcPnl(t){
  const e=+t.entry,x=+t.exit,s=+t.size;
  if(!e||!x||!s)return null;
  const dir=t.direction==='Long'?1:-1,lev=+t.leverage||1,fees=+t.fees||0;
  return dir*((x-e)/e)*s*lev-fees;
}
function calcRR(t){
  const e=+t.entry,sl=+t.stopLoss,tp=+t.takeProfit;
  if(!e||!sl||!tp)return null;
  const risk=Math.abs(e-sl),rew=Math.abs(tp-e);
  return risk?(rew/risk).toFixed(2):null;
}
// ── R:R زنده (v23.5) ──
// تابع خالص: جهت و قیمت‌ها را می‌گیرد، نسبت و ایرادها را برمی‌گرداند.
// iso = { fee } یعنی ترید حالت ۳ است: بی‌استاپ، سقف زیان = مارجین ایزوله.
function rrCheck({ direction = 'Long', entry, stop, tp, size = 0, lev = 1, tpReasons = [], iso = null, timeframe = '' }){
  const e = +entry, sl = +stop, t = +tp, m = +size, L = +lev || 1, long = direction !== 'Short';
  const out = { rr:null, level:null, riskPct:null, rewardPct:null, lossUsd:null, profitUsd:null, iso:false, issues:[], wait:null,
                min: rrMinFor(timeframe), tf: tfMinutes(timeframe) !== null ? String(timeframe).trim() : '' };
  if (!(e > 0)) return out;
  const slBad = sl > 0 && (long ? sl >= e : sl <= e);
  const tpBad = t > 0 && (long ? t <= e : t >= e);
  if (slBad) out.issues.push({ k:'side', msg: long ? 'برای لانگ، حد ضرر باید زیر قیمت ورود باشد' : 'برای شورت، حد ضرر باید بالای قیمت ورود باشد' });
  if (tpBad) out.issues.push({ k:'side', msg: long ? 'برای لانگ، حد سود باید بالای قیمت ورود باشد' : 'برای شورت، حد سود باید زیر قیمت ورود باشد' });
  if (slBad || tpBad) return out;
  if (!(t > 0)) { out.wait = 'حد سود را بزن تا R:R حساب شود'; return out; }
  out.rewardPct = Math.abs(t - e) / e * 100;
  if (m > 0) out.profitUsd = m * L * out.rewardPct / 100;
  if (sl > 0) {
    out.riskPct = Math.abs(e - sl) / e * 100;
    out.rr = out.rewardPct / out.riskPct;
    if (m > 0) out.lossUsd = m * L * out.riskPct / 100;
  } else if (iso && m > 0) {
    out.iso = true;
    out.lossUsd = m + (+iso.fee || 0);
    out.rr = out.profitUsd / out.lossUsd;
  } else { out.wait = 'حد ضرر را بزن تا R:R حساب شود'; return out; }
  out.level = out.rr >= out.min - 1e-6 ? 'good' : out.rr >= 1 - 1e-6 ? 'weak' : 'bad';
  // چیپِ «R:R 1:N» با عددهای خودِ ترید نمی‌خواند
  for (const r of (Array.isArray(tpReasons) ? tpReasons : [])) {
    const mm = String(r).match(/^R:R 1:(\d+(?:\.\d+)?)$/);
    if (mm && out.rr + 0.01 < +mm[1]) out.issues.push({ k:'chip', msg:`دلیل «${r}» زده شده ولی نسبت واقعی ۱:${fmtRR(out.rr)} است` });
  }
  return out;
}
function fmtRR(v){ return faNum(String(+(+v).toFixed(2))).replace('.', '٫'); }
function rrFormInput(){
  const g = id => document.getElementById(id)?.value;
  const iso = document.getElementById('pro-calc') && PRO_CALC_MODE === 3
    ? { fee: +(g('pc-c') || L.g(feeReserveKey()) || 0) } : null;
  return { direction: g('f-dir') || 'Long', entry: g('f-entry'), stop: g('f-sl'), tp: g('f-tp'),
           size: g('f-size'), lev: g('f-lev'), tpReasons: getSelected('tpr'), iso, timeframe: g('f-tf') };
}
function rrPreviewHTML(r){
  const issues = r.issues.map(i => `<div class="rr-issue">⚠️ ${esc(i.msg)}</div>`).join('');
  if (r.rr === null) {
    if (issues) return `<div class="rr-box rr-bad">${issues}</div>`;
    return r.wait ? `<div class="rr-box rr-wait">⚖️ ${r.wait}</div>` : '';
  }
  // حداقلِ همین تایم‌فریم؛ اگر تایم‌فریم نزده، قانونِ عمومی (۲) و یادآوری
  const need = `۱:${fmtRR(r.min)}${r.tf ? ` برای <bdi dir="ltr">${esc(r.tf)}</bdi>` : ''}`;
  const lbl = r.iso ? 'نسبت به کلِ مارجین ایزوله'
    : { good:`✅ خوب — حداقل ${need}`, weak:`کمتر از ${need}`, bad:'سودِ هدف از ریسک کمتر است' }[r.level];
  const tfHint = !r.iso && !r.tf && r.level !== 'good'
    ? `<div class="rr-issue rr-hint">⏱️ تایم‌فریم را انتخاب کن — زیر ۱ ساعت حداقل ۱:${fmtRR(RR_MIN_INTRADAY)} کافی است</div>` : '';
  const pct = v => fmtRR(v) + '٪';
  // مبلغ دلاری در متن راست‌به‌چپ جدا چیده می‌شود تا «$25» به «25$» برنگردد
  const usd = v => '<bdi dir="ltr">$' + (+v).toLocaleString('en-US', { maximumFractionDigits: 2 }) + '</bdi>';
  const money = r.lossUsd != null && r.profitUsd != null ? ` · با مارجین فرم: ضرر ${usd(r.lossUsd)} / سود ${usd(r.profitUsd)}` : '';
  return `<div class="rr-box rr-${r.iso ? 'iso' : r.level}">
    <div class="rr-top"><span class="rr-k">R:R</span><b dir="ltr">۱ : ${fmtRR(r.rr)}</b><span class="rr-lbl">${lbl}</span></div>
    <div class="rr-sub">${r.iso ? 'حد ضرر ندارد — بدترین حالت، کل مارجین' : `تا حد ضرر ${pct(r.riskPct)}`} · تا حد سود ${pct(r.rewardPct)}${money}</div>
    ${issues}${tfHint}
  </div>`;
}
function updateRRPreview(){
  const box = document.getElementById('rr-prev'); if (!box) return;
  box.innerHTML = rrPreviewHTML(rrCheck(rrFormInput()));
  refreshFormBar();
}
// هنگام ثبت: می‌پرسد، جلو نمی‌گیرد.
function confirmRR(t){
  const prev = TRADES.find(x => x.id === t.id);
  const r = rrCheck({ direction: t.direction, entry: t.entry, stop: t.stopLoss, tp: t.takeProfit,
    size: t.size, lev: t.leverage, tpReasons: t.tpReasons, iso: isIsolatedBudget(t) ? { fee: t.feeReserve } : null,
    timeframe: t.timeframe });
  const same = prev && ['entry','stopLoss','takeProfit','direction','timeframe'].every(k => String(prev[k] ?? '') === String(t[k] ?? ''))
    && JSON.stringify(prev.tpReasons || []) === JSON.stringify(t.tpReasons || []);
  const miss = [];
  // جهتِ اشتباه فقط برای ترید تازه — روی تریدِ قدیمی استاپ شاید عمداً به سود رفته باشد
  if (!prev) for (const i of r.issues) if (i.k === 'side') miss.push(i.msg);
  if (isCourseAccount() && !same) {
    if (r.level && r.level !== 'good' && !r.iso) miss.push(`R:R این ترید ۱:${fmtRR(r.rr)} است — حداقل ۱:${fmtRR(r.min)}`
      + (r.tf ? ` برای تایم‌فریم ${r.tf}` : ` (تایم‌فریم مشخص نیست؛ زیر ۱ ساعت حداقل ۱:${fmtRR(RR_MIN_INTRADAY)} است)`));
    for (const i of r.issues) if (i.k === 'chip') miss.push(i.msg);
  }
  if (!miss.length) return true;
  return confirm('⚖️ نسبت سود به ضرر\n\n• ' + miss.join('\n• ') + '\n\nبا همین ثبت شود؟');
}

// LRI…PDI: مبلغ و درصد در متن راست‌به‌چپ جابه‌جا نشوند («$3.88+» ⇒ «+$3.88»)
const _ltr = x => '\u2066' + x + '\u2069';
function fmtUSD(n,sign=true){
  if(n===null||n===undefined||isNaN(n))return '—';
  const abs=Math.abs(n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
  if(sign)return _ltr((n>=0?'+$':'-$')+abs);
  return _ltr('$'+abs);
}
function fmtPct(n){if(!n&&n!==0)return '—';return _ltr((n>=0?'+':'')+n.toFixed(2)+'%')}

// نتیجه‌ی معتبرِ یک ترید (v20.4)
// هرجا قیمت ورود و خروج و حجم باشد، نتیجه از خودِ قیمت درمی‌آید. به فیلد
// ذخیره‌شده فقط وقتی تکیه می‌کنیم که محاسبه ممکن نباشد. تریدهای قدیمی
// برچسب ثابتِ اشتباه دارند و اعتماد به آن‌ها یعنی پنهان‌ماندنِ ضررها.
const RESULT_EPSILON = 1e-8;
function tradeResult(t){
  if(!t || !t.exit) return 'Open';
  const p = calcPnl(t);
  if(p == null) return t.result || 'Open';
  return p > RESULT_EPSILON ? 'Win' : p < -RESULT_EPSILON ? 'Loss' : 'Break Even';
}
// برچسب ذخیره‌شده با واقعیت نمی‌خواند؟ به دانشجو بگو، ولی داده را دست نزن.
function resultDrifted(t){
  if(!t || !t.exit || !t.result || t.result === 'Open') return false;
  return calcPnl(t) != null && tradeResult(t) !== t.result;
}
function badgeCls(v){
  const m={Long:'b-long',Short:'b-short',Win:'b-win',Loss:'b-loss',Open:'b-open','Break Even':'b-be'};
  return m[v]||'';
}

// XP calc
function getXP(count){
  const ms=getXPMilestones();
  const total=ms[ms.length-1].n;
  const pct=Math.min(count/total*100,100);
  let level=0,levelTitle='شروع مسیر',levelColor='#887f72',levelIcon='🚀';
  for(const m of ms){if(count>=m.n){level=m.n;levelTitle=m.title;levelColor=m.color;levelIcon=m.icon}}
  return{pct,level,levelTitle,levelColor,levelIcon,count,budget:currentBudget(count)};
}

// ══════════════════════════════════════════════════════
// STATS ENGINE (expanded)
// ══════════════════════════════════════════════════════
// v25.16: نمرهٔ انضباط = دقیقاً همان عددی که آکادمی از /api/journal-stats می‌خواند
// (worker.js، حلقهٔ journal-stats). هر تغییری اینجا باید در سرور هم باشد و برعکس.
// روی همهٔ تریدهای زنده (باز و بسته)، چون آکادمی هم همین‌طور می‌شمارد.
// v25.18: هفت معیار، جمع ۱۰۰ — کپیِ DISC_W و disciplineChecks در worker.js.
const DISC_W={sl:25,slReasons:10,tp:10,tpReasons:10,entryReasons:20,rr:15,emotion:10};
const DISC_LABELS={sl:'قیمت حد ضرر',slReasons:'دلیل حد ضرر',tp:'قیمت حد سود',tpReasons:'دلیل حد سود',
  entryReasons:'دلیل ورود',rr:'R:R دست‌کم ۱:۲ (زیر ۱ ساعت ۱:۱٫۵)',emotion:'احساس لحظهٔ ورود'};
function academyDiscipline(list){
  const live=(list||[]).filter(t=>t&&!t._deleted);
  const num=v=>{const n=parseFloat(String(v==null?'':v).replace(/[^0-9.\-]/g,''));return isFinite(n)?n:null};
  const has=a=>Array.isArray(a)&&a.length>0;
  const cnt=Object.fromEntries(Object.keys(DISC_W).map(k=>[k,0]));
  for(const t of live){
    const e=num(t.entry),s=num(t.stopLoss),tp=num(t.takeProfit);
    const c={sl:s!=null,slReasons:has(t.slReasons),tp:tp!=null,tpReasons:has(t.tpReasons),entryReasons:has(t.entryReasons),
      // v25.17: حداقلِ R:R همان قانونِ دوره است (rrMinFor): ≥۲، زیر ۱ ساعت ≥۱٫۵
      rr:e!=null&&s!=null&&tp!=null&&Math.abs(e-s)>0&&Math.abs(tp-e)/Math.abs(e-s)+1e-9>=rrMinFor(t.timeframe),
      emotion:!!String(t.emotion||'').trim()};
    for(const k in DISC_W)if(c[k])cnt[k]++;
  }
  const k=live.length;
  const parts=Object.fromEntries(Object.keys(DISC_W).map(x=>[x,k?cnt[x]/k:0]));
  return{parts,counted:k,score:k?Math.round(Object.keys(DISC_W).reduce((a,x)=>a+cnt[x]/k*DISC_W[x],0)):0};
}
function computeStats(trades,discList){
  // v13: ترتیب زمانی واقعی — منحنی سرمایه/دراودان/استریک حتی با ثبت ترید گذشته درست می‌ماند
  const closed=trades.filter(t=>t.exit)
    .sort((a,b)=>((a.date||'')+' '+(a.time||'')).localeCompare((b.date||'')+' '+(b.time||'')));
  if(!closed.length&&!trades.length)return null;
  const pnls=closed.map(calcPnl);
  const total=pnls.reduce((a,b)=>a+(b||0),0);
  const wins=closed.filter((_,i)=>pnls[i]>0);
  const losses=closed.filter((_,i)=>pnls[i]<0);
  const wr=closed.length?(wins.length/closed.length*100).toFixed(1):0;
  const avgW=wins.length?wins.reduce((a,t)=>{return a+pnls[closed.indexOf(t)]},0)/wins.length:0;
  const avgL=losses.length?Math.abs(losses.reduce((a,t)=>a+pnls[closed.indexOf(t)],0)/losses.length):0;
  const pf=avgL?(avgW*wins.length/(avgL*losses.length)).toFixed(2):'∞';
  const rrs=trades.map(calcRR).filter(Boolean).map(Number);
  const avgRR=rrs.length?(rrs.reduce((a,b)=>a+b,0)/rrs.length).toFixed(2):null;

  let peak=0,maxDD=0,running=0;
  for(const p of pnls){if(!p)continue;running+=p;if(running>peak)peak=running;const dd=peak-running;if(dd>maxDD)maxDD=dd}

  const byCoin={},byStrategy={},bySession={},byEmotion={},byTF={},byDir={Long:{count:0,wins:0,pnl:0},Short:{count:0,wins:0,pnl:0}};

  // entry reason win rates
  const byEntryReason={};
  // SL/TP reason analysis
  const bySLReason={}, byTPReason={};

  closed.forEach((t,i)=>{
    const p=pnls[i]||0;
    [[t.coin,byCoin],[t.strategy,byStrategy],[t.session,bySession],[t.emotion,byEmotion],[t.timeframe,byTF]].forEach(([k,obj])=>{
      if(!k)return;
      if(!obj[k])obj[k]={count:0,pnl:0,wins:0};
      obj[k].count++;obj[k].pnl+=p;if(p>0)obj[k].wins++;
    });
    // direction
    const d=t.direction||'Long';
    byDir[d].count++;byDir[d].pnl+=p;if(p>0)byDir[d].wins++;

    // entry reasons
    const er=Array.isArray(t.entryReasons)?t.entryReasons:(t.entryReasons?[t.entryReasons]:[]);
    er.forEach(r=>{
      if(!byEntryReason[r])byEntryReason[r]={count:0,wins:0,pnl:0};
      byEntryReason[r].count++;byEntryReason[r].pnl+=p;if(p>0)byEntryReason[r].wins++;
    });
    const slr=Array.isArray(t.slReasons)?t.slReasons:[];
    slr.forEach(r=>{if(!bySLReason[r])bySLReason[r]={count:0,wins:0,pnl:0};bySLReason[r].count++;bySLReason[r].pnl+=p;if(p>0)bySLReason[r].wins++;});
    const tpr=Array.isArray(t.tpReasons)?t.tpReasons:[];
    tpr.forEach(r=>{if(!byTPReason[r])byTPReason[r]={count:0,wins:0,pnl:0};byTPReason[r].count++;byTPReason[r].pnl+=p;if(p>0)byTPReason[r].wins++;});
  });

  // equity curve
  let eq=0;const equity=[];
  closed.forEach((t,i)=>{eq+=pnls[i]||0;equity.push({date:t.date,eq:+eq.toFixed(2),pnl:pnls[i]||0,coin:t.coin||''})});

  // streaks
  let maxWS=0,maxLS=0,cur=0;
  for(const p of pnls){if(p>0){cur=cur>0?cur+1:1}else{cur=cur<0?cur-1:-1}if(cur>maxWS)maxWS=cur;if(-cur>maxLS)maxLS=-cur}

  // daily pnl
  const byDate={};
  closed.forEach((t,i)=>{if(!byDate[t.date])byDate[t.date]=0;byDate[t.date]+=pnls[i]||0});
  const bestDay=Object.entries(byDate).sort((a,b)=>b[1]-a[1])[0];
  const worstDay=Object.entries(byDate).sort((a,b)=>a[1]-b[1])[0];

  // avg trade duration (rough)
  const avgSize=closed.length?closed.reduce((a,t)=>a+(+t.size||0),0)/closed.length:0;
  const avgLev=closed.length?closed.reduce((a,t)=>a+(+t.leverage||1),0)/closed.length:0;

  // ── v13: R-multipleها، انتظار ریاضی، تحلیل روز/ساعت/تگ، دیسیپلین ──
  const rMuls=[];
  closed.forEach((t,i)=>{
    const e=+t.entry,sl=+t.stopLoss,sz=+t.size,lev=+t.leverage||1,p=pnls[i],iso=isIsolatedBudget(t);
    if(e&&(sl||iso)&&sz&&p!==null&&p!==undefined){
      const atStop=sl?Math.abs(e-sl)/e*sz*lev:Infinity;
      // حالت ۳: ریسکِ هر ترید مارجین ایزوله است (به‌اضافه‌ی ذخیره‌ی هزینه)
      const risk=iso?Math.min(sz,atStop)+(+t.feeReserve||0):atStop;
      if(risk>0)rMuls.push(p/risk);
    }
  });
  const avgR=rMuls.length?rMuls.reduce((a,b)=>a+b,0)/rMuls.length:null;
  const expectancy=closed.length?total/closed.length:0;

  const byWeekday={},byHour={},byTag={};
  closed.forEach((t,i)=>{
    const p=pnls[i]||0;
    if(t.date){
      const wd=WD_FA[new Date(t.date+'T12:00:00').getDay()];
      if(!byWeekday[wd])byWeekday[wd]={count:0,pnl:0,wins:0};
      byWeekday[wd].count++;byWeekday[wd].pnl+=p;if(p>0)byWeekday[wd].wins++;
    }
    if(t.time&&/^\d\d/.test(t.time)){
      const hk=t.time.slice(0,2)+':00';
      if(!byHour[hk])byHour[hk]={count:0,pnl:0,wins:0};
      byHour[hk].count++;byHour[hk].pnl+=p;if(p>0)byHour[hk].wins++;
    }
    if(t.tags){
      String(t.tags).split(',').map(x=>x.trim()).filter(Boolean).forEach(tg=>{
        if(!byTag[tg])byTag[tg]={count:0,pnl:0,wins:0};
        byTag[tg].count++;byTag[tg].pnl+=p;if(p>0)byTag[tg].wins++;
      });
    }
  });

  // v25.16: یک نمره در همه‌جا — همان فرمولِ آکادمی (academyDiscipline). اگر فراخواننده فقط
  // تریدهای بسته را داده، فهرست کامل را جدا می‌فرستد تا عدد با آکادمی یکی بماند.
  const discipline=academyDiscipline(discList||trades);

  return{
    total,closed:closed.length,open:trades.filter(t=>!t.exit).length,total_trades:trades.length,
    wins:wins.length,losses:losses.length,winRate:wr,avgWin:avgW,avgLoss:avgL,
    profitFactor:pf,avgRR,maxDD,
    best:pnls.length?Math.max(...pnls.filter(p=>p!==null)):0,
    worst:pnls.length?Math.min(...pnls.filter(p=>p!==null)):0,
    byCoin,byStrategy,bySession,byEmotion,byTF,byDir,
    byEntryReason,bySLReason,byTPReason,
    equity,maxWinStreak:maxWS,maxLossStreak:maxLS,
    longs:trades.filter(t=>t.direction==='Long').length,
    shorts:trades.filter(t=>t.direction==='Short').length,
    bestDay,worstDay,avgSize,avgLev,
    avgR,rCount:rMuls.length,expectancy,byWeekday,byHour,byTag,discipline
  };
}

// ══════════════════════════════════════════════════════
// EQUITY CHART
// ══════════════════════════════════════════════════════
function equityChart(data,w=320,h=80){
  if(!data||data.length<2)return '<div style="text-align:center;color:var(--muted);font-size:11px;padding:18px">حداقل ۲ ترید بسته شده نیاز است</div>';
  const vals=data.map(d=>d.eq);
  const mn=Math.min(...vals),mx=Math.max(...vals),rng=mx-mn||1;
  const P=8,pts=data.map((d,i)=>[P+(i/(data.length-1))*(w-P*2),P+((mx-d.eq)/rng)*(h-P*2)]);
  const pLine=pts.map(p=>p.join(',')).join(' ');
  // رنگ از کلِ سود/زیانِ دوره، نه از آخرین ترید — حساب سودده با یک ضررِ آخر قرمز نشود
  const total=data[data.length-1]?.eq||0,col=total>=0?'#22C97A':'#E8505B';
  const zeroY=mn<0&&mx>0?P+(mx/rng)*(h-P*2):null;
  const fill=`M ${pts[0].join(',')} L ${pts.map(p=>p.join(',')).join(' L ')} L ${pts[pts.length-1][0]},${h-P} L ${pts[0][0]},${h-P} Z`;
  const id='ef'+Math.random().toString(36).slice(2,6);
  return `<svg viewBox="0 0 ${w} ${h}" style="width:100%;height:auto">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${col}" stop-opacity=".3"/>
      <stop offset="100%" stop-color="${col}" stop-opacity="0"/>
    </linearGradient></defs>
    <path d="${fill}" fill="url(#${id})"/>
    ${zeroY!==null?`<line x1="${P}" x2="${w-P}" y1="${zeroY}" y2="${zeroY}" stroke="rgba(255,255,255,.14)" stroke-dasharray="3 4"/>`:''}
    <polyline points="${pLine}" fill="none" stroke="${col}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
    ${data.length<=30?pts.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="2.2" fill="${data[i].pnl>=0?'#22C97A':'#E8505B'}"/>`).join(''):''}
    <circle cx="${pts[pts.length-1][0]}" cy="${pts[pts.length-1][1]}" r="4" fill="${col}" stroke="#141210" stroke-width="2"/>
  </svg>`;
}

// ══════════════════════════════════════════════════════
// v26.4: منحنیِ سرمایه‌ی تعاملی — محور، تاریخ، افت از اوج، و برچسبِ هر نقطه با لمس یا ماوس
// ══════════════════════════════════════════════════════
const EQP = {};                                   // داده‌ی هر نمودار، با شناسه‌اش (رندرِ دوباره رونویسی می‌کند)
function eqpNice(span){ const p = Math.pow(10, Math.floor(Math.log10(span || 1))), f = span / p; return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * p; }
function eqpMoney(v){
  const a = Math.abs(v), s = v < 0 ? '-' : '';
  return s + '$' + (a >= 1e6 ? +(a / 1e6).toFixed(1) + 'M' : a >= 1e4 ? +(a / 1e3).toFixed(0) + 'k' : a >= 1e3 ? +(a / 1e3).toFixed(1) + 'k' : +a.toFixed(a < 10 ? 1 : 0));
}
function equityPro(data, id, title){
  if (!data || data.length < 2) return `<div class="chart-wrap fade-up"><div class="chart-title">${title}</div>${equityChart(data)}</div>`;
  // نقطه‌ی صفر (پیش از اولین معامله) تا منحنی از مبدأ شروع شود
  const pts = [{ date: data[0].date, eq: 0, pnl: 0, start: true }, ...data];
  let peak = 0, peakI = 0, maxDD = 0, maxDDI = 0;
  const dd = pts.map((p, i) => { if (p.eq > peak) { peak = p.eq; peakI = i; } const d = p.eq - peak; if (-d > maxDD) { maxDD = -d; maxDDI = i; } return d; });
  const vals = pts.map(p => p.eq);
  let lo = Math.min(0, ...vals), hi = Math.max(0, ...vals);
  const step = eqpNice((hi - lo) / 4 || 1); lo = Math.floor(lo / step) * step; hi = Math.ceil(hi / step) * step; if (hi === lo) hi = lo + step;
  const W = 1000, H = 300, n = pts.length - 1;
  const X = i => i / n * W, Y = v => (hi - v) / (hi - lo) * H, f = v => +v.toFixed(1);
  // با صدها نقطه، خطِ نمایش آخرینِ هر دسته (~۲۴۰) است؛ برچسبِ لمسی همیشه نقطه‌ی واقعی را نشان می‌دهد
  const k = Math.max(1, Math.ceil(pts.length / 240));
  const show = pts.map((p, i) => [i, p]).filter(([i]) => i === 0 || i === n || i % k === 0).map(([i, p]) => [X(i), Y(p.eq)]);
  let d = `M${f(show[0][0])},${f(show[0][1])}`;
  for (let i = 0; i < show.length - 1; i++) {
    const a = show[i - 1] || show[i], b = show[i], c = show[i + 1], e = show[i + 2] || c;
    d += ` C${f(b[0] + (c[0] - a[0]) / 6)},${f(b[1] + (c[1] - a[1]) / 6)} ${f(c[0] - (e[0] - b[0]) / 6)},${f(c[1] - (e[1] - b[1]) / 6)} ${f(c[0])},${f(c[1])}`;
  }
  const up = pts[n].eq >= 0, col = up ? 'var(--green)' : 'var(--red)', gid = 'eqg' + id;
  const ticks = []; for (let v = hi; v >= lo - 1e-9; v -= step) ticks.push(+v.toFixed(6));
  // زیرِ آب: افت از اوج، مقیاسِ خودش
  const ddH = 60, ddMax = maxDD || 1;
  const ddPath = `M0,0 ${pts.map((p, i) => `L${f(X(i))},${f(-dd[i] / ddMax * ddH)}`).join(' ')} L${W},0 Z`;
  const xl = [0, .25, .5, .75, 1].map(q => Math.round(q * n));
  EQP[id] = { pts, dd, n, lo, hi, col };
  return `<div class="chart-wrap eqp fade-up" id="${id}">
    <div class="eqp-head"><div class="chart-title">${title}</div>
      <div class="eqp-sum"><span><u>فعلی</u><b style="color:${col}"><bdi dir="ltr">${eqpMoney(pts[n].eq)}</bdi></b></span>
        <span><u>اوج</u><b style="color:var(--gold-light)"><bdi dir="ltr">${eqpMoney(peak)}</bdi></b></span>
        <span><u>بیشترین افت</u><b style="color:var(--red)"><bdi dir="ltr">${maxDD ? '-' + eqpMoney(maxDD) : '$0'}</bdi></b></span></div></div>
    <div class="eqp-plot" onpointermove="eqpMove(event,'${id}')" onpointerdown="eqpMove(event,'${id}')" onpointerleave="eqpHide('${id}')">
      <div class="eqp-y">${ticks.map(v => `<span style="top:${f(Y(v) / H * 100)}%"${v === 0 ? ' class="z"' : ''}><bdi dir="ltr">${eqpMoney(v)}</bdi></span>`).join('')}</div>
      <svg class="eqp-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-label="${title}" role="img">
        <defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:${col};stop-opacity:.24"/><stop offset="1" style="stop-color:${col};stop-opacity:0"/></linearGradient></defs>
        ${ticks.map(v => `<line x1="0" x2="${W}" y1="${f(Y(v))}" y2="${f(Y(v))}" class="${v === 0 ? 'eqp-zero' : 'eqp-grid'}" vector-effect="non-scaling-stroke"/>`).join('')}
        <path d="${d} L${W},${f(Y(lo))} L0,${f(Y(lo))} Z" fill="url(#${gid})"/>
        <path d="${d}" fill="none" style="stroke:${col}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
      </svg>
      ${peak > 0 ? `<span class="eqp-peak" style="left:${f(X(peakI) / W * 100)}%;top:${f(Y(peak) / H * 100)}%" title="اوج"></span>` : ''}
      <span class="eqp-end" style="left:100%;top:${f(Y(pts[n].eq) / H * 100)}%;--c:${col}"></span>
      <i class="eqp-vl"></i><i class="eqp-dot"></i><div class="eqp-tip" role="status"></div>
    </div>
    <div class="eqp-x">${xl.map(i => `<span>${fmtDateFaShort(pts[i].date)}</span>`).join('')}</div>
    ${maxDD > 0 ? `<div class="eqp-dd"><u>افت از اوج</u>
      <svg viewBox="0 0 ${W} ${ddH}" preserveAspectRatio="none" aria-hidden="true"><path d="${ddPath}" class="eqp-ddp"/><line x1="0" x2="${W}" y1="0" y2="0" class="eqp-zero" vector-effect="non-scaling-stroke"/></svg>
      <span class="eqp-ddmax" style="left:${f(X(maxDDI) / W * 100)}%"><bdi dir="ltr">-${eqpMoney(maxDD)}</bdi></span></div>` : ''}
  </div>`;
}
function eqpMove(ev, id){
  const box = document.getElementById(id), D = EQP[id]; if (!box || !D) return;
  const plot = box.querySelector('.eqp-plot'), r = plot.getBoundingClientRect();
  const q = Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width)), i = Math.round(q * D.n), p = D.pts[i];
  const x = i / D.n * r.width, y = (D.hi - p.eq) / (D.hi - D.lo) * r.height;
  const vl = plot.querySelector('.eqp-vl'), dot = plot.querySelector('.eqp-dot'), tip = plot.querySelector('.eqp-tip');
  vl.style.left = x + 'px'; dot.style.left = x + 'px'; dot.style.top = y + 'px'; dot.style.background = D.col;
  const money = v => `<bdi dir="ltr">${fmtUSD(v)}</bdi>`, clr = v => v >= 0 ? 'var(--green)' : 'var(--red)';
  tip.innerHTML = p.start ? `<b>شروع</b><span>سرمایه‌ی تجمعی از صفر</span>`
    : `<b>${fmtDateFa(p.date)}</b><span>معامله‌ی ${faNum(i)}${p.coin ? ` · <bdi dir="ltr">${esc(p.coin)}</bdi>` : ''}</span>
       <dl><dt>این معامله</dt><dd style="color:${clr(p.pnl)}">${money(p.pnl)}</dd>
       <dt>سرمایه‌ی تجمعی</dt><dd style="color:${clr(p.eq)}">${money(p.eq)}</dd>
       <dt>افت از اوج</dt><dd style="color:${D.dd[i] < 0 ? 'var(--red)' : 'var(--muted)'}">${D.dd[i] < 0 ? money(D.dd[i]) : 'در اوج'}</dd></dl>`;
  box.classList.add('on');
  const tw = tip.offsetWidth, left = Math.max(tw / 2 + 2, Math.min(r.width - tw / 2 - 2, x));
  tip.style.left = left + 'px';
  tip.style.top = (y > r.height * .45 ? 6 : r.height - tip.offsetHeight - 6) + 'px';   // برچسب جایی که خط نیست
}
function eqpHide(id){ document.getElementById(id)?.classList.remove('on'); }
// ══════════════════════════════════════════════════════
// v13: فیلتر بازه زمانی داشبورد
// ══════════════════════════════════════════════════════
function setDashRange(r){dashRange=r;renderStudentDashboard();}

// ── فاز حرفه‌ای (v23.2) ──
// پله‌ی آخرِ نردبان، نه عدد ثابت — اگر منتور آن را عوض کند، این هم دنبالش می‌آید.
function proThreshold(){ const m=getXPMilestones(); return m[m.length-1].n; }
// مرز با جایگاهِ ترید تعیین می‌شود، نه تاریخ: اگر چند ترید در همان روزِ مرز
// باشند، مقایسه‌ی تاریخ بعضی را به فاز اشتباه می‌فرستاد. روی خودِ فهرستِ ورودی
// حساب می‌شود، پس در نمای منتور هم هر دانشجو مرز خودش را دارد.
const _proSplitCache=new WeakMap();
function proSplit(list){
  const arr=Array.isArray(list)?list:[];
  if(_proSplitCache.has(arr)) return _proSplitCache.get(arr);
  const n=proThreshold();
  const key=t=>String(t.date||'')+' '+String(t.time||'');
  const sorted=arr.filter(t=>t&&!t._deleted).sort((a,b)=>key(a).localeCompare(key(b)));
  const out={ n, reached:sorted.length>=n,
    start: sorted.length>n ? (sorted[n].date||null) : null,
    pre: new Set(sorted.slice(0,n)), pro: new Set(sorted.slice(n)) };
  // هم علامت می‌زند هم پاک می‌کند: اگر تریدی پیش‌تر حذف شود، ترید ۱۵۱ به ۱۵۰
  // برمی‌گردد و نباید با قاعده‌ی سخت‌تر سنجیده شود.
  for (const t of out.pre) _PRO_TRADES.delete(t);
  for (const t of out.pro) _PRO_TRADES.add(t);
  _proSplitCache.set(arr,out);
  return out;
}
function phaseFilter(trades){
  if(dashPhase==='all'||!isCourseAccount()) return trades;
  const sp=proSplit(TRADES);
  if(!sp.pro.size) return trades;                 // هنوز فازی برای تفکیک نیست
  const set=dashPhase==='pro'?sp.pro:sp.pre;
  return trades.filter(t=>set.has(t));
}
function setDashPhase(p){dashPhase=p;renderStudentDashboard();}
function phaseChipsHTML(){
  if(!isCourseAccount()) return '';
  const sp=proSplit(TRADES);
  if(!sp.pro.size) return '';
  const opts=[['all','کل مسیر'],['pre',`${faNum(sp.n)} تریدِ اول`],['pro',`بعد از حرفه‌ای · ${faNum(sp.pro.size)}`]];
  return `<div class="range-row phase-row fade-up"><span class="phase-lbl">💎 فاز</span>${opts.map(([k,l])=>
    `<button class="rchip ${dashPhase===k?'active':''}" onclick="setDashPhase('${k}')">${l}</button>`).join('')}</div>`;
}
// مقایسه‌ی کنارِ هم. سود/زیان کل عمداً نیست: دو فاز تعداد تریدِ متفاوت دارند و
// جمعِ کل را نمی‌شود مقایسه کرد؛ امید ریاضیِ هر ترید قابل مقایسه است.
// تحلیل مدیریت ریسکِ تریدهای فاز حرفه‌ای: ریسک هر ترید به درصد موجودی.
// فقط تریدهایی شمرده می‌شوند که موجودیِ مبنا دارند (از ماشین‌حساب) یا کاربر
// موجودی‌اش را وارد کرده؛ بدون موجودی، درصد ریسک معنا ندارد.
function proRiskCard(){
  if(!isCourseAccount()) return '';
  const sp=proSplit(TRADES);
  if(!sp.pro.size||dashPhase==='pre') return '';
  const cap=+L.g(capitalKey())||0;
  const pro=[...sp.pro];
  const noSL=pro.filter(t=>(+t.leverage||1)>1&&!hasDefinedRisk(t)).length;
  const rs=pro.map(t=>tradeRiskPct(t,cap)).filter(v=>v!==null&&v<100).sort((a,b)=>a-b);
  const lev=pro.reduce((a,t)=>a+(+t.leverage||1),0)/pro.length;
  const over=rs.filter(v=>v>RISK_MAX+0.001).length;
  const dec=(v,d=2)=>faNum((+v).toFixed(d)).replace('.','٫');
  const body=rs.length?`
      <div class="pr-grid">
        <div><small>میانه‌ی ریسک هر ترید</small><b>${dec(rs[Math.floor(rs.length/2)])}٪</b></div>
        <div><small>بیشترین ریسک</small><b class="${rs[rs.length-1]>RISK_MAX?'bad':''}">${dec(rs[rs.length-1])}٪</b></div>
        <div><small>بالاتر از ${faNum(RISK_MAX)}٪</small><b class="${over?'bad':'good'}">${faNum(over)} از ${faNum(rs.length)}</b></div>
        <div><small>میانگین اهرم</small><b>${dec(lev,1)}×</b></div>
      </div>`
    :`<div class="pr-empty">کل موجودی حسابت را در ماشین‌حسابِ فرم ثبت ترید وارد کن تا ریسک هر ترید به درصد حساب سنجیده شود.</div>`;
  return `<div class="card fade-up pro-risk">
    <div class="card-title">🛡️ مدیریت ریسکِ فاز حرفه‌ای</div>
    <div class="pro-cmp-sub">${ownerJournal()?'معیار دوره (برای تو اجباری نیست)':'قانون'}: ریسک هر ترید ${faNum(RISK_MIN)} تا ${faNum(RISK_MAX)}٪ موجودی · اهرم حداکثر ${faNum(LEVERAGE_MAX)}× · حد ضرر اجباری${proModesOpenAt(nextTradePosition()).includes(3)?' (در حالت ۳: مارجین ایزوله)':''}</div>
    ${body}
    ${noSL?`<div class="pr-warn">⚠️ ${faNum(noSL)} تریدِ اهرمی بدون حد ضرر ثبت شده</div>`:''}
  </div>`;
}

function proCompareCard(){
  if(!isCourseAccount()) return '';
  const sp=proSplit(TRADES);
  if(!sp.pro.size||dashPhase!=='all') return '';
  const a=computeStats(TRADES.filter(t=>sp.pre.has(t)));
  const b=computeStats(TRADES.filter(t=>sp.pro.has(t)));
  if(!a||!b) return '';
  const pf=v=>v==='∞'?Infinity:(+v||0);
  const dec=(v,d)=>faNum((+v||0).toFixed(d)).replace('.','٫');   // ممیزِ فارسی
  // better: ۱ یعنی بیشتر بهتر، ‎-۱ یعنی کمتر بهتر، ۰ یعنی فقط اطلاع
  const rows=[
    ['تریدِ بسته‌شده',       a.closed,           b.closed,           0, v=>faNum(v)],
    ['وین‌ریت',              +a.winRate,         +b.winRate,         1, v=>faNum(Math.round(v))+'٪'],
    ['امید ریاضیِ هر ترید',  a.expectancy,       b.expectancy,       1, v=>fmtUSD(v)],
    ['فاکتور سود',           pf(a.profitFactor), pf(b.profitFactor), 1, v=>v===Infinity?'∞':dec(v,2)],
    ['بیشترین افت سرمایه',   a.maxDD,            b.maxDD,           -1, v=>fmtUSD(v,false)],
    ['بیشترین ضرر پیاپی',    a.maxLossStreak,    b.maxLossStreak,   -1, v=>faNum(v)],
    ['میانگین اهرم',         a.avgLev,           b.avgLev,           0, v=>dec(v,1)+'×'],
    ['نمره‌ی اصول',          a.discipline?.score??0, b.discipline?.score??0, 1, v=>faNum(v)]
  ];
  const tone=(x,y,dir)=>{
    if(!dir||!Number.isFinite(x)||!Number.isFinite(y)||x===y) return '';
    return (y>x)===(dir>0)?'up':'down';
  };
  return `<div class="card fade-up pro-cmp">
    <div class="card-title">💎 قبل و بعد از حرفه‌ای</div>
    <div class="pro-cmp-sub">مرز: ترید ${faNum(sp.n)}${sp.start?` · از ${fmtDateFaShort(sp.start)}`:''}</div>
    <div class="pro-cmp-grid">
      <span class="h"></span><span class="h">${faNum(sp.n)} تریدِ اول</span><span class="h">بعد از آن</span>
      ${rows.map(([l,x,y,d,f])=>`<span class="l">${l}</span><span>${f(x)}</span><span class="${tone(x,y,d)}">${f(y)}</span>`).join('')}
    </div>
  </div>`;
}
function rangeFilter(trades){
  if(dashRange==='all')return trades;
  const now=new Date();let fromISO;
  if(dashRange==='month'){
    const j=g2j(now.getFullYear(),now.getMonth()+1,now.getDate());
    fromISO=isoOfG(j2gParts(j.jy,j.jm,1));
  }else{
    fromISO=new Date(now.getTime()-(+dashRange)*864e5).toISOString().slice(0,10);
  }
  return trades.filter(t=>(t.date||'')>=fromISO);
}

// ══════════════════════════════════════════════════════
// v13: تقویم حرارتی سود/زیان (شمسی)
// ══════════════════════════════════════════════════════
function calNav(d){
  calOffset=Math.min(0,calOffset+d);
  if(SESSION?.role==='mentor'&&mentorSelected)renderMentorMain();
  else if(SESSION?.role==='mentor')renderMentorDashboard();
  else renderStudentDashboard();
}
function heatmapCalendar(trades){
  window._calTrades=trades; // منبع تقویم برای showDayTrades (داشبورد دانشجو یا نمای منتور)
  const pnlByDate={},cntByDate={};
  trades.filter(t=>t.exit&&t.date).forEach(t=>{const p=calcPnl(t)||0;pnlByDate[t.date]=(pnlByDate[t.date]||0)+p;cntByDate[t.date]=(cntByDate[t.date]||0)+1});
  trades.filter(t=>!t.exit&&t.date).forEach(t=>{cntByDate[t.date]=(cntByDate[t.date]||0)+1});
  const now=new Date();
  const jNow=g2j(now.getFullYear(),now.getMonth()+1,now.getDate());
  let jy=jNow.jy,jm=jNow.jm+calOffset;
  while(jm<1){jm+=12;jy--}
  const len=jMonthLen(jy,jm);
  const g1=j2gParts(jy,jm,1);
  const firstDow=(new Date(g1.gy,g1.gm-1,g1.gd).getDay()+1)%7; // 0=شنبه
  const todayISO=now.toISOString().slice(0,10);
  const monthVals=[];
  for(let d=1;d<=len;d++){
    const p=pnlByDate[isoOfG(j2gParts(jy,jm,d))];
    if(p!==undefined)monthVals.push(Math.abs(p));
  }
  const maxAbs=Math.max(1,...monthVals);
  let cells='',monthSum=0,greenDays=0,redDays=0;
  for(let i=0;i<firstDow;i++)cells+='<div></div>';
  for(let d=1;d<=len;d++){
    const iso=isoOfG(j2gParts(jy,jm,d));
    const p=pnlByDate[iso],c=cntByDate[iso]||0;
    let bg='var(--dim)',col='var(--muted)';
    if(p!==undefined){
      monthSum+=p;
      const a=(0.22+0.58*Math.abs(p)/maxAbs).toFixed(2);
      if(p>0){bg=`rgba(34,201,122,${a})`;col='#eafff3';greenDays++}
      else if(p<0){bg=`rgba(232,80,91,${a})`;col='#ffecee';redDays++}
      else{bg='rgba(200,168,75,.3)';col='#fff'}
    }
    const isToday=iso===todayISO;
    cells+=`<div class="cal-cell${c?' has':''}" style="background:${bg};color:${col};${isToday?'outline:2px solid var(--gold);outline-offset:1px':''}"${c?` onclick="showDayTrades('${iso}')"`:''}><span class="cal-d">${faNum(d)}</span>${c?`<span class="cal-n">${faNum(c)}</span>`:''}</div>`;
  }
  return `<div class="chart-wrap fade-up">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:8px;flex-wrap:wrap">
      <div class="chart-title" style="margin-bottom:0">🗓️ تقویم سود و زیان</div>
      <div style="display:flex;align-items:center;gap:6px">
        <button class="cal-nav" onclick="calNav(-1)">‹</button>
        <span style="font-size:12px;font-weight:700;color:var(--gold);min-width:98px;text-align:center">${JMONTHS[jm-1]} ${faNum(jy)}</span>
        <button class="cal-nav" onclick="calNav(1)" ${calOffset===0?'disabled':''}>›</button>
      </div>
    </div>
    <div class="cal-head">${['ش','ی','د','س','چ','پ','ج'].map(x=>`<div>${x}</div>`).join('')}</div>
    <div class="cal-grid">${cells}</div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px;font-size:11px">
      <span style="color:${monthSum>=0?'var(--green)':'var(--red)'};font-family:var(--f-mono);font-weight:700">${fmtUSD(monthSum)}</span>
      <span style="color:var(--muted)">${faNum(greenDays)} روز سبز · ${faNum(redDays)} روز قرمز</span>
    </div>
  </div>`;
}
function showDayTrades(iso){
  const list=(window._calTrades||TRADES).filter(t=>t.date===iso).sort((a,b)=>(a.time||'').localeCompare(b.time||''));
  if(!list.length)return;
  const sum=list.filter(t=>t.exit).reduce((a,t)=>a+(calcPnl(t)||0),0);
  document.getElementById('det-content').innerHTML=`
    <div class="bs-title" style="display:flex;justify-content:space-between;align-items:center">
      <span>🗓️ ${fmtDateFa(iso)}</span>
      <span style="font-family:var(--f-mono);font-size:15px;color:${sum>=0?'var(--green)':'var(--red)'}">${fmtUSD(sum)}</span>
    </div>
    ${list.map(t=>{const pnl=t.exit?calcPnl(t):null;return `
      <div class="trade-item" onclick="showDetail('${t.id}')" style="margin-bottom:8px">
        ${coinLogo(t.coin)}
        <div class="t-info">
          <div class="t-coin">${esc(t.coin)}/${esc(t.pair)} <span class="badge ${badgeCls(t.direction)}">${esc(t.direction)}</span></div>
          <div class="t-meta">${esc(t.time||'')} · ${esc(t.strategy||'')}</div>
        </div>
        <div class="t-pnl">${pnl!==null?`<div class="t-amt ${pnl>=0?'green':'red'}">${fmtUSD(pnl)}</div>`:'<span class="badge b-open">باز</span>'}</div>
      </div>`}).join('')}`;
  document.getElementById('det-sheet').classList.add('open');
}

// ══════════════════════════════════════════════════════
// v13: بینش‌های هوشمند (تحلیل خودکار الگوهای معامله‌گر)
// ══════════════════════════════════════════════════════
function buildInsights(s){
  if(!s||s.closed<5)return [];
  const out=[];
  const wrAll=parseFloat(s.winRate);
  const NEG=['FOMO','Greedy','Fearful','Nervous','Revenge'];
  let worstEmo=null;
  NEG.forEach(e=>{const v=s.byEmotion[e];if(v&&v.count>=3){const wr=v.wins/v.count*100;if(wr<wrAll-10&&(!worstEmo||wr<worstEmo.wr))worstEmo={e,wr,count:v.count}}});
  if(worstEmo)out.push({icon:'🧠',tone:'bad',text:`وقتی با احساس «${EMOTIONS_FA[worstEmo.e]||worstEmo.e}» ترید می‌کنی وین‌ریتت ${faNum(worstEmo.wr.toFixed(0))}٪ است — خیلی پایین‌تر از میانگینت (${faNum(wrAll.toFixed(0))}٪)`});
  const coins=Object.entries(s.byCoin).filter(([,v])=>v.count>=3);
  if(coins.length){
    const sortedC=[...coins].sort((a,b)=>b[1].pnl-a[1].pnl);
    const best=sortedC[0],worst=sortedC[sortedC.length-1];
    if(best[1].pnl>0)out.push({icon:'🏆',tone:'good',text:`قوی‌ترین بازارت ${best[0]} است: ${fmtUSD(best[1].pnl)} در ${faNum(best[1].count)} ترید`});
    if(worst[1].pnl<0&&worst[0]!==best[0])out.push({icon:'⚠️',tone:'bad',text:`در ${worst[0]} ضررده هستی (${fmtUSD(worst[1].pnl)}) — یا ستاپ را اصلاح کن یا حجم را کم کن`});
  }
  const wds=Object.entries(s.byWeekday).filter(([,v])=>v.count>=3).sort((a,b)=>b[1].pnl-a[1].pnl);
  if(wds.length>=2){
    const bw=wds[0],ww=wds[wds.length-1];
    if(bw[1].pnl>0&&ww[1].pnl<0)out.push({icon:'📅',tone:'neutral',text:`${bw[0]}ها بهترین روزت است (${fmtUSD(bw[1].pnl)}) و ${ww[0]}ها ضعیف‌ترین (${fmtUSD(ww[1].pnl)})`});
  }
  if(s.avgR!==null&&s.rCount>=5){
    out.push({icon:'📐',tone:s.avgR>=0?'good':'bad',text:`به ازای هر ۱ واحد ریسک، میانگین ${faNum(s.avgR.toFixed(2))}R برمی‌داری${s.avgR<0?' — سیستم فعلی در بلندمدت ضررده است':''}`});
  }
  if(s.discipline&&s.discipline.parts.sl<0.8)out.push({icon:'🛡️',tone:'bad',text:`فقط ${faNum(Math.round(s.discipline.parts.sl*100))}٪ تریدهایت حد ضرر ثبت‌شده دارند — بزرگ‌ترین ریسک حساب توست`});
  const ers=Object.entries(s.byEntryReason).filter(([,v])=>v.count>=4);
  if(ers.length){
    const ber=[...ers].sort((a,b)=>(b[1].wins/b[1].count)-(a[1].wins/a[1].count))[0];
    const wr=ber[1].wins/ber[1].count*100;
    if(wr>=60)out.push({icon:'🔑',tone:'good',text:`مطمئن‌ترین ستاپت «${ber[0]}» است با وین‌ریت ${faNum(wr.toFixed(0))}٪ (${faNum(ber[1].count)} ترید)`});
  }
  return out.slice(0,5);
}
function insightsCard(s){
  const ins=buildInsights(s);
  if(!ins.length)return '';
  return `<div class="card fade-up" style="margin-bottom:12px">
    <div class="card-title">✨ بینش‌های هوشمند</div>
    ${ins.map(i=>`<div class="ins-row ins-${i.tone}"><span class="ins-ico">${esc(i.icon)}</span><span class="ins-txt">${esc(i.text)}</span></div>`).join('')}
  </div>`;
}

// ══════════════════════════════════════════════════════
// v13: کارت نمره دیسیپلین
// ══════════════════════════════════════════════════════
function disciplineCard(s){
  if(!s||!s.discipline||!s.discipline.counted)return '';
  const d=s.discipline;
  const items=Object.keys(DISC_W).map(k=>[`${DISC_LABELS[k]} (${faNum(DISC_W[k])}٪)`,d.parts[k]]);
  const col=d.score>=75?'var(--green)':d.score>=45?'var(--gold)':'var(--red)';
  return `<div class="card fade-up" style="margin-bottom:12px">
    <div style="display:flex;align-items:center;gap:16px">
      <div class="disc-ring" style="background:conic-gradient(${col} ${d.score*3.6}deg,var(--dim) 0)">
        <div class="disc-ring-in"><span style="color:${col}">${faNum(d.score)}</span><small>از ۱۰۰</small></div>
      </div>
      <div style="flex:1;min-width:0">
        <div class="card-title" style="margin-bottom:10px">🎖️ نمره دیسیپلین</div>
        ${items.map(([k,v])=>`<div class="disc-row"><span>${k}</span><div class="disc-bar"><div style="width:${Math.round(v*100)}%;background:${v>=0.75?'var(--green)':v>=0.45?'var(--gold)':'var(--red)'}"></div></div><b>${faNum(Math.round(v*100))}٪</b></div>`).join('')}
        <div style="font-size:10px;color:var(--muted);margin-top:8px;line-height:1.8">روی ${faNum(d.counted)} ترید · همین عدد در آکادمی ملاک جلسهٔ مازاد است.</div>
      </div>
    </div>
  </div>`;
}

function barSection(obj,title,vk){
  const ent=Object.entries(obj).sort((a,b)=>Math.abs(b[1][vk])-Math.abs(a[1][vk])).slice(0,7);
  if(!ent.length)return '';
  const mx=Math.max(...ent.map(([,v])=>Math.abs(v[vk])))||1;
  return`<div class="chart-wrap">
    <div class="chart-title">${title}</div>
    ${ent.map(([k,v])=>{const p=v[vk],pct=(Math.abs(p)/mx*100).toFixed(1),col=p>=0?'var(--green)':'var(--red)',bg=p>=0?'linear-gradient(90deg,var(--green),rgba(34,201,122,.3))':'linear-gradient(90deg,var(--red),rgba(232,80,91,.3))';
    return`<div class="perf-row"><div class="pr-top"><span class="pr-k">${esc(k)}</span><span class="pr-v" style="color:${col}">${fmtUSD(p)}</span></div><div class="perf-bar"><div class="perf-bar-fill" style="width:${pct}%;background:${bg}"></div></div></div>`}).join('')}
  </div>`;
}

// Reason win-rate section
function reasonWRSection(obj,title){
  const ent=Object.entries(obj).filter(([,v])=>v.count>=2).sort((a,b)=>b[1].count-a[1].count).slice(0,8);
  if(!ent.length)return '';
  return`<div class="chart-wrap">
    <div class="chart-title">${title}</div>
    ${ent.map(([k,v])=>{
      const wr=(v.wins/v.count*100).toFixed(0);
      const col=+wr>=50?'var(--green)':'var(--red)';
      return`<div class="rwr-row">
        <div class="rwr-name">${esc(k)}<span class="rwr-n">${faNum(v.count)} ترید</span></div>
        <div class="rwr-bar"><div class="rwr-fill" style="width:${wr}%;background:${+wr>=50?'linear-gradient(90deg,var(--green),rgba(34,201,122,.3))':'linear-gradient(90deg,var(--red),rgba(232,80,91,.3))'}"></div></div>
        <div class="rwr-val" style="color:${col}">${faNum(wr)}٪</div>
      </div>`;
    }).join('')}
  </div>`;
}

// ══════════════════════════════════════════════════════
// XP BAR
// ══════════════════════════════════════════════════════
// مسیر بودجه به تأیید استاد گره خورده؛ برای مشترکِ عمومی نه معنا دارد نه
// درست است که نشانش بدهیم. پیش‌فرض cip است تا رفتار حساب‌های فعلی عوض نشود.
function isCourseAccount(){
  return (SESSION?.accountType || 'cip') === 'cip';
}
// ژورنال شخصی مدیر: همه‌ی هشدارهای دوره را می‌بیند، ولی هیچ محدودیتی جلوی کارش را
// نمی‌گیرد (سقف اهرم، قفل‌های ماشین‌حساب، مسیر بودجه). هر محدودیتِ تازه باید این را چک کند.
function ownerJournal(){ return !!SESSION?.personal; }
// v25.7: نوار مسیرِ ۰ تا ۱۵۰ ترید — CIP، و دانشجوهای VIPِ آکادمی (عضوِ vip). فقط نوار؛
// قانون‌های دوره (سقف اهرم، فاز حرفه‌ای، ماشین‌حساب) همچنان فقط با isCourseAccount.
function showsCoursePath(){
  if(ownerJournal()) return false;
  return isCourseAccount() || (SESSION?.role==='student' && SESSION?.accountType==='vip' && !SESSION?.isViewOnly);
}
// v25.0: عضوِ غیر CIP (پلن پولی/رایگان). نه دانشجوی دوره، نه ژورنال شخصی مالک، نه نمای منتور.
function isMember(){
  return SESSION?.role==='student' && (SESSION?.accountType==='pro'||SESSION?.accountType==='vip')
    && !SESSION?.isViewOnly && !SESSION?.personal;
}
// رابط اشتراک و QR فقط وقتی لازم است بارگذاری می‌شوند
const _lazy={};
function lazyScript(src, global){
  if(window[global]) return Promise.resolve(window[global]);
  if(!_lazy[src]) _lazy[src]=new Promise((res,rej)=>{
    // v25.11: در انتشار، tools/build_site.mjs نشانیِ jsDelivr و اثرانگشت (SRI) هر فایل را در
    // window.__CDN / __CDN_SRI می‌گذارد؛ دامنهٔ ما در ایران فایل‌های بزرگ را قطع می‌کند.
    // اگر jsDelivr نرسید یا اثرانگشت نخواند، همان فایل از دامنهٔ خودمان.
    const cdn=window.__CDN&&window.__CDN[src];
    const add=(url,canFallback)=>{
      const el=document.createElement('script'); el.src=url; el.async=true;
      if(url!==src){ el.crossOrigin='anonymous'; const sri=window.__CDN_SRI&&window.__CDN_SRI[src]; if(sri) el.integrity=sri; }
      el.onload=()=>res(window[global]);
      el.onerror=()=>{ el.remove(); if(canFallback) add(src,false); else { delete _lazy[src]; rej(new Error('load_'+src)); } };
      document.head.appendChild(el);
    };
    add(cdn||src, !!cdn);
  });
  return _lazy[src];
}
const loadBilling=()=>lazyScript('billing.js','BILLING');
const loadQR=()=>lazyScript('qrcode.min.js','QRCode');
function openSignup(){ loadBilling().then(B=>B.openSignup()).catch(()=>showToast('اتصال برقرار نشد؛ دوباره امتحان کن')); }

function renderXPBar(count, animate=true){
  const ms=getXPMilestones();
  const last=ms[ms.length-1];
  const next=ms.find(m=>count<m.n)||null;
  const cur=[...ms].reverse().find(m=>count>=m.n)||null;
  const lowN=cur?cur.n:0, nextN=next?next.n:last.n;
  const segPct=nextN>lowN?Math.min(Math.max((count-lowN)/(nextN-lowN)*100,0),100):100;
  const overall=Math.min(count/last.n*100,100);
  const graduated=count>=last.n;
  const budget=currentBudget(count);

  // گره شروع (بودجه پایه)
  const startNode=`
    <div class="xp2-node">
      <div class="xp2-medal done" style="--c:#776f63"><span class="xp2-ico">🚀</span><span class="xp2-check">✓</span></div>
      <div class="xp2-name" style="color:var(--text2)">شروع مسیر</div>
      <div class="xp2-count">۰ ترید</div>
      <div class="xp2-bdg on">💵 ${faNum(getBaseBudget())}$</div>
    </div>`;

  // گره‌ها + رابط‌ها (RTL: اولین پله سمت راست)
  const nodes=ms.map((m,i)=>{
    const done=count>=m.n;
    const active=next&&m.n===next.n;
    const prevN=i===0?0:ms[i-1].n;
    let fill=0;
    if(done)fill=100; else if(count>prevN)fill=(count-prevN)/(m.n-prevN)*100;
    const prevColor=i===0?'#776f63':ms[i-1].color;
    const conn=`<div class="xp2-conn"><div class="xp2-connfill ${fill>0&&fill<100?'xpfill':''}" style="width:${fill.toFixed(1)}%;background:linear-gradient(270deg,${prevColor},${m.color})">${fill>0&&fill<100?`<span class="xp-livedot" style="color:${m.color}"></span>`:''}</div></div>`;
    const node=`
      <div class="xp2-node">
        <div class="xp2-medal ${done?'done':active?'active':'locked'}" style="--c:${m.color}">
          <span class="xp2-ico">${done||active?m.icon:'🔒'}</span>
          ${done?'<span class="xp2-check">✓</span>':''}
        </div>
        <div class="xp2-name" style="color:${done||active?m.color:'var(--muted)'}">${esc(m.title)}</div>
        <div class="xp2-count">${faNum(m.n)} ترید</div>
        <div class="xp2-bdg ${done?'on':''}" style="${done?`border-color:${m.color};color:${m.color}`:''}">💵 ${faNum(m.budget)}$</div>
      </div>`;
    return conn+node;
  }).join('');

  const motiv=graduated?'به قله رسیدی — حالا وقتِ درآمد دلاری واقعی است 💎'
    :overall>=75?'چیزی نمانده؛ همین کیفیت را نگه دار 🔥'
    :overall>=50?'نیمه‌ی مسیر گذشت — دیسیپلینت دارد دیده می‌شود 🛡️'
    :overall>=25?'ریتم گرفتی! ثبات از تکرارِ درست می‌آید ⚡'
    :'هر حرفه‌ای یک روز همین‌جا ایستاده بود — ترید بعدی را ثبت کن 🌱';

  return `<div class="xp-section xp2 fade-up" style="animation-delay:.08s">
    <div class="xp2-head">
      <div>
        <div class="xp-title">🎓 مسیر پیشرفت</div>
        <div class="xp2-sub">${faNum(count)} ترید ثبت‌شده · ${faNum(Math.round(overall))}٪ مسیر</div>
      </div>
      <div class="xp2-levelbox">
        <div class="xp2-level" style="background:linear-gradient(135deg,${cur?cur.color:'#776f63'},${cur?cur.color:'#776f63'}99)">${esc(cur?cur.icon:'🚀')} ${esc(cur?cur.title:'شروع مسیر')}</div>
        <div class="xp2-curbudget">بودجه فعلی: <b>${faNum(budget)}$</b></div>
      </div>
    </div>
    <div class="xp2-track" dir="rtl">${startNode}${nodes}</div>
    ${graduated?`
    <div class="xp2-grad">
      <div class="xp2-gradico">🏆</div>
      <div>
        <div class="xp2-gradt">شروع اصولی درآمد دلاری</div>
        <div class="xp2-grads">مسیر ${faNum(last.n)} ترید کامل شد — حداقل بودجه پس از تأیید استاد: <b>${faNum(last.budget)}$</b></div>
      </div>
    </div>`:`
    <div class="xp2-next">
      <div class="xp2-nexttop">
        <span>پله بعد: <b style="color:${next.color}">${esc(next.icon)} ${esc(next.title)}</b></span>
        <span class="xp2-remain">${faNum(next.n-count)} ترید مانده → بودجه ${faNum(next.budget)}$</span>
      </div>
      <div class="xp2-barrow">
        <div class="xp2-nextbar"><div class="xpfill" style="width:${segPct.toFixed(0)}%;background:linear-gradient(270deg,${cur?cur.color:'#776f63'},${next.color})">${segPct>3&&segPct<100?`<span class="xp-livedot" style="color:${next.color}"></span>`:''}</div></div>
        <span class="xp2-pct" style="color:${next.color}">${faNum(segPct.toFixed(0))}٪</span>
      </div>
    </div>`}
    <div class="xp2-motiv">${motiv}</div>
  </div>`;
}

// v14.2: تبریک اتمام مسیر — یک‌بار، با نوتیف بودجه پس از تأیید استاد
function checkGraduation(){
  if(!SESSION||SESSION.role!=='student'||SESSION.isViewOnly)return false;
  const ms=getXPMilestones(), last=ms[ms.length-1];
  if(TRADES.length<last.n)return false;
  const k='sc_grad_seen_'+SESSION.uid;
  if(L.g(k))return false;
  L.s(k,new Date().toISOString().slice(0,10));
  document.getElementById('det-content').innerHTML=`
    <div style="text-align:center;padding:10px 6px 4px">
      <div style="font-size:52px;filter:drop-shadow(0 0 18px rgba(200,168,75,.7));margin-bottom:10px">🏆</div>
      <div style="font-family:var(--f-display);font-size:20px;color:var(--gold);margin-bottom:8px">تبریک! مسیر ${faNum(last.n)} ترید کامل شد</div>
      <div style="font-size:13px;color:var(--text2);line-height:2.1;margin-bottom:16px">تو حالا یک <b style="color:${last.color}">${last.icon} ${last.title}</b> هستی و واجد شرایطِ<br><b style="color:var(--gold)">«شروع اصولی درآمد دلاری»</b></div>
      <div style="background:rgba(200,168,75,.08);border:1px solid var(--gold-dim);border-radius:12px;padding:13px;font-size:12.5px;color:var(--text);line-height:2;margin-bottom:18px">
        💵 حداقل بودجه پس از تأیید استاد: <b style="font-family:var(--f-mono);color:var(--gold)">${faNum(last.budget)} دلار</b><br>
        <span style="color:var(--muted);font-size:11px">برای فعال‌سازی با استاد هماهنگ کن</span>
      </div>
      <button class="btn btn-primary" style="margin-top:0" onclick="closeSheet()">🚀 آماده‌ام</button>
    </div>`;
  document.getElementById('det-sheet').classList.add('open');
  return true;
}

// ══════════════════════════════════════════════════════
// STUDENT DASHBOARD
// ══════════════════════════════════════════════════════
// ── داشبورد v21 ──────────────────────────────────────────
// «بزرگ‌ترین نشت» — همان یک جمله‌ای که دانشجو باید امروز بخواند.
// از میان قوانینِ اصلیِ پلن، آن که کمترین نرخ رعایت را دارد انتخاب می‌شود.
function dashLeak(){
  const st = playbookStats();
  if(!st) return null;
  const core = st.perRule.filter(r => r.core && r.n >= 4).sort((a,b) => a.rate - b.rate)[0];
  if(!core || core.rate >= 85) return null;
  const cost = (core.avgKept != null && core.avgBroke != null && core.avgBroke < core.avgKept)
    ? ` هر بار که رعایتش نکردی، به‌طور میانگین ${fmtUSD(core.avgBroke - core.avgKept)} برایت تمام شده.` : '';
  return `بیشترین نشتِ این دوره: <em>${esc(core.label)}</em> — فقط ${faNum(Math.round(core.rate))}٪ رعایت شده.${cost}`;
}

// v26.3: سرِ داشبورد، زیرِ مسیر پیشرفت — در یک نگاه: چقدر، با چه روندی، با چه کیفیتی، و کجا نشت دارم.
// سود/زیانِ بازه‌ی قبلیِ هم‌اندازه (ماه ⇒ ماه شمسیِ قبل؛ ۳۰/۹۰ ⇒ همان تعداد روزِ قبلش؛ «همه» ⇒ ۳۰ روز اخیر).
function perfDelta(list){
  const sum = arr => arr.filter(t => t.exit).reduce((a, t) => a + (calcPnl(t) || 0), 0);
  const now = new Date(), iso = d => d.toISOString().slice(0, 10);
  let from, prevFrom, label;
  if (dashRange === 'month') {
    const j = g2j(now.getFullYear(), now.getMonth() + 1, now.getDate());
    const pm = j.jm === 1 ? { jy: j.jy - 1, jm: 12 } : { jy: j.jy, jm: j.jm - 1 };
    from = isoOfG(j2gParts(j.jy, j.jm, 1)); prevFrom = isoOfG(j2gParts(pm.jy, pm.jm, 1)); label = 'نسبت به ماه قبل';
  } else {
    const days = dashRange === 'all' ? 30 : +dashRange;
    from = iso(new Date(now.getTime() - days * 864e5)); prevFrom = iso(new Date(now.getTime() - 2 * days * 864e5));
    label = dashRange === 'all' ? '۳۰ روز اخیر' : `نسبت به ${faNum(days)} روز قبل`;
  }
  const d = t => t.date || '';
  const cur = sum(list.filter(t => d(t) >= from)), prev = sum(list.filter(t => d(t) >= prevFrom && d(t) < from));
  const curN = list.filter(t => t.exit && d(t) >= from).length;
  return dashRange === 'all' ? { value: cur, label, abs: true, empty: !curN } : { value: cur - prev, label, abs: false };
}
// منحنیِ کوچکِ سرمایه: ارتفاعِ ثابت و خمِ نرم. با صدها ترید، آخرینِ هر دسته (حداکثر ~۹۶ نقطه) —
// شکلِ کلی و نقطه‌ی پایانی دقیق می‌مانند، دندانه‌های ریز نه. نقطه‌ی پایانی HTML است تا با کشیدنِ SVG بیضی نشود.
function perfSpark(data){
  if (!data || data.length < 2) return '<div class="ph-spark ph-spark-empty">برای منحنی سرمایه دست‌کم دو معامله‌ی بسته لازم است</div>';
  const step = Math.max(1, Math.ceil(data.length / 96));
  const pick = data.filter((_, i) => i === 0 || i === data.length - 1 || i % step === 0);
  const vals = pick.map(x => x.eq), mn = Math.min(0, ...vals), mx = Math.max(0, ...vals), rng = mx - mn || 1;
  const X = i => i / (pick.length - 1) * 100, Y = v => 8 + (mx - v) / rng * 84;
  const p = pick.map((x, i) => [X(i), Y(x.eq)]), f = v => +v.toFixed(2);
  let d = `M${f(p[0][0])},${f(p[0][1])}`;
  for (let i = 0; i < p.length - 1; i++) {
    const a = p[i - 1] || p[i], b = p[i], c = p[i + 1], e = p[i + 2] || c;
    d += ` C${f(b[0] + (c[0] - a[0]) / 6)},${f(b[1] + (c[1] - a[1]) / 6)} ${f(c[0] - (e[0] - b[0]) / 6)},${f(c[1] - (e[1] - b[1]) / 6)} ${f(c[0])},${f(c[1])}`;
  }
  const up = data[data.length - 1].eq >= 0, col = up ? 'var(--green)' : 'var(--red)', last = p[p.length - 1];
  const id = 'phs' + Math.random().toString(36).slice(2, 7);
  return `<div class="ph-spark"><svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="منحنی سرمایه">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:${col};stop-opacity:.26"/><stop offset="1" style="stop-color:${col};stop-opacity:0"/></linearGradient></defs>
    ${mn < 0 && mx > 0 ? `<line x1="0" x2="100" y1="${f(Y(0))}" y2="${f(Y(0))}" class="ph-zero" vector-effect="non-scaling-stroke"/>` : ''}
    <path d="${d} L100,100 L0,100 Z" fill="url(#${id})"/>
    <path d="${d}" fill="none" style="stroke:${col}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  </svg><span class="ph-dot" style="left:${f(last[0])}%;top:${f(last[1])}%;--c:${col}"></span></div>`;
}
function perfHero(fs, rangeLbl, shown, list){
  const total = fs?.total || 0, closedN = fs ? fs.wins + fs.losses : 0;
  const pb = playbookStats(), xq = (typeof xqStats === 'function') ? xqStats() : null;
  const adherence = pb ? (pb.ok ? pb.ok.n : 0) / pb.total * 100 : null;
  const wr = fs && closedN ? parseFloat(fs.winRate) : null;
  const pf = fs && closedN ? fs.profitFactor : null, pfN = pf === '∞' ? Infinity : +pf;
  const tone = (v, good, ok) => v == null ? null : v >= good ? 'var(--green)' : v >= ok ? 'var(--gold-light)' : 'var(--red)';
  const pct = v => faNum(Math.round(v)) + '٪';
  const kpi = (label, value, sub, col, bar) => `<div class="ph-k"><u>${label}</u><b${col ? ` style="color:${col}"` : ''}>${value}</b>`
    + (bar != null ? `<i><s style="width:${Math.max(0, Math.min(100, bar))}%;background:${col || 'var(--gold)'}"></s></i>` : '')
    + (sub ? `<em>${sub}</em>` : '') + `</div>`;
  const tiles = [
    kpi('نرخ برد', wr == null ? '—' : pct(wr), fs && closedN ? `${faNum(fs.wins)} برد · ${faNum(fs.losses)} باخت` : 'معامله‌ی بسته نیست', tone(wr, 50, 35), wr),
    kpi('فاکتور سود', pf == null ? '—' : `<bdi dir="ltr">${pf === '∞' ? '∞' : (+pf).toFixed(2)}</bdi>`, 'سودِ کل ÷ زیانِ کل', pf == null ? null : tone(pfN, 1.5, 1)),
    kpi('امید ریاضی', fs && closedN ? `<bdi dir="ltr">${fmtUSD(fs.expectancy)}</bdi>` : '—', 'به ازای هر معامله', fs && closedN ? (fs.expectancy >= 0 ? 'var(--green)' : 'var(--red)') : null),
    kpi('میانگین R', fs && fs.avgR != null ? `<bdi dir="ltr">${(+fs.avgR).toFixed(2)}R</bdi>` : '—', fs && fs.rCount ? `${faNum(fs.rCount)} معامله با حد ضرر` : 'حد ضرر ثبت نشده', fs && fs.avgR != null ? (+fs.avgR >= 0 ? 'var(--green)' : 'var(--red)') : null),
    kpi('پایبندی به پلن', adherence == null ? '—' : pct(adherence), pb ? `${faNum(pb.total)} سنجیده` : 'هنوز سنجیده نشده', tone(adherence, 75, 45), adherence),
    ...(xq && xq.n ? [kpi('نرخ تصرف', pct(xq.avgCapture), `${faNum(xq.n)} خروج سنجیده`, tone(xq.avgCapture, 60, 36), xq.avgCapture)] : [])
  ];
  const dl = list && list.length ? perfDelta(list) : null;
  const delta = dl && dl.empty ? `<span class="ph-delta" style="color:var(--muted);border:1px solid var(--border)"><small>۳۰ روز اخیر بدون معامله</small></span>`
    : dl && (dl.abs || dl.value) ? `<span class="ph-delta ${dl.value >= 0 ? 'up' : 'dn'}">${dl.abs ? '' : `<i>${dl.value >= 0 ? '▲' : '▼'}</i>`}<bdi dir="ltr">${dl.abs ? fmtUSD(dl.value) : fmtUSD(Math.abs(dl.value), false)}</bdi><small>${dl.label}</small></span>` : '';
  const opts = [['all', 'همه'], ['month', 'این ماه'], ['30', '۳۰ روز'], ['90', '۹۰ روز']];
  const leak = dashLeak();
  return `<section class="ph fade-up" aria-label="خلاصه‌ی عملکرد">
    <div class="ph-bar">
      <div class="ph-eye"><span>PERFORMANCE</span>${esc(rangeLbl)}</div>
      <div class="ph-seg" role="tablist">${opts.map(([k, l]) => `<button type="button" role="tab" aria-selected="${dashRange === k}" class="${dashRange === k ? 'on' : ''}" onclick="setDashRange('${k}')">${l}</button>`).join('')}</div>
    </div>
    ${phaseChipsHTML()}
    <div class="ph-main">
      <div class="ph-id"><b>${esc(SESSION.name || '')}</b><span>${faNum(TRADES.filter(t => !t._deleted).length)} معامله ثبت شده${shown != null ? ` · ${faNum(shown)} در این بازه` : ''}</span></div>
      <div class="ph-pnl"><b class="${total >= 0 ? 'up' : 'dn'}"><bdi dir="ltr">${fmtUSD(total)}</bdi></b>${delta}</div>
    </div>
    ${fs ? perfSpark(fs.equity) : ''}
    <div class="ph-ks">${tiles.join('')}</div>
    ${leak ? `<div class="ph-leak"><span>⚑</span><div>${leak}</div></div>` : ''}
  </section>`;
}

// شبکه‌ی آماری — رنگ فقط روی چیزی که جهت دارد
// hero=true: داشبوردِ دانشجو که فاکتور سود، امید ریاضی و میانگین R را در perfHero نشان داده است
function kpiGrid(fs, hero){
  const money = v => v >= 0 ? 'var(--green)' : 'var(--red)';
  const cell = (label, value, color, sub) =>
    `<div class="kc"><u>${label}</u><b${color ? ` style="color:${color}"` : ''}>${value}</b>${sub ? `<s>${sub}</s>` : ''}</div>`;
  return `<div class="kg fade-up">
    ${hero ? `${cell('میانگین برد', fmtUSD(fs.avgWin || 0), 'var(--green)')}
    ${cell('میانگین باخت', fmtUSD(-(fs.avgLoss || 0)), 'var(--red)')}
    ${fs.worstDay ? cell('بدترین روز', fmtUSD(fs.worstDay[1]), 'var(--red)', fmtDateFa(fs.worstDay[0])) : cell('بدترین روز', '—', null)}`
    : `${cell('پرافیت فاکتور', fs.profitFactor, null)}
    ${cell('انتظار هر معامله', fmtUSD(fs.expectancy), money(fs.expectancy))}
    ${cell('میانگین R واقعی', fs.avgR === null ? '—' : (+fs.avgR).toFixed(2) + 'R', fs.avgR === null ? null : money(fs.avgR))}`}
    ${cell('میانگین R:R', fs.avgRR ? fs.avgRR + ':1' : '—', null)}
    ${cell('بیشترین افت', '$' + fs.maxDD.toFixed(0), 'var(--red)')}
    ${cell('بهترین معامله', fmtUSD(fs.best), 'var(--green)')}
    ${cell('بدترین معامله', fmtUSD(fs.worst), 'var(--red)')}
    ${cell('میانگین مارجین', '$' + fs.avgSize.toFixed(0), null)}
    ${cell('استریک برد', faNum(fs.maxWinStreak), 'var(--green)', 'متوالی')}
    ${cell('استریک باخت', faNum(fs.maxLossStreak), 'var(--red)', 'متوالی')}
    ${cell('لانگ / شورت', faNum(fs.longs) + ' / ' + faNum(fs.shorts), null)}
    ${fs.bestDay ? cell('بهترین روز', fmtUSD(fs.bestDay[1]), 'var(--green)', fmtDateFa(fs.bestDay[0]))
                 : cell('بهترین روز', '—', null)}
  </div>`;
}

// هشت نمودار میله‌ای، هشت صفحه اسکرول بودند. حالا یک قاب با تب.
const BREAKDOWNS = [
  ['coin','کوین','byCoin'], ['strategy','استراتژی','byStrategy'], ['session','سشن','bySession'],
  ['emotion','احساس','byEmotion'], ['tf','تایم‌فریم','byTF'], ['weekday','روز هفته','byWeekday'],
  ['hour','ساعت','byHour'], ['tag','تگ','byTag']
];
function breakdownBody(fs){
  const item = BREAKDOWNS.find(b => b[0] === dashBreak) || BREAKDOWNS[0];
  const data = fs[item[2]] || {};
  const inner = barSection(data, '', 'pnl');
  if(!inner) return `<div class="bd-empty">در این بازه داده‌ای برای «${item[1]}» نیست</div>`;
  // barSection قاب و عنوان خودش را می‌سازد؛ اینجا فقط ردیف‌ها را می‌خواهیم
  return inner.replace(/^<div class="chart-wrap">\s*<div class="chart-title"><\/div>/, '').replace(/<\/div>\s*$/, '');
}
// src: تابعی که فهرستِ تریدهای همین کارت را می‌دهد (منتور: یک دانشجو یا کل آکادمی)
let BD_SRC=null;
function breakdownModule(fs, src){
  BD_SRC = src || null;
  return `<div class="bd fade-up">
    <div class="bd-h"><b>تحلیل عملکرد</b>
      <span style="font-size:9.5px;color:var(--muted);margin-inline-start:auto">سود/زیان به تفکیک</span></div>
    <div class="bd-tabs">${BREAKDOWNS.map(([k,l]) =>
      `<button class="${dashBreak===k?'on':''}" onclick="setBreakdown('${k}')">${l}</button>`).join('')}</div>
    <div id="bd-body">${breakdownBody(fs)}</div>
  </div>`;
}
// فقط بدنه عوض می‌شود — رندر دوباره‌ی کل داشبورد جای اسکرول را می‌پراند
function setBreakdown(k){
  dashBreak = k;
  const fs = computeStats(BD_SRC ? BD_SRC() : rangeFilter(TRADES));
  const body = document.getElementById('bd-body');
  if(fs && body) body.innerHTML = breakdownBody(fs);
  for(const b of document.querySelectorAll('.bd-tabs button'))
    b.classList.toggle('on', b.getAttribute('onclick') === `setBreakdown('${k}')`);
}

// ══════════════════════════════════════════════════════
// اطلاعیه‌ها (v23.4)
// محتوای ثابتِ داخل برنامه؛ هر اطلاعیه مخاطبِ خودش را دارد. «خوانده‌شده» روی
// همین دستگاه می‌ماند. نسخه‌ی اطلاعیه‌ی فاز حرفه‌ای با باز شدن هر حالتِ تازه
// بالا می‌رود تا دوباره «جدید» نشان داده شود.
// ══════════════════════════════════════════════════════
function annReadKey(){ return 'sc_ann_read_' + (SESSION?.uid || 'guest'); }
function annIsRead(id, ver){ const r = L.g(annReadKey()) || {}; return (+r[id] || 0) >= ver; }
function annMarkRead(id, ver){
  if (SESSION?.isViewOnly) return;              // منتور که می‌بیند، برای دانشجو «خوانده» نزند
  const r = L.g(annReadKey()) || {}; r[id] = Math.max(+r[id] || 0, ver); L.s(annReadKey(), r);
}
function proModesAudience(){ return SESSION?.role === 'student' && isCourseAccount() && !ownerJournal() && nextTradePosition() > proThreshold(); }
const ANNOUNCEMENTS = [
  { id: 'pro-modes', audience: proModesAudience,
    version: () => proModesOpenAt(nextTradePosition()).length,
    teaser: v => v >= 3 ? ['🔓 حالت ۳ باز شد — مارجین ایزوله', 'هر سه ابزار مدیریت سرمایه حالا در فرم ثبت ترید است']
               : v === 2 ? ['🔓 حالت ۲ باز شد — مارجین ثابت', 'از این به بعد اهرم را هم ماشین‌حساب برایت حساب می‌کند']
               : ['💎 به فاز حرفه‌ای خوش آمدی', 'سه ابزار مدیریت سرمایه، قدم‌به‌قدم برایت باز می‌شود'],
    render: proModesAnnouncement },
  // v26.6: یک بار، برای هر کسی که خودش ترید ثبت می‌کند
  { id: 'tg-log', audience: () => SESSION?.role === 'student' && !SESSION.isViewOnly && !annIsRead('tg-log', 1),   // خوانده شد ⇒ دیگر نمی‌آید
    version: () => 1, teaser: () => ['✈️ ثبت ترید با یک پیام تلگرام', 'بدون باز کردن ژورنال، همان وسطِ معامله'], render: tgLogAnnouncement }
];
// ══════════════════════════════════════════════════════
// v26.6: محافظ روز بد — «امروز کافی است». همان قاعده‌ی سرور (worker: tiltState)؛ تستِ هم‌سانی دارد.
// ══════════════════════════════════════════════════════
const TILT_DEFAULT = { enabled: true, streak: 2, dailyPct: 3 };
function tiltConfig(raw){
  const c = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};
  const num = (v, lo, hi, d) => { const n = Number(v); return Number.isFinite(n) && n >= lo && n <= hi ? n : d; };
  return { enabled: c.enabled !== false, streak: Math.round(num(c.streak, 1, 10, TILT_DEFAULT.streak)), dailyPct: num(c.dailyPct, 0.5, 50, TILT_DEFAULT.dailyPct) };
}
function tiltState(trades, cfg, day){
  const out = { hit: false, reason: null, streak: 0, loss: 0, pct: null };
  if (!cfg.enabled || !Array.isArray(trades)) return out;
  const key = t => String(t.date || '') + ' ' + String(t.time || '');
  const today = trades.filter(t => t && !t._deleted && t.date === day && Number(t.exit) > 0 && calcPnl(t) != null).sort((a, b) => key(a).localeCompare(key(b)));
  for (let i = today.length - 1; i >= 0 && calcPnl(today[i]) < 0; i--) out.streak++;
  const net = today.reduce((a, t) => a + calcPnl(t), 0);
  out.loss = net < 0 ? -net : 0;
  const cap = [...trades].filter(t => t && !t._deleted && Number(t.capital) > 0).sort((a, b) => key(a).localeCompare(key(b))).map(t => Number(t.capital)).pop();
  if (cap) out.pct = out.loss / cap * 100;
  if (out.streak >= cfg.streak) { out.hit = true; out.reason = 'streak'; }
  else if (out.pct != null && out.pct >= cfg.dailyPct) { out.hit = true; out.reason = 'daily'; }
  return out;
}
const tiltDay = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
function tiltNow(list){ return tiltState(list || TRADES, tiltConfig(S.g('sc_tilt')), tiltDay()); }
function tiltWhy(st){
  const cfg = tiltConfig(S.g('sc_tilt'));
  return st.reason === 'streak' ? `${faNum(st.streak)} ضررِ پشت‌سرِهم در امروز`
    : `ضررِ امروز ${faNum(st.pct.toFixed(1)).replace('.', '٫')}٪ موجودی — سقف ${faNum(cfg.dailyPct).replace('.', '٫')}٪`;
}
// بعد از ثبتِ یک معامله‌ی بسته‌ی زیان‌ده: یک بار در روز برگه‌ی آرام + پیامِ تلگرام (سرور خودش دوباره حساب می‌کند)
function tiltAfterSave(){
  if (!SESSION || SESSION.isViewOnly) return;
  const st = tiltNow(); if (!st.hit) return;
  const k = 'sc_tilt_shown_' + SESSION.uid, day = tiltDay();
  if (L.g(k) === day) return;
  L.s(k, day);
  apiFetch('/api/tilt', { method: 'POST', body: '{}' }).catch(() => {});
  const todays = TRADES.filter(t => !t._deleted && t.date === day && +t.exit > 0);
  const net = todays.reduce((a, t) => a + (calcPnl(t) || 0), 0);
  document.getElementById('det-content').innerHTML = `<div class="tilt-sheet">
    <div class="tilt-mark">🛑</div>
    <h3>امروز کافی است</h3>
    <p class="tilt-why">${tiltWhy(st)}</p>
    <div class="tilt-stats"><div><u>معامله‌های امروز</u><b>${faNum(todays.length)}</b></div><div><u>نتیجه‌ی امروز</u><b style="color:${net >= 0 ? 'var(--green)' : 'var(--red)'}"><bdi dir="ltr">${fmtUSD(net)}</bdi></b></div></div>
    <p class="tilt-msg">بازار فردا هم هست. بهترین تصمیمِ امروز، تریدی است که گرفته نمی‌شود. صفحه را ببند، کمی از چارت دور شو و فردا با ذهنِ تازه برگرد.</p>
    <button class="btn btn-primary" onclick="closeSheet();nav('dashboard',document.querySelector('[data-screen=dashboard]'))">باشه، امروز تمام</button>
    <button class="btn btn-ghost" onclick="closeSheet()">فقط برای ثبت باز کردم</button>
    <div class="tilt-foot">اگر امروز تریدِ تازه‌ای ثبت شود، با برچسبِ «بعد از سقف روزانه» ذخیره می‌شود و استاد هم آن را می‌بیند.</div>
  </div>`;
  document.getElementById('det-sheet').classList.add('open');
}
// نوارِ بالای فرمِ ترید تازه، وقتی امروز به سقف رسیده
function tiltFormBanner(){
  const st = tiltNow(); if (!st.hit) return '';
  return `<div class="tilt-banner"><b>🛑 امروز به سقفِ روزانه رسیده‌ای</b><span>${tiltWhy(st)}. اگر ثبت کنی، این ترید با برچسبِ «بعد از سقف روزانه» ذخیره می‌شود.</span></div>`;
}
const tiltBadge = t => t && t.afterLimit ? ' <span class="tl-badge" title="بعد از رسیدن به سقف روزانه ثبت شده">بعد از سقف</span>' : '';

// ── v26.6: لینک نمودار TradingView ──
// اسنپ‌شاتِ tradingview.com/x/<id> ⇒ تصویرِ مستقیم؛ لینک‌های دیگرِ TradingView فقط دکمه
const TV_RE = /^https?:\/\/(?:[a-z]{2,3}\.)?tradingview\.com\/(?:x|chart)\/[A-Za-z0-9_\-\/?=&.]+$/i;
function tvSnapshot(url){ const m = String(url || '').match(/tradingview\.com\/x\/([A-Za-z0-9]+)/i); return m ? `https://s3.tradingview.com/snapshots/${m[1][0].toLowerCase()}/${m[1]}.png` : null; }
function tvBlock(url){
  if (!url || !TV_RE.test(url)) return '';
  const img = tvSnapshot(url);
  return `<div class="tv-box"><div class="tv-head"><b>نمودار TradingView</b><a href="${esc(url)}" target="_blank" rel="noopener">باز کردن ↗</a></div>
    ${img ? `<a href="${esc(url)}" target="_blank" rel="noopener" class="tv-img"><img src="${esc(img)}" alt="نمودار ترید" loading="lazy" onerror="this.closest('.tv-img').classList.add('off')"><span>تصویر بارگذاری نشد — «باز کردن» را بزن</span></a>` : ''}</div>`;
}

// ── v26.6: لینکِ «تکمیل در ژورنال» از ربات ⇒ همان ترید در حالتِ ویرایش ──
function handleEditRoute(){
  const q = new URLSearchParams(location.search), id = q.get('edit');
  if (!id || !/^[a-z0-9]{6,40}$/i.test(id)) return;
  q.delete('edit'); history.replaceState(null, '', `${location.pathname}${q.toString() ? '?' + q.toString() : ''}`);
  if (TRADES.find(t => t.id === id)) editTrade(id); else showToast('این ترید پیدا نشد — شاید هنوز همگام نشده؛ صفحه را تازه کن');
}
// ترید از تلگرام ثبت شده و اپ در پس‌زمینه باز بوده ⇒ با برگشتن، بی‌صدا تازه شود (فقط داشبورد و ژورنال، نه وسطِ فرم)
let TRADES_SYNCED_AT = Date.now();
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible' || !SESSION || SESSION.role !== 'student' || SESSION.isViewOnly) return;
  if (Date.now() - TRADES_SYNCED_AT < 60000) return;
  const scr = document.querySelector('.screen.active')?.id;
  if (scr !== 'screen-dashboard' && scr !== 'screen-trades') return;
  TRADES_SYNCED_AT = Date.now();
  loadTrades(SESSION.uid).then(t => {
    const sig = l => l.map(x => x.id + ':' + (x.updatedAt || '')).sort().join();
    if (!Array.isArray(t) || sig(t) === sig(TRADES)) return;
    TRADES = t;
    if (document.querySelector('.screen.active')?.id === 'screen-dashboard') renderStudentDashboard(); else renderTrades();
    showToast('🔄 ژورنال به‌روز شد');
  }).catch(() => {});
});

// ── v26.6: اطلاعیه‌ی ثبت با تلگرام ──
function tgLogAnnouncement(){
  return `<div class="ann-sheet">
    <div class="ann-hero"><span class="ann-badge">✈️ تازه</span><h3>ثبت ترید با یک پیام تلگرام</h3>
      <p>وسطِ معامله لازم نیست ژورنال را باز کنی. به ربات هشدارِ ژورنال یک پیام بده؛ ترید ثبت می‌شود و بعداً دلایل را کامل می‌کنی.</p></div>
    <div class="tgl-ex"><u>باز کردن</u><code dir="rtl">لانگ BTC 65000 حدضرر 64000 حدسود 68000</code>
      <code dir="ltr">ETH short 3200 sl 3260 tp 3050 x2 margin 150</code>
      <u>بستن</u><code dir="rtl">بستم 66500</code><code dir="rtl">بستم BTC 66500</code></div>
    <div class="ann-foot">مارجین و اهرم را اگر ننویسی، از آخرین تریدت برداشته می‌شود. ربات بعد از ثبت یک دکمه می‌دهد: «تکمیل در ژورنال». فقط کافی است تلگرامت یک بار از بخش «هشدار قیمت ← اتصال امن تلگرام» وصل شده باشد.</div>
    <button class="btn btn-primary" onclick="closeSheet();nav('alerts',document.getElementById('nav-alerts'))">رفتن به اتصال تلگرام</button>
  </div>`;
}
function annCardHTML(a){
  const v = a.version(), read = annIsRead(a.id, v), [title, sub] = a.teaser(v);
  return `<div class="card ann-card fade-up ${read ? 'read' : ''}" data-ann="${a.id}" role="button" tabindex="0" onclick="openAnnouncement('${a.id}')">
    <div class="ann-ico">📣</div>
    <div class="ann-body"><span class="ann-kicker">اطلاعیه${read ? '' : ' · جدید'}</span><b>${title}</b>${read ? '' : `<span>${sub}</span>`}</div>
    ${read ? '<span class="ann-go">‹</span>' : '<span class="ann-dot"></span>'}
  </div>`;
}
function announcementsCard(){
  return ANNOUNCEMENTS.filter(a => { try { return a.audience(); } catch (e) { return false; } }).map(annCardHTML).join('');
}
function openAnnouncement(id){
  const a = ANNOUNCEMENTS.find(x => x.id === id); if (!a) return;
  const v = a.version();
  document.getElementById('det-content').innerHTML = a.render(v);
  document.getElementById('det-sheet').classList.add('open');
  annMarkRead(id, v);
  const el = document.querySelector(`.ann-card[data-ann="${id}"]`);
  if (el) el.outerHTML = annCardHTML(a);
}
function annGoCalc(){
  closeSheet();
  const c = document.getElementById('pro-calc');
  if (c) c.scrollIntoView({ behavior:'smooth', block:'start' });
  else nav('add', null);
}
function proModesAnnouncement(){
  const pos = nextTradePosition(), u = proModeUnlocks(), open = proModesOpenAt(pos), done = pos - 1;
  const modes = [
    { k:1, icon:'🎯', idea:'تو بگو حاضری چقدر ضرر کنی؛ ماشین‌حساب می‌گوید با چه مبلغی وارد شوی.',
      ex:'موجودی ۱٬۰۰۰$ · ریسک ۱٪ · حد ضرر ۲٪ ← ورود با <b>۲۵۰$</b> و اهرم ۲×. اگر حد ضرر بخورد، فقط <b>۱۰$</b>.' },
    { k:2, icon:'⚖️', idea:'همیشه با یک مبلغ ثابت وارد شو؛ ماشین‌حساب اهرم را طوری می‌چیند که ضرر از بودجه‌ات بیرون نزند.',
      ex:'مارجین ۲۵۰$ · بودجه‌ی زیان ۱۰$ ← حد ضرر ۲٪ یعنی اهرم <b>۲×</b>، حد ضرر ۴٪ یعنی <b>۱×</b>. اگر بیشتر از ۲× لازم شد، این ترید با قانونت جور نیست.' },
    { k:3, icon:'🛡️', idea:'هرچه در پوزیشن ایزوله بگذاری، همان سقف ضررِ آن پوزیشن است و بقیه‌ی حساب از آن در امان می‌ماند — حتی بدون سفارش حد ضرر.',
      ex:'۱٬۰۰۰ USDC · ریسک ۲٪ ← <b>۲۰ USDC</b> مارجین ایزوله، پوزیشن ۴۰ USDC با اهرم ۲×. کارمزد و فاندینگ جداست.' }
  ];
  const card = m => {
    const on = open.includes(m.k), from = u[m.k] + 1, left = Math.max(0, from - pos);
    const pct = on ? 100 : Math.max(0, Math.min(100, Math.round((done - u[1]) / (u[m.k] - u[1]) * 100)));
    return `<div class="ann-mode ${on ? 'open' : 'locked'}">
      <div class="ann-mode-top"><span class="ann-num">${faNum(m.k)}</span>
        <div><b>${m.icon} ${PRO_MODES[m.k].name}</b><small>${PRO_MODES[m.k].sub}</small></div>
        <span class="ann-state ${on ? 'on' : 'off'}">${on ? '✅ باز است' : `🔒 از ترید ${faNum(from)}`}</span></div>
      <div class="ann-idea">${m.idea}</div>
      <div class="ann-ex">${m.ex}</div>
      ${on ? '' : `<div class="ann-bar"><i style="width:${pct}%"></i></div><div class="ann-left">${faNum(left)} ترید مانده</div>`}
    </div>`;
  };
  return `<div class="ann-sheet">
    <div class="ann-hero"><span class="ann-badge">💎 فاز حرفه‌ای · ترید ${faNum(done)}</span>
      <h3>به فاز حرفه‌ای خوش آمدی</h3>
      <p>${faNum(u[1])} ترید را پشت سر گذاشتی. از اینجا درآمد دلاری شروع می‌شود؛ پس قبل از هر ورود باید بدانی حداکثر چقدر ضرر می‌کنی. این سه ابزار همین را برایت حساب می‌کنند.</p></div>
    <div class="ann-rules"><span>${faNum(PRO_PRINCIPLES.entry)} دلیل ورود</span><span>${faNum(PRO_PRINCIPLES.sl)} دلیل حد ضرر</span><span>${faNum(PRO_PRINCIPLES.tp)} دلیل حد سود</span><span>اهرم حداکثر ${faNum(LEVERAGE_MAX)}×</span><span>ریسک هر ترید ${faNum(RISK_MIN)} تا ${faNum(RISK_MAX)}٪</span></div>
    ${modes.map(card).join('')}
    <div class="ann-foot">ماشین‌حساب داخل «ثبت ترید» است. عددش اجازه‌ی ریسک بیشتر نیست — فقط می‌گوید با قانون خودت چقدر وارد شوی.</div>
    ${SESSION?.isViewOnly ? '' : `<button class="btn btn-primary" onclick="annGoCalc()">🧮 رفتن به ماشین‌حساب</button>`}
  </div>`;
}

function renderStudentDashboard(){
  const s=computeStats(TRADES);
  const el=document.getElementById('dash-content');
  if(!TRADES.length){
    el.innerHTML=`
      <div style="background:linear-gradient(135deg,var(--card),#171513);border:1px solid var(--border);border-radius:16px;padding:20px 18px;margin-bottom:14px" class="fade-up">
        <div style="font-family:var(--f-display);font-size:20px;color:var(--gold)">سلام، ${esc(SESSION.name)} 👋</div>
        <div style="color:var(--muted);font-size:12px;margin-top:4px">موبایل: <span style="font-family:var(--f-mono);color:var(--gold-dim)">${SESSION.uid}</span></div>
      </div>
      ${showsCoursePath()?renderXPBar(0):''}
      ${isMember()?'<div id="bill-card"></div>':''}
      <div class="empty"><span class="empty-ico">📊</span><div class="empty-t">هنوز تریدی ثبت نشده</div><div class="empty-s">اولین ترید خود را ثبت کنید</div>
        <button class="btn btn-primary" style="width:auto;margin:18px auto 0;padding:12px 28px" onclick="nav('add',null)">➕ ترید جدید</button>
      </div>`;
    if(isMember()) window.BILLING?.fillCard();
    return;
  }
  // v13: فیلتر بازه زمانی — آمار روی بازه انتخابی، XP/دیسیپلین/تقویم روی کل
  // فاز اول اعمال می‌شود، بعد بازه‌ی زمانی. v25.16: کارت دیسیپلین نه فاز را دنبال می‌کند نه
  // بازه را — همان عددِ آکادمی روی همهٔ تریدها.
  const phased=phaseFilter(TRADES);
  const ftr=rangeFilter(phased);
  const fs=computeStats(ftr);
  const allS=dashRange==='all'?fs:computeStats(phased);
  const total=fs?.total||0;
  const rangeLbl={all:'سود/زیان کل',month:'سود/زیان این ماه','30':'سود/زیان ۳۰ روز','90':'سود/زیان ۹۰ روز'}[dashRange]||'سود/زیان';
  const statBody=(!fs||!ftr.length)?`
    <div class="empty" style="padding:34px 20px"><span class="empty-ico">🗓️</span><div class="empty-t">در این بازه تریدی ثبت نشده</div><div class="empty-s">بازه دیگری را انتخاب کنید</div></div>`:`
    ${kpiGrid(fs, true)}

    ${equityPro(fs.equity, 'eqp-dash', '📈 منحنی سرمایه')}

    ${exitQualityCard()}
    ${playbookCard()}
    ${cohortCard()}
    ${reasonWRSection(fs.byEntryReason,'وین‌ریت هر دلیل ورود')}
    ${breakdownModule(fs)}
`;

  // ترتیب تازه: اول جوابِ پنج‌ثانیه‌ای، بعد روند، بعد جزئیات، و در آخر بایگانی.
  el.innerHTML=`
    ${showsCoursePath()?renderXPBar(TRADES.length):''}
    ${isMember()?'<div id="bill-card"></div>':''}
    ${announcementsCard()}

    ${perfHero(fs, rangeLbl, dashRange!=='all'?ftr.length:null, phased)}

    ${proCompareCard()}
    ${proRiskCard()}

    ${openPositionsCard()}

    ${fs&&ftr.length?insightsCard(fs):''}

    ${statBody}

    ${disciplineCard({discipline:academyDiscipline(TRADES)})}

    ${heatmapCalendar(TRADES)}

    ${fs&&ftr.length?`<div class="dash-foot"><button class="btn btn-ghost dash-export" onclick="exportCSV()">⬇️ خروجی CSV همه‌ی معامله‌ها</button></div>`:''}`;
  if(isMember()) window.BILLING?.fillCard();
}

// ══════════════════════════════════════════════════════
// TRADES LIST
// ══════════════════════════════════════════════════════
function gotoTradesPage(n){ tradesPage=n; renderTrades(); const s=document.getElementById('screen-trades'); if(s) s.scrollIntoView({behavior:'smooth',block:'start'}); }
function buildTradesPager(total, count){
  const cur=tradesPage;
  const numBtn=n=>`<button class="pg-btn ${n===cur?'active':''}" onclick="gotoTradesPage(${n})">${n.toLocaleString('fa')}</button>`;
  let s=Math.max(1,cur-1), e=Math.min(total,cur+1);
  if(cur<=2) e=Math.min(total,3);
  if(cur>=total-1) s=Math.max(1,total-2);
  let nums='';
  if(s>1){ nums+=numBtn(1); if(s>2) nums+='<span class="pg-dots">…</span>'; }
  for(let i=s;i<=e;i++) nums+=numBtn(i);
  if(e<total){ if(e<total-1) nums+='<span class="pg-dots">…</span>'; nums+=numBtn(total); }
  return `
  <div class="pager">
    <button class="pg-nav" ${cur===1?'disabled':''} onclick="gotoTradesPage(${cur-1})">قبلی ›</button>
    <div class="pg-nums">${nums}</div>
    <button class="pg-nav" ${cur===total?'disabled':''} onclick="gotoTradesPage(${cur+1})">‹ بعدی</button>
  </div>
  <div class="pg-info">${count.toLocaleString('fa')} ترید · صفحه ${cur.toLocaleString('fa')} از ${total.toLocaleString('fa')}</div>`;
}
// رنگِ نوارِ کنارِ هر ردیف: پایبندی به استاندارد ورود.
// معامله‌ای که دانشجو هنوز دستش نزده، «بد» نیست — فقط هنوز ژورنال نشده.
function tradeQualityBar(t){
  if(!tradeTouched(t)) return 'var(--border2)';
  const sc = principlesScore(t);
  return sc >= 100 ? 'var(--green)' : sc >= 60 ? 'var(--gold)' : 'var(--red)';
}

function setTradesSort(k){ tradesSort = k; tradesPage = 1; renderTrades(); }

function tradesSummary(list){
  const closed = list.filter(t => t.exit);
  const pnls = closed.map(calcPnl).filter(v => v != null);
  const net = pnls.reduce((a, b) => a + b, 0);
  const wins = pnls.filter(v => v > 0).length;
  const wr = pnls.length ? Math.round(wins / pnls.length * 100) : null;
  const touched = list.filter(t => tradeTouched(t));
  const okPct = touched.length ? Math.round(touched.filter(principlesMet).length / touched.length * 100) : null;
  const opts = [['date','تاریخ'],['pnl','بیشترین سود'],['loss','بیشترین ضرر'],['quality','کیفیت ورود']];
  return `<div class="tsum fade-in">
    <div><u>معامله</u><b>${faNum(list.length)}</b></div>
    <span class="sep"></span>
    <div><u>خالص</u><b style="color:${net>=0?'var(--green)':'var(--red)'}">${fmtUSD(net)}</b></div>
    <span class="sep"></span>
    <div><u>نرخ برد</u><b>${wr==null?'—':faNum(wr)+'٪'}</b></div>
    <span class="sep"></span>
    <div><u>ورود اصولی</u><b style="color:${okPct==null?'var(--muted)':okPct>=60?'var(--green)':'var(--gold)'}">${okPct==null?'—':faNum(okPct)+'٪'}</b></div>
    <div class="tsort">${opts.map(([k,l])=>`<button class="${tradesSort===k?'on':''}" onclick="setTradesSort('${k}')">${l}</button>`).join('')}</div>
  </div>`;
}

// فیلتر نتیجه: چیپ‌ها ظاهرند، مقدار همان select پنهانِ filter-res است
function setResFilter(v){
  const sel = document.getElementById('filter-res'); if (!sel) return;
  sel.value = v;
  document.querySelectorAll('.res-chips button').forEach(b => b.classList.toggle('on', b.dataset.v === v));
  tradesPage = 1; renderTrades();
}
function renderTrades(){
  renderQuickCompleteBanner();   // v18.9 — قبل از return زودهنگامِ «تریدی یافت نشد»
  const f=document.getElementById('filter-res')?.value||'';
  const q=(document.getElementById('trade-search')?.value||'').trim().toLowerCase();
  const match=t=>!q||[t.coin,t.pair,t.tags,t.notes,t.strategy,t.session,...(Array.isArray(t.entryReasons)?t.entryReasons:[])].filter(Boolean).join(' ').toLowerCase().includes(q);
  const list=[...TRADES].filter(t=>(!f||tradeResult(t)===f)&&match(t));

  // مرتب‌سازی — معامله‌ی باز همیشه بالا می‌ماند تا فراموش نشود
  const pnlOf=t=>t.exit?(calcPnl(t)??0):null;
  if(tradesSort==='pnl')        list.sort((a,b)=>(pnlOf(b)??-Infinity)-(pnlOf(a)??-Infinity));
  else if(tradesSort==='loss')  list.sort((a,b)=>(pnlOf(a)??Infinity)-(pnlOf(b)??Infinity));
  else if(tradesSort==='quality')list.sort((a,b)=>(tradeTouched(b)?principlesScore(b):-1)-(tradeTouched(a)?principlesScore(a):-1));
  else                          list.sort(byDateDesc);

  const el=document.getElementById('trades-list');
  if(!list.length){el.innerHTML='<div class="empty"><span class="empty-ico">📋</span><div class="empty-t">تریدی یافت نشد</div></div>';return}
  const totalPages=Math.max(1,Math.ceil(list.length/TRADES_PER_PAGE));
  if(tradesPage>totalPages) tradesPage=totalPages;
  if(tradesPage<1) tradesPage=1;
  const start=(tradesPage-1)*TRADES_PER_PAGE;
  const pageItems=list.slice(start, start+TRADES_PER_PAGE);
  const itemsHTML=pageItems.map(t=>{
    const pnl=t.exit?calcPnl(t):null,rr=calcRR(t);
    const pct=t.exit&&t.size?(pnl/(+t.size)*100):null;
    const er=Array.isArray(t.entryReasons)?t.entryReasons.slice(0,2):[];
    return`<div class="trade-item fade-in" onclick="showDetail('${t.id}')">
      <span class="t-q" style="background:${tradeQualityBar(t)}" title="کیفیت ورود بر پایه‌ی استاندارد ۳+۲+۲"></span>
      ${coinLogo(t.coin)}
      <div class="t-info">
        <div class="t-coin">${esc(t.coin)}/${esc(t.pair)} <span class="badge ${badgeCls(t.direction)}">${esc(t.direction)}</span>${FEEDBACK[t.id]?' <span title="نظر استاد">💬</span>':''}${tiltBadge(t)}${t.chartUrl?' <span class="tl-chart" title="نمودار TradingView دارد">📈</span>':''}</div>
        <div class="t-meta">${fmtDateFa(t.date)}${t.strategy?` · ${esc(t.strategy)}`:''}${rr?` · <span class="t-rr">R:R ${rr}</span>`:''}</div>
        ${er.length?`<div class="t-reasons">${er.map(r=>`<span class="t-reason-tag">${esc(r)}</span>`).join('')}</div>`:''}
      </div>
      <div class="t-pnl">
        ${pnl!==null?`<div class="t-amt ${pnl>=0?'green':'red'}" dir="ltr">${fmtUSD(pnl)}</div><div class="t-pct" dir="ltr">${fmtPct(pct)}</div>`:`<span class="badge b-open">باز</span>`}
      </div>
    </div>`;
  }).join('');
  el.innerHTML = tradesSummary(list) + itemsHTML + (totalPages>1 ? buildTradesPager(totalPages, list.length) : '');
}

function showDetail(id){
  const t=TRADES.find(x=>x.id===id);if(!t)return;
  const pnl=t.exit?calcPnl(t):null,rr=calcRR(t);
  const er=Array.isArray(t.entryReasons)?t.entryReasons:[];
  const sl=Array.isArray(t.slReasons)?t.slReasons:[];
  const tp=Array.isArray(t.tpReasons)?t.tpReasons:[];
  document.getElementById('det-content').innerHTML=`
    <div class="dt-head">
      ${coinLogo(t.coin)}
      <div class="dt-id">
        <div class="dt-pair">${esc(t.coin)}/${esc(t.pair)}</div>
        <div class="dt-badges">
          <span class="badge ${badgeCls(t.direction)}">${esc(t.direction)}</span>
          <span class="badge ${badgeCls(tradeResult(t))}">${esc(tradeResult(t))}</span>${tiltBadge(t)}
          ${resultDrifted(t)?`<span class="badge b-drift" title="در این ترید «${esc(t.result)}» ثبت شده بود، ولی قیمت ورود و خروج چیز دیگری می‌گوید. نتیجه از روی قیمت اصلاح شد.">✎ اصلاح‌شده</span>`:''}
          <span class="badge" style="background:var(--dim);color:var(--muted)">${esc(t.timeframe||'—')}</span>
          <span class="badge" style="background:var(--dim);color:var(--muted)">${esc(t.session)}</span>
        </div>
      </div>
      ${pnl!==null?`<div class="dt-pnl"><b dir="ltr" style="color:${pnl>=0?'var(--green)':'var(--red)'}">${fmtUSD(pnl)}</b>${+t.size?`<small dir="ltr">${fmtPct(pnl/(+t.size)*100)}</small>`:''}</div>`:`<div class="dt-pnl"><span class="badge b-open">باز</span></div>`}
    </div>
    <div class="dt-prices">
      <div><u>ورود</u><b dir="ltr">${esc(t.entry||'—')}</b></div>
      <div><u>خروج</u><b dir="ltr">${esc(t.exit||'باز')}</b></div>
      <div class="sl"><u>حد ضرر</u><b dir="ltr">${esc(t.stopLoss||(isIsolatedBudget(t)?'ایزوله':'—'))}</b></div>
      <div class="tp"><u>حد سود</u><b dir="ltr">${esc(t.takeProfit||'—')}</b></div>
    </div>
    ${rr?`<div class="dt-rr">R:R <b dir="ltr">۱:${fmtRR(rr)}</b>${t.timeframe?` · حداقلِ <bdi dir="ltr">${esc(t.timeframe)}</bdi> ۱:${fmtRR(rrMinFor(t.timeframe))}`:''}</div>`:''}

    ${er.length?`<div class="reason-section"><div class="reason-label">دلایل ورود</div><div class="reason-tags">${er.map(r=>`<span class="reason-tag rt-entry">${esc(r)}</span>`).join('')}</div></div>`:''}
    ${sl.length?`<div class="reason-section"><div class="reason-label">دلیل حد ضرر</div><div class="reason-tags">${sl.map(r=>`<span class="reason-tag rt-sl">${esc(r)}</span>`).join('')}</div></div>`:''}
    ${tp.length?`<div class="reason-section"><div class="reason-label">دلیل حد سود</div><div class="reason-tags">${tp.map(r=>`<span class="reason-tag rt-tp">${esc(r)}</span>`).join('')}</div></div>`:''}
    ${tvBlock(t.chartUrl)}
    ${exitQualityForTrade(t)}
    ${playbookForTrade(t)}

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:14px">
      ${[['تاریخ',fmtDateFa(t.date)+' '+(t.time||'')],['استراتژی',t.strategy],['احساس',t.emotion?emoLabel(t.emotion):'—'],['لوریج',t.leverage+'x'+(t.sizeMode?' · حالت '+faNum(t.sizeMode):'')],['مارجین','$'+(+t.size||0).toLocaleString()],['کارمزد','$'+(+t.fees||0).toFixed(2)]].map(([k,v])=>`
        <div class="dt-cell"><u>${k}</u><b>${esc(v)}</b></div>`).join('')}
    </div>
    ${t.notes?`<div style="background:var(--surface);border-radius:10px;padding:11px;margin-bottom:12px"><div style="font-size:10px;font-weight:700;color:var(--muted);margin-bottom:5px">یادداشت</div><div style="font-size:12px;line-height:1.7;color:var(--text2)">${esc(t.notes)}</div></div>`:''}
    ${t.tags?`<div style="margin-bottom:14px">${t.tags.split(',').map(tg=>`<span style="background:rgba(200,168,75,.1);color:var(--gold);border-radius:6px;padding:3px 9px;font-size:10px;margin-left:5px">#${esc(tg.trim())}</span>`).join('')}</div>`:''}
    ${FEEDBACK[t.id]?`<div class="fb-box"><div class="fb-head">💬 نظر استاد</div><div class="fb-text">${esc(FEEDBACK[t.id].text)}</div>${FEEDBACK[t.id].at?`<div class="fb-date">${fmtDateFa(FEEDBACK[t.id].at.slice(0,10))}</div>`:''}</div>`:''}
    <div style="display:flex;gap:9px">
      <button class="btn btn-ghost" style="flex:1" onclick="editTrade('${t.id}')">✏️ ویرایش</button>
      <button class="btn btn-danger" style="flex:1" onclick="delTrade('${t.id}')">🗑️ حذف</button>
    </div>`;
  // v13: علامت‌گذاری «دیده شد» برای نظر استاد
  if(FEEDBACK[t.id]&&SESSION&&SESSION.uid){
    const k='sc_fb_seen_'+SESSION.uid,seen=L.g(k)||[];
    if(!seen.includes(t.id)){seen.push(t.id);L.s(k,seen);}
  }
  document.getElementById('det-sheet').classList.add('open');
}

function closeSheet(){document.getElementById('det-sheet').classList.remove('open')}
function editTrade(id){editingTrade=TRADES.find(t=>t.id===id);closeSheet();nav('add',document.querySelector('[data-screen="add"]'))}
async function delTrade(id){
  if(!confirm('این ترید حذف شود؟'))return;
  const old=TRADES.find(t=>t.id===id);
  const tombstone={...(old||{id}),_deleted:true,updatedAt:new Date().toISOString()};
  TRADES=TRADES.filter(t=>t.id!==id);
  await saveTrades(SESSION.uid,[...TRADES,tombstone]);
  closeSheet();renderTrades();renderStudentDashboard();
}

// ══════════════════════════════════════════════════════
// TRADE FORM
// ══════════════════════════════════════════════════════
function chipGroup(id,options,selected=[],cls='selected'){
  const sel=Array.isArray(selected)?selected:[];
  return`<div class="chip-group" id="cg-${id}">${options.map(o=>`<div class="chip ${sel.includes(o)?cls:''}" data-value="${esc(o)}" onclick="toggleChip('${id}',this.dataset.value,'${cls}')">${esc(o)}</div>`).join('')}</div>`;
}
function toggleChip(groupId,val,cls){
  const el=[...document.querySelectorAll(`#cg-${groupId} .chip`)].find(node=>node.dataset.value===val);
  if(el)el.classList.toggle(cls);
  // دلایل ورود/حدسود/حدضرر روی نمره‌ی اصول اثر دارند
  if(groupId==='er'||groupId==='slr'||groupId==='tpr') refreshPrinciplesMeter();
  if(groupId==='tpr') updateRRPreview();   // چیپِ «R:R 1:N» با عدد واقعی سنجیده می‌شود
}
function getSelected(groupId){
  return [...document.querySelectorAll(`#cg-${groupId} .chip`)].filter(c=>c.className.includes('selected')).map(c=>c.textContent);
}

// سنجه‌ی زنده‌ی ورود اصولی — از همان چیپ‌هایی می‌خواند که کاربر دارد می‌زند،
// نه از داده‌ی ذخیره‌شده. پس قبل از ثبت هم درست است.
// وضعیتِ زنده‌ی دلایلِ فرم — سنجه‌ی بالا، شمارنده‌ها و نوار پایین همه از همین
function formReasonState(){
  const n = { entry: effectiveReasonCount(getSelected('er')), sl: getSelected('slr').length, tp: getSelected('tpr').length };
  const need = FORM_NEED || ENTRY_PRINCIPLES;
  const f = (have, want) => Math.min(1, have / want);
  const pct = Math.round((f(n.entry, need.entry) * PRINCIPLE_WEIGHTS.entry
                        + f(n.sl, need.sl) * PRINCIPLE_WEIGHTS.sl
                        + f(n.tp, need.tp) * PRINCIPLE_WEIGHTS.tp) * 100);
  const done = n.entry >= need.entry && n.sl >= need.sl && n.tp >= need.tp;
  const col = done ? 'var(--green)' : pct >= 55 ? 'var(--gold)' : 'var(--red)';
  return { n, need, f, pct, done, col };
}
function refreshReasonCounters(){
  const { n, need } = formReasonState();
  for (const [id, k] of [['cnt-er','entry'], ['cnt-slr','sl'], ['cnt-tpr','tp']]) {
    const el = document.getElementById(id); if (!el) continue;
    el.textContent = `${faNum(n[k])}/${faNum(need[k])}`;
    el.className = 'rs-cnt' + (n[k] >= need[k] ? ' ok' : n[k] ? ' part' : '');
  }
}
// نوار ثابتِ پایین: اصول و R:R کنار دکمه‌ی ثبت، تا وسط فرم هم دیده شوند
function refreshFormBar(){
  const box = document.getElementById('tf-bar-stat'); if (!box) return;
  const { pct, done, col } = formReasonState();
  const r = rrCheck(rrFormInput());
  const rrCls = r.rr === null || r.iso ? '' : 'rr-' + r.level;
  box.innerHTML = `<div class="tb-ring" style="--p:${pct};--c:${col}"><span>${faNum(pct)}</span></div>
    <div class="tb-kv"><small>اصول</small><b style="color:${col}">${done ? 'کامل ✓' : faNum(pct) + '٪'}</b></div>
    <div class="tb-kv"><small>R:R</small><b class="${rrCls}" dir="ltr">${r.rr === null ? '—' : '۱:' + fmtRR(r.rr)}</b></div>`;
}
function principlesLiveHTML(){
  const { n, need, f, pct, done, col } = formReasonState();
  const gaps = [];
  if (n.entry < need.entry) gaps.push(`${faNum(need.entry - n.entry)} دلیل ورود`);
  if (n.tp < need.tp) gaps.push(`${faNum(need.tp - n.tp)} دلیل حد سود`);
  if (n.sl < need.sl) gaps.push(`${faNum(need.sl - n.sl)} دلیل حد ضرر`);
  const bar = (have, want, label) => {
    const p = Math.round(f(have, want) * 100);
    const c = have >= want ? 'var(--green)' : have ? 'var(--gold)' : 'var(--border2)';
    return `<span>${label} ${faNum(have)}/${faNum(want)}<i><s style="width:${p}%;background:${c}"></s></i></span>`;
  };
  return `<div class="pmeter-ring" style="border:2px solid ${col};color:${col}">${faNum(pct)}</div>
    <div class="pmeter-b">
      <div class="pmeter-t">${done ? 'ورود اصولی ✓' : 'ورود اصولی'}
        <em>${done ? 'حداقل اصول رعایت شده' : (gaps.length ? '— ' + gaps.join(' و ') + ' مانده' : '')}</em></div>
      <div class="pmeter-rows">
        ${bar(n.entry, need.entry, 'ورود')}${bar(n.tp, need.tp, 'حد سود')}${bar(n.sl, need.sl, 'حد ضرر')}
      </div>
    </div>`;
}
// فقط همین کارت را دوباره می‌کشد — رندر دوباره‌ی فرم، چیپ‌ها و اسکرول را می‌پراند
function refreshPrinciplesMeter(){
  const el = document.getElementById('pmeter');
  if (el) el.innerHTML = principlesLiveHTML();
  refreshReasonCounters();
  refreshFormBar();
}

// کارت ماشین‌حساب — تریدِ فاز حرفه‌ای در حساب دوره، و همیشه در ژورنال شخصی مدیر (هر سه حالت، بی‌قفل؛ مالک ۱۴۰۵-۰۷-۳۰)
let PRO_CALC_MODE = 1;      // حالتِ فعالِ کارتِ باز
let PRO_CALC_APPLIED = 0;   // حالتی که «اعمال در فرم» با آن زده شد؛ ۰ یعنی هنوز نه
function proCalcCard(editId, forceMode){
  const pos = formTradePosition(editId), open = calcModesOpen(pos), u = proModeUnlocks();
  const editT = editId ? TRADES.find(x => x.id === editId) : null;
  // ویرایش ⇒ حالتی که ترید با آن ثبت شده؛ ترید تازه ⇒ آخرین حالتِ انتخاب‌شده
  let mode = +forceMode || (editT ? (+editT.sizeMode || 1) : (+L.g(calcModeKey()) || 1));
  if (!open.includes(mode)) mode = 1;
  PRO_CALC_MODE = mode;
  const idx = proTradeIndex(editId), phase1 = idx <= PRO_PHASE1_TRADES;
  const B = L.g(capitalKey()) || '', r = L.g(riskKey()) || RISK_MIN;
  const tab = k => {
    const on = open.includes(k);
    return `<button type="button" class="pc-tab ${k === mode ? 'on' : ''} ${on ? '' : 'locked'}" onclick="setProCalcMode(${k})">
      <b>${faNum(k)}</b><span>${PRO_MODES[k].name}</span>${on ? '' : `<small>🔒 از ترید ${faNum(u[k] + 1)}</small>`}</button>`;
  };
  const inp = (id, label, val, extra, hint) => `<div class="fg"><div class="fl">${label}</div>
        <input id="${id}" class="fi" type="number" inputmode="decimal" step="any" value="${esc(val)}" oninput="refreshProCalc();updateRRPreview()" ${extra || ''}>${hint ? `<div class="pc-fhint">${hint}</div>` : ''}</div>`;
  const bField = inp('pc-b', `کل موجودی حساب ${mode === 3 ? 'USDC' : '$'} <span class="req">*</span>`, B, 'min="0" placeholder="مثلاً 1000"', 'همه‌ی پولِ حساب صرافی — نه مبلغ همین معامله');
  const rField = ownerJournal()
    ? inp('pc-r', 'حداکثر ضرر این معامله ٪', r, `min="${OWNER_RISK.rMin}" max="${OWNER_RISK.rMax}"`, `معیار دوره ${faNum(RISK_MIN)} تا ${faNum(RISK_MAX)}٪ — برای تو قفل نیست`)
    : inp('pc-r', 'حداکثر ضرر این معامله ٪', r, `min="${RISK_MIN}" max="${RISK_MAX}"`, `از کل حساب — بین ${faNum(RISK_MIN)} تا ${faNum(RISK_MAX)}٪`);
  const fields = mode === 2
      ? `<div class="fgrid">${bField}${rField}</div>
         <div class="fgrid tf-gap">${inp('pc-m', 'مارجین ثابت هر معامله $ <span class="req">*</span>', L.g(fixedMarginKey()) || '', 'min="0" placeholder="مثلاً 250"', 'مبلغی که همیشه وارد معامله می‌کنی')}</div>`
    : mode === 3
      ? `<div class="fgrid">${bField}${rField}</div>
         <div class="fgrid tf-gap">${inp('pc-c', 'ذخیره‌ی کارمزد و فاندینگ USDC', L.g(feeReserveKey()) ?? 0, 'min="0"', 'از بودجه‌ی ضرر کم می‌شود')}</div>
         <div class="pc-chips"><span class="pc-chip">نوع مارجین: Isolated 🔒</span><span class="pc-chip">اهرم مرحله: ${faNum(LEVERAGE_MAX)}× 🔒</span></div>`
      : `<div class="fgrid">${bField}${rField}</div>`;
  const note = mode === 2
      ? `مارجین ثابت می‌ماند و <b>فاصله‌ی حد ضرر</b> (از قیمت‌های بالا) اهرم را تعیین می‌کند.`
    : mode === 3
      ? `⚠️ در این حالت <b>حد ضرر تعریف نمی‌شود</b>: مارجین ایزوله خودش سقفِ زیانِ برنامه‌ریزی‌شده است. افزودن مارجین بعد از ورود، بودجه‌ی مصرف‌شده را بالا می‌برد. «۰» فقط برای مثالِ بدون هزینه است، نه معامله‌ی رایگان.`
      : `اهرم در این حالت ثابت است و ماشین‌حساب <b>مبلغ ورود</b> را طوری تنظیم می‌کند که اگر حد ضرر بخورد، بیشتر از سقفِ بالا ضرر نکنی. فاصله‌ی حد ضرر از قیمت‌های بالا خوانده می‌شود.`;
  const foot = mode === 3
      ? `مبنای SoDEX: زیانِ لیکوییدشدنِ پوزیشن ایزوله به وثیقه‌ی همان پوزیشن محدود است و مارجین با USDC تأمین می‌شود؛ فاندینگ ساعتی است. <b>تفکیک ضروری:</b> مارجین به‌تنهایی سقفِ تضمین‌شده‌ی مجموع زیان و هزینه‌ها نیست و محصور بودن کارمزد و فاندینگ در وثیقه‌ی ایزوله هنوز تأیید نشده. قیمت لیکوییدیشن را از خودِ SoDEX ببین — تخمینی است.`
      : `مدل پایه برای قرارداد خطی دلاری/USDT؛ بدون کارمزد، فاندینگ و لغزش قیمت. زیانِ محاسبه‌شده زیانِ برنامه‌ریزی‌شده است، نه سقفِ تضمین‌شده‌ی زیان واقعی.`;
  // تنظیمات بار اول باز است (موجودی هنوز وارد نشده)؛ بعد از آن هر طور که کاربر گذاشته
  const openSaved = L.g(pcOpenKey());
  const pcOpen = !B || openSaved === true;
  return `<div class="pro-calc ${pcOpen ? 'open' : ''}" id="pro-calc" data-edit="${esc(editId || '')}">
    <button type="button" class="pc-head" onclick="togglePcBody()" aria-expanded="${pcOpen}">
      <span class="pc-ico">🧮</span>
      <span class="pc-ht"><b>ماشین‌حساب مبلغ ورود</b><small>حالت ${faNum(mode)} · ${PRO_MODES[mode].name} · ${ownerJournal() ? 'اهرم از فیلد لوریج' : `🔒 اهرم ${faNum(PRO_LOCKED_LEVERAGE)}×`}</small></span>
      <span class="pc-chev"><em class="c-closed">تنظیم</em><em class="c-open">بستن</em><i>▾</i></span>
    </button>
    <div class="pc-body">
      <div class="pc-tabs">${[1, 2, 3].map(tab).join('')}</div>
      ${fields}
      <div class="pc-note ${mode === 3 ? 'pc-note-box' : ''}">${note}</div>
    </div>
    <div id="pc-out" class="pc-out"></div>
    <div class="pc-tail">
      <div class="pc-phase">${ownerJournal()
        ? `حساب مدیر: اهرم، درصد ضرر و حالت‌ها قفل نیست — هشدارهای دوره موقع ثبت می‌آیند`
        : phase1
        ? `فاز ۱ — تریدِ اهرمیِ ${faNum(idx)} از ${faNum(PRO_PHASE1_TRADES)}: اهرم ثابت و قابل تغییر نیست`
        : `اهرم مجاز مرحله ${faNum(LEVERAGE_MAX)}× — اهرم ۳ مشروط به عملکرد است و معیارش هنوز تعریف نشده`}
        <button type="button" class="pc-help" onclick="openAnnouncement('pro-modes')">❔ راهنمای سه حالت</button></div>
      <div class="pc-foot">${foot}</div>
    </div>
  </div>`;
}
function pcOpenKey(){ return 'sc_pc_open_' + (SESSION?.uid || 'guest'); }
function togglePcBody(){
  const c = document.getElementById('pro-calc'); if (!c) return;
  const open = !c.classList.contains('open');
  c.classList.toggle('open', open);
  c.querySelector('.pc-head')?.setAttribute('aria-expanded', open);
  L.s(pcOpenKey(), open);
}
function setProCalcMode(k){
  const card = document.getElementById('pro-calc'); if (!card) return;
  const editId = card.dataset.edit || null;
  const pos = formTradePosition(editId), u = proModeUnlocks();
  if (!calcModesOpen(pos).includes(k)) {
    showToast(`🔒 حالت ${faNum(k)} از ترید ${faNum(u[k] + 1)} باز می‌شود — ${faNum(u[k] + 1 - pos)} ترید مانده`);
    return;
  }
  if (!editId) L.s(calcModeKey(), k);
  card.outerHTML = proCalcCard(editId, k);
  refreshProCalc();
  updateRRPreview();                         // حالت ۳ ریسک را از مارجین ایزوله می‌گیرد
}
// محاسبه‌ی زنده — با هر تغییر موجودی، ریسک، مارجین، ورود یا حد ضرر
let PRO_CALC_LAST = null;
function refreshProCalc(){
  const box = document.getElementById('pc-out'); if (!box) return;
  const card = document.getElementById('pro-calc');
  const g = id => document.getElementById(id)?.value;
  const mode = PRO_CALC_MODE, B = g('pc-b'), r = g('pc-r');
  if (+B > 0) L.s(capitalKey(), +B);
  if (+r > 0) L.s(riskKey(), +r);
  const openMargin = openMarginExcept(card?.dataset.edit || null);
  // v26.7: حد ضرر باید سمتِ درست باشد؛ وگرنه فاصله‌اش «درست» به نظر می‌رسد و عدد غلط می‌دهد
  if (mode !== 3) {
    const e0 = +g('f-entry'), st0 = +g('f-sl'), long0 = g('f-dir') !== 'Short';
    if (e0 > 0 && st0 > 0 && (long0 ? st0 >= e0 : st0 <= e0)) {
      PRO_CALC_LAST = null;
      box.innerHTML = `<div class="pc-warn">⚠️ حد ضررِ ${long0 ? 'لانگ باید <b>زیرِ</b>' : 'شورت باید <b>بالای</b>'} قیمت ورود باشد — الان <bdi dir="ltr">${esc(String(st0))}</bdi> ${long0 ? 'بالای' : 'زیرِ'} ورودِ <bdi dir="ltr">${esc(String(e0))}</bdi> است. جهت یا حد ضرر را درست کن.</div>`;
      return;
    }
  }
  // مدیر: اهرم از فیلد لوریجِ فرم و بازه‌ی ریسکِ باز؛ بقیه: قفل‌های دوره
  const own = ownerJournal() ? OWNER_RISK : {};
  const formLev = +g('f-lev') >= 1 ? +g('f-lev') : PRO_LOCKED_LEVERAGE;
  let res0;
  if (mode === 2) {
    const M = g('pc-m'); if (+M > 0) L.s(fixedMarginKey(), +M);
    res0 = calcLeverageForMargin({ B, r, M, entry: g('f-entry'), stop: g('f-sl'), openMargin, ...own, ...(own.rMin ? { maxLev: Infinity } : {}) });
  } else if (mode === 3) {
    const C = g('pc-c'); if (C !== '' && +C >= 0) L.s(feeReserveKey(), +C);
    res0 = calcIsolatedBudget({ B, r, C, openMargin, ...own, ...(own.rMin ? { lev: formLev } : {}) });
  } else {
    res0 = calcEntrySize({ B, r, entry: g('f-entry'), stop: g('f-sl'), openMargin, ...own, ...(own.rMin ? { L: formLev } : {}) });
  }
  if (!res0.ok) {
    PRO_CALC_LAST = null;
    box.innerHTML = `<div class="pc-wait">${esc(res0.why)}</div>`;
    if (!(+B > 0)) card?.classList.add('open');     // بدون موجودی، تنظیمات را نشان بده
    return;
  }
  // اندازه‌ای که «اعمال در فرم» می‌گذارد
  PRO_CALC_LAST = mode === 2 ? { mode, size: res0.useM, lev: res0.useLev }
                : { mode, size: res0.M, lev: mode === 3 ? res0.lev : res0.L };
  const num = v => (+v).toLocaleString('en-US', { maximumFractionDigits: 2 });
  const $ = v => mode === 3 ? num(v) + ' USDC' : '$' + num(v);
  const bd = v => `<bdi dir="ltr">${$(v)}</bdi>`;
  const dec = v => faNum(String(+(+v).toFixed(2))).replace('.', '٫');   // «۲٪» نه «۲٫۰۰٪»
  const pctB = v => dec(v / +B * 100) + '٪';
  // مبلغی که واقعاً می‌شود گذاشت: هرگز بیشتر از موجودیِ آزاد
  const want = mode === 2 ? res0.useM : res0.M;
  const lev = mode === 2 ? res0.useLev : mode === 3 ? res0.lev : res0.L;
  const capped = res0.shortfall > 0;
  if (capped && !(res0.free > 0)) {
    PRO_CALC_LAST = null;
    // مارجینِ تریدهای باز از کل موجودی بیشتر شده: یا موجودی درست وارد نشده، یا تریدی در ژورنال بسته نشده
    const openN = (Array.isArray(TRADES) ? TRADES : []).filter(t => t && !t._deleted && !(+t.exit > 0) && t.id !== (card?.dataset.edit || null)).length;
    box.innerHTML = `<div class="pc-warn">⚠️ مارجینِ ${faNum(openN)} تریدِ بازِ ژورنالت (${bd(openMargin)}) از «کل موجودی حساب» (${bd(+B)}) بیشتر است.
      کل موجودی را درست بزن (همه‌ی پولِ حساب، با پوزیشن‌های باز)؛ اگر تریدی را در صرافی بسته‌ای، در ژورنال هم ببندش.</div>${openTradesNote(card?.dataset.edit || null)}`;
    return;
  }
  const size = capped ? res0.free : want;
  PRO_CALC_LAST = { mode, size, lev };
  const lossAt = mode === 3 ? size + (+res0.C || 0) : size * lev * res0.s / 100;    // ضرر اگر حد ضرر بخورد
  const headline = mode === 3
      ? `مارجین ایزوله‌ی <b>${bd(size)}</b> با اهرم <b>${faNum(lev)}×</b>`
    : mode === 2
      ? `اهرم <b>${dec(lev)}×</b> با مارجین <b>${bd(size)}</b>`
      : capped
      ? `بیشترین مارجینِ ممکن: <b>${bd(size)}</b>${openMargin > 0 ? '' : ' (کلِ موجودی)'} با اهرم <b>${faNum(lev)}×</b>`
      : `با <b>${bd(size)}</b> مارجین و اهرم <b>${faNum(lev)}×</b> وارد شو`;
  const stats = [
    ['ارزش پوزیشن', bd(size * lev)],
    mode === 3 ? ['ذخیره‌ی هزینه', bd(res0.C)] : ['فاصله‌ی حد ضرر', dec(res0.s) + '٪'],
    [mode === 3 ? 'سقف ضرر' : 'ضرر در حد ضرر', `<span class="neg">${bd(lossAt)}</span><small>${pctB(lossAt)} حساب</small>`]
  ];
  let notes = '';
  if (capped) {
    const busy = openMargin > 0 ? ` — ${bd(openMargin)} از حسابت در پوزیشن‌های باز است` : '';
    const ms = mode === 1 ? calcMinStopFor({ R: res0.R, M: res0.free, L: lev, entry: g('f-entry'), long: g('f-dir') !== 'Short' }) : null;
    const px = v => (+v).toLocaleString('en-US', { maximumFractionDigits: +v >= 100 ? 1 : +v >= 1 ? 4 : 8 });
    notes += `<div class="pc-warn">برای ریسکِ ${dec(+r)}٪ (${bd(res0.R)}) با این حد ضرر، ${bd(want)} مارجین لازم است، ولی موجودیِ آزادت ${bd(res0.free)} است${busy}.
      با همه‌ی آن، ریسکِ واقعی فقط <b>${pctB(lossAt)}</b> می‌شود و کلِ حساب درگیرِ همین یک معامله است.
      ${ms ? `<br><b>برای ریسکِ کاملِ ${dec(+r)}٪ با اهرم ${faNum(lev)}×، حد ضرر باید دست‌کم ${dec(ms.pct)}٪ فاصله داشته باشد</b> — برای این ${g('f-dir') !== 'Short' ? 'لانگ' : 'شورت'}: <bdi dir="ltr">${px(ms.price)}</bdi> ${g('f-dir') !== 'Short' ? 'یا پایین‌تر' : 'یا بالاتر'}.
      <br>حد ضرر را فقط به‌خاطرِ حجم جابه‌جا نکن؛ اگر ساختارِ نمودار حد ضررِ دورتری نمی‌دهد، یا با ریسکِ کمتر وارد شو یا از این ترید بگذر.` : ''}</div>`;
    if (openMargin > 0) notes += openTradesNote(card?.dataset.edit || null);
  }
  if (mode === 2 && res0.fit === 'high')
    notes += `<div class="pc-mis">اهرمِ لازم ${dec(res0.lev)}× است ولی سقفِ مرحله‌ی تو ${faNum(res0.maxLev)}×؛ با ${faNum(res0.maxLev)}× ضررت کمتر از سقف می‌ماند.</div>`;
  if (mode === 2 && res0.fit === 'low')
    notes += `<div class="pc-mis">با این حد ضرر، این مارجین زیادی بزرگ است (حتی بدون اهرم ضرر از سقف بیشتر می‌شد)؛ برای همین مارجین به ${bd(res0.useM)} کم شد.</div>`;
  // مارجینی که الان در فرم است با این حساب می‌خواند؟
  const fs = +g('f-size');
  if (fs > 0 && Math.abs(fs - size) > Math.max(0.01, size * 0.02)) {
    const fl = +g('f-lev') || 1;
    const formLoss = mode === 3 ? fs + (+res0.C || 0) : fs * fl * res0.s / 100;
    const over = fs > +B;
    const bad = over || formLoss / +B * 100 > RISK_MAX + 1e-9;
    notes += `<div class="${bad ? 'pc-warn' : 'pc-info'}">${bad ? '⚠️ ' : ''}مارجینِ الانِ فرم ${bd(fs)} است؛ با آن اگر حد ضرر بخورد ${bd(formLoss)} (${pctB(formLoss)} حساب) ضرر می‌کنی${over ? ` و از کل موجودی حساب (${bd(+B)}) هم بیشتر است — یکی از این دو عدد اشتباه است` : ''}. «اعمال» مبلغ پیشنهادی را جایش می‌گذارد.</div>`;
  }
  box.innerHTML = `<div class="pc-ans${capped ? ' capped' : ''}">
      <div class="pc-hl">${capped ? `<span class="pc-cap">موجودیِ آزاد کم است · ریسکِ واقعی ${pctB(lossAt)}</span>` : ''}${headline}</div>
      <button type="button" class="pc-apply" onclick="applyProCalc()">اعمال<small>در فرم</small></button>
    </div>
    <div class="pc-stats">${stats.map(([k, v]) => `<div><small>${k}</small><b>${v}</b></div>`).join('')}</div>
    ${mode === 3 ? '' : `<div class="pc-proof"><span>حساب:</span> ${bd(size)} مارجین × ${faNum(+(+lev).toFixed(2))} اهرم × ${dec(res0.s)}٪ فاصله‌ی حد ضرر = <b>${bd(lossAt)}</b> ضرر
      <em>${lossAt <= res0.R + 0.005 ? '✓' : '⚠️'} سقفِ تو: ${dec(+r)}٪ از ${bd(+B)} = ${bd(res0.R)}${capped ? ' — بیشتر از موجودی نمی‌شود گذاشت، پس ضرر کمتر از سقف می‌ماند' : ''}</em></div>`}
    ${notes}
    ${mode === 2 ? `<div class="pc-res-note">اگر صرافی فقط اهرمِ عدد صحیح می‌گیرد، عدد پایین‌تر را بزن — ضرر کمتر می‌شود.</div>` : ''}`;
}
function applyProCalc(){
  if (!PRO_CALC_LAST) return;
  const size = document.getElementById('f-size'), lev = document.getElementById('f-lev');
  // رو به پایین گرد می‌شود تا ریسکِ ثبت‌شده هرگز از بودجه بالاتر نرود
  if (size) size.value = (Math.floor(PRO_CALC_LAST.size * 100 + 1e-7) / 100).toString();
  if (lev)  lev.value = String(PRO_CALC_LAST.lev);
  PRO_CALC_APPLIED = PRO_CALC_LAST.mode;
  updatePnlPreview();
  showToast(PRO_CALC_LAST.mode === 3 ? 'مارجین ایزوله و اهرم در فرم قرار گرفت' : 'مارجین و اهرم در فرم قرار گرفت');
}

function renderTradeForm(t){
  const isEdit=!!t;
  // آستانه‌ی همین ترید: ویرایش ⇒ جایگاه خودش، ترید تازه ⇒ جایگاهِ بعدی
  FORM_NEED = isEdit ? needFor(TRADES.find(x=>x.id===t.id)||t) : needForNext();
  PRO_CALC_APPLIED = 0;
  const p=isEdit?null:(getStudentPrefs()||{}); // پیش‌فرض هوشمند بر اساس آخرین ترید
  const d=t||{id:genId(),date:new Date().toISOString().slice(0,10),time:new Date().toTimeString().slice(0,5),coin:'',pair:'USDT',direction:'Long',entry:'',exit:'',stopLoss:'',takeProfit:'',size:'',leverage:'1',timeframe:'',strategy:'',session:'',emotion:'',fees:'',result:'Open',notes:'',tags:'',entryReasons:[],slReasons:[],tpReasons:[]};
  const er=Array.isArray(d.entryReasons)?d.entryReasons:[];
  const sl=Array.isArray(d.slReasons)?d.slReasons:[];
  const tp=Array.isArray(d.tpReasons)?d.tpReasons:[];

  const dirL = d.direction !== 'Short';
  const need = FORM_NEED || ENTRY_PRINCIPLES;
  const sel = (id, list, cur, extra='', label=x=>esc(x)) => `<select id="${id}" class="fi"${extra}><option value="">انتخاب کنید</option>${list.map(x=>`<option value="${esc(x)}" ${cur===x?'selected':''}>${label(x)}</option>`).join('')}</select>`;
  const num = (id, val, extra='') => `<input id="${id}" class="fi" type="number" inputmode="decimal" step="any" value="${esc(val||'')}" placeholder="0.00"${extra}/>`;
  document.getElementById('form-wrap').innerHTML=`
    <div class="tf-head">
      <div class="tf-title">${isEdit?'ویرایش ترید':'ثبت ترید جدید'}</div>
      <div class="tf-sub">${isEdit?`${esc(d.coin||'')}${d.date?' · '+fmtDateFa(d.date):''}`:'چهار قدم کوتاه — فیلدهای ستاره‌دار لازم‌اند'}</div>
    </div>

    ${isEdit?'':tiltFormBanner()}
    <div class="pmeter" id="pmeter">${principlesLiveHTML()}</div>

    <section class="tf-sec">
      <header class="tf-sh"><span class="tf-n">۱</span><div><b>ترید</b><small>جهت، کوین و تایم‌فریم</small></div></header>
      <div class="dir-seg" role="radiogroup" aria-label="جهت ترید">
        <button type="button" class="dir-btn long ${dirL?'on':''}" role="radio" aria-checked="${dirL}" onclick="setTradeDir('Long')"><span class="dir-ar">▲</span>لانگ<small>خرید</small></button>
        <button type="button" class="dir-btn short ${dirL?'':'on'}" role="radio" aria-checked="${!dirL}" onclick="setTradeDir('Short')"><span class="dir-ar">▼</span>شورت<small>فروش</small></button>
      </div>
      <select id="f-dir" class="sr-only" tabindex="-1" aria-hidden="true" onchange="updatePnlPreview();refreshSLTP()"><option ${dirL?'selected':''}>Long</option><option ${dirL?'':'selected'}>Short</option></select>
      <div class="fg"><div class="fl">کوین <span class="req">*</span></div>
        <div class="coin-row">
          <input id="f-coin-search" class="fi coin-search" type="search" autocomplete="off" placeholder="🔍 جستجو" oninput="filterCoinOptions(this.value)">
          <select id="f-coin" class="fi" onchange="updateCoinInfo()"><option value="">انتخاب کنید</option>${getDynList('sc_coins',COINS_FULL).map(c=>`<option ${d.coin===c?'selected':''}>${esc(c)}</option>`).join('')}</select>
        </div>
        <div id="f-coin-hint" class="coin-hint"></div></div>
      <div id="coin-info"></div>
      <div class="fgrid">
        <div class="fg"><div class="fl">تایم‌فریم</div><select id="f-tf" class="fi" onchange="updateRRPreview()"><option value="">انتخاب کنید</option>${getDynList('sc_timeframes',TIMEFRAMES).map(x=>`<option ${d.timeframe===x?'selected':''}>${esc(x)}</option>`).join('')}</select></div>
        <div class="fg"><div class="fl">جفت</div><input id="f-pair" class="fi" value="${esc(d.pair||'USDT')}" placeholder="USDT"/></div>
        <div class="fg"><div class="fl">تاریخ <span class="req">*</span></div><input id="f-date" class="fi" type="date" value="${esc(d.date)}"/></div>
        <div class="fg"><div class="fl">ساعت</div><input id="f-time" class="fi" type="time" value="${esc(d.time||'')}"/></div>
      </div>
    </section>

    <section class="tf-sec">
      <header class="tf-sh"><span class="tf-n">۲</span><div><b>قیمت و حجم</b><small>ورود، حد ضرر، حد سود و مبلغ</small></div></header>
      <div class="fgrid">
        <div class="fg"><div class="fl">ورود <span class="req">*</span></div>${num('f-entry', d.entry, ' oninput="updatePnlPreview()"')}</div>
        <div class="fg"><div class="fl">خروج <span class="fl-note">اگر بسته شده</span></div>${num('f-exit', d.exit, ' oninput="updatePnlPreview()"')}</div>
        <div class="fg"><div class="fl"><i class="fdot red"></i>حد ضرر</div>${num('f-sl', d.stopLoss, ' oninput="refreshProCalc();updateRRPreview()"')}</div>
        <div class="fg"><div class="fl"><i class="fdot green"></i>حد سود</div>${num('f-tp', d.takeProfit, ' oninput="updateRRPreview()"')}</div>
      </div>
      <div id="rr-prev"></div>
      ${FORM_NEED===PRO_PRINCIPLES||ownerJournal()?proCalcCard(isEdit?d.id:null):''}
      <div class="fgrid tf-gap">
        <div class="fg"><div class="fl">مارجین $ <span class="req">*</span></div>${num('f-size', d.size, ' oninput="updatePnlPreview()"')}</div>
        <div class="fg"><div class="fl">لوریج ×${isCourseAccount()&&!ownerJournal()?` <span class="fl-note">حداکثر ${faNum(LEVERAGE_MAX)}×</span>`:''}</div><input id="f-lev" class="fi" type="number" inputmode="decimal" min="1" step="any"${isCourseAccount()&&!ownerJournal()?` max="${LEVERAGE_MAX}"`:''} value="${esc(d.leverage||1)}" oninput="updatePnlPreview()" placeholder="1"/></div>
      </div>
      <div class="tf-hint">مارجین یعنی پولِ درگیرِ خودت، نه ارزش کل پوزیشن · سود = مارجین × لوریج × ٪حرکت − کارمزد</div>
      <div id="pnl-prev"></div>
    </section>

    <section class="tf-sec">
      <header class="tf-sh"><span class="tf-n">۳</span><div><b>دلایل</b><small>چرا وارد شدی، استاپ و هدف کجاست</small></div></header>
      <div class="rs-h"><b>🔍 دلایل ورود</b><span class="rs-need">حداقل ${faNum(need.entry)}</span><span class="rs-cnt" id="cnt-er"></span></div>
      ${chipGroup('er',ENTRY_REASONS(),er,'selected')}
      <div class="tf-hint">فیبوناچی ۲ و ۳ نقطه‌ای یک دلیل حساب می‌شوند — دو ابزار برای یک ایده.</div>
      <div class="rs-h"><b>🛡️ دلیل حد ضرر</b><span class="rs-need" id="sl-dir-label">${reasonSideLabel('sl', d.direction)}</span><span class="rs-cnt" id="cnt-slr"></span></div>
      <div id="sl-chip-wrap">${chipGroup('slr',SL_REASONS(d.direction),sl,'selected-red')}</div>
      <div class="rs-h"><b>🎯 دلیل حد سود</b><span class="rs-need" id="tp-dir-label">${reasonSideLabel('tp', d.direction)}</span><span class="rs-cnt" id="cnt-tpr"></span></div>
      <div id="tp-chip-wrap">${chipGroup('tpr',TP_REASONS(d.direction),tp,'selected-green')}</div>
    </section>

    <section class="tf-sec">
      <header class="tf-sh"><span class="tf-n">۴</span><div><b>جزئیات</b><small>اختیاری — ولی تحلیل‌ها را دقیق‌تر می‌کند</small></div></header>
      <div class="fgrid">
        <div class="fg"><div class="fl">استراتژی</div>${sel('f-strat', getDynList('sc_strategies',STRATEGIES), d.strategy)}</div>
        <div class="fg"><div class="fl">سشن</div>${sel('f-sess', getDynList('sc_sessions',SESSIONS), d.session)}</div>
        <div class="fg"><div class="fl">احساس</div>${sel('f-emot', getDynList('sc_emotions',EMOTIONS), d.emotion, '', x=>esc(emoLabel(x)))}</div>
        <div class="fg"><div class="fl">کارمزد $</div>${num('f-fees', d.fees, ' oninput="updatePnlPreview()"')}</div>
        <div class="fg full"><div class="fl">تگ‌ها</div><input id="f-tags" class="fi" value="${esc(d.tags||'')}" placeholder="فاندامنتال, خبر"/></div>
        <div class="fg full"><div class="fl">لینک نمودار TradingView <span class="fl-note">اختیاری</span></div><input id="f-chart" class="fi" type="url" inputmode="url" dir="ltr" value="${esc(d.chartUrl||'')}" placeholder="https://www.tradingview.com/x/…"/><div class="tf-hint">در TradingView: دکمه‌ی دوربین ← «کپی لینک تصویر». استاد هم همین نمودار را می‌بیند.</div></div>
      </div>
      <input id="f-res" class="sr-only" value="${esc(d.result)}" readonly aria-readonly="true" tabindex="-1" aria-hidden="true"/>
      <div class="fg tf-gap"><div class="fl">${+d.exit>0?'یک جمله بعد از خروج':'یک جمله پیش از ورود'}</div><textarea id="f-notes" class="fi" rows="2" placeholder="${+d.exit>0?'دفعه‌ی بعد چه چیزی را متفاوت انجام می‌دهی؟':'اگر این ترید ضرر بدهد، احتمالاً به چه دلیلی بوده؟'}">${esc(d.notes||'')}</textarea>
        <div class="tf-hint">${+d.exit>0?'💡 همین یک جمله است که مرورِ ماه آینده را ارزشمند می‌کند.':'💡 نوشتنِ ریسک پیش از ورود، بعداً نشان می‌دهد که آیا واقعاً آن اتفاق افتاد یا چیز دیگری.'}</div></div>
    </section>

    <div class="tf-bar">
      <div class="tf-bar-stat" id="tf-bar-stat"></div>
      <button class="btn btn-primary tf-save" onclick="saveTrade('${d.id}')">${isEdit?'ذخیره تغییرات':'ثبت ترید'}</button>
    </div>
    ${isEdit?`<button class="btn btn-ghost tf-cancel" onclick="nav('trades',document.querySelector('[data-screen=trades]'))">انصراف</button>`:''}
  `;
  updatePnlPreview();
  updateCoinInfo();
  refreshPrinciplesMeter();
}

function updatePnlPreview(){
  refreshProCalc();
  updateRRPreview();
  const e=+document.getElementById('f-entry')?.value,x=+document.getElementById('f-exit')?.value,s=+document.getElementById('f-size')?.value;
  const lev=+document.getElementById('f-lev')?.value||1,fees=+document.getElementById('f-fees')?.value||0;
  const dir=document.getElementById('f-dir')?.value==='Long'?1:-1;
  const box=document.getElementById('pnl-prev');if(!box)return;
  const resultEl=document.getElementById('f-res');
  if(!e||!x||!s){box.innerHTML='';if(resultEl)resultEl.value='Open';return}
  const pnl=dir*((x-e)/e)*s*lev-fees,pct=(pnl/s*100);
  const epsilon=0.00000001;
  if(resultEl)resultEl.value=pnl>epsilon?'Win':pnl<(-epsilon)?'Loss':'Break Even';
  const resFa={Win:'برد',Loss:'باخت','Break Even':'سر به سر'}[resultEl?.value]||'';
  box.innerHTML=`<div class="pnl-preview ${pnl>=0?'pos':'neg'}"><span class="pnl-k">پیش‌نمایش سود/زیان${resFa?`<small>نتیجه (خودکار): ${resFa}</small>`:''}</span><span style="font-family:var(--f-mono);font-size:19px;font-weight:700;color:${pnl>=0?'var(--green)':'var(--red)'}">${fmtUSD(pnl)}</span><span style="font-family:var(--f-mono);font-size:12px;color:var(--muted)">${fmtPct(pct)}</span></div>`;
}

// «حداقل ۲ · زیر سطح» — سمتِ سطح به جهت ترید بستگی دارد
function reasonSideLabel(kind, dir){
  const short = dir === 'Short', need = FORM_NEED || ENTRY_PRINCIPLES;
  const side = kind === 'sl' ? (short ? 'بالای سطح' : 'زیر سطح') : (short ? 'زیر سطح' : 'بالای سطح');
  return `حداقل ${faNum(need[kind])} · ${side}`;
}
// لانگ/شورت: دکمه‌ها ظاهرند، مقدار همان select پنهانِ f-dir است
function setTradeDir(dir){
  const sel = document.getElementById('f-dir'); if (!sel) return;
  document.querySelectorAll('.dir-btn').forEach(b => {
    const on = b.classList.contains(dir === 'Short' ? 'short' : 'long');
    b.classList.toggle('on', on); b.setAttribute('aria-checked', on);
  });
  if (sel.value === dir) return;
  sel.value = dir;
  sel.dispatchEvent(new Event('change'));
}
function refreshSLTP(){
  const dir = document.getElementById('f-dir')?.value || 'Long';
  const slLbl = document.getElementById('sl-dir-label');
  const tpLbl = document.getElementById('tp-dir-label');
  if(slLbl) slLbl.textContent = reasonSideLabel('sl', dir);
  if(tpLbl) tpLbl.textContent = reasonSideLabel('tp', dir);
  // rebuild chips — preserve already-selected ones that also exist in new list
  const slWrap = document.getElementById('sl-chip-wrap');
  const tpWrap = document.getElementById('tp-chip-wrap');
  const prevSL = getSelected('slr');
  const prevTP = getSelected('tpr');
  if(slWrap) slWrap.innerHTML = chipGroup('slr', SL_REASONS(dir), prevSL, 'selected-red');
  if(tpWrap) tpWrap.innerHTML = chipGroup('tpr', TP_REASONS(dir), prevTP, 'selected-green');
  refreshPrinciplesMeter();   // چیپ‌هایی که در جهتِ تازه نیستند از شمارش بیرون می‌روند
}

// دلایلِ کم را پیش از ثبت جلوی چشم می‌آورد. عمداً جلوگیر نیست — گاهی ترید
// واقعاً یک‌دلیلی است — ولی نمی‌گذارد ناخواسته و بی‌توجه رد شود.
// فاز حرفه‌ای: پوزیشنِ اهرمی بدون حد ضرر، یا ریسکِ بالاتر از سقف، پیش از ثبت
// پرسیده می‌شود. جلوگیر نیست — مثل هشدار دلایل ورود — ولی ناخواسته رد نمی‌شود.
function confirmProRisk(t){
  if(!document.getElementById('pro-calc')) return true;
  const lev=+t.leverage||1, miss=[];
  if(lev>1 && !hasDefinedRisk(t)) miss.push('پوزیشنِ اهرمی بدون حد ضرر است');
  const rp=tradeRiskPct(t, +document.getElementById('pc-b')?.value);
  if(rp!==null && rp>RISK_MAX+0.001) miss.push(`ریسک این ترید ${fmtRR(rp)}٪ موجودی است — سقف ${faNum(RISK_MAX)}٪`);
  if(!miss.length) return true;
  return confirm('⚠️ مدیریت ریسک' + '\n\n• ' + miss.join('\n• ') + '\n\nبا همین ثبت شود؟');
}

// v25.14: دانشجویی که دلیلِ حد ضرر را می‌نویسد ولی قیمتش را خالی می‌گذارد؛ بی‌قیمت، «حد ضرر
// مشخص بود» حساب نمی‌شود. جلوگیر نیست، ولی به خانهٔ قیمت می‌برد.
function confirmSlPrice(t){
  if(_rc(t.slReasons)<1 || hasDefinedRisk(t)) return true;
  if(confirm('⚠️ دلیلِ حد ضرر را نوشته‌ای ولی قیمتِ حد ضرر خالی است.\n\nبدون قیمت، «حد ضرر مشخص بود» حساب نمی‌شود.\n\nبدون قیمت ثبت شود؟')) return true;
  const el=document.getElementById('f-sl'); if(el){ el.scrollIntoView({block:'center',behavior:'smooth'}); setTimeout(()=>el.focus(),250); }
  return false;
}

function confirmReasonDepth(t){
  if(!isCourseAccount())return true;
  const prev=TRADES.find(x=>x.id===t.id);
  const c=principleCounts(t), need=prev?needFor(prev):needForNext(), miss=[];
  if(c.entry<need.entry) miss.push(`دلیل ورود: ${faNum(c.entry)} از ${faNum(need.entry)}`);
  if(c.sl<need.sl)       miss.push(`دلیل حد ضرر: ${faNum(c.sl)} از ${faNum(need.sl)}`);
  if(c.tp<need.tp)       miss.push(`دلیل حد سود: ${faNum(c.tp)} از ${faNum(need.tp)}`);
  if(!miss.length)return true;
  // اگر هر دو فیبو زده شده، بگو چرا عدد آن‌طور که انتظار داشت نیست
  const raw=_rc(t.entryReasons), collapsed=raw>c.entry;
  return confirm('⚠️ دلایل این ترید کم است — دقت کن.\n\n• '+miss.join('\n• ')
    +(collapsed?'\n\nفیبوناچی ۲ و ۳ نقطه‌ای یک دلیل حساب می‌شوند.':'')
    +'\n\nبا همین ثبت شود؟');
}

function saveTrade(id){
  // v25.0: عضوِ بی‌اشتراک ترید تازه ثبت نمی‌کند (ویرایش آزاد است) — به‌جای ذخیره‌ی بی‌فرجام، جدول پلن‌ها
  if(isMember()&&window.BILLING&&!BILLING.active()&&!TRADES.find(x=>x.id===id)){ BILLING.openPlans('write'); return; }
  const g=id=>document.getElementById(id);
  const t={
    id,date:g('f-date')?.value,time:g('f-time')?.value,
    coin:g('f-coin')?.value,pair:g('f-pair')?.value,direction:g('f-dir')?.value,
    entry:g('f-entry')?.value,exit:g('f-exit')?.value,stopLoss:g('f-sl')?.value,
    takeProfit:g('f-tp')?.value,size:g('f-size')?.value,leverage:g('f-lev')?.value,
    timeframe:g('f-tf')?.value,strategy:g('f-strat')?.value,session:g('f-sess')?.value,
    emotion:g('f-emot')?.value,result:g('f-res')?.value,fees:g('f-fees')?.value,
    notes:g('f-notes')?.value,tags:g('f-tags')?.value,chartUrl:(g('f-chart')?.value||'').trim(),
    entryReasons:getSelected('er'),
    slReasons:getSelected('slr'),
    tpReasons:getSelected('tpr')
  };
  // موجودیِ مبنای لحظه‌ی ورود روی ترید می‌ماند تا بعداً ریسک واقعی سنجیده شود
  // فیلدهای ماشین‌حساب با ویرایشِ ترید از دست نروند — t از نو از فرم ساخته می‌شود
  const prevT=TRADES.find(x=>x.id===id);
  if(prevT) for(const k of ['capital','sizeMode','marginType','feeReserve','afterLimit','source']) if(prevT[k]!=null&&prevT[k]!=='') t[k]=prevT[k];
  if(!t.chartUrl) delete t.chartUrl;
  if(document.getElementById('pro-calc')){
    const cap=+document.getElementById('pc-b')?.value; if(cap>0) t.capital=cap;
    // حالتی که ترید با آن اندازه گرفته شد: فقط اگر «اعمال در فرم» زده شده، یا
    // ترید تازه در حالت ۳ ثبت می‌شود (ایزوله است، حتی اگر عدد را دستی زده باشد)
    const mode=PRO_CALC_APPLIED||(!prevT&&PRO_CALC_MODE===3?3:0);
    if(mode&&calcModesOpen(formTradePosition(id)).includes(mode)){
      t.sizeMode=mode;
      if(mode===3){
        const cEl=document.getElementById('pc-c'), c=cEl?+cEl.value:+(L.g(feeReserveKey())||0);
        t.marginType='isolated'; t.feeReserve=c>0?c:0;
      } else { delete t.marginType; delete t.feeReserve; }
    }
  }
  if(!t.date||!t.coin||!t.entry||!t.size){alert('لطفاً فیلدهای ستاره‌دار را پر کنید.');return}
  if(t.chartUrl&&!TV_RE.test(t.chartUrl)){alert('لینک نمودار باید لینکِ TradingView باشد (tradingview.com/x/...).');document.getElementById('f-chart')?.focus();return}
  if(!prevT&&tiltNow().hit) t.afterLimit=true;   // v26.6: ترید تازه بعد از رسیدن به سقفِ امروز
  if(isCourseAccount() && !ownerJournal() && (+t.leverage||1) > LEVERAGE_MAX){
    const old=TRADES.find(x=>x.id===t.id);
    if(!old || (+old.leverage||1) !== (+t.leverage||1)){
      alert(`حداکثر اهرم مجاز ${faNum(LEVERAGE_MAX)}× است.\nاهرم را اصلاح کن و دوباره ثبت کن.`);
      document.getElementById('f-lev')?.focus();
      return;
    }
  }
  if(!confirmReasonDepth(t))return;
  if(!confirmSlPrice(t))return;
  if(!confirmRR(t))return;
  if(!confirmProRisk(t))return;
  const exists=TRADES.find(x=>x.id===id);
  t.createdAt=exists?.createdAt||new Date().toISOString();
  t.updatedAt=new Date().toISOString();
  TRADES=exists?TRADES.map(x=>x.id===id?t:x):[...TRADES,t];
  saveStudentPrefs(t); // ذخیره پیش‌فرض کوین/تایم‌فریم/لوریج برای دفعه بعد
  showToast('⏳ در حال ذخیره...');
  saveTrades(SESSION.uid,TRADES).then((res)=>{
    if(res===true) showToast(exists?'✅ ترید ویرایش شد':'✅ ترید ثبت شد');
    if(+t.exit>0&&calcPnl(t)<0) setTimeout(tiltAfterSave,500);
    else if(res?.paywall){ showToast('⛔ اشتراک لازم است — ترید روی همین دستگاه ماند'); loadBilling().then(B=>B.openPlans('write')).catch(()=>{}); }
    else showToast('💾 روی این دستگاه ذخیره شد — در اولین اتصال همگام می‌شود');
  });
  nav('trades',document.querySelector('[data-screen="trades"]'));
}

// ══════════════════════════════════════════════════════
// CSV IMPORT CORE
// ══════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════
// CSV IMPORT CORE — هسته‌ی ورود معاملات از فایل صرافی
// توابع خالص و قابل تست؛ در index.html هم دقیقاً همین کد تزریق می‌شود.
// ══════════════════════════════════════════════════════

// ── ۱. خواندن CSV (نقل‌قول، کاما داخل متن، CRLF، BOM) ──
function parseCSV(text) {
  let s = String(text || '').replace(/^﻿/, '');
  if (!s.trim()) return [];
  // تشخیص جداکننده از روی خط سرستون
  const firstLine = s.slice(0, s.indexOf('\n') === -1 ? s.length : s.indexOf('\n'));
  const counts = { ',': 0, ';': 0, '\t': 0 };
  let q = false;
  for (const ch of firstLine) {
    if (ch === '"') q = !q;
    else if (!q && ch in counts) counts[ch]++;
  }
  const delim = Object.keys(counts).reduce((a, b) => counts[b] > counts[a] ? b : a, ',');

  const rows = []; let row = []; let field = ''; let inQ = false;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (inQ) {
      if (ch === '"') { if (s[i + 1] === '"') { field += '"'; i++; } else inQ = false; }
      else field += ch;
      continue;
    }
    if (ch === '"') { inQ = true; continue; }
    if (ch === delim) { row.push(field); field = ''; continue; }
    if (ch === '\r') continue;
    if (ch === '\n') { row.push(field); rows.push(row); row = []; field = ''; continue; }
    field += ch;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter(r => r.some(x => String(x).trim() !== ''));
}

// ── ۲. اعداد و تاریخ‌های چندزبانه ──
const FA_DIGITS = /[۰-۹]/g, AR_DIGITS = /[٠-٩]/g;
function toEnDigits(v) {
  return String(v == null ? '' : v)
    .replace(FA_DIGITS, d => String(d.charCodeAt(0) - 1776))
    .replace(AR_DIGITS, d => String(d.charCodeAt(0) - 1632));
}
function num(v) {
  if (v == null || v === '') return null;
  let s = toEnDigits(v).trim();
  const neg = /^\(.*\)$/.test(s) || /^-/.test(s);          // (12.5) یا -12.5
  s = s.replace(/[()]/g, '').replace(/[^\d.,-]/g, '');      // حذف USDT، %، فاصله…
  if (s.includes(',') && s.includes('.')) s = s.replace(/,/g, '');        // 1,234.56
  else if ((s.match(/,/g) || []).length === 1 && /,\d{1,2}$/.test(s)) s = s.replace(',', '.'); // 12,50 اروپایی
  else s = s.replace(/,/g, '');
  s = s.replace(/(?!^)-/g, '');
  const n = parseFloat(s);
  if (!isFinite(n)) return null;
  return neg && n > 0 ? -n : n;
}
// تقویم شمسی بالاتر تعریف شده؛ نسخه‌ی تکراری این‌جا حذف شد
// (هر دو پیاده‌سازی روی ۱۱۳۴ تاریخ آزموده و کاملاً یکسان بودند)

// خروجی: {date:'YYYY-MM-DD', time:'HH:MM', ms:Number} یا null
// order: ترتیب تاریخ‌های سال‌آخر — 'mdy' (هایپرلیکویید، آمریکایی) یا 'dmy'؛
// buildTrades از روی کل ستون تشخیص می‌دهد (detectDateOrder).
function parseWhen(v, order) {
  if (v == null || v === '') return null;
  const raw = toEnDigits(v).trim();
  // تایم‌استمپ
  if (/^\d{10}$/.test(raw)) return fromDate(new Date(Number(raw) * 1000));
  if (/^\d{13}$/.test(raw)) return fromDate(new Date(Number(raw)));
  const pad = n => String(n).padStart(2, '0');
  // ثانیه فقط برای ترتیبِ اجراهای همان دقیقه است؛ time همان HH:MM می‌ماند تا شناسه‌ها عوض نشوند
  const out = (y, mo, d, hh, mi, ss) => ({ date: `${y}-${pad(mo)}-${pad(d)}`, time: hh != null ? `${pad(hh)}:${pad(mi)}` : '',
             ms: Date.UTC(y, mo - 1, d, hh || 0, mi || 0, ss || 0) });
  const m = raw.match(/(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})(?:[ T,]+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
  if (m) {
    let [, y, mo, d, hh, mi, ss] = m.map(Number);
    if (y >= 1300 && y <= 1500) { const g = j2gParts(y, mo, d); y = g.gy; mo = g.gm; d = g.gd; } // شمسی
    if (y < 1900 || mo < 1 || mo > 12 || d < 1 || d > 31) return null;
    return out(y, mo, d, m[4] != null ? hh : null, mi, ss);
  }
  // «2/24/2026 - 13:38:18» (هایپرلیکویید) یا «24.02.2026 13:38»
  const u = raw.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})(?:[\s,T-]+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
  if (u) {
    let [, a, b, y, hh, mi, ss] = u.map(Number);
    const dayFirst = order === 'dmy' || (order !== 'mdy' && a > 12);
    const mo = dayFirst ? b : a, d = dayFirst ? a : b;
    if (y < 1900 || mo < 1 || mo > 12 || d < 1 || d > 31) return null;
    return out(y, mo, d, u[4] != null ? hh : null, mi, ss);
  }
  const dt = new Date(raw);
  return isNaN(dt.getTime()) ? null : fromDate(dt);
}
function fromDate(dt) {
  const pad = n => String(n).padStart(2, '0');
  return { date: `${dt.getUTCFullYear()}-${pad(dt.getUTCMonth() + 1)}-${pad(dt.getUTCDate())}`,
           time: `${pad(dt.getUTCHours())}:${pad(dt.getUTCMinutes())}`, ms: dt.getTime() };
}

// ── ۳. تشخیص ستون‌ها (چندزبانه) ──
const FIELD_SYNONYMS = {
  time:      ['date(utc)','date','time','trade time','datetime','date time','created','create time','update time','closed time','تاریخ','زمان','تاریخ و زمان','زمان معامله'],
  symbol:    ['symbol','pair','market','contracts','contract','coin','instrument','asset','نماد','بازار','ارز','جفت‌ارز','جفت ارز'],
  side:      ['side','direction','dir','type','closing direction','position side','order side','trade side','سمت','نوع','جهت','نوع سفارش'],
  price:     ['price','px','avg price','average price','entry price','avg entry price','filled price','قیمت','قیمت ورود','میانگین قیمت'],
  exitPrice: ['exit price','close price','avg exit price','avg close price','closing price','قیمت خروج','قیمت بسته شدن'],
  qty:       ['quantity','qty','sz','executed','filled','size','volume','amount','base amount','مقدار','حجم','تعداد'],
  quote:     ['amount','total','quote amount','notional','ntl','value','مبلغ','ارزش','مبلغ کل'],
  fee:       ['fee','fees','commission','trading fee','کارمزد','کارمزد معامله'],
  pnl:       ['realized profit','realized pnl','closed p&l','closed pnl','closedpnl','pnl','profit','realized p&l','net pnl','سود','زیان','سود/زیان','سود و زیان'],
  leverage:  ['leverage','lev','اهرم','لوریج'],
};
function normHeader(h) {
  return toEnDigits(h).replace(/^﻿/, '').replace(/[‌‎‏]/g, ' ')
    .replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
}
function detectMapping(headers) {
  const norm = headers.map(normHeader);
  const map = {}; const used = new Set();
  // امتیازدهی: تطابق کامل بهتر از تطابق جزئی
  for (const [field, syns] of Object.entries(FIELD_SYNONYMS)) {
    let best = -1, bestScore = 0;
    norm.forEach((h, i) => {
      if (used.has(i) || !h) return;
      let score = 0;
      for (const syn of syns) {
        if (h === syn) score = Math.max(score, 100);
        else if (h.replace(/[()]/g, '').trim() === syn) score = Math.max(score, 95);
        else if (h.includes(syn) && syn.length >= 3) score = Math.max(score, 60 + syn.length);
      }
      if (score > bestScore) { bestScore = score; best = i; }
    });
    if (best >= 0 && bestScore >= 60) { map[field] = best; used.add(best); }
  }
  return map;
}

// ── ۴. تشخیص حالت فایل ──
// closed = هر ردیف یک معامله‌ی بسته‌شده | fills = هر ردیف یک اجرا (باید بازسازی شود)
function detectMode(map) {
  if (map.exitPrice != null && map.price != null) return 'closed';
  return 'fills';
}

// ── ۵. شناسه‌ی قطعی برای جلوگیری از ورود تکراری ──
function stableId(parts) {
  const s = parts.filter(x => x != null && x !== '').join('|');
  let h1 = 0x811c9dc5, h2 = 0x01000193;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 16777619) >>> 0;
    h2 = Math.imul(h2 + c, 2654435761) >>> 0;
  }
  return 'imp' + h1.toString(36) + h2.toString(36);
}

const SELL = /^(sell|short|open short|close long|closed long|بستن خرید|فروش|sold)/i;
const BUY  = /^(buy|long|open long|close short|closed short|بستن فروش|خرید|bought)/i;
function sideOf(v) {
  const s = toEnDigits(v).trim();
  // برگشتِ پوزیشن در هایپرلیکویید: «Long > Short» یعنی فروش، «Short > Long» یعنی خرید
  if (/^long\s*>\s*short/i.test(s)) return 'SELL';
  if (/^short\s*>\s*long/i.test(s)) return 'BUY';
  if (SELL.test(s)) return 'SELL';
  if (BUY.test(s)) return 'BUY';
  return null;
}
// قصدِ اجرا وقتی صرافی می‌گوید (Open/Close)؛ وگرنه null
function intentOf(v) {
  const s = toEnDigits(v).trim().toLowerCase();
  if (/^open\b/.test(s)) return 'open';
  if (/^close\b/.test(s)) return 'close';
  return null;
}
// ترتیب تاریخ‌های سال‌آخرِ یک ستون: اگر جایی عدد اول > ۱۲ بود روز/ماه، وگرنه ماه/روز
function detectDateOrder(values) {
  let mdy = false;
  for (const v of values) {
    const m = toEnDigits(v).trim().match(/^(\d{1,2})[/.-](\d{1,2})[/.-]\d{4}/);
    if (!m) continue;
    if (+m[1] > 12) return 'dmy';
    if (+m[2] > 12) mdy = true;
  }
  return mdy ? 'mdy' : undefined;
}
function cleanSymbol(v) {
  let s = toEnDigits(v).toUpperCase().replace(/\s|PERP|SWAP|\.P$/g, '').replace(/[/_-]/g, '');
  const quotes = ['USDT','USDC','BUSD','TMN','IRT','RLS','BTC','ETH'];
  for (const q of quotes) if (s.endsWith(q) && s.length > q.length) return { coin: s.slice(0, -q.length), quote: q };
  return { coin: s, quote: 'USDT' };
}

// ── ۶. ساخت تریدها ──
// خروجی: { trades:[...], skipped:[{row,reason}], mode, symbols:[] }
function buildTrades(rows, mapping, { source = 'import' } = {}) {
  const map = mapping, out = [], skipped = [];
  const mode = detectMode(map);
  const body = rows.slice(1);
  const cell = (r, f) => map[f] != null ? r[map[f]] : undefined;
  const order = detectDateOrder(body.map(r => cell(r, 'time')));

  if (mode === 'closed') {
    body.forEach((r, i) => {
      const when = parseWhen(cell(r, 'time'), order);
      const sym = cleanSymbol(cell(r, 'symbol') || '');
      const entry = num(cell(r, 'price')), exit = num(cell(r, 'exitPrice'));
      const qty = num(cell(r, 'qty'));
      if (!when || !sym.coin || entry == null || exit == null) { skipped.push({ row: i + 2, reason: 'ستون‌های ضروری خالی است' }); return; }
      const sd = sideOf(cell(r, 'side'));
      // در گزارش‌های «بسته‌شده»، جهتِ ستون معمولاً جهتِ بستن است → معکوسِ پوزیشن
      const direction = sd === 'SELL' ? 'Long' : sd === 'BUY' ? 'Short' : (exit >= entry ? 'Long' : 'Short');
      const lev = num(cell(r, 'leverage')) || 1;
      const notional = qty != null ? Math.abs(qty * entry) : null;
      out.push(mkTrade({ when, sym, entry, exit, direction, notional, lev,
        fee: Math.abs(num(cell(r, 'fee')) || 0), pnl: num(cell(r, 'pnl')), source }));
    });
    return { trades: out, skipped, mode, symbols: [...new Set(out.map(t => t.coin))] };
  }

  // حالت fills: گروه‌بندی بر اساس نماد و بازسازی پوزیشن
  const fills = [];
  body.forEach((r, i) => {
    const when = parseWhen(cell(r, 'time'), order);
    const sym = cleanSymbol(cell(r, 'symbol') || '');
    const price = num(cell(r, 'price'));
    let qty = num(cell(r, 'qty'));
    const side = sideOf(cell(r, 'side'));
    if (qty == null && map.quote != null && price) { const q = num(cell(r, 'quote')); if (q != null) qty = q / price; }
    if (!when || !sym.coin || price == null || qty == null || !side) { skipped.push({ row: i + 2, reason: 'ردیف ناقص یا نامفهوم' }); return; }
    fills.push({ ms: when.ms, when, coin: sym.coin, quote: sym.quote, price, qty: Math.abs(qty), side,
                 fee: Math.abs(num(cell(r, 'fee')) || 0), lev: num(cell(r, 'leverage')) || 1,
                 intent: intentOf(cell(r, 'side')), row: i + 2 });
  });

  const trades = reconstructPositions(fills, source, skipped);
  skipped.sort((a, b) => a.row - b.row);
  return { trades, skipped, mode, symbols: [...new Set(fills.map(f => f.coin))] };
}

// بازسازی پوزیشن از روی اجراها — مشترک بین ورود CSV و اتصال صرافی
// skipped (اختیاری): اجرای «بستن» که بازشدنش در فایل نیست، اینجا گزارش می‌شود
function reconstructPositions(fills, source = 'import', skipped = null) {
  const out = [];
  const bySymbol = {};
  for (const f of fills) (bySymbol[f.coin + '/' + f.quote] ||= []).push(f);
  for (const key of Object.keys(bySymbol)) {
    const list = bySymbol[key].sort((a, b) => a.ms - b.ms);
    let pos = null;
    for (const f of list) {
      const signed = f.side === 'BUY' ? f.qty : -f.qty;
      if ((!pos || pos.qty === 0) && f.intent === 'close') {
        // تاریخچه‌ی فایل از وسطِ این پوزیشن شروع شده؛ ورودش معلوم نیست
        if (skipped) skipped.push({ row: f.row, reason: 'بستنِ پوزیشنی که بازشدنش در این فایل نیست' });
        continue;
      }
      if (!pos || pos.qty === 0) {
        pos = { dir: signed > 0 ? 1 : -1, qty: Math.abs(signed), avg: f.price, open: f, fee: f.fee,
                exitQty: 0, exitNotional: 0, entryCost: 0, lev: f.lev, last: f };
        continue;
      }
      const same = (signed > 0 && pos.dir === 1) || (signed < 0 && pos.dir === -1);
      if (same) { // افزایش پوزیشن → میانگین‌گیری
        const total = pos.qty + Math.abs(signed);
        pos.avg = (pos.avg * pos.qty + f.price * Math.abs(signed)) / total;
        pos.qty = total; pos.fee += f.fee; pos.last = f;
      } else {    // کاهش/بستن
        const closeQty = Math.min(pos.qty, Math.abs(signed));
        pos.exitQty += closeQty; pos.exitNotional += closeQty * f.price;
        pos.entryCost += closeQty * pos.avg;     // ورودِ همین بخش، با میانگینِ همین لحظه
        pos.qty -= closeQty; pos.fee += f.fee; pos.last = f;
        if (pos.qty <= 1e-12) {
          out.push(mkTrade({
            when: pos.open.when, closeWhen: f.when, sym: { coin: pos.open.coin, quote: pos.open.quote },
            entry: pos.entryCost / pos.exitQty, exit: pos.exitNotional / pos.exitQty,
            direction: pos.dir === 1 ? 'Long' : 'Short',
            notional: pos.entryCost, lev: pos.lev, fee: pos.fee, pnl: null, source,
            idEntry: pos.avg, idNotional: pos.avg * pos.exitQty      // شناسه همان قبلی
          }));
          const rest = Math.abs(signed) - closeQty;
          // «Close» هیچ‌وقت پوزیشنِ برعکس باز نمی‌کند؛ اضافه‌اش مالِ قبل از فایل است
          if (rest > 1e-12 && f.intent === 'close' && skipped)
            skipped.push({ row: f.row, reason: 'بخشی از این بستن مالِ پوزیشنی قبل از این فایل است' });
          pos = rest > 1e-12 && f.intent !== 'close'
            ? { dir: signed > 0 ? 1 : -1, qty: rest, avg: f.price, open: f, fee: 0, exitQty: 0, exitNotional: 0, entryCost: 0, lev: f.lev, last: f }
            : null;
        }
      }
    }
    // پوزیشن باز باقی‌مانده → ترید باز
    if (pos && pos.qty > 1e-12) {
      out.push(mkTrade({ when: pos.open.when, sym: { coin: pos.open.coin, quote: pos.open.quote },
        entry: pos.avg, exit: null, direction: pos.dir === 1 ? 'Long' : 'Short',
        notional: pos.avg * pos.qty, lev: pos.lev, fee: pos.fee, pnl: null, source, open: true }));
    }
  }
  out.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  return out;
}

// ── اجراهای صرافی (از قبل نرمال‌شده) → تریدهای ژورنال ──
function buildTradesFromExchange(rawFills, { source = 'exchange' } = {}) {
  const fills = [];
  for (const f of rawFills || []) {
    const when = parseWhen(f.ms);
    if (!when || !f.coin || !(f.price > 0) || !(f.qty > 0) || !f.side) continue;
    fills.push({ ms: when.ms, when, coin: String(f.coin).toUpperCase(), quote: f.quote || 'USDT',
                 price: Number(f.price), qty: Math.abs(Number(f.qty)),
                 side: String(f.side).toUpperCase().startsWith('S') ? 'SELL' : 'BUY',
                 fee: Math.abs(Number(f.fee) || 0), lev: Number(f.leverage) || 1 });
  }
  fills.sort((a, b) => a.ms - b.ms);
  const trades = reconstructPositions(fills, source);
  return { trades, skipped: [], mode: 'fills', symbols: [...new Set(trades.map(t => t.coin))] };
}

// idEntry/idNotional: فقط برای شناسه — تا شناسه‌ی تریدهایی که قبلاً وارد شده‌اند عوض نشود
function mkTrade({ when, closeWhen, sym, entry, exit, direction, notional, lev, fee, pnl, source, open, idEntry, idNotional }) {
  // ژورنال سود را از size×leverage×٪حرکت حساب می‌کند.
  // با size = ارزش اسمی و leverage = ۱، سود محاسبه‌شده دقیقاً برابر سود واقعی می‌شود.
  const useLev = lev && lev > 1 ? lev : 1;
  const size = notional != null ? (useLev > 1 ? notional / useLev : notional) : '';
  const ie = idEntry != null ? idEntry : entry, inl = idNotional != null ? idNotional : notional;
  const id = stableId(['imp', sym.coin, sym.quote, direction, when.date, when.time,
                       ie != null ? ie.toFixed(8) : '', exit != null ? exit.toFixed(8) : '', inl != null ? inl.toFixed(4) : '']);
  const t = {
    id, date: when.date, time: when.time || '', coin: sym.coin, pair: sym.quote, direction,
    entry: entry != null ? String(round(entry)) : '', exit: exit != null ? String(round(exit)) : '',
    stopLoss: '', takeProfit: '', size: size !== '' ? String(round(size)) : '', leverage: String(useLev),
    timeframe: '', strategy: '', session: '', emotion: '', fees: fee ? String(round(fee)) : '',
    notes: '', tags: 'وارد‌شده', entryReasons: [], slReasons: [], tpReasons: [],
    result: open ? 'Open' : 'Win', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    source, importedAt: new Date().toISOString()
  };
  t.openMs = when.ms;                       // v19: پنجره‌ی دقیق برای MFE/MAE
  if (closeWhen) { t.exitDate = closeWhen.date; t.exitTime = closeWhen.time || ''; t.closeMs = closeWhen.ms; }
  if (!open) {
    const p = pnl != null ? pnl : (direction === 'Long' ? (exit - entry) : (entry - exit)) * (notional != null && entry ? notional / entry : 0) - (fee || 0);
    t.result = p > 0 ? 'Win' : p < 0 ? 'Loss' : 'Break Even';
  }
  return t;
}
function round(n) { const a = Math.abs(n); const d = a >= 1000 ? 2 : a >= 1 ? 4 : 8; return Number(n.toFixed(d)); }

// ── ۷. ادغام با تریدهای موجود: هرگز چیزی را بازنویسی نکن ──
function planImport(existing, incoming) {
  const byId = new Set((existing || []).map(t => t && t.id).filter(Boolean));
  const fresh = [], duplicates = [];
  for (const t of incoming) (byId.has(t.id) ? duplicates : fresh).push(t);
  return { fresh, duplicates };
}

// ══════════════════════════════════════════════════════
// ورود معاملات از فایل صرافی — رابط کاربری
// ══════════════════════════════════════════════════════
let IMPORT_STATE = null;
const IMPORT_FIELDS = [
  ['time','تاریخ / زمان',true],['symbol','نماد یا بازار',true],['side','سمت (خرید/فروش)',false],
  ['price','قیمت ورود',true],['exitPrice','قیمت خروج',false],['qty','مقدار',false],
  ['fee','کارمزد',false],['pnl','سود/زیان',false],['leverage','اهرم',false]
];

// v18.3.2: ورود فایل فقط برای دانشجوی واقعی معنا دارد
function updateImportButton(){
  const row=document.getElementById('import-row'); if(!row)return;
  const allowed = SESSION && SESSION.role==='student' && !SESSION.isViewOnly;
  row.style.display = allowed ? 'grid' : 'none';
}
// ══════════════════════════════════════════════════════
// تکمیل سریع (v18.9)
// معامله‌ای که از فایل یا صرافی وارد شده، «چرا»یش را ندارد: دلیل ورود،
// احساس، حد ضرر و یادداشت خالی‌اند و برای همین در نمره‌ی دیسیپلین حساب
// نمی‌شود. این حالت همان معامله‌ها را یکی‌یکی جلوی دانشجو می‌گذارد تا با
// چند لمس کاملشان کند — بدون رفت‌وبرگشت با فرم کامل ویرایش.
// ══════════════════════════════════════════════════════

// همان شرطی که نمره‌ی دیسیپلین استفاده می‌کند؛ هر دو باید یکی بمانند.
// v20: هر معامله‌ای که اصول ورودش کامل نیست وارد صف می‌شود — نه فقط
// واردشده‌های دست‌نخورده. هدف رساندن معامله به استانداردِ آکادمی است.
// v25.14: قیمتِ حد ضرر هم — همان معیارِ قانون «حد ضرر مشخص بود» (hasDefinedRisk). قبلاً فقط
// دلیل‌ها را می‌دید و «تمام شد» می‌گفت، در حالی که کارت پلن همان تریدها را بی‌حد ضرر می‌شمرد.
function qcComplete(t){ return principlesMet(t) && hasDefinedRisk(t); }
function qcNeedsJournal(t){
  return !!t && !t._deleted && !qcComplete(t);
}
function qcPendingTrades(){
  return TRADES.filter(qcNeedsJournal)
    .sort(byDateDesc);
}

let QC_STATE=null;
const QC_SAVE_EVERY=5;   // ذخیره‌ی دسته‌ای: کل آرایه‌ی تریدها هر بار آپلود می‌شود
const QC_TOP_REASONS=8;  // بقیه پشت دکمه‌ی «همه‌ی دلایل» جمع می‌شوند

// دلایلی که خودِ دانشجو بیشتر نوشته اول بیایند؛ یک لمس به‌جای اسکرول طولانی.
function qcRankedReasons(){
  const all=ENTRY_REASONS(), used=new Map();
  for(const t of TRADES){
    if(!Array.isArray(t.entryReasons))continue;
    for(const r of t.entryReasons) used.set(r,(used.get(r)||0)+1);
  }
  return all.map((r,i)=>({r,n:used.get(r)||0,i}))
            .sort((a,b)=>b.n-a.n||a.i-b.i)
            .map(x=>x.r);
}

function renderQuickCompleteBanner(){
  const el=document.getElementById('qc-banner'); if(!el)return;
  const isStudent=SESSION?.role==='student'&&!SESSION?.isViewOnly;
  const n=isStudent?qcPendingTrades().length:0;
  if(!n){el.innerHTML='';return}
  el.innerHTML=`<div class="qc-banner fade-in">
    <span class="qc-banner-ico">⚡</span>
    <div class="qc-banner-txt">${faNum(n)} معامله هنوز کامل نیست
      <small>دلیل‌ها و قیمت حد ضرر را با چند لمس اضافه کن</small></div>
    <button class="btn btn-primary" onclick="openQuickComplete()">تکمیل سریع</button>
  </div>`;
}

function openQuickComplete(){
  if(!SESSION||SESSION.role!=='student'||SESSION.isViewOnly){
    alert('تکمیل سریع فقط از حساب خودِ دانشجو انجام می‌شود.');return;
  }
  const queue=qcPendingTrades();
  if(!queue.length){showToast('همه‌ی معاملات وارد‌شده کامل‌اند 🎉');return}
  QC_STATE={ ids:queue.map(t=>t.id), i:0, done:0, partial:0, unsaved:0, draft:null, allReasons:false };
  qcLoadDraft();
  renderQuickComplete();
  document.getElementById('det-sheet').classList.add('open');
}

function qcCurrent(){ return TRADES.find(t=>t.id===QC_STATE.ids[QC_STATE.i]) || null; }

function qcLoadDraft(){
  const t=qcCurrent();
  QC_STATE.draft = t ? {
    entryReasons: Array.isArray(t.entryReasons)?[...t.entryReasons]:[],
    slReasons: Array.isArray(t.slReasons)?[...t.slReasons]:[],
    tpReasons: Array.isArray(t.tpReasons)?[...t.tpReasons]:[],
    strategy:t.strategy||'', emotion:t.emotion||'', session:t.session||'',
    timeframe:t.timeframe||'', stopLoss:t.stopLoss||'', takeProfit:t.takeProfit||'', notes:t.notes||''
  } : null;
}

function qcPick(field,val,el){
  const d=QC_STATE.draft; if(!d)return;
  d[field] = d[field]===val ? '' : val;
  [...el.parentElement.children].forEach(c=>c.classList.toggle('selected', c.dataset.value===d[field]));
}
function qcToggleReason(val,el,field){
  const a=QC_STATE.draft?.[field||'entryReasons']; if(!a)return;
  const i=a.indexOf(val);
  if(i>=0)a.splice(i,1); else a.push(val);
  el.classList.toggle('selected', a.includes(val));
  qcRefreshPrinciples();
}
// شمارنده‌ی زنده‌ی اصول، بدون رندر دوباره‌ی کارت (وگرنه فوکوس یادداشت می‌پرد)
function qcRefreshPrinciples(){
  const box=document.getElementById('qc-principles');
  if(!box||!QC_STATE?.draft)return;
  box.outerHTML=qcPrinciplesMarkup(QC_STATE.draft);
}
function qcPrinciplesMarkup(d){
  const c=principleCounts(d);
  const N=needFor(qcCurrent());
  const row=(lbl,have,need)=>{
    const ok=have>=need;
    return `<span class="qc-pchip ${ok?'ok':''}">${ok?'✓':'○'} ${lbl} ${faNum(have)}/${faNum(need)}</span>`;
  };
  const done=c.entry>=N.entry&&c.sl>=N.sl&&c.tp>=N.tp;
  return `<div id="qc-principles" class="qc-principles ${done?'done':''}">
    <b>${done?'✅ اصول ورود کامل است':'اصول ورودِ درست'}</b>
    ${row('دلیل ورود',c.entry,N.entry)}
    ${row('حد ضرر',c.sl,N.sl)}
    ${row('حد سود',c.tp,N.tp)}
  </div>`;
}
function qcSetText(field,value){ if(QC_STATE?.draft)QC_STATE.draft[field]=value; }
function qcShowAllReasons(){
  if(!QC_STATE)return;
  QC_STATE.allReasons=true;
  const group=document.querySelector('.qc-field .chip-group'); if(!group)return;
  const d=QC_STATE.draft, shown=new Set([...group.children].map(c=>c.dataset.value).filter(Boolean));
  group.querySelector('.qc-more')?.remove();
  for(const r of qcRankedReasons()){
    if(shown.has(r))continue;
    const chip=document.createElement('div');
    chip.className='chip'+(d.entryReasons.includes(r)?' selected':'');
    chip.dataset.value=r; chip.textContent=r;
    chip.onclick=()=>qcToggleReason(r,chip);
    group.appendChild(chip);
  }
}

function qcChips(field,options,value){
  return`<div class="chip-group">${options.filter(o=>o!=='Other').map(o=>
    `<div class="chip ${value===o?'selected':''}" data-value="${esc(o)}" onclick="qcPick('${field}',this.dataset.value,this)">${esc(o)}</div>`).join('')}</div>`;
}

function renderQuickComplete(){
  const box=document.getElementById('det-content'); if(!box||!QC_STATE)return;
  const total=QC_STATE.ids.length;
  if(QC_STATE.i>=total){ box.innerHTML=qcFinishedMarkup(); return }
  const t=qcCurrent();
  if(!t){ QC_STATE.i++; return renderQuickComplete() }
  const d=QC_STATE.draft, pnl=t.exit?calcPnl(t):null;
  box.innerHTML=`
    <div class="qc-head">
      <div class="bs-title" style="margin:0">⚡ تکمیل سریع</div>
      <span class="qc-count">${faNum(QC_STATE.i+1)} از ${faNum(total)}</span>
    </div>
    <div class="qc-track"><div class="qc-fill" style="width:${Math.round(QC_STATE.i/total*100)}%"></div></div>

    <div class="qc-trade">
      <div class="qc-trade-top">
        <div>
          <div class="qc-trade-coin">${esc(t.coin)}/${esc(t.pair)} <span class="badge ${badgeCls(t.direction)}">${esc(t.direction)}</span></div>
          <div class="qc-trade-when">${fmtDateFa(t.date)}${t.time?' · '+esc(t.time):''}</div>
        </div>
        ${pnl!==null?`<div class="t-amt ${pnl>=0?'green':'red'}" style="font-size:14px">${fmtUSD(pnl)}</div>`:'<span class="badge b-open">باز</span>'}
      </div>
      <div class="qc-nums">
        <div class="qc-num"><small>ورود</small><b>${esc(t.entry||'—')}</b></div>
        <div class="qc-num"><small>خروج</small><b>${esc(t.exit||'—')}</b></div>
        <div class="qc-num"><small>اهرم</small><b>${esc(t.leverage||'1')}×</b></div>
      </div>
    </div>

    ${qcPrinciplesMarkup(d)}

    <div class="qc-field">
      <div class="qc-label">چرا وارد شدی؟ <em>حداقل ${faNum(needFor(qcCurrent()).entry)} مورد</em></div>
      <div class="chip-group">${(()=>{
        const ranked=qcRankedReasons();
        // چیزی که قبلاً انتخاب شده هرگز پنهان نمی‌شود
        const shown=QC_STATE.allReasons?ranked:ranked.filter((r,i)=>i<QC_TOP_REASONS||d.entryReasons.includes(r));
        return shown.map(r=>`<div class="chip ${d.entryReasons.includes(r)?'selected':''}" data-value="${esc(r)}" onclick="qcToggleReason(this.dataset.value,this,'entryReasons')">${esc(r)}</div>`).join('')
          +(ranked.length>shown.length?`<div class="chip qc-more" onclick="qcShowAllReasons()">+ ${faNum(ranked.length-shown.length)} دلیل دیگر</div>`:'');
      })()}</div>
    </div>

    <div class="qc-field">
      <div class="qc-label">چرا حد ضرر آنجا بود؟ <em>حداقل ${faNum(ENTRY_PRINCIPLES.sl)} مورد</em></div>
      <div class="chip-group">${getSLList(t.direction).map(r=>
        `<div class="chip ${d.slReasons.includes(r)?'selected':''}" data-value="${esc(r)}" onclick="qcToggleReason(this.dataset.value,this,'slReasons')">${esc(r)}</div>`).join('')}</div>
      <div class="qc-label" style="margin-top:10px">قیمت حد ضرر</div>
      <input class="fi" id="qc-sl" type="number" step="any" inputmode="decimal" style="direction:ltr;text-align:left"
             value="${esc(d.stopLoss)}" placeholder="مثلاً ${esc(String(t.entry||''))}" oninput="qcSetText('stopLoss',this.value)">
      ${isIsolatedBudget(t)?'':'<div class="qc-hint" style="margin-top:6px">بدون قیمت، «حد ضرر مشخص بود» حساب نمی‌شود — دلیلش به‌تنهایی کافی نیست.</div>'}
    </div>

    <div class="qc-field">
      <div class="qc-label">چرا حد سود آنجا بود؟ <em>حداقل ${faNum(ENTRY_PRINCIPLES.tp)} مورد</em></div>
      <div class="chip-group">${getTPList(t.direction).map(r=>
        `<div class="chip ${d.tpReasons.includes(r)?'selected':''}" data-value="${esc(r)}" onclick="qcToggleReason(this.dataset.value,this,'tpReasons')">${esc(r)}</div>`).join('')}</div>
      <div class="qc-label" style="margin-top:10px">قیمت حد سود <em>برای R:R</em></div>
      <input class="fi" type="number" step="any" inputmode="decimal" style="direction:ltr;text-align:left"
             value="${esc(d.takeProfit)}" placeholder="قیمت حد سود" oninput="qcSetText('takeProfit',this.value)">
    </div>

    <div class="qc-field"><div class="qc-label">حالت روحی‌ات موقع ورود <em>در نمرهٔ انضباط حساب می‌شود</em></div>
      ${qcChips('emotion',EMOTIONS,d.emotion)}</div>

    <div class="qc-field"><div class="qc-label">استراتژی</div>
      ${qcChips('strategy',getDynList('sc_strategies',STRATEGIES),d.strategy)}</div>

    <div class="qc-field"><div class="qc-label">سشن</div>
      ${qcChips('session',getDynList('sc_sessions',SESSIONS),d.session)}</div>

    <div class="qc-field"><div class="qc-label">تایم‌فریم</div>
      ${qcChips('timeframe',getDynList('sc_timeframes',TIMEFRAMES),d.timeframe)}</div>

    <div class="qc-field"><div class="qc-label">یادداشت</div>
      <textarea class="fi" maxlength="1000" placeholder="چه چیزی دیدی؟ چه چیزی را اشتباه خواندی؟"
                oninput="qcSetText('notes',this.value)">${esc(d.notes)}</textarea></div>

    <div class="qc-hint">یادداشت فقط برای خودت است و در هیچ نمره‌ای حساب نمی‌شود.</div>

    <div class="qc-actions">
      <button class="btn btn-ghost" onclick="qcSkip()">رد کن</button>
      <button class="btn btn-primary" onclick="qcSaveAndNext()">ذخیره و بعدی ←</button>
    </div>
    <button class="btn btn-ghost" style="margin-top:9px" onclick="qcExit()">بعداً ادامه می‌دهم</button>`;
}

function qcApplyDraft(){
  const t=qcCurrent(), d=QC_STATE.draft;
  if(!t||!d)return false;
  const snap=x=>JSON.stringify([x.entryReasons,x.slReasons,x.tpReasons,x.strategy,x.emotion,x.session,x.timeframe,String(x.stopLoss??''),String(x.takeProfit??''),x.notes]);
  const before=snap(t);
  t.entryReasons=[...d.entryReasons]; t.slReasons=[...d.slReasons]; t.tpReasons=[...d.tpReasons];
  t.strategy=d.strategy; t.emotion=d.emotion; t.session=d.session; t.timeframe=d.timeframe;
  t.stopLoss=String(d.stopLoss||''); t.takeProfit=String(d.takeProfit||''); t.notes=d.notes;
  const after=snap(t);
  if(before===after)return false;
  t.updatedAt=new Date().toISOString();
  return true;
}

async function qcSaveAndNext(){
  // فقط کارتی که واقعاً کامل شد (اصول + قیمت حد ضرر) «کامل» شمرده می‌شود
  if(qcApplyDraft()){ QC_STATE.unsaved++; if(qcComplete(qcCurrent())) QC_STATE.done++; else QC_STATE.partial++; }
  QC_STATE.i++;
  qcLoadDraft();
  renderQuickComplete();
  // ذخیره‌ی دسته‌ای: هر بار ذخیره یعنی آپلود کل آرایه، پس هر ۵ کارت یک‌بار
  if(QC_STATE.unsaved>=QC_SAVE_EVERY||QC_STATE.i>=QC_STATE.ids.length) await qcFlush();
}
function qcSkip(){ QC_STATE.i++; qcLoadDraft(); renderQuickComplete(); }

async function qcFlush(quiet=false){
  if(!QC_STATE||!QC_STATE.unsaved)return true;
  const n=QC_STATE.unsaved; QC_STATE.unsaved=0;
  const res=await saveTrades(SESSION.uid,TRADES);
  if(!quiet)showToast(res===true?`✅ ${faNum(n)} معامله ذخیره شد`:`💾 ${faNum(n)} معامله روی این دستگاه ذخیره شد — در اولین اتصال همگام می‌شود`);
  return res===true;
}

function qcFinishedMarkup(){
  // «تمام شد» فقط وقتی که با همان معیارِ صف چیزی نمانده باشد
  const left=qcPendingTrades().length;
  const noSl=TRADES.filter(t=>t&&!t._deleted&&principlesMet(t)&&!hasDefinedRisk(t)).length;
  return`<div class="qc-done">
    <span class="qc-done-ico">${left?'✅':'🎉'}</span>
    <div class="qc-done-t">${left?'این دور تمام شد':'تمام شد'}</div>
    <div class="qc-done-s">${faNum(QC_STATE.done)} معامله کامل شد${QC_STATE.partial?`، ${faNum(QC_STATE.partial)} معامله هنوز ناقص است`:''}.
      ${left?`<br>${faNum(left)} معامله هنوز کامل نیست${noSl?` — ${faNum(noSl)} تا فقط قیمت حد ضرر کم دارند`:''}.`:'<br>نمره‌ی دیسیپلینت همین حالا به‌روز شده است.'}</div>
    ${left?'<button class="btn btn-primary" onclick="qcExit().then(openQuickComplete)">ادامهٔ تکمیل</button><button class="btn btn-ghost" style="margin-top:8px" onclick="qcExit()">بستن</button>'
          :'<button class="btn btn-primary" onclick="qcExit()">بستن</button>'}
  </div>`;
}

async function qcExit(){
  await qcFlush();
  QC_STATE=null;
  closeSheet();
  renderTrades(); renderStudentDashboard();
}

// ══════════════════════════════════════════════════════
// کیفیت خروج — MFE / MAE (v19)
//
// ژورنال فقط نقطه‌ی ورود و خروج را می‌داند. سرور از کندل تاریخی درمی‌آورد که
// در طول باز بودن پوزیشن، قیمت تا کجا به نفع (MFE) و تا کجا به ضرر (MAE) رفت.
// اینجا آن اعداد را می‌گیریم و به یک جمله‌ی قابل‌فهم تبدیل می‌کنیم.
// ══════════════════════════════════════════════════════
let XQ = { map:{}, loaded:false, busy:false, pending:0, failed:0 };

// لحظه‌ی باز و بسته شدن. تریدهای تازه openMs/closeMs دارند؛ قدیمی‌ها را از
// تاریخ و ساعت می‌سازیم و اگر ساعتِ خروج نداریم، تا پایان همان روز را می‌گیریم.
function xqWindow(t){
  const day = d => { const m=String(d||'').match(/^(\d{4})-(\d{2})-(\d{2})$/); return m?Date.UTC(+m[1],+m[2]-1,+m[3]):null };
  const at = (d,hhmm) => { const b=day(d); if(b==null)return null;
    const m=String(hhmm||'').match(/^(\d{1,2}):(\d{2})$/); return m?b+(+m[1])*3600000+(+m[2])*60000:b };
  const start = Number(t.openMs)>0 ? Number(t.openMs) : at(t.date,t.time);
  let end = Number(t.closeMs)>0 ? Number(t.closeMs) : at(t.exitDate||t.date, t.exitTime);
  if(start==null) return null;
  // بدون ساعتِ خروج، تا پایان روزِ خروج را در نظر می‌گیریم
  if(end==null || end<=start) end=(day(t.exitDate||t.date)??start)+86399000;
  if(end<=start) end=start+3600000;
  return { startMs:start, endMs:Math.min(end, Date.now()) };
}

function xqEligible(){
  return TRADES.filter(t=>{
    if(t._deleted) return false;
    if(!t.exit||!(+t.entry>0)||!(+t.exit>0)) return false;   // فقط معاملات بسته‌شده
    if(!/^[A-Za-z0-9]{2,12}$/.test(String(t.coin||''))) return false;
    return !!xqWindow(t);
  });
}

async function loadExcursions(){
  if(!SESSION||SESSION.role!=='student'||XQ.busy) return;
  XQ.busy=true;
  try{
    const r=await apiFetch('/api/excursions');
    if(r&&r.ok){ const d=await r.json();
      XQ.map={}; for(const e of d.excursions||[]) XQ.map[e.id]=e;
      XQ.loaded=true; }
  }catch(_){ }finally{ XQ.busy=false }
  XQ.pending=xqEligible().filter(t=>!XQ.map[t.id]).length;
}

// دسته‌ای، چون هر ترید یک درخواست کندل می‌خواهد و اینترنت اینجا کند است.
async function computeExcursions(){
  if(!SESSION||SESSION.role!=='student'||SESSION.isViewOnly){
    alert('این محاسبه فقط از حساب خودِ دانشجو انجام می‌شود.');return;
  }
  if(XQ.busy) return;
  const todo=xqEligible().filter(t=>!XQ.map[t.id]);
  if(!todo.length){ showToast('همه‌ی معاملات قبلاً تحلیل شده‌اند'); return }
  XQ.busy=true; XQ.failed=0; renderStudentDashboard();
  let done=0;
  try{
    for(let i=0;i<todo.length;i+=25){
      const chunk=todo.slice(i,i+25).map(t=>{
        const w=xqWindow(t);
        return { id:t.id, symbol:String(t.coin).toUpperCase(), direction:t.direction,
                 entry:+t.entry, exit:+t.exit, startMs:w.startMs, endMs:w.endMs };
      });
      showToast(`⏳ تحلیل ${faNum(Math.min(i+chunk.length,todo.length))} از ${faNum(todo.length)} معامله…`);
      const r=await apiFetch('/api/excursions',{method:'POST',body:JSON.stringify({trades:chunk})});
      if(!r||!r.ok) throw new Error('compute_failed');
      const d=await r.json();
      for(const id of Object.keys(d.results||{})){ XQ.map[id]=d.results[id]; done++ }
      XQ.failed+=(d.skipped||[]).length;
      renderStudentDashboard();
    }
    showToast(done?`✅ ${faNum(done)} معامله تحلیل شد`:'هیچ داده‌ی قیمتی پیدا نشد');
  }catch(e){ showToast('تحلیل ناتمام ماند — اتصال را بررسی کن و دوباره بزن') }
  finally{ XQ.busy=false; XQ.pending=xqEligible().filter(t=>!XQ.map[t.id]).length; renderStudentDashboard() }
}

function xqStats(){
  const rows=xqEligible().map(t=>XQ.map[t.id]).filter(Boolean);
  if(!rows.length) return null;
  const withMove=rows.filter(e=>e.mfePct>0.05&&e.capturePct!=null);
  const avgCapture=withMove.length?withMove.reduce((a,e)=>a+e.capturePct,0)/withMove.length:0;
  const winners=rows.filter(e=>e.resultPct>0), losers=rows.filter(e=>e.resultPct<=0);
  // «زود فروختی»: حرکت معناداری بود ولی کمتر از یک‌سومش گرفته شد
  const early=withMove.filter(e=>e.capturePct<34&&e.mfePct>=1.5);
  // «تا لبه‌ی پرتگاه»: برنده‌ای که اول بدجور در ضرر رفته بود
  const risky=winners.filter(e=>e.maePct<=-2);
  // «نزدیک بود برگردد»: بازنده‌ای که به نفع رفته بود ولی بی‌سود بسته شد
  const gaveBack=losers.filter(e=>e.mfePct>=1.5);
  const avgMae=rows.reduce((a,e)=>a+e.maePct,0)/rows.length;
  return { n:rows.length, avgCapture, avgMae, early, risky, gaveBack, winners:winners.length };
}

const xqPct = v => `${v<0?'−':''}${faNum(Math.abs(v).toFixed(1))}٪`;
function xqColor(c){ return c>=60?'var(--green)':c>=35?'var(--gold)':'var(--red)' }

function xqBar(label,value,max,color){
  const w=Math.max(2,Math.min(100,Math.abs(value)/max*100));
  return `<div class="xq-row"><span>${label}</span><div class="xq-bar"><i style="width:${w}%;background:${color}"></i></div><b>${xqPct(value)}</b></div>`;
}

function exitQualityCard(){
  if(SESSION?.role!=='student'&&!SESSION?.isViewOnly) return '';
  const eligible=xqEligible();
  if(!eligible.length) return '';
  const st=xqStats();

  if(!st){
    return `<div class="card fade-up xq-card">
      <div class="card-title">🎯 کیفیت خروج</div>
      <div style="font-size:11.5px;color:var(--text2);line-height:2">
        ژورنال می‌داند کجا خریدی و کجا فروختی — ولی نمی‌داند بین آن دو، قیمت تا کجا به نفعت رفت.
        با یک بار تحلیل، برای هر معامله می‌فهمی <b>چند درصد از حرکتی که در دسترس بود را گرفتی</b>.
      </div>
      ${SESSION?.isViewOnly?'':`<button class="btn btn-ghost xq-cta" ${XQ.busy?'disabled':''} onclick="computeExcursions()">
        ${XQ.busy?'در حال تحلیل…':`تحلیل ${faNum(eligible.length)} معامله`}</button>`}
    </div>`;
  }

  const c=Math.round(st.avgCapture);
  const col=xqColor(c);
  const lines=[];
  if(st.early.length) lines.push(`در <b>${faNum(st.early.length)}</b> معامله زودتر از موعد بستی — به‌طور میانگین بیشترِ حرکت روی میز ماند.`);
  if(st.risky.length) lines.push(`<b>${faNum(st.risky.length)}</b> معامله‌ی برنده اول بدجور در ضرر رفته بود؛ سود گرفتی ولی مسیرش پرریسک بود.`);
  if(st.gaveBack.length) lines.push(`<b>${faNum(st.gaveBack.length)}</b> معامله در سود بود و بی‌سود بسته شد.`);
  if(!lines.length) lines.push('الگوی مشکل‌داری در خروج‌هایت پیدا نشد — این یعنی خروج‌هایت منظم است.');

  return `<div class="card fade-up xq-card">
    <div class="card-title">🎯 کیفیت خروج</div>
    <div class="xq-top">
      <div class="xq-ring" style="background:conic-gradient(${col} ${c*3.6}deg,var(--dim) 0)">
        <div class="xq-ring-in"><span style="color:${col}">${faNum(c)}٪</span><small>گرفتی</small></div>
      </div>
      <div class="xq-lead">از حرکتی که در دسترس بود، به‌طور میانگین <b>${faNum(c)}٪</b> را برداشتی.<br>
        بر پایه‌ی <b>${faNum(st.n)}</b> معامله‌ی تحلیل‌شده.</div>
    </div>
    <div class="xq-mini">
      <div><small>زود بسته شده</small><b class="${st.early.length?'gold':''}">${faNum(st.early.length)}</b></div>
      <div><small>برنده‌ی پرریسک</small><b class="${st.risky.length?'red':''}">${faNum(st.risky.length)}</b></div>
      <div><small>میانگین بدترین افت</small><b class="red">${xqPct(st.avgMae)}</b></div>
    </div>
    <div class="xq-note">${lines.join('<br>')}</div>
    ${XQ.pending?`<div class="xq-pending">${faNum(XQ.pending)} معامله هنوز تحلیل نشده${SESSION?.isViewOnly?'':` — <a href="#" onclick="event.preventDefault();computeExcursions()" style="color:var(--gold)">تحلیل کن</a>`}</div>`:''}
    ${XQ.failed?`<div class="xq-pending">برای ${faNum(XQ.failed)} معامله داده‌ی قیمتی پیدا نشد (رمزارز خیلی قدیمی یا کم‌معامله).</div>`:''}
  </div>`;
}

// بخش «این معامله» در کارت جزئیات
function exitQualityForTrade(t){
  const e=XQ.map[t.id];
  if(!e) return '';
  const max=Math.max(Math.abs(e.mfePct),Math.abs(e.maePct),Math.abs(e.resultPct||0),0.5);
  const c=e.capturePct==null?null:Math.round(e.capturePct);
  return `<div class="xq-trade">
    <div class="qc-label" style="margin-bottom:2px">🎯 چه اتفاقی افتاد تا وقتی باز بود</div>
    ${xqBar('بهترین جا (MFE)',e.mfePct,max,'var(--green)')}
    ${xqBar('نتیجه‌ی واقعی',e.resultPct||0,max,(e.resultPct||0)>=0?'var(--gold)':'var(--red)')}
    ${xqBar('بدترین جا (MAE)',e.maePct,max,'var(--red)')}
    ${c==null?'':`<div class="xq-row"><span>کیفیت خروج</span><div class="xq-bar"><i style="width:${Math.max(2,c)}%;background:${xqColor(c)}"></i></div><b>${faNum(c)}٪</b></div>`}
  </div>`;
}

// ══════════════════════════════════════════════════════
// پلی‌بوک و پایبندی به قانون (v19)
//
// نمره‌ی دیسیپلین می‌گوید «چقدر خوب ژورنال می‌نویسی». این بخش یک قدم جلوتر
// می‌رود و می‌گوید «رعایت قانون چقدر برایت پول درآورد» — با مقایسه‌ی نتیجه‌ی
// معاملاتی که قوانین در آن‌ها رعایت شده با آن‌هایی که نشده.
// همه‌ی قوانین از داده‌ی موجود ارزیابی می‌شوند؛ دانشجو فرم اضافه‌ای پر نمی‌کند.
// ══════════════════════════════════════════════════════

// هر قانون: اگر روی این ترید معنا ندارد null برگردان تا در آمار حساب نشود.
// core یعنی در قضاوت «طبق پلن بود یا نه» شرکت می‌کند.
// «حجم در بودجه‌ی پله» عمداً core نیست: بودجه‌ی پله از ۳۰ دلار شروع می‌شود و
// تقریباً هر معامله‌ی واقعی از آن بزرگ‌تر است، پس اگر در قضاوت شرکت می‌کرد
// همه‌چیز «خارج از پلن» می‌شد و کارت بی‌معنا. اینجا فقط اطلاع‌رسانی است.
const PLAYBOOK_RULES = [
  { id:'stop',    core:true,  label:'حد ضرر مشخص بود',        test:t => hasDefinedRisk(t) },
  { id:'rr',      core:true,  label:`R:R دست‌کم ۱:${faNum(RR_MIN)} (زیر ۱ ساعت ۱:${faNum(RR_MIN_INTRADAY).replace('.','٫')})`, test:t => { const r=calcRR(t); return r==null?null:+r>=rrMinFor(t.timeframe)-1e-6 } },
  { id:'reason',  core:true,  label:'دلیل ورود کافی',   test:t => principleCounts(t).entry>=needFor(t).entry },
  { id:'slWhy',   core:true,  label:`دلیل حد ضرر ${faNum(ENTRY_PRINCIPLES.sl)}+`,  test:t => _rc(t.slReasons)>=needFor(t).sl },
  { id:'tpWhy',   core:true,  label:`دلیل حد سود ${faNum(ENTRY_PRINCIPLES.tp)}+`,  test:t => _rc(t.tpReasons)>=needFor(t).tp },
  // v26.9: همان سقفِ دوره (۲×) برای حسابِ دوره؛ ژورنالِ شخصیِ مدیر و اعضای عمومی ۱۰×
  { id:'lev',     core:true,  get label(){ return `اهرم حداکثر ${faNum(planLevMax())}×`; }, test:t => (+t.leverage||1)<=planLevMax() },
  { id:'revenge', core:true,  label:'انتقام‌گیری نبود',         test:t => t._notRevenge },
  { id:'size',    core:false, label:'حجم در بودجه‌ی پله',       test:t => t._sizeOk }
];
const PLAYBOOK_CORE = PLAYBOOK_RULES.filter(r=>r.core).map(r=>r.id);

// «انتقام‌گیری»: معامله‌ای که خیلی زود بعد از یک ضرر باز شده.
// «حجم»: بیش از سقف بودجه‌ی پله‌ی فعلی دانشجو نباشد.
const REVENGE_WINDOW_MS = 30*60*1000;
function pbAnnotate(list){
  const ms = t => { const m=String(t.date||'').match(/^(\d{4})-(\d{2})-(\d{2})$/); if(!m)return null;
    const hm=String(t.time||'').match(/^(\d{1,2}):(\d{2})$/);
    return Number(t.openMs)>0?Number(t.openMs):Date.UTC(+m[1],+m[2]-1,+m[3],hm?+hm[1]:0,hm?+hm[2]:0) };
  // v25.14: روی کپی — قبلاً _notRevenge/_sizeOk روی خودِ تریدها می‌نشست و با ذخیره به داده می‌رفت
  const sorted=list.filter(t=>ms(t)!=null).map(t=>({...t})).sort((a,b)=>ms(a)-ms(b));
  let lastLossAt=null;
  // بودجه‌ی پله بر اساس تعداد تریدهای ثبت‌شده تعیین می‌شود (همان چیزی که
  // داشبورد نشان می‌دهد)، پس همان ورودی را می‌دهیم.
  const budget=(typeof currentBudget==='function')?currentBudget(TRADES.filter(t=>!t._deleted).length):null;
  for(const t of sorted){
    const at=ms(t);
    t._notRevenge = lastLossAt==null ? true : (at-lastLossAt)>REVENGE_WINDOW_MS;
    t._sizeOk = budget&&budget>0 ? (+t.size||0)<=budget*1.05 : null;
    const p=t.exit?calcPnl(t):null;
    if(p!=null&&p<0) lastLossAt=at;
  }
  return sorted;
}

function pbEvaluate(t){
  const out={};
  for(const r of PLAYBOOK_RULES){ try{ out[r.id]=r.test(t) }catch(_){ out[r.id]=null } }
  return out;
}

// یک ترید وقتی «طبق پلن» است که هیچ قانونِ قابل‌ارزیابی‌ای نقض نشده باشد
// و حداقل دو قانون قابل ارزیابی بوده باشد (وگرنه قضاوت بی‌پایه است).
function pbFollowed(ev){
  const vals=PLAYBOOK_CORE.map(id=>ev[id]).filter(v=>v!==null);
  if(vals.length<2) return null;
  return vals.every(Boolean);
}

function planLevMax(){ return isCourseAccount() && !ownerJournal() ? LEVERAGE_MAX : 10; }
function playbookStats(){
  // معامله‌ی واردشده‌ای که دانشجو هنوز دستش نزده، «خارج از پلن» نیست —
  // فقط هنوز ژورنال نشده. قضاوتش نتیجه را بی‌معنا می‌کند.
  const closed=TRADES.filter(t=>!t._deleted&&t.exit&&+t.entry>0&&+t.exit>0&&+t.size>0&&tradeTouched(t));
  if(closed.length<6) return null;
  const list=pbAnnotate(closed);
  const rows=list.map(t=>{ const ev=pbEvaluate(t); return { t, ev, followed:pbFollowed(ev), pnl:calcPnl(t) } })
                 .filter(r=>r.pnl!=null&&r.followed!==null);
  if(rows.length<6) return null;

  const group=f=>{ const g=rows.filter(r=>r.followed===f);
    if(!g.length) return null;
    const wins=g.filter(r=>r.pnl>0).length;
    const net=g.reduce((a,r)=>a+r.pnl,0);
    return { n:g.length, winRate:wins/g.length*100, net, avg:net/g.length } };
  const ok=group(true), bad=group(false);

  const perRule=PLAYBOOK_RULES.map(r=>{
    const rel=rows.filter(x=>x.ev[r.id]!==null);
    if(!rel.length) return null;
    const kept=rel.filter(x=>x.ev[r.id]);
    const broke=rel.filter(x=>!x.ev[r.id]);
    const avg=g=>g.length?g.reduce((a,x)=>a+x.pnl,0)/g.length:null;
    return { id:r.id, label:r.label, core:!!r.core, rate:kept.length/rel.length*100,
             n:rel.length, broke:broke.length, avgKept:avg(kept), avgBroke:avg(broke) };
  }).filter(Boolean);

  const byStrategy={};
  for(const r of rows){
    const k=(r.t.strategy||'').trim()||'بدون استراتژی';
    (byStrategy[k] ||= []).push(r);
  }
  const strategies=Object.entries(byStrategy)
    .filter(([,g])=>g.length>=3)
    .map(([name,g])=>({ name, n:g.length,
      winRate:g.filter(r=>r.pnl>0).length/g.length*100,
      adherence:g.filter(r=>r.followed).length/g.length*100,
      net:g.reduce((a,r)=>a+r.pnl,0) }))
    .sort((a,b)=>b.net-a.net);

  return { total:rows.length, ok, bad, perRule, strategies };
}

function playbookCard(){
  const st=playbookStats();
  if(!st) return '';
  const { ok, bad }=st;

  let verdict;
  if(!bad) verdict='در همه‌ی معاملات تحلیل‌شده طبق پلن عمل کرده‌ای — این خودش یک دستاورد است.';
  else if(!ok) verdict='هنوز معامله‌ای نداری که همه‌ی قوانین در آن رعایت شده باشد؛ با یکی شروع کن.';
  else {
    const dw=ok.winRate-bad.winRate, da=ok.avg-bad.avg;
    if(dw>=5||da>0) verdict=`وقتی طبق پلن عمل کردی، نرخ بردت <b>${faNum(Math.abs(Math.round(dw)))}٪</b> ${dw>=0?'بالاتر':'پایین‌تر'} بوده و هر معامله به‌طور میانگین <b>${fmtUSD(da)}</b> بهتر درآمده.`;
    else verdict='فعلاً تفاوت معناداری بین معاملات طبق پلن و خارج از پلن دیده نمی‌شود — با معاملات بیشتر روشن‌تر می‌شود.';
  }

  const side=(g,title,sub,col)=>g?`<div class="pb-side"><small>${title}</small>
      <b style="color:${col}">${faNum(Math.round(g.winRate))}٪</b>
      <span>${faNum(g.n)} معامله · ${fmtUSD(g.avg)} میانگین</span></div>`
    :`<div class="pb-side"><small>${title}</small><b style="color:var(--muted)">—</b><span>${sub}</span></div>`;

  const ruleRow=r=>{
    // قانونِ اطلاع‌رسانی در نمره نمی‌آید، پس رنگ هشدار هم نمی‌گیرد
    const col=!r.core?'var(--muted)':r.rate>=75?'var(--green)':r.rate>=45?'var(--gold)':'var(--red)';
    // هزینه فقط وقتی معنا دارد که شکستن قانون واقعاً بدتر تمام شده باشد؛
    // عدد مثبت کنار کلمه‌ی «شکستن» پیام وارونه می‌دهد.
    let sub='';
    if(!r.core) sub='فقط اطلاع‌رسانی — در نمره حساب نمی‌شود';
    else if(r.broke>0&&r.avgKept!=null&&r.avgBroke!=null&&r.avgBroke<r.avgKept)
      sub=`شکستن این قانون به‌طور میانگین ${fmtUSD(Math.abs(r.avgBroke-r.avgKept),false)} برایت خرج داشته`;
    else if(r.broke>0) sub=`${faNum(r.broke)} بار رعایت نشده`;
    return `<div class="pb-rule ${r.core?'':'info'}">
      <span><b>${r.label}</b>${sub?`<em>${sub}</em>`:''}</span>
      <div class="pb-bar"><i style="width:${Math.max(2,Math.round(r.rate))}%;background:${col}"></i></div>
      <b style="color:${col}">${faNum(Math.round(r.rate))}٪</b></div>`;
  };

  return `<div class="card fade-up pb-card">
    <div class="card-title">📘 پایبندی به پلن</div>
    <div class="pb-split">
      ${side(ok,'طبق پلن','هنوز نداری','var(--green)')}
      <div class="pb-vs">در برابر</div>
      ${side(bad,'خارج از پلن','هیچ‌کدام','var(--red)')}
    </div>
    <div class="pb-verdict">${verdict}</div>
    <div class="pb-head">هر قانون چقدر رعایت شده</div>
    <div class="pb-rules">${st.perRule.map(ruleRow).join('')}</div>
    ${st.strategies.length?`<div class="pb-head">پلی‌بوک‌ها</div>
      <div class="pb-strat-head"><span>استراتژی</span><span>سود/زیان</span><span>نرخ برد</span></div>
      <div class="pb-strat">${st.strategies.map(x=>`<div class="pb-strat-row">
        <span><b>${esc(x.name)}</b><em>${faNum(x.n)} معامله · پایبندی ${faNum(Math.round(x.adherence))}٪</em></span>
        <b style="color:${x.net>=0?'var(--green)':'var(--red)'}">${fmtUSD(x.net)}</b>
        <b style="color:var(--text2)">${faNum(Math.round(x.winRate))}٪</b></div>`).join('')}</div>`:''}
  </div>`;
}

// نوار قوانین در کارت جزئیات یک معامله
function playbookForTrade(t){
  if(!t.exit||!(+t.entry>0)) return '';
  pbAnnotate(TRADES.filter(x=>!x._deleted&&x.exit));
  const ev=pbEvaluate(t);
  const chips=PLAYBOOK_RULES.map(r=>{
    const v=ev[r.id];
    const cls=v===null?'pb-na':(v?'pb-ok':'pb-no');
    const mark=v===null?'—':(v?'✓':'✕');
    return `<span class="pb-chip ${cls}">${mark} ${r.label}</span>`;
  }).join('');
  return `<div class="pb-trade">${chips}</div>`;
}

// ══════════════════════════════════════════════════════
// مقایسه با هم‌کلاسی‌ها (v19)
//
// یک عدد تنها معنا ندارد: «۲۵٪ کیفیت خروج» بد است یا عادی؟ وقتی میانه‌ی کلاس
// کنارش بیاید، تبدیل به یک درس می‌شود. سرور فقط آمار تجمعی می‌دهد و هرگز
// عدد یا نام دانشجوی دیگری را به دانشجو نشان نمی‌دهد.
// ══════════════════════════════════════════════════════
let COHORT = { data:null, loaded:false, busy:false };

// هر معیار سه متن دارد: جمله‌ی هنجار (وقتی عقب است)، جمله‌ی تأیید (وقتی خوب
// است) و نحوه‌ی نمایش عدد. عمداً «رتبه» و «درصد کلاس» جایی نوشته نمی‌شود.
//
// چرا جمله‌ی تأیید لازم است: اگر به کسی که بهتر از میانگین است فقط بگویی
// «تو بالاتری»، عملکردش به سمت میانگین افت می‌کند. تأیید صریح جلوی این را
// می‌گیرد. به همین دلیل همیشه یک نکته‌ی مثبت هم نشان داده می‌شود.
const COHORT_LABELS = {
  stopRate: { fa:'حد ضرر', fmt:v=>faNum(Math.round(v))+'٪ از معاملات',
    norm:'بیشتر بچه‌های کلاس روی هر معامله حد ضرر می‌گذارند.',
    good:'روی معاملاتت حد ضرر می‌گذاری — مثل بیشتر کلاس. همین را نگه دار.' },
  principleRate: { fa:'اصول ورود', fmt:v=>faNum(Math.round(v))+'٪ از معاملات',
    norm:'بیشتر کلاس قبل از ورود، دلیل ورود و دلیل حد ضرر و حد سودشان را مشخص می‌کنند.',
    good:'اصول ورود را رعایت می‌کنی — دلیل ورود و حد ضرر و حد سودت مشخص است.' },
  avgCapture: { fa:'کیفیت خروج', fmt:v=>faNum(Math.round(v))+'٪ از حرکت',
    norm:'بیشتر کلاس بخش بزرگ‌تری از حرکتی که در دسترس بوده را می‌گیرند.',
    good:'خروج‌هایت تمیز است — بخش خوبی از حرکت را برمی‌داری.' },
  avgMae: { fa:'افت قبل از خروج', fmt:v=>(v<0?'−':'')+faNum(Math.abs(v).toFixed(1))+'٪',
    norm:'بیشتر کلاس با افت کمتری از معامله بیرون می‌آیند.',
    good:'معاملاتت کمتر از بقیه در ضرر فرو می‌روند.' },
  tradesPerWeek: { fa:'تعداد معامله', fmt:v=>faNum(v.toFixed(1))+' در هفته',
    norm:'بیشتر کلاس هفته‌ای خیلی کمتر از تو وارد بازار می‌شوند.',
    good:null }   // «کم معامله کردن» تحسین ندارد؛ نه خوب است نه بد
};

async function loadCohort(){
  if(!SESSION||COHORT.busy) return;
  COHORT.busy=true;
  try{
    const r=await apiFetch('/api/cohort');
    if(r&&r.ok){ COHORT.data=await r.json(); COHORT.loaded=true }
  }catch(_){ }finally{ COHORT.busy=false }
}

// وضعیت هر عادت نسبت به «باند معمول» کلاس (بین چارک اول و سوم).
// عمداً از میانه به‌عنوان خط قبولی استفاده نمی‌کنیم: طبق تعریف همیشه نصف کلاس
// زیر میانه است، و آن یعنی نصف دانشجوها همیشه پیام «عقبی» بگیرند.
function cohortStatus(key,x){
  if(x.me==null||x.p25==null||x.p75==null) return null;
  if(x.better==='mid'){
    // فقط «خیلی بیشتر از بقیه» هشدار دارد؛ کم‌معامله بودن مشکل نیست
    return x.me > Math.max(x.p75*2, x.p75+1) ? 'look' : 'ok';
  }
  // «قابل بهبود» فقط برای کسی که واقعاً از باند معمول کلاس بیرون افتاده،
  // ولی «تأیید» سخاوتمندانه‌تر: هر کس بالای معمول کلاس باشد باید بشنود که
  // خوب عمل می‌کند — وگرنه کسی که خوب کار می‌کند هیچ بازخورد مثبتی نمی‌گیرد
  // و به سمت میانگین افت می‌کند.
  if(x.me < x.p25) return 'look';
  if(x.me > x.median) return 'good';
  return 'ok';
}

function cohortCard(){
  if(SESSION?.role!=='student') return '';
  // فضای شخصی منتور عمداً هیچ ربطی به آمار کلاس ندارد
  if(isPersonalMode()) return '';
  const d=COHORT.data;
  if(!d) return '';
  if(!d.available){
    return `<div class="card fade-up ch-card"><div class="card-title">👥 عادت‌های کلاس</div>
      <div style="font-size:11.5px;color:var(--text2);line-height:2">
        وقتی حداقل ${faNum(d.need||3)} دانشجو معامله‌ی کافی ثبت کرده باشند، اینجا می‌بینی کدام عادت‌هایت
        با بقیه‌ی کلاس فاصله دارد — بدون اینکه نام یا آمار کسی دیده شود.</div></div>`;
  }
  const m=d.metrics||{};
  const scored=[];
  for(const key of Object.keys(COHORT_LABELS)){
    const x=m[key]; if(!x) continue;
    const st=cohortStatus(key,x); if(!st) continue;
    // فاصله بر حسب پهنای باند معمول کلاس، تا معیارها با هم قابل مقایسه باشند
    const spread=Math.abs(x.p75-x.p25)||Math.abs(x.median)||1;
    scored.push({ key, x, st, gap:Math.abs(x.me-x.median)/spread });
  }
  if(!scored.length) return '';

  // حداکثر دو مورد برای بهبود — نه یک تابلوی امتیاز شش‌ردیفه
  const allLook=scored.filter(v=>v.st==='look').sort((a,b)=>b.gap-a.gap);
  const good=scored.filter(v=>v.st==='good'&&COHORT_LABELS[v.key].good).sort((a,b)=>b.gap-a.gap)[0];
  // اگر دانشجو در هیچ عادتی بالاتر از معمول نیست (معمولاً تازه‌کار)، فقط یک
  // مورد نشان بده. فهرست کردن همه‌ی ضعف‌ها برای کسی که هیچ نقطه‌ی قوتی
  // نمایش داده نشده، دقیقاً همان چیزی است که باعث رهاکردن ژورنال می‌شود.
  const look=good?allLook.slice(0,2):allLook.slice(0,1);

  const item=(v,kind)=>{
    const L=COHORT_LABELS[v.key];
    return `<div class="ch-item ${kind}">
      <span class="ch-ico">${kind==='good'?'✅':'🔎'}</span>
      <div class="ch-body">
        <div class="ch-norm">${kind==='good'?L.good:L.norm}</div>
        <div class="ch-nums">${esc(L.fa)} — تو: <b>${L.fmt(v.x.me)}</b> · معمولِ کلاس: <b>${L.fmt(v.x.median)}</b></div>
      </div></div>`;
  };

  const encourage=`<div class="ch-item good"><span class="ch-ico">🌱</span><div class="ch-body">
      <div class="ch-norm">همین یک عادت را درست کن؛ لازم نیست همه‌چیز را با هم عوض کنی.
        بیشترِ کلاس هم از همین‌جا شروع کردند.</div></div></div>`;
  let body;
  if(look.length) body=look.map(v=>item(v,'look')).join('')+(good?item(good,'good'):encourage);
  else if(good) body=item(good,'good');
  else body=`<div class="ch-item good"><span class="ch-ico">✅</span><div class="ch-body">
      <div class="ch-norm">عادت‌هایت با بقیه‌ی کلاس هم‌خوان است — چیز خاصی برای اصلاح پیدا نشد.</div></div></div>`;

  return `<div class="card fade-up ch-card">
    <div class="card-title">👥 عادت‌های کلاس</div>
    ${body}
    <div class="ch-why">این مقایسه درباره‌ی <b>عادت‌هاست، نه نتیجه‌ها</b>. نتیجه به سبک و شانس هم بستگی دارد،
      ولی این عادت‌ها کاملاً دست خودت است و از فردا می‌شود عوضشان کرد.</div>
    <div class="ch-foot">بر پایه‌ی ${faNum(d.students)} دانشجو · بدون نام و بدون آمار شخصی هیچ‌کس · اینجا رتبه‌بندی نیست.</div>
  </div>`;
}

// نمای استاد: چه کسی به کمک نیاز دارد
function cohortMentorCard(){
  const d=COHORT.data;
  if(!d||!d.available||!Array.isArray(d.perStudent)) return '';
  const med=k=>d.metrics[k]?d.metrics[k].median:null;
  const name=uid=>{const r=ROSTER();return r[uid]&&r[uid].name?r[uid].name:uid;};

  // هر برچسب عدد خودش را همراه دارد، وگرنه معلوم نیست «نمی‌نویسد» یعنی چقدر
  const pc=v=>faNum(Math.round(v))+'٪';
  const flags=[];
  for(const p of d.perStudent){
    const f=[];
    if(p.avgCapture!=null&&med('avgCapture')!=null&&p.avgCapture<med('avgCapture')*0.6)
      f.push(`زود می‌بندد — فقط ${pc(p.avgCapture)} حرکت`);
    if(p.stopRate!=null&&p.stopRate<50)
      f.push(`حد ضرر فقط در ${pc(p.stopRate)} معاملات`);
    if(p.principleRate!=null&&p.principleRate<40)
      f.push(`اصول ورود فقط در ${pc(p.principleRate)} معاملات`);
    if(p.tradesPerWeek!=null&&med('tradesPerWeek')&&p.tradesPerWeek>med('tradesPerWeek')*2)
      f.push(`اورترید — ${faNum(p.tradesPerWeek.toFixed(1))} در هفته (کلاس ${faNum(med('tradesPerWeek').toFixed(1))})`);
    if(f.length) flags.push({ uid:p.uid, f, p });
  }
  if(!flags.length) return '';
  return `<div class="card fade-up ch-card">
    <div class="card-title">👥 نیازمند توجه</div>
    <div style="font-size:10.5px;color:var(--muted);line-height:1.9;margin-bottom:10px">
      بر پایه‌ی مقایسه با میانه‌ی همین کلاس (${faNum(d.students)} دانشجو).
      «اصول ورود» یعنی ${faNum(3)} دلیل ورود، ${faNum(2)} دلیل حد ضرر و ${faNum(2)} دلیل حد سود.</div>
    ${flags.map(x=>`<div class="ch-mrow">
      <span><b style="color:var(--text)">${esc(name(x.uid))}</b>
        <div style="margin-top:4px;display:flex;gap:4px;flex-wrap:wrap">${x.f.map(t=>`<span class="ch-flag">${t}</span>`).join('')}</div></span>
      <b style="color:var(--text2)">${faNum(x.p.trades)} ترید</b></div>`).join('')}
  </div>`;
}

// ══════════════════════════════════════════════════════
// ژورنال شخصی منتور (v19.3)
//
// منتور هم تریدر است. این حالت دقیقاً همان ابزارهای دانشجو را می‌دهد، ولی
// روی رکورد خودش (__mentor__). سه تضمین:
//   ۱. این تریدها هرگز وارد آمار کلاس نمی‌شوند (سرور صریحاً کنارشان می‌گذارد)
//   ۲. هیچ دانشجویی نمی‌تواند کلید تریدهای منتور را بخواند
//   ۳. کارت «عادت‌های کلاس» در این حالت نشان داده نمی‌شود — این فضا شخصی است
//
// نکته: SESSION.role اینجا 'student' می‌شود تا همه‌ی ابزارهای دانشجویی باز
// شوند، ولی توکن سمت سرور همچنان منتور است و سرور داده را با uid محدود می‌کند.
// ══════════════════════════════════════════════════════
const MENTOR_UID='__mentor__';
const isPersonalMode = () => !!SESSION?.personal;

async function mentorPersonalJournal(){
  const back=L.g('sc_mentor_restore');
  if(!back) L.s('sc_mentor_restore', SESSION);
  TRADES = await loadTrades(MENTOR_UID);
  FEEDBACK = {};
  dashRange='all'; calOffset=0;
  XQ={ map:{}, loaded:false, busy:false, pending:0, failed:0 };
  COHORT={ data:null, loaded:false, busy:false };
  SESSION = { role:'student', uid:MENTOR_UID, name:'ژورنال شخصی من', isViewOnly:false, personal:true };
  dashPhase='all';

  document.getElementById('u-av').textContent='من';
  document.getElementById('u-nm').textContent='ژورنال شخصی';
  document.getElementById('nav-add').style.display='';
  document.getElementById('nav-mentor').style.display='none';
  document.getElementById('fab').style.display='';

  let b=document.getElementById('mentor-view-banner');
  if(!b){ b=document.createElement('div'); b.id='mentor-view-banner'; document.getElementById('app').prepend(b);
    document.getElementById('topbar').style.marginTop='44px'; }
  b.className='mp-banner';
  b.innerHTML='<span>🔒 ژورنال شخصی — فقط خودت می‌بینی</span>'+
    '<button onclick="mentorViewBack()">← بازگشت به پنل</button>';

  nav('dashboard', document.getElementById('nav-dashboard'));
  renderStudentDashboard(); renderTrades();
  loadExcursions().then(()=>renderStudentDashboard()).catch(()=>{});
  showToast('🔒 وارد ژورنال شخصی شدی — این داده‌ها کاملاً خصوصی است');
}

// کارتی که در پنل منتور، ورود به فضای شخصی را پیشنهاد می‌دهد
function mentorPersonalCard(){
  const n=(MENTOR_PERSONAL_COUNT==null)?null:MENTOR_PERSONAL_COUNT;
  return `<div class="card fade-up mp-card">
    <div class="card-title">🔒 ژورنال شخصی من</div>
    <div class="mp-lead">
      فضای خصوصی خودت با <b>همان ابزارها و هشدارهای دانشجوها</b>، ولی بدون محدودیت (سقف اهرم، قفل ماشین‌حساب): ثبت ترید، ورود از فایل و صرافی،
      کیفیت خروج، پایبندی به پلن، نمره دیسیپلین و هشدار قیمت.
      ${n!==null?`<br>الان <b>${faNum(n)}</b> ترید شخصی داری.`:''}
      <br><span style="color:var(--muted);font-size:10.5px">این تریدها در هیچ آمار کلاسی دیده نمی‌شوند و هیچ دانشجویی به آن‌ها دسترسی ندارد.</span>
    </div>
    <button class="btn btn-ghost xq-cta" onclick="mentorPersonalJournal()">ورود به ژورنال شخصی</button>
  </div>`;
}
let MENTOR_PERSONAL_COUNT=null;
async function loadMentorPersonalCount(){
  try{ const t=await loadTrades(MENTOR_UID); MENTOR_PERSONAL_COUNT=(t||[]).filter(x=>!x._deleted).length }
  catch(_){ MENTOR_PERSONAL_COUNT=null }
}

// لوگوی واقعی رمزارز (v19.4)
// حروف اولِ نماد همیشه رندر می‌شود و تصویر رویش می‌نشیند؛ اگر لوگو نیامد
// (رمزارز ناشناخته، اینترنت قطع، یا PWA آفلاین) تصویر حذف می‌شود و حروف اول
// می‌ماند — پس هیچ‌وقت تصویر شکسته دیده نمی‌شود. قاب همان .t-icon قبلی است.
function coinLogo(sym, style){
  const S=String(sym||'').toUpperCase();
  const slug=S.replace(/[^A-Z0-9]/g,'').toLowerCase();
  const init=esc(S.slice(0,3));
  const st=style?` style="${style}"`:'';
  if(!slug) return `<div class="t-icon coin-ico"${st}>${init}</div>`;
  return `<div class="t-icon coin-ico"${st}>${init}`+
    `<img src="https://assets.coincap.io/assets/icons/${slug}@2x.png" alt="${esc(S)}" `+
    `loading="lazy" onerror="this.remove()"></div>`;
}

// قیمت زنده از سرور خودمان (v19.4)
// فرم هشدار قبلاً از یک جدول دموی هاردکدشده می‌خواند و قیمت کاملاً غلط نشان
// می‌داد (BTC=۱۱۷٬۸۴۲ در برابر قیمت واقعی ~۷۸٬۰۰۰). خطرناک بود، چون دانشجو
// هدف هشدارش را بر اساس همان عدد تعیین می‌کرد.
// کلاینت به OKX/بایننس دسترسی مستقیم ندارد (هم CSP، هم فیلترینگ)، پس از
// همان لایه‌ی چندمنبعی‌ای می‌گیرد که موتور هشدار روی سرور استفاده می‌کند.
const LIVE_PRICE_CACHE={};
const LIVE_PRICE_TTL=60000;
// v26.11: نمادهایی که سرور گفت قیمت ندارند (هیچ منبعی) — برای ردِ هشدارِ مرده
const LIVE_PRICE_MISSING = {};
async function livePrice(sym){
  const S=String(sym||'').toUpperCase();
  if(!/^[A-Z0-9]{1,12}$/.test(S)) return null;
  const hit=LIVE_PRICE_CACHE[S];
  if(hit&&Date.now()-hit.t<LIVE_PRICE_TTL) return hit.v;
  try{
    const r=await apiFetch('/api/prices?symbols='+encodeURIComponent(S));
    if(r&&r.ok){
      const d=await r.json();
      const v=Number(d?.prices?.[S]);
      if(Number.isFinite(v)&&v>0){ LIVE_PRICE_CACHE[S]={t:Date.now(),v}; delete LIVE_PRICE_MISSING[S]; return v }
      LIVE_PRICE_MISSING[S]=Date.now();      // سرور جواب داد ولی هیچ منبعی این نماد را ندارد
    }
  }catch(_){ }
  return null;
}


function openImportSheet(){
  if(!SESSION||SESSION.role!=='student'||SESSION.isViewOnly){
    alert('ورود معاملات از فایل، فقط از حساب خودِ دانشجو انجام می‌شود.');return;
  }
  IMPORT_STATE=null;
  document.getElementById('det-content').innerHTML=`
    <div class="bs-title">📥 ورود معاملات از فایل صرافی</div>
    <div class="imp-intro">
      از صرافی‌ات خروجی <b>CSV</b> بگیر (تاریخچه معاملات) و همین‌جا بارگذاری کن.
      ستون‌ها خودکار تشخیص داده می‌شوند و قبل از ثبت، پیش‌نمایش می‌بینی.
      <div class="imp-note">بایننس · بایبیت · OKX · هایپرلیکویید · نوبیتکس و هر صرافی دیگری که خروجی CSV بدهد. فایل اکسل را اول به CSV تبدیل کن.</div>
    </div>
    <label class="imp-drop" for="imp-file">
      <span class="imp-drop-ic">📄</span>
      <span>فایل CSV را انتخاب کن</span>
      <input id="imp-file" type="file" accept=".csv,.txt,text/csv" style="display:none" onchange="handleImportFile(this)"/>
    </label>
    <div id="imp-body"></div>`;
  document.getElementById('det-sheet').classList.add('open');
}

function handleImportFile(input){
  const file=input.files&&input.files[0]; if(!file)return;
  if(file.size>8*1024*1024){document.getElementById('imp-body').innerHTML='<div class="err-msg" style="display:block">فایل خیلی بزرگ است (بیشتر از ۸ مگابایت).</div>';return}
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const rows=parseCSV(String(reader.result||''));
      if(rows.length<2)throw new Error('فایل خالی است یا فقط سرستون دارد');
      const mapping=detectMapping(rows[0]);
      IMPORT_STATE={fileName:file.name,rows,headers:rows[0],mapping};
      recomputeImport();
    }catch(e){
      document.getElementById('imp-body').innerHTML=`<div class="err-msg" style="display:block">خواندن فایل ممکن نشد: ${esc(e.message||'')}</div>`;
    }
  };
  reader.onerror=()=>{document.getElementById('imp-body').innerHTML='<div class="err-msg" style="display:block">خواندن فایل ممکن نشد.</div>'};
  reader.readAsText(file,'utf-8');
}

function recomputeImport(){
  if(!IMPORT_STATE)return;
  const {rows,mapping}=IMPORT_STATE;
  let res;
  try{ res=buildTrades(rows,mapping); }
  catch(e){ res={trades:[],skipped:[{row:0,reason:e.message}],mode:'?',symbols:[]}; }
  IMPORT_STATE.result=res;
  IMPORT_STATE.plan=planImport(TRADES,res.trades);
  renderImportBody();
}

function setImportColumn(field,value){
  if(!IMPORT_STATE)return;
  const v=value===''?null:Number(value);
  if(v===null)delete IMPORT_STATE.mapping[field]; else IMPORT_STATE.mapping[field]=v;
  recomputeImport();
}

function renderImportBody(){
  const el=document.getElementById('imp-body'); if(!el||!IMPORT_STATE)return;
  const {headers,mapping,result,plan,fileName}=IMPORT_STATE;
  const modeLabel=result.mode==='closed'?'هر ردیف = یک معامله‌ی بسته‌شده':'هر ردیف = یک اجرا (پوزیشن‌ها بازسازی می‌شوند)';
  const sample=plan.fresh.slice(0,6);
  el.innerHTML=`
    <div class="imp-file">📄 ${esc(fileName)} · ${faNum(result.trades.length)} معامله شناسایی شد · ${esc(modeLabel)}</div>

    <div class="imp-stats">
      <div class="imp-stat"><b class="green">${faNum(plan.fresh.length)}</b><span>جدید</span></div>
      <div class="imp-stat"><b>${faNum(plan.duplicates.length)}</b><span>تکراری (رد می‌شود)</span></div>
      <div class="imp-stat"><b class="${result.skipped.length?'red':''}">${faNum(result.skipped.length)}</b><span>ردیف رد‌شده</span></div>
    </div>

    <details class="imp-map"><summary>تطبیق ستون‌ها ${Object.keys(mapping).length?'(خودکار انجام شد)':'— لازم است دستی انتخاب کنی'}</summary>
      <div class="imp-map-grid">
        ${IMPORT_FIELDS.map(([f,label,req])=>`
          <label class="imp-map-row">
            <span>${label}${req?' <b class="req">*</b>':''}</span>
            <select class="fi" onchange="setImportColumn('${f}',this.value)">
              <option value="">—</option>
              ${headers.map((h,i)=>`<option value="${i}" ${mapping[f]===i?'selected':''}>${esc(String(h).slice(0,30))}</option>`).join('')}
            </select>
          </label>`).join('')}
      </div>
    </details>

    ${sample.length?`<div class="imp-prev-title">پیش‌نمایش</div>
    <div class="imp-prev">
      <table>
        <thead><tr><th>تاریخ</th><th>نماد</th><th>جهت</th><th>ورود</th><th>خروج</th><th>نتیجه</th></tr></thead>
        <tbody>${sample.map(t=>`<tr>
          <td>${fmtDateFaShort(t.date)}</td><td>${esc(t.coin)}/${esc(t.pair)}</td>
          <td class="${t.direction==='Long'?'green':'red'}">${t.direction==='Long'?'خرید':'فروش'}</td>
          <td class="mono">${esc(t.entry)}</td><td class="mono">${t.exit?esc(t.exit):'—'}</td>
          <td>${t.result==='Open'?'باز':t.result==='Win'?'سود':t.result==='Loss'?'زیان':'سربه‌سر'}</td>
        </tr>`).join('')}</tbody>
      </table>
      ${plan.fresh.length>6?`<div class="imp-more">و ${faNum(plan.fresh.length-6)} معامله‌ی دیگر…</div>`:''}
    </div>`:''}

    ${result.skipped.length?`<details class="imp-skip"><summary>${faNum(result.skipped.length)} ردیف وارد نشد — چرا؟</summary>
      <ul>${result.skipped.slice(0,12).map(s=>`<li>ردیف ${faNum(s.row)}: ${esc(s.reason)}</li>`).join('')}</ul></details>`:''}

    <div class="imp-safe">🛡️ معاملاتی که خودت ثبت کرده‌ای دست‌نخورده می‌مانند و ورود تکراری هم ثبت نمی‌شود.</div>

    <button class="btn btn-primary" ${plan.fresh.length?'':'disabled'} onclick="confirmImport()">
      ${plan.fresh.length?`✅ ثبت ${faNum(plan.fresh.length)} معامله در ژورنال`:'معامله‌ی جدیدی برای ثبت نیست'}
    </button>`;
}

async function confirmImport(){
  if(!IMPORT_STATE||!IMPORT_STATE.plan.fresh.length)return;
  if(isMember()&&window.BILLING&&!BILLING.active()){ closeSheet(); BILLING.openPlans('write'); return; }
  const fresh=IMPORT_STATE.plan.fresh;
  showToast('⏳ در حال ثبت...');
  TRADES=mergeTrades(fresh,TRADES);
  const res=await saveTrades(SESSION.uid,TRADES);
  closeSheet();
  renderTrades(); renderStudentDashboard();
  showToast(res===true?`✅ ${faNum(fresh.length)} معامله وارد شد`:`💾 ${faNum(fresh.length)} معامله روی این دستگاه ذخیره شد — در اولین اتصال همگام می‌شود`);
  IMPORT_STATE=null;
}


// ══════════════════════════════════════════════════════
// اتصال صرافی (فقط-خواندنی، با آدرس کیف پول)
// ══════════════════════════════════════════════════════
// تنها صرافیِ قابل انتخاب. اتصال‌های قدیمیِ دیگر پاک نشده‌اند و همچنان
// همگام‌سازی می‌شوند؛ فقط نامشان در رابط کاربری نشان داده نمی‌شود.
const EXCHANGE_LIST = [
  { id:'sodex', name:'صرافی SoDEX', hint:'اسپات و پرپچوال · آدرس کیف پول EVM' }
];
const EXCHANGE_FALLBACK_NAME = 'کیف پول متصل';
let EX_STATE = { connections:[], positions:[], loading:false, loaded:false, busy:false };

async function loadExchangeConnections(){
  if(!SESSION||SESSION.role!=='student'||SESSION.isViewOnly)return;
  const r = await apiFetch('/api/exchange/connections');
  if(!r||!r.ok)return;
  const d = await r.json().catch(()=>({}));
  EX_STATE.connections = d.connections||[];
  EX_STATE.loaded = true;
}

async function refreshExchangePositions(){
  if(!EX_STATE.connections.length)return;
  const r = await apiFetch('/api/exchange/positions');
  if(!r||!r.ok)return;
  const d = await r.json().catch(()=>({}));
  EX_STATE.positions = d.positions||[];
}

function openExchangeSheet(){
  if(!SESSION||SESSION.role!=='student'||SESSION.isViewOnly){alert('اتصال صرافی فقط از حساب خودِ دانشجو انجام می‌شود.');return}
  document.getElementById('det-content').innerHTML=
    '<div class="bs-title">🔗 اتصال به صرافی</div>'+
    '<div id="ex-body"><div style="text-align:center;padding:26px;color:var(--muted);font-size:12px">در حال دریافت…</div></div>';
  document.getElementById('det-sheet').classList.add('open');
  loadExchangeConnections().then(renderExchangeSheet).catch(()=>renderExchangeSheet());
}

function renderExchangeSheet(){
  const el=document.getElementById('ex-body'); if(!el)return;
  const conns=EX_STATE.connections||[];
  el.innerHTML=`
    <div class="ex-safe">🔒 فقط <b>آدرس عمومی کیف پول</b> لازم است — نه کلید API، نه رمز. هیچ دسترسی‌ای برای معامله یا برداشت داده نمی‌شود.</div>
    ${conns.length?`<div class="ex-list">${conns.map(cn=>`
      <div class="ex-item ${cn.status==='error'?'bad':''}">
        <div class="ex-item-main">
          <b>${esc((EXCHANGE_LIST.find(x=>x.id===cn.exchange)||{}).name||EXCHANGE_FALLBACK_NAME)}</b>
          <span class="mono">${esc(cn.address.slice(0,10))}…${esc(cn.address.slice(-6))}</span>
          ${cn.status==='error'?`<em>آخرین همگام‌سازی ناموفق بود</em>`:cn.last_sync_at?`<em>آخرین همگام‌سازی: ${esc(String(cn.last_sync_at).slice(0,16))}</em>`:''}
        </div>
        <button class="btn btn-danger btn-sm" onclick="disconnectExchange('${cn.id}')">قطع</button>
      </div>`).join('')}</div>
      <button class="btn btn-primary" id="ex-sync" onclick="syncExchangeNow()">🔄 همگام‌سازی و ورود معاملات</button>
      <div class="ex-or">افزودن اتصال دیگر</div>`:''}
    <div class="fg" style="margin-top:8px">
      <div class="fl">صرافی</div>
      ${EXCHANGE_LIST.length>1
        ? `<select id="ex-name" class="fi">${EXCHANGE_LIST.map(x=>`<option value="${x.id}">${x.name} — ${x.hint}</option>`).join('')}</select>`
        : `<input type="hidden" id="ex-name" value="${EXCHANGE_LIST[0].id}">
           <div class="ex-one"><b>${esc(EXCHANGE_LIST[0].name)}</b><span>${esc(EXCHANGE_LIST[0].hint)}</span></div>`}
    </div>
    <div class="fg" style="margin-top:10px">
      <div class="fl">آدرس کیف پول <span class="req">*</span></div>
      <input id="ex-addr" class="fi mono" dir="ltr" placeholder="0x..." spellcheck="false"/>
    </div>
    <div id="ex-msg"></div>
    <button class="btn btn-primary" onclick="connectExchange()">اتصال</button>`;
}

async function connectExchange(){
  const exchange=document.getElementById('ex-name')?.value;
  const address=(document.getElementById('ex-addr')?.value||'').trim();
  const msg=document.getElementById('ex-msg');
  if(!/^0x[0-9a-fA-F]{40}$/.test(address)){msg.innerHTML='<div class="err-msg" style="display:block">آدرس معتبر نیست — باید با 0x شروع شود و ۴۲ کاراکتر باشد.</div>';return}
  if(!requireOnline('اتصال صرافی'))return;
  msg.innerHTML='<div class="ai-note">در حال بررسی آدرس در صرافی…</div>';
  const r=await apiFetch('/api/exchange/connections',{method:'POST',body:JSON.stringify({exchange,address})});
  if(!r||!r.ok){
    const d=r?await r.json().catch(()=>({})):{};
    msg.innerHTML=`<div class="err-msg" style="display:block">${esc(d.error==='exchange_unreachable'?'صرافی پاسخ نداد — بعداً دوباره تلاش کن.':d.error==='too_many_connections'?'حداکثر ۵ اتصال مجاز است.':apiErrMsg(r,'اتصال'))}</div>`;
    return;
  }
  const d=await r.json().catch(()=>({}));
  msg.innerHTML=`<div class="ex-ok">✅ متصل شد — ${faNum(d.probe?.fills||0)} اجرا و ${faNum(d.probe?.positions||0)} پوزیشن باز پیدا شد.</div>`;
  document.getElementById('ex-addr').value='';
  await loadExchangeConnections(); renderExchangeSheet();
  if(d.probe?.fills) syncExchangeNow();
}

async function disconnectExchange(id){
  if(!confirm('این اتصال قطع شود؟ معاملاتی که قبلاً وارد شده‌اند در ژورنال می‌مانند.'))return;
  const r=await apiFetch('/api/exchange/connections/'+id,{method:'DELETE'});
  if(!r||!r.ok){alert(apiErrMsg(r,'قطع اتصال'));return}
  await loadExchangeConnections(); renderExchangeSheet();
}

// اجراهای صرافی → تریدهای ژورنال (همان موتور و همان قوانین ادغام CSV)
async function syncExchangeNow(){
  if(EX_STATE.busy)return; EX_STATE.busy=true;
  const btn=document.getElementById('ex-sync'); if(btn){btn.disabled=true;btn.textContent='⏳ در حال همگام‌سازی...'}
  try{
    const last=L.g('sc_ex_last_sync_'+SESSION.uid);
    const since=last?Math.max(0,Number(last)-3*864e5):0;   // ۳ روز همپوشانی برای اطمینان
    const r=await apiFetch('/api/exchange/fills'+(since?`?since=${since}`:''));
    if(!r||!r.ok){alert(apiErrMsg(r,'همگام‌سازی'));return}
    const d=await r.json().catch(()=>({}));
    const built=buildTradesFromExchange(d.fills||[],{source:'exchange'});
    const plan=planImport(TRADES,built.trades);
    if(!plan.fresh.length){showToast('چیز جدیدی برای وارد کردن نبود');return}
    TRADES=mergeTrades(plan.fresh,TRADES);
    const res=await saveTrades(SESSION.uid,TRADES);
    L.s('sc_ex_last_sync_'+SESSION.uid,Date.now());
    closeSheet(); renderTrades(); renderStudentDashboard();
    showToast(res===true?`✅ ${faNum(plan.fresh.length)} معامله از صرافی وارد شد`:`💾 ${faNum(plan.fresh.length)} معامله روی این دستگاه ذخیره شد`);
  } finally {
    EX_STATE.busy=false;
    const b=document.getElementById('ex-sync'); if(b){b.disabled=false;b.textContent='🔄 همگام‌سازی و ورود معاملات'}
  }
}

// کارت پوزیشن‌های باز در داشبورد
function openPositionsCard(){
  const ps=EX_STATE.positions||[];
  if(!ps.length)return '';
  const total=ps.reduce((a,p)=>a+(Number(p.unrealizedPnl)||0),0);
  return `<div class="card fade-up" style="margin-bottom:12px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:8px;flex-wrap:wrap">
      <div class="card-title" style="margin:0">📡 پوزیشن‌های باز شما</div>
      <span style="font-family:var(--f-mono);font-size:14px;font-weight:700;color:${total>=0?'var(--green)':'var(--red)'}">${fmtUSD(total)}</span>
    </div>
    ${ps.map(p=>`<div class="op-row">
      <div class="op-sym"><b>${esc(p.coin)}</b><span class="badge ${p.direction==='Long'?'b-long':'b-short'}">${p.direction==='Long'?'خرید':'فروش'}</span>${p.leverage>1?`<em>${faNum(p.leverage)}×</em>`:''}</div>
      <div class="op-mid"><span>ورود</span><b class="mono">${p.entry!=null?compactNum(p.entry):'—'}</b></div>
      <div class="op-pnl ${(+p.unrealizedPnl)>=0?'green':'red'}">${fmtUSD(Number(p.unrealizedPnl)||0)}</div>
    </div>`).join('')}
    <div class="op-note">زنده از ${esc([...new Set(ps.map(p=>p.ex))].map(x=>(EXCHANGE_LIST.find(y=>y.id===x)||{}).name||x).join('، '))}</div>
  </div>`;
}
function compactNum(n){const a=Math.abs(n);return a>=1000?n.toFixed(2):a>=1?n.toFixed(4):n.toFixed(6)}

// ══════════════════════════════════════════════════════
// MENTOR
// ══════════════════════════════════════════════════════
function renderMentorDashboard(){
  // use already-loaded data (loaded on login or refresh)
  // if empty, reload
  if(!Object.keys(STUDENTS).length){
    loadStudents().then(async st=>{
      STUDENTS=st;
      for(const uid of Object.keys(st)){ALL_TRADES[uid]=await loadTrades(uid);}
      await loadVipTrades();
      _renderMentorDashboard();
    });
    document.getElementById('dash-content').innerHTML='<div style="text-align:center;padding:60px;color:var(--muted)"><div style="width:36px;height:36px;border:2px solid var(--border2);border-top-color:var(--gold);border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 16px"></div>در حال بارگذاری...</div>';
    return;
  }
  _renderMentorDashboard();
  // v19: مقایسه با کلاس برای پیدا کردن دانشجوهای نیازمند توجه
  if(!COHORT.loaded) loadCohort().then(()=>{ if(COHORT.data) _renderMentorDashboard(); }).catch(()=>{});
  // v19.3: تعداد تریدهای شخصی خودِ منتور
  if(MENTOR_PERSONAL_COUNT===null) loadMentorPersonalCount().then(()=>_renderMentorDashboard()).catch(()=>{});
}
// ── پنل منتور v21 ──────────────────────────────────────
// «نیازمند توجه» با سیگنال‌های عینی، نه با حدس.
function mentorSignals(uid){
  const all = (ALL_TRADES[uid] || []).filter(t => !t._deleted);
  const closed = all.filter(t => t.exit);
  const st = computeStats(closed, all);
  const flags = [];
  const days = (() => {
    const last = all.map(t => t.date).filter(Boolean).sort().pop();
    if(!last) return null;
    return Math.round((Date.now() - new Date(last + 'T00:00:00Z').getTime()) / 864e5);
  })();
  if(!all.length) flags.push({ t:'هنوز شروع نکرده', hard:true });
  else if(days != null && days >= 14) flags.push({ t:`${faNum(days)} روز بی‌فعالیت`, hard:true });
  else if(days != null && days >= 7)  flags.push({ t:`${faNum(days)} روز بی‌فعالیت`, hard:false });

  const d = st?.discipline;
  if(d && d.counted >= 5 && d.score < 45) flags.push({ t:`دیسیپلین ${faNum(d.score)}`, hard:true });
  else if(d && d.counted >= 5 && d.score < 65) flags.push({ t:`دیسیپلین ${faNum(d.score)}`, hard:false });
  if(d && d.counted >= 5 && d.parts.sl < 0.6)
    flags.push({ t:`حد ضرر فقط ${faNum(Math.round(d.parts.sl*100))}٪`, hard:true });
  // بایگانیِ دوره‌ی دفتر علامتِ بی‌انضباطی نیست و نباید دانشجو را
  // در فهرست «نیازمند توجه» ببرد؛ پس اینجا دیگر پرچم نمی‌شود.
  if(st && st.maxLossStreak >= 5) flags.push({ t:`${faNum(st.maxLossStreak)} باخت پشت‌سرهم`, hard:false });
  // v26.6: ترید بعد از رسیدن به سقفِ روزانه، در ۷ روزِ اخیر
  const since = new Date(Date.now() - 7 * 864e5).toISOString().slice(0, 10);
  const over = all.filter(t => t.afterLimit && (t.date || '') >= since).length;
  if(over) flags.push({ t:`${faNum(over)} ترید بعد از سقف روزانه`, hard: over >= 2 });

  return { all, closed, st, days, flags,
           weight: flags.reduce((a,f) => a + (f.hard ? 10 : 3), 0) };
}

function setMentorSort(k){ mentorSort = k; _renderMentorDashboard(); }

function mentorRows(){
  return Object.entries(ROSTER()).map(([uid, st]) => {
    const sig = mentorSignals(uid);
    return { uid, st, sig, pnl: sig.st?.total || 0,
             disc: sig.st?.discipline?.score ?? null, count: sig.all.length };
  });
}

function mentorAttention(rows){
  const flagged = rows.filter(r => r.sig.weight > 0).sort((a,b) => b.sig.weight - a.sig.weight);
  if(!flagged.length) return `<div class="mflag" style="border-color:rgba(45,208,138,.22);
    background:linear-gradient(155deg,rgba(34,201,122,.05),transparent 58%),var(--card)">
    <div class="mflag-t" style="color:var(--green)">همه‌ی دانشجوها در مسیرند</div>
    <div style="font-size:11px;color:var(--muted);line-height:1.9">
      هیچ‌کس بی‌فعالیت طولانی، دیسیپلین پایین یا استریک باخت ندارد.</div></div>`;
  return `<div class="mflag fade-up">
    <div class="mflag-t">نیازمند توجه <span>${faNum(flagged.length)}</span></div>
    ${flagged.slice(0, 6).map(r => `
      <div class="mfr" onclick="selectStudent('${r.uid}')">
        <div class="mfr-n"><b>${esc(r.st.name)}</b>
          <em>${faNum(r.count)} معامله${r.disc != null ? ` · دیسیپلین ${faNum(r.disc)}` : ''}</em></div>
        <div style="display:flex;gap:5px;flex-wrap:wrap;justify-content:flex-end">
          ${r.sig.flags.slice(0,2).map(f => `<span class="mtag${f.hard?'':' warn'}">${f.t}</span>`).join('')}
        </div>
      </div>`).join('')}
    ${flagged.length > 6 ? `<div style="font-size:10px;color:var(--muted);padding-top:9px">
      و ${faNum(flagged.length - 6)} نفر دیگر — در فهرست پایین</div>` : ''}
  </div>`;
}

function mentorList(rows){
  const opts = [['attention','نیازمند توجه'],['discipline','دیسیپلین'],['activity','فعالیت'],
                ['pnl','سود/زیان'],['name','نام']];
  const sorted = [...rows];
  if(mentorSort === 'pnl')             sorted.sort((a,b) => b.pnl - a.pnl);
  else if(mentorSort === 'discipline') sorted.sort((a,b) => (a.disc ?? 999) - (b.disc ?? 999));
  else if(mentorSort === 'activity')   sorted.sort((a,b) => (b.sig.days == null ? -1 : -b.sig.days) - (a.sig.days == null ? -1 : -a.sig.days));
  else if(mentorSort === 'name')       sorted.sort((a,b) => String(a.st.name).localeCompare(String(b.st.name), 'fa'));
  else                                 sorted.sort((a,b) => b.sig.weight - a.sig.weight);

  return `<div class="card fade-up">
    <div class="card-title">دانشجویان</div>
    <div class="msort">${opts.map(([k,l]) =>
      `<button class="${mentorSort===k?'on':''}" onclick="setMentorSort('${k}')">${l}</button>`).join('')}</div>
    ${sorted.length ? sorted.map(r => {
      const dc = r.disc == null ? 'var(--border2)' : r.disc >= 75 ? 'var(--green)' : r.disc >= 45 ? 'var(--gold)' : 'var(--red)';
      const ago = r.sig.days == null ? 'بدون فعالیت' : r.sig.days === 0 ? 'امروز' : `${faNum(r.sig.days)} روز پیش`;
      return `<div class="mrow" onclick="selectStudent('${r.uid}')">
        <div class="mrow-i"><b>${esc(r.st.name)}</b><em>${faNum(r.count)} معامله · ${ago}</em></div>
        <div class="mdisc"><i><s style="width:${r.disc ?? 0}%;background:${dc}"></s></i>
          <u>${r.disc == null ? '—' : faNum(r.disc)}</u></div>
        <div class="mrow-v"><b style="color:${!r.sig.closed.length?'var(--muted)':r.pnl>=0?'var(--green)':'var(--red)'}">${r.sig.closed.length?fmtUSD(r.pnl):'—'}</b>
          <s>${esc(r.uid)}</s></div>
      </div>`;
    }).join('') : '<div style="color:var(--muted);text-align:center;padding:18px;font-size:12px">هنوز دانشجویی ثبت نشده</div>'}
  </div>`;
}

function _renderMentorDashboard(){
  const flat=Object.values(ALL_TRADES).flat();
  const s=computeStats(flat);
  const el=document.getElementById('dash-content');
  const sorted=Object.entries(ROSTER()).map(([uid,st])=>{
    const tr=(ALL_TRADES[uid]||[]).filter(t=>t.exit);
    const ss=computeStats(tr,ALL_TRADES[uid]||[]);
    return{uid,st,ss,count:ALL_TRADES[uid]?.length||0,pnl:ss?.total||0};
  }).sort((a,b)=>b.pnl-a.pnl);

  // v14.2: شاخص‌های آکادمی
  const week=new Date(Date.now()-7*864e5).toISOString().slice(0,10);
  const active7=Object.values(ALL_TRADES).filter(arr=>(arr||[]).some(t=>(t.date||'')>=week)).length;
  const _dscores=Object.values(ALL_TRADES).map(a=>computeStats((a||[]).filter(t=>t.exit),a||[])).filter(Boolean).map(x=>x.discipline?.score||0);
  const discAvg=_dscores.length?Math.round(_dscores.reduce((a,b)=>a+b,0)/_dscores.length):0;

  const rows=mentorRows();
  const needing=rows.filter(r=>r.sig.weight>0).length;

  // ترتیب تازه: اول «چه کسی به کمک نیاز دارد»، بعد وضعیت کلی آکادمی.
  el.innerHTML=`
    <div class="mhero fade-up">
      <div class="mh"><u>دانشجو</u><b>${faNum(Object.keys(ROSTER()).length)}</b>
        <s>CIP ${faNum(Object.keys(STUDENTS).length)} · VIP ${faNum(Object.keys(VIPS).filter(u=>!STUDENTS[u]).length)} · ${faNum(flat.length)} معامله</s></div>
      <div class="mh"><u>فعال این هفته</u><b style="color:${active7?'var(--green)':'var(--muted)'}">${faNum(active7)}</b>
        <s>از ${faNum(Object.keys(ROSTER()).length)} نفر</s></div>
      <div class="mh"><u>دیسیپلین آکادمی</u><b style="color:${discAvg>=75?'var(--green)':discAvg>=45?'var(--gold)':'var(--red)'}">${faNum(discAvg)}</b>
        <s>میانگین از ۱۰۰</s></div>
      <div class="mh"><u>نیازمند توجه</u><b style="color:${needing?'var(--red)':'var(--green)'}">${faNum(needing)}</b>
        <s>${needing?'رسیدگی کن':'همه در مسیر'}</s></div>
    </div>

    ${mentorAttention(rows)}

    ${mentorList(rows)}

    ${mentorPersonalCard()}
    ${cohortMentorCard()}
    ${s?equityPro(s.equity, 'eqp-academy', 'منحنی کل آکادمی'):''}
    ${s?`${reasonWRSection(s.byEntryReason,'🔍 وین‌ریت هر دلیل ورود (کل)')}
    ${breakdownModule(s, () => Object.values(ALL_TRADES).flat())}`:''}`;
}

// ══════════════════════════════════════════════════════
// v13: ویرایشگر نظر استاد روی ترید (کلید جدید sc_feedback_<uid>)
// ══════════════════════════════════════════════════════
function openFeedbackEditor(uid,tradeId){
  const t=(ALL_TRADES[uid]||[]).find(x=>x.id===tradeId);
  const cur=MENTOR_FB.data[tradeId];
  document.getElementById('det-content').innerHTML=`
    <div class="bs-title">💬 نظر استاد${t?` — ${esc(t.coin)}/${esc(t.pair)} · ${fmtDateFaShort(t.date)}`:''}</div>
    <textarea id="fb-text" class="fi" rows="4" placeholder="نکته‌ای که این دانشجو باید از این ترید یاد بگیرد...">${esc(cur?cur.text:'')}</textarea>
    <div style="display:flex;gap:9px;margin-top:14px">
      <button class="btn btn-primary" style="flex:2;margin-top:0" onclick="saveFeedbackFromEditor('${uid}','${tradeId}')">💾 ذخیره نظر</button>
      ${cur?`<button class="btn btn-danger" style="flex:1" onclick="saveFeedbackFromEditor('${uid}','${tradeId}',true)">🗑️ حذف</button>`:''}
    </div>`;
  document.getElementById('det-sheet').classList.add('open');
}
async function saveFeedbackFromEditor(uid,tradeId,del=false){
  const text=del?'':(document.getElementById('fb-text')?.value||'');
  if(!del&&!text.trim()){showToast('⚠️ متن نظر خالی است');return}
  showToast('⏳ در حال ذخیره...');
  const fb=await saveFeedbackEntry(uid,tradeId,del?'':text);
  if(!fb){ savedOrWarn(false); return; }     // برگه باز می‌ماند تا متن از دست نرود
  MENTOR_FB={_uid:uid,_loaded:true,data:fb};
  closeSheet();
  showToast(del?'🗑️ نظر حذف شد':'✅ نظر برای دانشجو ثبت شد');
  renderMentorMain();
}

function selectStudent(uid){mentorSelected=uid;nav('mentor',document.querySelector('[data-screen="mentor"]'))}

function renderMentorMain(){
  const el=document.getElementById('mentor-content');
  if(mentorSelected){
    // v13: فیدبک‌های این دانشجو را (یک‌بار) از سرور بگیر
    if(MENTOR_FB._uid!==mentorSelected){
      MENTOR_FB={_uid:mentorSelected,_loaded:false,data:{}};
      loadFeedback(mentorSelected).then(fb=>{
        if(MENTOR_FB._uid===mentorSelected){MENTOR_FB={_uid:mentorSelected,_loaded:true,data:fb};renderMentorMain();}
      });
    }
    const st=ROSTER()[mentorSelected];
    const trades=ALL_TRADES[mentorSelected]||[];
    const s=computeStats(trades);
    if(MENTOR_HIST.uid!==mentorSelected) MENTOR_HIST={uid:mentorSelected,n:20};
    const hist=[...trades].sort(byDateDesc), shown=hist.slice(0,MENTOR_HIST.n), rest=hist.length-shown.length;
    const uid=mentorSelected;
    const discCol=v=>v>=75?'var(--green)':v>=45?'var(--gold)':'var(--red)';
    el.innerHTML=`
      <div class="ms-head">
        <button class="btn btn-ghost btn-sm ms-back" onclick="mentorSelected=null;renderMentorMain()">← بازگشت</button>
        <div class="ms-id"><b>${esc(st?.name)}${vipTag(st)}</b><span dir="ltr">${esc(uid)}</span></div>
        <span class="ms-budget">💵 ${faNum(currentBudget(trades.length))}$</span>
      </div>
      ${renderXPBar(trades.length)}
      ${s?`
      <div class="mhero fade-up">
        <div class="mh"><u>سود/زیان</u><b style="color:${s.total>=0?'var(--green)':'var(--red)'}">${fmtUSD(s.total)}</b><s>${faNum(s.closed)} ترید بسته</s></div>
        <div class="mh"><u>وین‌ریت</u><b style="color:${+s.winRate>=50?'var(--green)':'var(--red)'}">${faNum(Math.round(+s.winRate))}٪</b><s>${faNum(trades.length)} ترید کل</s></div>
        <div class="mh"><u>دیسیپلین</u><b style="color:${discCol(s.discipline?.score??0)}">${faNum(s.discipline?.score??0)}</b><s>از ۱۰۰</s></div>
        <div class="mh"><u>انتظار هر ترید</u><b style="color:${s.expectancy>=0?'var(--green)':'var(--red)'}">${fmtUSD(s.expectancy)}</b><s>فاکتور سود <bdi dir="ltr">${esc(s.profitFactor)}</bdi></s></div>
      </div>
      ${insightsCard(s)}
      ${s.equity?.length>1?`${equityPro(s.equity, 'eqp-student', '📈 منحنی سرمایه')}`:''}
      ${kpiGrid(s)}
      ${disciplineCard(s)}
      ${withTrades(trades, playbookCard)}
      ${breakdownModule(s, () => ALL_TRADES[uid] || [])}
      ${reasonWRSection(s.byEntryReason,'وین‌ریت هر دلیل ورود')}
      ${heatmapCalendar(trades)}
      <div class="card ms-hist">
        <div class="card-title">تاریخچه‌ی تریدها <span class="ms-hn">${faNum(hist.length)} ترید</span></div>
        ${shown.map(t=>{
          const pnl=t.exit?calcPnl(t):null;
          const er=Array.isArray(t.entryReasons)?t.entryReasons.slice(0,2):[];
          const fb=MENTOR_FB.data[t.id];
          return`<div class="ms-row">
            <div class="ms-r">
            ${coinLogo(t.coin,'width:34px;height:34px;font-size:10px')}
            <div class="ms-ri">
              <div class="ms-rc">${esc(t.coin)}/${esc(t.pair)} <span class="badge ${badgeCls(t.direction)}">${esc(t.direction)}</span></div>
              <div class="ms-rm">${fmtDateFa(t.date)}${t.strategy?` · ${esc(t.strategy)}`:''}</div>
              ${er.length?`<div class="ms-rt">${er.map(r=>`<span>${esc(r)}</span>`).join('')}</div>`:''}
            </div>
            <div class="ms-rv">
              ${pnl!==null?`<b style="color:${pnl>=0?'var(--green)':'var(--red)'}">${fmtUSD(pnl)}</b>`:`<span class="badge b-open">باز</span>`}
              <button class="fb-btn${fb?' has':''}" title="نظر استاد" onclick="openFeedbackEditor('${uid}','${t.id}')">💬</button>
            </div>
            </div>
            ${fb?`<div class="fb-inline">💬 ${esc(fb.text)}</div>`:''}
          </div>`;
        }).join('')||'<div style="color:var(--muted);text-align:center;padding:18px;font-size:12px">تریدی وجود ندارد</div>'}
        ${rest>0?`<button class="btn btn-ghost ms-more" onclick="MENTOR_HIST.n+=20;renderMentorMain()">نمایش ${faNum(Math.min(20,rest))} ترید بعدی <span>(${faNum(rest)} مانده)</span></button>`:''}
      </div>`:'<div class="empty"><span class="empty-ico">📊</span><div class="empty-t">هنوز تریدی ثبت نشده</div></div>'}`;
    return;
  }

  el.innerHTML=`
    <div class="tab-bar mtabs">
      <button class="tab-btn ${mentorTab==='students'?'active':''}" onclick="mentorTab='students';renderMentorMain()"><i>👥</i>دانشجویان</button>
      <button class="tab-btn ${mentorTab==='add'?'active':''}" onclick="mentorTab='add';renderMentorMain()"><i>➕</i>افزودن</button>
      <button class="tab-btn ${mentorTab==='codes'?'active':''}" onclick="mentorTab='codes';renderMentorMain()"><i>🔑</i>کدها</button>
      <button class="tab-btn ${mentorTab==='reasons'?'active':''}" onclick="mentorTab='reasons';renderMentorMain()"><i>📋</i>دلایل</button>
      <button class="tab-btn ${mentorTab==='settings'?'active':''}" onclick="mentorTab='settings';renderMentorMain()"><i>⚙️</i>تنظیمات</button>
      <button class="tab-btn ${mentorTab==='billing'?'active':''}" onclick="mentorTab='billing';renderMentorMain()"><i>💳</i>اشتراک</button>
    </div>
    ${mentorTab==='students'?renderStudentCards():''}
    ${mentorTab==='add'?renderAddStudent():''}
    ${mentorTab==='codes'?renderCodes():''}
    ${mentorTab==='reasons'?renderReasonSettings():''}
    ${mentorTab==='settings'?renderMentorSettings():''}
    ${mentorTab==='billing'?'<div id="mbill"></div>':''}`;
  if(mentorTab==='billing') loadBilling().then(B=>B.renderAdmin(document.getElementById('mbill'))).catch(()=>showToast('بارگذاری اشتراک انجام نشد'));
}

function renderStudentCards(){
  const sorted=Object.entries(ROSTER()).map(([uid,st])=>{
    const ss=computeStats((ALL_TRADES[uid]||[]).filter(t=>t.exit),ALL_TRADES[uid]||[]);
    return{uid,st,ss,count:ALL_TRADES[uid]?.length||0};
  }).sort((a,b)=>(b.ss?.total||0)-(a.ss?.total||0));
  if(!sorted.length)return '<div class="empty"><span class="empty-ico">👥</span><div class="empty-t">هنوز دانشجوی ثبت نشده</div></div>';
  return sorted.map(({uid,st,ss,count})=>{
    const xp=getXP(count);
    return`<div class="student-card">
      <div onclick="mentorSelected='${uid}';renderMentorMain()" style="cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">
          <div>
            <div style="font-weight:700;font-size:13px">${esc(st.name)}${vipTag(st)}</div>
            <div style="font-size:10.5px;color:var(--muted);margin-top:2px">${faNum(count)} ترید · <span style="color:${xp.levelColor}">${xp.levelTitle}</span></div>
            <div style="font-size:10px;color:var(--muted);margin-top:1px;font-family:var(--f-mono)">${uid}</div>
          </div>
          <div style="text-align:left">
            <div style="font-family:var(--f-mono);font-size:13px;font-weight:700;color:${(ss?.total||0)>=0?'var(--green)':'var(--red)'}">${fmtUSD(ss?.total||0)}</div>
            <div style="font-size:10.5px;color:${parseFloat(ss?.winRate||0)>=50?'var(--green)':'var(--red)'}">${ss?`وین‌ریت ${faNum(Math.round(+ss.winRate))}٪`:'بدون ترید بسته'}</div>
          </div>
        </div>
        <div style="height:5px;background:var(--dim);border-radius:3px;overflow:hidden">
          <div style="height:100%;width:${xp.pct}%;background:linear-gradient(90deg,${xp.levelColor},${xp.levelColor}88);border-radius:3px"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:4px">
          <span style="font-size:10px;color:var(--muted)">${faNum(count)}/${faNum(getXPMilestones().slice(-1)[0].n)} ترید · 💵 ${faNum(currentBudget(count))}$</span>
          <span style="font-size:10px;color:${xp.levelColor}">${faNum(xp.pct.toFixed(0))}٪</span>
        </div>
      </div>
      <div style="display:flex;gap:7px;margin-top:10px;padding-top:10px;border-top:1px solid var(--border)">
        <button class="btn btn-ghost btn-sm" style="flex:1;font-size:11px" onclick="mentorSelected='${uid}';renderMentorMain()">📊 آمار</button>
        <button class="btn btn-sm" style="flex:1;font-size:11px;background:rgba(200,168,75,.1);border:1px solid var(--gold-dim);color:var(--gold)" onclick="mentorViewAs('${uid}')">👁️ ورود به عنوان</button>
      </div>
    </div>`;
  }).join('');
}

function renderAddStudent(){
  return`<div class="card">
    <div class="card-title">افزودن دانشجو جدید</div>
    <div style="display:flex;flex-direction:column;gap:13px">
      <div class="fg"><div class="fl">نام دانشجو <span class="req">*</span></div><input id="m-name" class="fi" type="text" placeholder="مثلاً: علی محمدی"/></div>
      <div class="fg"><div class="fl">شماره موبایل <span class="req">*</span></div><input id="m-code" class="fi" type="tel" placeholder="09xxxxxxxxx" maxlength="11" style="text-align:center;letter-spacing:3px;font-size:16px;font-family:var(--f-mono);direction:ltr" oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(0,11)"/></div>
      <div style="background:rgba(200,168,75,.06);border:1px solid rgba(200,168,75,.15);border-radius:10px;padding:12px;font-size:12px;color:var(--muted)">💡 شماره موبایل دانشجو کد ورود اوست. دانشجو با همین شماره وارد می‌شود.</div>
      <button class="btn btn-primary" onclick="addStudent()">✅ ثبت دانشجو</button>
    </div>
  </div>`;
}

function renderCodes(){
  const entries=Object.entries(STUDENTS);
  if(!entries.length)return'<div class="empty"><span class="empty-ico">🔑</span><div class="empty-t">هنوز دانشجوی ثبت نشده</div></div>';
  return`<div class="card"><div class="card-title">📱 شماره موبایل دانشجویان</div>
    ${entries.map(([uid,st])=>`
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
        <div>
          <span style="font-size:13px;font-weight:600">${esc(st.name)}</span>
          <div style="font-family:var(--f-mono);font-size:12px;color:var(--gold);margin-top:2px;letter-spacing:1px">${uid}</div>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <button class="btn btn-ghost btn-sm" style="font-size:11px" onclick="resetStudentPin('${uid}')">🔑 PIN</button>
          <button class="btn btn-sm" style="font-size:11px;background:rgba(200,168,75,.1);border:1px solid var(--gold-dim);color:var(--gold)" onclick="mentorViewAs('${uid}')">👁️ ورود</button>
          <button class="btn btn-danger btn-sm" onclick="removeStudent('${uid}')">✕</button>
        </div>
      </div>`).join('')}
  </div>`;
}

// ══════════════════════════════════════════════════════
// REASON SETTINGS PANEL (Mentor only)
// ══════════════════════════════════════════════════════
let settingsTab = 'entry'; // entry | sl_long | sl_short | tp_long | tp_short

function renderReasonSettings() {
  const tabs = [
    { key:'entry',    label:'🔍 دلایل ورود',         color:'var(--blue)' },
    { key:'sl_long',  label:'🛡️ حد ضرر Long',        color:'var(--red)' },
    { key:'sl_short', label:'🛡️ حد ضرر Short',       color:'var(--red)' },
    { key:'tp_long',  label:'🎯 حد سود Long',         color:'var(--green)' },
    { key:'tp_short', label:'🎯 حد سود Short',        color:'var(--green)' },
  ];

  const defMap = {
    entry:    DEFAULT_ENTRY_REASONS,
    sl_long:  DEFAULT_SL_LONG,
    sl_short: DEFAULT_SL_SHORT,
    tp_long:  DEFAULT_TP_LONG,
    tp_short: DEFAULT_TP_SHORT,
  };
  const storageKey = {
    entry:'sc_reasons_entry',
    sl_long:'sc_reasons_sl_long', sl_short:'sc_reasons_sl_short',
    tp_long:'sc_reasons_tp_long', tp_short:'sc_reasons_tp_short',
  };

  const list = S.g(storageKey[settingsTab]) || defMap[settingsTab];
  const chipsMap = { entry:'selected', sl_long:'selected-red', sl_short:'selected-red', tp_long:'selected-green', tp_short:'selected-green' };
  const dirHint = {
    entry:'',
    sl_long:'  • Long: حد ضرر باید زیر سطح ورود باشد',
    sl_short:'  • Short: حد ضرر باید بالای سطح ورود باشد',
    tp_long:'  • Long: حد سود باید بالای سطح ورود باشد',
    tp_short:'  • Short: حد سود باید زیر سطح ورود باشد',
  };

  const itemsHTML = list.map((item,i) => `
    <div id="rsitem-${i}" style="display:flex;align-items:center;gap:8px;padding:9px 0;border-bottom:1px solid var(--border)">
      <div style="width:22px;height:22px;border-radius:6px;background:var(--dim);display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--muted);font-family:var(--f-mono);flex-shrink:0">${i+1}</div>
      <div id="rslabel-${i}" style="flex:1;font-size:13px;color:var(--text)">${esc(item)}</div>
      <input id="rsinput-${i}" class="fi" style="display:none;flex:1;padding:7px 10px;font-size:12px" value="${esc(item)}" onkeydown="if(event.key==='Enter')saveInlineEdit(${i})"/>
      <div id="rsbtn-${i}" style="display:flex;gap:5px;flex-shrink:0">
        <button class="btn btn-ghost btn-sm" onclick="startEdit(${i})" title="ویرایش">✏️</button>
        <button class="btn" style="padding:6px 10px;font-size:12px;background:rgba(200,168,75,.08);border:1px solid rgba(200,168,75,.2);color:var(--gold);border-radius:8px" onclick="moveItem(${i},-1)" ${i===0?'disabled':''}>↑</button>
        <button class="btn" style="padding:6px 10px;font-size:12px;background:rgba(200,168,75,.08);border:1px solid rgba(200,168,75,.2);color:var(--gold);border-radius:8px" onclick="moveItem(${i},1)" ${i===list.length-1?'disabled':''}>↓</button>
        <button class="btn btn-danger btn-sm" onclick="deleteItem(${i})">✕</button>
      </div>
    </div>`).join('');

  return `
    <div class="card" style="margin-bottom:12px">
      <div style="font-family:var(--f-display);font-size:16px;color:var(--gold);margin-bottom:14px">⚙️ مدیریت گزینه‌ها</div>
      <div style="background:rgba(200,168,75,.06);border:1px solid rgba(200,168,75,.15);border-radius:10px;padding:11px 14px;font-size:12px;color:var(--muted);margin-bottom:14px;line-height:1.7">
        💡 تغییرات برای <strong style="color:var(--text)">همه‌ی دانشجویان</strong> اعمال می‌شود.
        ${dirHint[settingsTab]?`<br/><span style="color:var(--text2)">${dirHint[settingsTab]}</span>`:''}
      </div>
      <div class="tab-bar" style="margin-bottom:14px">
        ${tabs.map(t=>`<button class="tab-btn ${settingsTab===t.key?'active':''}" onclick="settingsTab='${t.key}';renderMentorMain()">${t.label}</button>`).join('')}
      </div>
      <div style="display:flex;gap:8px;margin-bottom:14px">
        <input id="rs-new-input" class="fi" style="flex:1;font-size:13px" placeholder="گزینه جدید را بنویسید..." onkeydown="if(event.key==='Enter')addReasonItem()"/>
        <button class="btn btn-primary" style="width:auto;margin:0;padding:10px 16px;font-size:13px;white-space:nowrap" onclick="addReasonItem()">+ افزودن</button>
      </div>
      <div id="rs-list">
        ${itemsHTML || '<div style="color:var(--muted);text-align:center;padding:20px;font-size:12px">لیست خالی است</div>'}
      </div>
      <div style="display:flex;gap:8px;margin-top:14px;padding-top:12px;border-top:1px solid var(--border)">
        <button class="btn btn-ghost" style="flex:1;font-size:12px" onclick="resetReasonList()">↺ بازگشت به پیش‌فرض</button>
        <div style="color:var(--muted);font-size:11px;align-self:center;flex:1;text-align:left">${list.length} گزینه</div>
      </div>
    </div>`;
}

function rerenderSettings() { renderMentorMain(); }

function _getSettingsStorageKey() {
  const m = { entry:'sc_reasons_entry', sl_long:'sc_reasons_sl_long', sl_short:'sc_reasons_sl_short', tp_long:'sc_reasons_tp_long', tp_short:'sc_reasons_tp_short' };
  return m[settingsTab];
}
function _getSettingsDefault() {
  const m = { entry:DEFAULT_ENTRY_REASONS, sl_long:DEFAULT_SL_LONG, sl_short:DEFAULT_SL_SHORT, tp_long:DEFAULT_TP_LONG, tp_short:DEFAULT_TP_SHORT };
  return m[settingsTab];
}
function getCurrentReasonList() { return S.g(_getSettingsStorageKey()) || _getSettingsDefault(); }
async function persistCurrentList(list) {
  S.s(_getSettingsStorageKey(), list);
  if(savedOrWarn(await cloudSet(_getSettingsStorageKey(), list))) showToast('✅ لیست ذخیره شد');
  renderMentorMain();
}
async function addReasonItem() {
  const input = document.getElementById('rs-new-input');
  const val = input?.value.trim(); if(!val){input?.focus();return;}
  await persistCurrentList([...getCurrentReasonList(), val]);
}
async function deleteItem(i) {
  if(!confirm('این گزینه حذف شود؟'))return;
  await persistCurrentList(getCurrentReasonList().filter((_,idx)=>idx!==i));
}
async function moveItem(i,dir) {
  const list=[...getCurrentReasonList()]; const j=i+dir;
  if(j<0||j>=list.length)return;
  [list[i],list[j]]=[list[j],list[i]]; await persistCurrentList(list);
}
function startEdit(i) {
  const label=document.getElementById('rslabel-'+i), input=document.getElementById('rsinput-'+i), btns=document.getElementById('rsbtn-'+i);
  if(!label||!input||!btns)return;
  label.style.display='none'; input.style.display='block'; input.focus(); input.select();
  btns.innerHTML=`<button class="btn btn-primary" style="width:auto;margin:0;padding:6px 12px;font-size:12px" onclick="saveInlineEdit(${i})">✓ ذخیره</button><button class="btn btn-ghost btn-sm" onclick="renderMentorMain()">انصراف</button>`;
}
async function saveInlineEdit(i) {
  const val=document.getElementById('rsinput-'+i)?.value.trim();
  if(!val){showToast('⚠️ نام نمی‌تواند خالی باشد');return;}
  const list=[...getCurrentReasonList()]; list[i]=val; await persistCurrentList(list);
}
async function resetReasonList() {
  const names={entry:'دلایل ورود',sl_long:'حد ضرر Long',sl_short:'حد ضرر Short',tp_long:'حد سود Long',tp_short:'حد سود Short'};
  if(!confirm(`لیست "${names[settingsTab]}" به پیش‌فرض بازگردد؟`))return;
  S.d(_getSettingsStorageKey());
  if(savedOrWarn(await cloudDelete(_getSettingsStorageKey()))) showToast('↺ لیست به پیش‌فرض بازگشت');
  renderMentorMain();
}

async function addStudent(){
  if(!requireOnline('ثبت دانشجو'))return;
  const name=document.getElementById('m-name')?.value.trim();
  const code=document.getElementById('m-code')?.value.trim().replace(/[^0-9]/g,'');
  if(!name){alert('نام دانشجو را وارد کنید');return}
  if(code.length!==11||!code.startsWith('09')){alert('شماره موبایل معتبر نیست (مثلاً: 09123456789)');return}
  if(STUDENTS[code]){alert('این شماره قبلاً ثبت شده');return}
  if(VIPS[code]&&!confirm(`این شماره عضو VIP آکادمی است و خودش در ژورنال ثبت‌نام کرده.\nثبت به‌عنوان CIP حساب او را به CIP تبدیل نمی‌کند و دو حساب می‌سازد. ادامه؟`))return;
  showToast('⏳ در حال ذخیره...');
  const pin=String(Math.floor(Math.random()*10000)).padStart(4,'0');
  const r=await apiFetch('/api/students',{method:'POST',body:JSON.stringify({uid:code,name,pin})});
  if(!r||!r.ok){alert(apiErrMsg(r,'ثبت دانشجو'));return}
  STUDENTS[code]={name,joinDate:new Date().toISOString().slice(0,10)};
  ALL_TRADES[code]=[];
  L.s('sc_students',STUDENTS);
  alert(`✅ دانشجو ثبت شد\n\nموبایل: ${code}\nPIN ورود: ${pin}\n\nهمین حالا PIN را به دانشجو بدهید — بعداً فقط قابل «ریست» است، قابل مشاهده نیست.`);
  mentorTab='codes';renderMentorMain();
}

async function removeStudent(uid){
  if(!requireOnline('حذف دانشجو'))return;
  if(!confirm(`حذف "${STUDENTS[uid]?.name}"؟\n\nتریدهای او پاک نمی‌شوند و با ثبت دوباره‌ی همین شماره برمی‌گردند.`))return;
  const r=await apiFetch('/api/students/'+uid,{method:'DELETE'});
  if(!r||!r.ok){alert(apiErrMsg(r,'حذف دانشجو'));return}
  delete STUDENTS[uid];delete ALL_TRADES[uid];
  L.s('sc_students',STUDENTS);
  renderMentorMain();
}

// v14: ریست PIN دانشجو (فقط منتور)
async function resetStudentPin(uid){
  if(!requireOnline('ریست PIN'))return;
  const st=STUDENTS[uid];if(!st)return;
  if(!confirm(`PIN جدید برای «${st.name}» ساخته شود؟ PIN قبلی از کار می‌افتد.`))return;
  const pin=String(Math.floor(Math.random()*10000)).padStart(4,'0');
  const r=await apiFetch('/api/students/'+uid+'/pin',{method:'POST',body:JSON.stringify({pin})});
  if(!r||!r.ok){alert(apiErrMsg(r,'ریست PIN'));return}
  alert(`🔑 PIN جدید «${st.name}»\n\n${pin}\n\nهمین حالا به دانشجو بدهید — دیگر قابل مشاهده نیست.`);
}

// ══════════════════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════════════════
function exportCSV(){
  const header=['date','time','coin','pair','direction','entry','exit','stopLoss','takeProfit','size','leverage','strategy','session','emotion','result','fees','notes','tags','entryReasons','slReasons','tpReasons'];
  // v26.8: نتیجه از روی قیمت‌ها (نه مقدارِ ذخیره‌شده‌ای که ممکن است کهنه باشد)؛ متنی که با = + - @ شروع شود
  // در اکسل فرمول اجرا می‌شود ⇒ یک ' جلویش. فایل با Blob: لینکِ data: روی آیفون و فایلِ بزرگ دانلود نمی‌شود.
  const cell=(t,k)=>{let v=k==='result'?tradeResult(t):Array.isArray(t[k])?t[k].join('|'):(t[k]??'');v=String(v);
    if(/^[=+\-@\t\r]/.test(v)&&!/^[+\-]?\d+(\.\d+)?$/.test(v))v="'"+v;return`"${v.replace(/"/g,'""')}"`;};
  const rows=TRADES.filter(t=>t&&!t._deleted).map(t=>header.map(k=>cell(t,k)).join(','));
  const csv='﻿'+[header.join(','),...rows].join('\r\n');
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download=`trades_${String(SESSION.name||'journal').replace(/[\\/:*?"<>|]/g,'')}_${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);
}

function showToast(msg){
  const t=document.createElement('div');t.className='toast';t.textContent=msg;
  document.body.appendChild(t);setTimeout(()=>t.remove(),2500);
}

// ══════════════════════════════════════════════════════
// LOGIN / SESSION / NAV
// ══════════════════════════════════════════════════════
function setLoginMode(m){
  loginMode=m;
  document.getElementById('sf').style.display=m==='student'?'block':'none';
  document.getElementById('mf').style.display=m==='mentor'?'block':'none';
  document.querySelectorAll('#login-screen .toggle-btn').forEach((b,i)=>{
    const on=(i===0&&m==='student')||(i===1&&m==='mentor');
    b.classList.toggle('active',on); b.setAttribute('aria-selected',on);
  });
  const h=document.getElementById('lg-h'), hint=document.getElementById('lg-hint');
  if(h) h.textContent=m==='mentor'?'ورود منتور':'خوش آمدی';
  if(hint) hint.textContent=m==='mentor'?'با رمز عبور منتور وارد شو':'با شماره موبایل و PIN چهاررقمی که استاد به تو داده وارد شو';
  const help=document.getElementById('lg-help'); if(help) help.style.display=m==='mentor'?'none':'';
  const su=document.getElementById('su-link'); if(su) su.style.display=m==='mentor'?'none':'';
  document.getElementById('lerr').style.display='none';
}
// نمایش/پنهان‌کردن PIN یا رمز
function toggleLoginSecret(id,btn){
  const i=document.getElementById(id); if(!i) return;
  const show=i.type==='password';
  i.type=show?'text':'password';
  btn.textContent=show?'پنهان':'نمایش';
  i.focus();
}
// دکمه‌ی ورود: متن یا چرخنده‌ی «در حال بررسی»
function setLoginBusy(busy){
  const b=document.getElementById('lbtn'); if(!b) return;
  b.disabled=busy;
  b.innerHTML=busy?'<span class="lg-spin" aria-hidden="true"></span>در حال بررسی…':'ورود';
}
(function(){ const y=document.getElementById('lg-year'); if(y) y.textContent=new Date().getFullYear(); })();

function doLogin(){
  setLoginBusy(true);
  const err=document.getElementById('lerr');err.style.display='none';
  const fail=(msg)=>{err.textContent=msg;err.style.display='block';setLoginBusy(false);};
  if(loginMode==='mentor'){
    const password=document.getElementById('pass-input').value;
    apiFetch('/api/login-mentor',{method:'POST',body:JSON.stringify({password})}).then(async r=>{
      if(r===undefined){
        // دستگاهی که قبلاً آنلاین وارد شده، می‌تواند فقط برای «مشاهده» وارد شود
        if(L.g('sc_offline_ok_mentor') && await mentorPassMatchesLocal(password)){
          showToast('📴 حالت آفلاین — فقط مشاهده');
          startMentorSession();
          return;
        }
        return fail('⚠️ برای ورود منتور، اتصال به اینترنت لازم است');
      }
      const d=await r.json().catch(()=>({}));
      if(r.ok){setToken(d.token);L.s('sc_offline_ok_mentor',true);await rememberMentorPass(password);startMentorSession();}
      else if(r.status===423)fail('🔒 به دلیل تلاش زیاد، ورود ۱۵ دقیقه قفل شد');
      else fail('⚠️ رمز عبور اشتباه است'+(d.left?` (${faNum(d.left)} تلاش مانده)`:''));
    });
  } else {
    const code=document.getElementById('code-input').value.trim().replace(/[^0-9]/g,'');
    const pin=document.getElementById('pin-input').value.trim();
    if(code.length!==11||!code.startsWith('09'))return fail('⚠️ شماره موبایل معتبر نیست (باید با 09 شروع شود)');
    if(pin.length!==4)return fail('⚠️ PIN چهاررقمی را وارد کنید');
    apiFetch('/api/login',{method:'POST',body:JSON.stringify({phone:code,pin})}).then(async r=>{
      if(r===undefined){
        // اگر همین دستگاه قبلاً با موفقیت وارد شده، اجازه‌ی مشاهده‌ی آفلاینِ داده‌ی خودش را بده
        const known = L.g('sc_offline_ok_'+code);
        const cached = L.g('sc_trades_'+code);
        if(known && cached){
          showToast('📴 حالت آفلاین — فقط مشاهده‌ی تریدهای این دستگاه');
          startSession({role:'student',uid:code,name:(typeof known==='string'?known:'دانشجو'),accountType:L.g('sc_acct_'+code)||'cip'});
          setLoginBusy(false);
          return;
        }
        return fail('⚠️ سرور در دسترس نیست. اینترنت را بررسی کن و دوباره تلاش کن.');
      }
      const d=await r.json().catch(()=>({}));
      if(r.ok){setToken(d.token);L.s('sc_offline_ok_'+d.uid,d.name||true);L.s('sc_acct_'+d.uid,d.accountType||'cip');startSession({role:'student',uid:d.uid,name:d.name,accountType:d.accountType||'cip'});}
      else if(r.status===404)fail('⚠️ این شماره ثبت نشده. با استاد تماس بگیرید');
      else if(r.status===428)fail('⚠️ برای شما هنوز PIN ساخته نشده — از استاد بخواهید');
      else if(r.status===423)fail('🔒 به دلیل تلاش زیاد، ورود ۱۵ دقیقه قفل شد');
      else fail('⚠️ PIN اشتباه است'+(d.left?` (${faNum(d.left)} تلاش مانده)`:''));
      setLoginBusy(false);
    });
  }
}

async function startMentorSession(){
  STUDENTS=await loadStudents();
  ALL_TRADES={};
  for(const uid of Object.keys(STUDENTS)){ALL_TRADES[uid]=await loadTrades(uid);}
  await loadVipTrades();
  await loadAllSettings();              // تنظیمات مشترک را از سرور بگیر
  await pushMentorSettingsToCloud();    // سفارشی‌سازی‌های محلیِ ادمین را به سرور مهاجرت بده
  autoBackupLocal(); // عکس فوری از کل داده‌ها هنگام ورود منتور (در پس‌زمینه)
  startSession({role:'mentor',uid:'mentor',name:'استاد صمدی'});
  setLoginBusy(false);
}

function startSession(s){
  ALERT_STATE=ALERT_EMPTY_STATE();ALERT_EDITOR=null;
  XQ={ map:{}, loaded:false, busy:false, pending:0, failed:0 };
  COHORT={ data:null, loaded:false, busy:false };
  SESSION=s;try{sessionStorage.setItem('sc_session',JSON.stringify(s))}catch(e){}
  setTimeout(()=>{updateOfflineBanner();updateImportButton();},0);
  document.getElementById('login-screen').style.display='none';
  document.getElementById('app').style.display='block';
  document.getElementById('u-av').textContent=s.name.slice(0,2);
  document.getElementById('u-nm').textContent=s.name;
  if(s.role==='mentor'){
    document.getElementById('nav-mentor').style.display='flex';
    document.getElementById('nav-add').style.display='none';
    document.getElementById('fab').style.display='none';
    // mentor data loaded in startMentorSession or restored from session
    if(!Object.keys(STUDENTS).length){
      loadStudents().then(async st=>{
        STUDENTS=st;
        for(const uid of Object.keys(st)){ALL_TRADES[uid]=await loadTrades(uid);}
        await loadVipTrades();
        renderMentorDashboard();
      });
    } else {
      renderMentorDashboard();
    }
  }else{
    document.getElementById('nav-add').style.display='flex';
    document.getElementById('nav-mentor').style.display='none';
    document.getElementById('fab').style.display='flex';
    // v25.0: تحلیلگرِ خودکارِ عضو تا معلوم شدنِ پلن پنهان؛ بقیه همیشه دارند
    const navAi=document.getElementById('nav-ai'); if(navAi) navAi.style.display=isMember()?'none':'';
    if(isMember()) loadBilling().then(B=>B.refresh()).catch(()=>{});
    setTimeout(()=>healPushSubscription(),6000);
    // اول تنظیماتِ ادمین را از سرور بگیر (دلایل/کوین/تایم‌فریم/XP...) بعد تریدها
    loadAllSettings().then(()=>loadTrades(s.uid)).then(t=>{
      TRADES=t;TRADES_SYNCED_AT=Date.now();renderStudentDashboard();
      setTimeout(handleEditRoute,300);
      // v13: فیدبک استاد + اعلان نظرهای دیده‌نشده
      loadFeedback(s.uid).then(fb=>{
        FEEDBACK=fb||{};
        const k='sc_fb_seen_'+s.uid,seen=L.g(k)||[];
        const unseen=Object.keys(FEEDBACK).filter(id=>!seen.includes(id));
        if(unseen.length)setTimeout(()=>showToast('💬 '+faNum(unseen.length)+' نظر جدید از استاد داری'),900);
      });
      // v14.2: اول تبریک اتمام مسیر (اگر تازه رسیده)، وگرنه جمله‌ی روز
      setTimeout(()=>{ if(!checkGraduation()) showDailyQuote(); },1600);
      // v18.4: اتصال‌های صرافی و پوزیشن‌های باز
      loadExchangeConnections().then(()=>EX_STATE.connections.length?refreshExchangePositions():null)
        .then(()=>{ if(EX_STATE.positions.length) renderStudentDashboard(); }).catch(()=>{});
      // v19: MFE/MAE هایی که قبلاً حساب شده‌اند؛ محاسبه‌ی جدید با دکمه انجام می‌شود
      loadExcursions().then(()=>{ if(Object.keys(XQ.map).length||XQ.pending) renderStudentDashboard(); }).catch(()=>{});
      // v19: مقایسه با کلاس (آمار تجمعی، روی سرور کش می‌شود)
      loadCohort().then(()=>{ if(COHORT.data) renderStudentDashboard(); }).catch(()=>{});
    });
  }
}


async function mentorViewAs(uid){
  const st = ROSTER()[uid];
  if(!st) return;
  if(!confirm(`ورود به حساب «${st.name}» (${uid}) به عنوان ناظر؟\n\nبرای بازگشت به پنل منتور از دکمه خروج استفاده کنید.`)) return;
  // save mentor session to restore later
  L.s('sc_mentor_restore', SESSION);
  const studentTrades = await loadTrades(uid);
  // v26.9: بی‌اتصال، loadTrades فقط حافظه‌ی همین دستگاه را دارد؛ داده‌ی بارشده‌ی پنل کامل‌تر است
  TRADES = studentTrades.length ? studentTrades : (ALL_TRADES[uid] || []).filter(t => t && !t._deleted);
  FEEDBACK = await loadFeedback(uid); // v13: نظرها در حالت ناظر هم دیده شوند
  dashRange='all';calOffset=0;
  SESSION = {role:'student', uid, name: st.name + ' (ناظر)', isViewOnly: true, ...(st.type==='vip'?{accountType:'vip'}:{})};
  // update UI
  document.getElementById('u-av').textContent = st.name.slice(0,2);
  document.getElementById('u-nm').textContent = st.name + ' 👁️';
  document.getElementById('nav-add').style.display = 'none';
  document.getElementById('nav-mentor').style.display = 'none';
  document.getElementById('fab').style.display = 'none';
  // show back-to-mentor banner
  let banner = document.getElementById('mentor-view-banner');
  if(!banner){
    banner = document.createElement('div');
    banner.id = 'mentor-view-banner';
    banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:200;background:linear-gradient(135deg,#8B5CF6,#6D28D9);padding:calc(var(--safe-top,0px) + 8px) 16px 8px;display:flex;align-items:center;justify-content:space-between;font-size:12px;font-weight:600';
    banner.innerHTML = '<span style="color:#fff">👁️ حالت ناظر — ' + esc(st.name) + '</span><button onclick="mentorViewBack()" style="background:rgba(255,255,255,.2);border:none;border-radius:8px;color:#fff;padding:5px 12px;font-size:11px;cursor:pointer;font-family:var(--f-body)">← بازگشت به منتور</button>';
    document.getElementById('app').prepend(banner);
    // push topbar down
    document.getElementById('topbar').style.marginTop = '44px';
  }
  nav('dashboard', document.querySelector('[data-screen="dashboard"]'));
}

async function mentorViewBack(){
  const saved = L.g('sc_mentor_restore');
  if(!saved) return;
  L.d('sc_mentor_restore');
  SESSION = saved;
  TRADES = [];          // تریدهای شخصی در پنل منتور (تب ژورنال، AI Coach) نمانند
  dashPhase = 'all';
  STUDENTS = await loadStudents();
  ALL_TRADES = {};
  for(const uid of Object.keys(STUDENTS)){ ALL_TRADES[uid] = await loadTrades(uid); }
  await loadVipTrades();
  document.getElementById('u-av').textContent = saved.name.slice(0,2);
  document.getElementById('u-nm').textContent = saved.name;
  document.getElementById('nav-mentor').style.display = 'flex';
  document.getElementById('nav-add').style.display = 'none';
  document.getElementById('fab').style.display = 'none';
  const banner = document.getElementById('mentor-view-banner');
  if(banner){ banner.remove(); document.getElementById('topbar').style.marginTop = ''; }
  FEEDBACK={};
  // v19.3: تحلیل‌های شخصی/دانشجویی نباید به پنل منتور نشت کند
  XQ={ map:{}, loaded:false, busy:false, pending:0, failed:0 };
  COHORT={ data:null, loaded:false, busy:false };
  MENTOR_PERSONAL_COUNT=null;
  mentorSelected = null;
  nav('dashboard', document.querySelector('[data-screen="dashboard"]'));
}

// ══════════════════════════════════════════════════════
// SCAN TRADE — Claude Vision API (چند ترید همزمان)
// ══════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════
// MENTOR FULL SETTINGS PANEL
// ══════════════════════════════════════════════════════
let msTab = 'general'; // general | xp | lists | api

function renderMentorSettings(){
  const tabs = [
    {k:'general', l:'🔧 عمومی'},
    {k:'xp',      l:'🎓 پله‌ها'},
    {k:'lists',   l:'📝 لیست‌ها'},
    // تب «اسکن AI» حذف شد: renderMSAPI() هرگز نوشته نشده بود و کلیک روی آن
    // پنل تنظیمات را می‌شکست. تحلیلگر خودکار کاملاً محلی است و تنظیماتی نمی‌خواهد.
  ];
  return `
  <div class="card" style="margin-bottom:12px">
    <div style="font-family:var(--f-display);font-size:16px;color:var(--gold);margin-bottom:14px">⚙️ تنظیمات آکادمی</div>
    <div class="tab-bar" style="margin-bottom:16px">
      ${tabs.map(t=>`<button class="tab-btn ${msTab===t.k?'active':''}" onclick="msTab='${t.k}';document.getElementById('ms-panel').innerHTML=renderMSPanel()">${t.l}</button>`).join('')}
    </div>
    <div id="ms-panel">${renderMSPanel()}</div>
  </div>`;
}

function renderMSPanel(){
  if(msTab==='general') return renderMSGeneral();
  if(msTab==='xp') return renderMSXP();
  if(msTab==='lists') return renderMSLists();
  return renderMSGeneral();   // هر مقدار ناشناخته → تب عمومی، نه صفحه‌ی سفید
}

// ── تنظیمات عمومی ──
function renderMSGeneral(){
  const academyName = S.g('sc_academy_name') || 'SamadiCapital';
  return `
  <div style="display:flex;flex-direction:column;gap:14px">
    <div class="fg">
      <div class="fl">نام آکادمی</div>
      <input id="ms-academy" class="fi" value="${esc(academyName)}" placeholder="SamadiCapital"/>
    </div>
    ${(()=>{ const c = tiltConfig(S.g('sc_tilt')); return `<div class="ms-tilt">
      <div class="ms-tilt-h"><b>🛑 محافظ روز بد</b><label class="ms-tilt-on"><input id="ms-tilt-on" type="checkbox" ${c.enabled?'checked':''}> فعال</label></div>
      <p>وقتی دانشجو امروز به یکی از این دو سقف برسد، اپ و تلگرام می‌گویند «امروز کافی است» و تریدهای بعدیِ آن روز برچسب می‌خورند و در «نیازمند توجه» می‌آیند. جلوی ثبت گرفته نمی‌شود.</p>
      <div class="fgrid"><div class="fg"><div class="fl">ضررِ پشت‌سرِهم در یک روز</div><input id="ms-tilt-streak" class="fi" type="number" min="1" max="10" step="1" value="${c.streak}"></div>
        <div class="fg"><div class="fl">ضررِ روزانه (٪ موجودی)</div><input id="ms-tilt-pct" class="fi" type="number" min="0.5" max="50" step="0.5" value="${c.dailyPct}"></div></div>
      <div class="tf-hint">سقفِ درصدی فقط برای کسی سنجیده می‌شود که موجودی‌اش را در ماشین‌حساب وارد کرده باشد.</div></div>`; })()}
    <div class="fg">
      <div class="fl">رمز عبور فعلی</div>
      <input id="ms-pass0" class="fi" type="password" placeholder="برای تغییر رمز لازم است"/>
    </div>
    <div class="fg">
      <div class="fl">رمز عبور جدید منتور</div>
      <input id="ms-pass" class="fi" type="password" placeholder="رمز جدید (خالی = بدون تغییر)"/>
    </div>
    <div class="fg">
      <div class="fl">تأیید رمز عبور</div>
      <input id="ms-pass2" class="fi" type="password" placeholder="تکرار رمز جدید"/>
    </div>
    <div style="background:rgba(200,168,75,.06);border:1px solid rgba(200,168,75,.15);border-radius:10px;padding:11px;font-size:12px;color:var(--muted)">
      ⚠️ بعد از تغییر رمز، حتماً آن را یادداشت کنید.
    </div>
    <button class="btn btn-primary" onclick="saveMSGeneral()">💾 ذخیره تنظیمات</button>
    <div style="height:1px;background:var(--border);margin:6px 0"></div>
    <div class="fl">پشتیبان‌گیری از اطلاعات</div>
    <div style="background:rgba(34,201,122,.06);border:1px solid rgba(34,201,122,.15);border-radius:10px;padding:11px;font-size:12px;color:var(--muted)">
      🔒 یک فایل کامل از همه‌ی دانشجوها و تریدهایشان دانلود می‌شود. هر چند وقت یک‌بار بگیر و جای امن نگه دار.
    </div>
    <button class="btn btn-ghost" onclick="downloadFullBackup()">⬇️ دانلود بکاپ کامل (JSON)</button>
  </div>`;
}

async function saveMSGeneral(){
  const name = document.getElementById('ms-academy')?.value.trim();
  const pass = document.getElementById('ms-pass')?.value;
  const pass2 = document.getElementById('ms-pass2')?.value;
  const oks=[];
  if(name){ S.s('sc_academy_name', name); oks.push(await cloudSet('sc_academy_name', name)); }
  if(document.getElementById('ms-tilt-streak')){
    const tilt = tiltConfig({ enabled: document.getElementById('ms-tilt-on').checked,
      streak: document.getElementById('ms-tilt-streak').value, dailyPct: document.getElementById('ms-tilt-pct').value });
    S.s('sc_tilt', tilt); oks.push(await cloudSet('sc_tilt', tilt));
  }
  if(pass){
    if(pass !== pass2){ alert('رمز عبور و تکرار آن یکسان نیستند'); return; }
    if(pass.length < 8){ alert('رمز باید حداقل ۸ کاراکتر باشد'); return; }
    const cur=document.getElementById('ms-pass0')?.value||'';
    const r=await apiFetch('/api/mentor/password',{method:'POST',body:JSON.stringify({current:cur,next:pass})});
    if(!r||!r.ok){alert(r&&r.status===401?'رمز فعلی اشتباه است':apiErrMsg(r,'تغییر رمز'));return}
    await rememberMentorPass(pass); // فقط هشِ محلی برای ورود اضطراری آفلاین (رمز متنی ذخیره نمی‌شود)
  }
  if(!savedOrWarn(...oks)) return;
  showToast('✅ تنظیمات ذخیره شد');
  document.getElementById('ms-pass').value='';
  document.getElementById('ms-pass2').value='';
}

// ── تنظیمات پله‌های XP ──
function renderMSXP(){
  const milestones = getXPMilestones();
  const icons = ['🌱','🎯','🛡️','🔥','💎','📖','⚡','🏆','⭐','🚀'];
  return `
  <div style="margin-bottom:12px;font-size:12px;color:var(--muted)">نام، آیکون، تعداد ترید و بودجه دلاری هر پله را تنظیم کنید — برای همه‌ی دانشجوها اعمال می‌شود.</div>
  <div class="fg" style="margin-bottom:14px;max-width:240px">
    <div class="fl">💵 بودجه شروع مسیر (دلار)</div>
    <input class="fi" type="number" id="xp-base-budget" value="${getBaseBudget()}" min="0"/>
  </div>
  <div id="xp-steps" style="display:flex;flex-direction:column;gap:10px">
    ${milestones.map((m,i)=>`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:12px;display:flex;gap:10px;align-items:center">
      <div style="width:36px;height:36px;border-radius:50%;background:${m.color}22;border:2px solid ${m.color};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0" data-raw>${esc(m.icon||'⭐')}</div>
      <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <div class="fg"><div class="fl" style="font-size:9px">نام پله</div><input class="fi" style="padding:7px 10px;font-size:12px" id="xp-title-${i}" value="${esc(m.title)}"/></div>
        <div class="fg"><div class="fl" style="font-size:9px">تعداد ترید</div><input class="fi" style="padding:7px 10px;font-size:12px" type="number" id="xp-n-${i}" value="${m.n}" min="1" max="500"/></div>
        <div class="fg"><div class="fl" style="font-size:9px">آیکون</div>
          <select class="fi" style="padding:7px 10px;font-size:14px" id="xp-icon-${i}">
            ${icons.map(ic=>`<option value="${ic}" ${m.icon===ic?'selected':''}>${ic}</option>`).join('')}
            ${icons.includes(m.icon)?'':`<option value="${esc(m.icon)}" selected>${esc(m.icon)}</option>`}
          </select>
        </div>
        <div class="fg"><div class="fl" style="font-size:9px">💵 بودجه (دلار)</div><input class="fi" style="padding:7px 10px;font-size:12px" type="number" id="xp-budget-${i}" value="${m.budget}" min="0"/></div>
      </div>
    </div>`).join('')}
  </div>
  <div style="background:rgba(200,168,75,.06);border:1px solid rgba(200,168,75,.15);border-radius:10px;padding:11px;font-size:11.5px;color:var(--muted);margin-top:12px;line-height:1.9">
    🏆 وقتی دانشجو پله‌ی آخر را کامل کند، آیتم «شروع اصولی درآمد دلاری» با پیام «حداقل بودجه پس از تأیید استاد» برایش نمایش داده می‌شود.
  </div>
  <button class="btn btn-primary" style="margin-top:14px" onclick="saveMSXP()">💾 ذخیره پله‌ها</button>`;
}

async function saveMSXP(){
  const milestones = getXPMilestones();
  const updated = milestones.map((m,i)=>({
    ...m,
    title: document.getElementById('xp-title-'+i)?.value.trim() || m.title,
    n: parseInt(document.getElementById('xp-n-'+i)?.value) || m.n,
    icon: document.getElementById('xp-icon-'+i)?.value || m.icon,
    budget: (()=>{const v=parseInt(document.getElementById('xp-budget-'+i)?.value);return isNaN(v)||v<0?m.budget:v})(),
  }));
  for(let i=1;i<updated.length;i++){
    if(updated[i].n <= updated[i-1].n){ alert(`تعداد ترید پله ${i+1} باید بیشتر از پله ${i} باشد`); return; }
  }
  const base=parseInt(document.getElementById('xp-base-budget')?.value);
  const baseVal=isNaN(base)||base<0?getBaseBudget():base;
  S.s('sc_xp_milestones', updated);
  S.s('sc_base_budget', baseVal);
  if(!savedOrWarn(await cloudSet('sc_xp_milestones', updated), await cloudSet('sc_base_budget', baseVal))) return;
  showToast('✅ پله‌ها و بودجه‌ها ذخیره شد');
}

// ── تنظیمات لیست‌ها ──
function renderMSLists(){
  const lists = [
    {k:'sc_coins', label:'💰 کوین‌ها', def: COINS_FULL},
    {k:'sc_strategies', label:'📈 استراتژی‌ها', def: STRATEGIES},
    {k:'sc_sessions', label:'🌐 سشن‌ها', def: SESSIONS},
    {k:'sc_emotions', label:'🧠 احساسات', def: EMOTIONS},
    {k:'sc_timeframes', label:'⏱️ تایم‌فریم‌ها', def: TIMEFRAMES},
  ];
  const cur = S.g('sc_ms_list_tab') || 'sc_coins';
  const curList = lists.find(l=>l.k===cur) || lists[0];
  const items = S.g(cur) || curList.def;

  return `
  <div class="tab-bar" style="margin-bottom:14px">
    ${lists.map(l=>`<button class="tab-btn ${cur===l.k?'active':''}" onclick="S.s('sc_ms_list_tab','${l.k}');document.getElementById('ms-panel').innerHTML=renderMSPanel()">${l.label}</button>`).join('')}
  </div>
  <div style="display:flex;gap:8px;margin-bottom:12px">
    <input id="ms-new-item" class="fi" style="flex:1;font-size:13px" placeholder="آیتم جدید..." onkeydown="if(event.key==='Enter')addMSListItem()"/>
    <button class="btn btn-primary" style="width:auto;margin:0;padding:10px 16px;font-size:13px;white-space:nowrap" onclick="addMSListItem()">+ افزودن</button>
  </div>
  <div style="display:flex;flex-direction:column;gap:7px" id="ms-list-items">
    ${items.map((item,i)=>`
    <div style="display:flex;align-items:center;gap:8px;background:var(--surface);border-radius:9px;padding:9px 12px">
      <span style="flex:1;font-size:13px">${esc(item)}</span>
      <button class="btn btn-ghost btn-sm" onclick="editMSItem(${i},'${cur}')">✏️</button>
      <button class="btn btn-danger btn-sm" onclick="delMSItem(${i},'${cur}')">✕</button>
    </div>`).join('')}
  </div>
  <button class="btn btn-ghost" style="width:100%;margin-top:12px;font-size:12px" onclick="resetMSList('${cur}')">↺ بازگشت به پیش‌فرض</button>`;
}

async function addMSListItem(){
  const key = S.g('sc_ms_list_tab') || 'sc_coins';
  const defMap = {'sc_coins':COINS_FULL,'sc_strategies':STRATEGIES,'sc_sessions':SESSIONS,'sc_emotions':EMOTIONS,'sc_timeframes':TIMEFRAMES};
  const input = document.getElementById('ms-new-item');
  const val = input?.value.trim(); if(!val){input?.focus();return;}
  const list = [...(S.g(key)||defMap[key]), val];
  S.s(key, list); const ok = savedOrWarn(await cloudSet(key, list));
  input.value=''; if(ok) showToast('✅ آیتم اضافه شد');
  document.getElementById('ms-panel').innerHTML=renderMSPanel();
}

async function delMSItem(i, key){
  const defMap = {'sc_coins':COINS_FULL,'sc_strategies':STRATEGIES,'sc_sessions':SESSIONS,'sc_emotions':EMOTIONS,'sc_timeframes':TIMEFRAMES};
  if(!confirm('حذف شود؟'))return;
  const list = (S.g(key)||defMap[key]).filter((_,idx)=>idx!==i);
  S.s(key,list); savedOrWarn(await cloudSet(key,list));
  document.getElementById('ms-panel').innerHTML=renderMSPanel();
}

function editMSItem(i, key){
  const defMap = {'sc_coins':COINS_FULL,'sc_strategies':STRATEGIES,'sc_sessions':SESSIONS,'sc_emotions':EMOTIONS,'sc_timeframes':TIMEFRAMES};
  const list = S.g(key)||defMap[key];
  const newVal = prompt('ویرایش:', list[i]);
  if(newVal===null||!newVal.trim()) return;
  list[i]=newVal.trim();
  S.s(key,list); cloudSet(key,list).then(ok=>savedOrWarn(ok));
  document.getElementById('ms-panel').innerHTML=renderMSPanel();
}

async function resetMSList(key){
  const defMap = {'sc_coins':COINS_FULL,'sc_strategies':STRATEGIES,'sc_sessions':SESSIONS,'sc_emotions':EMOTIONS,'sc_timeframes':TIMEFRAMES};
  if(!confirm('به پیش‌فرض بازگردد؟'))return;
  S.d(key); savedOrWarn(await cloudDelete(key));
  document.getElementById('ms-panel').innerHTML=renderMSPanel();
}



function doLogout(){
  if(TOKEN)apiFetch('/api/logout',{method:'POST'}); // fire-and-forget
  setToken(null);
  SESSION=null;L.d('sc_session');L.d('sc_mentor_restore');
  try{sessionStorage.removeItem('sc_session')}catch(e){}
  FEEDBACK={};MENTOR_FB={_uid:null,_loaded:false,data:{}};
  dashRange='all';calOffset=0;
  document.getElementById('app').style.display='none';
  document.getElementById('login-screen').style.display='flex';
}

// ══════════════════════════════════════════════════════
// v18: PAID PRICE ALERTS + FREE MULTICHANNEL DELIVERY
// Telegram, direct Web Push and the in-app inbox are server-coordinated.
// The browser never stores bot/VAPID private keys or accepts a raw chat id.
// ══════════════════════════════════════════════════════
const ALERT_EMPTY_STATE=()=>({scopeUid:null,loading:false,loaded:false,error:'',entitlement:{active:false,status:'inactive',plan:'price_alerts_pro',endsAt:null},telegram:{linked:false,username:null},push:{configured:false,publicKey:null,devices:[]},channels:{settings:{serviceEnabled:true,telegramEnabled:true,pushEnabled:true,inAppEnabled:true},policy:{telegramAllowed:true,pushAllowed:true,inAppAllowed:true,maxAlerts:20,maxDevices:3,quietStart:'23:00',quietEnd:'07:00',quietTimezone:'Asia/Tehran',soundProfile:'signal',vibrationEnabled:true}},alerts:[],inbox:[],unread:0,events:[],stats:{active:0,triggeredMonth:0},students:[],settings:null,system:null,deliveries:[],audit:[],adminTab:'overview'});
let ALERT_STATE=ALERT_EMPTY_STATE();
let ALERT_EDITOR=null;
const ALERT_PRICE_DEMO={BTC:117842.30,ETH:4664.12,SOL:204.38,BNB:842.10,XRP:3.08,ADA:1.26,DOGE:.31,AVAX:48.42,LINK:27.85};
const ALERT_ICONS={bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',telegram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m21 3-7.5 18-4.3-7.3L3 10.2z"/><path d="M9.2 13.7 21 3"/></svg>',push:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2.5" width="14" height="19" rx="3"/><path d="M9 18h6M8.5 7.5h7"/></svg>',inbox:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="m4 14 4-4 4 4 4-4 4 4"/></svg>',empty:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>'};

function alertDemoMode(){return window.__SC_DEMO__===true}
function demoAlertDashboard(){
  const settings={serviceEnabled:true,telegramEnabled:true,pushEnabled:true,inAppEnabled:true,maxAlertsDefault:20,maxDevicesDefault:3,followupCount:2,firstFollowupMinutes:5,nextFollowupMinutes:10,quietStart:'23:00',quietEnd:'07:00',quietTimezone:'Asia/Tehran',criticalBypassQuiet:true,defaultSound:'signal',vibrationEnabled:true,pushTitleTemplate:'هشدار {symbol} / {severity}',pushBodyTemplate:'قیمت {price} به شرط {condition} رسید. هدف: {target}',telegramTitleTemplate:'هشدار قیمت SamadiCapital',pricePrimaryBase:'https://api.binance.com/api/v3',priceFallbackBase:'https://api1.binance.com/api/v3'};
  const policy={telegramAllowed:true,pushAllowed:true,inAppAllowed:true,maxAlerts:20,maxDevices:3,maxAlertsOverride:null,maxDevicesOverride:null,quietStart:'23:00',quietEnd:'07:00',quietTimezone:'Asia/Tehran',soundProfile:'signal',vibrationEnabled:true,adminNote:''};
  if(SESSION?.role==='mentor')return{scopeUid:SESSION.uid,loaded:true,adminTab:'overview',settings,system:{pushConfigured:true,telegramConfigured:true,pendingAcknowledgements:2,failedLast24h:1,unread:4,health:{cron_last_result:{value:{status:'ok',checked:7,triggered:1},updatedAt:'2026-08-29 09:01:00'},price_source:{value:{ok:true,base:'Binance Primary'},updatedAt:'2026-08-29 09:01:00'}}},events:[{title:'هشدار BTC تحویل شد',text:'برای سارا داودی‌فر · ۸ دقیقه قبل'},{title:'اشتراک علی محمدی منقضی شد',text:'امروز · ۰۹:۰۰'}],stats:{active:7,triggeredMonth:18},students:[
    {uid:'09120000001',name:'سارا داودی‌فر',status:'active',endsAt:'2026-10-01',activeAlerts:3,telegram:true,pushDevices:2,subscription:{status:'active',plan:'price_alerts_pro',ends_at:'2026-10-01'},policy:{...policy},devices:[{id:'ps_demo_sara_phone',device_name:'Galaxy S24 · PWA',platform:'Android',status:'active',last_success_at:'2026-08-29 08:58:00',failure_count:0}]},
    {uid:'09120000002',name:'علی محمدی',status:'expired',endsAt:'2026-08-20',activeAlerts:0,telegram:false,pushDevices:0,subscription:{status:'expired',plan:'price_alerts_pro',ends_at:'2026-08-20'},policy:{...policy,pushAllowed:false},devices:[]},
    {uid:'09120000003',name:'نازنین کریمی',status:'inactive',endsAt:null,activeAlerts:0,telegram:false,pushDevices:1,subscription:{status:'inactive',plan:'price_alerts_pro',ends_at:null},policy:{...policy,maxAlertsOverride:10,maxAlerts:10},devices:[{id:'ps_demo_nazanin_laptop',device_name:'Chrome · Laptop',platform:'Windows',status:'active',failure_count:1}]}
  ],deliveries:[{id:'dl_demo_1',uid:'09120000001',channel:'push',status:'sent',response_code:201,created_at:'2026-08-29 08:58:00'},{id:'dl_demo_2',uid:'09120000001',channel:'telegram',status:'acknowledged',response_code:200,created_at:'2026-08-29 08:58:00'},{id:'dl_demo_3',uid:'09120000003',channel:'push',status:'failed',error_code:'push_subscription_expired',created_at:'2026-08-28 20:10:00'}],audit:[{action:'settings_updated',target_type:'system',target_id:'1',created_at:'2026-08-29 08:30:00'}]};
  return{scopeUid:SESSION?.uid,loaded:true,entitlement:{active:true,status:'active',plan:'price_alerts_pro',endsAt:'2026-10-01'},telegram:{linked:true,username:'sara_davoodifar'},push:{configured:true,publicKey:'DEMO_PUBLIC_VAPID_KEY',devices:[{id:'ps_demo_phone',device_name:'Galaxy S24 · نصب‌شده',platform:'Android',status:'active',last_success_at:'2026-08-29T08:58:00Z',failure_count:0}]},channels:{settings:{serviceEnabled:true,telegramEnabled:true,pushEnabled:true,inAppEnabled:true},policy},inbox:[{id:'in_demo_1',title:'هشدار ETH / مهم',body:'قیمت ۴٬۶۶۴ به محدوده هدف رسید.',severity:'important',status:'unread',created_at:'2026-08-29T08:58:00Z'},{id:'in_demo_2',title:'هشدار BTC / عادی',body:'عبور رو به بالا ثبت و در تلگرام تأیید شد.',severity:'normal',status:'acknowledged',created_at:'2026-08-28T19:20:00Z'}],unread:1,prices:{...ALERT_PRICE_DEMO},stats:{active:2,triggeredMonth:5},events:[
    {title:'هشدار ETH تأیید شد',text:'ورود به محدوده ۴٬۶۶۰ دلار · ۱۲ دقیقه قبل'},
    {title:'هشدار BTC بروزرسانی شد',text:'هدف جدید ۱۱۹٬۵۰۰ دلار · امروز'},
    {title:'تلگرام متصل شد',text:'ارسال آزمایشی با موفقیت انجام شد · ۲ روز قبل'}
  ],alerts:[
    {id:'demo-btc',symbol:'BTC',targetPrice:119500,condition:'above',deliveryMode:'standard',frequency:'once',severity:'important',channels:{telegram:true,push:true,inApp:true},note:'بررسی ستاپ تایم‌فریم 1H',status:'active',lastPrice:117842.30,lastTriggeredAt:null,createdAt:'2026-08-25T10:00:00Z'},
    {id:'demo-eth',symbol:'ETH',targetPrice:4660,condition:'zone',tolerance:0.35,deliveryMode:'persistent',frequency:'cross',severity:'critical',channels:{telegram:true,push:true,inApp:true},note:'ناحیه تصمیم؛ قبل از ورود چک‌لیست بررسی شود',status:'triggered',lastPrice:4664.12,lastTriggeredAt:'2026-08-28T17:52:00Z',createdAt:'2026-08-24T10:00:00Z'},
    {id:'demo-sol',symbol:'SOL',targetPrice:198,condition:'below',deliveryMode:'silent',frequency:'once',severity:'normal',channels:{telegram:false,push:true,inApp:true},note:'فقط رصد حمایت روزانه',status:'paused',lastPrice:204.38,lastTriggeredAt:null,createdAt:'2026-08-23T10:00:00Z'}
  ]};
}

function alertConditionLabel(v,tol){return v==='above'?'عبور رو به بالا':v==='below'?'عبور رو به پایین':`ورود به محدوده ±${faNum(tol||.5)}٪`}
function alertDeliveryLabel(v){return v==='silent'?'بی‌صدا':v==='persistent'?'پیگیر تا تأیید':'عادی'}
function alertStatusLabel(v){return v==='paused'?'متوقف':v==='triggered'?'ارسال‌شده':v==='fired'?'تکمیل‌شده':'فعال'}
function alertSafeId(v){return String(v||'').replace(/[^0-9A-Za-z_-]/g,'')}
function alertPrice(v){return fmtPrice(Number(v))}
// آستانه‌ی «این عدد نمی‌تواند درست باشد». ۱۰ برابر عمداً سخاوتمندانه است:
// هدفِ بلندمدتِ ۳ یا ۴ برابری واقعاً وجود دارد و نباید مزاحمش شویم. چیزی که
// روی پروداکشن دیدیم ۹۷ تا ۱۱۵۸ برابر بود — خطای واحد یا اعشار، نه پیش‌بینی.
const ALERT_SCALE_LIMIT = 10;
// نسبت را همیشه بزرگ‌تر از یک برمی‌گرداند تا مقایسه ساده بماند
function alertScaleRatio(price, target){
  const p = Number(price), t = Number(target);
  if(!(p > 0) || !(t > 0)) return null;
  return t > p ? t / p : p / t;
}
function alertScaleOff(price, target){
  const r = alertScaleRatio(price, target);
  return r !== null && r >= ALERT_SCALE_LIMIT ? r : null;
}
function alertEmptyMarkup(text){return`<div class="alert-empty">${ALERT_ICONS.empty}${esc(text)}</div>`}

async function loadAlertDashboard(force=false){
  if(ALERT_STATE.loading||(!force&&ALERT_STATE.loaded))return;
  const hadLoaded=ALERT_STATE.loaded,previousUnread=Number(ALERT_STATE.unread||0);
  ALERT_STATE.loading=true;ALERT_STATE.error='';
  if(!hadLoaded)renderPriceAlerts();   // v18.6: refresh پس‌زمینه دیگر فرم را با اسکلتون جایگزین نمی‌کند
  try{
    const endpoint=SESSION?.role==='mentor'?'/api/mentor/alert-control-center':'/api/alerts/dashboard';
    const r=await apiFetch(endpoint);
    if(!r||!r.ok)throw new Error(r?.status===402?'subscription_required':'load_failed');
    const data=await r.json();ALERT_STATE={...ALERT_EMPTY_STATE(),...data,scopeUid:SESSION?.uid,loaded:true,loading:false,loadedAt:Date.now()};
    if(data.channels?.settings){const s=data.channels.settings;ALERT_STATE.pricing={price:s.subscriptionPrice,currency:s.subscriptionCurrency,days:s.subscriptionDays,instructions:s.subscriptionInstructions};}if(hadLoaded&&Number(ALERT_STATE.unread||0)>previousUnread){const latest=(ALERT_STATE.inbox||[]).find(x=>x.status==='unread');playInAppAlert(latest?.severity||'normal',ALERT_STATE.channels?.policy?.soundProfile||'signal',ALERT_STATE.channels?.policy?.vibrationEnabled!==false)}setTimeout(handlePendingAlertRoute,0);
  }catch(e){ALERT_STATE={...ALERT_STATE,scopeUid:SESSION?.uid,loaded:true,loading:false,error:'دریافت اطلاعات هشدارها ممکن نشد. اتصال Staging را بررسی کنید.'}}
  renderPriceAlerts();
}

function ensureAlertScope(){
  // v18.1 FIX: فقط وقتی «کاربر» عوض شده وضعیت را صفر کن.
  // شرط قبلی (&& loaded) هنگام بارگذاری، loading را هم صفر می‌کرد و
  // render → load → render حلقه‌ی بی‌نهایت می‌ساخت (صفحه می‌پرید و کلیک کار نمی‌کرد).
  if(ALERT_STATE.scopeUid===SESSION?.uid)return;
  ALERT_STATE=alertDemoMode()?demoAlertDashboard():ALERT_EMPTY_STATE();
  ALERT_STATE.scopeUid=SESSION?.uid;
}

let _alertRendering=false;
// v18.6/v18.9.1: فوکوس، مکان نشانگر و اسکرول را نگه دار تا صفحه هنگام تایپ نپرد
function preserveFocus(container,fn){
  const ae=document.activeElement,keepId=(ae&&container.contains(ae)&&ae.id)?ae.id:'';
  let selS=null,selE=null;
  if(keepId){try{selS=ae.selectionStart;selE=ae.selectionEnd}catch(_){}}
  const sy=window.scrollY;
  fn();
  if(keepId){
    const back=document.getElementById(keepId);
    if(back){
      try{back.focus({preventScroll:true})}catch(_){try{back.focus()}catch(__){}}
      if(selS!=null){try{back.setSelectionRange(selS,selE)}catch(_){}}
    }
  }
  if(Math.abs(window.scrollY-sy)>2)window.scrollTo(0,sy);
}

function renderPriceAlerts(){
  const el=document.getElementById('alerts-content');if(!el)return;
  if(_alertRendering)return;            // محافظ: رندرِ تودرتو ممنوع
  _alertRendering=true;
  preserveFocus(el,()=>{ try{ _renderPriceAlerts(el); } finally { _alertRendering=false; } });
}

// v18.9.1: فقط خودِ فرم را دوباره بساز، نه کل صفحه‌ی هشدار.
function renderAlertEditorSlot(){
  const slot=document.getElementById('alert-editor-slot');
  if(!slot){renderPriceAlerts();return}
  preserveFocus(slot,()=>{ slot.innerHTML=ALERT_EDITOR?renderAlertEditor():''; });
  if(ALERT_EDITOR)updateAlertEditorPrice();
}
function _renderPriceAlerts(el){
  ensureAlertScope();
  if(!ALERT_STATE.loaded&&!ALERT_STATE.loading){loadAlertDashboard();return}
  if(ALERT_STATE.loading&&!ALERT_STATE.loaded){el.innerHTML=`<div class="alert-shell fade-up"><section class="alert-hero"><div class="alert-kicker">MULTICHANNEL PRICE INTELLIGENCE</div><h1 class="alert-title">هشدار هوشمند قیمت</h1><p class="alert-sub">در حال همگام‌سازی اشتراک، دستگاه‌ها و کانال‌های اعلان…</p></section><div class="alert-panel">${alertEmptyMarkup('در حال دریافت اطلاعات امن از سرور')}</div></div>`;return}
  if(SESSION?.role==='mentor'){renderMentorPriceAlerts(el);return}
  const e=ALERT_STATE.entitlement||{};
  const alerts=ALERT_STATE.alerts||[],active=alerts.filter(a=>a.status==='active'||a.status==='triggered').length,devices=ALERT_STATE.push?.devices||[];
  el.innerHTML=`<div class="alert-shell fade-up">
    <section class="alert-hero"><div class="alert-hero-top"><div><div class="alert-kicker">MULTICHANNEL PRICE INTELLIGENCE</div><h1 class="alert-title">هشدار هوشمند قیمت</h1><p class="alert-sub">بازار مستقل از بازبودن سایت پایش می‌شود؛ هنگام رسیدن قیمت، اعلان هم‌زمان در تلگرام، گوشی یا دسکتاپ و صندوق داخل ژورنال نمایش داده می‌شود—بدون پیامک و بدون هزینه ارسال هر هشدار.</p><div class="alert-live">Telegram + Direct Push + In-App · بدون سرویس پیامکی</div>${alertEngineBadge()}${alertDemoMode()?`<button class="btn btn-ghost" style="margin-top:12px" onclick="toggleDemoAlertEntitlement()">${e.active?'مشاهده حالت اشتراک غیرفعال':'بازگشت به اشتراک فعال'}</button>`:''}</div><div class="alert-orbit" aria-hidden="true">${ALERT_ICONS.bell}</div></div></section>
    ${ALERT_STATE.error?`<div class="err-msg" style="display:block">${esc(ALERT_STATE.error)}</div>`:''}
    ${!e.active?(isMember()&&window.BILLING?BILLING.alertsLock():isMember()?(loadBilling().then(()=>renderPriceAlerts()).catch(()=>{}),''):renderPremiumLock()):`<div class="alert-kpis"><div class="alert-kpi"><small>هشدارهای در حال پایش</small><strong class="gold">${faNum(active)}</strong><span>از سقف ${faNum(ALERT_STATE.channels?.policy?.maxAlerts||20)} هشدار</span></div><div class="alert-kpi"><small>فعال‌شده در این ماه</small><strong class="green">${faNum(ALERT_STATE.stats?.triggeredMonth||0)}</strong><span>با ثبت زمان و نتیجه تحویل</span></div><div class="alert-kpi"><small>اعلان خوانده‌نشده</small><strong class="${ALERT_STATE.unread?'gold':''}">${faNum(ALERT_STATE.unread||0)}</strong><span>${faNum(devices.filter(d=>d.status==='active').length)} دستگاه Push فعال</span></div></div>
    ${alarmPrefCard()}
    ${renderStudentChannelStatus()}
    <div id="alert-editor-slot">${ALERT_EDITOR?renderAlertEditor():''}</div>
    <div class="alert-layout"><section class="alert-panel"><div class="alert-panel-head"><div><div class="alert-panel-title">هشدارهای من</div><div style="font-size:9px;color:var(--muted);margin-top:4px">شرط‌ها فقط هنگام عبور واقعی قیمت فعال می‌شوند</div></div><button class="btn btn-primary" style="width:auto;margin:0;padding:9px 15px;min-height:40px" onclick="openAlertEditor()">＋ هشدار جدید</button></div>${alerts.length?renderAlertList(alerts):alertEmptyMarkup('هنوز هشداری نساخته‌ای؛ اولین قیمت مهم خود را ثبت کن.')}</section><aside style="display:grid;gap:14px;align-content:start">${renderPushCard()}${renderTelegramCard()}${renderAlertInbox()}${renderAlertTimeline()}</aside></div>`}
  </div>`;
  if(ALERT_EDITOR)updateAlertEditorPrice();
  refreshAlertCardPrices();
  startAlertLive();
}

function renderPremiumLock(){
  const pr=ALERT_STATE.pricing||{}, rq=ALERT_STATE.request||null;
  const priceLine = Number(pr.price)>0
    ? `<div class="premium-price"><b>${faNum(pr.price)}</b> <span>${esc(pr.currency||'USDT')}</span><small>برای ${faNum(pr.days||30)} روز</small></div>`
    : `<div class="ai-note" style="margin-bottom:14px">قیمت اشتراک هنوز توسط استاد اعلام نشده است.</div>`;
  const instructions = pr.instructions ? `<div class="premium-pay">${esc(pr.instructions)}</div>` : '';
  let action;
  if(rq && rq.status==='pending'){
    action = `<div class="premium-pending">⏳ درخواست شما ثبت شده و در انتظار تأیید استاد است${rq.createdAt?` · ${fmtDateFa(String(rq.createdAt).slice(0,10))}`:''}</div>`;
  } else if(rq && rq.status==='rejected'){
    action = `<div class="premium-pending" style="border-color:var(--red);color:var(--red)">درخواست قبلی تأیید نشد. برای پیگیری با استاد صحبت کن.</div>
      <button class="btn btn-primary" style="width:auto;padding:12px 24px;margin-top:10px" onclick="requestAlertPremium()">درخواست دوباره</button>`;
  } else {
    action = `<button class="btn btn-primary" style="width:auto;padding:12px 24px" onclick="requestAlertPremium()">درخواست فعال‌سازی</button>`;
  }
  return`<section class="premium-lock"><div class="premium-lock-mark">${ALERT_ICONS.bell}</div><div class="alert-kicker" style="text-align:center">PAID ADD-ON / PRICE ALERTS PRO</div><h2>ماژول حرفه‌ای هشدار قیمت</h2><p>این بخش افزونه پولی مستقل از ژورنال است. بعد از فعال‌سازی، پایش بازار با تلگرام، Push مستقیم و صندوق اعلان ادامه دارد؛ هیچ پیامک یا سرویس دارای هزینه ارسال استفاده نمی‌شود.</p>${priceLine}<div class="premium-features"><span class="premium-feature">Push گوشی و دسکتاپ</span><span class="premium-feature">تلگرام و صندوق اعلان</span><span class="premium-feature">پیگیری تا تأیید</span><span class="premium-feature">کنترل کامل مدیر</span></div>${instructions}${action}</section>`}

// قیمت روی کارت هشدار (v20.3)
// last_price فقط تا وقتی هشدار «فعال» است تازه می‌ماند؛ به‌محض فعال‌شدن یا
// توقف، کرون دیگر به‌روزش نمی‌کند و همان عدد لحظه‌ی رویداد باقی می‌ماند.
// نشان‌دادن آن با برچسب «قیمت فعلی» گمراه‌کننده است.
function alertLastPriceLabel(a){
  const st=String(a.status||'active');
  if(a.lastPrice==null) return 'قیمت فعلی —';
  return st==='active'
    ? `قیمت فعلی ${alertPrice(a.lastPrice)}`
    : `قیمت هنگام رویداد ${alertPrice(a.lastPrice)}`;
}

// برای هشدارهایی که دیگر پایش نمی‌شوند، قیمت واقعیِ حالا را می‌گیریم و
// کنارش می‌گذاریم — بدون رندر دوباره‌ی کل صفحه.
async function refreshAlertCardPrices(){
  if(alertDemoMode())return;
  const nodes=[...document.querySelectorAll('#alerts-content .pa2[data-live="0"] [data-ap-when]')].map(n=>(n.dataset.livePrice=n.closest('.pa2').dataset.sym,n));
  const stale=nodes.filter(n=>!n.dataset.done);
  if(!stale.length)return;
  const syms=[...new Set(stale.map(n=>n.dataset.livePrice).filter(Boolean))].slice(0,20);
  if(!syms.length)return;
  let prices={};
  try{
    const r=await apiFetch('/api/prices?symbols='+encodeURIComponent(syms.join(',')));
    if(!r||!r.ok)return;
    prices=(await r.json()).prices||{};
  }catch(_){ return }
  for(const n of stale){
    const p=Number(prices[n.dataset.livePrice]);
    if(!Number.isFinite(p)||p<=0)continue;
    if(!document.body.contains(n))continue;
    n.dataset.done=1;
    n.innerHTML=`${n.textContent?esc(n.textContent)+' · ':''}<b style="color:var(--gold)">حالا ${esc(alertPrice(p))}</b>`;
  }
}

// ── v26.5: کارتِ هشدار به سبکِ TradingView ──
// فاصله تا هدف، به درصدِ قیمتِ فعلی. dir: جهتی که قیمت باید برود. inside: شرط همین حالا برقرار است.
function alertDistance(a, price){
  const p = Number(price ?? a.lastPrice), t = Number(a.targetPrice);
  if (!(p > 0) || !(t > 0)) return null;
  const d = (t - p) / p * 100, dir = d >= 0 ? 'up' : 'down';
  if (a.condition === 'zone') { const tol = Number(a.tolerance || .5), off = Math.abs(p - t) / t * 100 - tol; return { pct: Math.max(0, off), dir, inside: off <= 0, d }; }
  const inside = a.condition === 'above' ? p >= t : p <= t;
  return { pct: Math.abs(d), dir, inside, d };
}
function alertDistText(x){
  if (!x) return { big: '—', small: 'قیمت هنوز نیامده' };
  if (x.inside) return { big: 'در هدف', small: 'شرط همین حالا برقرار است' };
  const v = x.pct < 1 ? x.pct.toFixed(2) : x.pct < 10 ? x.pct.toFixed(1) : Math.round(x.pct);
  return { big: faNum(v).replace('.', '٫') + '٪', small: `تا هدف ${x.dir === 'up' ? 'رو به بالا' : 'رو به پایین'}` };
}
// نوار: هدف وسط، پنجره‌ای که قیمتِ فعلی را در بر بگیرد (حداقل ±۲٪)؛ محورِ قیمت چپ به راست، مثل نمودار
function alertTrack(a, price){
  const p = Number(price ?? a.lastPrice), t = Number(a.targetPrice);
  if (!(p > 0) || !(t > 0)) return { pos: 50, band: null };
  const d = (p - t) / t * 100, tol = a.condition === 'zone' ? Number(a.tolerance || .5) : 0;
  const W = Math.max(2, Math.abs(d) * 1.3, tol * 2.4);
  return { pos: Math.max(3, Math.min(97, 50 + d / W * 50)), band: tol ? [50 - tol / W * 50, 50 + tol / W * 50] : null };
}
function alertAgo(v){
  if (!v) return '';
  const t = Date.parse(/[zZ]|[+-]\d\d:?\d\d$/.test(String(v)) ? v : String(v).replace(' ', 'T') + 'Z');
  if (!t) return '';
  const s = Math.max(0, (Date.now() - t) / 1000);
  return s < 60 ? `${faNum(Math.max(1, Math.round(s)))} ثانیه پیش` : s < 3600 ? `${faNum(Math.round(s / 60))} دقیقه پیش` : s < 86400 ? `${faNum(Math.round(s / 3600))} ساعت پیش` : `${faNum(Math.round(s / 86400))} روز پیش`;
}
const ALERT_COND = { above: ['عبور رو به بالا', 'M7 17 17 7M9 7h8v8'], below: ['عبور رو به پایین', 'M7 7l10 10M17 9v8H9'], zone: ['ورود به محدوده', 'M4 9h16M4 15h16'] };
function alertCondChip(a){
  const c = ALERT_COND[a.condition] || ALERT_COND.zone;
  const lbl = a.condition === 'zone' ? `محدوده ±${faNum(a.tolerance || .5).replace('.', '٫')}٪` : c[0];
  return `<span class="pa2-cond"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${c[1]}"/></svg>${lbl}</span>`;
}
function alertStatusPill(a){
  const st = String(a.status || 'active');
  return `<span class="pa2-st st-${st}"><i></i>${alertStatusLabel(st)}</span>`;
}
function alertChannels(a){
  const c = a.channels || { telegram: true, push: true, inApp: true };
  const one = (on, ico, name) => `<span class="pa2-chn${on ? ' on' : ''}" title="${name}${on ? '' : ' (خاموش)'}">${ALERT_ICONS[ico]}</span>`;
  return one(c.telegram, 'telegram', 'تلگرام') + one(c.push, 'push', 'نوتیفیکیشن گوشی') + one(c.inApp, 'inbox', 'داخل ژورنال');
}
const PA2_ICO = {
  test: '<path d="M10.27 21a2 2 0 0 0 3.46 0"/><path d="M22 8c0-2.3-.8-4.3-2-6"/><path d="M3.26 15.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.96 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.41 5.96-2.74 7.33"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/>',
  hist: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
  edit: '<path d="M21.17 6.81a1 1 0 0 0-3.98-3.99L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z"/><path d="m15 5 4 4"/>',
  del: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>'
};
const pa2Btn = (k, label, on, cls = '') => `<button type="button" class="pa2-btn ${cls}" onclick="${on}" title="${label}" aria-label="${label}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${PA2_ICO[k]}</svg><span>${label}</span></button>`;
function renderPriceAlertCard(a){
  const id = alertSafeId(a.id), st = String(a.status || 'active'), sev = a.severity || 'normal', sym = String(a.symbol || '?');
  const x = alertDistance(a), dt = alertDistText(x), tr = alertTrack(a), live = st === 'active';
  const scale = alertScaleOff(a.lastPrice, a.targetPrice);
  const when = st === 'active' ? (a.lastCheckedAt ? `بررسی ${alertAgo(a.lastCheckedAt)}` : '') : (a.lastTriggeredAt ? `ارسال ${alertAgo(a.lastTriggeredAt)}` : '');
  return `<article class="pa2 st-${st} sev-${sev}${x && x.inside ? ' inside' : ''}" data-aid="${id}" data-sym="${esc(sym)}" data-live="${live ? 1 : 0}">
    <div class="pa2-top">${coinLogo(sym)}
      <div class="pa2-id"><b><bdi dir="ltr">${esc(sym)}<span>/USDT</span></bdi></b>${alertCondChip(a)}</div>
      <div class="pa2-tags">${sev !== 'normal' ? `<span class="pa2-sev">${sev === 'critical' ? 'بحرانی' : 'مهم'}</span>` : ''}${alertStatusPill(a)}</div></div>
    <div class="pa2-mid">
      <div class="pa2-col"><u>هدف</u><b class="pa2-tg"><bdi dir="ltr">${alertPrice(a.targetPrice)}</bdi></b></div>
      <div class="pa2-col pa2-dist ${x ? (x.inside ? 'in' : x.dir) : ''}"><b data-ap-dist>${dt.big}</b><small data-ap-dsub>${dt.small}</small></div>
      <div class="pa2-col pa2-nowc"><u>${live ? 'قیمت فعلی' : 'قیمت هنگام رویداد'}</u><b data-ap-price><bdi dir="ltr">${a.lastPrice == null ? '—' : alertPrice(a.lastPrice)}</bdi></b><small data-ap-when>${when}</small></div>
    </div>
    <div class="pa2-track" aria-hidden="true">${tr.band ? `<span class="pa2-band" style="left:${tr.band[0].toFixed(1)}%;width:${(tr.band[1] - tr.band[0]).toFixed(1)}%"></span>` : ''}
      <span class="pa2-fill" style="left:${Math.min(50, tr.pos).toFixed(1)}%;width:${Math.abs(tr.pos - 50).toFixed(1)}%"></span>
      <span class="pa2-flag"></span><span class="pa2-now" style="left:${tr.pos.toFixed(1)}%"></span></div>
    ${scale ? `<div class="pa-warn">⚠️ هدف حدود ${faNum(Math.round(scale))} برابرِ قیمت فعلی است — این هشدار عملاً هرگز فعال نمی‌شود. ویرایشش کن.</div>` : ''}
    ${a.note ? `<div class="pa2-note">${esc(a.note)}</div>` : ''}
    <div class="pa2-foot">
      <div class="pa2-meta"><span class="pa2-chs">${alertChannels(a)}</span><span>${alertDeliveryLabel(a.deliveryMode)} · ${a.frequency === 'cross' ? 'هر عبور' : 'یک‌بار'}</span></div>
      <div class="pa2-act"><button class="switch ${st !== 'paused' && st !== 'fired' ? 'on' : ''}" onclick="togglePriceAlert('${id}')" aria-label="توقف یا فعال‌سازی"></button>
        ${pa2Btn('test', 'آزمایش', `testPriceAlert('${id}')`)}${pa2Btn('hist', 'تاریخچه', `openAlertHistory('${id}')`)}${pa2Btn('edit', 'ویرایش', `openAlertEditor('${id}')`)}
        <span class="pa2-sep"></span>${pa2Btn('del', 'حذف', `deletePriceAlert('${id}')`, 'danger')}</div>
    </div>
  </article>`;
}
// فهرست: فعال‌ها (نزدیک‌ترین بالا)، ارسال‌شده‌ها (تازه‌ترین بالا)، متوقف/تکمیل‌شده
function alertGroups(alerts){
  const near = a => { const x = alertDistance(a); return x ? (x.inside ? -1 : x.pct) : 1e9; };
  const ts = a => Date.parse(String(a.lastTriggeredAt || '').replace(' ', 'T')) || 0;
  const g = [['active', 'فعال', alerts.filter(a => (a.status || 'active') === 'active').sort((p, q) => near(p) - near(q))],
    ['triggered', 'ارسال‌شده', alerts.filter(a => a.status === 'triggered').sort((p, q) => ts(q) - ts(p))],
    ['paused', 'متوقف و تکمیل‌شده', alerts.filter(a => a.status === 'paused' || a.status === 'fired')]];
  return g.filter(x => x[2].length);
}
function alertViewMode(){ try { return localStorage.getItem('sc_alert_view') === 'rows' ? 'rows' : 'cards'; } catch (_) { return 'cards'; } }
function setAlertView(v){ try { localStorage.setItem('sc_alert_view', v); } catch (_) {} renderPriceAlerts(); }
function renderAlertList(alerts){
  const v = alertViewMode();
  return `<div class="pa2-view" role="group" aria-label="نمای فهرست">
      <button type="button" class="${v === 'cards' ? 'on' : ''}" onclick="setAlertView('cards')">کارت</button><button type="button" class="${v === 'rows' ? 'on' : ''}" onclick="setAlertView('rows')">فشرده</button></div>
    ${alertGroups(alerts).map(([k, label, list]) => `<div class="pa2-group g-${k}"><div class="pa2-gh"><i></i>${label}<span>${faNum(list.length)}</span></div>
      <div class="alert-list pa2-list ${v}">${list.map(renderPriceAlertCard).join('')}</div></div>`).join('')}`;
}
// قیمتِ زنده روی کارت‌های فعال: هر ۳۰ ثانیه، فقط وقتی صفحه‌ی هشدار دیده می‌شود
let ALERT_LIVE_TIMER = null;
function startAlertLive(){
  if (ALERT_LIVE_TIMER || alertDemoMode()) return;
  ALERT_LIVE_TIMER = setInterval(alertLiveTick, 30000);
  setTimeout(alertLiveTick, 1500);
}
async function alertLiveTick(){
  const cards = [...document.querySelectorAll('#alerts-content .pa2[data-live="1"]')];
  if (!cards.length) { if (!document.getElementById('alerts-content')?.offsetParent) { clearInterval(ALERT_LIVE_TIMER); ALERT_LIVE_TIMER = null; } return; }
  if (document.visibilityState !== 'visible') return;
  const syms = [...new Set(cards.map(c => c.dataset.sym).filter(x => /^[A-Z0-9]{1,12}$/.test(x)))].slice(0, 20);
  if (!syms.length) return;
  let prices = {};
  try { const r = await apiFetch('/api/prices?symbols=' + encodeURIComponent(syms.join(','))); if (!r || !r.ok) return; prices = (await r.json()).prices || {}; } catch (_) { return; }
  for (const c of cards) {
    const p = Number(prices[c.dataset.sym]); if (!(p > 0) || !document.body.contains(c)) continue;
    const a = (ALERT_STATE.alerts || []).find(z => alertSafeId(z.id) === c.dataset.aid); if (!a) continue;
    const prev = Number(c.dataset.p || a.lastPrice), x = alertDistance(a, p), dt = alertDistText(x), tr = alertTrack(a, p);
    c.dataset.p = p;
    const q = sel => c.querySelector(sel);
    q('[data-ap-price]').innerHTML = `<bdi dir="ltr">${alertPrice(p)}</bdi>`;
    q('[data-ap-when]').textContent = 'زنده · همین حالا';
    q('[data-ap-dist]').textContent = dt.big; q('[data-ap-dsub]').textContent = dt.small;
    q('.pa2-dist').className = `pa2-col pa2-dist ${x ? (x.inside ? 'in' : x.dir) : ''}`;
    c.classList.toggle('inside', !!(x && x.inside));
    const now = q('.pa2-now'), fill = q('.pa2-fill');
    if (now) now.style.left = tr.pos.toFixed(1) + '%';
    if (fill) { fill.style.left = Math.min(50, tr.pos).toFixed(1) + '%'; fill.style.width = Math.abs(tr.pos - 50).toFixed(1) + '%'; }
    if (prev > 0 && p !== prev) { const b = q('[data-ap-price]'); b.classList.remove('fl-up', 'fl-dn'); void b.offsetWidth; b.classList.add(p > prev ? 'fl-up' : 'fl-dn'); }
  }
}

// کارت تنظیم آلارم — دانشجویی که صدا نمی‌خواهد باید بتواند خاموشش کند،
// و کسی که می‌خواهد باید بتواند قبل از رسیدنِ هشدار امتحانش کند.
function alarmPrefCard(){
  const on = alarmEnabled(), cur = alarmSound().id;
  return `<div class="alarm-pref">
    <div class="alarm-pref-b"><b>آلارم صوتی</b>
      <em>وقتی ژورنال باز است، هشدار با پنجرهٔ تمام‌صفحه و صدای بلند زنگ می‌زند — حتی بدون نوتیفیکیشن مرورگر.
        وقتی بسته است، صدا همان صدای اعلانِ گوشی است؛ برای صدای بلند، صدای مخصوصِ تلگرام را پایین فعال کن.</em></div>
    <button class="alarm-try" type="button" onclick="startAlarm('important','امتحان آلارم','همین‌طور می‌شنوی')">امتحان</button>
    <button class="sw${on?' on':''}" type="button" role="switch" aria-checked="${on}"
      aria-label="آلارم صوتی" onclick="toggleAlarmPref(this)"></button>
    <div class="alarm-sounds" role="radiogroup" aria-label="صدای آلارم">
      <span class="lbl">صدای آلارم — بزن تا بشنوی</span>
      ${ALARM_SOUNDS.map(x => `<button type="button" role="radio" aria-checked="${x.id===cur}"
        class="asnd${x.id===cur?' on':''}" onclick="pickAlarmSound('${x.id}',this)">${x.label}</button>`).join('')}
    </div>
    <div class="alarm-opts">
      <label>بلندی صدا: <b id="alarm-vol-v">${faNum(Math.round(alarmVolume()*100))}٪</b>
        <input type="range" min="10" max="100" step="5" value="${Math.round(alarmVolume()*100)}" oninput="setAlarmVolume(this.value)"></label>
      <label>مدت زنگ
        <select onchange="L.s('sc_alarm_dur',this.value)">${ALARM_DURATIONS.map(([v,t]) => `<option value="${v}"${v===alarmDuration()?' selected':''}>${t}</option>`).join('')}</select></label>
    </div>
    <div class="alarm-tg">📱 <b>وقتی ژورنال بسته است:</b> تلگرام اجازه می‌دهد برای ربات هشدار، صدای مخصوص بگذاری.
      دکمهٔ زیر صدای آلارمِ بلند را در تلگرام برایت می‌فرستد؛ روی آن نگه دار ← «Save for Notifications»، بعد در اعلان‌های همان ربات انتخابش کن.
      <br><button type="button" onclick="sendTelegramAlarmSound(this)">🔔 فرستادن صدای آلارم به تلگرامم</button></div>
  </div>`;
}

// انتخاب + پیش‌نمایشِ یک‌باره. عمداً کل آلارم را راه نمی‌اندازد — کسی که دارد
// صدا انتخاب می‌کند نمی‌خواهد بعدش دنبال دکمه‌ی خاموش بگردد.
function pickAlarmSound(id, btn){
  setAlarmSound(id);
  const wrap = btn.parentElement;
  wrap.querySelectorAll('.asnd').forEach(b => {
    const active = b === btn;
    b.classList.toggle('on', active);
    b.setAttribute('aria-checked', String(active));
  });
  unlockAlarmAudio();
  setTimeout(() => {
    const ctx = ALARM.ctx;
    if(ctx && ctx.state === 'running') alarmSound().play(ctx, ctx.currentTime, 760);
  }, 60);
}
function toggleAlarmPref(btn){
  const next = !alarmEnabled();
  setAlarmEnabled(next);
  btn.classList.toggle('on', next);
  btn.setAttribute('aria-checked', String(next));
  if(next) unlockAlarmAudio();
}

function renderStudentChannelStatus(){const settings=ALERT_STATE.channels?.settings||{},policy=ALERT_STATE.channels?.policy||{},pushReady=(ALERT_STATE.push?.devices||[]).some(d=>d.status==='active'),tgReady=!!ALERT_STATE.telegram?.linked;return`<section class="alert-panel"><div class="alert-panel-head"><div><div class="alert-panel-title">وضعیت کانال‌های رایگان</div><div class="cc-help">کانال‌های غیرفعال‌شده توسط مدیر برای این حساب قابل انتخاب نیستند.</div></div><span class="alert-count">LIVE ROUTING</span></div><div class="channel-grid"><div class="channel-card ${settings.telegramEnabled&&policy.telegramAllowed&&tgReady?'ready':settings.telegramEnabled&&policy.telegramAllowed?'':'blocked'}"><div class="channel-icon">${ALERT_ICONS.telegram}</div><div class="channel-copy"><b>تلگرام</b><span>${!settings.telegramEnabled||!policy.telegramAllowed?'غیرفعال از پنل مدیر':tgReady?'متصل و آماده':'نیازمند اتصال'}</span></div><span class="channel-state">${tgReady?'آماده':'تنظیم'}</span></div><div class="channel-card ${settings.pushEnabled&&policy.pushAllowed&&pushReady?'ready':settings.pushEnabled&&policy.pushAllowed?'':'blocked'}"><div class="channel-icon">${ALERT_ICONS.push}</div><div class="channel-copy"><b>Push گوشی و دسکتاپ</b><span>${!settings.pushEnabled||!policy.pushAllowed?'غیرفعال از پنل مدیر':pushReady?`${faNum(ALERT_STATE.push.devices.length)} دستگاه متصل`:'نیازمند اجازه مرورگر'}</span></div><span class="channel-state">${pushReady?'آماده':'تنظیم'}</span></div><div class="channel-card ${settings.inAppEnabled&&policy.inAppAllowed?'ready':'blocked'}"><div class="channel-icon">${ALERT_ICONS.inbox}</div><div class="channel-copy"><b>صندوق داخل ژورنال</b><span>${settings.inAppEnabled&&policy.inAppAllowed?'همیشه قابل مشاهده و تأیید':'غیرفعال از پنل مدیر'}</span></div><span class="channel-state">${faNum(ALERT_STATE.unread||0)} جدید</span></div></div></section>`}
function renderTelegramCard(){const t=ALERT_STATE.telegram||{};
  if(!alertDemoMode() && ALERT_STATE.system && ALERT_STATE.system.telegramConfigured===false && !t.linked){
    return`<section class="telegram-card"><div class="telegram-head"><div class="telegram-logo">${ALERT_ICONS.telegram}</div><div><b>اتصال تلگرام</b><p>هنوز توسط استاد راه‌اندازی نشده است</p></div></div><div class="ai-note" style="margin-top:12px">ربات تلگرام آکادمی هنوز فعال نشده. تا آن زمان هشدارها از طریق <b>Push گوشی</b> و <b>صندوق داخل ژورنال</b> به دستت می‌رسند.</div></section>`;
  }
  return`<section class="telegram-card"><div class="telegram-head"><div class="telegram-logo">${ALERT_ICONS.telegram}</div><div><b>اتصال امن تلگرام</b><p>${t.linked?'حساب دریافت‌کننده تأیید شده است':'Chat ID را دستی وارد نمی‌کنی؛ اتصال با لینک یک‌بارمصرف انجام می‌شود'}</p></div></div>${t.linked?`<div class="telegram-ok">متصل${t.username?' به @'+esc(t.username):''}</div><button class="btn btn-ghost" style="width:100%;margin-top:12px" onclick="testTelegramChannel()">ارسال پیام آزمایشی</button>`:`<button class="btn btn-primary" style="margin-top:13px" onclick="connectAlertTelegram()">اتصال به Telegram</button>`}</section>`}
function renderPushCard(){const devices=(ALERT_STATE.push?.devices||[]).filter(d=>d.status==='active'),allowed=ALERT_STATE.channels?.settings?.pushEnabled!==false&&ALERT_STATE.channels?.policy?.pushAllowed!==false;return`<section class="push-card"><div class="telegram-head"><div class="telegram-logo">${ALERT_ICONS.push}</div><div><b>Push مستقیم روی دستگاه</b><p>${!allowed?'این کانال از پنل مدیر غیرفعال است':devices.length?`${faNum(devices.length)} دستگاه آماده دریافت اعلان است`:'با اجازه مرورگر، اعلان حتی هنگام بسته‌بودن سایت نمایش داده می‌شود'}</p></div></div>${devices.length?`<div class="device-list" style="margin-top:11px">${devices.slice(0,3).map(d=>`<div class="device-row"><div><b>${esc(d.device_name||'دستگاه')}</b><span>${esc(d.platform||'PWA')} · ${d.failure_count?`${faNum(d.failure_count)} خطا`:'سالم'}</span></div><button class="mini-btn" onclick="disconnectPushDevice('${alertSafeId(d.id)}')">قطع</button></div>`).join('')}</div><button class="btn btn-ghost" style="width:100%;margin-top:10px" onclick="enablePushAlerts()">افزودن این دستگاه</button>`:`<button class="btn btn-primary" style="margin-top:13px" onclick="enablePushAlerts()" ${allowed?'':'disabled'}>فعال‌سازی Push روی این دستگاه</button>`}<div class="ai-note">Push مستقیم است و هزینه‌ای برای هر اعلان ندارد. در iPhone ابتدا PWA را به Home Screen اضافه کن.</div></section>`}
function renderAlertInbox(){const items=(ALERT_STATE.inbox||[]).slice(0,5);return`<section class="alert-panel"><div class="alert-panel-head"><div class="alert-panel-title">صندوق اعلان</div><span class="alert-count">${faNum(ALERT_STATE.unread||0)} جدید</span></div>${items.length?`<div class="inbox-list">${items.map(x=>`<article class="inbox-item ${x.status==='unread'?'unread':''}"><span class="inbox-severity ${esc(x.severity||'normal')}"></span><div><b>${esc(x.title)}</b><p>${esc(x.body)} · ${esc(x.created_at||'')}</p></div><div class="inbox-actions">${x.status==='unread'?`<button class="mini-btn" onclick="markInbox('${alertSafeId(x.id)}','read')">خواندم</button>`:''}${x.status!=='acknowledged'?`<button class="mini-btn" onclick="markInbox('${alertSafeId(x.id)}','ack')">دیدم</button>`:''}</div></article>`).join('')}</div>`:alertEmptyMarkup('صندوق اعلان هنوز خالی است')}</section>`}
function renderAlertTimeline(){const events=(ALERT_STATE.events||[]).slice(0,4);return`<section class="alert-panel"><div class="alert-panel-head"><div class="alert-panel-title">رویدادهای اخیر</div><span class="alert-count">LOG</span></div>${events.length?`<div class="alert-timeline">${events.map(x=>`<div class="event"><span class="event-dot"></span><div><b>${esc(x.title)}</b><p>${esc(x.text)}</p></div></div>`).join('')}</div>`:alertEmptyMarkup('هنوز رویدادی ثبت نشده است')}</section>`}

function openAlertEditor(id){
  const found=id?(ALERT_STATE.alerts||[]).find(a=>alertSafeId(a.id)===alertSafeId(id)):null;
  ALERT_EDITOR=found?{...found,channels:{telegram:found.channels?.telegram!==false,push:found.channels?.push!==false,inApp:found.channels?.inApp!==false}}:{id:null,symbol:'BTC',targetPrice:'',condition:'above',tolerance:.5,deliveryMode:'standard',frequency:'once',severity:'important',channels:{telegram:true,push:true,inApp:true},note:'',expiresAt:''};renderPriceAlerts();
  setTimeout(()=>document.querySelector('.alert-editor')?.scrollIntoView({behavior:'smooth',block:'start'}),30);
}
function cancelAlertEditor(){ALERT_EDITOR=null;renderPriceAlerts()}
function setAlertDraft(key,value){if(ALERT_EDITOR)ALERT_EDITOR[key]=value}
function chooseAlertMode(key,value,el){
  if(!ALERT_EDITOR)return;
  ALERT_EDITOR[key]=value;
  // «محدوده» فیلد تلرانس را می‌آورد/می‌برد، پس ساختار فرم عوض می‌شود
  if(key==='condition'){renderAlertEditorSlot();return}
  // اهمیت و رفتار اعلان ساختار را عوض نمی‌کنند: فقط انتخاب را جابه‌جا کن
  if(el&&el.parentElement){[...el.parentElement.children].forEach(b=>b.classList.toggle('active',b===el));return}
  renderAlertEditorSlot();
}
function toggleAlertChannel(key,el){
  if(!ALERT_EDITOR)return;
  ALERT_EDITOR.channels=ALERT_EDITOR.channels||{telegram:true,push:true,inApp:true};
  ALERT_EDITOR.channels[key]=!ALERT_EDITOR.channels[key];
  const label=el&&el.closest?el.closest('.channel-pick'):null;
  if(label){label.classList.toggle('active',!!ALERT_EDITOR.channels[key]);return}
  renderAlertEditorSlot();
}
// v26.11: فهرستِ رمزارزهای هشدار (موتورِ قیمت ۱ تا ۱۲ نویسه) و جستجو در آن
function alertKnownCoins(){ return COINS_FULL.filter(x => x !== 'Other' && /^[A-Z0-9]{1,12}$/.test(x)); }
function alertSymbolOptions(d){
  const all = alertKnownCoins(), term = coinQuery(d._q), m = coinMatches(all, d._q), cur = d.symbol, custom = !all.includes(cur);
  const list = term ? (!custom && cur && !m.includes(cur) ? [cur, ...m] : m) : all;
  return list.map(x => `<option value="${x}" ${x === cur ? 'selected' : ''}>${x}/USDT</option>`).join('')
    + `<option value="CUSTOM" ${custom ? 'selected' : ''}>رمزارز دیگر…</option>`;
}
function alertSymbolHint(d){
  const term = coinQuery(d._q).toUpperCase(); if (!term) return '';
  const all = alertKnownCoins(), m = coinMatches(all, d._q);
  if (m.length || !/^[A-Z0-9]{1,12}$/.test(term)) return coinHint(m.length, m.includes(d.symbol) ? d.symbol : null);
  return `«${esc(term)}» در فهرست نیست — <button type="button" class="coin-use" onclick="useCustomAlertSymbol('${term}')">با همین نماد بساز</button>`;
}
function filterAlertSymbols(q){
  if (!ALERT_EDITOR) return;
  ALERT_EDITOR._q = q;
  const all = alertKnownCoins(), was = ALERT_EDITOR.symbol, pick = coinAutoPick(all, q, was);
  if (pick && pick !== was) {
    ALERT_EDITOR.symbol = pick;
    if (!all.includes(was)) { renderAlertEditorSlot(); return; }   // فیلدِ «نماد دلخواه» باید برود
    updateAlertEditorPrice();
  }
  const sel = document.getElementById('al-symbol'), hint = document.getElementById('al-symbol-hint');
  if (sel) sel.innerHTML = alertSymbolOptions(ALERT_EDITOR);
  if (hint) hint.innerHTML = alertSymbolHint(ALERT_EDITOR);
}
function useCustomAlertSymbol(sym){ if (!ALERT_EDITOR) return; ALERT_EDITOR.symbol = sym; ALERT_EDITOR._q = ''; renderAlertEditorSlot(); updateAlertEditorPrice(); }
function handleAlertSymbolSelect(value){
  if(!ALERT_EDITOR)return;
  ALERT_EDITOR.symbol=value==='CUSTOM'?'':value;
  renderAlertEditorSlot();   // فیلد «Symbol دلخواه» ظاهر/پنهان می‌شود
}
function setCustomAlertSymbol(value){if(!ALERT_EDITOR)return;ALERT_EDITOR.symbol=String(value||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,12);updateAlertEditorPrice()}
function renderAlertEditor(){
  const d=ALERT_EDITOR,knownCoins=alertKnownCoins(),custom=!knownCoins.includes(d.symbol),channels=d.channels||{telegram:true,push:true,inApp:true};
  const allowed=ALERT_STATE.channels?.policy||{},system=ALERT_STATE.channels?.settings||{};
  const canTelegram=allowed.telegramAllowed!==false&&system.telegramEnabled!==false,canPush=allowed.pushAllowed!==false&&system.pushEnabled!==false,canInApp=allowed.inAppAllowed!==false&&system.inAppEnabled!==false;
  return`<section class="alert-panel alert-editor"><div class="alert-panel-head"><div><div class="alert-panel-title">${d.id?'ویرایش هشدار':'ساخت هشدار جدید'}</div><div style="font-size:9px;color:var(--muted);margin-top:4px">قیمت مرجع: بازار لحظه‌ای جفت USDT · کانال‌ها زیر کنترل سیاست مدیر هستند</div></div><button class="icon-btn" onclick="cancelAlertEditor()" aria-label="بستن">×</button></div>
  <div class="alert-form-grid"><label class="fg"><span class="fl">رمزارز <span class="req">*</span> <span class="fl-note">${faNum(knownCoins.length)} رمزارز</span></span><input id="al-symbol-search" class="fi coin-search" type="search" autocomplete="off" dir="auto" value="${esc(d._q||'')}" placeholder="🔍 جستجو — مثلاً PAXG، gold یا طلا" oninput="filterAlertSymbols(this.value)"><select id="al-symbol" class="fi" style="margin-top:7px" onchange="handleAlertSymbolSelect(this.value)">${alertSymbolOptions(d)}</select><span id="al-symbol-hint" class="coin-hint">${alertSymbolHint(d)}</span>${custom?`<input id="al-custom-symbol" class="fi" style="margin-top:7px;text-transform:uppercase;direction:ltr;text-align:left" maxlength="12" value="${esc(d.symbol)}" placeholder="SYMBOL مثل POL" oninput="setCustomAlertSymbol(this.value)">`:''}<span id="al-current" class="price-context"><span>قیمت فعلی</span><strong>${custom&&!d.symbol?'پس از ورود Symbol':'در حال دریافت…'}</strong></span></label><label class="fg"><span class="fl">قیمت هدف (USDT) <span class="req">*</span></span><input id="al-target" class="fi" type="number" min="0" step="any" inputmode="decimal" value="${esc(d.targetPrice)}" placeholder="مثلاً 120000" oninput="setAlertDraft('targetPrice',this.value)"><span style="font-size:9px;color:var(--muted)">قیمت باید عددی مثبت و دقیق باشد.</span></label></div>
  <div class="fg" style="margin-top:15px"><span class="fl">شرط فعال‌شدن</span><div class="mode-grid"><button class="mode-option ${d.condition==='above'?'active':''}" onclick="chooseAlertMode('condition','above',this)"><b>↗ عبور رو به بالا</b><span>قیمت از پایین به هدف برسد یا عبور کند</span></button><button class="mode-option ${d.condition==='below'?'active':''}" onclick="chooseAlertMode('condition','below',this)"><b>↘ عبور رو به پایین</b><span>قیمت از بالا به هدف برسد یا پایین‌تر رود</span></button><button class="mode-option ${d.condition==='zone'?'active':''}" onclick="chooseAlertMode('condition','zone',this)"><b>◎ ورود به محدوده</b><span>ورود از هر جهت به ناحیه تصمیم</span></button></div></div>${d.condition==='zone'?`<label class="fg" style="margin-top:12px;max-width:260px"><span class="fl">تلرانس محدوده (درصد)</span><input id="al-tolerance" class="fi" type="number" min="0.05" max="5" step="0.05" value="${esc(d.tolerance)}" oninput="setAlertDraft('tolerance',this.value)"></label>`:''}
  <div class="fg" style="margin-top:15px"><span class="fl">اهمیت هشدار</span><div class="severity-grid"><button class="severity-option ${d.severity==='normal'?'active':''}" onclick="chooseAlertMode('severity','normal',this)"><b>عادی</b><span>اعلان سبک و قابل آرشیو</span></button><button class="severity-option ${d.severity==='important'?'active':''}" onclick="chooseAlertMode('severity','important',this)"><b>مهم</b><span>اولویت بالاتر و ویبره فعال</span></button><button class="severity-option ${d.severity==='critical'?'active':''}" onclick="chooseAlertMode('severity','critical',this)"><b>بحرانی</b><span>امکان عبور از ساعات سکوت طبق تنظیم مدیر</span></button></div></div>
  <div class="fg" style="margin-top:15px"><span class="fl">کانال‌های تحویل</span><div class="channel-picks"><label class="channel-pick ${channels.telegram&&canTelegram?'active':''} ${canTelegram?'':'blocked'}"><input type="checkbox" ${channels.telegram&&canTelegram?'checked':''} ${canTelegram?'':'disabled'} onchange="toggleAlertChannel('telegram',this)">Telegram</label><label class="channel-pick ${channels.push&&canPush?'active':''} ${canPush?'':'blocked'}"><input type="checkbox" ${channels.push&&canPush?'checked':''} ${canPush?'':'disabled'} onchange="toggleAlertChannel('push',this)">Push دستگاه</label><label class="channel-pick ${channels.inApp&&canInApp?'active':''} ${canInApp?'':'blocked'}"><input type="checkbox" ${channels.inApp&&canInApp?'checked':''} ${canInApp?'':'disabled'} onchange="toggleAlertChannel('inApp',this)">داخل ژورنال</label></div></div>
  <div class="fg" style="margin-top:15px"><span class="fl">رفتار اعلان</span><div class="mode-grid"><button class="mode-option ${d.deliveryMode==='silent'?'active':''}" onclick="chooseAlertMode('deliveryMode','silent',this)"><b>بی‌صدا</b><span>برای رصد کم‌اهمیت؛ بدون صدای تلگرام</span></button><button class="mode-option ${d.deliveryMode==='standard'?'active':''}" onclick="chooseAlertMode('deliveryMode','standard',this)"><b>عادی</b><span>یک اعلان فوری در کانال‌های انتخابی</span></button><button class="mode-option ${d.deliveryMode==='persistent'?'active':''}" onclick="chooseAlertMode('deliveryMode','persistent',this)"><b>پیگیر تا تأیید</b><span>تکرار طبق سیاست مدیر تا زدن «دیدم»</span></button></div></div>
  <div class="alert-form-grid" style="margin-top:15px"><label class="fg"><span class="fl">تکرار شرط</span><select id="al-frequency" class="fi" onchange="setAlertDraft('frequency',this.value)"><option value="once" ${d.frequency==='once'?'selected':''}>فقط یک‌بار</option><option value="cross" ${d.frequency==='cross'?'selected':''}>در هر عبور مجدد</option></select></label><label class="fg"><span class="fl">تاریخ انقضا (اختیاری)</span><input id="al-expires" class="fi" type="date" value="${esc((d.expiresAt||'').slice(0,10))}" onchange="setAlertDraft('expiresAt',this.value)"></label></div><label class="fg" style="margin-top:15px"><span class="fl">یادداشت تصمیم</span><textarea id="al-note" class="fi" maxlength="500" placeholder="مثلاً: فقط در صورت تأیید حجم، ستاپ 1H بررسی شود" oninput="setAlertDraft('note',this.value)">${esc(d.note||'')}</textarea></label><div style="display:flex;gap:9px;justify-content:flex-end;margin-top:16px"><button class="btn btn-ghost" onclick="cancelAlertEditor()">انصراف</button><button id="al-save" class="btn btn-primary" style="width:auto;margin:0;padding:10px 20px" onclick="savePriceAlert()">${d.id?'ذخیره تغییرات':'فعال‌سازی هشدار'}</button></div><div class="ai-note">این قابلیت صرفاً ابزار پایش قیمت است و سیگنال خرید یا فروش محسوب نمی‌شود.</div></section>`
}

async function updateAlertEditorPrice(){
  const box=document.getElementById('al-current');if(!box||!ALERT_EDITOR)return;const sym=ALERT_EDITOR.symbol;
  if(!sym){box.innerHTML='<span>قیمت فعلی</span><strong>پس از ورود Symbol</strong>';return}
  // جدول دمو فقط در حالت نمایشی؛ در حالت واقعی هرگز.
  if(alertDemoMode()){
    const d=ALERT_PRICE_DEMO[sym];
    box.innerHTML=`<span>قیمت فعلی ${esc(sym)}</span><strong>${d?alertPrice(d):'—'}</strong>`;return;
  }
  box.innerHTML=`<span>قیمت فعلی ${esc(sym)}</span><strong>در حال دریافت…</strong>`;
  const p=await livePrice(sym);
  const cur=document.getElementById('al-current');
  if(!cur||ALERT_EDITOR?.symbol!==sym)return;   // کاربر رمزارز را عوض کرده
  cur.innerHTML=`<span>قیمت فعلی ${esc(sym)}</span><strong${p==null&&LIVE_PRICE_MISSING[sym]?' style="color:var(--red)"':''}>${p!=null?alertPrice(p):LIVE_PRICE_MISSING[sym]?'در منابعِ قیمتِ ما نیست — هشدار روی آن فعال نمی‌شود':'در دسترس نیست'}</strong>`;
}

// قیمت هدف را با قیمت زنده می‌سنجد. فرم قیمت لحظه‌ای را از قبل نشان می‌داد
// ولی با آن مقایسه نمی‌کرد — و همین شکاف بود که پنج هشدارِ مرده ساخت.
// v25.23: هشدارِ «عبور» وقتی ساخته شود که قیمت همین الان آن طرفِ هدف است، هرگز نمی‌آید مگر قیمت اول برگردد
// و دوباره عبور کند (گزارش مالک ۱۴۰۵-۰۷-۲۶: «رسیده ولی پیامی نیومده»). پیش از ذخیره صریح بگو.
function alertAlreadyPassed(condition, price, target){
  if(!(price > 0) || !(target > 0)) return false;
  return (condition === 'above' && price >= target) || (condition === 'below' && price <= target);
}
async function confirmAlertScale(symbol, target, condition){
  let price = null;
  try{ price = alertDemoMode() ? ALERT_PRICE_DEMO[symbol] : await livePrice(symbol) }catch(_){ }
  // v26.11: سرور گفت این نماد در هیچ منبعی قیمت ندارد ⇒ هشدار هرگز فعال نمی‌شود؛ ساخته نشود
  if (price == null && !alertDemoMode() && LIVE_PRICE_MISSING[symbol]) {
    alert(`قیمت ${symbol} در منابعِ قیمتِ ژورنال (Hyperliquid، Coinbase، OKX) پیدا نشد؛ هشدار روی آن هرگز فعال نمی‌شود.\n\nنماد را بررسی کن یا رمزارز دیگری انتخاب کن.`);
    return false;
  }
  if(alertAlreadyPassed(condition, price, target)){
    const up = condition === 'above';
    if(!confirm(`⚠️ قیمت فعلی ${symbol} (${alertPrice(price)}) همین الان ${up ? 'بالای' : 'زیر'} هدف تو (${alertPrice(target)}) است.` + '\n\n'
      + `هشدارِ «عبور رو به ${up ? 'بالا' : 'پایین'}» فقط وقتی می‌آید که قیمت از هدف عبور کند؛ پس این هشدار تا قیمت اول ${up ? 'زیر' : 'بالای'} ${alertPrice(target)} نرود و دوباره برنگردد، نمی‌آید.` + '\n\n'
      + `اگر می‌خواهی وقتی قیمت به ${alertPrice(target)} برگشت خبردار شوی، شرط را «عبور رو به ${up ? 'پایین' : 'بالا'}» بگذار.` + '\n\n'
      + 'با همین شرط ثبت شود؟')) return false;
  }
  const off = alertScaleOff(price, target);
  if(!off) return true;   // قیمت در دسترس نبود یا فاصله منطقی است — مزاحم نمی‌شویم
  return confirm('⚠️ این هدف با قیمت فعلی جور در نمی‌آید.' + '\n\n'
    + `قیمت فعلی ${symbol}: ${alertPrice(price)}` + '\n'
    + `هدف تو: ${alertPrice(target)}` + '\n'
    + `یعنی حدود ${faNum(Math.round(off))} برابر.` + '\n\n'
    + 'معمولاً یعنی واحد یا محل اعشار اشتباه وارد شده. با همین ثبت شود؟');
}

async function savePriceAlert(){
  const target=Number(ALERT_EDITOR?.targetPrice),tol=Number(ALERT_EDITOR?.tolerance||.5);if(!ALERT_EDITOR||!/^[A-Z0-9]{1,12}$/.test(ALERT_EDITOR.symbol)){showToast('نماد معتبر رمزارز را وارد یا انتخاب کنید');document.getElementById('al-custom-symbol')?.focus();return}if(!Number.isFinite(target)||target<=0){showToast('قیمت هدف معتبر وارد کنید');document.getElementById('al-target')?.focus();return}if(ALERT_EDITOR.condition==='zone'&&(tol<.05||tol>5)){showToast('تلرانس باید بین ۰٫۰۵ تا ۵ درصد باشد');return}
  const channels=ALERT_EDITOR.channels||{};if(!channels.telegram&&!channels.push&&!channels.inApp){showToast('حداقل یک کانال اعلان را انتخاب کنید');return}
  if(!(await confirmAlertScale(ALERT_EDITOR.symbol, target, ALERT_EDITOR.condition))) return;
  const payload={symbol:ALERT_EDITOR.symbol,targetPrice:target,condition:ALERT_EDITOR.condition,tolerance:tol,deliveryMode:ALERT_EDITOR.deliveryMode,frequency:ALERT_EDITOR.frequency,severity:ALERT_EDITOR.severity||'normal',telegramEnabled:!!channels.telegram,pushEnabled:!!channels.push,inAppEnabled:!!channels.inApp,note:String(ALERT_EDITOR.note||'').slice(0,500),expiresAt:ALERT_EDITOR.expiresAt||null};const btn=document.getElementById('al-save');if(btn)btn.disabled=true;
  if(alertDemoMode()){
    const id=ALERT_EDITOR.id||`demo-${Date.now()}`;const old=(ALERT_STATE.alerts||[]).find(a=>a.id===id);const record={...old,...payload,channels:{telegram:payload.telegramEnabled,push:payload.pushEnabled,inApp:payload.inAppEnabled},id,status:old?.status==='paused'?'paused':'active',lastPrice:ALERT_PRICE_DEMO[payload.symbol]||null,createdAt:old?.createdAt||new Date().toISOString()};ALERT_STATE.alerts=old?ALERT_STATE.alerts.map(a=>a.id===id?record:a):[record,...ALERT_STATE.alerts];ALERT_STATE.stats.active=ALERT_STATE.alerts.filter(a=>a.status==='active'||a.status==='triggered').length;ALERT_EDITOR=null;showToast(old?'هشدار بروزرسانی شد':'هشدار جدید وارد چرخه پایش شد');renderPriceAlerts();return;
  }
  try{const id=ALERT_EDITOR.id;const r=await apiFetch(id?`/api/alerts/${alertSafeId(id)}`:'/api/alerts',{method:id?'PUT':'POST',body:JSON.stringify(payload)});if(!r||!r.ok)throw new Error('save_failed');ALERT_EDITOR=null;showToast(id?'هشدار بروزرسانی شد':'هشدار با موفقیت فعال شد');ALERT_STATE.loaded=false;loadAlertDashboard(true)}catch(e){showToast('ذخیره هشدار ناموفق بود');if(btn)btn.disabled=false}
}

async function togglePriceAlert(id){const a=(ALERT_STATE.alerts||[]).find(x=>alertSafeId(x.id)===id);if(!a)return;const status=a.status==='paused'?'active':'paused';if(alertDemoMode()){a.status=status;renderPriceAlerts();showToast(status==='active'?'پایش دوباره فعال شد':'هشدار متوقف شد');return}const r=await apiFetch(`/api/alerts/${id}`,{method:'PUT',body:JSON.stringify({status})});if(r?.ok){ALERT_STATE.loaded=false;loadAlertDashboard(true)}else showToast('تغییر وضعیت انجام نشد')}
async function deletePriceAlert(id){if(!confirm('این هشدار حذف شود؟ تاریخچه ارسال‌های قبلی باقی می‌ماند.'))return;if(alertDemoMode()){ALERT_STATE.alerts=ALERT_STATE.alerts.filter(a=>alertSafeId(a.id)!==id);renderPriceAlerts();showToast('هشدار حذف شد');return}const r=await apiFetch(`/api/alerts/${id}`,{method:'DELETE'});if(r?.ok){ALERT_STATE.loaded=false;loadAlertDashboard(true);showToast('هشدار حذف شد')}else showToast('حذف انجام نشد')}
async function testPriceAlert(id){if(alertDemoMode()){const a=ALERT_STATE.alerts.find(x=>alertSafeId(x.id)===id);if(a){a.status='triggered';a.lastTriggeredAt=new Date().toISOString();ALERT_STATE.stats.triggeredMonth=(ALERT_STATE.stats.triggeredMonth||0)+1;ALERT_STATE.inbox.unshift({id:`in_demo_${Date.now()}`,title:`آزمایش هشدار ${a.symbol}`,body:`قیمت نمونه ${alertPrice(a.lastPrice)} در کانال‌های فعال تحویل شد.`,severity:a.severity||'normal',status:'unread',created_at:'همین حالا'});ALERT_STATE.unread++;ALERT_STATE.events.unshift({title:`هشدار آزمایشی ${a.symbol} تحویل شد`,text:`Telegram + Push + In-App · همین حالا`});playInAppAlert(a.severity||'normal');renderPriceAlerts();showToast('آزمایش چندکاناله انجام شد')}return}const r=await apiFetch(`/api/alerts/${id}/test`,{method:'POST',body:'{}'});showToast(r?.ok?'اعلان آزمایشی در کانال‌های فعال ارسال شد':'هیچ کانال آماده‌ای برای ارسال وجود ندارد')}
function testTelegramChannel(){const first=ALERT_STATE.alerts?.[0];if(first)testPriceAlert(alertSafeId(first.id));else showToast('ابتدا یک هشدار بسازید')}
async function connectAlertTelegram(){if(alertDemoMode()){ALERT_STATE.telegram={linked:true,username:'sara_davoodifar'};ALERT_STATE.events.unshift({title:'تلگرام متصل شد',text:'احراز اتصال با موفقیت انجام شد · همین حالا'});renderPriceAlerts();showToast('اتصال امن تلگرام انجام شد');return}const popup=window.open('about:blank','_blank');try{const r=await apiFetch('/api/alerts/telegram-link',{method:'POST',body:'{}'});const d=await r.json().catch(()=>({}));if(!r||!r.ok||!d.url)throw new Error(r&&r.status===503?'telegram_not_configured':'link_failed');if(popup)popup.location=d.url;else window.location.href=d.url;showToast('در تلگرام دکمه Start را بزنید')}catch(e){if(popup)popup.close();showToast(e&&e.message==='telegram_not_configured'?'ربات تلگرام هنوز توسط استاد راه‌اندازی نشده':'ساخت لینک اتصال ممکن نشد — اتصال اینترنت را بررسی کن')}}
function base64UrlToUint8Array(value){const padding='='.repeat((4-value.length%4)%4),base64=(value+padding).replace(/-/g,'+').replace(/_/g,'/'),raw=atob(base64);return Uint8Array.from([...raw].map(x=>x.charCodeAt(0)))}
// v25.2: Push خودترمیم. مرورگر گاهی نشانیِ Push را عوض می‌کند و سرور نشانیِ قبلی را
// «منقضی» می‌بیند؛ تا امروز آن گوشی بی‌صدا می‌ماند تا خودِ دانشجو دوباره دکمه را بزند.
// حالا با هر باز شدن (حداکثر هر ۱۲ ساعت)، اگر اجازه‌ی اعلان داده شده، ثبت تازه می‌شود.
// دستگاهی که کاربر قطع کرده (revoked) خودکار وصل نمی‌شود.
function pushPlatformName(){return /android/i.test(navigator.userAgent)?'Android':/iphone|ipad/i.test(navigator.userAgent)?'iOS':/windows/i.test(navigator.userAgent)?'Windows':'Web'}
async function pushFreshSubscription(registration, old, key){
  if(old) await old.unsubscribe().catch(()=>{});
  if(!key){ const r=await apiFetch('/api/alerts/push-key'); key=r?.ok?(await r.json().catch(()=>({}))).publicKey:null; }
  if(!key) return null;
  return registration.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:base64UrlToUint8Array(key)});
}
async function postPushSubscription(subscription, heal){
  const platform=pushPlatformName();
  return apiFetch('/api/alerts/push-subscriptions',{method:'POST',body:JSON.stringify({subscription:subscription.toJSON(),deviceName:`${platform} · ${navigator.userAgent.includes('Mobile')?'Mobile':'Browser'}`,platform,heal:!!heal})});
}
async function healPushSubscription(){
  try{
    if(!SESSION||SESSION.role!=='student'||SESSION.isViewOnly||alertDemoMode()) return;
    if(!('serviceWorker'in navigator)||!('PushManager'in window)||!('Notification'in window)||Notification.permission!=='granted') return;
    const k='sc_push_heal_'+SESSION.uid;
    if(Date.now()-(Number(localStorage.getItem(k))||0)<12*3600e3) return;
    localStorage.setItem(k,String(Date.now()));
    const registration=await Promise.race([navigator.serviceWorker.ready,new Promise((_,no)=>setTimeout(()=>no(new Error('sw_timeout')),8000))]);
    let subscription=await registration.pushManager.getSubscription();
    if(!subscription) subscription=await pushFreshSubscription(registration,null,null);
    if(!subscription) return;
    const r=await postPushSubscription(subscription,true);
    if(r?.status===409&&(await r.json().catch(()=>({}))).error==='push_endpoint_expired'){
      const fresh=await pushFreshSubscription(registration,subscription,null);
      if(fresh) await postPushSubscription(fresh,true);
    }
  }catch(_){ /* ترمیم بی‌صداست؛ دکمه‌ی دستی همچنان هست */ }
}
async function enablePushAlerts(){
  if(alertDemoMode()){if(!ALERT_STATE.push.devices.some(d=>d.id==='ps_demo_current'))ALERT_STATE.push.devices.push({id:'ps_demo_current',device_name:'این دستگاه · PWA',platform:navigator.platform||'Browser',status:'active',failure_count:0});renderPriceAlerts();showToast('Push روی این دستگاه فعال شد');return}
  if(!('serviceWorker'in navigator)||!('PushManager'in window)||!('Notification'in window)){showToast('مرورگر این دستگاه از Push پشتیبانی نمی‌کند');return}
  if(!ALERT_STATE.push?.publicKey){showToast('کلید Push هنوز در سرور تنظیم نشده است');return}
  try{
    const permission=await Notification.requestPermission();if(permission!=='granted'){showToast('برای دریافت Push باید اجازه اعلان را فعال کنید');return}
    const registration=await navigator.serviceWorker.ready;
    let subscription=await registration.pushManager.getSubscription();
    if(!subscription)subscription=await registration.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:base64UrlToUint8Array(ALERT_STATE.push.publicKey)});
    let r=await postPushSubscription(subscription,false);
    // v25.2: نشانیِ این مرورگر از سمت سرویس Push باطل شده ⇒ اشتراکِ تازه، نه احیای همان مرده
    if(r?.status===409&&(await r.clone().json().catch(()=>({}))).error==='push_endpoint_expired'){
      subscription=await pushFreshSubscription(registration,subscription,ALERT_STATE.push.publicKey);
      r=subscription?await postPushSubscription(subscription,false):null;
    }
    if(!r?.ok)throw new Error((await r?.json().catch(()=>({})))?.error||'push_failed');
    ALERT_STATE.loaded=false;await loadAlertDashboard(true);showToast('Push مستقیم روی این دستگاه فعال شد');
  }catch(e){showToast(e.message==='device_limit_reached'?'سقف دستگاه‌های مجاز تکمیل است':'فعال‌سازی Push انجام نشد')}
}
async function disconnectPushDevice(id){if(!confirm('دریافت Push روی این دستگاه قطع شود؟'))return;if(alertDemoMode()){ALERT_STATE.push.devices=ALERT_STATE.push.devices.filter(d=>alertSafeId(d.id)!==id);renderPriceAlerts();showToast('دستگاه قطع شد');return}const r=await apiFetch(`/api/alerts/push-subscriptions/${id}`,{method:'DELETE'});if(r?.ok){ALERT_STATE.loaded=false;loadAlertDashboard(true);showToast('دستگاه قطع شد')}else showToast('قطع دستگاه انجام نشد')}
async function markInbox(id,action){if(alertDemoMode()){const item=ALERT_STATE.inbox.find(x=>alertSafeId(x.id)===id);if(item){if(item.status==='unread')ALERT_STATE.unread=Math.max(0,ALERT_STATE.unread-1);item.status=action==='ack'?'acknowledged':'read';renderPriceAlerts()}return}const r=await apiFetch(`/api/alerts/inbox/${id}/${action}`,{method:'POST',body:'{}'});if(r?.ok){ALERT_STATE.loaded=false;loadAlertDashboard(true)}else showToast('ثبت وضعیت اعلان انجام نشد')}
// ── آلارم زنگ‌دار (v21.5) ───────────────────────────────
// یک بوق کوتاه کافی نیست. این تا وقتی خاموشش نکنی ادامه می‌دهد — ولی نه
// بی‌نهایت: سقفِ زمانی دارد تا اگر کاربر پشت دستگاه نیست، گوشی‌اش را نبرد.
const ALARM = { timer:null, ctx:null, stopAt:0, on:false };
const ALARM_MAX_MS = { normal: 12000, important: 25000, critical: 60000 };

// AudioContext بدون تعاملِ کاربر اجازه‌ی پخش ندارد. هر لمسی روی اپ آزادش می‌کند.
function unlockAlarmAudio(){
  try{
    const A = window.AudioContext || window.webkitAudioContext; if(!A) return;
    ALARM.ctx = ALARM.ctx || new A();
    if(ALARM.ctx.state === 'suspended') ALARM.ctx.resume();
  }catch(_){}
}
addEventListener('pointerdown', unlockAlarmAudio, { once:false, passive:true });
addEventListener('keydown', unlockAlarmAudio, { passive:true });

// v25.27: همهٔ نت‌ها از یک خروجیِ مشترک می‌گذرند: بلندیِ انتخابیِ دانشجو + کمپرسور (تا بلند ولی بی‌اعوجاج باشد)
const ALARM_LOUD = 2.9;    // نت‌ها قبلاً با بهرهٔ ~۰٫۲۶ ساخته می‌شدند — عملاً یک‌چهارمِ بلندیِ ممکن
function alarmVolume(){ const v = Number(L.g('sc_alarm_vol')); return Number.isFinite(v) && v >= 0.1 && v <= 1 ? v : 1; }
function alarmOut(ctx){
  if(!ALARM.out || ALARM.outCtx !== ctx){
    const g = ctx.createGain(); let tail = g;
    if(ctx.createDynamicsCompressor){
      const c = ctx.createDynamicsCompressor();
      try{ c.threshold.value = -12; c.knee.value = 6; c.ratio.value = 10; c.attack.value = 0.003; c.release.value = 0.12; }catch(_){}
      g.connect(c); tail = c;
    }
    tail.connect(ctx.destination);
    ALARM.out = g; ALARM.outCtx = ctx;
  }
  try{ ALARM.out.gain.value = alarmVolume(); }catch(_){}
  return ALARM.out;
}
const loud = p => Math.min(0.9, (p || 0.26) * ALARM_LOUD);

// یک نتِ ساده با پاکتِ صدا — آجرِ ساختِ همه‌ی آلارم‌ها
function alarmTone(ctx, t, freq, dur, type, peak){
  if(!(freq > 0) || !(dur > 0)) return;
  const osc = ctx.createOscillator(), g = ctx.createGain();
  osc.type = type || 'sine';
  osc.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(loud(peak), t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g); g.connect(alarmOut(ctx));
  osc.start(t); osc.stop(t + dur + 0.02);
}

// پنج صدای متمایز — همه ساخته‌شده، نه فایل. هر کدام هم با شدتِ هشدار بالا و
// پایین می‌رود (base از severity می‌آید)، پس «بحرانی» با هر صدایی تیزتر است.
// ترتیبشان مهم است: اولی پیش‌فرض است و باید همان صدای قبلی باشد.
const ALARM_SOUNDS = [
  { id:'classic', label:'دو ضرب', play(ctx, t, base){
      [0, 0.26].forEach((o, i) => alarmTone(ctx, t + o, base * (i ? 1.32 : 1), 0.22, 'sine', 0.28));
    } },
  { id:'clock', label:'زنگ ساعت', play(ctx, t, base){
      for(let i = 0; i < 6; i++) alarmTone(ctx, t + i * 0.11, base * (i % 2 ? 1 : 1.18), 0.08, 'square', 0.15);
    } },
  { id:'chime', label:'ناقوس', play(ctx, t, base){
      [1, 2, 2.76].forEach((m, i) => alarmTone(ctx, t, base * m, 1.1 - i * 0.22, 'sine', 0.22 / (i + 1)));
    } },
  { id:'rise', label:'صعودی', play(ctx, t, base){
      const osc = ctx.createOscillator(), g = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(base * 0.6, t);
      osc.frequency.exponentialRampToValueAtTime(base * 1.9, t + 0.42);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(loud(0.26), t + 0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.46);
      osc.connect(g); g.connect(alarmOut(ctx));
      osc.start(t); osc.stop(t + 0.48);
    } },
  { id:'pulse', label:'ضربان', play(ctx, t, base){
      [0, 0.2, 0.4].forEach(o => alarmTone(ctx, t + o, base * 0.62, 0.15, 'square', 0.2));
    } },
  // v25.27: سه صدای بلند و تیز، مثل آلارم‌های تریدینگ‌ویو
  { id:'siren', label:'آژیر', play(ctx, t, base){
      [0, 0.6].forEach(o => {
        const osc = ctx.createOscillator(), g = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(base * 0.9, t + o);
        osc.frequency.exponentialRampToValueAtTime(base * 1.8, t + o + 0.28);
        osc.frequency.exponentialRampToValueAtTime(base * 0.9, t + o + 0.55);
        g.gain.setValueAtTime(0.0001, t + o);
        g.gain.exponentialRampToValueAtTime(loud(0.3), t + o + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, t + o + 0.56);
        osc.connect(g); g.connect(alarmOut(ctx));
        osc.start(t + o); osc.stop(t + o + 0.58);
      });
    } },
  { id:'horn', label:'بوق', play(ctx, t, base){
      [0, 0.55].forEach(o => [0.5, 0.63].forEach(m => alarmTone(ctx, t + o, base * m, 0.42, 'square', 0.22)));
    } },
  { id:'beacon', label:'سه بوقِ تیز', play(ctx, t, base){
      [0, 0.17, 0.34].forEach(o => alarmTone(ctx, t + o, base * 1.85, 0.12, 'square', 0.24));
    } }
];
function alarmSound(){
  const id = L.g('sc_alarm_sound');
  return ALARM_SOUNDS.find(x => x.id === id) || ALARM_SOUNDS[0];
}
function setAlarmSound(id){ if(ALARM_SOUNDS.some(x => x.id === id)) L.s('sc_alarm_sound', id); }
function setAlarmVolume(pct){
  const v = Math.min(1, Math.max(0.1, Number(pct) / 100)); L.s('sc_alarm_vol', v);
  const o = document.getElementById('alarm-vol-v'); if(o) o.textContent = faNum(Math.round(v * 100)) + '٪';
  try{ if(ALARM.out) ALARM.out.gain.value = v; }catch(_){}
}
async function sendTelegramAlarmSound(btn){
  if(!isOnline()){ showToast('برای این کار باید آنلاین باشی'); return; }
  if(btn) btn.disabled = true;
  const r = await apiFetch('/api/alerts/telegram-sound', { method:'POST', body:'{}' });
  if(btn) btn.disabled = false;
  const d = r ? await r.json().catch(() => ({})) : {};
  if(r && r.ok) showToast('✅ فرستاده شد — تلگرامِ ربات هشدار را باز کن');
  else if(d.error === 'telegram_not_linked') showToast('اول تلگرامت را در همین صفحه به هشدارها وصل کن');
  else showToast('فرستاده نشد؛ کمی بعد دوباره امتحان کن');
}

function alarmBeat(severity){
  const ctx = ALARM.ctx; if(!ctx || ctx.state !== 'running') return;
  const base = severity === 'critical' ? 880 : severity === 'important' ? 760 : 640;
  alarmSound().play(ctx, ctx.currentTime, base);
}

// v25.27: مدتِ زنگ — انتخابِ دانشجو؛ پیش‌فرض «تا خاموشش کنم» (با سقفِ ۱۰ دقیقه برای زبانه‌ای که فراموش شده)
const ALARM_DURATIONS = [['once','یک بار'],['10','۱۰ ثانیه'],['30','۳۰ ثانیه'],['60','۱ دقیقه'],['loop','تا خاموشش کنم']];
function alarmDuration(){ const d = L.g('sc_alarm_dur'); return ALARM_DURATIONS.some(x => x[0] === d) ? d : 'loop'; }
function alarmStopAt(){ const d = alarmDuration(); return Date.now() + (d === 'once' ? 300 : d === 'loop' ? 600000 : Number(d) * 1000); }
// صدا قطع می‌شود ولی پنجره تا «خاموش کن» می‌ماند (مثل تریدینگ‌ویو)
function stopAlarmSound(){
  if(ALARM.timer) clearInterval(ALARM.timer);
  ALARM.timer = null;
  try{ navigator.vibrate && navigator.vibrate(0) }catch(_){}
}
function alarmTitleFlash(title){
  if(ALARM.titleTimer) clearInterval(ALARM.titleTimer);
  ALARM.titleBase = ALARM.titleBase || document.title;
  let k = 0;
  ALARM.titleTimer = setInterval(() => { document.title = (k++ % 2) ? ALARM.titleBase : '🔔 ' + (title || 'هشدار قیمت'); }, 900);
}
// v25.28: «دیدم» = تأیید روی سرور ⇒ یادآورهای تلگرام و گوشی هم خاموش می‌شوند (نه فقط صدای همین دستگاه)
async function alarmAck(){
  const m = ALARM.meta; stopAlarm();
  if(!m || !m.inboxId || alertDemoMode()) return;
  const r = await apiFetch(`/api/alerts/inbox/${encodeURIComponent(m.inboxId)}/ack`, { method:'POST', body:'{}' }).catch(() => null);
  if(r && r.ok){ showToast('✓ ثبت شد — یادآوری‌ها در همه‌جا متوقف شد'); ALERT_STATE.loaded = false; if(document.getElementById('screen-alerts')?.classList.contains('active')) loadAlertDashboard(true); }
}
async function alarmSnooze(){
  const m = ALARM.meta; stopAlarm();
  if(!m || !m.inboxId || alertDemoMode()) return;
  const r = await apiFetch(`/api/alerts/inbox/${encodeURIComponent(m.inboxId)}/snooze`, { method:'POST', body:'{}' }).catch(() => null);
  showToast(r && r.ok ? '⏰ ۱۵ دقیقهٔ دیگر دوباره خبرت می‌کنیم' : 'تعویق ثبت نشد؛ دوباره امتحان کن');
}
function stopAlarm(){
  if(ALARM.timer) clearInterval(ALARM.timer);
  ALARM.timer = null; ALARM.on = false;
  if(ALARM.titleTimer){ clearInterval(ALARM.titleTimer); ALARM.titleTimer = null; if(ALARM.titleBase) document.title = ALARM.titleBase; ALARM.titleBase = null; }
  try{ navigator.vibrate && navigator.vibrate(0) }catch(_){}
  const bar = document.getElementById('alarm-bar');
  if(bar) bar.classList.remove('on');
}

function startAlarm(severity, title, body, meta){
  if(!alarmEnabled()) { return }
  unlockAlarmAudio();
  stopAlarm();
  const bar = document.getElementById('alarm-bar');
  if(bar){
    bar.querySelector('.alarm-b b').textContent = title || 'هشدار قیمت';
    bar.querySelector('.alarm-b em').textContent = body || '';
    bar.classList.add('on');
  }
  ALARM.on = true;
  ALARM.meta = meta && meta.inboxId ? { inboxId: meta.inboxId } : null;
  const sz = document.getElementById('alarm-snooze'); if(sz) sz.style.display = ALARM.meta ? '' : 'none';
  ALARM.stopAt = alarmStopAt();
  const tm = document.getElementById('alarm-time');
  if(tm) try{ tm.textContent = new Date().toLocaleTimeString('fa-IR', { hour:'2-digit', minute:'2-digit', second:'2-digit' }) }catch(_){}
  alarmTitleFlash(title);
  const tick = () => {
    if(Date.now() > ALARM.stopAt) { stopAlarmSound(); return }
    alarmBeat(severity);
    try{ navigator.vibrate && navigator.vibrate(severity === 'critical' ? [220,90,220] : [150]) }catch(_){}
  };
  tick();
  ALARM.timer = setInterval(tick, 1400);
}

// v25.27: وقتی اپ باز است، آلارم نباید به نوتیفیکیشنِ مرورگر وابسته باشد. هر ۴۰ ثانیه صندوقِ اعلانِ
// خوانده‌نشده پرسیده می‌شود؛ اعلانِ تازه (که قبلاً دیده نشده) ⇒ آلارم. اعلان‌های قدیمی در اولین پرسش «دیده» می‌شوند.
ALARM.seen = ALARM.seen || new Set();
// v25.28: «آخرین بررسی قیمت: … پیش» — سن را از ساعتِ سرور حساب می‌کند (ساعتِ گوشی ممکن است جلو/عقب باشد)
function alertEngineAge(){
  const e = ALERT_STATE.engine; if(!e || !e.lastRunAt || !ALERT_STATE.serverNow || !ALERT_STATE.loadedAt) return null;
  return Math.max(0, Math.round((Date.parse(ALERT_STATE.serverNow) - Date.parse(e.lastRunAt)) / 1000 + (Date.now() - ALERT_STATE.loadedAt) / 1000));
}
function alertEngineText(){
  const a = alertEngineAge(); if(a == null) return { cls:'', txt:'وضعیت پایش قیمت…' };
  const ago = a < 60 ? `${faNum(a)} ثانیه پیش` : `${faNum(Math.round(a / 60))} دقیقه پیش`;
  if(a < 180) return { cls:'ok', txt:`پایش زنده · آخرین بررسی قیمت: ${ago}` };
  if(a < 720) return { cls:'warn', txt:`آخرین بررسی قیمت: ${ago} — کمی تأخیر` };
  return { cls:'bad', txt:`آخرین بررسی قیمت: ${ago} — اختلال؛ تیم در جریان است` };
}
function alertEngineBadge(){ const t = alertEngineText(); return `<div class="alarm-engine ${t.cls}" id="alert-engine"><i></i><span>${esc(t.txt)}</span></div>`; }
setInterval(() => { const el = document.getElementById('alert-engine'); if(!el) return; const t = alertEngineText();
  el.className = 'alarm-engine ' + t.cls; el.querySelector('span').textContent = t.txt; }, 5000);

// v25.28: تاریخچهٔ یک هشدار
const AH_EVENT = { triggered:'🔔 فعال شد', reminder_sent:'↻ یادآوری فرستاده شد', acknowledged:'✓ دیده شد', snoozed:'⏰ به تعویق افتاد',
  created:'ساخته شد', updated:'ویرایش شد', paused:'متوقف شد', resumed:'دوباره فعال شد', delivery_failed:'✗ ارسال ناموفق', delivery_gave_up:'✗ ارسال متوقف شد' };
const AH_CH = { telegram:'تلگرام', push:'گوشی', in_app:'داخل ژورنال' };
const AH_ERR = { quiet_hours:'ساعت سکوت', push_not_connected:'گوشی وصل نیست', telegram_not_linked:'تلگرام وصل نیست', push_subscription_expired:'اتصال گوشی منقضی' };
async function openAlertHistory(id){
  document.getElementById('det-content').innerHTML = '<div style="padding:24px;text-align:center;color:var(--muted)">در حال بارگذاری…</div>';
  document.getElementById('det-sheet').classList.add('open');
  const r = await apiFetch(`/api/alerts/${encodeURIComponent(id)}/history`).catch(() => null);
  const d = r && r.ok ? await r.json().catch(() => null) : null;
  if(!d){ document.getElementById('det-content').innerHTML = '<div style="padding:24px;text-align:center">بارگذاری نشد.</div>'; return; }
  const fmt = iso => { try{ const t = new Date(String(iso).replace(' ', 'T') + (/[zZ]|[+-]\d\d:?\d\d$/.test(iso) ? '' : 'Z')); return fmtDateFa(t.toISOString().slice(0,10)) + ' · ' + t.toLocaleTimeString('fa-IR', { hour:'2-digit', minute:'2-digit' }); }catch(_){ return iso; } };
  const near = (a, b) => Math.abs(Date.parse(String(a).replace(' ','T') + 'Z') - Date.parse(String(b).replace(' ','T') + 'Z')) < 120000;
  const items = d.events.filter(e => AH_EVENT[e.event_type]).map(e => {
    const chips = ['triggered','reminder_sent'].includes(e.event_type)
      ? d.deliveries.filter(x => near(x.created_at, e.created_at)).map(x => {
          const cls = ['sent','delivered','acknowledged'].includes(x.status) ? 'ok' : x.status === 'skipped' ? 'skip' : 'bad';
          const why = x.status === 'skipped' || x.status === 'failed' ? ` (${AH_ERR[x.error_code] || x.error_code || x.status})` : '';
          return `<span class="${cls}">${cls === 'ok' ? '✓' : cls === 'skip' ? '⏸' : '✗'} ${AH_CH[x.channel] || x.channel}${esc(why)}</span>`; }).join('')
      : '';
    return `<div class="ah-item"><b>${AH_EVENT[e.event_type]}</b>${e.price != null ? ` · <span dir="ltr">${esc(String(e.price))}</span>` : ''}<time>${fmt(e.created_at)}</time>${chips ? `<div class="ah-ch">${chips}</div>` : ''}</div>`;
  });
  document.getElementById('det-content').innerHTML = `<div style="padding:4px 2px 14px"><div class="card-title">🕘 تاریخچهٔ هشدار</div>
    <div class="ab-meta" style="margin-bottom:8px">هر بار که هشدار فعال شد، از کدام مسیر رسید و کِی دیده شد.</div>
    ${items.length ? `<div class="ah-list">${items.join('')}</div>` : '<div class="ab-meta">هنوز رویدادی ثبت نشده.</div>'}
    <button class="btn btn-ghost" style="margin-top:14px" onclick="closeSheet()">بستن</button></div>`;
}

async function alarmWatchTick(){
  try{
    if(!SESSION || SESSION.role !== 'student' || SESSION.isViewOnly || !isOnline() || !alarmEnabled()) return;
    const r = await apiFetch('/api/alerts/unread'); if(!r || !r.ok) return;
    const d = await r.json().catch(() => null); if(!d || !Array.isArray(d.items)) return;
    const fresh = d.items.filter(x => x && x.id && !ALARM.seen.has(x.id));
    d.items.forEach(x => x && x.id && ALARM.seen.add(x.id));
    if(!ALARM.watchPrimed){ ALARM.watchPrimed = true; return; }
    if(fresh.length && !ALARM.on){ const x = fresh[0]; startAlarm(x.severity || 'normal', x.title, x.body, { inboxId: x.id }); }
  }catch(_){}
}
function startAlarmWatch(){
  if(ALARM.watch) return;
  alarmWatchTick();
  ALARM.watch = setInterval(alarmWatchTick, 40000);
}

// دانشجویی که صدا نمی‌خواهد باید بتواند خاموشش کند
function alarmEnabled(){ return L.g('sc_alarm_off') !== true }
function setAlarmEnabled(on){ L.s('sc_alarm_off', !on); if(!on) stopAlarm(); }

// یک‌بار پخش (نه آلارمِ ممتد). قبلاً هر فراخوانی یک AudioContext تازه می‌ساخت
// و بعد از چند هشدار، مرورگر دیگر اجازه نمی‌داد و همه‌چیز بی‌صدا می‌شد. حالا
// همان context مشترک و همان صدایی که دانشجو انتخاب کرده استفاده می‌شود.
// sound==='none' هنوز از سمت پنل مدیر می‌تواند ساکتش کند.
function playInAppAlert(severity='normal',sound='signal',vibrate=true){
  if(sound!=='none'){
    try{
      unlockAlarmAudio();
      const ctx=ALARM.ctx;
      if(ctx&&ctx.state==='running'){
        const base=severity==='critical'?880:severity==='important'?760:640;
        alarmSound().play(ctx,ctx.currentTime,base);
      }
    }catch(e){}
  }
  if(vibrate&&navigator.vibrate)navigator.vibrate(severity==='critical'?[250,100,250,100,400]:severity==='important'?[180,80,180]:[120]);
}
async function requestAlertPremium(){
  if(alertDemoMode()){showToast('در حالت نمایشی، درخواست ارسال نمی‌شود');return}
  if(!isOnline()){alert('برای ثبت درخواست باید آنلاین باشی.');return}
  showToast('⏳ در حال ثبت درخواست...');
  const r=await apiFetch('/api/alerts/activation-request',{method:'POST',body:JSON.stringify({})});
  if(!r||!r.ok){alert(apiErrMsg(r,'ثبت درخواست'));return}
  const d=await r.json().catch(()=>({}));
  if(d.alreadyActive){showToast('اشتراک شما از قبل فعال است');ALERT_STATE.loaded=false;loadAlertDashboard(true);return}
  ALERT_STATE.request={status:'pending',createdAt:d.createdAt||new Date().toISOString()};
  renderPriceAlerts();
  showToast(d.duplicate?'درخواست شما از قبل ثبت شده بود':'✅ درخواست ثبت شد — استاد باخبر می‌شود');
}
function toggleDemoAlertEntitlement(){if(!alertDemoMode())return;ALERT_STATE.entitlement.active=!ALERT_STATE.entitlement.active;ALERT_STATE.entitlement.status=ALERT_STATE.entitlement.active?'active':'inactive';renderPriceAlerts()}

// (نسخه‌ی قدیمی حذف شد — تعریف تازه‌تر پایین‌تر است)
// (نسخه‌ی قدیمی حذف شد — تعریف تازه‌تر پایین‌تر است)

// v18 mentor control-center overrides. Kept separate so Claude Code can review
// the v17 baseline and the complete additive control layer side-by-side.
let ALERT_ADMIN_USER=null;
function controlHealthStatus(){const h=ALERT_STATE.system?.health||{},cron=h.cron_last_result?.value,price=h.price_source?.value;return{cron:cron?.status==='ok',price:price?.ok!==false,telegram:!!ALERT_STATE.system?.telegramConfigured,push:!!ALERT_STATE.system?.pushConfigured}}
function setControlTab(tab){ALERT_STATE.adminTab=tab;renderPriceAlerts()}
function renderControlTabs(){const tab=ALERT_STATE.adminTab||'overview';return`<div class="cc-tabs"><button class="cc-tab ${tab==='overview'?'active':''}" onclick="setControlTab('overview')">نمای کلی</button><button class="cc-tab ${tab==='system'?'active':''}" onclick="setControlTab('system')">تنظیمات سرویس</button><button class="cc-tab ${tab==='users'?'active':''}" onclick="setControlTab('users')">کاربران و دستگاه‌ها</button><button class="cc-tab ${tab==='deliveries'?'active':''}" onclick="setControlTab('deliveries')">تحویل و خطاها</button></div>`}
function renderMentorPriceAlerts(el){
  const students=ALERT_STATE.students||[],system=ALERT_STATE.system||{},settings=ALERT_STATE.settings||{},health=controlHealthStatus(),tab=ALERT_STATE.adminTab||'overview';
  const active=students.filter(s=>(s.subscription?.status||s.status)==='active').length,activeAlerts=students.reduce((n,s)=>n+Number(s.activeAlerts||0),0),devices=students.reduce((n,s)=>n+(s.devices?.filter(d=>d.status==='active').length||s.pushDevices||0),0);
  el.innerHTML=`<div class="alert-shell fade-up"><section class="alert-hero"><div class="alert-hero-top"><div><div class="alert-kicker">NOTIFICATION CONTROL CENTER</div><h1 class="alert-title">مرکز کنترل هشدارها</h1><p class="alert-sub">مدیریت کامل سرویس، اشتراک کاربران، کانال‌های رایگان، دستگاه‌ها، ساعات سکوت، شدت و تکرار، منابع قیمت، تست ارسال، خطاها و سابقه تغییرات—بدون پیامک و بدون سرویس دارای هزینه ارسال.</p><div class="alert-live">${settings.serviceEnabled===false?'سرویس متوقف است':'سرویس فعال · Telegram + Direct Push + In-App'}</div></div><div class="alert-orbit">${ALERT_ICONS.bell}</div></div></section>
  <div class="alert-kpis"><div class="alert-kpi"><small>اشتراک فعال</small><strong class="gold">${faNum(active)}</strong><span>از ${faNum(students.length)} دانشجو</span></div><div class="alert-kpi"><small>چرخه پایش</small><strong class="green">${faNum(activeAlerts)}</strong><span>${faNum(system.pendingAcknowledgements||0)} تأیید معوق</span></div><div class="alert-kpi"><small>دستگاه Push</small><strong>${faNum(devices)}</strong><span>${faNum(system.failedLast24h||0)} خطا در ۲۴ ساعت</span></div></div>${alarmPrefCard()}${renderControlTabs()}${tab==='system'?renderSystemControl():tab==='users'?renderUserControl():tab==='deliveries'?renderDeliveryControl():renderControlOverview(health)}</div>`;
}
function renderControlOverview(health){
  const settings=ALERT_STATE.settings||{},students=ALERT_STATE.students||[];
  return`<div class="cc-grid"><section class="cc-card wide"><div class="cc-card-head"><b>وضعیت زنده زیرساخت</b><span class="alert-count">HEALTH</span></div><div class="channel-grid"><div class="channel-card ${health.cron?'ready':''}"><span class="health-dot ${health.cron?'':'bad'}"></span><div class="channel-copy"><b>پایش یک‌دقیقه‌ای</b><span>${health.cron?'آخرین اجرا موفق':'نیازمند بررسی Cron'}</span></div></div><div class="channel-card ${health.price?'ready':''}"><span class="health-dot ${health.price?'':'bad'}"></span><div class="channel-copy"><b>منبع قیمت و جایگزین</b><span>${health.price?'داده معتبر دریافت شده':'منبع قیمت در دسترس نیست'}</span></div></div><div class="channel-card ${health.telegram&&health.push?'ready':''}"><span class="health-dot ${health.telegram&&health.push?'':'warn'}"></span><div class="channel-copy"><b>کانال‌های خروجی</b><span>Telegram ${health.telegram?'آماده':'تنظیم‌نشده'} · Push ${health.push?'آماده':'تنظیم‌نشده'}</span></div></div></div></section>
  <section class="cc-card"><div class="cc-card-head"><b>کلیدهای سریع سرویس</b><span class="alert-count">MASTER</span></div><div style="display:grid;gap:8px">${controlToggle('serviceEnabled','کل سرویس هشدار','توقف یا شروع موتور پایش',settings.serviceEnabled)}${controlToggle('telegramEnabled','Telegram','ارسال پیام ربات بدون هزینه',settings.telegramEnabled)}${controlToggle('pushEnabled','Push مستقیم','اعلان گوشی و دسکتاپ',settings.pushEnabled)}${controlToggle('inAppEnabled','صندوق داخل برنامه','آرشیو و تأیید اعلان‌ها',settings.inAppEnabled)}</div><button class="btn btn-primary" style="width:100%;margin-top:12px" onclick="saveAdminSettings()">ذخیره کلیدهای اصلی</button></section>
  <section class="cc-card"><div class="cc-card-head"><b>پوشش کاربران</b><span class="alert-count">COVERAGE</span></div><div class="coach-list"><div class="coach-item"><span class="coach-num">TG</span><div><b>${faNum(students.filter(s=>s.telegram?.linked||s.telegram===true).length)} اتصال تلگرام</b><p>اتصال امن با لینک یک‌بارمصرف</p></div></div><div class="coach-item"><span class="coach-num">PS</span><div><b>${faNum(students.reduce((n,s)=>n+(s.devices?.length||s.pushDevices||0),0))} دستگاه Push</b><p>قابل قطع از پنل مدیر</p></div></div><div class="coach-item"><span class="coach-num">IN</span><div><b>${faNum(ALERT_STATE.system?.unread||0)} اعلان خوانده‌نشده</b><p>قابل پیگیری تا تأیید کاربر</p></div></div></div></section>
  <section class="cc-card wide"><div class="cc-card-head"><b>دانشجویان و دسترسی سریع</b><button class="btn btn-ghost" style="width:auto" onclick="setControlTab('users')">مدیریت جزئیات ←</button></div><div class="mentor-table-wrap"><table class="mentor-alert-table"><thead><tr><th>دانشجو</th><th>اشتراک</th><th>تلگرام</th><th>Push</th><th>هشدار فعال</th><th>پایان</th></tr></thead><tbody>${students.map(s=>`<tr><td><b>${esc(s.name)}</b><div class="cc-help">${esc(s.uid)}</div></td><td><span class="cc-status ${(s.subscription?.status||s.status)==='active'?'sent':'skipped'}">${(s.subscription?.status||s.status)==='active'?'فعال':(s.subscription?.status||s.status)==='expired'?'منقضی':'غیرفعال'}</span></td><td>${s.telegram?.linked||s.telegram===true?'متصل':'—'}</td><td>${faNum(s.devices?.length||s.pushDevices||0)}</td><td>${faNum(s.activeAlerts||0)}</td><td>${esc((s.subscription?.ends_at||s.endsAt||'—').slice(0,10))}</td></tr>`).join('')}</tbody></table></div></section></div>`
}
function controlToggle(key,title,help,value){return`<div class="toggle-row"><div><b>${title}</b><span>${help}</span></div><button class="switch ${value?'on':''}" onclick="setAdminSetting('${key}',${!value})" aria-label="${title}"></button></div>`}
function setAdminSetting(key,value){if(!ALERT_STATE.settings)return;ALERT_STATE.settings[key]=value;renderPriceAlerts()}
function setAdminSettingInput(key,value,type='text'){if(!ALERT_STATE.settings)return;ALERT_STATE.settings[key]=type==='number'?Number(value):value}
function renderSystemControl(){const s=ALERT_STATE.settings||{};return`<div class="cc-grid"><section class="cc-card"><div class="cc-card-head"><b>کانال‌ها و محدودیت‌ها</b><span class="alert-count">POLICY</span></div><div style="display:grid;gap:8px">${controlToggle('serviceEnabled','کل سرویس','کل موتور هشدار',s.serviceEnabled)}${controlToggle('telegramEnabled','Telegram','ارسال از Bot API',s.telegramEnabled)}${controlToggle('pushEnabled','Push مستقیم','Web Push بدون واسطه',s.pushEnabled)}${controlToggle('inAppEnabled','اعلان داخل برنامه','صندوق و آلارم PWA',s.inAppEnabled)}</div><div class="cc-form" style="margin-top:12px"><label class="fg"><span class="fl">سقف هشدار هر کاربر</span><input class="fi" type="number" min="1" max="200" value="${esc(s.maxAlertsDefault)}" onchange="setAdminSettingInput('maxAlertsDefault',this.value,'number')"></label><label class="fg"><span class="fl">سقف دستگاه هر کاربر</span><input class="fi" type="number" min="1" max="10" value="${esc(s.maxDevicesDefault)}" onchange="setAdminSettingInput('maxDevicesDefault',this.value,'number')"></label></div></section>
  <section class="cc-card"><div class="cc-card-head"><b>تکرار، صدا و ساعات سکوت</b><span class="alert-count">ESCALATION</span></div><div class="cc-form"><label class="fg"><span class="fl">تعداد یادآوری</span><input class="fi" type="number" min="0" max="10" value="${esc(s.followupCount)}" onchange="setAdminSettingInput('followupCount',this.value,'number')"></label><label class="fg"><span class="fl">اولین یادآوری (دقیقه)</span><input class="fi" type="number" min="1" value="${esc(s.firstFollowupMinutes)}" onchange="setAdminSettingInput('firstFollowupMinutes',this.value,'number')"></label><label class="fg"><span class="fl">فاصله تکرار بعدی</span><input class="fi" type="number" min="1" value="${esc(s.nextFollowupMinutes)}" onchange="setAdminSettingInput('nextFollowupMinutes',this.value,'number')"></label><label class="fg"><span class="fl">صدای پیش‌فرض داخل PWA</span><select class="fi" onchange="setAdminSettingInput('defaultSound',this.value)"><option value="signal" ${s.defaultSound==='signal'?'selected':''}>Signal</option><option value="pulse" ${s.defaultSound==='pulse'?'selected':''}>Pulse</option><option value="calm" ${s.defaultSound==='calm'?'selected':''}>Calm</option><option value="none" ${s.defaultSound==='none'?'selected':''}>بدون صدا</option></select></label><label class="fg"><span class="fl">منطقه زمانی</span><input class="fi" value="${esc(s.quietTimezone)}" onchange="setAdminSettingInput('quietTimezone',this.value)"></label><label class="fg"><span class="fl">شروع سکوت</span><input class="fi" type="time" value="${esc(s.quietStart)}" onchange="setAdminSettingInput('quietStart',this.value)"></label><label class="fg"><span class="fl">پایان سکوت</span><input class="fi" type="time" value="${esc(s.quietEnd)}" onchange="setAdminSettingInput('quietEnd',this.value)"></label></div><div style="display:grid;gap:8px;margin-top:10px">${controlToggle('criticalBypassQuiet','استثنای هشدار بحرانی','عبور از ساعات سکوت',s.criticalBypassQuiet)}${controlToggle('vibrationEnabled','ویبره پیش‌فرض','در دستگاه‌های پشتیبانی‌شده',s.vibrationEnabled)}</div></section>
  <section class="cc-card wide"><div class="cc-card-head"><b>متن اعلان و منبع قیمت</b><span class="alert-count">CONTENT / DATA</span></div><div class="cc-form"><label class="fg"><span class="fl">عنوان Push</span><input class="fi" value="${esc(s.pushTitleTemplate)}" onchange="setAdminSettingInput('pushTitleTemplate',this.value)"></label><label class="fg"><span class="fl">عنوان Telegram</span><input class="fi" value="${esc(s.telegramTitleTemplate)}" onchange="setAdminSettingInput('telegramTitleTemplate',this.value)"></label><label class="fg" style="grid-column:1/-1"><span class="fl">متن Push</span><textarea class="fi" onchange="setAdminSettingInput('pushBodyTemplate',this.value)">${esc(s.pushBodyTemplate)}</textarea><span class="cc-help">متغیرها: {symbol} {price} {target} {condition} {severity}</span></label><label class="fg"><span class="fl">منبع اصلی قیمت</span><input class="fi" dir="ltr" value="${esc(s.pricePrimaryBase)}" onchange="setAdminSettingInput('pricePrimaryBase',this.value)"></label><label class="fg"><span class="fl">منبع جایگزین</span><input class="fi" dir="ltr" value="${esc(s.priceFallbackBase)}" onchange="setAdminSettingInput('priceFallbackBase',this.value)"></label></div><button class="btn btn-primary" style="width:auto;margin-top:14px" onclick="saveAdminSettings()">ذخیره تمام تنظیمات</button></section></div>`}
async function saveAdminSettings(){if(alertDemoMode()){showToast('تنظیمات کامل سرویس ذخیره شد');ALERT_STATE.audit.unshift({action:'settings_updated',target_type:'system',created_at:'همین حالا'});renderPriceAlerts();return}const r=await apiFetch('/api/mentor/alert-settings',{method:'PUT',body:JSON.stringify(ALERT_STATE.settings)});if(r?.ok){const d=await r.json();ALERT_STATE.settings=d.settings;showToast('تنظیمات سرویس ذخیره شد');renderPriceAlerts()}else showToast('ذخیره تنظیمات انجام نشد')}
function renderUserControl(){const students=ALERT_STATE.students||[];if(!ALERT_ADMIN_USER&&students.length)ALERT_ADMIN_USER=students[0].uid;const selected=students.find(s=>s.uid===ALERT_ADMIN_USER)||students[0];return`<div class="cc-grid"><section class="cc-card"><div class="cc-card-head"><b>انتخاب دانشجو</b><span class="alert-count">${faNum(students.length)}</span></div><div class="device-list">${students.map(s=>`<button class="device-row" style="width:100%;color:inherit;background:${s.uid===selected?.uid?'rgba(199,169,94,.07)':'transparent'};cursor:pointer" onclick="ALERT_ADMIN_USER='${alertSafeId(s.uid)}';renderPriceAlerts()"><div style="text-align:right"><b>${esc(s.name)}</b><span>${esc(s.uid)} · ${faNum(s.activeAlerts||0)} هشدار</span></div><span class="cc-status ${(s.subscription?.status||s.status)==='active'?'sent':'skipped'}">${(s.subscription?.status||s.status)==='active'?'فعال':'غیرفعال'}</span></button>`).join('')}</div></section>${selected?renderSelectedUserControl(selected):''}</div>`}
function renderSelectedUserControl(s){const sub=s.subscription||{status:s.status||'inactive',ends_at:s.endsAt||null},p=s.policy||{},devices=s.devices||[];return`<section class="cc-card"><div class="cc-card-head"><div><b>${esc(s.name)}</b><div class="cc-help">${esc(s.uid)}</div></div><button class="btn btn-ghost" style="width:auto" onclick="sendAdminTest('${alertSafeId(s.uid)}')">تست چندکاناله</button></div><div class="cc-form"><label class="fg"><span class="fl">وضعیت اشتراک</span><select class="fi" onchange="updateAlertSubscription('${alertSafeId(s.uid)}',this.value,null)"><option value="inactive" ${sub.status==='inactive'?'selected':''}>غیرفعال</option><option value="active" ${sub.status==='active'?'selected':''}>فعال</option><option value="expired" ${sub.status==='expired'?'selected':''}>منقضی</option></select></label><label class="fg"><span class="fl">پایان دسترسی</span><input class="fi" type="date" value="${esc((sub.ends_at||'').slice(0,10))}" onchange="updateAlertSubscription('${alertSafeId(s.uid)}',null,this.value)"></label><label class="fg"><span class="fl">سقف هشدار اختصاصی</span><input class="fi" type="number" min="1" max="200" placeholder="پیش‌فرض" value="${esc(p.maxAlertsOverride??'')}" onchange="updateUserPolicy('${alertSafeId(s.uid)}','maxAlertsOverride',this.value)"></label><label class="fg"><span class="fl">سقف دستگاه اختصاصی</span><input class="fi" type="number" min="1" max="10" placeholder="پیش‌فرض" value="${esc(p.maxDevicesOverride??'')}" onchange="updateUserPolicy('${alertSafeId(s.uid)}','maxDevicesOverride',this.value)"></label><label class="fg"><span class="fl">شروع سکوت اختصاصی</span><input class="fi" type="time" value="${esc(p.quietStart||'23:00')}" onchange="updateUserPolicy('${alertSafeId(s.uid)}','quietStart',this.value)"></label><label class="fg"><span class="fl">پایان سکوت اختصاصی</span><input class="fi" type="time" value="${esc(p.quietEnd||'07:00')}" onchange="updateUserPolicy('${alertSafeId(s.uid)}','quietEnd',this.value)"></label><label class="fg"><span class="fl">منطقه زمانی</span><input class="fi" value="${esc(p.quietTimezone||'Asia/Tehran')}" onchange="updateUserPolicy('${alertSafeId(s.uid)}','quietTimezone',this.value)"></label><label class="fg"><span class="fl">صدای PWA</span><select class="fi" onchange="updateUserPolicy('${alertSafeId(s.uid)}','soundProfile',this.value)"><option value="signal" ${p.soundProfile==='signal'?'selected':''}>Signal</option><option value="pulse" ${p.soundProfile==='pulse'?'selected':''}>Pulse</option><option value="calm" ${p.soundProfile==='calm'?'selected':''}>Calm</option><option value="none" ${p.soundProfile==='none'?'selected':''}>بدون صدا</option></select></label></div><div style="display:grid;gap:8px;margin-top:12px">${userToggle(s,'telegramAllowed','Telegram',p.telegramAllowed!==false)}${userToggle(s,'pushAllowed','Push مستقیم',p.pushAllowed!==false)}${userToggle(s,'inAppAllowed','اعلان داخل برنامه',p.inAppAllowed!==false)}${userToggle(s,'vibrationEnabled','ویبره دستگاه',p.vibrationEnabled!==false)}</div><label class="fg" style="margin-top:12px"><span class="fl">یادداشت مدیریتی</span><textarea class="fi" maxlength="500" onchange="updateUserPolicy('${alertSafeId(s.uid)}','adminNote',this.value)">${esc(p.adminNote||'')}</textarea></label><div class="cc-card-head" style="margin-top:16px"><b>دستگاه‌های متصل</b><span class="alert-count">${faNum(devices.length)}</span></div>${devices.length?`<div class="device-list">${devices.map(d=>`<div class="device-row"><div><b>${esc(d.device_name||'دستگاه')}</b><span>${esc(d.platform||'Web')} · ${d.failure_count?`${faNum(d.failure_count)} خطا`:'سالم'}</span></div><button class="mini-btn" onclick="revokeAdminDevice('${alertSafeId(d.id)}')">قطع دسترسی</button></div>`).join('')}</div>`:alertEmptyMarkup('دستگاه Push فعالی ندارد')}</section>`}
function userToggle(s,key,title,value){return`<div class="toggle-row"><div><b>${title}</b><span>کنترل اختصاصی برای این کاربر</span></div><button class="switch ${value?'on':''}" onclick="updateUserPolicy('${alertSafeId(s.uid)}','${key}',${!value})"></button></div>`}
async function updateUserPolicy(uid,key,value){const s=ALERT_STATE.students.find(x=>alertSafeId(x.uid)===uid);if(!s)return;s.policy=s.policy||{};s.policy[key]=value===''?null:value;if(alertDemoMode()){showToast('سیاست کاربر ذخیره شد');renderPriceAlerts();return}const r=await apiFetch(`/api/mentor/alert-users/${uid}`,{method:'PUT',body:JSON.stringify(s.policy)});if(r?.ok){s.policy=(await r.json()).policy;showToast('سیاست کاربر ذخیره شد');renderPriceAlerts()}else showToast('ذخیره سیاست کاربر انجام نشد')}
async function updateAlertSubscription(uid,status,endsAt){const s=ALERT_STATE.students.find(x=>alertSafeId(x.uid)===uid);if(!s)return;const current=s.subscription||{status:s.status||'inactive',ends_at:s.endsAt||null};const payload={status:status||current.status,endsAt:endsAt===undefined?current.ends_at:(endsAt||null)};if(alertDemoMode()){s.subscription={...current,status:payload.status,ends_at:payload.endsAt};s.status=payload.status;s.endsAt=payload.endsAt;renderPriceAlerts();showToast('اشتراک بروزرسانی شد');return}const r=await apiFetch(`/api/mentor/alert-subscriptions/${uid}`,{method:'PUT',body:JSON.stringify(payload)});if(r?.ok){ALERT_STATE.loaded=false;loadAlertDashboard(true);showToast('اشتراک بروزرسانی شد')}else showToast('بروزرسانی اشتراک ناموفق بود')}
async function revokeAdminDevice(id){if(!confirm('دسترسی Push این دستگاه قطع شود؟'))return;if(alertDemoMode()){for(const s of ALERT_STATE.students)s.devices=(s.devices||[]).filter(d=>alertSafeId(d.id)!==id);renderPriceAlerts();showToast('دستگاه قطع شد');return}const r=await apiFetch(`/api/mentor/alert-devices/${id}`,{method:'DELETE'});if(r?.ok){ALERT_STATE.loaded=false;loadAlertDashboard(true);showToast('دستگاه قطع شد')}else showToast('قطع دستگاه انجام نشد')}
async function sendAdminTest(uid){if(alertDemoMode()){ALERT_STATE.deliveries.unshift({id:`dl_demo_${Date.now()}`,uid,channel:'push',status:'sent',response_code:201,created_at:'همین حالا'});showToast('تست Telegram + Push + In-App انجام شد');renderPriceAlerts();return}const r=await apiFetch('/api/mentor/alert-test',{method:'POST',body:JSON.stringify({uid,severity:'important',telegram:true,push:true,inApp:true})});showToast(r?.ok?'تست چندکاناله ارسال شد':'هیچ کانال آماده‌ای برای این کاربر وجود ندارد')}
function renderDeliveryControl(){const rows=ALERT_STATE.deliveries||[],audit=ALERT_STATE.audit||[];return`<div class="cc-grid"><section class="cc-card wide"><div class="cc-card-head"><div><b>تحویل، مشاهده و خطاها</b><div class="cc-help">Secretها هرگز در پنل نمایش داده نمی‌شوند؛ فقط وضعیت پیکربندی قابل مشاهده است.</div></div><span class="alert-count">LAST ${faNum(rows.length)}</span></div><div class="mentor-table-wrap"><table class="delivery-table"><thead><tr><th>زمان</th><th>کاربر</th><th>کانال</th><th>وضعیت</th><th>کد پاسخ</th><th>خطا</th><th>عملیات</th></tr></thead><tbody>${rows.map(d=>`<tr><td>${esc(d.created_at||'—')}</td><td>${esc(d.uid||'—')}</td><td>${esc(d.channel||'—')}</td><td><span class="cc-status ${esc(d.status)}">${esc(d.status)}</span></td><td>${esc(d.response_code??'—')}</td><td>${esc(d.error_code||'—')}</td><td>${d.status==='failed'?`<button class="mini-btn" onclick="retryDelivery('${alertSafeId(d.id)}')">ارسال مجدد</button>`:'—'}</td></tr>`).join('')}</tbody></table></div></section><section class="cc-card wide"><div class="cc-card-head"><b>تاریخچه تغییرات مدیر</b><span class="alert-count">AUDIT</span></div>${audit.length?`<div class="alert-timeline">${audit.map(x=>`<div class="event"><span class="event-dot"></span><div><b>${esc(x.action)}</b><p>${esc(x.target_type)} · ${esc(x.target_id||'—')} · ${esc(x.created_at)}</p></div></div>`).join('')}</div>`:alertEmptyMarkup('هنوز تغییری ثبت نشده است')}</section></div>`}
async function retryDelivery(id){if(alertDemoMode()){const d=ALERT_STATE.deliveries.find(x=>alertSafeId(x.id)===id);if(d){d.status='sent';d.error_code=null;d.response_code=201;renderPriceAlerts();showToast('ارسال مجدد موفق بود')}return}const r=await apiFetch(`/api/mentor/alert-deliveries/${id}/retry`,{method:'POST',body:'{}'});if(r?.ok){ALERT_STATE.loaded=false;loadAlertDashboard(true);showToast('ارسال مجدد انجام شد')}else showToast('ارسال مجدد ناموفق بود')}

// ══════════════════════════════════════════════════════
// v16: UNIFIED AI COACH WORKSPACE — deterministic staging insights
// The live agent endpoint will be connected only to the isolated staging API.
// ══════════════════════════════════════════════════════
function getAICoachData(){
  const trades=SESSION?.role==='mentor'?Object.values(ALL_TRADES).flat():TRADES;
  const closed=(trades||[]).filter(t=>t.exit);
  const stats=computeStats(closed,trades||[]);
  return{trades:trades||[],closed,stats};
}

function buildCoachSignals(stats,closedCount){
  if(!stats||!closedCount)return[];
  const wr=Number(stats.winRate||0), pf=Number(stats.profitFactor||0);
  const out=[];
  if(stats.maxLossStreak>=3)out.push({title:'قانون توقف پس از زیان',text:`استریک زیان شما به ${faNum(stats.maxLossStreak)} رسیده؛ بعد از دو زیان متوالی، ادامه معامله را تا بازبینی پلن متوقف کن.`});
  if(wr<48)out.push({title:'کیفیت انتخاب موقعیت',text:'نرخ برد پایین‌تر از محدوده هدف است. تعداد موقعیت‌ها را کمتر و تأیید ورود را سخت‌گیرانه‌تر کن.'});
  else out.push({title:'ثبات در انتخاب موقعیت',text:`نرخ برد ${faNum(wr.toFixed(1))}٪ است؛ الگوی موقعیت‌های برنده را به چک‌لیست ثابت تبدیل کن.`});
  if(pf<1.2)out.push({title:'نسبت بازده به ریسک',text:'Profit Factor هنوز حاشیه امن کافی ندارد. پیش از ورود، حداقل R:R و محل ابطال تحلیل را مکتوب کن.'});
  else out.push({title:'حفظ مزیت آماری',text:`Profit Factor برابر ${faNum(pf.toFixed(2))} است. حجم را تنها در ستاپ‌های تکرارپذیر و ثبت‌شده افزایش بده.`});
  if(stats.avgR!==null&&stats.avgR<0.5)out.push({title:'مدیریت خروج',text:'میانگین R واقعی پایین است؛ خروج زودهنگام از بردها و نگه‌داشتن زیان‌ها را در ده معامله بعدی بررسی کن.'});
  return out.slice(0,3);
}

function renderAICoach(){
  const el=document.getElementById('ai-content');if(!el)return;
  const {trades,closed,stats}=getAICoachData();
  const score=Math.max(0,Math.min(100,Math.round(stats?.discipline?.score||0)));
  const signals=buildCoachSignals(stats,closed.length);
  const scope=SESSION?.role==='mentor'?'کل آکادمی':'عملکرد شخصی';
  el.innerHTML=`<div class="ai-shell fade-up">
    <section class="ai-hero">
      <div class="ai-kicker">PERFORMANCE ANALYST</div>
      <h1 class="ai-title">تحلیلگر خودکار عملکرد</h1>
      <p class="ai-sub">داده‌های ژورنال را به تصمیم‌های قابل اجرا تبدیل می‌کند؛ با تمرکز روی انضباط، تکرارپذیری ستاپ‌ها و کنترل رفتار بعد از برد و باخت.</p>
      <div class="ai-status">تحلیل خودکار از داده‌های ژورنال · ${scope}</div>
    </section>
    <div class="ai-grid">
      <section class="ai-card">
        <div class="ai-card-head"><div class="ai-card-title">اولویت‌های این هفته</div><span class="ai-chip">ACTION PLAN</span></div>
        ${signals.length?`<div class="coach-list">${signals.map((x,i)=>`<div class="coach-item"><span class="coach-num">۰${faNum(i+1)}</span><div><b>${esc(x.title)}</b><p>${esc(x.text)}</p></div></div>`).join('')}</div>`:`<div class="ai-empty"><div class="ai-empty-mark">∑</div>برای ساخت تحلیل معنادار، ابتدا چند معامله بسته‌شده با حد ضرر، دلیل ورود و یادداشت ثبت کن.</div>`}
      </section>
      <section class="ai-card">
        <div class="ai-card-head"><div class="ai-card-title">نمره انضباط</div><span class="ai-chip">DISCIPLINE</span></div>
        <div class="ai-score"><strong class="${score>=75?'green':score>=45?'gold':'red'}">${faNum(score)}</strong><span>از ۱۰۰</span></div>
        <div class="ai-meter"><i style="width:${score}%"></i></div>
        <div class="ai-note">${Object.keys(DISC_W).map(k=>`${DISC_LABELS[k]} ${faNum(DISC_W[k])}٪`).join(' · ')} — همان نمره‌ای که آکادمی می‌بیند.</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:16px">
          <div class="sc" style="min-height:78px"><div class="sc-lbl">تریدهای بررسی‌شده</div><div class="sc-val gold">${faNum(closed.length)}</div></div>
          <div class="sc" style="min-height:78px"><div class="sc-lbl">کل ژورنال</div><div class="sc-val">${faNum(trades.length)}</div></div>
        </div>
      </section>
      <section class="ai-card wide">
        <div class="ai-card-head"><div class="ai-card-title">جمع‌بندی</div><span class="ai-chip">SUMMARY</span></div>
        <div class="ai-note" style="min-height:22px">${coachSummary(stats,closed.length)}</div>
        <div class="ai-note">این تحلیل با قاعده‌های ثابت از روی معامله‌های بستهٔ خودت ساخته می‌شود — نه هوش مصنوعی، و هیچ داده‌ای به بیرون نمی‌رود.</div>
      </section>
    </div>
  </div>`;
}

function coachSummary(stats,closedCount){
  if(!closedCount)return 'هنوز معامله بسته‌شده کافی برای تحلیل وجود ندارد. ابتدا داده کامل ژورنال را ثبت کن.';
  const signals=buildCoachSignals(stats,closedCount);
  return esc(signals.length?`جمع‌بندی فعلی: ${signals.map(x=>x.title).join('، ')}. پیشنهاد اصلی: ${signals[0].text}`:'داده فعلی نشانه هشدار جدی ندارد؛ روی تکرار ستاپ‌های مستند و حفظ اندازه ریسک تمرکز کن.');
}

function nav(name,btn){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+name).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  if(name==='dashboard'){SESSION?.role==='mentor'?renderMentorDashboard():renderStudentDashboard()}
  else if(name==='trades'){updateImportButton();renderTrades();}
  else if(name==='alerts')renderPriceAlerts();
  else if(name==='ai')renderAICoach();
  else if(name==='add')renderTradeForm(editingTrade),editingTrade=null;
  else if(name==='mentor')renderMentorMain();
}

// ══════════════════════════════════════════════════════
// SERVICE WORKER + foreground PWA alarm bridge
// ══════════════════════════════════════════════════════
function handlePendingAlertRoute(){if(!SESSION||SESSION.role!=='student')return;const q=new URLSearchParams(location.search);if(q.get('open')==='alerts'){const btn=document.getElementById('nav-alerts');nav('alerts',btn)}const ack=q.get('ack');if(ack&&/^in_[0-9a-f]{24}$/.test(ack)){markInbox(ack,'ack');q.delete('ack');history.replaceState(null,'',`${location.pathname}${q.toString()?'?'+q.toString():''}`)}}
if('serviceWorker'in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
  navigator.serviceWorker.addEventListener('message',event=>{const msg=event.data||{};if(msg.type==='SC_PUSH_ALERT'){if(msg.payload?.inboxId)ALARM.seen.add(msg.payload.inboxId);startAlarm(msg.payload?.severity||'normal', msg.payload?.title, msg.payload?.body,{inboxId:msg.payload?.inboxId});playInAppAlert(msg.payload?.severity||'normal',msg.payload?.sound||'signal',msg.payload?.vibrate!==false);if(SESSION?.role==='student'&&!ALERT_EDITOR){loadAlertDashboard(true)}}else if(msg.type==='SC_PUSH_ACK'&&msg.inboxId){markInbox(msg.inboxId,'ack')}else if(msg.type==='SC_PUSH_OPEN'){const btn=document.getElementById('nav-alerts');nav('alerts',btn)}});
}
startAlarmWatch();   // v25.27: آلارم وقتی اپ باز است، حتی بی‌نوتیفیکیشنِ مرورگر (و حتی بی‌سرویس‌ورکر)
// v25.30: نسخهٔ تازه بی‌نیاز به بستنِ اپ (گزارش مالک ۱۴۰۵-۰۷-۲۹: آپشن‌های آلارم برای بعضی‌ها نیامده بود). اپی که روی
// گوشی باز می‌ماند، کدِ قدیم را تا بارگذاریِ دوباره نگه می‌داشت. حالا وقتی اپ به جلو می‌آید نسخهٔ تازه را می‌پرسد و
// وقتی سرویس‌ورکرِ تازه فعال شد، خودش تازه می‌شود — ولی هرگز وسطِ کار (فرمِ ترید، ویرایشِ هشدار، برگهٔ باز، آلارم).
(function autoUpdate(){
  if(!('serviceWorker' in navigator)) return;
  const hadController = !!navigator.serviceWorker.controller;   // نصبِ اولِ سرویس‌ورکر نباید تازه‌سازی کند
  let pending = false, lastCheck = Date.now();
  const busy = () => !!((typeof ALERT_EDITOR !== 'undefined' && ALERT_EDITOR) || (typeof QC_STATE !== 'undefined' && QC_STATE) ||
    document.getElementById('screen-add')?.classList.contains('active') || document.querySelector('.bottom-sheet.open') || (typeof ALARM !== 'undefined' && ALARM.on));
  const reloadNow = () => {
    if(busy()){ pending = true; return; }
    try{ if(sessionStorage.getItem('sc_upd_reload')) return; sessionStorage.setItem('sc_upd_reload', '1'); }catch(_){}
    location.reload();
  };
  try{ setTimeout(() => sessionStorage.removeItem('sc_upd_reload'), 60000); }catch(_){}
  navigator.serviceWorker.addEventListener('controllerchange', () => { if(hadController) reloadNow(); });
  const check = () => { if(Date.now() - lastCheck < 5 * 60e3) return; lastCheck = Date.now();
    navigator.serviceWorker.getRegistration().then(r => r && r.update()).catch(() => {}); };
  document.addEventListener('visibilitychange', () => { if(document.visibilityState === 'visible'){ if(pending) reloadNow(); check(); } });
  setInterval(() => { if(pending && !busy()) reloadNow(); }, 15000);
  setInterval(check, 30 * 60e3);
})();
setInterval(()=>{
  const screen=document.getElementById('screen-alerts');
  if(document.visibilityState!=='visible')return;
  if(SESSION?.role!=='student')return;
  if(!screen||!screen.classList.contains('active'))return;
  if(ALERT_STATE.loading)return;
  if(ALERT_EDITOR)return;                       // v18.6: فرم هشدار باز است — بروزرسانی خودکار متوقف
  const a=document.activeElement;               // v18.6: کاربر در حال تایپ است — دست نزن
  if(a&&screen.contains(a)&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))return;
  loadAlertDashboard(true);
},30000);

console.log('%cSamadiCapital Journal v18 — Notification Control Center staging','color:#C7A95E;font-weight:bold');
// ══════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
    const sp=document.getElementById('splash');
    sp.style.transition='opacity .5s';sp.style.opacity='0';
    setTimeout(()=>{sp.style.display='none';
      let saved=null;try{saved=JSON.parse(sessionStorage.getItem('sc_session'))}catch(e){}
      if(saved?.uid&&TOKEN){startSession(saved)}
      else{document.getElementById('login-screen').style.display='flex';document.getElementById('login-screen').classList.add('fade-in');
        if(/[?&]signup=1/.test(location.search)) openSignup();}
    },500);
  },1600);
});
document.addEventListener('keydown',e=>{if(e.key==='Enter'){const ls=document.getElementById('login-screen');if(ls&&ls.style.display!=='none'){
  if(ls.querySelector('.lc')?.dataset.mode==='signup'){ if(document.getElementById('su-go')) window.BILLING?.signupStart(); } else doLogin(); }}});
let lastTap=0;document.addEventListener('touchend',e=>{const n=Date.now();if(n-lastTap<300)e.preventDefault();lastTap=n},{passive:false});

;window.__APP_OK=1;
