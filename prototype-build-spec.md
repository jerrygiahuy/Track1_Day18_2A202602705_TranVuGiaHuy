# Prototype Build Spec — Option B / Option C

**Mục đích:** chốt mọi thứ còn để trống trong `two-option-design-sheet_v2.md` để Chặng 4 build được ngay, không phải dừng lại hỏi nhau.
**Nguồn ràng buộc:** `three-option-design-sheet.md` §2–§3 (Comparison Contract + Human–AI decisions) · `docs/6.md` (scope, definition of testable, GATE 4).
**Trạng thái:** 🟢 đã chốt · 🔸 Gia Huy nên liếc qua xác nhận, nhưng **không chặn build**.

---

## 0. Audit — những gì bản của Gia Huy chưa chốt

| # | Điểm trống | Vì sao chặn build | Chốt ở mục |
| --- | --- | --- | --- |
| 1 | *"Một bài học mẫu"* — chưa có nội dung | Không có gì để render ở Màn 1 | §1 |
| 2 | Dấu vết: chưa biết bao nhiêu, ở đâu, nội dung gì | Cả B và C đều ăn dữ liệu này | §2 |
| 3 | Dấu vết **do tester tạo** hay **có sẵn**? | Quyết định toàn bộ Màn 1 và tính công bằng B↔C | §2.1 |
| 4 | B: AI đề xuất **mấy nhóm**, heading là gì | Là output chính của Màn 2B | §3.2 |
| 5 | B: nội dung **2 câu hỏi làm rõ** | Là điểm khác biệt cơ chế quan trọng nhất của B | §3.3 |
| 6 | B: *"chuyển sang tự viết"* trông như thế nào | Là recovery path của B — GATE 3 đã hứa | §3.4 |
| 7 | C: **nội dung bản nháp**, chỗ nào đúng / mờ / cảnh báo | Là output chính của Màn 2C | §4.2 |
| 8 | C: *"tạo lại với phạm vi hẹp hơn"* ra cái gì | Là recovery path của C — GATE 3 đã hứa | §4.4 |
| 9 | C: bấm **"Bỏ qua"** thì đi đâu | Trigger của C cho phép bỏ qua, chưa định nghĩa | §4.1 |
| 10 | Màn 3 hiển thị gì, tester quyết định gì | `docs/6.md` bắt buộc có màn RESULT | §5 |
| 11 | **Đường reset** về common context | **GATE 4 bắt buộc** — bản Gia Huy không có | §5.2 |
| 12 | **Thứ tự** tester dùng B và C | Không đảo thứ tự → order effect làm hỏng so sánh | §6.1 |
| 13 | Component / style dùng chung (quy tắc 70%) | `docs/6.md` yêu cầu | §7 |
| 14 | Prototype annotation (*We expect / Watch for / Do not explain*) | `docs/6.md` yêu cầu, đang để trống | §8 |
| 15 | Giới hạn đã biết của prototype | Cần khai báo, không để người chấm tự phát hiện | §9 |

---

## 1. Fixture — bài học 🟢

**Chủ đề:** Prompt Engineering căn bản · **Bài:** 3/8 — *"Bốn thành phần của một prompt hiệu quả"* · **Ngày học:** 05/10/2026

> Chọn chủ đề này vì: tester trong lớp đều có ngữ cảnh liên quan, nội dung tự chứa (không cần kiến thức nền), và có thể cài một mệnh đề đánh đổi thật mà tóm tắt tự động hay làm mờ.

### Mục 1 — Vai trò (Role)

> Khi bạn nói rõ model đang đóng vai ai, bạn thu hẹp vùng kiến thức mà nó rút ra. *"Hãy giải thích lạm phát"* và *"Bạn là giáo viên kinh tế lớp 10, hãy giải thích lạm phát"* cho ra hai câu trả lời khác hẳn nhau về độ sâu và cách dùng từ. Vai trò không làm model thông minh hơn — nó chỉ giúp model chọn đúng ngăn kiến thức để lấy ra.

### Mục 2 — Ngữ cảnh (Context)

> Nêu bối cảnh và người sẽ đọc kết quả. Cùng một yêu cầu *"tóm tắt báo cáo này"*, nếu người đọc là ban giám đốc thì bản tóm tắt cần kết luận trước và số liệu sau; nếu người đọc là nhóm kỹ thuật thì ngược lại. Thiếu ngữ cảnh, model sẽ chọn một mức mặc định an toàn và thường là chung chung.

### Mục 3 — Ví dụ mẫu (Few-shot) 🔴 *mục khó, cố ý*

> **Zero-shot** là không đưa ví dụ nào. **One-shot** là đưa một ví dụ. **Few-shot** là đưa vài ví dụ để model nhìn ra khuôn mẫu bạn muốn.
>
> Nhưng **thêm ví dụ không phải lúc nào cũng tốt hơn.** Khi các ví dụ quá giống nhau, model có xu hướng **bắt chước bề mặt** của chúng: nó lặp lại cấu trúc câu, và lặp lại cả những trường hợp mà bộ ví dụ vô tình bỏ sót. Với tác vụ phân loại, **3–5 ví dụ phủ được các nhóm khác nhau thường cho kết quả tốt hơn 10 ví dụ cùng rơi vào một nhóm.** Điều quyết định là **độ phủ**, không phải số lượng.

### Mục 4 — Ràng buộc đầu ra (Output constraints)

> Nói rõ định dạng, độ dài và những gì không được xuất hiện. Dùng **delimiter** — một cặp ký hiệu như `"""` hoặc `###` — để tách phần hướng dẫn khỏi phần dữ liệu, tránh việc model đọc nhầm dữ liệu thành mệnh lệnh.

**Mệnh đề đánh đổi cần theo dõi:** *"độ phủ quan trọng hơn số lượng — 3–5 ví dụ phủ nhiều nhóm tốt hơn 10 ví dụ cùng một nhóm"*. Đây là thứ sẽ dùng để đánh giá desired outcome *"đủ ngữ cảnh"*.

---

## 2. Dấu vết học tập 🟢

### 2.1 Quyết định: learner **tự đánh dấu** trên nội dung bài

> ### ⚠️ Chỗ spec này đã lỗi thời so với prototype thật
>
> Sau khi đổi sang **learner tự đánh dấu** (ghi ở dòng ngay bên dưới), con số **"7 dấu vết"** ở các mục sau vẫn giữ nguyên từ bản cũ: chọn phạm vi của B · nhánh *"Bỏ qua"* của C · *"Huỷ bản nháp"* · đường reset · mô tả `fixture.js` · bảng tự kiểm GATE 4.
>
> **Đọc đúng:** 7 dấu vết chỉ là **bộ mẫu để nhóm diễn tập** (`?demo=1`). Trong phiên test thật, số dấu vết là **bao nhiêu tuỳ tester tạo ra** — có thể là 0. Prototype và `prototype-link.md` mới là bản đúng.

> **Đổi so với bản trước.** Ban đầu spec này chốt dấu vết có sẵn, read-only, để tiết kiệm thời gian. Nhóm đổi lại: learner tự tạo dấu vết. Việc tự chọn chỗ nào đáng giữ là **một phần của job đang điều tra**, không nên lấy mất.

**Cách hoạt động:**

- Màn 1 hiện bài học **sạch, không có dấu vết nào**.
- Learner bôi đen một đoạn bất kỳ → hiện thanh công cụ 4 nút: **Highlight · Chưa hiểu · Câu hỏi · Ghi chú**.
  - *Highlight* và *Chưa hiểu*: tô ngay đoạn đã chọn.
  - *Câu hỏi* và *Ghi chú*: mở ô soạn, đoạn bôi đen trở thành chỗ neo.
- Nút **"+ Thêm ghi chú chung"** cho ghi chú không gắn mục nào.
- Mỗi dấu vết hiện trong danh sách cuối bài, có nút `×` để bỏ.
- Mã tự sinh: `H1, H2…` · `CH1, CH2…` · `Q1…` · `N1…`

**Giữ Comparison Contract thế nào:** bộ dấu vết lưu vào `sessionStorage` và **giữ nguyên khi quay về Màn 1**. Nên ở lượt option thứ hai, tester dùng **đúng bộ dấu vết đã tạo ở lượt đầu** — B và C ăn cùng một input. Khi quay lại, các dấu vết được **vẽ lại** trên bài học.

| Hành động | Dấu vết |
| --- | --- |
| Bấm **"Bắt đầu lại"** giữa hai option | ✅ Giữ nguyên — đây là điều ta muốn |
| Facilitator mở `index.html?opt=b&fresh=1` | ❌ Xoá sạch — dùng khi **đổi sang tester mới** |
| Nút *"Xoá hết dấu vết"* ở chế độ nội bộ | ❌ Xoá sạch |

**Nếu learner không đánh dấu gì:**

| | Hệ quả |
| --- | --- |
| **Option B** | Không có gì để AI tổ chức → hiện thông báo và chỉ còn lối *"Tự viết"*. Đây là hệ quả thật của *"AI chỉ xử lý phần learner chọn"*. |
| **Option C** | Vẫn dựng được bản nháp vì khối A lấy từ **nội dung bài**, không từ dấu vết. Chỗ làm mờ ở mục 3 **vẫn nguyên** → phép thử chính vẫn chạy. |

Nút *"Hoàn thành bài học"* **không bị khoá** khi chưa có dấu vết nào. Không ép tester đánh dấu — nếu họ bỏ qua, đó là một quan sát hợp lệ.

### 2.2 Bộ dấu vết mẫu — chỉ để nhóm diễn tập

Ở chế độ nội bộ (`index.html` không có `?opt=`), có nút **"Dùng bộ dấu vết mẫu"** nạp sẵn 7 dấu vết để nhóm thử nhanh. **Tester không bao giờ thấy nút này.**

| ID | Loại | Nội dung | Neo |
| --- | --- | --- | --- |
| `H1` | Highlight | *"Vai trò không làm model thông minh hơn…"* | Mục 1 |
| `H2` | Highlight | *"3–5 ví dụ phủ được các nhóm khác nhau…"* | Mục 3 |
| `H3` | Highlight | *"Dùng delimiter để tách phần hướng dẫn…"* | Mục 4 |
| `CH1` | Chưa hiểu | *"model có xu hướng bắt chước bề mặt của chúng"* | Mục 3 |
| `CH2` | Chưa hiểu | *"một cặp ký hiệu như """ hoặc ###"* | Mục 4 |
| `Q1` | Câu hỏi | *"Nếu đã ràng buộc đầu ra rõ rồi thì còn cần ví dụ mẫu không?"* | Mục 3 |
| `N1` | Ghi chú | *"Áp dụng cho việc phân loại phản hồi khách hàng ở chỗ làm."* | — |

---

## 3. Option B — Cùng tổ chức 🟢

> Phụ trách: **Trần Vũ Gia Huy** · File: `prototype/option-b.html`

### 3.1 Màn 2B-1 — Chọn phạm vi

- Liệt kê cả 7 dấu vết, mỗi cái một checkbox, **mặc định chưa chọn cái nào**. Learner phải chủ động chọn — đúng với *"user chủ động gửi phạm vi"*.
- Nút **"Cùng AI tổ chức"** bị khoá cho đến khi chọn ≥ 1.
- **Expectation banner, hiện trước khi AI chạy** *(GATE 3 §3.1①)*:

  > *"AI chỉ tổ chức những dấu vết bạn chọn. Nó có thể nhóm sai hoặc bỏ sót ngữ cảnh. Kết quả dưới đây là **đề xuất**, không phải bản đúng."*

- Có nút thứ hai, nhỏ hơn: **"Tự viết, không cần AI"** → §3.4.

### 3.2 Màn 2B-2 — Đề xuất nhóm 🟢

AI gom các dấu vết **đã chọn** theo **loại**, không theo mục. Luật cố định:

| Nhóm | Heading AI đề xuất | Gồm | Ghi chú thiết kế |
| --- | --- | --- | --- |
| 1 | **"Điều bạn đã nắm được"** | mọi `Highlight` | 🔸 **Cố ý gom rộng** — highlight từ mục 1 và mục 4 bị dồn chung dù là hai việc khác nhau. Đây là kiểu gom một AI hay làm, và để learner có cái thật để sửa. |
| 2 | **"Chỗ còn vướng"** | mọi `Chưa hiểu` + `Câu hỏi` | Gom hợp lý |
| 3 | **"Áp dụng"** | mọi `Ghi chú` | Gom hợp lý |

Mỗi nhóm hiển thị: heading **sửa được tại chỗ** · dấu vết nguồn, mỗi cái là **link bấm được về đúng đoạn gốc** · nút **"Duyệt nhóm này"**. Phải duyệt hết mới lưu được.

> Learner chọn ít dấu vết thì nhóm tương ứng **không xuất hiện** — hệ quả thật của *"AI chỉ xử lý phần đã chọn"*. Không can thiệp, không nhắc tester chọn thêm.

### 3.3 Hai câu hỏi làm rõ 🟢

Tối đa **2 câu**, mỗi câu đều **bỏ qua được**, và bỏ qua cả hai vẫn ra được note.

**Câu 1 — khi có một điểm *"Chưa hiểu"* mà không kèm câu hỏi hay ghi chú nào trong cùng mục**
→ AI không biết learner vướng chính xác ở đâu.

> *"Bạn đánh dấu **'Chưa hiểu'** ở chỗ «…» nhưng chưa ghi thêm gì. Điều bạn chưa rõ là **nó là gì**, hay **khi nào cần dùng nó**?"*
> `[ ô trả lời tự do ]` `[ Bỏ qua ]`

**Câu 2 — khi có ghi chú không gắn mục nào**
→ AI không biết xếp vào đâu.

> *"Ghi chú «…» chưa gắn với mục nào trong bài. Bạn muốn gắn nó vào đâu?"*
> `[ Vai trò ]` `[ Ngữ cảnh ]` `[ Ví dụ mẫu ]` `[ Ràng buộc đầu ra ]` `[ Để riêng ]` `[ Bỏ qua ]`

Nếu dấu vết của learner không kích hoạt điều kiện nào thì **không có câu hỏi làm rõ** — cũng là một quan sát.

> Cả hai câu đều hỏi về chỗ **AI thật sự không biết**, không phải hỏi để tỏ ra thông minh. Đúng nguyên tắc *"hỏi thay vì tự điền khi thiếu ngữ cảnh"*.

### 3.4 Control & recovery của B 🟢

| Hành động | Cách làm |
| --- | --- |
| Sửa heading | Bấm vào heading, gõ đè |
| Chuyển dấu vết sang nhóm khác | Dropdown *"Chuyển sang…"* trên mỗi dấu vết *(thay cho kéo-thả — kéo-thả dễ hỏng trên prototype)* |
| Bỏ một dấu vết khỏi note | Nút `×` trên dấu vết |
| Xoá cả nhóm | Nút *"Xoá nhóm"* |
| **Undo** | Một nút *"Hoàn tác"* ở thanh dưới, quay lại 1 bước |
| **Chuyển sang tự viết** | Nút *"Tự viết, không cần AI"* → thay toàn bộ đề xuất bằng một ô soạn thảo trống, **giữ nguyên danh sách dấu vết nguồn bên cạnh** để learner tự chép vào. Mọi đề xuất của AI bị bỏ. |
| Dấu vết gốc | **Không bao giờ bị sửa hoặc xoá** — mọi thao tác chỉ tác động lên note |

---

## 4. Option C — Nháp sẵn 🟢

> Phụ trách: **Lưu Mạnh Hùng** · File: `prototype/option-c.html`

### 4.1 Màn 2C-1 — Lời đề nghị 🟢

Hiện ngay khi vào, không cần bấm gì:

> *"Bạn vừa học xong bài này. Tôi có thể dựng sẵn một bản ghi chú nháp từ nội dung bài và **toàn bộ dấu vết** của bạn. Đây là **bản nháp cần bạn kiểm tra** trước khi lưu."*
> `[ Tạo bản nháp ]` `[ Bỏ qua ]`

**Bấm "Bỏ qua"** → đi thẳng tới một ô soạn thảo trống kèm danh sách 7 dấu vết bên cạnh, và một nút *"Đổi ý, tạo bản nháp"*. Bỏ qua **không** kết thúc task.

### 4.2 Màn 2C-2 — Bản nháp AI 🟢

Bốn khối. Mỗi dòng đều có link nguồn bấm được. Khối có suy luận thì gắn nhãn ⚠.

---

**📝 Ghi chú — Bốn thành phần của một prompt hiệu quả** · 05/10/2026

**A. Bốn thành phần**

| | Nội dung bản nháp | Nguồn | Đánh giá nội bộ |
| --- | --- | --- | --- |
| 1 | Gán vai trò cụ thể giúp thu hẹp vùng kiến thức model rút ra, nên câu trả lời bớt chung chung. | `→ Mục 1` | ✅ Đúng |
| 2 | Nêu bối cảnh và người đọc để model chọn đúng độ chi tiết và giọng điệu. | `→ Mục 2` | ✅ Đúng — *learner không đánh dấu gì ở mục 2, AI vẫn đưa vào vì đọc toàn bài. Đây chính là khác biệt phạm vi so với B.* |
| 3 | Zero-shot là không đưa ví dụ, one-shot là một ví dụ, few-shot là nhiều ví dụ. **Đưa thêm ví dụ mẫu giúp model nắm được định dạng và cách phân loại mong muốn.** | `→ Mục 3` | 🔴 **CHỖ LÀM MỜ** |
| 4 | Nêu định dạng, độ dài, và dùng delimiter để tách hướng dẫn khỏi dữ liệu. | `→ Mục 4` | ✅ Đúng |

> 🔴 **Giải thích chỗ làm mờ ở dòng 3:** bản nháp **giữ đúng định nghĩa** nhưng **đánh rơi mệnh đề đánh đổi**. Câu còn lại hàm ý *"càng nhiều ví dụ càng tốt"* — **ngược với bài**, vốn nói độ phủ quan trọng hơn số lượng. Đây là kiểu lỗi thật của tóm tắt tự động: giữ phần định nghĩa, bỏ phần điều kiện. **Không** phải lỗi dựng lên để C thua — nó **đúng ở 3/4 dòng** và dòng 3 vẫn đọc trôi chảy, hợp lý.

**B. Chỗ bạn còn vướng** ⚠ *AI suy luận — cần kiểm tra*

> Bạn đánh dấu "Chưa hiểu" ở hai chỗ. Có vẻ bạn đang vướng ở **cách model bắt chước ví dụ mẫu** và ở **khái niệm delimiter**.
> `→ CH1` `→ CH2`

**C. Câu hỏi của bạn** ⚠ *Bài học không trả lời trực tiếp câu này*

> *"Nếu đã ràng buộc đầu ra rõ rồi thì còn cần ví dụ mẫu nữa không?"* — Bài có nói về cả hai thành phần nhưng **không so sánh chúng**. Cần bạn tự kiểm tra hoặc hỏi thêm.
> `→ Q1`

> ✅ Đây là chỗ C làm **đúng**: không bịa đáp án. Đáp ứng GATE 3 — *"phần không đủ nguồn được đánh dấu thay vì trình bày như fact"*.

**D. Áp dụng** ⚠ *AI suy luận — cần kiểm tra*

> Bạn ghi chú về phân loại phản hồi khách hàng. Có thể áp dụng bằng cách **đưa nhiều ví dụ mẫu cho từng nhóm phản hồi**.
> `→ N1`

> 🔴 Khối D **nhân đôi lỗi của dòng 3** (*"nhiều ví dụ"* thay vì *"phủ đủ nhóm"*), nhưng khối này **có gắn nhãn cảnh báo**. Đây là phép thử trực tiếp cho giả định §3.4-②: *learner có thật sự đọc chỗ gắn nhãn không, hay chỉ lướt qua rồi bấm lưu.*

---

### 4.3 Expectation của C 🟢

Dòng cố định trên đầu bản nháp, không đóng được:

> *"Bản nháp này do AI soạn từ nội dung bài và dấu vết của bạn. Nó có thể bỏ sót hoặc suy diễn sai. Không có gì được lưu cho tới khi bạn bấm Lưu."*

### 4.4 Control & recovery của C 🟢

| Hành động | Cách làm |
| --- | --- |
| Sửa / xoá từng khối | Nút `Sửa` và `Xoá` trên mỗi khối A–D |
| Mở nguồn đối chiếu | Mọi `→ Mục n` và `→ ID` đều bấm được, mở đúng đoạn gốc |
| **Huỷ toàn bộ** | Nút *"Huỷ bản nháp"* → xoá sạch, về ô soạn thảo trống kèm 7 dấu vết |
| **Tạo lại phạm vi hẹp hơn** | Nút *"Tạo lại, chỉ dùng chỗ tôi đã đánh dấu"* → bản nháp mới **chỉ còn khối A rút gọn (2 dòng: mục 3 và mục 4, là nơi có dấu vết) + khối B + khối C**. **Không có khối D.** Mục 2 biến mất vì learner không đánh dấu gì ở đó. |
| **Không autosave** | Không có gì vào Màn 3 cho tới khi bấm *"Lưu ghi chú"* |
| Dấu vết gốc | **Không bao giờ bị sửa hoặc xoá** |

---

## 5. Màn 3 — Result / User decision 🟢 *(chung cho B và C)*

### 5.1 Nội dung

- Tiêu đề note · ngày · nội dung cuối đúng như learner đã duyệt
- Danh sách nguồn đã gắn
- Một dòng trung tính: *"Đã lưu."* — **không chấm điểm, không khen, không gợi ý** *(tránh dẫn dắt tester)*

### 5.2 Đường reset — GATE 4 bắt buộc 🟢

Nút **"Bắt đầu lại từ đầu"** ở cuối Màn 3 **và** ở góc mọi màn hình → xoá state, quay về Màn 1 với 7 dấu vết nguyên vẹn.

> Bản của Gia Huy không có mục này. `docs/6.md` ghi rõ GATE 4 chỉ đạt khi người ngoài *"quay về context ban đầu mà không cần ai giải thích"*.

---

## 6. Vận hành test 🟢

### 6.1 Đảo thứ tự giữa hai tester

| Tester | Thứ tự |
| --- | --- |
| Tester 1 *(Hùng facilitate)* | **B → C** |
| Tester 2 *(Gia Huy facilitate)* | **C → B** |

> Bản của Gia Huy không nói tới thứ tự. Nếu cả hai tester đều dùng B trước, option thứ hai luôn được xem bởi người đã quen bài học → **order effect** làm hỏng so sánh. Đảo thứ tự là cách rẻ nhất để giảm nó. Với n = 2 điều này **không** loại bỏ được bias, chỉ không để nó đi cùng một chiều.

### 6.2 Reset giữa hai option

Facilitator bấm *"Bắt đầu lại từ đầu"*. Tester **không** đọc lại bài học ở lần thứ hai — chỉ lướt qua dấu vết rồi vào thẳng Màn 2.

---

## 7. Dùng chung — bảo đảm quy tắc 70% 🟢

```
prototype/
├── index.html        ← Màn 1 · common context (dùng chung)
├── option-b.html     ← Màn 2B → Màn 3
├── option-c.html     ← Màn 2C → Màn 3
├── shared.css        ← toàn bộ token màu, typography, component
├── fixture.js        ← nội dung bài học + 7 dấu vết + text Màn 3
└── shared.js         ← header, nút reset, render dấu vết, undo
```

| Dùng chung | Khác nhau |
| --- | --- |
| Toàn bộ `shared.css` — không file nào có CSS riêng | Chỉ phần `<main>` của Màn 2 |
| Toàn bộ `fixture.js` — bài học và dấu vết chỉ tồn tại một bản | |
| Màn 1 và Màn 3 render từ `shared.js` | |

> Tách file như vậy biến *"dùng chung 70%"* thành **ràng buộc kỹ thuật** chứ không phải lời hứa: nếu B và C trông khác nhau ngoài Màn 2, nghĩa là ai đó đã viết CSS riêng — sai quy ước.

---

## 8. Prototype annotation 🟢 *(ngoài frame, tester không thấy)*

```
OPTION B — Cùng tổ chức
We expect the tester to: chọn một tập con dấu vết rồi bấm "Cùng AI tổ chức",
   đọc các nhóm đề xuất, và sửa ít nhất một thứ (heading, vị trí, hoặc xoá).
Watch for: họ chọn bao nhiêu dấu vết và bỏ cái nào; có sửa nhóm 1 không
   (nhóm cố ý gom rộng); trả lời hay bỏ qua câu hỏi làm rõ; có bấm vào link
   nguồn không; có thấy nút "Tự viết" không.
Do not explain: ý nghĩa của nhãn "Cần bạn làm rõ"; vì sao một dấu vết không
   vào nhóm nào; nút "Duyệt nhóm này" để làm gì.

OPTION C — Nháp sẵn
We expect the tester to: tạo bản nháp, đọc qua, và quyết định lưu hay sửa.
Watch for: có bấm mở link nguồn không — nếu có thì mở cái nào trước; có dừng
   lại ở hai khối gắn nhãn ⚠ không; có phát hiện dòng 3 nói ngược với bài
   không; bao nhiêu giây từ lúc thấy bản nháp tới lúc bấm Lưu; có ai bấm
   "Bỏ qua" ngay từ đầu không.
Do not explain: ý nghĩa của nhãn ⚠; rằng dòng 3 có vấn đề; nút "Tạo lại với
   phạm vi hẹp hơn" sẽ ra cái gì.
```

> ❗ Tuyệt đối không nói với tester rằng mục 3 có cài lỗi. Nếu tester hỏi *"cái này đúng không?"* → trả lời bằng câu cứu hộ: *"Theo bạn thì sao?"*

---

## 9. Giới hạn đã biết — khai báo trước 🟢

| Giới hạn | Hệ quả khi đọc kết quả |
| --- | --- |
| Learner **tự đánh dấu**, nhưng trên một bài đọc ngắn trong ~2 phút | Không giống nhịp học thật. Số lượng và chất lượng dấu vết có thể thấp hơn đời thực. |
| Dấu vết **giữ nguyên** khi sang option thứ hai | Giữ được so sánh công bằng, nhưng ở lượt hai learner đã quen bài — vì vậy phải **đảo thứ tự** giữa hai tester (§6.1). |
| Nếu learner không đánh dấu gì | Option B rỗng, chỉ còn lối *"Tự viết"*. Option C vẫn chạy vì khối A lấy từ nội dung bài. Ghi nhận, **không** coi là tester làm sai. |
| AI output là **canned, cố định** | Không đo được chất lượng model thật. Chỉ đo **cách learner phản ứng** với một output có lỗi đã biết. |
| Lỗi ở mục 3 là **cài sẵn** | Không kết luận được *"AI hay sai kiểu này"*. Chỉ kết luận được *"learner có bắt được lỗi dạng này không"*. |
| **2 tester** | Không có pattern thống kê. Mọi phát hiện đi vào *Next Change* và *Still Unproven*. |
| Không có option **user-led / no-inference** | Không có đối chứng cho `H_C`. Nếu tester đòi tự viết → ghi *Still Unproven*, **không** đọc thành "thích B hơn C". *(xem `three-option-design-sheet.md` §2.7)* |

---

## 10. Đối chiếu Definition of testable — `docs/6.md`

| Yêu cầu | Đáp ứng ở đâu |
| --- | --- |
| Tester tự mở và thao tác được cả B/C | §7 — ba file HTML độc lập, mở bằng trình duyệt |
| Cả hai bắt đầu từ **cùng context và task** | §1, §2.2 — cùng `index.html`, cùng 7 dấu vết |
| Không cần facilitator narrate | §3.1, §4.3 — mỗi option có expectation banner tự giải thích |
| Nội dung đủ thật để ra quyết định | §1 — bài học viết đầy đủ, có mệnh đề đánh đổi thật |
| Mỗi option thể hiện **điểm lấy lại control** | §3.4 (chuyển sang tự viết) · §4.4 (huỷ toàn bộ / tạo lại hẹp hơn) |
| Có **đường reset** về common context | §5.2 |

**→ Đủ điều kiện vào GATE 4 sau khi build.**

---

## 11. Những chỗ Gia Huy nên liếc qua 🔸

Không chặn build — cứ build, nếu Gia Huy muốn đổi thì sửa `fixture.js` là xong.

1. **Chủ đề bài học** (§1) — nếu Gia Huy muốn chủ đề khác, chỉ cần giữ nguyên cấu trúc *4 mục, mục 3 có mệnh đề đánh đổi*.
2. **Chỗ làm mờ ở dòng 3 của bản nháp C** (§4.2) — đây là quyết định ảnh hưởng trực tiếp tới option của Gia Huy. Nguyên tắc: C phải **đúng ở 3/4**, chỗ sai phải **đọc trôi chảy**, không được ngớ ngẩn.
3. **Nhóm 1 của B cố ý gom rộng** (§3.2) — để learner có cái thật để sửa. Nếu thấy quá lộ thì gom chặt lại, nhưng khi đó B mất một điểm quan sát.
4. **Đảo thứ tự test** (§6.1) — cần Gia Huy đồng ý chạy **C trước, B sau** ở phiên của mình.
