document.addEventListener('DOMContentLoaded', function() {
    // get all elements
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    const searchInput = document.getElementById('search-input');
    const downSymbol = document.querySelector('.down-symbol');

    const validCategories = ['all', 'breakfast', 'lunch', 'hot-drinks', 'cold-drinks', 'desserts'];

    // filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // remove active class 
            filterBtns.forEach(b => b.classList.remove('active'));
            // add active class 
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            
            menuItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // highlight active section
            document.querySelectorAll('.menu-section').forEach(section => {
                if (category === 'all' || section.id === category) {
                    section.style.opacity = '1';
                } else {
                    section.style.opacity = '0.5';
                }
            });
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        menuItems.forEach(item => {
            const itemName = item.querySelector('.item-name').textContent.toLowerCase();
            const itemDescription = item.querySelector('.item-description').textContent.toLowerCase();
            
            if (itemName.includes(searchTerm) || itemDescription.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // reset section highlighting when search
        document.querySelectorAll('.menu-section').forEach(section => {
            section.style.opacity = '1';
        });
    });

    // Smooth scroll for down symbol
    if (downSymbol) {
        downSymbol.addEventListener('click', () => {
            const filterContainer = document.querySelector('.filter-container');
            filterContainer.scrollIntoView({ behavior: 'smooth' });
        });
    }
    // BAck to top button
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
});