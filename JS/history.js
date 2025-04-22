document.addEventListener('DOMContentLoaded', function() {
    const downArrowElement = document.querySelector('.down-symbol');

    if (downArrowElement) {
        downArrowElement.addEventListener('click', function(event) {
            event.preventDefault(); 
            const timelineSectionElement = document.querySelector('.timeline-section');
            if (timelineSectionElement) {
                timelineSectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const timelineItemObserver = new IntersectionObserver((entries) => {
        entries.forEach(timelineEntry => {
            // Check if the timeline item is in the viewport
            if (timelineEntry.isIntersecting) {
                // Animate the timeline item by setting its opacity and transform
                timelineEntry.target.style.opacity = '1';
                timelineEntry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 }); 

    document.querySelectorAll('.timeline-item').forEach(timelineItem => {

        timelineItem.style.opacity = '0';
        timelineItem.style.transform = 'translateY(20px)';

        timelineItemObserver.observe(timelineItem);
    });

    const backToTopButtonElement = document.createElement('button');
    backToTopButtonElement.innerHTML = '⮝'; 
    backToTopButtonElement.className = 'back-to-top'; 
    document.body.appendChild(backToTopButtonElement); 

    window.addEventListener('scroll', () => {
        backToTopButtonElement.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });   // end

    backToTopButtonElement.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
});