gsap.registerPlugin(ScrollTrigger);



gsap.from("#name",{
    x:-700,
    duration:1
})

gsap.from("#education",{
  x:-400,
  duration:3,
  toggleAction:"restart none"  ,
  scrollTrigger:{
    trigger:"#education",
    start:500
  }

})