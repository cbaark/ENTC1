document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const teamMembers = document.querySelectorAll('.team-member');

    // filter lol
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // removes active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // active class to the clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            teamMembers.forEach(member => {
                // resets animation
                member.style.animation = 'none';
                member.offsetHeight;
                member.style.animation = null;
                
                if (filter === 'all' || member.getAttribute('data-category') === filter) {
                    member.style.display = 'block';
                    member.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    member.style.display = 'none';
                }
            });
        });
    });

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