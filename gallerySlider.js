// document.addEventListener("DOMContentLoaded", () => {
//   const track = document.querySelector(".slide-track");
//   const slides = Array.from(track.children);

//   // שכפול התמונות פעם אחת כדי לאפשר מעבר חלק
//   slides.forEach((slide) => {
//     const clone = slide.cloneNode(true);
//     track.appendChild(clone);
//   });

//   let position = 0;
//   const speed = 1; // כמה פיקסלים להזיז בכל צעד
//   const stepTime = 16; // מהירות (מילישניות)

//   const slideWidth = slides[0].offsetWidth + 20; // כולל gap
//   const totalWidth = slideWidth * slides.length;

//   function animate() {
//     position -= speed;
//     if (Math.abs(position) >= totalWidth) {
//       position = 0; // חזרה להתחלה בלי קפיצה
//     }
//     track.style.transform = `translateX(${position}px)`;
//     requestAnimationFrame(animate);
//   }

//   animate();
// });

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slide-track");
  const slides = Array.from(track.children);

  // שכפול התמונות פעם אחת כדי למנוע קפיצה
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });

  let position = 0;
  const speed = 200; // מהירות בפיקסלים לשנייה (כאן אתה שולט!)
  const slideWidth = slides[0].offsetWidth + 20; // כולל gap
  const totalWidth = slideWidth * slides.length;

  let lastTime = performance.now();

  function animate(now) {
    const dt = (now - lastTime) / 1000; // שניות שעברו מאז הפריים האחרון
    lastTime = now;

    position -= speed * dt;

    if (Math.abs(position) >= totalWidth) {
      position = 0; // חזרה חלקה להתחלה
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
