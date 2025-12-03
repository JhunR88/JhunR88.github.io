document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      toggleBtn.textContent = document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
    });
  }

  // Skill bar açılış animasyonu
  document.querySelectorAll(".skill-fill").forEach(el => {
    const widthValue = el.style.width || el.dataset.width;
    if (widthValue) el.style.width = widthValue;
  });

  // Scroll shadow (header)
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });
});
