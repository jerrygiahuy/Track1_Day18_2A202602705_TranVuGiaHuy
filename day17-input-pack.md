# Day 17 Input Pack — chuẩn bị cho Day 18

> Mục đích: đặt cạnh nhau 4 artifact bắt buộc từ Day 17 trước khi bắt đầu Chặng 1.
> Nguồn: `../Track1_Day17_2A202602942_LuuManhHung/README.md` và `interview/notes.md`.
> **Không tạo evidence mới ở file này.** Mọi dòng đều trích hoặc tóm lược từ Day 17, có ghi rõ vị trí nguồn.

---

## A. Xác nhận case — giữ nguyên, không đổi

| Hạng mục | Nội dung |
| --- | --- |
| **Case** | **Case B — AI Notes: Personal Learning Notes** (solution directive đề xuất cho VLearn) |
| **Nhóm Day 17** | Double Hờ |
| **Thành viên Day 17** | Trần Vũ Gia Huy · Lưu Mạnh Hùng *(2 người)* |
| **Người nộp repo này** | Trần Vũ Gia Huy — MHV `2A202602705` |
| **Đổi case?** | ❌ Không. Day 18 tiếp tục đúng Case B. |

### Phân công Day 18 — đã chốt

| Thành viên | Option phụ trách | Facilitate phiên test |
| --- | --- | --- |
| Trần Vũ Gia Huy | **Option B — Cùng tổ chức** | Hợp nhất và chốt hướng chính |
| Lưu Mạnh Hùng | **Option C — Nháp sẵn** | Facilitate tester 1 — chạy **cả B và C** |
| — | ~~Option A~~ — nhãn trống, không build | — |

> ⚠️ **Lệch chuẩn đề bài, đã có chủ đích.** Đề yêu cầu 3 options / 3 thành viên / 3 Feedback Notes. Nhóm chỉ có 2 người nên làm **2 options (B/C)** và **2 Feedback Notes**.
> Nhãn **B/C** theo bản phân tích của Gia Huy (`two-option-design-sheet_v2.md`); nhãn A để trống, không phải thiếu sót.
> **Phải khai báo rõ trong README** — không để TA hiểu nhầm là thiếu sót.
> Nhóm chốt phạm vi hai thành viên với hai options B/C; không tạo thêm Option A chỉ để đủ số lượng.

**Solution directive gốc (nguyên văn Case B):**

> Trong khi học, học viên có thể highlight một đoạn nội dung, đánh dấu **"Chưa hiểu"**, hoặc viết một câu hỏi hay ghi chú ngắn. Khi bài học kết thúc, AI Notes kết hợp những dấu vết này với nội dung bài để tạo một bản ghi chú có cấu trúc. Học viên có thể chỉnh sửa và xác nhận trước khi lưu.

**Neutral capability (đã reverse ở Day 17 §2.2):** người học có thể chọn và tổ chức những nội dung quan trọng theo điều mình đã hiểu và còn thắc mắc, giữ được ngữ cảnh cần thiết để xem hoặc dùng lại về sau.

> ⚠️ Directive **không phải** evidence. Nó chỉ nói sản phẩm muốn làm gì, không chứng minh learner cần điều đó.

---

## B. Artifact 1 — Hypothesis Problem

### Bản chính thức mang sang Day 18 (Day 17 §8, `H_B`)

> **Khi** vừa học hoặc research và muốn giữ một phần kiến thức để dùng sau, **một số learner** có thể gặp trở ngại **khi cần tìm lại nội dung cùng ngữ cảnh**, **nếu** cách lưu hiện tại không khớp với cách họ tìm; trở ngại này có thể khiến họ phải **khôi phục hoặc research lại và làm chậm việc đang cần hoàn thành**.

Tách theo cấu trúc 5 thành phần mà GATE 1 yêu cầu:

| Thành phần | Nội dung từ `H_B` | Trạng thái evidence |
| --- | --- | --- |
| **Situation** | Vừa học hoặc research xong, có nội dung muốn giữ để dùng sau | Medium — E01–E03 (tự thuật, chưa neo vào một lần cụ thể) |
| **User** | Learner (đã chốt ở §2.4 là actor điều tra trước) | OK |
| **Job** | Giữ và tìm lại được phần kiến thức cần dùng, **cùng ngữ cảnh** | Medium — E03, E04 |
| **Barrier** | Cách lưu hiện tại không khớp với cách họ tìm | ⚠️ **Giả thuyết** — chưa có failure event |
| **Consequence** | Phải dò lại / khôi phục / research lại → chậm việc đang làm | ⚠️ **Chưa có evidence** |

### Các nhánh còn mở (Day 17 §8)

- **H_A** — barrier nằm ở *tổng hợp* thông tin nhiều nhánh. Chưa có evidence trực tiếp.
- **H_B** — barrier nằm ở *giữ / tìm lại*. ✅ Đã chọn làm hướng chính. Có lý do tự thuật, chưa có failure/consequence.
- **H_C (phản bác)** — workflow hiện tại đã đáp ứng tốt; việc tạo infographic có **giá trị tự thân**. Nếu evidence ủng hộ H_C thì phải sửa/bỏ problem.

### Scary question kế thừa (Day 17 §3.2)

> Việc **tự tổng hợp / viết lại** kiến thức có thực sự là pain, hay chính là phần quan trọng giúp learner hiểu và nhớ?

👉 Đây là trục thiết kế quan trọng nhất cho Chặng 2 của Day 18: nếu tự tổng hợp có giá trị học, một option phải **giữ** hoạt động đó và chỉ hỗ trợ lưu/tìm.

---

## C. Artifact 2 — Practice Notes

### Khoảng trống — đã chốt cách xử lý

Yêu cầu Day 18: **3 Practice Notes**, thường mỗi thành viên một note.
Thực tế Day 17 của nhóm Double Hờ: **1 Practice Note** (P01 – Tài), nhóm chỉ có **2 người**.

**Quyết định: khai báo đúng 1 note + nêu rõ giới hạn.** Không bịa thêm note, không suy rộng từ P01 ra "learner nói chung".

Câu khai báo dùng ở Chặng 1 và README:

> Nhóm có **1 Practice Note** (P01 – Tài) thay vì 3, do nhóm chỉ có 2 thành viên và Day 17 hoàn thành một lượt phỏng vấn. Evidence nền vì vậy ở mức **Medium**, không có evidence Strong. Barrier và consequence trong Hypothesis Problem **chưa được chứng minh** — chúng là giả thuyết mang sang để test bằng prototype, không phải kết luận.

### Practice Note có sẵn — P01 Tài (Day 17 §5 + §6)

| Trường | Nội dung |
| --- | --- |
| **Mã** | P01 – Tài |
| **Đúng tiêu chí tuyển?** | ❌ **Chưa xác nhận** — transcript không xác nhận hành vi ghi chú/highlight/lưu trong 7 ngày gần đây |
| **Recent concrete event?** | ❌ **Chưa khai thác được** một lần cụ thể về ghi / tổng hợp / lưu / tìm lại |
| **User đã thực sự làm gì** | Bắt đầu bằng câu hỏi → phản biện từng ý chưa rõ → đào sâu keyword → dựng bức tranh tổng thể (E01–E02); tạo infographic đúc kết rồi cất thư mục hoặc đăng Facebook (E03) |
| **Khó khăn / workaround** | E03 là cách làm hiện tại; E04 là lý do chọn Facebook. **Tài chưa nói mình khó ghi chú hoặc khó tìm lại.** |
| **Hậu quả / chi phí** | ❌ UNKNOWN — không có thời gian tạo, thời gian tìm, lần thất bại nào về note |
| **Quote trái kỳ vọng** | *"Đăng lên Facebook là dễ tìm nhất và không bị trôi mất kiến thức."* (E04) → gợi ý retrieval **có thể đã được giải quyết** |

### Evidence dùng được cho Day 18 (mức Medium — không có Strong)

| ID | Quote / mô tả | Dùng cho Day 18 thế nào |
| --- | --- | --- |
| **E01** | "…bắt đầu bằng một câu hỏi về một chủ đề em chưa biết gì… khi AI trả lời thì em sẽ bắt đầu phản biện lại từng ý nhỏ… Sau đó em sẽ vẽ được một bức tranh sơ đồ tổng thể." | Neo cho **common context** của prototype: learner học theo nhánh, chủ động phản biện |
| **E02** | "Em đọc hết câu trả lời, tìm ra vài keyword mình chưa hài lòng hoặc chưa hiểu rõ để đào sâu vào đó." | Neo cho cơ chế **"đánh dấu điểm chưa hiểu"** — có gốc hành vi thật |
| **E03** | "Anh sẽ tạo ảnh Infographic đúc kết lại rồi cất vào thư mục hoặc đăng lên Facebook." | Workaround hiện tại → baseline để so sánh với B/C |
| **E04** | "Đăng lên Facebook là dễ tìm nhất và không bị trôi mất kiến thức." | Tiêu chí thành công theo lời user: **dễ tìm + không trôi** |
| **E05** | "Thường nó là một thắc mắc tự nhiên em nghĩ ra hoặc nghĩ rất lâu rồi mà chưa có đáp án." | Trigger thật khác trigger của directive ("kết thúc bài học") → cần cân nhắc khi thiết kế trigger |

**Evidence bị loại khỏi pain:** E06, E07, E10 (thuộc job khác — research công việc); E08, E09 (câu xác nhận sau gợi ý của interviewer).

### Evidence gap lớn nhất mang sang Day 18

1. Chưa có **failure event** nào về tìm lại note.
2. Chưa biết **tự tổng hợp là pain hay là giá trị**. ← chính là scary question.
3. Chưa biết hành vi này có xuất hiện trong **bài học có cấu trúc** (VLearn) hay chỉ trong research tự do.

---

## D. Artifact 3 — Solution Parking Lot (7 hướng, đạt yêu cầu ≥5)

| # | Hướng giải quyết | AI? | Mức automation |
| --- | --- | --- | --- |
| 1 | Template tự viết: điều đã hiểu, câu hỏi còn mở, nguồn, ví dụ áp dụng | Không | Learner tự chọn và tổng hợp |
| 2 | Quy trình thư mục, tên file, ngày/chủ đề + trang mục lục liên kết | Không | Quy ước thủ công |
| 3 | Inbox kiến thức gom nguồn và dấu vết, learner tự tổ chức | Không | Gom nội dung; learner quyết cấu trúc |
| 4 | Tìm kiếm theo từ khóa, nhãn, liên kết trở lại nguồn | Không | Tự động lập chỉ mục; learner chủ động tìm |
| 5 | AI gom ý / đề xuất cấu trúc, giữ nguồn, learner viết & chỉnh phần đúc kết | **Có** | Automation một phần, learner kiểm tra |
| 6 | Nhắc xem lại theo lịch learner chọn, gắn với nội dung đã lưu | Không | Tự động nhắc; learner tự ôn |
| 7 | Tìm nội dung liên quan trong kho cá nhân, kèm đoạn nguồn + ngữ cảnh | **Có** | Hỗ trợ retrieval; không tự tạo lại note |

### Soát theo tiêu chí Chặng 2 — pool này có đủ để ra 3 option không?

| Tiêu chí "cần bổ sung hướng mới" | Kết quả |
| --- | --- |
| Toàn là cùng một cơ chế? | ❌ Không — có cả manual template, indexing, AI-assisted synthesis, retrieval, reminder |
| Chỉ thay UI hoặc wording? | ❌ Không |
| Thiếu hướng **user-led / no-inference**? | ✅ Có rồi — hướng 1, 2, 3 |
| Thiếu hướng **human escalation**? | ⚠️ **Chưa có** — chưa hướng nào cho learner hỏi người thật / instructor khi AI không chắc |
| Không tạo được 3 option cùng giải một task? | ❌ Tạo được |

👉 **Kết luận:** pool đủ dùng. Chỉ cần cân nhắc bổ sung **1 hướng human escalation** ở Chặng 2 nếu case cần.

**Gợi ý trục phân hoá (chưa chốt — để Chặng 2 quyết):**

```
Hướng 1/3  →  USER CREATES             (learner tự viết, AI không suy luận)
Hướng 5    →  USER + AI CO-CREATE      (AI gợi cấu trúc, learner viết nội dung)
Hướng 7/4  →  AI CREATES, USER REVIEWS (AI dựng note từ dấu vết, learner duyệt)
```

Trục này trùng trực tiếp với scary question → rất phù hợp để test.

### ✅ Hai option nhóm đã chốt ở Chặng 2

*(Theo bản phân tích của Gia Huy — `two-option-design-sheet_v2.md`. Chi tiết ở `three-option-design-sheet.md` §2.)*

| | **Option B — Cùng tổ chức** | **Option C — Nháp sẵn** |
| --- | --- | --- |
| **Vị trí trên spectrum** | `USER + AI CO-CREATE` | `AI CREATES, USER REVIEWS` |
| **Hướng parking lot** | 5 + 3 (AI đề xuất cấu trúc từ phạm vi learner chọn) | 7 + 4 (AI soạn nháp từ toàn bộ dấu vết, có trích nguồn) |
| **Ai khởi phát** | Learner gửi phạm vi | Hệ thống đề nghị khi hết bài |
| **Khi thiếu ngữ cảnh** | **Hỏi** learner làm rõ | **Tự suy luận** + gắn nhãn cảnh báo |

⚠️ **Hệ quả:** cả hai đều có AI sinh nội dung → nhóm **không có hướng user-led / no-inference** làm đối chứng cho `H_C`. Giới hạn này đã khai báo ở `three-option-design-sheet.md` §2.7 và phải ghi vào README.

---

## E. Artifact 4 — Conversation Guide (chỉ tham khảo context)

> ⚠️ Day 18 **không** tiếp tục problem interview. Guide này chỉ dùng để nhớ bối cảnh và mượn lại kỷ luật hỏi khi facilitate ở Chặng 6.

| Phần | Vị trí nguồn | Dùng lại ở Day 18 |
| --- | --- | --- |
| Recruitment criteria | §9 | ✅ Tiêu chí chọn **tester** ở Chặng 6: learner đã ghi/đánh dấu/lưu nội dung học trong 7 ngày gần đây |
| Introduction & consent | §9 | ✅ Mẫu xin phép ghi âm |
| Probe Bank | §9 | ✅ Các probe "Lúc đó chuyện gì xảy ra tiếp?" / "Bạn đã làm gì?" dùng được khi tester im lặng |
| Phản xạ Deflect / Anchor / Dig | §9 | ✅ Xử lý lời khen và câu nói chung chung trong lúc test |
| Big 3 Questions | §9 | ❌ **Không dùng** — Day 18 dùng outcome task, không phỏng vấn problem |

**Ba phản xạ mang sang Chặng 6:**

| Tester đưa ra | Phản xạ | Câu quay về hành vi |
| --- | --- | --- |
| Lời khen | Deflect | "Cảm ơn bạn. Quay lại chỗ vừa rồi, sau bước đó bạn sẽ làm gì?" |
| Mô tả chung / dự đoán | Anchor | "Bạn thử làm luôn trên màn hình này xem sao?" |
| Hỏi "cái này hoạt động thế nào?" | Dig | "Theo bạn, nó nên hoạt động như thế nào?" |

---

## F. Công cụ & hậu cần

| Hạng mục | Lựa chọn | Trạng thái |
| --- | --- | --- |
| **Công cụ prototype** | **HTML/CSS/JS trong repo** — self-contained, dễ gửi link, dễ reset | ✅ **Đã chốt** |
| Cấu trúc đã triển khai | `prototype/` → `index.html` (common context) · `option-b.html` · `option-c.html` · `shared.css` · `fixture.js` · `shared.js` | ✅ Hoàn thành |
| Nơi lưu Design Sheet | `three-option-design-sheet.md` trong repo | ✅ File đã có (rỗng) |
| Nơi lưu link A/B | `prototype-link.md` | ✅ File đã có (rỗng) |
| Thiết bị chạy prototype | Laptop của người facilitate | ✅ Đã dùng trong FB1 |
| Đồng hồ bấm giờ | Timer điện thoại — mốc 2' / 14' / 18' / 20' | ✅ Phiên thực tế kéo dài 10 phút; đã khai báo lệch protocol |
| AI Support Log | `ai-support-log.md` — ghi **ngay trong lúc làm** | ✅ Đã khởi tạo |

> Chọn HTML/CSS/JS giúp đạt GATE 4 dễ hơn: `shared.css` + `fixture.js` ép **70% dùng chung** thành ràng buộc kỹ thuật, không phải lời hứa; và nút *"Quay lại màn hình đầu"* là một thẻ `<a>` — đường reset có sẵn.

---

## G. Quyết định đã chốt & rủi ro còn lại

### Đã chốt

| # | Vấn đề | Quyết định |
| --- | --- | --- |
| 1 | Nhóm 2 người, đề yêu cầu 3 option | **Làm 2 option B/C**, mỗi người 1 option. Khai báo rõ trong README. |
| 2 | Chỉ có 1 Practice Note | **Khai báo đúng 1 note + nêu giới hạn.** Không bịa thêm evidence. |
| 3 | Công cụ prototype | **HTML/CSS/JS trong repo.** |

### Rủi ro còn lại — cần xử lý bằng cách viết, không phải bằng cách giấu

| # | Rủi ro | Cách xử lý |
| --- | --- | --- |
| 1 | GATE 2/4/5 đều viết theo A/B/C → TA có thể chấm thiếu | README nêu ngay ở phần đầu: nhóm 2 người → 2 option, 2 Feedback Note. Nên xác nhận với giảng viên/TA trước khi nộp. |
| 2 | Chỉ có **2 Feedback Notes** thay vì 3 | Nếu còn thời gian ngoài giờ, một người chạy thêm **tester thứ 3** → đủ 3 note mà vẫn chỉ 2 option. Đây là cách rẻ nhất để kéo gần chuẩn đề bài. |
| 3 | P01 **chưa xác nhận đúng tiêu chí tuyển**, **chưa có recent concrete event** | Vẫn đi tiếp với `H_B`, ghi rõ ở Chặng 1: barrier và consequence là **giả thuyết**, chưa được chứng minh. Bù lại bằng tiêu chí tuyển tester chặt hơn ở Chặng 6. |
| 4 | Với cặp B/C, nhóm **mất cực user-led / no-inference** — không có option nào mà AI không sinh nội dung | Đây là đối chứng cho `H_C`. Nếu tester ở cả 2 phiên đều nói muốn tự viết hoặc bỏ qua cả hai, ghi vào **Still Unproven** và **Next Change** — không diễn giải thành "tester thích B hơn C". Chi tiết ở `three-option-design-sheet.md` §2.7. |
| 5 | Tên người hỏi trong transcript không nhất quán ("Gia Huy" dòng 8 vs "Hải Huy" dòng 17, 68) | Đối chiếu audio khi viết phần đóng góp cá nhân. Không tự sửa nguồn Day 17. |

---

## H. Checklist mục 0 — trạng thái

- [x] Đặt cạnh nhau 4 artifact Day 17 → file này
  - [x] Hypothesis Problem (`H_B`) — mục B
  - [x] Practice Notes — **1/3, đã chốt cách khai báo giới hạn** — mục C
  - [x] Solution Parking Lot — **7 hướng** (≥5) — mục D
  - [x] Conversation Guide — mục E
- [x] Xác nhận giữ đúng case Day 17 → **Case B — AI Notes** — mục A
- [x] Chốt nhóm và phân công → **Double Hờ, 2 người: Gia Huy = Option B, Hùng = Option C** — mục A
- [x] Chốt công cụ prototype → **HTML/CSS/JS trong repo** — mục F
- [x] Chuẩn bị thiết bị + timer → đã dùng trong FB1; phiên thực tế 10 phút và đã khai báo lệch protocol
- [x] Mở sẵn `ai-support-log.md` → đã khởi tạo, ghi liên tục trong buổi

**✅ Mục 0 hoàn tất. Sẵn sàng vào Chặng 1 — Tổng hợp evidence.**
