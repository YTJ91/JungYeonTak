const introText = document.querySelectorAll("h1, span, li");
window.onload = () => {
  setTimeout(function () {
    let timer = 100;
    introText.forEach((item) => {
      item.style.animation = `fade 500ms ${(timer += 50)}ms forwards`;
    });
  }, 1200);
};
