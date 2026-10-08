# Test Script — Chặng 5 · Chuẩn bị test

**Nhóm:** Double Hờ · **Case:** Case B — AI Notes: Personal Learning Notes
**Facilitator:** Lưu Mạnh Hùng (2A202602942) · **Mỗi phiên:** 20 phút
**Prototype:** `prototype/index.html?opt=b` · `prototype/index.html?opt=c` — xem `prototype-link.md`

> Bản này để **đọc trước phiên**, không đọc trong phiên. Phần được phép đọc nguyên văn chỉ có **Opening** và **Outcome task**.
> Ghi chú facilitator riêng cho từng màn nằm ở `prototype/ANNOTATION.md` — **không mở file đó khi tester đang ngồi cạnh**.

---

## 1. Opening — đọc nguyên văn, ~30 giây

> "Chúng mình đang thử **hai cách thiết kế** khác nhau cho cùng một việc, **không kiểm tra bạn**. Không có câu trả lời đúng hoặc sai — chỗ nào bạn thấy khó hiểu thì đó là lỗi của thiết kế, không phải của bạn.
> Bạn cứ **nói to suy nghĩ** của mình trong lúc làm. Mình sẽ ngồi im phần lớn thời gian và không giải thích gì, để xem bạn tự hiểu màn hình tới đâu."

⚠️ Đề bài gốc viết *"ba cách"*. Nhóm chỉ có **hai** option (B/C) — đã khai báo ở README §1. **Nói đúng "hai cách"**, không nói "ba" cho khớp slide.

---

## 2. Relevant context — 1 câu hỏi, tối đa 2 phút

> **"Gần đây bạn có từng học hoặc tìm hiểu một chủ đề nào đó, rồi sau này cần dùng lại mà phải đi tìm lại nội dung đã học không? Kể nhanh lần gần nhất giúp mình."**

**Cách dùng câu trả lời:**

| Tester trả lời | Phiên vẫn chạy? | Giới hạn khi đọc kết quả |
| --- | --- | --- |
| Có, kể được một lần cụ thể | ✅ | Được dùng cho cả interaction breakdown **và** value signal |
| Có nhưng chung chung ("thì cũng có") | ✅ | Chỉ dùng cho **interaction breakdown** |
| Không có context liên quan | ✅ vẫn test | **Không đưa value claim mạnh** từ phiên này. Ghi rõ vào Feedback Note |

Nếu tester kể dài quá 2 phút: *"Để mình cho bạn xem màn hình trước nhé, lát nữa quay lại chỗ này."*

❌ Không hỏi: *"Bạn có thấy việc ghi chú khó không?"* — câu đó đã cài sẵn kết luận là **có** vấn đề, tức là mớm chính `H_B` mà hôm nay đang đi kiểm.

---

## 3. Outcome task — đọc nguyên văn, giống hệt cho cả B và C

> **"Bạn vừa học xong bài này. Hãy dùng màn hình trước mặt để lưu lại phần bạn cho là quan trọng, sao cho một tháng sau bạn mở ra vẫn hiểu được và biết nó đến từ đâu trong bài. Làm theo cách bạn thấy tự nhiên nhất."**

**Vì sao câu này đạt:** nói **kết quả cần đạt** (lưu được phần quan trọng · một tháng sau vẫn hiểu · biết nguồn) mà **không nói nút nào cần bấm**, không nhắc chữ "AI", không nhắc "Sổ ghi chú", không nói phải đánh dấu bao nhiêu chỗ.

Lượt thứ hai (option còn lại), **đọc lại đúng câu đó**, thêm một câu duy nhất: *"Vẫn việc đó, nhưng màn hình khác một chút."*

---

## 4. Observation focus — chọn 5, bám vào 4 giả định §3.4 của Design Sheet

| # | Quan sát | Nối về giả định |
| --- | --- | --- |
| **F1** | **First action** — thao tác đầu tiên sau khi hết đọc Outcome task. Vào Sổ ghi chú bằng **đường nào** (pill trên nav / nút dưới bảng dấu vết / "Hoàn thành bài học") | Giả định chuyển bối cảnh §1.3 — learner có nhận ra "hết bài" là lúc ghi chú không |
| **F2** | **Hesitation / ngắt mạch** — chỗ dừng > ~5 giây, câu hỏi bật ra, vẻ mất mạch. Ở B: lúc gặp **câu hỏi làm rõ** và lúc phải **"Duyệt nhóm này"** từng nhóm | Giả định 1 — B *hỗ trợ* hay *làm ngắt mạch* |
| **F3** | **Evidence đọc hay bỏ qua** — có bấm mở link nguồn không (cái nào trước), có dừng ở khối gắn nhãn ⚠ không, **bao nhiêu giây** từ lúc thấy bản nháp tới lúc bấm Lưu | Giả định 2 — C có *thật sự kiểm tra* hay chỉ *xác nhận* |
| **F4** | **Misunderstanding / mất ngữ cảnh** — mệnh đề đánh đổi ở mục 3 (*độ phủ, không phải số lượng*) còn nằm trong note cuối không. Có ai **bắt được dòng 3 nói ngược với bài** không | Giả định 3 — có giữ đủ ngữ cảnh không |
| **F5** | **Correction / recovery + option được chọn** — tester sửa gì, bằng đường nào (*Tự viết* ở B · *Huỷ bản nháp* / *Tạo lại hẹp hơn* ở C), chọn option nào và **trade-off tự nói ra** | Giả định 4 — tự tổng hợp là *pain* hay *hoạt động học cần giữ* |

> F1–F5 là **cái cần nhìn**, không phải câu cần hỏi. Trong phiên chỉ ghi **hành vi**; diễn giải để sau.

---

## 5. Sáu luật facilitation — thuộc trước khi vào phiên

1. **Tester tự điều khiển.** Không chạm chuột, không trỏ tay vào màn hình.
2. **Cùng một task cho B và C.** Đọc lại đúng câu ở §3, không "cải tiến" cho dễ hơn ở lượt hai.
3. **Không narrate, không giải thích icon.** Không nói nhãn ⚠ nghĩa là gì, không nói "Duyệt nhóm này" để làm gì.
4. **Không lấp im lặng.** Tester im 10–15 giây là dữ liệu, không phải sự cố. Đếm thầm, đừng nói.
5. **Không hỏi "Bạn có thích không?"** — hỏi *đã làm gì* và *vì sao làm vậy*.
6. **Tester hỏi cách hoạt động → hỏi lại:** *"Theo bạn, nó nên hoạt động như thế nào?"* Nếu họ hỏi *"cái này đúng không?"* (dòng 3 của C) → *"Theo bạn thì sao?"* — **tuyệt đối không xác nhận hay phủ nhận**.

### Ba câu cứu hộ — chỉ dùng ba câu này

- *"Bạn cứ nói to suy nghĩ của mình nhé."*
- *"Bạn sẽ làm gì tiếp theo?"*
- *"Theo bạn, nó nên hoạt động như thế nào?"*

---

## 6. Timeline 20 phút

| Phút | Việc | Ghi chú |
| --- | --- | --- |
| **0–2'** | Opening (§1) + 1 câu relevant context (§2) | Không mô tả prototype trước |
| **2–8'** | **Option thứ nhất** — đọc Outcome task (§3), ngồi im, ghi F1–F5 | ~4' thao tác + ~2' đệm |
| **8–9'** | Bấm **"Bắt đầu lại"** → về Màn 1, **dấu vết vẫn còn**. Facilitator đổi `?opt=` trên URL | Không giải thích vì sao đổi |
| **9–14'** | **Option thứ hai** — đọc lại đúng Outcome task | Tester **không** đọc lại bài, vào thẳng Sổ ghi chú |
| **14–18'** | **So sánh** — ba câu ở §7 | Đây là lúc duy nhất được hỏi *vì sao* |
| **18–20'** | Điền `prototype-feedback-note.md` **ngay tại chỗ**, tester còn ngồi đó | Hỏi lại nếu chỗ nào mình ghi chưa kịp |

**Thứ tự đảo chiều** để giảm order effect — ghi rõ thứ tự thật vào Feedback Note:

| Tester | Thứ tự | URL mở đầu |
| --- | --- | --- |
| Tester 1 *(phiên của Hùng)* | **B → C** | `index.html?opt=b&fresh=1` |
| Tester 2 *(phiên của Gia Huy)* | **C → B** | `index.html?opt=c&fresh=1` |
| Tester 3 *(nếu chạy thêm ngoài giờ)* | **B → C** | `index.html?opt=b&fresh=1` |

⚠️ **`&fresh=1` cho mỗi tester mới** — không thì dấu vết người trước còn nằm đó.

---

## 7. Ba câu so sánh — 14–18'

1. **"Bạn chọn cách thứ nhất hay cách thứ hai? Vì sao?"**
   *(Gọi theo **thứ tự tester đã gặp**, không gọi "B / C" — tester không biết tên option.)*
2. **"Bạn muốn tự làm phần nào, và giao cho AI phần nào?"**
3. **"Điều gì ở cách bạn vừa chọn khiến bạn chưa thoải mái?"**

Câu 3 là câu quan trọng nhất — nó là chỗ duy nhất trong phiên **mời tester nói điều ngược lại kỳ vọng của nhóm**. Nếu tester nói *"ổn hết"*, hỏi thêm một lần: *"Giả sử bạn phải bỏ một thứ ở cách đó, bạn bỏ gì?"* rồi dừng, không đào thêm.

---

## 8. Rà soát câu hỏi dẫn dắt — AI pass

Đã nhờ Claude Code soát toàn bộ bộ câu hỏi trên. Ba chỗ bị bắt lỗi và đã sửa — chi tiết ở `ai-support-log.md` Entry 10:

| Chỗ | Bản nháp đầu | Vấn đề | Đã sửa thành |
| --- | --- | --- | --- |
| Relevant context | *"Bạn có thấy khó khi ghi chú lại thứ vừa học không?"* | Cài sẵn kết luận **có** vấn đề → mớm chính `H_B` | §2 — hỏi **lần gần nhất đã xảy ra gì**, không hỏi cảm giác |
| Outcome task | *"…hãy dùng AI để tổng hợp lại ghi chú."* | Nói **cơ chế** (dùng AI) thay vì **kết quả** → ép tester vào đường nhóm muốn thấy | §3 — chỉ nói kết quả cần đạt, bỏ hẳn chữ "AI" |
| Câu so sánh 1 | *"Cách nào nhanh hơn / tiện hơn?"* | Chọn trước **tiêu chí** là tốc độ → che mất trade-off *agency* mà giả định 4 đang đi kiểm | §7.1 — *"Bạn chọn cách nào? Vì sao?"*, để tester tự nêu tiêu chí |

Một chỗ AI **đề xuất mà tôi không nhận**: AI gợi ý hỏi *"Bạn có tin vào bản nháp AI tạo ra không?"*. Bỏ, vì chữ **"tin"** báo trước rằng **có gì đáng nghi** — đúng ngay trước phép thử dòng 3 của Option C. Giữ nguyên F3: đo **hành vi** (có mở nguồn không, bao nhiêu giây tới lúc Lưu) thay vì hỏi về niềm tin.

---

## 9. Checklist mang theo phiên

- [ ] Prototype mở sẵn, URL đúng option đầu tiên, có `&fresh=1`
- [ ] `prototype/ANNOTATION.md` đã đọc trước — **đóng lại** trước khi tester ngồi vào
- [ ] In **cue card** `session-kit.md` §B và **bản ghi tay thô** §C *(hai bản, một cho mỗi option)*
- [ ] `prototype-feedback-note.md` mở sẵn một bản trống
- [ ] Đồng hồ bấm giờ (cho F3 — giây từ lúc thấy bản nháp tới lúc bấm Lưu)
- [ ] **Ghi nguyên văn tester nói**, không viết lại cho gọn
- [ ] Xin phép ghi âm bằng câu ở `session-kit.md` §A3; không được thì chỉ ghi tay

---

## 10. Đọc trước khi vào phiên

| File | Vì sao |
| --- | --- |
| `session-kit.md` | Tin nhắn mời tester · cue card · bản ghi tay · việc làm ngay sau phiên |
| `prototype/ANNOTATION.md` | Watch-for từng màn · **cảnh báo B có thể hỏi 0 câu làm rõ** · xử lý sự cố |
| `dry-run-report.md` §4 | Khi nào bước *Ask* của Option B không xuất hiện — biết trước để không hoảng và không lái tester |
