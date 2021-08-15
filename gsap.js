var tl = gsap.timeline();

tl
.from(".st", {
    stagger: .2,
    duration: 1,
    x:30,
    opacity:0,
    ease: "Expo.easeInOut"
})
.from("#centre h2", {
    stagger: .2,
    duration: 1,
    y:10,
    opacity:0,
    ease: "Expo.easeInOut"
}, '-=.5')

