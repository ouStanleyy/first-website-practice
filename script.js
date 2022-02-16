const explore = document.querySelector(".explore-div");
const forge = document.querySelector(".forge-div");
const footerSignup = document.querySelector(".footer-signup-div");
const footer = document.getElementById("footer");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      console.log(footer);
      if (entry.target == footerSignup) {
        console.log("Setting to Flex");
        footer.style.display = "flex";
      } else {
        console.log("Setting to None");
        footer.style.display = "none";
      }
    });
  },
  {
    threshold: 0.3,
  }
);

// h2.forEach((header) => {
observer.observe(footerSignup);
observer.observe(explore);
observer.observe(forge);
// });
