# Prototype annotation — KHÔNG cho tester xem

> Đặt ngoài frame theo `docs/6.md`. File này chỉ dành cho facilitator.

## Trước phiên test

- [ ] **Tester mới** → mở `index.html?opt=<b|c>&fresh=1` để xoá dấu vết của người trước
- [ ] Màn hình **không có nút chọn option** — tester chỉ thấy một sản phẩm. Facilitator đổi option bằng `?opt=` trên URL
- [ ] Nhóm diễn tập nhanh: thêm `&demo=1` để nạp sẵn 7 dấu vết mẫu *(không dùng khi test thật)*
- [ ] Chạy cả hai option **trong cùng một tab** — dấu vết learner tạo ở Màn 1 được giữ lại cho lượt hai
- [ ] **Tester 1 chạy B → C · Tester 2 chạy C → B** *(đảo thứ tự, giảm order effect)*
- [ ] Giữa hai option: bấm **"Bắt đầu lại"** ở thanh dưới → về Màn 1, **dấu vết vẫn còn**
- [ ] Đổi `?opt=` trên thanh địa chỉ sang option còn lại rồi bấm *"Hoàn thành bài học"*
- [ ] Lần thứ hai: tester **không** đọc lại bài, lướt qua dấu vết rồi vào thẳng Sổ ghi chú

---

## MÀN 1 — learner tự đánh dấu

```
We expect the tester to:
  đọc bài, bôi đen vài đoạn và chọn Highlight / Chưa hiểu / Câu hỏi / Ghi chú.

Watch for:
  · họ đánh dấu bao nhiêu chỗ, và loại nào nhiều nhất
  · có dùng "Chưa hiểu" không, hay chỉ highlight
  · có tự viết câu hỏi không — hay bỏ qua hẳn
  · có đánh dấu gì ở mục 3 không        ← mục có mệnh đề đánh đổi
  · có ai không đánh dấu gì rồi đi tiếp luôn không
  · vào Sổ ghi chú bằng đường nào — nút trên nav, hay nút dưới bảng dấu vết,
    hay nút "Hoàn thành bài học"   ← cho biết affordance nào thật sự được thấy

Do not explain:
  · nên đánh dấu bao nhiêu chỗ
  · khác nhau giữa "Highlight" và "Chưa hiểu"
  · rằng dấu vết sẽ được dùng ở bước sau
```

> ❗ **Không nhắc tester đánh dấu.** Nếu họ đi tiếp với 0 dấu vết, đó là một quan sát hợp lệ — ghi lại, đừng sửa.

---

## ⚠️ OPTION B CÓ THỂ KHÔNG HỎI CÂU LÀM RÕ NÀO — biết trước, đừng hoảng

AI **chỉ hỏi chỗ nó thật sự không biết**. Hai điều kiện:

| Câu | Chỉ hiện khi |
| --- | --- |
| `c1` | có điểm *"Chưa hiểu"* mà **trong cùng mục đó không có** câu hỏi hay ghi chú nào |
| `c2` | có **ghi chú chung không gắn mục nào**, và nó nằm trong phạm vi learner chọn |

Đã kiểm bằng dry-run *(`dry-run-report.md` §4)*:

| Tester đánh dấu kiểu | Số câu hỏi làm rõ |
| --- | --- |
| *Chưa hiểu* + Câu hỏi **cùng một mục**, không chọn ghi chú chung | **0** |
| *Chưa hiểu* một mục + ghi chú chung, chọn hết | **2** |
| Chỉ toàn Highlight | **0**, và chỉ gom được **1 nhóm** |

**Trong phiên:**

- ❗ **Không nhắc, không gợi ý** tester đánh dấu kiểu nào. Đừng "lái" để cho ra câu hỏi làm rõ
- Nếu B không hỏi gì → **ghi lại đúng như vậy**. Đó là observation hợp lệ, không phải sự cố kỹ thuật
- Ghi vào Feedback Note: *"B hỏi 0 câu làm rõ vì tester đánh dấu kiểu …"*, rồi nêu ở **Still Unproven** rằng phiên này **không kiểm được giả định 1**

---

## OPTION B — CÙNG TỔ CHỨC

```
We expect the tester to:
  chọn một tập con dấu vết rồi bấm "Cùng AI tổ chức", đọc các nhóm đề xuất,
  và sửa ít nhất một thứ (tiêu đề, vị trí, hoặc xoá).

Watch for:
  · họ chọn bao nhiêu dấu vết, và bỏ cái nào
  · có sửa nhóm 1 "Điều bạn đã nắm được" không  ← nhóm này CỐ Ý gom rộng
    (mọi highlight bị dồn chung, bất kể thuộc mục nào)
  · trả lời hay bỏ qua câu hỏi làm rõ — và có vẻ khó chịu hay thấy hữu ích
  · có bấm vào link nguồn không; nếu có thì bấm cái nào trước
  · có nhìn thấy nút "Tự viết, không cần AI" không
  · phản ứng khi thấy phải "Duyệt nhóm này" từng nhóm mới lưu được

Do not explain:
  · ý nghĩa của khối "Cần bạn làm rõ"
  · vì sao một dấu vết không vào nhóm nào
  · nút "Duyệt nhóm này" để làm gì
```

## OPTION C — NHÁP SẴN

```
We expect the tester to:
  tạo bản nháp, đọc qua, rồi quyết định lưu hay sửa.

Watch for:
  · có bấm mở link nguồn không — nếu có thì mở cái nào trước
  · có dừng lại ở ba khối gắn nhãn ⚠ không
  · CÓ PHÁT HIỆN DÒNG 3 NÓI NGƯỢC VỚI BÀI KHÔNG   ← phép thử chính
  · bao nhiêu giây từ lúc thấy bản nháp tới lúc bấm "Lưu ghi chú"
  · có ai bấm "Bỏ qua" ngay từ đầu không
  · có thử "Tạo lại, chỉ dùng chỗ tôi đã đánh dấu" không

Do not explain:
  · ý nghĩa của nhãn ⚠
  · RẰNG DÒNG 3 CÓ VẤN ĐỀ
  · nút "Tạo lại với phạm vi hẹp hơn" sẽ ra cái gì
```

---

## Chỗ cài cắm — tuyệt đối không nói ra

**Bài học, mục 3** nói: *"3–5 ví dụ **phủ được các nhóm khác nhau** thường cho kết quả tốt hơn 10 ví dụ cùng rơi vào một nhóm. Điều quyết định là **độ phủ**, không phải số lượng."*

**Bản nháp của C, dòng 3** nói: *"Đưa thêm ví dụ mẫu giúp model nắm được định dạng và cách phân loại mong muốn."*
→ Giữ đúng định nghĩa zero/one/few-shot, nhưng **đánh rơi mệnh đề đánh đổi**. Câu còn lại hàm ý *càng nhiều càng tốt* — **ngược với bài**.

**Khối D (Áp dụng)** nhân đôi lỗi đó: *"đưa **nhiều** ví dụ mẫu cho từng nhóm phản hồi"* — nhưng khối này **có** nhãn ⚠.

Nếu tester hỏi *"cái này đúng không?"* → **"Theo bạn thì sao?"**

---

## Nếu có sự cố kỹ thuật giữa phiên

| Sự cố | Làm gì — **không giải thích lý do cho tester** |
| --- | --- |
| Dấu vết không tô lại ở lượt hai | Cứ chạy tiếp, **ghi lại**. Đã sửa ở bản hiện tại (`dry-run-report.md` §3) nhưng vẫn ghi nếu tái hiện |
| Màn hình trắng / kẹt | *"Để mình tải lại một chút nhé."* → F5. Đừng nói prototype hỏng |
| Tester bấm nhầm sang màn khác | Không kéo họ về. Xem họ tự tìm đường — **đó là dữ liệu** |
| Tester hỏi *"đây là sản phẩm thật à?"* | *"Đây là bản thử để lấy ý kiến."* Không nói thêm |

Sau phiên, mọi sự cố kỹ thuật ghi vào **Still Unproven**, không ghi vào OBSERVED.

---

## Ba câu cứu hộ

- "Bạn cứ nói to suy nghĩ của mình nhé."
- "Bạn sẽ làm gì tiếp theo?"
- "Theo bạn, nó nên hoạt động như thế nào?"

## Tuyệt đối không

- Không narrate, không giải thích icon
- Không lấp im lặng
- Không hỏi *"Bạn có thích không?"*
