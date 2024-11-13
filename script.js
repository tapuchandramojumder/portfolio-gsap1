let tl = gsap.timeline()


tl.from("#nav h3",{
    y:-50,
    opacity:0,
    duration:1.5,
    delay:0.5,
    stagger:.21,
})

tl.from("h1",{
    x:-500,
    opacity:0,
    duration:.8,
    delay:0.2,
    stagger:.4,
})

tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:.8,
    delay:0.2,
    stagger:.4,
})