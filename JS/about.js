document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for the down arrow
    const downSymbol = document.querySelector('.down-symbol');
    if (downSymbol) {
        downSymbol.addEventListener('click', function() {
            window.scrollTo({
                top: document.querySelector('.about-section').offsetTop,
                behavior: 'smooth'
            });
        });
    }

    // Add animation to value items when they come into view
    const observeValues = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observeValues.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    // Observe all value items
    document.querySelectorAll('.value-item').forEach(item => {
        observeValues.observe(item);
    });
});

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '⮝';
    backToTopButton.className = 'back-to-top';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 1350) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });