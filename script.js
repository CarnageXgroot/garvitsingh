document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if(mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animation for Hamburger bars (Optional visual flair)
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.backgroundColor = navLinks.classList.contains('active') 
                    ? 'var(--neon-cyan)' 
                    : 'var(--text-main)';
            });
        });
    }

    // --- Template Filter System ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const templateCards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // 1. Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Add 'active' class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // 3. Show/Hide cards with animation reset
            templateCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'block';
                    // Trigger a tiny fade in by manipulating opacity via CSS if desired
                    // For now, block/none works instantly
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
