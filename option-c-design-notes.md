# Option C – AI Draft, Human Review

## Ownership

- **Người phụ trách chính:** Lưu Mạnh Hùng
- **MHV:** 2A202602705
- **Vai trò trong nhóm:** thiết kế và build Option C; cùng nhóm dùng chung hypothesis, context, content fixture và tiêu chí so sánh B/C.

## Solution hypothesis

Nếu AI tạo một bản nháp có cấu trúc ngay sau khi learner hoàn thành bài học, đồng thời hiển thị nguồn và phần không chắc để learner kiểm tra trước khi lưu, learner có thể giảm công tổng hợp mà vẫn giữ quyền quyết định nội dung cuối.

Đây là giả thuyết cần test. Chưa có evidence cho thấy learner muốn mức automation này hoặc sẽ review bản nháp đủ kỹ.

## Critical interaction

```text
Hoàn thành bài học
        ↓
AI đề nghị tạo nháp và nói rõ dữ liệu/giới hạn
        ↓
Learner đồng ý hoặc bỏ qua
        ↓
AI hiển thị bản nháp + nguồn + cảnh báo uncertainty
        ↓
Learner sửa / xóa / tạo lại / hủy / xác nhận lưu
```

## Ba trạng thái prototype

### 1. Context và expectation

- Cho biết AI sẽ dùng nội dung bài học và cả bốn dấu vết.
- Nêu rõ output là bản nháp có thể sai, bỏ sót hoặc suy luận ngoài ý learner.
- Cho phép “Bỏ qua”; không mặc định chạy AI.

### 2. Review và recovery

- Hiển thị note dưới dạng các block có thể chỉnh sửa.
- Mỗi block có đường về nguồn.
- Câu “Agent luôn phải lập lại toàn bộ kế hoạch khi gặp lỗi” được đánh dấu **AI suy luận** vì nguồn không khẳng định “luôn luôn”. Đây là lỗi có chủ đích để test hành vi review, không phải kiến thức được nhóm xác nhận.
- Learner có thể sửa/xóa, tạo lại với phạm vi hẹp hơn hoặc hủy toàn bộ.

### 3. User decision

- Chỉ lưu sau thao tác “Xác nhận và lưu”.
- Sau khi lưu, hệ thống nói rõ dấu vết gốc vẫn được giữ nguyên.
- Có đường reset để thử phương án còn lại.

## Human–AI decisions

| Quyết định | Thiết kế Option C | Lý do |
| --- | --- | --- |
| Trigger | Kết thúc bài học → hệ thống đề nghị, learner chọn tạo hoặc bỏ qua | Giữ expectation và tránh automation bất ngờ. |
| AI action | Tạo bản nháp có thể đảo ngược | Giảm công ban đầu nhưng chưa tạo hậu quả vĩnh viễn. |
| Final authority | Learner xác nhận trước khi lưu | Note sai có thể làm learner giữ hoặc dùng lại kiến thức sai. |
| Evidence | Link nguồn cho từng block | Giúp phát hiện AI chọn sai hoặc suy luận quá mức. |
| Uncertainty | Nhãn “AI suy luận” và mô tả vấn đề cụ thể | Tránh chỉ dùng một confidence score khó hành động. |
| Recovery | Sửa, xóa, tạo lại phạm vi hẹp, hủy và quay về dữ liệu gốc | Cho learner tiếp tục task mà không bị khóa vào output AI. |
| Data/feedback | Chỉ dùng dữ liệu bài hiện tại; phản hồi tạo lại chỉ tác động phiên hiện tại | Giới hạn phạm vi và không mặc định học từ dữ liệu cá nhân. |

## Prototype annotation – không đọc cho tester

**OPTION C**

- **We expect the tester to:** hiểu đây là bản nháp; xem ít nhất một nguồn hoặc cảnh báo; phát hiện/sửa câu suy luận quá mức; chủ động xác nhận hoặc hủy.
- **Watch for:** tester bấm tạo nháp ngay hay đọc giới hạn; đọc hay bỏ qua nhãn “AI suy luận”; chỉnh trực tiếp hay tìm đường tạo lại/hủy; có hiểu nội dung chỉ được lưu sau xác nhận không.
- **Do not explain:** câu nào được cài lỗi, nhãn uncertainty có nghĩa gì, nút xem nguồn ở đâu hoặc hành động nào được xem là đúng.

## Acceptance criteria trước khi test

- [x] Tester mở trực tiếp được Option C.
- [x] Dữ liệu đầu vào giống Option B.
- [x] Capability và limit xuất hiện trước khi AI chạy.
- [x] Output AI được gọi là “bản nháp”, không phải kết quả đúng.
- [x] Có ít nhất một uncertainty cụ thể để tester xử lý.
- [x] Có nguồn cho từng block nội dung.
- [x] Có edit, delete/discard, regenerate và confirm.
- [x] Không autosave; dữ liệu gốc không bị thay đổi.
- [x] Có reset path.
- [x] Một người không tham gia build đã thử cả B/C trong FB1; tuy nhiên cần facilitator giải thích màn hình, vì vậy tiêu chí “không cần hướng dẫn” **chưa đạt** và đã được đưa vào Next Change.

Mục cuối chỉ được đánh dấu sau dry run hoặc phiên test thật.

## Outcome task dành cho tester

“Bạn vừa hoàn thành bài học mẫu và có bốn dấu vết muốn giữ. Hãy dùng Option C để tạo một ghi chú mà bạn sẵn sàng lưu và dùng lại sau này.”

## Điều Option C cần học

1. Learner có hiểu và chấp nhận việc AI chủ động tạo bản nháp không?
2. Learner có kiểm tra nguồn/cảnh báo hay chỉ đọc lướt rồi lưu?
3. Các đường recovery có đủ dễ tìm khi AI suy luận sai không?
4. Tốc độ có đáng để đánh đổi nguy cơ automation bias không?
5. Việc AI tạo bản đầu có làm mất giá trị của quá trình tự tổng hợp không?
