(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = document.getElementById('particles-bg');

    if (canvas && !reduceMotion) {
        const ctx = canvas.getContext('2d');
        let bgParticles = [];
        let cursorParticles = [];
        let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const backgroundCount = 78;
        const gold = { r: 255, g: 196, b: 48 };

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createBackgroundParticles() {
            bgParticles = [];
            for (let i = 0; i < backgroundCount; i++) {
                const depth = Math.random();
                bgParticles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2.2 + 0.8,
                    speed: Math.random() * 0.38 + 0.08,
                    alpha: Math.random() * 0.38 + 0.16,
                    depth,
                    drift: (Math.random() - 0.5) * 0.22
                });
            }
        }

        function drawBackgroundParticles() {
            for (const particle of bgParticles) {
                const parallaxX = (mouse.x - canvas.width / 2) * 0.006 * particle.depth;
                const parallaxY = (mouse.y - canvas.height / 2) * 0.004 * particle.depth;

                ctx.fillStyle = `rgba(${gold.r}, ${gold.g}, ${gold.b}, ${particle.alpha})`;
                ctx.beginPath();
                ctx.arc(particle.x + parallaxX, particle.y + parallaxY, particle.size, 0, Math.PI * 2);
                ctx.fill();

                particle.y -= particle.speed;
                particle.x += particle.drift;

                if (particle.y < -10) {
                    particle.y = canvas.height + 10;
                    particle.x = Math.random() * canvas.width;
                }
            }
        }

        function drawCursorParticles() {
            for (let i = 0; i < cursorParticles.length; i++) {
                const particle = cursorParticles[i];

                ctx.fillStyle = `rgba(${gold.r}, ${gold.g}, ${gold.b}, ${particle.alpha})`;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();

                particle.x += particle.speedX;
                particle.y += particle.speedY;
                particle.alpha -= 0.024;

                if (particle.alpha <= 0) {
                    cursorParticles.splice(i, 1);
                    i--;
                }
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBackgroundParticles();
            drawCursorParticles();
            requestAnimationFrame(animateCanvas);
        }

        window.addEventListener('mousemove', (event) => {
            mouse = { x: event.clientX, y: event.clientY };
            for (let i = 0; i < 3; i++) {
                cursorParticles.push({
                    x: event.clientX,
                    y: event.clientY,
                    size: Math.random() * 3 + 1,
                    alpha: 0.9,
                    speedX: (Math.random() - 0.5) * 1.3,
                    speedY: (Math.random() - 0.5) * 1.3
                });
            }
        });

        window.addEventListener('resize', () => {
            resizeCanvas();
            createBackgroundParticles();
        });

        resizeCanvas();
        createBackgroundParticles();
        animateCanvas();
    }

    const revealElements = document.querySelectorAll('.scroll-animate');

    if (window.gsap && !reduceMotion) {
        const { gsap } = window;
        const ScrollTrigger = window.ScrollTrigger;

        if (ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
        }

        gsap.set(revealElements, {
            autoAlpha: 0,
            y: 34,
            rotateX: 4,
            transformPerspective: 900
        });

        gsap.timeline({ defaults: { ease: 'power3.out' } })
            .to('#particles-bg', { autoAlpha: 0.78, duration: 0.6 }, 0)
            .to('#inicio .scroll-animate', {
                autoAlpha: 1,
                y: 0,
                rotateX: 0,
                duration: 0.9,
                stagger: 0.08
            }, 0.12);

        revealElements.forEach((element) => {
            if (element.closest('#inicio')) {
                return;
            }

            gsap.to(element, {
                autoAlpha: 1,
                y: 0,
                rotateX: 0,
                duration: 0.72,
                ease: 'power3.out',
                scrollTrigger: ScrollTrigger ? {
                    trigger: element,
                    start: 'top 84%',
                    once: true
                } : undefined
            });
        });

        document.querySelectorAll('.project-card').forEach((card) => {
            card.addEventListener('mousemove', (event) => {
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                const rotateY = ((x / rect.width) - 0.5) * 7;
                const rotateX = -((y / rect.height) - 0.5) * 6;

                card.style.setProperty('--tilt-x', `${(x / rect.width) * 100}%`);
                card.style.setProperty('--tilt-y', `${(y / rect.height) * 100}%`);

                gsap.to(card, {
                    rotateX,
                    rotateY,
                    y: -8,
                    duration: 0.28,
                    ease: 'power2.out',
                    transformPerspective: 900
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    y: 0,
                    duration: 0.45,
                    ease: 'power3.out'
                });
            });
        });
    } else {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-in', 'opacity-100');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            element.classList.add('opacity-0');
            observer.observe(element);
        });
    }
})();
