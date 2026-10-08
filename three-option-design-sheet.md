# Design Sheet — Day 18

**Nhóm:** Double Hờ · **Case:** Case B — AI Notes: Personal Learning Notes
**Thành viên:** Trần Vũ Gia Huy (`2A202602705`) — **Option B** · Lưu Mạnh Hùng (`2A202602942`) — **Option C**
**Nguồn evidence:** `day17-input-pack.md` ← `../Track1_Day17_2A202602942_LuuManhHung/`
**Nguồn Chặng 2–3:** hợp nhất từ bản phân tích của Gia Huy — `two-option-design-sheet_v2.md`

> **Khai báo lệch chuẩn:** nhóm có 2 thành viên nên làm **2 options** thay vì 3, và có **1 Practice Note** thay vì 3. Chi tiết ở `day17-input-pack.md` mục G.
> **Về cách đặt tên:** nhóm giữ nhãn **B** và **C** theo bản của Gia Huy. Không có Option A được build — nhãn A trống, không phải thiếu sót.
> Mỗi option có một **tên ngắn theo chức năng**, dùng trong prototype và trong mọi tài liệu:
> **B = "Cùng tổ chức"** (learner chọn phạm vi, AI gom nhóm) · **C = "Nháp sẵn"** (AI soạn trước, learner duyệt).

---

# Chặng 1 — Tổng hợp evidence · 15 phút

## 1.1 Evidence huddle

### Bảng chính — nguồn độc lập

| Practice Note | User đã thực sự làm/nói gì? | Điều nhóm đang diễn giải |
| --- | --- | --- |
| **1 — P01 Tài** | *"Thường thì em sẽ bắt đầu bằng một câu hỏi về một chủ đề em chưa biết gì… khi AI trả lời thì em sẽ bắt đầu phản biện lại từng ý nhỏ trong câu trả lời, đặc biệt là những ý mình chưa rõ."* (E01)<br>*"Anh sẽ tạo ảnh Infographic đúc kết lại rồi cất vào thư mục hoặc đăng lên Facebook."* (E03) | Learner có một workflow học theo nhánh và có nhu cầu biến quá trình đó thành thứ giữ lại được. |
| **2** | ❌ **Không có.** Nhóm chỉ 2 người, Day 17 hoàn thành 1 lượt phỏng vấn. | — |
| **3** | ❌ **Không có.** | — |

> Không điền bù hai dòng trống bằng suy đoán hay bằng chính nội dung của P01.

### Bảng phụ — ba chi tiết trong cùng một nguồn

Đọc như **ba mảnh evidence riêng** để bóc tách, **không phải ba nguồn độc lập**. Không dùng bảng này để kết luận pattern.

| # | Evidence nguyên văn | Loại | Điều nhóm **đang diễn giải** (chưa được chứng minh) |
| --- | --- | --- | --- |
| **E02** | *"Em đọc hết câu trả lời, tìm ra vài keyword mình chưa hài lòng hoặc chưa hiểu rõ để đào sâu vào đó."* | Hành vi tự thuật | Learner **tự biết** chỗ mình chưa hiểu và sẵn sàng đánh dấu nó → cơ chế "Chưa hiểu" của directive có gốc hành vi thật |
| **E03** | *"Anh sẽ tạo ảnh Infographic đúc kết lại rồi cất vào thư mục hoặc đăng lên Facebook."* | Mô tả cách làm | Đây là **workaround** cho việc giữ kiến thức. ⚠️ Cũng có thể là sở thích/cách học/chia sẻ — Tài **chưa nói** đây là việc khó hay tốn công |
| **E04** | *"Đăng lên Facebook là dễ tìm nhất và không bị trôi mất kiến thức."* | Lý do / đánh giá tự thuật | "Dễ tìm" + "không trôi" là **tiêu chí thành công theo lời user**. ⚠️ Câu này cũng có thể nghĩa là retrieval **đã được giải quyết rồi** |

---

## 1.2 Bốn câu thảo luận

### ① Có situation, behavior hoặc workaround nào xuất hiện nhiều hơn một lần?

**Không xác lập được.** Với **1 nguồn**, nhóm không có cơ sở nói điều gì "lặp lại" giữa nhiều người.

Trong nội bộ P01, hành vi **chọn điểm chưa hiểu rồi đào sâu** xuất hiện ở cả E01 và E02 — nhưng đó là hai câu mô tả **cùng một workflow trong cùng một cuộc trò chuyện**, không phải hai lần quan sát độc lập.

Cách diễn đạt thói quen của Tài ("thường thì…", "anh sẽ…") gợi ý hành vi lặp, nhưng Day 17 §6.3 đã ghi rõ: **chưa đo được frequency**, và phải tách ba loại tần suất khác nhau — tần suất *lưu*, tần suất *cần tìm lại*, tần suất *gặp vướng*.

### ② Evidence nào mâu thuẫn hoặc làm nhóm bất ngờ?

| Evidence | Vì sao bất ngờ / mâu thuẫn |
| --- | --- |
| **E04** — *"Đăng lên Facebook là dễ tìm nhất và không bị trôi mất kiến thức."* | ⚠️ **Mâu thuẫn trực tiếp với `H_B`.** Nhóm giả định retrieval là barrier, nhưng user tự mô tả cách lưu hiện tại là **đã ổn**. Đây là evidence ủng hộ `H_C` (workflow hiện tại đáp ứng tốt). |
| **E05** — *"Thường nó là một thắc mắc tự nhiên em nghĩ ra hoặc nghĩ rất lâu rồi mà chưa có đáp án."* | **Trigger thật khác trigger của directive.** Directive giả định trigger là *"học viên hoàn thành bài học"*; Tài nói trigger là **một thắc mắc tự phát**. Nếu thiết kế theo directive, prototype có thể bắt sai thời điểm. |
| **E03** — tạo infographic | Nhóm từng đọc đây là "workaround tốn công". Nhưng Tài **không hề nói nó tốn công** — anh mô tả nó như việc mình chọn làm. Có thể là **giá trị tự thân**, không phải pain. |
| **E09** — Tài hỏi ngược: *"Anh Hùng có bị thiên kiến là em sẽ trả lời theo kịch bản không?"* | Người được phỏng vấn **tự nhận ra** interviewer đang dẫn dắt. Cảnh báo cho Chặng 6: không lặp lại lỗi này khi facilitate. |

### ③ Điều gì vẫn chỉ là suy đoán của nhóm?

| Suy đoán | Tại sao chưa phải evidence |
| --- | --- |
| **Barrier** — "cách lưu hiện tại không khớp với cách họ tìm" | Chưa có **failure event** nào. Tài chưa kể lần nào tìm không ra. |
| **Consequence** — "phải khôi phục / research lại → chậm việc" | Day 17 §6.1 ghi rõ: E06 (research ảnh/video bị muộn) thuộc **job khác**, không gán được cho việc lưu/tìm note. |
| **Tự tổng hợp là pain** | ❗ Chính là **scary question**. Evidence hiện có nghiêng về hướng ngược lại (E01–E03 cho thấy Tài **chủ động** làm việc này). |
| **Thông tin bị phân mảnh gây khó** (`H_A`) | Workflow nhiều nhánh ≠ phân mảnh gây khó. Tài chưa nói khó ghép ý. |
| **Hành vi này xuất hiện trong bài học có cấu trúc (VLearn)** | Tài kể về **research tự do với AI**, không phải học bài có giáo trình. Day 17 §2.4 đã đánh dấu đây là **giới hạn chuyển bối cảnh**. |
| **P01 đại diện cho learner VLearn** | n = 1, và **chưa xác nhận** P01 đạt tiêu chí tuyển (hành vi ghi/lưu trong 7 ngày). |

### ④ Hypothesis Problem nào đủ cụ thể để làm điểm xuất phát hôm nay?

**`H_B` — hướng giữ / tìm lại.**

| Ứng viên | Chọn? | Lý do |
| --- | --- | --- |
| `H_A` — barrier ở **tổng hợp** thông tin nhiều nhánh | ❌ | Chỉ dựa trên diễn giải từ workflow. Tài chưa nói việc ghép ý là khó. |
| `H_B` — barrier ở **giữ / tìm lại** | ✅ | Là hướng duy nhất Tài **tự nhắc tới** bằng lời của chính mình (E04: "dễ tìm", "không bị trôi"). Đủ cụ thể để dựng được một critical interaction. |
| `H_C` — workflow hiện tại **đã ổn**, tổng hợp có giá trị tự thân | 🔁 | Không bỏ. Giữ làm **giả thuyết đối chứng** — Option A được thiết kế để `H_C` có cơ hội thắng. |

> Chọn `H_B` là **ưu tiên điều tra**, không phải kết luận `H_B` đúng.

---

## 1.3 Chốt Hypothesis Problem

### Phát biểu chính thức

> **Khi** vừa học hoặc research một chủ đề và muốn giữ lại một phần kiến thức để dùng sau, **learner** gặp khó khăn trong việc **tìm lại nội dung đó cùng ngữ cảnh khi thực sự cần dùng**, vì **cách lưu hiện tại không khớp với cách họ tìm**, dẫn đến **phải dò lại, khôi phục hoặc research lại, làm chậm việc đang cần hoàn thành**.

### Tách 5 thành phần (GATE 1)

| Thành phần | Nội dung | Evidence | Mức |
| --- | --- | --- | --- |
| **Situation** | Vừa học/research xong, có nội dung muốn giữ để dùng sau | E01, E02, E03 | 🟡 Medium — tự thuật, chưa neo vào một lần cụ thể |
| **User** | Learner tự học (Day 17 §2.4 đã chốt actor điều tra trước) | E01–E05 | 🟡 Medium |
| **Job** | Tìm lại được phần kiến thức cần dùng, **cùng ngữ cảnh** | E03, E04 | 🟡 Medium |
| **Barrier** | Cách lưu hiện tại không khớp với cách họ tìm | — | 🔴 **Giả thuyết** — không có evidence |
| **Consequence** | Dò lại / khôi phục / research lại → chậm việc đang làm | — | 🔴 **Giả thuyết** — không có evidence |

### Giả định phạm vi cho prototype — khai báo rõ

Prototype Day 18 đặt trong **một bài học có cấu trúc trên VLearn**, trong khi evidence P01 đến từ **research tự do với AI**.

| | Evidence thật (P01) | Bối cảnh prototype |
| --- | --- | --- |
| Nguồn nội dung | Hội thoại với AI, nhiều nhánh | Bài học VLearn có nội dung cố định |
| Trigger | Thắc mắc tự phát (E05) | Kết thúc bài học |
| Nơi lưu | Thư mục / Facebook (E03) | Trong sản phẩm |

👉 Đây là **giả định chuyển bối cảnh, chưa được kiểm chứng**. Lý do chấp nhận: Case B bắt buộc bối cảnh VLearn. Hệ quả: nếu tester ở Chặng 6 không nhận ra thời điểm "kết thúc bài học" là lúc cần ghi chú, **giả định này sai** — và đó là một learning hợp lệ cần ghi vào Still Unproven.

---

## 1.4 Evidence Snapshot — đầu ra Chặng 1

### Evidence ban đầu hỗ trợ giả thuyết

| ID | Nguyên văn | Hỗ trợ phần nào của `H_B` | Mức |
| --- | --- | --- | --- |
| **E04** | *"Đăng lên Facebook là dễ tìm nhất và không bị trôi mất kiến thức."* | **Job** — "dễ tìm" và "không trôi" là tiêu chí user tự nêu | 🟡 Medium |
| **E03** | *"Anh sẽ tạo ảnh Infographic đúc kết lại rồi cất vào thư mục hoặc đăng lên Facebook."* | **Situation + workaround** — có hành vi giữ kiến thức | 🟡 Medium |
| **E02** | *"Em đọc hết câu trả lời, tìm ra vài keyword mình chưa hài lòng hoặc chưa hiểu rõ để đào sâu vào đó."* | **Situation** — learner tự xác định điểm chưa hiểu | 🟡 Medium |
| **E01** | *"…bắt đầu bằng một câu hỏi… phản biện lại từng ý nhỏ… vẽ được một bức tranh sơ đồ tổng thể."* | **Situation** — học theo nhánh, nội dung rải ra | 🟡 Medium |

**Không có evidence mức Strong.** Không có evidence trực tiếp cho **Barrier** và **Consequence**.

### Evidence chống lại giả thuyết — giữ lại, không loại bỏ

| ID | Nguyên văn | Đe doạ phần nào |
| --- | --- | --- |
| **E04** | *"Đăng lên Facebook là dễ tìm nhất và không bị trôi mất kiến thức."* | **Barrier** — có thể retrieval đã ổn → `H_C` |
| **E05** | *"Thường nó là một thắc mắc tự nhiên em nghĩ ra…"* | **Situation/trigger** — trigger thật ≠ "kết thúc bài học" |
| **E01–E03** | Tài **chủ động** phản biện, đào sâu, tự tạo infographic | **Hướng solution** — nếu tự tổng hợp có giá trị, không nên tự động hoá nó |

> E04 vừa hỗ trợ **Job** vừa đe doạ **Barrier**. Giữ nguyên mâu thuẫn này, không chọn một nửa.

### Điều vẫn chưa được chứng minh

1. **Có failure event không?** Chưa ai kể một lần tìm không ra nội dung đã lưu.
2. **Có consequence không?** Chưa có việc gì bị chậm vì không tìm lại được.
3. **Tự tổng hợp là pain hay là giá trị?** ← scary question, chưa trả lời.
4. **Có lặp không?** Chưa đo được frequency của hành vi lưu, của nhu cầu tìm lại, hay của lần gặp vướng.
5. **Có đúng trong bài học có cấu trúc không?** Evidence đến từ research tự do.
6. **P01 có đạt tiêu chí tuyển không?** Chưa xác nhận hành vi ghi/đánh dấu/lưu trong 7 ngày.
7. **Infographic được tạo thế nào?** Thủ công hay có AI — chưa biết, nên chưa biết công sức thật.

### Điều Chặng 2–6 sẽ tìm cách trả lời

| Câu hỏi | Trả lời bằng cách nào ở Day 18 |
| --- | --- |
| Tự tổng hợp là pain hay giá trị? | Đặt **Option B (co-creation, learner chọn phạm vi)** đối đầu **Option C (AI dựng nháp, learner duyệt)** → xem tester chọn gì và đánh đổi gì |
| Learner có đọc evidence AI đưa ra không? | Observation focus "evidence read/ignored" ở Chặng 5 |
| Khi AI sai, learner có lấy lại được control không? | Thiết kế ở Chặng 3, quan sát ở Chặng 6 |

❗ Day 18 **không** trả lời được câu 1, 2, 4, 5, 6 — những câu đó cần fieldwork, không phải prototype test.

---

## 1.5 GATE 1 — tự kiểm

| Tiêu chí | Đạt? | Bằng chứng trong tài liệu này |
| --- | --- | --- |
| Hypothesis Problem có **user** | ✅ | Learner tự học — §1.3 |
| … có **situation** | ✅ | Vừa học/research xong, muốn giữ nội dung |
| … có **job** | ✅ | Tìm lại nội dung cùng ngữ cảnh |
| … có **barrier** | ✅ | Cách lưu không khớp cách tìm *(đánh dấu rõ là giả thuyết)* |
| … có **consequence** | ✅ | Dò lại / research lại → chậm việc *(đánh dấu rõ là giả thuyết)* |
| Chỉ ra **≥1 observation Day 17** | ✅ | E01–E05, có quote nguyên văn và vị trí nguồn — §1.4 |
| Chỉ ra **≥1 điều chưa biết** | ✅ | 7 mục — §1.4 |
| Không coi Practice Notes là validation | ✅ | Mọi dòng evidence gắn mức Medium/Weak; ghi rõ "không có evidence Strong" |
| Không kể lại ý tưởng thay cho evidence | ✅ | Evidence tách khỏi interpretation ở mọi bảng |

**→ GATE 1 đạt.** Điểm yếu đã khai báo, không che giấu: nền evidence là **1 nguồn, mức Medium**, barrier và consequence **chưa được chứng minh**.

---
---

# Chặng 2 — Chọn hai Solution Options · 20 phút

> **Nguồn:** `two-option-design-sheet_v2.md` của Gia Huy. Phần này **theo bản của Gia Huy**; chỗ nào nhóm cần chốt thêm được đánh dấu 🔸.

## 2.0 Phạm vi và nguyên tắc

Hai option **B** và **C** cùng giải một task: sau một lượt học/research, learner tạo và lưu một learning note đủ ngữ cảnh để dùng lại.

Đây là hai **solution hypotheses**, **không phải hai phiên bản giao diện**, và **chưa được tester xác nhận**.

### Mapping về Solution Parking Lot (Day 17 §2.12)

| Hướng | Dùng vào đâu |
| --- | --- |
| 5 — AI gom ý, đề xuất cấu trúc, learner viết phần đúc kết | → **Option B** (cốt lõi) |
| 3 — Inbox gom nguồn và dấu vết, learner tự tổ chức | → **Option B** (bước chọn phạm vi) |
| 7 — Tìm nội dung liên quan kèm đoạn nguồn và ngữ cảnh | → **Option C** (trích dẫn nguồn cho từng đoạn) |
| 4 — Tìm kiếm theo từ khoá, nhãn, liên kết trở lại nguồn | → đường về nguồn, dùng chung |
| 1 — Template tự viết | ⏸️ Không build thành option riêng — còn lại như lối thoát "chuyển sang tự viết" trong recovery của B |
| 2 — Quy ước thư mục / tên file | ❌ Không tạo được critical interaction |
| 6 — Nhắc xem lại theo lịch | ❌ Nằm ngoài 2–3 màn hình |

---

## 2.1 Common Context / Comparison Contract

Những thứ **phải giữ nguyên** giữa B và C:

| Thành phần | Dùng chung cho hai option |
| --- | --- |
| **Target user** | Learner vừa hoàn thành một lượt học/research và có các dấu vết muốn giữ lại. |
| **Situation** | Cuối lượt học/research, **trước khi learner rời nội dung**. |
| **Task** | Tạo và lưu một learning note **đủ ngữ cảnh** để có thể tìm và sử dụng về sau. |
| **Desired outcome** | Lưu **đúng phần learner cho là quan trọng**, **có đường về nguồn**, và **learner quyết định nội dung cuối**. |
| **Data fixture** | Một bài học mẫu; cùng highlights, điểm *"Chưa hiểu"*, câu hỏi, ghi chú ngắn, đoạn nguồn, chủ đề và ngày học. |

### 🔸 Cần nhóm chốt — fixture cụ thể

Bản của Gia Huy nói *"một bài học mẫu"* nhưng chưa chốt nội dung. Chặng 4 cần một fixture cụ thể để build.

**Đề xuất:** bài **"Prompt Engineering — 4 thành phần của một prompt hiệu quả"**, 4 mục:

| Mục | Nội dung | Độ khó |
| --- | --- | --- |
| 1 | **Vai trò (Role)** | Dễ |
| 2 | **Ngữ cảnh (Context)** | Dễ |
| 3 | **Ví dụ mẫu (Few-shot)** — zero-shot / one-shot / few-shot, **và khi nào thêm ví dụ lại phản tác dụng** | 🔴 Khó — cố ý |
| 4 | **Ràng buộc đầu ra** — định dạng, độ dài, *delimiter* | Trung bình |

Mục 3 cố ý chứa một mệnh đề đánh đổi dễ bị làm mờ khi tóm tắt. Đây là chỗ để quan sát xem learner **có giữ được ngữ cảnh** hay không — đúng với desired outcome *"đủ ngữ cảnh"*.

**Bộ dấu vết dùng chung** (giống hệt nhau cho B và C): 3 highlight · 2 điểm *"Chưa hiểu"* (một trong đó nằm ở mục 3) · 1 câu hỏi tự viết · 1 ghi chú ngắn.

### Cấu trúc màn hình

```
MÀN 1 — COMMON CONTEXT            (giống hệt nhau)
  Cuối bài học, dấu vết đã có sẵn trên nội dung
                 ↓
MÀN 2 — CRITICAL INTERACTION      ★ CHỖ DUY NHẤT B VÀ C KHÁC NHAU
                 ↓
MÀN 3 — RESULT / USER DECISION    (giống hệt nhau)
  Bản note trước khi lưu · learner xác nhận lưu hoặc hủy
```

---

## 2.2 Option B — Cùng tổ chức

> **Phụ trách:** Trần Vũ Gia Huy · *Guided Co-creation*

**Solution hypothesis:** Nếu learner **chủ động chọn phạm vi** rồi AI đề xuất cách nhóm và cấu trúc, learner có thể **giảm công tổ chức mà không mất vai trò chọn và diễn đạt** điều quan trọng.

| | Nội dung |
| --- | --- |
| **Mechanism** | Learner chọn các dấu vết; AI gom nhóm, đề xuất heading và **hỏi làm rõ** ở phần thiếu ngữ cảnh. |
| **User làm gì** | Chọn phạm vi · trả lời hoặc bỏ qua câu hỏi làm rõ · sửa, di chuyển hoặc xoá đề xuất · xác nhận. |
| **AI làm gì** | **Chỉ xử lý phần đã chọn** · đề xuất cấu trúc · hiển thị nguồn của từng nhóm. |
| **Trigger** | Learner chọn **"Cùng AI tổ chức"**. |
| **Quyền quyết định** | Learner phê duyệt **từng nhóm** và bản cuối. |
| **Trade-off** | ✅ Cân bằng giữa công sức và agency.<br>❌ Đổi lại có **thêm lượt tương tác**. |

---

## 2.3 Option C — Nháp sẵn

> **Phụ trách:** Lưu Mạnh Hùng · *AI Draft, Human Review*

**Solution hypothesis:** Nếu AI **tạo bản nháp ngay khi hoàn thành bài học** và cho phép kiểm tra nguồn, learner có thể **lưu note nhanh hơn mà vẫn chặn được sai sót** trước khi lưu.

| | Nội dung |
| --- | --- |
| **Mechanism** | AI tạo bản note nháp từ nội dung bài và **toàn bộ** dấu vết học tập, kèm trích dẫn nguồn và **cảnh báo phần không chắc**. |
| **User làm gì** | Review · mở nguồn đối chiếu · sửa hoặc xoá phần sai · xác nhận lưu hoặc huỷ. |
| **AI làm gì** | Chọn lọc, nhóm và soạn bản nháp ban đầu. **Không tự lưu khi chưa được xác nhận.** |
| **Trigger** | Hoàn thành bài học; hệ thống **đề nghị** tạo nháp và **cho phép bỏ qua**. |
| **Quyền quyết định** | AI đề xuất, learner giữ **quyết định lưu cuối cùng**. |
| **Trade-off** | ✅ Nhanh và ít thao tác.<br>❌ Nguy cơ learner **duyệt qua loa**, hoặc AI **làm mất sắc thái**. |

---

## 2.4 Bảng so sánh cơ chế

| Thành phần | **Option B — Cùng tổ chức** | **Option C — Nháp sẵn** |
| --- | --- | --- |
| **Solution mechanism** | AI đề xuất cấu trúc **từ phần learner chọn** | AI **tự tạo bản nháp** để learner duyệt |
| **User làm gì?** | Chọn phạm vi, cộng tác, chỉnh và xác nhận | Review, đối chiếu, sửa và xác nhận / huỷ |
| **AI làm gì?** | Nhóm, đề xuất và **hỏi làm rõ** | Chọn lọc, nhóm và **soạn nháp** |
| **Trigger** | **User chủ động** gửi phạm vi | **Hoàn thành bài học**; user có thể bỏ qua |
| **Phạm vi dữ liệu AI đụng tới** | Chỉ phần learner đã chọn | Toàn bộ dấu vết của bài hiện tại |
| **Trade-off** | Cân bằng / nhiều lượt tương tác | Tốc độ cao / rủi ro automation cao |
| **Vị trí trên spectrum** | `USER + AI CO-CREATE` | `AI CREATES, USER REVIEWS` |

### Mỗi option đang đặt cược vào giả thuyết nào?

| | Giả thuyết nền | Nếu option này thắng, nhóm học được gì |
| --- | --- | --- |
| **B** | Việc learner muốn giữ là **chọn và diễn đạt**; việc muốn bỏ là **tổ chức, sắp xếp**. Tách được hai phần này. | Hỗ trợ đúng chỗ: AI lo cấu trúc, learner giữ nội dung. Scary question được trả lời theo hướng *"tổng hợp có giá trị, nhưng không phải mọi phần của nó"*. |
| **C** | Directive Case B — learner muốn **có sẵn bản nháp** và chỉ kiểm tra. | Directive đi đúng hướng. Trọng tâm chuyển sang làm sao để learner **thật sự** kiểm tra chứ không duyệt lấy lệ. |

---

## 2.5 Distance Check

> Viết không nhắc tới màu, layout hay wording.

**B khác C vì:** **B là co-creation có phạm vi do learner khởi tạo**; **C là bản nháp do AI chủ động tạo từ toàn bộ dấu vết** sau khi bài học kết thúc.

Ba khác biệt cơ chế đi kèm:

| | Option B | Option C |
| --- | --- | --- |
| **Ai khởi phát** | Learner gửi phạm vi thì AI mới chạy | Hệ thống đề nghị ngay khi hết bài |
| **AI được đụng vào bao nhiêu** | Chỉ phần learner chọn | Toàn bộ dấu vết |
| **Khi thiếu ngữ cảnh, AI làm gì** | **Hỏi** learner làm rõ | **Tự suy luận**, rồi gắn nhãn cảnh báo |

**Không phải điểm khác biệt** *(phải giống nhau)*: bài học, bộ dấu vết, màn hình bối cảnh, màn hình kết quả, bộ component, cách trình bày, cách đặt chữ.

---

## 2.6 Tự soát — không cố tình làm một option tệ

| Nguy cơ thiên vị | Cách xử lý |
| --- | --- |
| B bị làm cho lằng nhằng (hỏi quá nhiều câu làm rõ) | Giới hạn **tối đa 2 câu hỏi làm rõ**, và learner được phép **bỏ qua** cả hai mà vẫn ra được note. |
| C bị làm cho ngớ ngẩn (AI tóm sai lè) | C tóm **đúng và đủ** 3/4 mục. Chỗ yếu duy nhất là mục 3 — bản nháp giữ định nghĩa nhưng **làm mờ mệnh đề đánh đổi**, và chỗ đó **có gắn nhãn cảnh báo** đúng như thiết kế. Đây là lỗi thật của tóm tắt tự động, không phải lỗi dựng lên để C thua. |
| C được ưu ái vì nhanh hơn | Desired outcome đo **"đủ ngữ cảnh + đúng phần learner cho là quan trọng"**, không đo số thao tác. |
| B được ưu ái vì "learner tự chọn thì chắc đúng hơn" | Nếu learner chọn phạm vi quá hẹp và bỏ mất mục 3, note của B cũng thiếu — không can thiệp, không nhắc. |
| Người build thiên vị option của mình | Chặng 4 phút 65–75: mỗi người **test option của người kia** trước khi chuẩn hoá. |

---

## 2.7 🔸 Rủi ro GATE 2 — cần nhóm biết trước

`docs/4.md` liệt kê một trong các dấu hiệu phải bổ sung hướng mới là: *"không có hướng **user-led / no-inference**"*.

Với cặp B/C hiện tại:

| | B | C |
| --- | --- | --- |
| AI có sinh nội dung không? | ✅ Có (đề xuất heading, nhóm ý) | ✅ Có (soạn cả bản nháp) |
| Có hướng nào AI **không suy luận** không? | ❌ Không | ❌ Không |

**Hệ quả:** cả hai option đều nằm ở nửa "có AI tham gia tạo nội dung". Nhóm **không có đối chứng** cho giả thuyết `H_C` của Chặng 1 — *tự tổng hợp là giá trị, cách làm hiện tại đã ổn*.

**Quyết định:** chấp nhận rủi ro này, vì:

1. Distance giữa B và C **vẫn là mechanism thật** (ai khởi phát · phạm vi dữ liệu · hỏi vs tự suy luận), không phải khác giao diện → GATE 2 vẫn đạt.
2. Nhóm chỉ có 2 người; thêm option thứ ba là vượt năng lực thực tế.
3. Bù lại bằng **quan sát**: ở Chặng 6, nếu tester nói muốn tự viết hoặc bỏ qua cả hai, phải ghi vào *Still Unproven* — **không** diễn giải thành "tester thích B hơn C".

> Phải khai báo giới hạn này trong README. Không để người chấm hiểu nhầm là nhóm chưa cân nhắc.

---

## 2.8 GATE 2 — tự kiểm

| Tiêu chí | Đạt? | Bằng chứng |
| --- | --- | --- |
| Cùng **target user** | ✅ | §2.1 |
| Cùng **situation** | ✅ | §2.1 — cuối lượt học, trước khi rời nội dung |
| Cùng **task** | ✅ | §2.1 — tạo và lưu một learning note đủ ngữ cảnh |
| Cùng **desired outcome** | ✅ | §2.1 — đúng phần quan trọng · có đường về nguồn · learner quyết định cuối |
| Cùng **data fixture** | ✅ | §2.1 — cùng bài học, cùng bộ dấu vết |
| Khác nhau ở **mechanism** | ✅ | §2.5 — phạm vi do learner chọn vs toàn bộ dấu vết; hỏi làm rõ vs tự suy luận |
| Khác nhau ở **cách chia quyền quyết định** | ✅ | §2.4 — phê duyệt từng nhóm (B) vs phê duyệt bản cuối (C) |
| **Không** chỉ khác layout / màu / wording | ✅ | §2.5 — distance check không dùng một từ nào về hình thức |
| Không option nào bị cố tình làm tệ | ✅ | §2.6 — 5 nguy cơ đã xử lý |
| ⚠️ Có hướng user-led / no-inference | ❌ | §2.7 — **đã khai báo**, chấp nhận có chủ đích |

**→ GATE 2 đạt**, kèm một giới hạn đã khai báo ở §2.7.

---
---

# Chặng 3 — Human–AI Design pass · 30 phút

> **Nguồn:** `two-option-design-sheet_v2.md` của Gia Huy — phần này Gia Huy đã làm sẵn, tài liệu này giữ nguyên nội dung và sắp lại theo khung `docs/5.md`.

Chỉ review **critical interaction** cần test. Không thiết kế toàn bộ product.

## 3.1 Bốn quyết định thiết kế

### ① Expectation — trước khi AI chạy, user hiểu gì?

- Cả hai option đều nói rõ AI tạo **đề xuất / bản nháp**, **không phải nội dung đúng tuyệt đối**.
- **Option B** chỉ dùng phần user đã chọn; **Option C** dùng toàn bộ dấu vết của bài học hiện tại.
- Hệ thống nói rõ AI có thể **nhóm sai, bỏ sót hoặc suy diễn ngoài ý learner**.

### ② Role and Agency — ai làm gì, ai quyết?

- **B:** learner **khởi tạo và đặt phạm vi**; AI hỗ trợ tổ chức; learner quyết định từng nhóm và bản cuối.
- **C:** AI chủ động tạo nháp sau trigger; learner giữ quyền **bỏ qua, sửa, huỷ và xác nhận lưu**.
- **Không option nào tự thay đổi hoặc xoá dấu vết gốc.**

**Hậu quả khi AI sai, và agency có tương xứng không:**

| | Nếu AI sai thì mất gì | Có dễ phát hiện không | Agency có tương xứng |
| --- | --- | --- | --- |
| **B** | Một nhóm bị gom sai hoặc một heading lệch ý | ✅ Dễ — learner đang duyệt từng nhóm | ✅ Ask → Act là mức đúng |
| **C** | Một mệnh đề bị làm mờ hoặc mất sắc thái, trôi vào bản lưu | ⚠️ Khó — chỉ lộ ra lúc dùng lại | ✅ Act nhưng **bắt buộc xác nhận trước khi lưu** là mức đúng |

### ③ Evidence and Uncertainty — AI dựa vào gì, không chắc thì sao?

- Nội dung do AI tạo **luôn có đường về** highlight, câu hỏi, ghi chú hoặc đoạn bài học gốc.
- Phần **không đủ nguồn** hoặc **cần suy luận** được **đánh dấu**, thay vì trình bày như fact.
- Khi các nguồn **mâu thuẫn**, AI **không tự chọn một ý duy nhất** mà yêu cầu learner kiểm tra.

### ④ Control and Recovery — user dừng và quay lại thế nào?

- Có **preview trước khi lưu** và **không autosave** bản AI.
- User có thể **sửa, xoá, undo, huỷ toàn bộ hoặc quay lại dữ liệu gốc**.
- Nếu AI tạo sai, user vẫn tiếp tục task bằng cách **thu hẹp phạm vi** hoặc **chuyển sang chỉnh thủ công**.

---

## 3.2 Human–AI Decision Table

| Human–AI decision | **Option B — Cùng tổ chức** | **Option C — Nháp sẵn** |
| --- | --- | --- |
| **User làm gì? AI làm gì?** | User chọn dấu vết; AI nhóm và hỏi làm rõ; user chỉnh và xác nhận. | AI tạo bản nháp; user đối chiếu, sửa và quyết định lưu / huỷ. |
| **AI Act / Ask / Don't Act? Vì sao?** | **Ask → Act.** Chỉ xử lý phạm vi user chọn; **hỏi thay vì tự điền** khi thiếu ngữ cảnh. | **Act → Ask for confirmation.** Được tạo bản nháp **có thể đảo ngược**; **không được tự lưu**. |
| **User hiểu capability/limit bằng gì?** | Thông báo trước khi chạy: AI **chỉ tổ chức phần được chọn** và **có thể nhóm sai / bỏ sót ngữ cảnh**. Kết quả được gọi là **"đề xuất"**. | Thông báo trước khi tạo: AI dùng nội dung bài và dấu vết để tạo **"bản nháp cần kiểm tra"**. |
| **Evidence/uncertainty được thể hiện thế nào?** | Mỗi nhóm có **link về dấu vết nguồn**; chỗ thiếu có nhãn **"Cần bạn làm rõ"**. | Mỗi đoạn có **link nguồn**; phần **suy luận** hoặc **nguồn xung đột** được gắn **nhãn cảnh báo**. |
| **User kiểm soát và recovery thế nào?** | Bỏ chọn nguồn · sửa heading · kéo thả · xoá · undo · **chuyển sang tự viết** · giữ nguyên dữ liệu gốc. | Preview · sửa / xoá từng đoạn · **huỷ toàn bộ** · **tạo lại với phạm vi hẹp hơn** · quay về dấu vết gốc. |

---

## 3.3 Feedback and data check

| Câu hỏi | **Option B** | **Option C** |
| --- | --- | --- |
| **Feedback ảnh hưởng phiên này / lần sau / không ghi nhớ?** | Chỉnh sửa **chỉ áp dụng cho note hiện tại**, **không mặc định dùng để huấn luyện**. | Feedback tạo lại **chỉ áp dụng cho phiên hiện tại**; user có thể **huỷ và xoá bản nháp**. |
| **Dữ liệu nào được dùng?** | Chỉ các dấu vết learner đã chọn. | Nội dung bài + toàn bộ dấu vết của bài hiện tại. |
| **User rút quyền bằng cách nào?** | Bỏ chọn dấu vết trước khi gửi phạm vi. | Bỏ qua lời đề nghị tạo nháp, hoặc huỷ và xoá bản nháp. |

---

## 3.4 Giả định cần kiểm tra ở các chặng sau

Bốn điều này đi thẳng vào **Observation Focus** của Chặng 5:

| # | Giả định | Quan sát gì ở Chặng 6 |
| --- | --- | --- |
| 1 | Câu hỏi làm rõ và đề xuất nhóm của **B** có **hỗ trợ** hay **làm ngắt mạch** tổng hợp | Tester dừng lại, bỏ qua hay trả lời câu hỏi làm rõ? Có tỏ ra mất mạch không? |
| 2 | Người dùng **C** có **thật sự kiểm tra nguồn** và chỉnh lỗi, hay **chỉ xác nhận** bản nháp | Có bấm mở link nguồn không? Có chạm vào chỗ gắn nhãn cảnh báo không? Bao lâu thì bấm lưu? |
| 3 | Cả hai cách có **giữ đủ ngữ cảnh** để dùng lại về sau hay không | Mục 3 (mệnh đề đánh đổi) còn nằm trong note cuối không? |
| 4 | Việc **tự tổng hợp** là phần learner **muốn giảm** hay là **hoạt động học cần được bảo toàn** | Tester nói gì khi so sánh? Có ai đòi tự viết không? ← nối thẳng về scary question Day 17 |

---

## 3.5 GATE 3 — tự kiểm

| Tiêu chí | Đạt? | Bằng chứng |
| --- | --- | --- |
| Mỗi option nói rõ **user làm gì, AI làm gì** | ✅ | §3.2 dòng 1 |
| **Agency phù hợp với hậu quả khi sai** | ✅ | §3.1② — B hậu quả nhỏ và dễ thấy → Ask→Act; C hậu quả khó thấy → Act nhưng **chặn autosave**, bắt buộc xác nhận |
| User **hiểu capability/limit** trước khi AI chạy | ✅ | §3.1① và §3.2 dòng 3 — cả hai gọi kết quả là "đề xuất" / "bản nháp cần kiểm tra" |
| **Evidence/uncertainty** được thể hiện | ✅ | §3.1③ — link về nguồn cho mọi nội dung AI tạo; nhãn "Cần bạn làm rõ" (B) và nhãn cảnh báo (C); nguồn mâu thuẫn thì **không tự chọn** |
| Mỗi option có **một đường kiểm soát hoặc phục hồi** | ✅ | §3.2 dòng 5 — B: chuyển sang tự viết · C: huỷ toàn bộ và tạo lại hẹp hơn |
| Có **preview trước khi lưu**, **không autosave** | ✅ | §3.1④ |
| Dấu vết gốc **không bị AI sửa hoặc xoá** | ✅ | §3.1② |
| Feedback / data check | ✅ | §3.3 — chỉnh sửa không dùng để huấn luyện; user rút quyền được |

**→ GATE 3 đạt.**

---
---

# Chặng 4 — Build hai micro-prototype · 80 phút

> **Spec đầy đủ:** `prototype-build-spec.md` — mọi thứ còn để trống trong bản của Gia Huy đã được chốt ở đó.
> Công cụ: **HTML/CSS/JS trong repo**.

## 4.1 Mười lăm điểm trống đã chốt

Audit bản `two-option-design-sheet_v2.md` đối chiếu `docs/6.md` tìm ra **15** điểm chưa đủ để build. Tất cả đã chốt:

| Nhóm | Điểm trống | Chốt là gì |
| --- | --- | --- |
| **Fixture** | Bài học mẫu là gì | *"Bốn thành phần của một prompt hiệu quả"* — 4 mục, mục 3 chứa mệnh đề đánh đổi *"độ phủ quan trọng hơn số lượng"* |
| | Dấu vết: bao nhiêu, ở đâu | **7 dấu vết**: 3 highlight · 2 *"Chưa hiểu"* · 1 câu hỏi · 1 ghi chú ngắn |
| | Tester tự tạo hay có sẵn | **Có sẵn, read-only** — giữ đúng *"cùng highlights…"* của Comparison Contract |
| **Option B** | Mấy nhóm, heading gì | **3 nhóm**; nhóm 1 cố ý gom rộng để learner có cái thật để sửa; `CH2` không vào nhóm nào → nhãn *"Cần bạn làm rõ"* |
| | Nội dung 2 câu hỏi làm rõ | Hỏi về `CH2` (delimiter) và `N1` (ghi chú không neo mục nào) — hai chỗ AI **thật sự không biết**. Bỏ qua được cả hai. |
| | *"Chuyển sang tự viết"* ra sao | Thay đề xuất bằng ô soạn thảo trống, **giữ danh sách dấu vết nguồn bên cạnh** |
| **Option C** | Nội dung bản nháp | 4 khối A–D. Đúng 3/4 dòng. **Dòng 3 làm mờ** mệnh đề đánh đổi → hàm ý *"càng nhiều ví dụ càng tốt"*, ngược với bài |
| | Chỗ nào gắn nhãn cảnh báo | Khối B, C, D. Khối C làm **đúng** (không bịa đáp án cho `Q1`). Khối D **nhân đôi lỗi** dòng 3 nhưng có nhãn ⚠ |
| | *"Tạo lại phạm vi hẹp hơn"* ra gì | Bản nháp rút gọn: khối A còn 2 dòng + B + C, **bỏ khối D** |
| | Bấm *"Bỏ qua"* đi đâu | Ô soạn thảo trống + 7 dấu vết + nút *"Đổi ý, tạo bản nháp"*. Bỏ qua **không** kết thúc task |
| **Chung** | Màn 3 hiển thị gì | Note đã lưu + nguồn + một dòng trung tính *"Đã lưu."* — không chấm điểm, không khen |
| | **Đường reset** | Nút *"Bắt đầu lại từ đầu"* ở Màn 3 **và** góc mọi màn — **GATE 4 bắt buộc**, bản Gia Huy thiếu |
| | Thứ tự test | **Đảo**: Tester 1 chạy B→C, Tester 2 chạy C→B — giảm order effect |
| | Component dùng chung | `shared.css` + `fixture.js` + `shared.js`; chỉ `<main>` của Màn 2 khác nhau |
| | Prototype annotation | Đã viết đủ cho cả B và C — `prototype-build-spec.md` §8 |

## 4.2 Build order

| Phút | Việc | Ai |
| --- | --- | --- |
| **0–10** | `index.html` + `shared.css` + `fixture.js` — Màn 1 và 7 dấu vết | Cùng làm |
| **10–55** | `option-b.html` | Gia Huy |
| | `option-c.html` | Hùng |
| **55–65** | Thêm control/recovery và nhãn evidence/uncertainty | Mỗi người |
| **65–75** | **Đổi chéo** — Hùng test C, Gia Huy test B | Cả hai |
| **75–80** | Chuẩn hoá, kiểm link nguồn và đường reset | Cùng làm |

## 4.3 GATE 4 — kiểm sau khi build

| Tiêu chí | Cách kiểm |
| --- | --- |
| Người ngoài tự mở và thao tác được cả B/C | Nhờ một người chưa thấy prototype mở thử, không nói gì |
| Cùng context và task | Cả hai bắt đầu từ `index.html` |
| Không cần narrate | Đứng im, không giải thích, xem họ có đi hết được không |
| Nội dung đủ thật | Họ có đọc bài học không, hay bỏ qua ngay |
| Có điểm lấy lại control | Thử bấm *"Tự viết"* (B) và *"Huỷ bản nháp"* (C) |
| Có đường reset | Bấm *"Bắt đầu lại từ đầu"* từ mọi màn |

## 4.4 Link prototype — ✅ ĐÃ BUILD

Thư mục `prototype/` · hướng dẫn mở ở `prototype-link.md` · annotation facilitator ở `prototype/ANNOTATION.md`

| | Đường dẫn |
| --- | --- |
| **Option B** | `prototype/index.html?opt=b` |
| **Option C** | `prototype/index.html?opt=c` |

**Giao diện:** mô phỏng VLearn theo `docs/vlean.png` — top bar (EN/VI, tiến độ, *Đặt câu hỏi với AI*), mục lục bài học bên trái với mục đang học được đánh dấu *"Đang học"*, toolbar dưới, và nút **"Sổ ghi chú"** — chính là chỗ critical interaction sống.

### Đã tự kiểm bằng trình duyệt

| Luồng | Kết quả |
| --- | --- |
| Màn 1 — bài học + 7 dấu vết | ✅ |
| B: chọn phạm vi → 3 nhóm → 2 câu hỏi làm rõ → duyệt từng nhóm → lưu | ✅ chạy hết |
| C: lời đề nghị → bản nháp 4 khối → lưu | ✅ chạy hết |
| Màn 3 giống hệt nhau giữa B và C | ✅ cùng `renderSaved()` |
| Đường reset ở mọi màn | ✅ |

### Bốn lỗi tự phát hiện và đã sửa

1. **Mục 3 của bài học nổi bật hơn các mục khác** (có viền trái) → hút mắt tester vào đúng chỗ Option C giấu lỗi → **làm hỏng phép thử**. Đã bỏ, mọi mục giờ trông như nhau.
2. `CH2` bị hỏi trùng hai lần ở Option B — vừa báo *"chưa xếp được"* vừa có câu hỏi làm rõ. Đã gộp.
3. Thiếu nút reset ở các màn giữa; chỉ có ở Màn 3 → **không đạt GATE 4**. Đã thêm vào thanh công cụ dưới, có mặt ở mọi màn.
4. **Dấu vết *"Chưa hiểu"* biến mất ở lượt option thứ hai** — `repaintAll()` so bằng `textContent.indexOf()`, trong khi dấu vết lưu chuỗi của `Selection.toString()` đã **gộp khoảng trắng**; mọi đoạn bôi đen vắt qua chỗ xuống dòng đều không khớp. Lượt hai tester thấy bài **sạch hơn** lượt đầu → **phá Comparison Contract**. Tìm ra bằng dry-run, không thấy được bằng mắt. Đã sửa bằng `findAnchorRange()`.

### Dry-run trước phiên test — `dry-run-report.md`

41 điểm kiểm chạy trên đúng đường tester sẽ đi, **41/41 đạt** sau khi sửa lỗi 4. Ảnh chụp các màn: `prototype/screenshots/`.

Một phát hiện **cố ý không sửa**: tuỳ cách tester đánh dấu, **Option B có thể không hỏi câu làm rõ nào** — `bClarify()` chỉ hỏi chỗ AI thật sự không biết. Thêm một câu hỏi "cho có" sẽ phá nguyên tắc ở §3.1 và làm hỏng chính **giả định 1** đang đi kiểm. Đã ghi cảnh báo vào `prototype/ANNOTATION.md` và thêm nhánh *"B hỏi 0 câu"* vào `prototype-feedback-note.md`.
