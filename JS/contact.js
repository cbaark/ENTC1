document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for down arrow
    const downArrow = document.querySelector('.down-symbol');
    if (downArrow) {
        downArrow.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.querySelector('.contact-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted');
            console.log('Name:', document.getElementById('name').value);
            console.log('Email:', document.getElementById('email').value);
            console.log('Message:', document.getElementById('message').value);
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Back to top button (same as in home.js)
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