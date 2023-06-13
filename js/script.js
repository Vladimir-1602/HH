gsap.registerPlugin(ScrollTrigger);




const tl = gsap.timeline();


tl.from(".content-main", {
   x: -100,
   duration: 1.5,
   opacity: 0,
});

tl.from(".main__image", {
   duration: 1,
   opacity: 0,
}, ">");


tl.from(".header__container", {
   duration: 1,
   opacity: 0,
   y: -50,
}, ">");


gsap.fromTo('.main__image', { scale: 1, y: 0, x: 0 }, {
   scale: 0.5, y: 150, x: 150,
   scrollTrigger: {
      trigger: '.content-main',
      start: '-100',
      end: 'bottom',
      scrub: true,
   }
})

let itemsLeft = document.querySelectorAll('.item-servises');
let itemsLeftArray = Array.from(itemsLeft);
itemsLeftArray.forEach(item => (
   gsap.fromTo(item, { opacity: 0, y: -80 }, {
      opacity: 1, y: 0, duration: 2,
      scrollTrigger: {
         trigger: item,
         start: '-500',
         end: '+=300',
         scrub: true,
      }
   })
));






