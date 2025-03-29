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
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for down arrow
    const downArrow = document.querySelector('.down-symbol');
    if (downArrow) {
        downArrow.addEventListener('click', function(e) {
            e.preventDefault();
            const nextSection = document.querySelector('.transition-2ndimg');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Fade in effect for sections
    // Fade in effect for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.transition-2ndimg, .transition-3rdimg, .transition-4thimg, .review-section');
    sections.forEach(section => {
        observer.observe(section);
    });


    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '⮝';
    backToTopButton.className = 'back-to-top';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
