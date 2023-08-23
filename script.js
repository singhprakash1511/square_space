var tl=gsap.timeline();
tl.from("#nav h3, #nav h1, #nav button",{
    y:-100,
    duration:0.3,
    delay:0.6,
    opacity:0,
    stagger:0.3
})

tl.from("#main img",{
    y:100,
    duration:0.4,
    delay:0.4,
    opacity:0,

})

tl.from("#main>h1",{
    y:100,
    duration:0.4,
    delay:0.4,
    opacity:0,
    stagger:0.5
})

tl.from("#main>h5",{
    scale:0,
    opacity:0

})
tl.to("h5",{
    y:40,
    repeat:-1,
    duration:0.6,
    yoyo:true,
})