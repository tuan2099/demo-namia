// Cấu hình Tailwind dùng chung — bám theo namiariverretreat.com
// Nạp file này NGAY SAU thẻ <script src="https://cdn.tailwindcss.com"></script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Nâu taupe thương hiệu (primary / accent) — gốc #80614A
        primary: {
          50:  '#f6f2ef',
          100: '#eae0d9',
          200: '#d6c3b5',
          300: '#bfa189',
          400: '#a07f64',
          500: '#80614a', // màu chính
          600: '#6d523e',
          700: '#574233',
          800: '#45352a',
          900: '#3a3230', // nâu đậm (chữ/dark) — gốc #3A3230
        },
        ink: '#3A3230',  // màu chữ chính
        sand: '#ebe6db', // nền kem (đồng nhất toàn trang)
      },
      fontFamily: {
        // Open Sans = body (mặc định), Gotu = tiêu đề
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Gotu', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
};
