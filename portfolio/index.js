const introText = document.querySelectorAll(".mainTitle, span, p");
window.onload = () => {
  setTimeout(function () {
    let timer = 100;
    introText.forEach((item) => {
      item.style.animation = `fade 500ms ${(timer += 50)}ms forwards`;
    });
  }, 1200);
};
