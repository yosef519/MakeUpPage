// JavaScript
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrollPosition = window.scrollY;

  // כשגוללים יותר מ-50 פיקסלים, תוסיף את הקלאס
  if (scrollPosition > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// אופציונלי: הוספת debounce לביצועים טובים יותר
let ticking = false;

function updateNavbar() {
  const header = document.querySelector("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  ticking = false;
}

window.addEventListener("scroll", function () {
  if (!ticking) {
    requestAnimationFrame(updateNavbar);
    ticking = true;
  }
});
