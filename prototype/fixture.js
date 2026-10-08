/* ===========================================================
   fixture.js — NGUỒN DỮ LIỆU DUY NHẤT cho cả Option B và C.

   Dấu vết KHÔNG còn cố định: learner tự tạo ở Màn 1.
   Bộ dấu vết đó được lưu lại và dùng chung cho CẢ HAI option
   (Comparison Contract) — learner chỉ đánh dấu một lần.

   Mọi nội dung ở file này là synthetic data cho prototype,
   KHÔNG phải evidence từ người dùng thật.
   =========================================================== */

const COURSE = {
  name: 'PROMPT ENGINEERING CĂN BẢN',
  lessonNo: 'Bài 3/8',
  date: '05/10/2026',
  title: 'Bốn thành phần của một prompt hiệu quả',
  subtitle: 'Vai trò · Ngữ cảnh · Ví dụ mẫu · Ràng buộc đầu ra',
  breadcrumb: 'Prompt Engineering căn bản · Bài 3 — Bốn thành phần của một prompt hiệu quả'
};

const SIDEBAR = [
  { type: 'group', text: 'Slide bài giảng' },
  { type: 'item', icon: '▣', text: 'Slide: Prompt là gì', mins: '' },
  { type: 'item', icon: '▶', text: 'Video: Tổng quan bài 3', mins: '4 phút' },
  { type: 'group', text: '1. Bốn thành phần' },
  { type: 'item', icon: '▣', text: 'Bốn thành phần của một prompt', mins: 'Đang học', active: true },
  { type: 'item', icon: '▶', text: '1.1 Vai trò (Role)', mins: '4 phút' },
  { type: 'item', icon: '▶', text: '1.2 Ngữ cảnh (Context)', mins: '3 phút' },
  { type: 'item', icon: '▶', text: '1.3 Ví dụ mẫu (Few-shot)', mins: '6 phút' },
  { type: 'item', icon: '▶', text: '1.4 Ràng buộc đầu ra', mins: '5 phút' },
  { type: 'group', text: '2. Khi prompt không chạy' },
  { type: 'item', icon: '▣', text: 'Slide: Gỡ lỗi prompt', mins: '' },
  { type: 'item', icon: '▶', text: '2.1 Model trả lời lan man', mins: '5 phút' },
  { type: 'item', icon: '▶', text: '2.2 Model bịa dữ liệu', mins: '5 phút' },
  { type: 'item', icon: '▶', text: '2.3 Model bỏ qua định dạng', mins: '4 phút' }
];

/* ---- Nội dung bài học. KHÔNG có dấu vết sẵn — learner tự đánh dấu ---- */
const SECTIONS = [
  {
    id: 'm1', no: 1, title: 'Vai trò (Role)', short: 'Vai trò',
    html: `<p>Khi bạn nói rõ model đang đóng vai ai, bạn thu hẹp vùng kiến thức mà nó rút ra.
      <em>"Hãy giải thích lạm phát"</em> và <em>"Bạn là giáo viên kinh tế lớp 10, hãy giải thích lạm phát"</em>
      cho ra hai câu trả lời khác hẳn nhau về độ sâu và cách dùng từ.
      Vai trò không làm model thông minh hơn — nó chỉ giúp model chọn đúng ngăn kiến thức để lấy ra.</p>`
  },
  {
    id: 'm2', no: 2, title: 'Ngữ cảnh (Context)', short: 'Ngữ cảnh',
    html: `<p>Nêu bối cảnh và người sẽ đọc kết quả. Cùng một yêu cầu <em>"tóm tắt báo cáo này"</em>,
      nếu người đọc là ban giám đốc thì bản tóm tắt cần kết luận trước và số liệu sau; nếu người đọc là
      nhóm kỹ thuật thì ngược lại. Thiếu ngữ cảnh, model sẽ chọn một mức mặc định an toàn và thường là chung chung.</p>`
  },
  {
    id: 'm3', no: 3, title: 'Ví dụ mẫu (Few-shot)', short: 'Ví dụ mẫu', hard: true,
    html: `<p><strong>Zero-shot</strong> là không đưa ví dụ nào. <strong>One-shot</strong> là đưa một ví dụ.
      <strong>Few-shot</strong> là đưa vài ví dụ để model nhìn ra khuôn mẫu bạn muốn.</p>
      <p>Nhưng <strong>thêm ví dụ không phải lúc nào cũng tốt hơn.</strong> Khi các ví dụ quá giống nhau,
      model có xu hướng bắt chước bề mặt của chúng: nó lặp lại cấu trúc câu, và lặp lại cả những
      trường hợp mà bộ ví dụ vô tình bỏ sót. Với tác vụ phân loại,
      3–5 ví dụ phủ được các nhóm khác nhau thường cho kết quả tốt hơn 10 ví dụ cùng rơi vào một nhóm.
      Điều quyết định là <strong>độ phủ</strong>, không phải số lượng.</p>`
  },
  {
    id: 'm4', no: 4, title: 'Ràng buộc đầu ra (Output constraints)', short: 'Ràng buộc đầu ra',
    html: `<p>Nói rõ định dạng, độ dài và những gì không được xuất hiện.
      Dùng delimiter để tách phần hướng dẫn khỏi phần dữ liệu —
      một cặp ký hiệu như <code>"""</code> hoặc <code>###</code> —
      tránh việc model đọc nhầm dữ liệu thành mệnh lệnh.</p>`
  }
];

const KIND_LABEL = { hl: 'Highlight', un: 'Chưa hiểu', qs: 'Câu hỏi', nt: 'Ghi chú' };

/* ---- Bộ dấu vết mẫu — CHỈ dùng khi nhóm tự diễn tập.
        Tester không thấy nút này (chỉ hiện ở chế độ nội bộ). ---- */
const DEMO_TRACES = [
  { kind: 'hl', secId: 'm1', text: 'Vai trò không làm model thông minh hơn — nó chỉ giúp model chọn đúng ngăn kiến thức để lấy ra.' },
  { kind: 'hl', secId: 'm3', text: '3–5 ví dụ phủ được các nhóm khác nhau thường cho kết quả tốt hơn 10 ví dụ cùng rơi vào một nhóm.' },
  { kind: 'hl', secId: 'm4', text: 'Dùng delimiter để tách phần hướng dẫn khỏi phần dữ liệu' },
  { kind: 'un', secId: 'm3', text: 'model có xu hướng bắt chước bề mặt của chúng' },
  { kind: 'un', secId: 'm4', text: 'một cặp ký hiệu như' },
  { kind: 'qs', secId: 'm3', text: 'Nếu đã ràng buộc đầu ra rõ rồi thì còn cần ví dụ mẫu nữa không?' },
  { kind: 'nt', secId: null, text: 'Áp dụng cho việc phân loại phản hồi khách hàng ở chỗ làm.' }
];

/* ===========================================================
   OPTION B — luật gom nhóm (động, chạy trên dấu vết thật)

   Nhóm 1 CỐ Ý gom rộng: mọi highlight vào chung một nhóm bất kể
   thuộc mục nào. Đây là kiểu gom mà một AI hay làm, và để learner
   có cái thật để sửa.
   =========================================================== */
function bGroups(traces) {
  const g = [];
  const hl = traces.filter(t => t.kind === 'hl');
  const stuck = traces.filter(t => t.kind === 'un' || t.kind === 'qs');
  const notes = traces.filter(t => t.kind === 'nt');

  if (hl.length) g.push({ id: 'g1', heading: 'Điều bạn đã nắm được', members: hl.map(t => t.id) });
  if (stuck.length) g.push({ id: 'g2', heading: 'Chỗ còn vướng', members: stuck.map(t => t.id) });
  if (notes.length) g.push({ id: 'g3', heading: 'Áp dụng', members: notes.map(t => t.id) });
  return g;
}

/* Câu hỏi làm rõ — tối đa 2, chỉ hỏi chỗ AI THẬT SỰ không biết */
function bClarify(traces) {
  const out = [];

  /* 1. Một điểm "Chưa hiểu" không kèm ghi chú/câu hỏi nào trong cùng mục
        → AI không biết người học vướng ở đâu cụ thể. */
  const lonely = traces.find(t => t.kind === 'un' &&
    !traces.some(o => (o.kind === 'qs' || o.kind === 'nt') && o.secId === t.secId));
  if (lonely) {
    out.push({
      id: 'c1', needs: lonely.id, type: 'text',
      title: 'Cần bạn làm rõ',
      q: `Bạn đánh dấu <b>"Chưa hiểu"</b> ở chỗ <i>"${lonely.text}"</i> nhưng chưa ghi thêm gì.
          Điều bạn chưa rõ là <b>nó là gì</b>, hay <b>khi nào cần dùng nó</b>?`,
      placeholder: 'Gõ câu trả lời của bạn…'
    });
  }

  /* 2. Ghi chú không gắn mục nào → AI không biết xếp vào đâu. */
  const floating = traces.find(t => t.kind === 'nt' && !t.secId);
  if (floating) {
    out.push({
      id: 'c2', needs: floating.id, type: 'choice',
      title: 'Cần bạn làm rõ',
      q: `Ghi chú <i>"${floating.text}"</i> chưa gắn với mục nào trong bài. Bạn muốn gắn nó vào đâu?`,
      choices: SECTIONS.map(s => s.short).concat('Để riêng')
    });
  }

  return out.slice(0, 2);
}

/* ===========================================================
   OPTION C — bản nháp AI (động)

   Khối A LUÔN lấy từ nội dung bài, không phụ thuộc dấu vết.
   DÒNG 3 LÀ CHỖ LÀM MỜ: giữ đúng định nghĩa zero/one/few-shot
   nhưng ĐÁNH RƠI mệnh đề đánh đổi, nên câu còn lại hàm ý
   "càng nhiều ví dụ càng tốt" — NGƯỢC với bài.
   Khối D nhân đôi lỗi đó, nhưng CÓ gắn nhãn cảnh báo.
   Khối C làm ĐÚNG: không bịa đáp án cho câu hỏi của learner.
   =========================================================== */
const C_SUMMARY = {
  m1: 'Gán vai trò cụ thể giúp thu hẹp vùng kiến thức model rút ra, nên câu trả lời bớt chung chung.',
  m2: 'Nêu bối cảnh và người đọc để model chọn đúng độ chi tiết và giọng điệu.',
  /* ↓↓↓ CHỖ LÀM MỜ ↓↓↓ */
  m3: 'Zero-shot là không đưa ví dụ, one-shot là một ví dụ, few-shot là nhiều ví dụ. Đưa thêm ví dụ mẫu giúp model nắm được định dạng và cách phân loại mong muốn.',
  m4: 'Nêu định dạng, độ dài, và dùng delimiter để tách hướng dẫn khỏi dữ liệu.'
};

function cDraft(traces, narrow) {
  const blocks = [];

  /* Khối A — bốn thành phần. narrow = chỉ mục có dấu vết. */
  const marked = new Set(traces.map(t => t.secId).filter(Boolean));
  const secs = narrow ? SECTIONS.filter(s => marked.has(s.id)) : SECTIONS;
  if (secs.length) {
    blocks.push({
      id: 'A',
      title: narrow ? 'BỐN THÀNH PHẦN — chỉ chỗ bạn đã đánh dấu' : 'BỐN THÀNH PHẦN',
      warn: false,
      items: secs.map(s => ({ t: C_SUMMARY[s.id], src: s.id, srcLabel: 'Mục ' + s.no }))
    });
  }

  /* Khối B — chỗ còn vướng, từ các điểm "Chưa hiểu" */
  const un = traces.filter(t => t.kind === 'un');
  if (un.length) {
    blocks.push({
      id: 'B', title: 'CHỖ BẠN CÒN VƯỚNG', warn: true, warnText: 'AI suy luận — cần kiểm tra',
      body: `Bạn đánh dấu "Chưa hiểu" ở ${un.length} chỗ. Có vẻ bạn đang vướng ở ` +
            un.map(t => `<b>${t.text}</b>`).join(' và ở ') + '.',
      srcs: un.map(t => ({ id: t.id, label: t.id }))
    });
  }

  /* Khối C — câu hỏi của learner. AI KHÔNG bịa đáp án. */
  const qs = traces.filter(t => t.kind === 'qs');
  if (qs.length) {
    blocks.push({
      id: 'C', title: 'CÂU HỎI CỦA BẠN', warn: true, warnText: 'Bài học không trả lời trực tiếp câu này',
      body: qs.map(t => `<i>"${t.text}"</i>`).join('<br>') +
            ' — Bài có nói về các thành phần nhưng <b>không trả lời thẳng câu này</b>. Cần bạn tự kiểm tra hoặc hỏi thêm.',
      srcs: qs.map(t => ({ id: t.id, label: t.id }))
    });
  }

  /* Khối D — áp dụng. NHÂN ĐÔI lỗi của dòng 3, nhưng có nhãn cảnh báo. */
  const nt = traces.filter(t => t.kind === 'nt');
  if (nt.length && !narrow) {
    blocks.push({
      id: 'D', title: 'ÁP DỤNG', warn: true, warnText: 'AI suy luận — cần kiểm tra',
      body: `Bạn ghi chú: <i>"${nt[0].text}"</i> Có thể áp dụng bằng cách ` +
            '<b>đưa nhiều ví dụ mẫu cho từng nhóm</b> để model nắm được khuôn mẫu.',
      srcs: nt.map(t => ({ id: t.id, label: t.id }))
    });
  }

  return blocks;
}
