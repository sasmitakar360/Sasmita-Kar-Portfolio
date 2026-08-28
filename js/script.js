/* =========================================================
   SASMITA KAR PORTFOLIO
   JavaScript
   ========================================================= */


/* ================= PAGE LOADER ================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("hidden");

        }, 700);

    }

});


/* ================= DOM READY ================= */

document.addEventListener("DOMContentLoaded", function () {


    /* ================= YEAR ================= */

    const yearElement =
        document.getElementById("currentYear");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* ================= TYPING EFFECT ================= */

    const typingText =
        document.getElementById("typingText");

    const words = [
        "Computer Science Student",
        "Data Science Enthusiast",
        "AI / ML Learner",
        "Generative AI Explorer",
        "Python Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;


    function typeEffect() {

        if (!typingText) {
            return;
        }

        const currentWord =
            words[wordIndex];


        if (!deleting) {

            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;


            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1300
                );

                return;
            }

        } else {

            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;


            if (charIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) %
                    words.length;

            }

        }


        setTimeout(
            typeEffect,
            deleting ? 45 : 80
        );

    }

    typeEffect();



    /* ================= MOBILE MENU ================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle("open");

                const isOpen =
                    navMenu.classList.contains("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                );

            }
        );


        const navLinks =
            navMenu.querySelectorAll(".nav-link");


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove("open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

    }



    /* ================= MOUSE GLOW ================= */

    const mouseGlow =
        document.querySelector(".mouse-glow");


    if (mouseGlow) {

        document.addEventListener(
            "mousemove",
            function (event) {

                mouseGlow.style.left =
                    event.clientX + "px";

                mouseGlow.style.top =
                    event.clientY + "px";

            }
        );

    }



    /* ================= PARTICLES ================= */

    const particles =
        document.getElementById("particles");


    if (particles) {

        const particleCount =
            window.innerWidth < 700
                ? 20
                : 40;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const particle =
                document.createElement("span");

            particle.className =
                "particle";


            particle.style.left =
                Math.random() * 100 + "%";


            particle.style.animationDuration =
                (8 + Math.random() * 12) + "s";


            particle.style.animationDelay =
                (-Math.random() * 15) + "s";


            particle.style.opacity =
                Math.random();


            particles.appendChild(
                particle
            );

        }

    }



    /* ================= PROFILE IMAGE FALLBACK ================= */

    const profileImage =
        document.getElementById("profileImage");

    const profileFallback =
        document.getElementById("profileFallback");


    if (
        profileImage &&
        profileFallback
    ) {

        profileImage.addEventListener(
            "error",
            function () {

                profileImage.style.display =
                    "none";

                profileFallback.classList.add(
                    "show"
                );

            }
        );

    }



    /* ================= PROJECT FILTER ================= */

    const filterButtons =
        document.querySelectorAll(
            ".filter-btn"
        );

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    filterButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    filterButtons.forEach(
                        function (btn) {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    const filter =
                        button.dataset.filter;


                    projectCards.forEach(
                        function (card) {

                            const category =
                                card.dataset.category;


                            if (
                                filter === "all" ||
                                category === filter
                            ) {

                                card.classList.remove(
                                    "hidden"
                                );

                            } else {

                                card.classList.add(
                                    "hidden"
                                );

                            }

                        }
                    );

                }
            );

        }
    );



    /* ================= CERTIFICATE MODAL ================= */

    const modal =
        document.getElementById(
            "certificateModal"
        );

    const modalImage =
        document.getElementById(
            "modalImage"
        );

    const modalTitle =
        document.getElementById(
            "modalTitle"
        );

    const modalClose =
        document.getElementById(
            "modalClose"
        );

    const modalOverlay =
        document.getElementById(
            "modalOverlay"
        );

    const certificateButtons =
        document.querySelectorAll(
            ".certificate-button"
        );


    function openModal(
        image,
        title
    ) {

        if (!modal) {
            return;
        }

        modal.classList.add("open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );


        if (modalImage) {

            modalImage.src =
                image;

        }


        if (modalTitle) {

            modalTitle.textContent =
                title;

        }


        document.body.classList.add(
            "no-scroll"
        );

    }


    function closeModal() {

        if (!modal) {
            return;
        }

        modal.classList.remove(
            "open"
        );

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "no-scroll"
        );

    }


    certificateButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    openModal(
                        button.dataset.image,
                        button.dataset.title
                    );

                }
            );

        }
    );


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeModal
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeModal();

            }

        }
    );



    /* ================= SCROLL REVEAL ================= */

    const revealElements =
        document.querySelectorAll(
            ".glass-card, .section-title, .section-label"
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );

        }
    );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.08
            }
        );


    revealElements.forEach(
        function (element) {

            observer.observe(
                element
            );

        }
    );



    /* ================= ACTIVE NAVIGATION ================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) === "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();



    /* ================= CONTACT FORM ================= */

    const contactForm =
        document.getElementById(
            "contactForm"
        );

    const formMessage =
        document.getElementById(
            "formMessage"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                if (formMessage) {

                    formMessage.textContent =
                        "This is a static form. Please contact me directly at sasmitakar360@gmail.com.";

                }

            }
        );

    }



    /* ================= SMOOTH ANCHOR ================= */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            function (anchor) {

                anchor.addEventListener(
                    "click",
                    function (event) {

                        const targetId =
                            anchor.getAttribute(
                                "href"
                            );


                        if (
                            targetId === "#"
                        ) {

                            return;

                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (target) {

                            event.preventDefault();


                            target.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    }
                );

            }
        );

});