
         function descargarCV() {
        const link = document.createElement('a');
        link.href = 'assets/CV_AdrianJimenez_2025.pdf'; // ruta correcta con /
        link.download = 'CV_AdrianJimenez_2025.pdf';    // nombre del archivo al descargar
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

    