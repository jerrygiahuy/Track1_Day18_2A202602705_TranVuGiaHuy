/* ===========================================================
   shared.js — khung VLearn + mọi thứ dùng chung giữa B và C.
   Màn 1 và Màn 3 render từ đây, nên hai option không thể
   lệch nhau ngoài vùng <main> của Màn 2.
   =========================================================== */

/* ---------- Khung VLearn ---------- */

const ICON_NOTE = `<svg viewBox="0 0 16 16" width="15" height="15" fill="none" aria-hidden="true">
  <path d="M4 1.75h7.5A1.75 1.75 0 0 1 13.25 3.5v9A1.75 1.75 0 0 1 11.5 14.25H4"
        stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  <path d="M4 1.75v12.5" stroke="currentColor" stroke-width="1.4"/>
  <path d="M2.4 4.2h3.2M2.4 8h3.2M2.4 11.8h3.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  <path d="M7.4 5.6h3.4M7.4 8.4h3.4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
</svg>`;

/* notebook: { href, active } — "Sổ ghi chú" nằm trên nav, cạnh "Đặt câu hỏi với AI".
   Đây là chỗ critical interaction sống, nên nó phải nhìn thấy được từ mọi màn. */
function chrome({ progress = '3/14 hoạt động', pct = 21, notebook = null } = {}) {
  const n = getTraces().length;
  const nbHTML = notebook ? `
    <a class="vl-note${notebook.active ? ' on' : ''}" href="${notebook.href || '#'}" id="nbBtn">
      ${ICON_NOTE}<span>Sổ ghi chú</span>${n ? `<span class="cnt">${n}</span>` : ''}
    </a>` : '';

  document.body.insertAdjacentHTML('afterbegin', `
    <header class="vl-top">
      <button class="vl-back" title="Quay lại">←</button>
      <div class="vl-title">${COURSE.breadcrumb}</div>
      <div class="vl-top-right">
        <div class="vl-lang"><span>EN</span><span class="on">VI</span></div>
        <div class="vl-progress">
          <span>${progress}</span>
          <div class="vl-progress-bar"><i style="width:${pct}%"></i></div>
        </div>
        <button class="vl-top-action">✦ Đặt câu hỏi với AI</button>
        ${nbHTML}
        <button class="vl-top-action">✋ Gửi yêu cầu</button>
        <div class="vl-avatar">L</div>
      </div>
    </header>

    <div class="vl-body">
      <aside class="vl-side">
        <div class="vl-side-head"><span>NỘI DUNG BÀI HỌC</span><button>×</button></div>
        <div class="vl-course"><span>${COURSE.name}</span><span class="muted">⌄</span></div>
        ${SIDEBAR.map(r => r.type === 'group'
          ? `<div class="vl-group sub">${r.text}</div>`
          : `<a class="vl-item${r.active ? ' on' : ''}" href="javascript:void(0)">
               <span class="ic">${r.icon}</span><span class="tx">${r.text}</span><span class="mi">${r.mins}</span>
             </a>`).join('')}
      </aside>
      <main class="vl-main" id="main"></main>
    </div>

    <div class="vl-bottom">
      <button class="vl-tool" title="Chọn">▲</button>
      <button class="vl-tool" title="Bút">✎</button>
      <button class="vl-tool" title="Bút dạ quang">▬</button>
      <button class="vl-tool" title="Hình">○</button>
      <button class="vl-tool" title="Tẩy">◌</button>
      <span class="vl-sep"></span>
      <button class="vl-tool" title="Gợi ý">◆</button>
      <button class="vl-tool" title="Chữ">T</button>
      <span class="vl-sep"></span>
      <div class="vl-seg"><button>Từng trang</button><button class="on">Cuộn dọc</button></div>
      <span class="vl-sep"></span>
      <button class="vl-tool">−</button><span class="small">100%</span><button class="vl-tool">+</button>
      <div class="vl-page">
        <button class="vl-tool">‹</button><span>3 / 14</span><button class="vl-tool">›</button>
        <span class="vl-sep"></span>
        <button class="btn sm ghost" id="resetAny" title="Quay về đầu bài học">Bắt đầu lại</button>
      </div>
    </div>

    <div class="scrim" id="scrim"></div>
    <aside class="src-panel" id="srcPanel">
      <div class="sp-top"><h3>Nguồn trong bài học</h3><button id="spClose">×</button></div>
      <div class="sp-label" id="spLabel"></div>
      <div class="sp-quote" id="spQuote"></div>
    </aside>
  `);

  if (notebook && notebook.active) {
    document.getElementById('nbBtn').onclick = e => e.preventDefault();
  }
  document.getElementById('spClose').onclick = closeSource;
  document.getElementById('scrim').onclick = closeSource;
  document.querySelector('.vl-back').onclick = resetAll;
  document.getElementById('resetAny').onclick = resetAll;   // đường reset có ở MỌI màn — GATE 4
  return document.getElementById('main');
}

/* ---------- Ngăn nguồn ---------- */

function openSource(key) {
  const sec = SECTIONS.find(s => s.id === key);
  const tr = getTraces().find(t => t.id === key);
  let label = '', quote = '';
  if (sec) {
    label = `Mục ${sec.no} — ${sec.title}`;
    quote = sec.html;
  } else if (tr) {
    label = `${tr.label} · ${tr.src}`;
    quote = `<p>“${tr.text}”</p>`;
  } else { return; }
  document.getElementById('spLabel').textContent = label;
  document.getElementById('spQuote').innerHTML = quote;
  document.getElementById('srcPanel').classList.add('open');
  document.getElementById('scrim').classList.add('on');
}
function closeSource() {
  document.getElementById('srcPanel').classList.remove('open');
  document.getElementById('scrim').classList.remove('on');
}
/* Mọi [data-src] trong trang đều mở được nguồn */
function wireSources(root) {
  (root || document).querySelectorAll('[data-src]').forEach(el => {
    el.onclick = e => { e.preventDefault(); openSource(el.dataset.src); };
  });
}

/* ===========================================================
   Dấu vết — learner tự tạo ở Màn 1, lưu lại và dùng chung
   cho CẢ HAI option. Đây là thứ giữ Comparison Contract:
   B và C ăn đúng một bộ dấu vết.
   =========================================================== */

const TRACE_KEY = 'vl_traces';

function getTraces() {
  try { return JSON.parse(sessionStorage.getItem(TRACE_KEY) || '[]'); } catch (e) { return []; }
}
function setTraces(list) {
  try { sessionStorage.setItem(TRACE_KEY, JSON.stringify(list)); } catch (e) {}
}
function addTrace(t) {
  const list = getTraces();
  const n = list.filter(x => x.kind === t.kind).length + 1;
  const prefix = { hl: 'H', un: 'CH', qs: 'Q', nt: 'N' }[t.kind];
  const rec = { id: prefix + n, label: KIND_LABEL[t.kind], ...t };
  rec.src = t.secId ? secLabel(t.secId) : 'Không gắn mục nào';
  list.push(rec);
  setTraces(list);
  return rec;
}
function removeTrace(id) { setTraces(getTraces().filter(t => t.id !== id)); }

/* Số đếm trên nút "Sổ ghi chú" — cho learner thấy dấu vết của mình đi đâu */
function refreshNoteBadge() {
  const btn = document.getElementById('nbBtn');
  if (!btn) return;
  const n = getTraces().length;
  let c = btn.querySelector('.cnt');
  if (!n) { if (c) c.remove(); return; }
  if (!c) { c = document.createElement('span'); c.className = 'cnt'; btn.appendChild(c); }
  c.textContent = n;
}

function secLabel(secId) {
  const s = SECTIONS.find(x => x.id === secId);
  return s ? `Mục ${s.no} — ${s.short}` : 'Không gắn mục nào';
}

function traceRow(t, extra = '') {
  return `<div class="trace-row" data-tid="${t.id}">
    <span class="badge ${t.kind}">${t.label}</span>
    <div class="trace-text">${esc(t.text)}
      <div class="trace-src">${t.id} · <a href="#" class="src-link" data-src="${t.secId || t.id}">→ ${t.src}</a></div>
    </div>${extra}
  </div>`;
}

function tracesBlock(traces) {
  const list = traces || getTraces();
  if (!list.length) {
    return `<div class="traces"><div class="traces-head"><span>Dấu vết của bạn</span><span class="muted">0 mục</span></div>
      <div class="trace-row"><span class="muted small">Bạn chưa đánh dấu gì trong bài này.</span></div></div>`;
  }
  return `<div class="traces">
    <div class="traces-head"><span>Dấu vết bạn đã để lại trong bài này</span><span class="muted">${list.length} mục</span></div>
    ${list.map(t => traceRow(t)).join('')}
  </div>`;
}

function sideSources(traces) {
  const list = traces || getTraces();
  return `<div class="side-src"><h4>DẤU VẾT CỦA BẠN (${list.length})</h4>
    ${list.length ? list.map(t => traceRow(t)).join('')
      : '<div class="trace-row"><span class="muted small">Chưa có dấu vết nào.</span></div>'}</div>`;
}

/* ---------- Màn 3 — đã lưu. Giống hệt nhau cho B và C ---------- */

function renderSaved(main, sections, sources) {
  main.innerHTML = `<div class="vl-card">
    <button class="vl-ai-fab" title="Trợ lý AI">✦</button>
    <div class="saved">
      <div class="saved-flag">✓ Đã lưu.</div>
      <div class="saved-note">
        <div class="sn-head">
          <h3>${COURSE.title}</h3>
          <div class="d">${COURSE.name.toLowerCase()} · ${COURSE.lessonNo} · ${COURSE.date}</div>
        </div>
        <div class="sn-body">${sections}</div>
        <div class="sn-src">Nguồn đã gắn: ${sources.length ? sources.join(' · ') : '—'}</div>
      </div>
      <div class="actions">
        <button class="btn" id="resetBtn">Bắt đầu lại từ đầu</button>
      </div>
    </div>
  </div>`;
  document.getElementById('resetBtn').onclick = resetAll;
  wireSources(main);
  window.scrollTo(0, 0);
}

/* Quay về Màn 1 nhưng GIỮ dấu vết — để lượt option thứ hai dùng
   đúng bộ dấu vết của lượt đầu. Xoá hẳn: index.html?fresh=1 */
function resetAll() {
  const opt = new URLSearchParams(location.search).get('opt');
  location.href = 'index.html' + (opt ? '?opt=' + opt : '');
}

/* ---------- Tiện ích ---------- */

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
function byId(id) { return getTraces().find(t => t.id === id); }
