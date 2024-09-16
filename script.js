function page1animation(){
    var tl=gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    opacity:0,
    duration: 1,
    delay:1,
    stagger:0.2
})
tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:1,
    delay:1
})
tl.from(".center-part1 p",{
    x:-200,
    opacity:0,
    duration:1,
})
tl.from(".center-part1 button",{
    x:-200,
    opacity:0,
    duration:1,
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:1,
},"-=1")
tl.from(".section1bottom img",{
    opacity:0,
    y: 30,
    duration:1,
    delay:1,
    stagger: 0.2
})
}
gsap.registerPlugin(ScrollTrigger);

function page2animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: ".section2",
            scroller:"body",
            markers: false,
            start: "top 60%",
            end:"top 0",
            scrub:2,
        }
    })
    tl2.from(".services h3", {
        opacity: 0,
        x: -100,
    });
    tl2.from(".services p", {
        opacity: 0,
        x: 100,
    });
    tl2.from(".element1",{
        opacity: 0,
        x: -300,
    });
    tl2.from(".element2",{
        opacity: 0,
        x: 300,
    });
}
function page3animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: ".section3",
            scroller:"body",
            markers: false,
            start: "top 50%",
            end:"top 0%",
            scrub:3,
        }
    })
    tl3.from(".top",{
        opacity:0,
        duration:2
    })
    tl3.from(".part1",{
        x:-200,
        opacity:0,
        duration:1,
    }, "-=1.5")
    tl3.from(".part2 img",{
        x:200,
        opacity:0,
        duration:1,
    }, "-=1.5")
    tl3.from(".Case_Study h3", {
        opacity: 0,
        x: -100,
    });
    tl3.from(".Case_Study p", {
        opacity: 0,
        x: 100,
    });
    tl3.from(".container2",{
        opacity:0,
        duration:2
    })
    tl3.from("#ele",{
        opacity:0,
        duration:1,
        delay: 1
    })
    tl3.from("#ele h4",{
        y:200,
        opacity:0,
        duration:1,
        delay: 1,  
    })
}

page1animation()
page2animation()
page3animation()


