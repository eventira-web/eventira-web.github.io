document.addEventListener('DOMContentLoaded', () => {

    // --- Feature Card Generation ---
    const features = [
        { title: "Registration & Check-in", description: "Integrated registration, easy check-in setup, and super-secure 2-step login for seamless attendee onboarding.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>` },
        { title: "Powerful Event Management", description: "Manage multiple events with an intuitive setup, timeline tracking, stunning dashboards, and versatile agendas.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>` },
        { title: "No-Code Website Builder", description: "Create stunning event pages with AI-assisted templates and an intuitive drag-and-drop builder. No coding needed.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>` },
        { title: "Engaging Communications", description: "Connect with attendees using AI-assisted emails and scheduled push notifications for targeted engagement.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>` },
        { title: "AI-Assisted Networking", description: "Facilitate meaningful connections with AI-driven tools and profiles that enhance attendee interactions.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
        { title: "Progressive Web App", description: "Enjoy seamless performance with offline capabilities. Can be discoverable online or kept private.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><path d="M12 5a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3 3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z"/></svg>` },
        { title: "Tools for Online & Hybrid", description: "Integrated livestreaming, video breakout rooms, social walls, and other interactivity features.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>` },
        { title: "Interactive Floormaps", description: "Display simple, interactive, or even 3D floormaps with navigation to guide your attendees.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>` },
        { title: "Speaker & Sponsor Visibility", description: "Showcase key speakers and sponsors in dedicated, customizable sections for multi-point exposure.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1.5a4.5 4.5 0 0 0-4.5 4.5V9a4.5 4.5 0 0 0 9 0V6A4.5 4.5 0 0 0 12 1.5z"/><path d="M8.5 10v1a3.5 3.5 0 0 0 7 0v-1"/><path d="M14 14.5V16a6 6 0 0 1-12 0v-1.5"/></svg>` },
        { title: "Insightful Analytics", description: "Track attendance, engagement, and ROI with real-time dashboards for all event types.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3"/></svg>` },
        { title: "Resource Management", description: "Manage document galleries, videos, photos, and abstract submissions with review and rating features.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>` },
        { title: "Hassle-free Integrations", description: "Seamlessly connect with budget-friendly tools for ticketing, social feeds, payments, and more.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5"/><polyline points="17 17 12 12 17 7"/><line x1="12" y1="12" x2="22" y2="12"/></svg>` },
    ];
    const container = document.querySelector('#features .grid');
    if (container) {
        features.forEach((feature, index) => {
            const card = `
                <div class="animated-element feature-card p-6 bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm" style="--delay: ${index * 100}ms;">
                    <div class="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary dark:text-primary-300">${feature.icon}</div>
                    <h3 class="mt-5 text-lg font-semibold text-gray-900 dark:text-white">${feature.title}</h3>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">${feature.description}</p>
                </div>`;
            container.innerHTML += card;
        });
    }

    // --- Theme Toggle ---
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

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // --- FAQ Accordion ---
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

    // --- Scroll Animations ---
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

    // --- Header shadow on scroll ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow-lg', window.scrollY > 10);
        header.classList.toggle('bg-white/95', window.scrollY > 10);
        header.classList.toggle('dark:bg-gray-900/95', window.scrollY > 10);
        header.classList.toggle('bg-white/80', window.scrollY <= 10);
        header.classList.toggle('dark:bg-gray-900/80', window.scrollY <= 10);
    });
});
