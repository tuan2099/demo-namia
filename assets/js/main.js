// Giảm line-height toàn bộ (áp cho mọi trang).
// Mặc định Tailwind ~1.5. Đặt 1.1 = sát ~ nửa khoảng cách thừa, vẫn đọc được.
// Muốn sát hơn/thưa hơn chỉ cần đổi LINE_HEIGHT (dưới 1.0 chữ sẽ đè nhau).
(function () {
  const LINE_HEIGHT = 1.1;
  const style = document.createElement('style');
  style.textContent = 'body, body *{ line-height:' + LINE_HEIGHT + ' !important; }';
  document.head.appendChild(style);
})();

// Toggle menu trên mobile + đánh dấu link đang active
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }

  // Highlight link trùng với trang hiện tại
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach((a) => {
    if (a.getAttribute('href') === current) {
      a.classList.add('text-indigo-600', 'font-semibold');
    }
  });

  // Năm hiện tại ở footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
