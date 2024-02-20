
function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

function page1animation(){
    gsap.to(".page1 video",{
        filter: "blur(20px)",
        transform : "scale(.9)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:".main",
            marker: true ,
            start : "top 0",
            end : "top -50%",
            scrub: true 
        }
    })

    document.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            top: dets.y,
            left : dets.x,
            // duration: 1
        })
    })

}
page1animation()

function navanimation(){
    
gsap.to(".navpart2",{
    y : -100,
    duration:1,
    scrollTrigger:{
        trigger: ".nav",
        scroller:".main",
        start: "top -0%",
        end : "top -10%",
        scrub: true 
    }
})
gsap.to(".nav i",{
    display: "block",
    scrollTrigger:{
        trigger: ".nav",
        scroller: ".main",
        start: "top -15%",
        end: "top -20%",
        scrub: true 
    }
})
}
navanimation()

function page2animation(){
    gsap.to(".page2 img",{
        transform: "translateY(-50%) translateX(69%)",
        duration:10,
        repeat: -1,
        ease :"none"
    })
    // document.addEventListener("mouseenter",function(){
    //     gsap.to(".leftpage2",{
    //     })
    // })
    
}
page2animation()



document.querySelector(".nav i").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
        scale:2,
        backgroundColor: "black",
        mixBlendMode: "darken"
    })
    gsap.to(".nav i",{
        color: "white"
    })
    // gsap.to(".nav",{
    //     mixBlendMode: "normal"
    // })
})
document.querySelector(".nav i").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
        scale:1,
        backgroundColor: "white",
        mixBlendMode: "difference"
    })
    
})


function page3animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: ".page3content1 h1",
            scroller: ".main",
            start :"top 50%",
            end :"top -10%",
            scurb: 2
        }
    })
    
    tl2.from(".page3content1 h1",{
         y:50,
         scale: 1.15,
         opacity:0,
         duration:.4
    })
    
    
    tl2.from(".page3content1 p",{
         y:50,
         scale: 1.15,
         opacity:0,
         duration:.4
    })
    
    
    tl2.from(".page3content1 button",{
         y:50,
         scale: 1.15,
         opacity:0,
         duration:.4
    })
    
    tl2.from(".page3content2 p",{
        y:50,
        scale: 1.15,
        opacity:0 ,
        duration: 0.8
    } )
    
    tl2.from(".page3content2 video",{
        y:50,
        scale: 1.15,
        opacity:0 ,
        duration: 0.8
    } )
    
}

page3animation()

document.querySelector(".page3content2 video").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
        scale:1.5
    })
    gsap.to(".page3content2 video",{
        scale:1.15
    })
})
document.querySelector(".page3content2 video").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
        scale: 1
    })
    gsap.to(".page3content2 video",{
        scale:1 
    })
})




function page4page5animation(){
    
    
var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        start: "top 0",
        end: "top -70%",
        scrub:3,
        pin: true 
    }
})

tl4.to(".page4content",{
    transform: "translate(-50%)",
},"okay")

tl4.to(".page4 .sliderin",{
    x:650
},"okay")

document.querySelector(".page5").addEventListener("mousemove",function (dets){
    document.querySelector(".page5").style.background = `conic-gradient(at ${dets.x}px ${dets.y}px ,#b7b6eb,#5e87b8,#83cee0,#a4fbe3,#b7b6eb`
})

}
page4page5animation()