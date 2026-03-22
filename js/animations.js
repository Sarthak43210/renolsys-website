// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// 1. Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// 2. Hero Entrance
const heroTimeline = gsap.timeline();

// Ensure initial hidden state
gsap.set('.hero-anim', { y: 40, opacity: 0 });

heroTimeline
    .to('.pill.hero-anim', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "+=0.2")
    .to('h1.hero-anim', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.6")
    .to('p.hero-anim', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.6")
    .to('.hero-btns.hero-anim', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.6");

// 3. Scroll Reveals for Sections
const animateSection = (sectionId, itemsSelector) => {
    const section = document.querySelector(sectionId);
    if (!section) return;

    const header = section.querySelector('.section-header');
    const pill = section.querySelector('.pill');
    const items = section.querySelectorAll(itemsSelector);

    // Pill Animation
    if (pill) {
        gsap.fromTo(pill,
            { scale: 0.8, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%"
                }
            }
        );
    }

    // Headers Animation
    if (header) {
        const headerElements = header.querySelectorAll('h2, p');
        gsap.fromTo(headerElements,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%"
                }
            }
        );
    }

    // Cards/Items Animation
    if (items.length > 0) {
        gsap.fromTo(items,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%"
                }
            }
        );
    }
};

animateSection('#services', '.card');
animateSection('#about', '.process-item');
animateSection('#industries', '.card');
animateSection('#case-studies', '.case-card');
animateSection('#insights', '.why-col');
