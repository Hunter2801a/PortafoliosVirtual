
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

        // Intersection Observer para animaciones de scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.animation = 'slideInUp 0.6s ease-out';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.stagger-item, .project-card').forEach(el => {
            observer.observe(el);
        });
    