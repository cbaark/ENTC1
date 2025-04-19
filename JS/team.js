document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');

    // animation on initial load
    teamMembers.forEach((member, index) => {
        member.style.animationDelay = `${index * 0.2}s`;
    });

    const downSymbol = document.querySelector('.down-symbol');
    if (downSymbol) {
        downSymbol.addEventListener('click', () => {
            document.querySelector('.team-filter').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // animation for team members on scroll
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    teamMembers.forEach(member => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(20px)';
        member.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(member);
    });
});