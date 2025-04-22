document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for down arrow
    const downArrow = document.querySelector('.down-symbol');
    if (downArrow) {
        downArrow.addEventListener('click', function(e) {
            e.preventDefault();
            const timelineSection = document.querySelector('.timeline-section');
            if (timelineSection) {
                timelineSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Animation for timeline items on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        observer.observe(item);
    });

    // Back to top button functionality
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