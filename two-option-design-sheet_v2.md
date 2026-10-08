# Two-option Design Sheet (B/C)

## Phạm vi và nguyên tắc

Hai option B và C cùng giải một task: sau một lượt học/research, learner tạo và lưu một learning note đủ ngữ cảnh để dùng lại. Đây là hai **solution hypotheses**, không phải hai phiên bản giao diện và chưa được tester xác nhận.

## Common Context / Comparison Contract

| Thành phần | Dùng chung cho hai option |
| --- | --- |
| Target user | Learner vừa hoàn thành một lượt học/research và có các dấu vết muốn giữ lại. |
| Situation | Cuối lượt học/research, trước khi learner rời nội dung. |
| Task | Tạo và lưu một learning note đủ ngữ cảnh để có thể tìm và sử dụng về sau. |
| Desired outcome | Lưu đúng phần learner cho là quan trọng, có đường về nguồn và learner quyết định nội dung cuối. |
| Data fixture | Một bài học mẫu; cùng highlights, điểm “Chưa hiểu”, câu hỏi, ghi chú ngắn, đoạn nguồn, chủ đề và ngày học. |

## Option B — Guided Co-creation

**Solution hypothesis:** Nếu learner chủ động chọn phạm vi rồi AI đề xuất cách nhóm và cấu trúc, learner có thể giảm công tổ chức mà không mất vai trò chọn và diễn đạt điều quan trọng.

- **Mechanism:** learner chọn các dấu vết; AI gom nhóm, đề xuất heading và hỏi làm rõ ở phần thiếu ngữ cảnh.
- **User:** chọn phạm vi, trả lời/ bỏ qua câu hỏi làm rõ, sửa, di chuyển hoặc xóa đề xuất rồi xác nhận.
- **AI:** chỉ xử lý phần đã chọn, đề xuất cấu trúc và hiển thị nguồn của từng nhóm.
- **Trigger:** learner chọn “Cùng AI tổ chức”.
- **Quyền quyết định:** learner phê duyệt từng nhóm và bản cuối.
- **Trade-off:** cân bằng giữa công sức và agency; đổi lại có thêm lượt tương tác.

## Option C — AI Draft, Human Review

**Solution hypothesis:** Nếu AI tạo bản nháp ngay khi hoàn thành bài học và cho phép kiểm tra nguồn, learner có thể lưu note nhanh hơn mà vẫn chặn được sai sót trước khi lưu.

- **Mechanism:** AI tạo bản note nháp từ nội dung bài và toàn bộ dấu vết học tập, kèm trích dẫn nguồn và cảnh báo phần không chắc.
- **User:** review, mở nguồn đối chiếu, sửa/xóa phần sai, xác nhận lưu hoặc hủy.
- **AI:** chọn lọc, nhóm và soạn bản nháp ban đầu; không tự lưu khi chưa được xác nhận.
- **Trigger:** hoàn thành bài học; hệ thống đề nghị tạo nháp và cho phép bỏ qua.
- **Quyền quyết định:** AI đề xuất, learner giữ quyết định lưu cuối cùng.
- **Trade-off:** nhanh và ít thao tác; đổi lại có nguy cơ learner duyệt qua loa hoặc AI làm mất sắc thái.

## Bảng so sánh cơ chế

| Thành phần | Option B | Option C |
| --- | --- | --- |
| Solution mechanism | AI đề xuất cấu trúc từ phần learner chọn | AI tự tạo bản nháp để learner duyệt |
| User làm gì? | Chọn phạm vi, cộng tác, chỉnh và xác nhận | Review, đối chiếu, sửa và xác nhận/hủy |
| AI làm gì? | Nhóm, đề xuất và hỏi làm rõ | Chọn lọc, nhóm và soạn nháp |
| Trigger | User chủ động gửi phạm vi | Hoàn thành bài học; user có thể bỏ qua |
| Trade-off | Cân bằng / nhiều lượt tương tác | Tốc độ cao / rủi ro automation cao |

## Distance Check

- **B khác C vì:** B là co-creation có phạm vi do learner khởi tạo; C là bản nháp do AI chủ động tạo từ toàn bộ dấu vết sau khi bài học kết thúc.

## Chặng 3 – Human–AI Decision Table

| Human–AI decision | Option B — Guided Co-creation | Option C — AI Draft, Human Review |
| --- | --- | --- |
| User làm gì? AI làm gì? | User chọn dấu vết; AI nhóm và hỏi làm rõ; user chỉnh và xác nhận. | AI tạo bản nháp; user đối chiếu, sửa và quyết định lưu/hủy. |
| AI Act / Ask / Don't Act? | **Ask → Act.** Chỉ xử lý phạm vi user chọn; hỏi thay vì tự điền khi thiếu ngữ cảnh. | **Act → Ask for confirmation.** Được tạo bản nháp có thể đảo ngược; không được tự lưu. |
| User hiểu capability/limit bằng gì? | Thông báo trước khi chạy: AI chỉ tổ chức phần được chọn và có thể nhóm sai/bỏ sót ngữ cảnh. Kết quả được gọi là “đề xuất”. | Thông báo trước khi tạo: AI dùng nội dung bài và dấu vết để tạo “bản nháp cần kiểm tra”. |
| Evidence/uncertainty | Mỗi nhóm có link về dấu vết nguồn; chỗ thiếu có nhãn “Cần bạn làm rõ”. | Mỗi đoạn có link nguồn; phần suy luận hoặc nguồn xung đột được gắn nhãn cảnh báo. |
| Control & recovery | Bỏ chọn nguồn; sửa heading; kéo thả; xóa; undo; chuyển sang tự viết; giữ nguyên dữ liệu gốc. | Preview; sửa/xóa từng đoạn; hủy toàn bộ; tạo lại với phạm vi hẹp hơn; quay về dấu vết gốc. |
| Feedback/data | Chỉnh sửa chỉ áp dụng cho note hiện tại, không mặc định dùng để huấn luyện. | Feedback tạo lại chỉ áp dụng cho phiên hiện tại; user có thể hủy và xóa bản nháp. |

### Expectation

- Cả hai option đều nói rõ AI tạo **đề xuất/bản nháp**, không phải nội dung đúng tuyệt đối.
- Option B chỉ dùng phần user đã chọn; Option C dùng toàn bộ dấu vết của bài học hiện tại.
- Hệ thống nói rõ AI có thể nhóm sai, bỏ sót hoặc suy diễn ngoài ý learner.

### Role and Agency

- **B:** learner khởi tạo và đặt phạm vi; AI hỗ trợ tổ chức; learner quyết định từng nhóm và bản cuối.
- **C:** AI chủ động tạo nháp sau trigger; learner giữ quyền bỏ qua, sửa, hủy và xác nhận lưu.
- Không option nào tự thay đổi hoặc xóa dấu vết gốc.

### Evidence and Uncertainty

- Nội dung do AI tạo luôn có đường về highlight, câu hỏi, ghi chú hoặc đoạn bài học gốc.
- Phần không đủ nguồn hoặc cần suy luận được đánh dấu thay vì trình bày như fact.
- Khi các nguồn mâu thuẫn, AI không tự chọn một ý duy nhất mà yêu cầu learner kiểm tra.

### Control and Recovery

- Có preview trước khi lưu và không autosave bản AI.
- User có thể sửa, xóa, undo, hủy toàn bộ hoặc quay lại dữ liệu gốc.
- Nếu AI tạo sai, user vẫn tiếp tục task bằng cách thu hẹp phạm vi hoặc chuyển sang chỉnh thủ công.

## Giả định cần kiểm tra ở các chặng sau

- Câu hỏi làm rõ và đề xuất nhóm của B có hỗ trợ hay làm ngắt mạch tổng hợp.
- Người dùng C có thật sự kiểm tra nguồn và chỉnh lỗi, hay chỉ xác nhận bản nháp.
- Cả hai cách có giữ đủ ngữ cảnh để dùng lại về sau hay không.
- Việc tự tổng hợp là phần learner muốn giảm hay là hoạt động học cần được bảo toàn.

## Link board / prototype

- Common context: [`prototype/index.html`](prototype/index.html)
- Option B — Cùng tổ chức: [`prototype/option-b.html`](prototype/option-b.html)
- Option C — Nháp sẵn: [`prototype/option-c.html`](prototype/option-c.html)

Sau phiên test hiện có, nhóm chốt tiếp tục Option B cho iteration tiếp theo. Chi tiết: `prototype-feedback-note.md` và `group-feedback-synthesis.md`.
