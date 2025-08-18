document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            themeToggle.querySelector('#theme-icon-light').classList.add('hidden');
            themeToggle.querySelector('#theme-icon-dark').classList.remove('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            themeToggle.querySelector('#theme-icon-light').classList.remove('hidden');
            themeToggle.querySelector('#theme-icon-dark').classList.add('hidden');
        }
    };
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // FAQ Accordion
    document.querySelectorAll('.faq-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('.faq-icon');
            const isExpanded = content.style.maxHeight;
            document.querySelectorAll('.faq-content').forEach(item => {
                item.style.maxHeight = null;
                item.previousElementSibling.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
            });
            if (!isExpanded) {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.animated-element').forEach(el => {
        el.style.transform = 'translateY(40px)';
        observer.observe(el);
    });

    // Header shadow on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow-lg', window.scrollY > 10);
        header.classList.toggle('bg-white/95', window.scrollY > 10);
        header.classList.toggle('dark:bg-gray-900/95', window.scrollY > 10);
        header.classList.toggle('bg-white/80', window.scrollY <= 10);
        header.classList.toggle('dark:bg-gray-900/80', window.scrollY <= 10);
    });
});
