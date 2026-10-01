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
