// smoothScroll.js
// גלילה אלגנטית לכל האתר (גם עכבר וגם לינקים עם id)

(function () {
  const scrollSpeed = 0.08; // ככל שקטן יותר -> גלילה רכה יותר
  let currentScroll = window.scrollY;
  let targetScroll = window.scrollY;

  // --- גלילה עם העכבר ---
  window.addEventListener(
    "wheel",
    (e) => {
      targetScroll += e.deltaY;
      targetScroll = Math.max(
        0,
        Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)
      );
      e.preventDefault(); // מונע גלילה רגילה
    },
    { passive: false }
  );

  // --- גלילה עם לינקים פנימיים (href="#id") ---
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        const targetOffset = targetElement.offsetTop;
        targetScroll = targetOffset; // מכוון את הגלילה לאלמנט
      }
    });
  });

  // --- האנימציה הראשית ---
  function smoothStep() {
    currentScroll += (targetScroll - currentScroll) * scrollSpeed;
    window.scrollTo(0, currentScroll);
    requestAnimationFrame(smoothStep);
  }

  smoothStep();
})();
