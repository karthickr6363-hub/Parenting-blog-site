// Main JavaScript for Parenting Blog Website

    // Mobile Menu Toggle
    document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Home dropdown toggle
    const homeMenuBtn = document.getElementById('home-menu-btn');
    const homeDropdown = document.getElementById('home-dropdown');
    
    if (homeMenuBtn && homeDropdown) {
        homeMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            homeDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!homeMenuBtn.contains(e.target) && !homeDropdown.contains(e.target)) {
                homeDropdown.classList.remove('show');
            }
        });
    }


    // Blog View Toggle (Grid/List)
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    const blogContainer = document.getElementById('blog-container');
    
    if (gridViewBtn && listViewBtn && blogContainer) {
        gridViewBtn.addEventListener('click', function() {
            blogContainer.classList.remove('flex-col');
            blogContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-6');
            gridViewBtn.classList.add('bg-pink-500', 'text-white');
            listViewBtn.classList.remove('bg-pink-500', 'text-white');
        });
        
        listViewBtn.addEventListener('click', function() {
            blogContainer.classList.remove('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-6');
            blogContainer.classList.add('flex', 'flex-col', 'gap-6');
            listViewBtn.classList.add('bg-pink-500', 'text-white');
            gridViewBtn.classList.remove('bg-pink-500', 'text-white');
        });
    }

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            filterButtons.forEach(b => b.classList.remove('bg-pink-500', 'text-white'));
            this.classList.add('bg-pink-500', 'text-white');
            
            blogCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.classList.add('fade-in-up');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            this.reset();
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
        });
    }

    // Logout functionality
    const logoutBtn = document.getElementById('logout-btn');
    const logoutBtnMobile = document.getElementById('logout-btn-mobile');
    
    function handleLogout(e) {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            window.location.href = 'index.html';
        }
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    if (logoutBtnMobile) {
        logoutBtnMobile.addEventListener('click', handleLogout);
    }

    // Smooth scroll for anchor links (exclude logout buttons)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Skip logout buttons
        if (anchor.id === 'logout-btn' || anchor.id === 'logout-btn-mobile') {
            return;
        }
        
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Reading Progress Bar (for blog detail page)
    const progressBar = document.getElementById('reading-progress');
    if (progressBar) {
        window.addEventListener('scroll', function() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        htmlElement.classList.add('dark-mode', 'dark');
        bodyElement.classList.add('dark-mode', 'dark');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = `
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
            `;
        }
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            htmlElement.classList.toggle('dark-mode');
            htmlElement.classList.toggle('dark');
            bodyElement.classList.toggle('dark-mode');
            bodyElement.classList.toggle('dark');
            const isDarkMode = htmlElement.classList.contains('dark-mode');
            
            // Save theme preference
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            
            // Update icon
            if (isDarkMode) {
                darkModeToggle.innerHTML = `
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                `;
            } else {
                darkModeToggle.innerHTML = `
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                    </svg>
                `;
            }
        });
    }
});


