// JavaScript קטן
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 2000); // מסיר אחרי האנימציה
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.btn').forEach(btn => {
//     // הפונקציה שמתחילה את האנימציה ההפוכה
//     function triggerReverse() {
//       // אם כבר יש קלאס, נוריד ונאתחל כדי לאתחל אנימציה חדשה
//       btn.classList.remove('clicked');
//       void btn.offsetWidth; // force reflow -> מאתחל אנימציה
//       btn.classList.add('clicked');

//       // מאזין ל־animationend כדי להסיר את ה־class בתום האנימציה
//       function onAnimEnd(e) {
//         // רק בתום האנימציה של shine-reverse נסיר את הקלאס
//         if (e.animationName && e.animationName.indexOf('shine-reverse') !== -1) {
//           btn.classList.remove('clicked');
//           btn.removeEventListener('animationend', onAnimEnd);
//           btn.removeEventListener('webkitAnimationEnd', onAnimEnd);
//         }
//       }

//       btn.addEventListener('animationend', onAnimEnd);
//       btn.addEventListener('webkitAnimationEnd', onAnimEnd);
//     }

//     // אירוע לחיצה ועבור מסכים מגע
//     btn.addEventListener('click', (e) => {
//       triggerReverse();
//     });

//     // touchstart כדי שברגע נגיעה במובייל האנימציה תתחיל מיד
//     btn.addEventListener('touchstart', (e) => {
//       triggerReverse();
//     }, { passive: true });
//   });
// });
