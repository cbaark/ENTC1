document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for down arrow
    const downArrowElement = document.querySelector('.down-symbol');
    if (downArrowElement) {
        downArrowElement.addEventListener('click', function(event) {
            event.preventDefault();
            const timelineSectionElement = document.querySelector('.history-section');
            if (timelineSectionElement) {
                timelineSectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Reveal timeline events on scroll
    const timelineItemObserver = new IntersectionObserver((entries) => {
        entries.forEach(timelineEntry => {
            if (timelineEntry.isIntersecting) {
                timelineEntry.target.style.opacity = '1';
                timelineEntry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-event').forEach(timelineItem => {
        timelineItem.style.opacity = '0';
        timelineItem.style.transform = 'translateY(20px)';
        timelineItemObserver.observe(timelineItem);
    });

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