
         function descargarCV() {
        const link = document.createElement('a');
        link.href = 'assets/CV_AdrianJimenez_2026.pdf'; // ruta correcta con /
        link.download = 'CV_AdrianJimenez_2026.pdf';    // nombre del archivo al descargar
        link.click();
    }


        // Smooth scroll enhancement
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (navToggle && navMenu) {
            const closeMenu = () => {
                navMenu.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            };

            navToggle.addEventListener('click', () => {
                const isOpen = navMenu.classList.toggle('is-open');
                navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                document.body.classList.toggle('nav-open', isOpen);
            });

            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    closeMenu();
                });
            });

            document.addEventListener('click', (event) => {
                if (!navMenu.classList.contains('is-open')) {
                    return;
                }

                if (navMenu.contains(event.target) || navToggle.contains(event.target)) {
                    return;
                }

                closeMenu();
            });

            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    closeMenu();
                }
            });
        }

        // Intersection Observer para animaciones de scroll con Tailwind
            const observerOptions = {
                threshold: 0.2,
                rootMargin: "0px 0px -50px 0px"
        };

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-slide-in", "opacity-100");
                    }
                });
            }, observerOptions);

            // Elementos que se animarán al hacer scroll
            document.querySelectorAll('.scroll-animate').forEach(el => {
                el.classList.add("opacity-0");
                observer.observe(el);
            });

    