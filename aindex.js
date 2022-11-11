// аккордион для faq
if (window.innerWidth < 768) {
    gsap.set('.faq-descr', { autoAlpha: 0, height: 0 });
    gsap.set('.iconV, .iconH', {transformOrigin: '50% 50%'});

    let faqs = gsap.utils.toArray(".faq_it");


    faqs.forEach(faq => {
        let answer = faq.querySelector('.faq-descr');
        let title = faq.querySelector('.faq-tit');
        let iconV = faq.querySelector('.iconV');
        let iconH = faq.querySelector('.iconH');
        
        //assign as variable
        let tl = gsap.timeline({ paused: true });
        
        tl.to(faq, { duration: .1})
            .to(answer, { 
                duration: .25,
                height: 'auto',
                // autoAlpha: 1,
            }, "<-=.1")
            
            .to(iconV, { 
                duration: .2,
                rotate: 135
            }, '-=.15')  
            .to(iconH, {
                duration: .2,
                rotate: -42.5
            }, '-=.15')
            .to(answer, {
                autoAlpha: 1,
            }, "<-=.1")
        //start timeline resting in reversed state
        tl.reverse()
        
        faq.addEventListener("click", () => {
            //toggle reversed property of my timeline
            tl.reversed(!tl.reversed())
        })
    })
}

// аккордион для faq



gsap.registerPlugin(ScrollTrigger);

            let tl = gsap.timeline()

            tl.to('.img_index-img', {
                height: '100%',
                scale: 1,
                opacity: 1,
                duration: 2.2,
                ease: "power4.inOut"
            })
            tl.from('.h1', {
                // clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                // webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 0,
                duration: 1,
                x: 100,
                ease: "power2.inOut"
            })

            gsap.to(".scroll_img_two", {
                width: '100%',
                opacity: 1,
                duration: 2,
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: ".scroll_img_two",
                    start: "top 600px",
                    end: "bottom 100px",
                    // scrub: true,
                    // scrub: true,
                    // markers: true,
                    // id: "scrub"
                }
            });
            gsap.from(".text", {
                y: 70,
                opacity: 0,
                duration: 2,
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: ".text",
                    start: "top bottom",
                    // end: "bottom 100px",
                    // scrub: true,
                    // scrub: true,
                    // markers: true,
                    // id: "scrub"
                }
            });

            gsap.from(".scroll_bestsl-img", {
                y: 120,
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
                stagger: 1,
                scrollTrigger: {
                    trigger: ".sm_title-bestsl",
                    start: "top center",
                    scrub: 1,
                    onLeave: self => self.kill(false, true)
                }
            });
            gsap.from(".scroll_bestsl-img--two", {
                y: 120,
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
                stagger: 1,
                scrollTrigger: {
                    trigger: ".it_trig",
                    start: "top bottom",
                    end: "center center",
                    scrub: 1,
                    onLeave: self => self.kill(false, true)
                }
            });

            gsap.to(".scroll_img_nwltr", {
                // height: '100%',
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
                opacity: 1,
                duration: 1.5,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".sm_title-nwltr",
                    start: "top center",
                    // end: "bottom center",
                    // scrub: true,
                    // scrub: 2,
                    // markers: true,
                    // id: "scrub"
                }
            });

            gsap.from(".sub_b", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: ".sub_title",
                    start: "center center",
                    end: "bottom center",
                    // scrub: true,
                    // scrub: 2,
                    // markers: true,
                    // id: "scrub"
                }
            });


            //CERTIFICATE
            gsap.to(".sert_img", {
                clipPath: 'inset(0% 0% 0% 0%)',
                opacity: 1,
                duration: 2,
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: ".sm_title_sert",
                    start: "bottom center",
                    // end: "bottom center",
                    // scrub: true,
                    // scrub: 2,
                    // markers: true,
                    // id: "scrub"
                }
            });