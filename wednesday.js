var t1 = gsap.timeline({
    delay:0.3,
})
t1.from("#nav h1, #nav h3,#nav i, #nav h2",{
    
    y:-50,
    duration:1,
    opacity:0,
    stagger:0.1
})
.from("#center h1",{
   opacity:0,
   y:40,
   scale:1.2,
   duration:0.5
})
.from("#center>p",{
    opacity:0,
    y:40,
    scale:1.2,
    duration:0.3
 })
 .from("#center img",{
    scale:0.7,
    duration:0.7,
    opacity:0
 })
 
 var t2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        start:"top 80%"
    }
})
 t2.from("#page2 h1",{
    y:30,
    opacity:0,
 })
 t2.from("#page2 p",{
    y:30,
    opacity:0,
 })
 gsap.from("#center3 .cont",{
    scale:0.8,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".cont",
        scroller:"body",
        start:"top 80%"
    }
 })
 var t3 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        start:"top 80%"
    }
})

t3.from("#page3 h1",{
    y:30,
    opacity:0,
 })

 gsap.from("#container .contain",{
    scale:0.8,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".contain",
        scroller:"body",
        start:"top 80%"
    }
 })
 var t4 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page4",
        scroller: "body",
        start:"top 80%"
    }
})
t4.from("#page4 h1",{
    y:30,
    opacity:0,
 })
 t4.from("#page4 p",{
    y:30,
    opacity:0,
 })
 gsap.from("#box-cont .boxes",{
    scale:0.8,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".boxes",
        scroller:"body",
        start:"top 80%"
    }
 })
 var t5 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page5",
        scroller: "body",
        start:"top 80%"
    }
})
t5.from("#purchase1",{
    y:50,
    opacity:0

})


var t6 = gsap.timeline({
    scrollTrigger:{
        trigger: "#center4",
        scroller: "body",
        start:"top 80%",
        stagger:0.2
    }
})
t6.from("#box #box1",{
    width:0,
})
t6.from("#box #box2",{
    width:0,
})
t6.from("#box #box3",{
    width:0,
})
t6.from("#box #box4",{
    width:0,
})