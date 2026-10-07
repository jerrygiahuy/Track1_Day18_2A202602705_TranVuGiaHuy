const screens = [...document.querySelectorAll('.screen')];
const traces = [
  ['goal', 'Goal cho biết kết quả agent cần đạt, không phải từng bước phải làm.'],
  ['tool', 'Tool chỉ nên được gọi khi action có liên quan và điều kiện đầu vào đã đủ.'],
  ['unclear', 'Khi nào agent nên lập lại kế hoạch?'],
  ['question', 'Làm sao để người dùng biết agent đang dựa vào bằng chứng nào?']
];
const storageKey = 'vlearn-learning-notes-v1';
let savedNotes = [];
let selectedNoteId = null;
try { savedNotes = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (!Array.isArray(savedNotes)) savedNotes = []; } catch { savedNotes = []; }
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function persistNotes() {
  try { localStorage.setItem(storageKey, JSON.stringify(savedNotes)); return true; }
  catch { toast('Trình duyệt chưa cho phép lưu. Hãy tải bản Markdown để giữ ghi chú.'); return false; }
}
function renderLibrary() {
  document.querySelector('#saved-count').textContent = savedNotes.length;
  const query = document.querySelector('#note-search').value.trim().toLocaleLowerCase('vi');
  const matches = savedNotes.filter(note => `${note.title} ${note.blocks.map(block => block.text).join(' ')}`.toLocaleLowerCase('vi').includes(query));
  document.querySelector('#saved-notes').innerHTML = matches.length ? matches.map(note => `<button class="saved-note-card" data-note-id="${escapeHTML(note.id)}"><strong>${escapeHTML(note.title)}</strong><small>${new Date(note.updatedAt).toLocaleString('vi-VN')} · Option ${escapeHTML(note.option)}</small><p>${escapeHTML(note.blocks[0]?.text || '').slice(0, 160)}</p><span>Mở để xem và chỉnh sửa →</span></button>`).join('') : '<div class="empty-library">Chưa có ghi chú phù hợp. Tạo bản nháp rồi xác nhận lưu để xem lại tại đây.</div>';
}
function openSavedNote(id) {
  const note = savedNotes.find(item => item.id === id);
  if (!note) return;
  selectedNoteId = id;
  document.querySelector('#saved-title').textContent = note.title;
  document.querySelector('#saved-meta').textContent = `Đã lưu · ${new Date(note.updatedAt).toLocaleString('vi-VN')} · Option ${note.option}`;
  document.querySelector('#saved-content').innerHTML = note.blocks.map(block => `<div class="note-block"><label>${escapeHTML(block.label)}<textarea>${escapeHTML(block.text)}</textarea></label>${block.warning ? `<span class="warning">${escapeHTML(block.warning)}</span>` : ''}<button class="source" data-source="${escapeHTML(block.source)}">Xem nguồn bài học</button></div>`).join('');
  show('saved-detail');
}
function saveCurrentDraft() {
  const screen = document.querySelector('.screen.active');
  if (screen.id !== 'c-review') return;
  const note = { id: `note-${Date.now()}`, title: 'AI Agent: Lập kế hoạch và sử dụng công cụ', option: screen.id === 'c-review' ? 'C' : 'B', updatedAt: new Date().toISOString(), blocks: [...screen.querySelectorAll('.note-block')].map(block => ({ label: block.querySelector('label').firstChild.textContent.trim(), text: block.querySelector('textarea, input').value, source: block.querySelector('[data-source]')?.dataset.source || '', warning: block.querySelector('.warning')?.textContent || '' })) };
  savedNotes.unshift(note);
  selectedNoteId = note.id;
  const persisted = persistNotes();
  renderLibrary();
  document.querySelector('#result-title').textContent = persisted ? 'Đã lưu vào Sổ ghi chú' : 'Ghi chú đang giữ trong phiên này';
  show('result');
}

function show(id) {
  document.body.classList.add('notes-open');
  screens.forEach(screen => screen.classList.toggle('active', screen.id === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toast(message) {
  const el = document.querySelector('#toast');
  el.textContent = message;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 1800);
}

document.addEventListener('click', event => {
  const saved = event.target.closest('[data-note-id]');
  if (saved) openSavedNote(saved.dataset.noteId);
  const source = event.target.closest('[data-source]');
  if (source) {
    document.querySelector('#source-text').textContent = source.dataset.source;
    document.querySelector('#source-dialog').showModal();
  }

  const action = event.target.closest('[data-action]')?.dataset.action;
  if (!action) return;
  if (action === 'start-ai') show('c-offer');
  if (action === 'ask-ai') toast('Đặt câu hỏi với AI là tính năng riêng của VLearn.');
  if (action === 'notes' || action === 'library') { renderLibrary(); show('library'); }
  if (action === 'view-saved') openSavedNote(selectedNoteId);
  if (action === 'update-note') {
    const note = savedNotes.find(item => item.id === selectedNoteId);
    if (note) { document.querySelectorAll('#saved-content textarea').forEach((field, index) => note.blocks[index].text = field.value); note.updatedAt = new Date().toISOString(); if (persistNotes()) toast('Đã lưu chỉnh sửa.'); renderLibrary(); }
  }
  if (action === 'export-note') {
    const note = savedNotes.find(item => item.id === selectedNoteId);
    if (note) { const fields = [...document.querySelectorAll('#saved-content textarea')]; const markdown = `# ${note.title}\n\n` + note.blocks.map((block, index) => `## ${block.label}\n\n${fields[index]?.value ?? block.text}\n\nNguồn: ${block.source}\n`).join('\n'); const url = URL.createObjectURL(new Blob([markdown], {type:'text/markdown;charset=utf-8'})); const link = document.createElement('a'); link.href = url; link.download = 'vlearn-learning-note.md'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
  }
  if (action === 'close-notes') document.body.classList.remove('notes-open');
  if (action === 'sidebar') document.body.classList.toggle('sidebar-hidden');
  if (action === 'request') toast('Bạn có thể gửi yêu cầu hỗ trợ sau bài học.');
  if (['like', 'dislike', 'flag'].includes(action)) toast('Đã ghi nhận phản hồi của bạn.');
  if (action === 'fullscreen') {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  }
  if (action === 'next' || action === 'prev') {
    const page = document.querySelector('#page-label');
    page.textContent = Math.min(28, Math.max(1, Number(page.textContent) + (action === 'next' ? 1 : -1)));
  }
  if (action === 'zoom-in' || action === 'zoom-out') {
    const label = document.querySelector('#zoom-label');
    label.textContent = Math.min(150, Math.max(50, parseInt(label.textContent) + (action === 'zoom-in' ? 10 : -10))) + '%';
  }
  if (action === 'undo' || action === 'clear') toast('Không có nét vẽ trên trang này.');
  if (action === 'home' || action === 'reset') show('context-screen');
  if (action === 'c-back') show('c-offer');
  if (action === 'c-generate') show('c-review');
  if (action === 'c-regenerate') { show('c-offer'); toast('Hãy chọn lại phạm vi trước khi tạo.'); }
  if (action === 'discard') { show('context-screen'); toast('Đã hủy bản nháp; dữ liệu gốc không đổi.'); }
  if (action === 'save') saveCurrentDraft();
  if (action === 'close-dialog') document.querySelector('#source-dialog').close();

});

renderLibrary();
document.querySelector('#note-search').addEventListener('input', renderLibrary);

const lessons = ['Nhìn lại Day 16','Mở đầu','Double Diamond','Job to be done vs task','Job to be done (HE)','Tìm Job ở đâu?','Outcome & Opportunity','Reverse Pain Point','The Mom Test','Bad vs Good interview','Phỏng vấn ai?','Dùng AI soạn kịch bản'];
const durations = [6,2,4,4,7,3,4,4,5,4,6,3];
document.querySelector('#lesson-list').innerHTML = lessons.map((name, i) => `<div class="lesson-item"><span class="lesson-icon">▹</span><span class="lesson-name">Video ${String(i).padStart(2,'0')}. ${name}</span><small>${durations[i]} phút</small></div>`).join('');

if (window.location.hash === '#option-c') show('c-offer');
