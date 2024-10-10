const arrows = document.querySelectorAll("#arrows");
const answers = document.querySelectorAll("#a-area");

arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    arrows.forEach((arrow) => {
      arrow.classList.remove("active");
    });
    arrow.classList.add("active");

    answers.forEach((content) => {
      content.classList.remove("active");
    });
    answers[index].classList.add("active");
  });
});
