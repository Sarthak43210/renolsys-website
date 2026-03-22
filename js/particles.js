// 5. Initialize ParticlesJS
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#5b52f5" },
        shape: { type: "circle" },
        opacity: { value: 0.65, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#5b52f5",
            opacity: 0.45,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 1.0 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
