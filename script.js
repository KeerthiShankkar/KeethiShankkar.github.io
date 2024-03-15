const scroll = new LocomotiveScroll({
    el: document.querySelector('#container'),
    smooth: true
});



//Time function 

function  dispTime(){
    const time = new Date()
    const year = time.getFullYear();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const hours = time.getHours();
    document.getElementById("time").innerHTML = hours+":"+minutes+":"+seconds;

}
dispTime();
setInterval(dispTime,1000);



gsap.from("#welcome", {
    x: -700,
    duration: 0.75
});


gsap.from("#navBar li", {
    duration: 2,
    opacity: 0,
    stagger: 0.5
});


$(document).ready(function(){
    $("#mContent").css("opacity", 0).delay(700).animate({opacity: 1}, 1500);
});

gsap.from("#blob",{
    y:-1440,
    duration:3.5
})

gsap.from("#resumeButton",{
    x:-600,
    duration:1,
    scrub:.5
})
