document.addEventListener('DOMContentLoaded', function(){
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('.box1', {
        scrollTrigger: {
            trigger:'.box1',
            toggleActions: "restart restart restart reset"
        },
        duration: 1,
        y: -50,
        opacity: 0
    });

    gsap.from('.box2', {
        scrollTrigger: {
            trigger:'.box2',
            toggleActions: "restart restart restart reset"
        },
        duration: 1.5,
        y: -50,
        opacity: 0
    });

    gsap.from('.box3', {
        scrollTrigger: {
            trigger:'.box3',
            toggleActions: "restart restart restart reset"
        },
        duration: 2,
        y: -50,
        opacity: 0
    });

})