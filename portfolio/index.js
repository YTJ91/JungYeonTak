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
let mainpage = document.querySelector(".mainpage");
let skillPage = document.querySelector(".skill");

window.addEventListener("scroll", (e) => {
  // console.log(window.scrollY);
  const rect = aboutSection.getBoundingClientRect();

  const opacity = (-rect.top + rect.height / 2) / 300;

  const mainOpacity = (rect.top - rect.height / 2) / 300;

  const skillOpacity = ((rect.top + rect.height / 2) / 300) * -1;

  mainpage.style.opacity = mainOpacity;
  aboutSection.style.opacity = opacity;
  skillPage.style.opacity = skillOpacity;
});

const sectionList = document.querySelector("section");

window.addEventListener("scroll", (e) => {
  let opacity =
    (Math.cos(
      ((90 / window.innerHeight) * 4 * window.scrollY * Math.PI) / 100
    ) +
      1) /
    2;

  console.log(opacity);

  sectionList.forEach((section) => {
    sectionList.querySelector("h2").style.opacity = opacity;
  });
});
