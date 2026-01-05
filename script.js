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

// Project Showcase Geliştirme Project Showcase Geliştirme Project Showcase Geliştirme Project Showcase Geliştirme Project Showcase Geliştirme
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Active class temizle
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach(card => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});
