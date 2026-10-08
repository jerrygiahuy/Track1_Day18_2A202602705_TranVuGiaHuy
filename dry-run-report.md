# Dry-run Report — diễn tập prototype trước phiên test

**Ngày:** 06/10/2026 · **Người chạy:** Lưu Mạnh Hùng (nhờ Claude Code lái tự động)
**Mục đích:** bắt lỗi prototype **trước khi** tester gặp, để phiên 20 phút không mất thời gian vì sự cố kỹ thuật.

---

> ## ⚠️ ĐÂY KHÔNG PHẢI EVIDENCE TỪ TESTER
>
> Mọi dòng trong file này là **hành vi của phần mềm**, không phải hành vi của người.
> Không một dòng nào được chép sang `prototype-feedback-note.md` hay `group-feedback-synthesis.md`.
>
> Đây là **kiểm thử kỹ thuật** (prototype QA), nằm trong phạm vi *"code giao diện / boilerplate cho prototype"* mà `docs/10.md` cho phép dùng AI.
> Không có tester nào đã chạy phiên test tính tới thời điểm này.

---

## 1. Cách chạy

```bash
cd prototype && python -m http.server 8777
node dryrun.js        # puppeteer lái Chromium headless
```

Kịch bản đi đúng đường tester sẽ đi: **Màn 1 → tự đánh dấu 4 chỗ → Option B → reset → Option C → lối thoát → trường hợp 0 dấu vết → `?fresh=1`**.
41 điểm kiểm. Ảnh chụp từng bước: `prototype/screenshots/`.

**Dấu vết dùng trong lần diễn tập:** 1 Highlight (mục 1) · 1 *Chưa hiểu* (mục 3) · 1 Câu hỏi (mục 3) · 1 Ghi chú chung không gắn mục.

---

## 2. Kết quả — 41/41 đạt sau khi sửa

| Nhóm | Điểm kiểm | Kết quả |
| --- | --- | --- |
| **Màn 1** | 3 đường vào Sổ ghi chú đều trỏ đúng option · nút reset có mặt · dòng *"chưa đánh dấu gì — vẫn đi tiếp được"* · tạo được đủ 4 loại dấu vết | ✅ |
| **Option B** | liệt kê đủ 4 dấu vết để chọn phạm vi · chặn nút chạy khi chọn 0 · lối thoát *Tự viết* hiện ngay · gom nhóm từ dấu vết thật · **chặn Lưu tới khi duyệt hết nhóm** · sửa tiêu đề nhóm giữ được · Hoàn tác sống · Màn 3 có đường về nguồn | ✅ |
| **Reset** | về Màn 1, **4 dấu vết còn nguyên**, tô lại đủ 3/3 đoạn | ✅ *(sau khi sửa — xem §3)* |
| **Option C** | ăn đúng 4 dấu vết của lượt đầu · bỏ qua được lời đề nghị · bản nháp 4 khối · 3 khối gắn nhãn ⚠ · 7 link nguồn · *tạo lại hẹp hơn* cho 3 khối và tự ẩn sau khi dùng · xoá khối còn đường khôi phục | ✅ |
| **Phép thử cài sẵn** | dòng 3 **vẫn còn** trong bản nháp · bản nháp **không** nhắc chữ *"độ phủ"* | ✅ còn nguyên |
| **Lối thoát** | B *Tự viết* và C *Huỷ bản nháp* đều về ô soạn trắng, **không xoá dấu vết gốc** | ✅ |
| **0 dấu vết** | B rỗng vẫn còn lối *Tự viết* (tester không bị kẹt) · C vẫn dựng được 1 khối | ✅ |
| **`?fresh=1`** | xoá sạch dấu vết — dùng được khi đổi tester | ✅ |

Không có lỗi JavaScript, không có request hỏng (ngoài `favicon.ico`, vô hại).

---

## 3. Một lỗi đã tìm thấy và đã sửa

### 🔴 Dấu vết *"Chưa hiểu"* biến mất ở lượt option thứ hai

| | |
| --- | --- |
| **Triệu chứng** | Tạo 3 đoạn đánh dấu ở lượt đầu → bấm *"Bắt đầu lại"* → chỉ **2/3** đoạn được tô lại trên bài. Dấu vết vẫn còn trong danh sách, nhưng **không còn thấy trên nội dung bài**. |
| **Nguyên nhân** | `repaintAll()` tìm bằng `node.textContent.indexOf(anchor)`. Nhưng `anchor` là chuỗi do `Selection.toString()` trả về — chuỗi này **đã gộp khoảng trắng**, trong khi `textContent` còn nguyên `\n` và thụt lề của source. Mọi đoạn bôi đen **vắt qua một chỗ xuống dòng** đều không khớp. |
| **Vì sao nghiêm trọng với bài test** | Lượt option thứ hai tester nhìn thấy **bài sạch hơn lượt đầu** — mất đúng chỗ họ đánh dấu là *"chưa hiểu"*. Điều này phá **Comparison Contract**: B và C không còn vào cùng một trạng thái màn hình, và `prototype-link.md` đang hứa là có. |
| **Đã sửa** | Thêm `findAnchorRange()` trong `prototype/index.html` — tìm trên bản **đã gộp khoảng trắng** rồi chiếu ngược về offset thật. Diễn tập lại: **3/3** đoạn được tô lại. |

> Lỗi này **không thể thấy bằng mắt** khi diễn tập tay — nó chỉ xuất hiện với đoạn bôi đen vắt qua chỗ xuống dòng, và chỉ ở lượt thứ hai. Nếu không bắt trước, nó sẽ lặng lẽ làm hỏng **cả hai** phiên test.

---

## 4. Một phát hiện KHÔNG sửa — facilitator phải biết trước

### Option B có thể **không hỏi câu làm rõ nào**

`bClarify()` cố ý chỉ hỏi chỗ **AI thật sự không biết**. Hai điều kiện kích hoạt:

| Câu | Kích hoạt khi |
| --- | --- |
| `c1` | có một điểm *"Chưa hiểu"* mà **trong cùng mục đó không có** câu hỏi hay ghi chú nào |
| `c2` | có một **ghi chú chung không gắn mục nào** nằm trong phạm vi learner chọn |

Đã kiểm ba cách đánh dấu:

| Tester đánh dấu kiểu | Số câu hỏi làm rõ |
| --- | --- |
| *Chưa hiểu* + Câu hỏi **cùng một mục**, không chọn ghi chú chung | **0** |
| *Chưa hiểu* ở một mục + ghi chú chung, chọn hết | **2** |
| Chỉ toàn Highlight | **0** — và chỉ gom được **1 nhóm** |

👉 **Hệ quả:** có kiểu đánh dấu khiến **bước "Ask" của Option B không xuất hiện**, tester chỉ thấy *gom nhóm → duyệt từng nhóm*.

**Quyết định: không sửa.** Thêm một câu hỏi "cho có" sẽ phá đúng nguyên tắc thiết kế của B — *AI chỉ hỏi khi thật sự thiếu ngữ cảnh*, đã chốt ở `three-option-design-sheet.md` §3.1. Một câu hỏi giả còn làm hỏng chính giả định 1 đang đi kiểm.

**Thay vào đó, trong phiên:**

- **Không nhắc, không gợi ý** tester đánh dấu kiểu nào để "cho ra" câu hỏi làm rõ
- Nếu B không hỏi gì → **ghi lại đúng như vậy**. Đó là một observation hợp lệ, không phải sự cố
- Ghi vào Feedback Note §1.2: *"B hỏi 0 câu làm rõ vì tester đánh dấu kiểu …"* — rồi nêu ở Still Unproven rằng **phiên này không kiểm được giả định 1**
- Đã bổ sung cảnh báo này vào `prototype/ANNOTATION.md`

---

## 5. Giới hạn của chính bản diễn tập này

| Giới hạn | Nghĩa là |
| --- | --- |
| Máy lái, không phải người | Chỉ chứng minh **luồng chạy được**, không nói gì về việc **người có hiểu** hay không |
| Chọn text bằng script | Vùng bôi đen cắt giữa từ (*"mod"* thay vì *"model"*) — người thật chọn gọn hơn |
| Chỉ một bộ dấu vết | Tester khác sẽ tạo bộ khác, có thể lộ nhánh chưa ai đi qua |
| Không đo được điều quan trọng nhất | **Tester có bắt được dòng 3 nói ngược với bài không** — chỉ người thật mới trả lời được |

> Dry-run làm được đúng một việc: đảm bảo khi tester gặp lỗi, đó là **lỗi thiết kế đáng ghi**, không phải **lỗi kỹ thuật làm mất thời gian**.
