gsap.registerPlugin(ScrollTrigger);

// Animación del logo al entrar
gsap.to(".logo", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power2.out"
});

// Desvanecer el logo y mostrar hero con scroll
gsap.to(".logo-hero", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
    scrub: true
  },
  opacity: 0,
  y: -100,
  duration: 1
});

// Mostrar contenido del hero con scroll
gsap.to(".hero-content", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
    toggleActions: "play none none none"
  },
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "power2.out"
});
