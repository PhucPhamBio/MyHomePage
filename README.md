# Phuc / Field Notes

Website blog Astro theo phong cách premium academic magazine: giao thoa giữa tạp chí khoa học, editorial AI và portfolio researcher.

## 1. Chạy trên máy

Yêu cầu: Node.js LTS và Git.

```bash
npm install
npm run dev
```

Mở địa chỉ Astro in ra trong terminal, thường là `http://localhost:4321`.

Kiểm tra bản production:

```bash
npm run build
npm run preview
```

## 2. Tùy biến nhanh

- Tên và menu: `src/components/Header.astro`
- Tiểu sử và liên kết: `src/pages/about.astro` và `src/components/Footer.astro`
- Màu, font, kích thước, GIF nền và nút đổi theme (lưu lựa chọn trên trình duyệt): `src/styles/global.css`, `src/components/Header.astro`
- Nền tối dùng GIF [GIPHY OK5LK5zLFfdm](https://giphy.com/gifs/wallpaper-OK5LK5zLFfdm), có ghi nguồn ở footer. Nền sáng dùng gradient màu sáng như trước.
- Trình phát Chopin tự chuyển vòng giữa các bản Nocturne Op. 9 No. 2, Op. 9 No. 1 và Op. 27 No. 2 từ Wikimedia Commons (CC0), tự phát nếu trình duyệt cho phép và tiếp tục phát khi chuyển trang trong site.
- Trang chủ: `src/pages/index.astro`
- Bài mẫu: `src/content/blog/*.md`

Để viết bài mới, sao chép một file Markdown trong `src/content/blog/`, đổi tên file và chỉnh frontmatter. Các category hợp lệ:

- Computational Biology
- Bioinformatics
- Virtual Cell
- Precision Medicine
- America
- China
- Karate

Trang chủ và menu ưu tiên Computational Biology; các bài America, China và Karate được nhóm dưới mục Other.

## 3. Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub, ví dụ `field-notes`.
2. Giải nén project, mở terminal trong thư mục project.
3. Chạy:

```bash
git init
git add .
git commit -m "Launch academic magazine"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/field-notes.git
git push -u origin main
```

4. Trên GitHub mở `Settings` > `Pages`.
5. Ở `Build and deployment`, chọn `Source: GitHub Actions`.
6. Workflow `.github/workflows/deploy.yml` sẽ tự build và deploy.
7. Website project thường có địa chỉ `https://YOUR_USERNAME.github.io/field-notes/`.

File `astro.config.mjs` tự nhận tên repository trong GitHub Actions, nên internal link hoạt động cho cả user site và project site.

## 4. Dùng domain riêng

Thêm domain tại `Settings` > `Pages` > `Custom domain`, sau đó đổi `site` trong `astro.config.mjs` thành domain thật và giữ `base: '/'`.

## 5. Việc nên sửa trước khi public

- Thay email `hello@example.com`.
- Thay liên kết GitHub, thêm ORCID và Google Scholar.
- Viết lại phần About.
- Xóa hoặc chỉnh năm/bài mẫu.
- Thêm ảnh Open Graph riêng nếu muốn chia sẻ đẹp trên mạng xã hội.
