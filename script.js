const explore = document.querySelector(".explore-div");
const forge = document.querySelector(".forge-div");
const footerSignup = document.querySelector(".footer-signup-div");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

// h2.forEach((header) => {
observer.observe(explore);
observer.observe(forge);
observer.observe(footerSignup);
// });
