document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".fade-in, .slide-up, .slide-left, .slide-right, .zoom-in"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});
