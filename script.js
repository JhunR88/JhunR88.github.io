document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const btn = document.getElementById('theme-toggle');
  if (document.body.classList.contains('dark')) {
    btn.textContent = '☀️ Light Mode';
  } else {
    btn.textContent = '🌙 Dark Mode';
  }
});
