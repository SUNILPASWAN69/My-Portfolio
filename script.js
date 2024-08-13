    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('.main'),
    //     smooth:true
    // });

// gsap.timeline({scrollTrigger:{
//     trigger:"body",
//     start:"50% 50%",
//     end:"50% 50%",
//     scrub:true,
//     markers:true
// }})

var crsr=document.querySelector(".cursor")
var crsr1=document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
        x:dets.x,
        y:dets.y
    })
    gsap.to(crsr1,{
        x:dets.x-150,
        y:dets.y-150,
    })
})
var navs = document.querySelectorAll("nav a")
navs.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.height = "40px"
        crsr.style.width = "40px"
        crsr.style.border = "2px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.height = "20px"
        crsr.style.width = "20px"
        crsr.style.border = "none"
        crsr.style.backgroundColor = "#95c11e"
    })
})
var mix = document.querySelector("body")
mix.addEventListener("mouseenter",function(){
    crsr.style.mixBlendMode = "difference"
})
mix.addEventListener("mouseleave",function(){
    crsr.style.mixBlendMode = "normal"
})
if (window.innerWidth > 786){
    gsap.to("nav",{
        backgroundColor:"rgb(8, 4, 230)",
        height:"14.5vh",
        duration:0.1,
        scrollTrigger:{
            trigger:"nav",
            scroller:"body",    
            start:"top -10%",
            end:"top -11%",
            scrub:2,
        }
    })
    
}

gsap.from(".page1 .text h1,.text span",{
    y: 90,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.2
})
gsap.to(".main",{
    backgroundColor:"rgba(0, 0, 0, 0.7)",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -50%",
        end:"top -80%",
        scrub:2
    }
})
gsap.from(".image",{
    x:-100,
    opacity:0,
    duration:2
})
gsap.from("#g10",{
    y:-100,
    duration:1,
    delay:1
})
gsap.from(".cards1",{
    y:90,
    opacity:0,
    duration:0.5,
    delay:0.2,
    // stagger:0.2,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        marker:true
        
    }
})
gsap.from(".cards2",{
    y:90,
    opacity:0,
    duration:0.4,
    delay:0.5,
    // stagger:0.2,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        marker:true
        
    }
})
gsap.from(".cards3",{
    y:90,
    opacity:0,
    duration:0.5,
    delay:0.6,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        marker:true
    }
})
gsap.from("#git",{
    x:-100,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#git",
        scroller:"body",
        start:"top 60%",
        end:"top 100%",
        // scrub:3
    }
})
n = document.querySelector("nav")
navpart = document.querySelector(".navparts")
icon1 = document.querySelector("nav .ri-menu-3-line")
icon2 = document.querySelector("nav .ri-close-line")
navs1 = document.querySelectorAll(".navparts a")
navdisplay = document.querySelector(".personalportfolio")
icon1.onclick = function(){
    navdisplay.style.display = "none"
    icon1.style.display = "none"
    icon2.style.display = "block"
    navs1.forEach(function(d){
        d.style.display = "block"
    })
    n.style.height = "40vh"
    navpart.style.display = "grid"
}
icon2.onclick = function(){
    navs1 = document.querySelectorAll(".navparts a")
    navdisplay.style.display = "block"
    icon1.style.display = "block"
    icon2.style.display = "none"
    navs1.forEach(function(de){
        de.style.display = "none"
    })
    n.style.height = "10vh"

    // icon2 = document.querySelector("nav .ri-close-line")
}