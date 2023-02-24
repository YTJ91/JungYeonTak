const introText = document.querySelectorAll(".mainTitle, span, p");
window.onload = () => {
  setTimeout(function () {
    let timer = 100;
    introText.forEach((item) => {
      item.style.animation = `fade 500ms ${(timer += 50)}ms forwards`;
    });
  }, 1200);
};

let aboutSection = document.querySelector(".about");

window.addEventListener("scroll", (e) => {
  // console.log(window.scrollY);
  const rect = aboutSection.getBoundingClientRect();
  const opacity = (-rect.top + rect.height / 2) / 300;

  aboutSection.style.opacity = opacity;
});
