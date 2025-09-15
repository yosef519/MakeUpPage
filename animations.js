document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".portfolio h2, .portfolio h4");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate"); // אם רוצים שהאפקט יחזור
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});
