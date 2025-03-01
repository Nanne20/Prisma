gsap.registerPlugin(ScrollTrigger);

        const elementsToAnimate = [
            { selector: ".navbar-brand, .nav-item", delay: 0.5, y: -30 },
            { selector: ".btn-primary", delay: 1, y: 30 },
            { selector: ".col-md-5", delay: 0.5, y: 50 },
            { selector: ".card-title", delay: 0, x: -100 },
            { selector: ".historia h1", delay: 0, y: -50 },
            { selector: ".historia-content p", delay: 0.5, y: -50 },
            { selector: ".nosotras img", delay: 0, x: -100 },
            { selector: ".contenido h1", delay: 0.5, y: 50 },
            { selector: ".contenido p", delay: 1, y: 50 },
            { selector: ".valores h2", delay: 0, y: 50 },
            { selector: ".valor", delay: 0.5, y: 50 },
            { selector: ".miembro-equipo", delay: 0.5, scale: 0.5 } 
        ];

        elementsToAnimate.forEach(item => {
            gsap.from(item.selector, {
                scrollTrigger: {
                    trigger: item.selector,
                    toggleActions: "restart pause restart reset",
                    start: "top 80%"
                },
                duration: 1,
                y: item.y,
                opacity: 0,
                stagger: 0.2,
                delay: item.delay,
                scale: item.scale,
                x: item.x
            });
        });

        