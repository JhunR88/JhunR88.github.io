document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const btn = document.getElementById('theme-toggle');
  if (document.body.classList.contains('dark')) {
    btn.textContent = '☀️ Light Mode';
  } else {
    btn.textContent = '🌙 Dark Mode';
  }
});

// SKILLS BÖLÜMÜ SKILLS BÖLÜMÜ SKILLS BÖLÜMÜ SKILLS BÖLÜMÜ SKILLS BÖLÜMÜ SKILLS BÖLÜMÜ SKILLS BÖLÜMÜ SKILLS BÖLÜMÜ SKILLS BÖLÜMÜ
// skill bar dolma animasyonu (sayfa yüklendiğinde)
window.addEventListener('load', () => {
  document.querySelectorAll('.skill-fill').forEach(el => {
    const w = el.style.width || el.getAttribute('data-width');
    // Eğer inline style kullanılmadıysa data-width ile ver
    el.style.width = w;
  });
});

