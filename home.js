let slideIndex = 1;
let slideTimer;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetSlideTimer();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetSlideTimer();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].classList.add("active");
  dots[slideIndex-1].className += " active";
}

function resetSlideTimer() {
  clearTimeout(slideTimer);
  slideTimer = setTimeout(autoAdvanceSlide, 5000); // Reset to 5 seconds
}

function autoAdvanceSlide() {
  plusSlides(1);
}

// Start the initial timer
resetSlideTimer();
