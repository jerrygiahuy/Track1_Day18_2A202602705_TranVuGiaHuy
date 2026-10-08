# Lab 18 — Case B: AI Notes — Personal Learning Notes

**Day 18 — Design the Experiment · Human-Centered AI Design**

## 1. Thông tin cá nhân và nhóm

| Trường | Nội dung |
| --- | --- |
| MHV | **2A202602705** |
| Họ tên | **Trần Vũ Gia Huy** |
| Nhóm | **Double Hờ** |
| Thành viên | Trần Vũ Gia Huy — **Option B** · Lưu Mạnh Hùng — **Option C** |
| Case | **Case B — AI Notes: Personal Learning Notes** |
| Prototype | HTML/CSS/JavaScript tĩnh trong `prototype/` |

Nhóm có hai thành viên nên thực hiện hai solution options B/C. Evidence Day 17 chỉ có một Practice Note; Barrier và Consequence vẫn là giả thuyết. Nhóm có hai Feedback Notes, trong đó FB2 ít trường observation hơn FB1; preference 2/2 không được diễn giải thành validation.

## 2. Hypothesis Problem và evidence

> **Khi** vừa học hoặc research một chủ đề và muốn giữ lại kiến thức để dùng sau, **learner** có thể gặp khó khăn trong việc **tìm lại nội dung cùng ngữ cảnh**, vì **cách lưu hiện tại có thể không khớp với cách họ tìm**, dẫn đến **phải dò hoặc research lại và làm chậm việc đang cần hoàn thành**.

| Thành phần | Evidence hiện có | Mức chắc chắn |
| --- | --- | --- |
| Situation — vừa học/research xong, có nội dung muốn giữ | P01: learner đặt câu hỏi, đào sâu và đúc kết | Trung bình |
| Job — giữ và tìm lại kiến thức cùng ngữ cảnh | P01: tạo infographic và chọn nơi “dễ tìm” | Trung bình |
| Barrier — cách lưu không khớp cách tìm | Chưa có evidence trực tiếp | Thấp — giả thuyết |
| Consequence — phải dò/research lại, chậm việc | Chưa có evidence trực tiếp | Thấp — giả thuyết |

Evidence làm giả thuyết yếu đi: learner nói Facebook là nơi “dễ tìm nhất”, chưa kể một lần tìm thất bại và chưa xác nhận tự tổng hợp là pain. Nguồn: [day17-input-pack.md](day17-input-pack.md).

## 3. Hai solution options

Cả hai dùng chung target user, situation, outcome task, bài học, dấu vết và tiêu chí thành công; khác nhau ở critical interaction.

| | **Option B — Cùng tổ chức** (Gia Huy) | **Option C — Nháp sẵn** (Mạnh Hùng) |
| --- | --- | --- |
| Cơ chế | Learner chọn dấu vết; AI gom nhóm, hỏi làm rõ khi cần; learner duyệt từng nhóm | AI dựng nháp từ toàn bộ dấu vết; learner kiểm tra, sửa, lưu hoặc hủy |
| AI Act/Ask | **Ask → Act** | **Act → Ask for confirmation** |
| Quyền kiểm soát | Chọn phạm vi, sửa nhóm, tự viết, không autosave | Xem nguồn, sửa/xóa, tạo lại hẹp hơn, hủy, không autosave |
| Lợi ích kỳ vọng | Giữ agency và ngữ cảnh tốt hơn | Nhanh, ít thao tác hơn |
| Rủi ro | Nhiều bước, có thể ngắt mạch | Duyệt qua loa, bỏ cảnh báo hoặc mất sắc thái |

Guardrails chung: output là “đề xuất/bản nháp”; nội dung AI có đường về nguồn; nguồn mâu thuẫn thì AI không tự chọn; dấu vết gốc không bị sửa/xóa; learner quyết định nội dung cuối. Xem [three-option-design-sheet.md](three-option-design-sheet.md) và [two-option-design-sheet_v2.md](two-option-design-sheet_v2.md).

## 4. Prototype

Mở [prototype/index.html](prototype/index.html) để vào common context, hoặc mở trực tiếp:

- [Option B — Cùng tổ chức](prototype/option-b.html)
- [Option C — Nháp sẵn](prototype/option-c.html)

Prototype dùng canned AI output, không gọi model/API thật. Hai hướng dùng chung fixture, style, component và màn lưu. Xem [dry-run-report.md](dry-run-report.md) và [prototype-link.md](prototype-link.md).

## 5. Kết quả test và quyết định

Nhóm có hai Feedback Notes: FB1 của **Dương Quốc Khánh**, ngày **05/10/2026**, thứ tự **B → C**, facilitator **Lưu Mạnh Hùng**; và FB2 do **Trần Vũ Gia Huy** ghi với tester ẩn danh. FB2 không ghi nhận ngày, thứ tự hoặc relevant context nên các trường này được giữ là unknown.

- Tester dừng khoảng 3 phút ở B và 2 phút ở C khi vào Sổ ghi chú rồi yêu cầu giải thích.
- Tester mở nguồn nhưng khoảng 3 giây sau đã lưu; cảnh báo ở C bị bỏ qua.
- B giữ mệnh đề đánh đổi trong nguồn; C làm mất dù tester nhận ra điểm bất thường.
- Tester dùng đường “Tự viết, không cần AI”, nhưng khó tìm đường bắt đầu lại.
- Tester chọn **B** vì thao tác đánh dấu, tổ chức và duyệt từng note trực quan, dễ hiểu hơn.
- Ở FB2, tester đọc/lướt vài slide rồi bấm tạo ghi chú, do dự tại bước chỉnh nội dung và chọn **B** vì trực quan, dễ có bộ ghi chú đầy đủ nội dung quan trọng.

### Quyết định của nhóm

Nhóm **chốt tiếp tục Option B — Cùng tổ chức**. Cả hai tester chọn B với lý do liên quan tới tính trực quan và tổ chức nội dung; FB1 còn cho thấy B giữ ngữ cảnh tốt hơn trong fixture và C có rủi ro bị duyệt qua loa. Option C được giữ làm phương án đối chiếu, không phát triển thành hướng chính.

### Next Change cho B

1. Thêm một dòng mô tả rõ màn Sổ ghi chú dùng để làm gì.
2. Đặt nút **Thoát / Quay lại bài học** ở vị trí cố định, dễ thấy.
3. Giữ cơ chế learner chọn phạm vi và duyệt từng nhóm.
4. Làm rõ phần AI đề xuất và phần learner cần kiểm tra.
5. Chỉ hỏi làm rõ khi thật sự thiếu ngữ cảnh.

Chi tiết: [FB1](prototype-feedback-note.md), [FB2](prototype-feedback-note-gia-huy.md) và [group-feedback-synthesis.md](group-feedback-synthesis.md).

## 6. Still Unproven

- Hai tester cùng chọn B, nhưng FB2 thiếu thứ tự nên chưa loại trừ order effect.
- Chưa chứng minh learner có pain đủ lớn hoặc lặp lại.
- Chưa đo khả năng tìm lại note sau nhiều ngày/tháng.
- B hỏi 0 câu làm rõ trong phiên nên cơ chế này chưa được kiểm chứng.
- Output là canned; chưa đo chất lượng AI thật.

Kết luận hợp lệ: **nhóm chọn B làm hướng iteration tiếp theo dựa trên evidence hiện có**; không kết luận solution đã validated.

## 7. Đóng góp

### Trần Vũ Gia Huy

- Phụ trách **Option B — Cùng tổ chức** và cơ chế chọn phạm vi → AI tổ chức → learner duyệt.
- Xây dựng comparison contract, Human–AI decisions và guardrails về agency, evidence, recovery.
- Hợp nhất hai phương án vào một prototype dùng chung và chốt hướng B sau test.

### Lưu Mạnh Hùng

- Phụ trách **Option C — Nháp sẵn**, flow tạo nháp → kiểm tra → sửa/tạo lại/hủy/lưu.
- Chuẩn bị fixture, test kit, dry-run và prototype annotation.
- Facilitate phiên test và ghi observation theo OBSERVED → INTERPRETED → DECIDED → STILL UNPROVEN.

## 8. AI Support Log

AI hỗ trợ cấu trúc tài liệu, rà consistency, dữ liệu/prototype mẫu và kiểm tra kỹ thuật; không tạo quote, observation hoặc feedback giả. Xem [ai-support-log.md](ai-support-log.md).
