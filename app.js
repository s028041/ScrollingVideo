const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
///End section
const section = document.querySelector("section");
const end = section.querySelector("h1");
//SCROLLINGMAGIC
const controller = new ScrollMagic.Controller();
//Scenes
let scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);
//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//VIDEO animation
let accelAmount = 0.1; //current frame change in seconds
let scrollPos = 0;
let delay = 0;

scene.on("update", e => {
  scrollPos = e.scrollPos / 1000; //get results in a sec
});

setInterval(
  () => {
    delay += (scrollPos - delay) * accelAmount; // we add delay whatever we scroll to, and accelerate it
    console.log(scrollPos, delay);
    video.currentTime = delay;
  },
  41,
  1
); // numer is a framePerSec
