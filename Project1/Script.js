var crsr=document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets)
{
    crsr.style.left=dets.x+30+"px";
    crsr.style.top=dets.y+30+"px";
})
var h4=document.querySelectorAll("#nav h4")
h4.forEach(function(elem)
{
    elem.addEventListener("mouseenter",function()
{
    crsr.style.scale=3;
    crsr.style.border="1px solid white"
    crsr.style.backgroundColor="transparent"

})
    elem.addEventListener("mouseleave",function()
{
    crsr.style.scale=1;
    crsr.style.border="0px solid #95C11E"
    crsr.style.backgroundColor="#95C11E"

})
})
var crsrblur=document.querySelector("#cursorblur");
document.addEventListener("mousemove",function(dets)
{
    crsrblur.style.left=dets.x-200+"px";
    crsrblur.style.top=dets.y-200+"px";
}

)


gsap.to("#nav",{
    backgroundColor:"#000",
    delay:1,
    height:"110px",
    scrollTrigger:
    {
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",
    {
        backgroundColor:"#000",
        scrollTrigger:
        {
            trigger:"#main",
            scroller:"body",
            // markers:true,
            start:"top -25%",
            end:"top -70%",
            scrub:2
        }
        
    }
)
gsap.from("#about img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        // markers:"true",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:"true",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})
gsap.from("#col1",{
    y:-70,
    x:-70,
    scrollTrigger:
    {
        trigger:"#col1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
    }
)
gsap.from("#col2",{
    y:70,
    x:70,
    scrollTrigger:
    {
        trigger:"#col1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
    }
)
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:
    {
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})