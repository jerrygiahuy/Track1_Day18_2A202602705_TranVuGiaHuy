# Prototype — Option B / Option C

**Nhóm:** Double Hờ · **Case:** Case B — AI Notes: Personal Learning Notes
**Giao diện:** mô phỏng VLearn (`docs/vlean.png`) — top bar, mục lục bài học, toolbar, "Sổ ghi chú"

---

## Mở prototype

Prototype là HTML tĩnh, **không cần cài gì**, chạy được offline.

### Cách 1 — mở thẳng bằng trình duyệt

Mở `prototype/index.html`. Thêm tham số để vào đúng option:

| Dùng cho | Đường dẫn |
| --- | --- |
| **Option B — Cùng tổ chức** | `prototype/index.html?opt=b` |
| **Option C — Nháp sẵn** | `prototype/index.html?opt=c` |
| Đổi sang **tester mới** | thêm `&fresh=1` — xoá hết dấu vết của người trước |
| Nhóm **diễn tập nhanh** | thêm `&demo=1` — nạp sẵn 7 dấu vết mẫu |

> Không có tham số thì mặc định vào **Option B**. Prototype **không hiện nút chọn option nào** — tester chỉ thấy một sản phẩm, facilitator điều khiển bằng URL.

### Cách 2 — chạy local server *(khuyến nghị khi test)*

```bash
cd prototype
python -m http.server 8777
```

- Option B → <http://127.0.0.1:8777/index.html?opt=b>
- Option C → <http://127.0.0.1:8777/index.html?opt=c>

---

## Ba màn hình

```
MÀN 1 — index.html            Bài học + learner TỰ đánh dấu    (giống hệt nhau)
            ↓
MÀN 2 — option-b / option-c   CRITICAL INTERACTION            ★ chỗ duy nhất khác nhau
            ↓
MÀN 3 — render bởi shared.js  Ghi chú đã lưu + nguồn          (giống hệt nhau)
```

Nút **"Bắt đầu lại"** ở thanh công cụ dưới, có mặt ở **mọi màn hình** → quay về Màn 1.

### Learner tự đánh dấu

Ở Màn 1, bôi đen một đoạn bất kỳ trong bài → hiện thanh công cụ:

| | |
| --- | --- |
| **Highlight** | tô vàng đoạn đã chọn |
| **Chưa hiểu** | gạch đỏ đoạn đã chọn |
| **Câu hỏi** | mở ô soạn, đoạn bôi đen là chỗ neo |
| **Ghi chú** | mở ô soạn, đoạn bôi đen là chỗ neo |

Thêm **"+ Ghi chú chung"** ở header bảng dấu vết cho ghi chú không gắn mục nào. Mỗi dấu vết bỏ được bằng nút `×`.

**Ba lối vào Sổ ghi chú** — đều dẫn tới cùng một nơi, để xem learner thật sự thấy cái nào:

| Vị trí | Hình thức |
| --- | --- |
| Thanh nav trên, cạnh *"Đặt câu hỏi với AI"* | pill xanh lá + icon sổ tay + badge đếm dấu vết |
| Ngay dưới bảng *"Dấu vết của bạn"* | nút xanh lá **"Mở Sổ ghi chú"** + badge |
| Cuối bài | nút xanh dương **"Hoàn thành bài học →"** |

> **Dấu vết được giữ lại khi quay về Màn 1.** Nhờ vậy ở lượt option thứ hai, tester dùng **đúng bộ dấu vết đã tạo ở lượt đầu** — B và C ăn cùng một input.
> Đổi sang **tester mới** thì mở `index.html?opt=b&fresh=1` để xoá sạch.

---

## Option B — Cùng tổ chức · *Trần Vũ Gia Huy*

Learner **chọn phạm vi** dấu vết → AI gom nhóm, đề xuất tiêu đề, và **hỏi làm rõ** chỗ thiếu ngữ cảnh → learner sửa và **duyệt từng nhóm** trước khi lưu.

- AI **chỉ xử lý** dấu vết learner đã chọn
- Tối đa **2 câu hỏi làm rõ**, đều bỏ qua được
- Lối thoát: **"Tự viết, không cần AI"**

## Option C — Nháp sẵn · *Lưu Mạnh Hùng*

Hệ thống **đề nghị ngay khi hết bài** → AI soạn bản nháp từ **toàn bộ** dấu vết, kèm trích nguồn và nhãn cảnh báo → learner đối chiếu, sửa, và quyết định lưu hay huỷ.

- **Không autosave** — không gì được lưu cho tới khi bấm Lưu
- Lối thoát: **"Huỷ bản nháp"** · **"Tạo lại, chỉ dùng chỗ tôi đã đánh dấu"** · **"Bỏ qua"**

---

## Cấu trúc file — quy tắc 70% dùng chung

```
prototype/
├── index.html        Màn 1 · common context
├── option-b.html     Màn 2B → Màn 3
├── option-c.html     Màn 2C → Màn 3
├── shared.css        TOÀN BỘ style — không file nào có CSS riêng
├── fixture.js        Bài học + luật gom nhóm của B + bản nháp của C + bộ dấu vết mẫu
├── shared.js         Khung VLearn, Màn 1, Màn 3, ngăn nguồn, reset
└── ANNOTATION.md     Ghi chú facilitator — KHÔNG cho tester xem
```

> Tách file như vậy biến *"dùng chung 70%"* thành ràng buộc kỹ thuật: nếu B và C trông khác nhau ngoài vùng Màn 2, nghĩa là ai đó đã viết CSS riêng — sai quy ước.

---

## Ảnh chụp — xem nhanh không cần chạy

`prototype/screenshots/` — 4 ảnh từ bản dry-run 06/10/2026:

| Ảnh | Màn |
| --- | --- |
| `01-man1-common-context.png` | Màn 1 — bài học + 4 dấu vết learner tự tạo + 3 đường vào Sổ ghi chú |
| `02-option-b-groups.png` | Màn 2B — nhóm AI đề xuất, duyệt từng nhóm |
| `03-option-c-draft.png` | Màn 2C — bản nháp 4 khối, nhãn ⚠, link nguồn |
| `04-man3-saved.png` | Màn 3 — ghi chú đã lưu *(chung cho B và C)* |

---

## Giới hạn đã biết

| Giới hạn | Hệ quả khi đọc kết quả |
| --- | --- |
| Learner tự đánh dấu, nhưng trên bài đọc ngắn ~2 phút | Không giống nhịp học thật; số dấu vết có thể ít hơn đời thực |
| Nếu learner không đánh dấu gì | B rỗng (chỉ còn *"Tự viết"*), C vẫn chạy. Ghi nhận, không coi là tester làm sai |
| **AI output là canned, cố định** | Không đo được chất lượng model thật, chỉ đo cách learner phản ứng với một output có lỗi đã biết |
| Lỗi ở mục 3 là **cài sẵn** | Chỉ kết luận được *"learner có bắt được lỗi dạng này không"* |
| Không có option **user-led / no-inference** | Không có đối chứng cho `H_C` — xem `three-option-design-sheet.md` §2.7 |
| **Option B có thể không hỏi câu làm rõ nào** | Tuỳ cách tester đánh dấu. Cố ý giữ nguyên — AI chỉ hỏi chỗ nó thật sự không biết. Facilitator phải biết trước: `dry-run-report.md` §4 |

> Đã chạy **dry-run 41 điểm kiểm** trước phiên test — `dry-run-report.md`. Một lỗi tìm ra và đã sửa: dấu vết *"Chưa hiểu"* biến mất ở lượt option thứ hai.

Chi tiết thiết kế: `prototype-build-spec.md` · Quyết định Human–AI: `three-option-design-sheet.md` §3
