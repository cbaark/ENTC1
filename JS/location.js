document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for down arrow
    const downArrow = document.querySelector('.down-symbol');
    if (downArrow) {
        downArrow.addEventListener('click', function(e) {
            e.preventDefault();
            const locationInfo = document.querySelector('.location-info');
            if (locationInfo) {
                locationInfo.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Fade in effect for location info
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    const locationInfo = document.querySelector('.location-info');
    if (locationInfo) {
        observer.observe(locationInfo);
    }

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '⮝';
    backToTopButton.className = 'back-to-top';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 700) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});