let summary = document.querySelectorAll(".details__summary");
let paragraph = document.querySelectorAll(".details__paragraph");
let arrow = document.querySelectorAll(".icon__arrow");
let hr = document.querySelectorAll(".hr");

summary.forEach((eachSummary, i) => {
  summary[i].addEventListener("click", () => {
    paragraph.forEach((eachParagraph, i) => {
      paragraph[i].classList.remove("active");
    });
    paragraph[i].classList.add("active");
    arrow.forEach((eacharrow, i) => {
      arrow[i].classList.remove("active");
    });
    arrow[i].classList.add("active");
    hr.forEach((eachhr, i) => {
      hr[i].classList.remove("active");
    });
    hr[i].classList.add("active");
  });
});
