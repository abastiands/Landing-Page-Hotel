let slideIndex = 1;

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let slider = document.getElementsByClassName("slider");
  if (n > slider.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slider.length;
  }
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  slider[slideIndex - 1].style.display = "block";
}

showDivs(slideIndex);
