function descargarCV() {
    const link = document.createElement('a');
    link.href = 'assets/CV_AdrianJimenez_2026.pdf';
    link.download = 'CV_AdrianJimenez_2026.pdf';
    link.click();
}

function abrirPDF(rutaPDF) {
    const ventana = window.open(rutaPDF, '_blank');
    if (!ventana) {
        alert('No se pudo abrir el PDF. Por favor, intenta nuevamente.');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
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
        link.addEventListener('click', closeMenu);
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
