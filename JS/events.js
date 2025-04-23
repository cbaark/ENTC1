document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('event-inquiry-form');

    eventForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get all form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            eventDate: document.getElementById('event-date').value,
            eventType: document.getElementById('event-type').value,
            guests: document.getElementById('guests').value,
            message: document.getElementById('message').value
        };

        // Log form data to console
        console.log('Event Inquiry Form Submission:');
        console.log('----------------------------');
        for (const [key, value] of Object.entries(formData)) {
            console.log(`${key}: ${value}`);
        }

        // Clear form after submission
        eventForm.reset();
        alert('Thank you for your inquiry! We will contact you soon.');
    });
//  Back to top button
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