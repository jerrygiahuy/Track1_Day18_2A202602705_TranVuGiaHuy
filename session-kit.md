# Session Kit — ba thứ cầm theo khi test

Bộ dùng kèm `test-script.md`. Ba phần: **mời tester** · **cue card cầm tay** · **bản ghi tay thô**.

---

# A. Tin nhắn mời tester

> Gửi cho **người ngoài nhóm**. Ưu tiên người có relevant context *(gần đây có học/tìm hiểu gì đó rồi phải tìm lại)* — nhưng **không nói trước** điều này, kẻo họ tự "chuẩn bị" câu trả lời.

### A1. Bản gửi riêng

```
Chào Khánh, mình đang làm bài môn Human-Centered AI Design.
Mình cần 20 phút để bạn thử hai bản thiết kế trên máy mình và nói to
suy nghĩ trong lúc dùng.

Không cần chuẩn bị gì, không kiểm tra kiến thức của bạn — mình đang
kiểm tra thiết kế của tụi mình. Bạn thấy chỗ nào khó hiểu là mình có
dữ liệu, nên cứ thoải mái.

Bạn rảnh [thời gian 1] hay [thời gian 2]?
```

### A2. Bản đăng nhóm / lớp

```
Cần 1 bạn giúp 20 phút thử giao diện cho bài Day 18 (Human-Centered AI Design).
Bạn chỉ cần dùng thử và nói to suy nghĩ. Không chuẩn bị gì, không phải dân thiết kế.
Mình ngồi cạnh ghi chép, không giải thích gì cả — đó là chủ đích.
Ai giúp được nhắn mình nhé.
```

### A3. Xin phép ghi âm *(nói trước khi bắt đầu, không nhắn trước)*

```
Mình ghi âm phần tiếng để lát nghe lại cho đúng, không quay màn hình,
không quay mặt bạn, file chỉ mình nghe và xoá sau khi nộp bài. Bạn đồng ý không?
Không đồng ý cũng không sao, mình ghi tay.
```

> ❌ **Không nói trước** cho tester: có mấy option · đâu là option của ai · prototype có lỗi cài sẵn · nhóm mong thấy gì.

---

# B. Cue card — in một mặt, cầm trong tay suốt phiên

```
┌────────────────────────────────────────────────────────────────┐
│ TRƯỚC KHI TESTER NGỒI VÀO                                      │
│  □ URL đúng option đầu + &fresh=1   □ đóng ANNOTATION.md        │
│  □ mở sẵn bản ghi tay  □ đồng hồ bấm giây  □ xin phép ghi âm    │
└────────────────────────────────────────────────────────────────┘

0–2'  OPENING — đọc nguyên văn
      "Tụi mình đang thử HAI cách thiết kế, không kiểm tra bạn.
       Không có đúng hay sai — chỗ nào khó hiểu là lỗi của thiết kế.
       Bạn cứ nói to suy nghĩ. Mình sẽ ngồi im và không giải thích gì."

      CONTEXT — 1 câu, tối đa 2 phút
      "Gần đây bạn có từng học hoặc tìm hiểu một chủ đề nào đó, rồi sau
       này cần dùng lại mà phải đi tìm lại nội dung đã học không?
       Kể nhanh lần gần nhất giúp mình."

2–8'  OPTION 1 — đọc TASK rồi IM
      "Bạn vừa học xong bài này. Hãy dùng màn hình trước mặt để lưu lại
       phần bạn cho là quan trọng, sao cho một tháng sau bạn mở ra vẫn
       hiểu được và biết nó đến từ đâu trong bài. Làm theo cách bạn
       thấy tự nhiên nhất."

8–9'  "Bắt đầu lại" ở thanh dưới → đổi ?opt= trên URL → KHÔNG giải thích

9–14' OPTION 2 — đọc LẠI ĐÚNG CÂU TASK + "Vẫn việc đó, màn hình khác một chút."

14–18' SO SÁNH
      1. "Bạn chọn cách thứ nhất hay cách thứ hai? Vì sao?"
      2. "Bạn muốn tự làm phần nào, giao AI phần nào?"
      3. "Điều gì ở cách bạn chọn khiến bạn CHƯA thoải mái?"
         (nếu 'ổn hết' → "Phải bỏ một thứ, bạn bỏ gì?" rồi DỪNG)

18–20' Điền Feedback Note NGAY, tester còn ngồi đó

┌─ BA CÂU DUY NHẤT ĐƯỢC NÓI KHI TESTER KẸT ──────────────────────┐
│  "Bạn cứ nói to suy nghĩ của mình nhé."                         │
│  "Bạn sẽ làm gì tiếp theo?"                                     │
│  "Theo bạn, nó nên hoạt động như thế nào?"                      │
└────────────────────────────────────────────────────────────────┘

┌─ TUYỆT ĐỐI KHÔNG ──────────────────────────────────────────────┐
│  ✗ chạm chuột, trỏ tay vào màn hình                             │
│  ✗ giải thích icon, nhãn ⚠, nút "Duyệt nhóm này"                │
│  ✗ lấp im lặng  — đếm thầm tới 15                               │
│  ✗ hỏi "Bạn có thích không?"                                    │
│  ✗ nhắc tester đánh dấu, hay đánh dấu bao nhiêu chỗ             │
│  ✗ nói dòng nào trong bản nháp có vấn đề                        │
│    tester hỏi "cái này đúng không?" → "Theo bạn thì sao?"        │
└────────────────────────────────────────────────────────────────┘
```

---

# C. Bản ghi tay thô — in **hai bản** cho mỗi phiên (một cho mỗi option)

> Ghi **nguyên văn**, viết tắt được, **không sửa cho gọn**. Chép vào `prototype-feedback-note.md` sau.
> Quy tắc: ô này chỉ nhận thứ **nhìn thấy hoặc nghe thấy**. Suy nghĩ của mình viết vào lề, đánh dấu `[dg]` *(diễn giải)*.

```
PHIÊN ___  ·  Ngày ___/___  ·  Tester ___________  ·  Option:  ☐ B   ☐ C   ·  Lượt:  ☐ 1   ☐ 2

CONTEXT (chỉ phiên đầu)   ☐ có, cụ thể   ☐ chung chung   ☐ không có
nguyên văn: _______________________________________________________________
__________________________________________________________________________


MÀN 1
đọc bài bao lâu: _______    số chỗ đánh dấu: ____  (hl__ un__ qs__ nt__)
có đánh dấu ở MỤC 3 không:  ☐ có  ☐ không
vào Sổ ghi chú bằng:  ☐ pill trên nav   ☐ nút dưới bảng dấu vết   ☐ "Hoàn thành bài học"


THAO TÁC ĐẦU TIÊN sau khi nghe task
__________________________________________________________________________


DÒNG THỜI GIAN  (ghi liên tục, không chờ hiểu rồi mới ghi)
 ph:gi │ tester LÀM gì                      │ tester NÓI gì (nguyên văn)
───────┼────────────────────────────────────┼─────────────────────────────────
       │                                    │
       │                                    │
       │                                    │
       │                                    │
       │                                    │
       │                                    │
       │                                    │


CHỖ DỪNG > 5 GIÂY        bao lâu ____  đang nhìn gì ____________________
                         bao lâu ____  đang nhìn gì ____________________

NGUỒN   bấm mở link?  ☐ có → cái đầu tiên: ______   ☐ không
        dừng ở khối ⚠? ☐ có  ☐ không
⏱ GIÂY từ lúc thấy kết quả AI → bấm Lưu:  _______

★ CÓ NHẮC GÌ ĐẾN DÒNG "đưa thêm ví dụ mẫu…" KHÔNG?
   ☐ không nhắc   ☐ đọc qua rồi đi tiếp   ☐ dừng lại, nói: ______________
   ☐ sửa nó       ☐ xoá nó                ☐ hỏi mình


SỬA / LẤY LẠI CONTROL
sửa gì: __________________________________________________________________
dùng lối thoát nào:  ☐ Tự viết  ☐ Huỷ bản nháp  ☐ Tạo lại hẹp hơn  ☐ Bỏ qua  ☐ không dùng
tự bấm "Bắt đầu lại"?  ☐ có  ☐ không


RIÊNG OPTION B
số dấu vết chọn: ___/___   bỏ cái nào: ______________
câu hỏi làm rõ:  ☐ hiện ___ câu  ☐ KHÔNG hiện câu nào  ← hợp lệ, xem dry-run-report §4
  → trả lời ___  bỏ qua ___   nói gì: _________________________________
có sửa nhóm "Điều bạn đã nắm được"?  ☐ có → ______________  ☐ không
phản ứng khi phải "Duyệt nhóm này" từng nhóm: ____________________________
có thấy nút "Tự viết, không cần AI"?  ☐ có  ☐ không  ☐ không rõ


RIÊNG OPTION C
bấm "Bỏ qua" ngay?  ☐ có  ☐ không
có thử "Tạo lại, chỉ dùng chỗ tôi đã đánh dấu"?  ☐ có  ☐ không
xoá khối nào: ______________


MỆNH ĐỀ "độ phủ, không phải số lượng" CÓ TRONG NOTE CUỐI KHÔNG?   ☐ có  ☐ không


─────────────── SAU KHI DÙNG CẢ HAI (14–18') ───────────────

1. chọn cách nào · vì sao  (nguyên văn)
__________________________________________________________________________
__________________________________________________________________________

2. tự làm phần nào / giao AI phần nào
__________________________________________________________________________

3. điều gì khiến CHƯA thoải mái
__________________________________________________________________________
__________________________________________________________________________

★ ĐIỀU TESTER NÓI NGƯỢC VỚI KỲ VỌNG CỦA NHÓM
__________________________________________________________________________
__________________________________________________________________________
```

---

## D. Ngay sau phiên — làm trong 10 phút, đừng để sang hôm sau

1. Chép bản ghi tay vào `prototype-feedback-note.md` §1 **trước**, khi còn nhớ giọng nói
2. Chỉ sau khi §1 xong mới viết §2 INTERPRETED — **không viết hai phần cùng lúc**
3. Soát: dòng nào trong §1 có chữ *vì / có vẻ / chắc là* → chuyển xuống §2
4. Điền §3 Next Change và §4 Still Unproven
5. Nhắn Gia Huy để chốt lịch gộp `group-feedback-synthesis.md`
