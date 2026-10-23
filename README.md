# Landing page tuyển sinh TBD

Bản mã nguồn xuất ngày 15/10/2026, gồm tất cả chỉnh sửa đến bản tự chuyển ảnh 3 giây và thẻ học bổng rút gọn.

## Cấu trúc

- `index.html`: cấu trúc và nội dung trang, dùng CSS/JavaScript tách riêng.
- `css/style.css`: toàn bộ giao diện, màu sắc, responsive và hiệu ứng. Các tùy chỉnh mới hơn nằm cuối file và ghi đè quy tắc trước đó; cần giữ nguyên thứ tự khi chỉnh sửa.
- `js/main.js`: nội dung học bổng, biểu mẫu, menu điện thoại, thư viện ảnh và tự chuyển ảnh.
- `assets/`: toàn bộ ảnh thật, ảnh nhân vật AI nền trong suốt, logo trường và logo đối tác.
- `index-original.html`: bản gốc một file HTML chứa CSS/JavaScript, dùng chung thư mục assets. Có thể mở để đối chiếu với bản đã tách file.
- `photo-sources.json`: danh sách nguồn ảnh đã lưu trong quá trình thiết kế.
- `ASSET-NOTES.md`: ghi chú nguồn ảnh và font.

## Mở và chỉnh sửa

1. Giải nén toàn bộ thư mục, giữ nguyên cấu trúc.
2. Mở thư mục `tbd-landing-page` bằng VS Code, Cursor, Sublime Text hoặc trình biên tập bạn thích.
3. Mở `index.html` trực tiếp bằng Chrome/Edge để xem. Hoặc dùng tiện ích Live Server của VS Code để xem thay đổi khi lưu.
4. Có thể dùng Format Document của trình biên tập để căn chỉnh cách trình bày mã.

Trang dùng HTML/CSS/JavaScript thuần, không cần npm hay bước build.
Nếu máy có Python, bạn cũng có thể mở terminal trong thư mục và chạy:

```bash
python -m http.server 8080
```

Sau đó mở http://localhost:8080.

## Những vị trí thường chỉnh

- Nội dung học bổng: mảng `scholarships` trong `js/main.js`.
- Chu kỳ ảnh: `PHOTO_INTERVAL_MS = 3000` trong `js/main.js` (đơn vị mili giây).
- Các bộ ảnh: `slides`, `globalFrames`, `lifeFrames`, `jobFrames` trong `js/main.js`.
- Form đăng ký: đoạn `.apply-form` trong `js/main.js`.
- Màu chủ đạo: các biến `--blue`, `--coral`, `--navy` ở các quy tắc `:root`; quy tắc cuối cùng có hiệu lực. Một số thành phần có màu riêng.
- Logo: `assets/logo-tbd-white.svg`.
- Footer và thông tin liên hệ: phần `<footer>` trong `index.html`.
- Các tiêu đề học bổng dùng cùng một dòng; nếu thêm tên dài hơn cần điều chỉnh cỡ chữ responsive.

## Trạng thái chức năng

- Menu điện thoại, liên kết cuộn trang, nút dừng/phát ảnh và các slideshow đã có mã hoạt động.
- Biểu mẫu đang là bản giao diện: kiểm tra dữ liệu rồi hiển thị thông báo, chưa gửi hoặc lưu thông tin. Cần nối API, email hoặc hệ thống tiếp nhận trước khi thu hồ sơ thật.
- Font Be Vietnam Pro được tải qua Google Fonts nên cần internet. Khi ngoại tuyến, trình duyệt dùng font dự phòng Arial/sans-serif.
- Tất cả ảnh và logo đều nằm trong thư mục assets; không phụ thuộc máy chủ ảnh bên ngoài.

## Đưa lên hosting

Tải `index.html`, `css/`, `js/` và `assets/` vào cùng một thư mục trên hosting. Giữ đúng tên file và đường dẫn tương đối.
Gói này là website tĩnh độc lập, không phải theme/plugin WordPress hoặc dữ liệu UX Builder. Khi tích hợp WordPress, cần chuyển HTML/CSS/JS vào template hoặc cơ chế chèn mã phù hợp.

Đường dẫn bản trực tuyến: https://tbd-khoi-dau-tuong-lai-2027.foggyocean4.chatgpt.site
