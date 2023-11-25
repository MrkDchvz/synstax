// Home
const startScreen = gsap.timeline({defaults: {duration: .35}});
startScreen.from(".desktop-nav", {opacity: 0})
  .from(".logo", { opacity: 0})
  .from(".desktop-nav__item", {opacity: 0, x: -10, stagger:0.1})
  .from("#particles-hero", {opacity: 0})
  .from(".hero__header", {opacity: 0})
  .from(".hero__sub-header", {opacity: 0})
  .from(".hero__link-button", {opacity: 0,});

gsap.registerPlugin(ScrollTrigger);
gsap.to(".hero", {
  opacity: 0,
  z: -10,
  scrollTrigger: {
    trigger: ".hero",
    start: "70% center",
    end: "90% center",
    scrub: true,
  }
});
//  Article
gsap.defaults ({
  duration: .3,
  ease: "power2.out"
})

const article1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.about__article--we',
    start: "top center",
    end: "center center",
  }
});
article1.from(".about__article__img-container--we", {x:-50, opacity: 0})
    .from(".about__article__text--we", {opacity: 0})

const article2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.about__article--values',
    start: "top center",
    end: "center center",
  }
});
article2.from(".about__article__img-container--values", {x:30, opacity: 0})
        .from(".about__article__text--values", {opacity: 0})

const article3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.about__article--choose',
    start: "top center",
    end: "center center",
  }
});
article3.from(".about__article__img-container--choose", {x:-50, opacity: 0})
        .from(".about__article__text--choose", {opacity: 0})


// Team
const team = gsap.timeline({
  scrollTrigger: {
    trigger: '.team',
    start: "top center",
    end: "40% center",
  }
});

team.from(".team__header", {opacity: 0, y: 50, duration: .4})
    .from(".team__sub-header", {opacity: 0, y:50, duration: .3})
    .from(".swiper--team", {opacity: 0, filter: 'blur(10px)', duration: .3});


// Projects
  const projects = gsap.timeline({
    scrollTrigger: {
      trigger: '.projects',
      start: "top center",
      end: "bottom center",
    }
  });

  projects.from(".projects__header", {opacity: 0, y: 50, duration: .4})
      .from(".projects__sub-header", {opacity: 0, y:50, duration: .4})
      .from("#particles-projects", {opacity:0, duration: .3})
      .from(".swiper--projects", {opacity: 0, filter: 'blur(8px)', duration: .3});

// Contacts
const contacts = gsap.timeline({
  scrollTrigger: {
    trigger: '.contacts',
    start: "top center",
    end: "40% center",
  }
});

contacts.from(".contacts__form__header", {opacity: 0, y: 50, duration: .4})
    .from(".contacts__form__sub-header", {opacity: 0, y:50, duration: .4})
    .from(".form__input", {opacity: 0, y:50, stagger: 0.3, duration: .4})
    .from(".button--submit", {opacity: 0, y:50, stagger: 0.3, duration: .4})