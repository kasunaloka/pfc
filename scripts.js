document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.createElement('nav');
    navbar.className = 'navbar mobile-navbar';
    navbar.innerHTML = `
        <ul>
            <li><a href="index.html"><i class="fas fa-home"></i>Home</a></li>
            <li><a href="games.html"><i class="fas fa-gamepad"></i>Gaming</a></li>
            <li><a href="reviews.html"><i class="fas fa-laptop"></i>Tech Reviews</a></li>
            <li><a href="podcast.html"><i class="fas fa-microphone"></i>Podcast</a></li>
            <li><a href="contact.html"><i class="fas fa-envelope"></i>Contact</a></li>
        </ul>
    `;

    // Mobile Menu Toggle
    mobileMenuToggle.addEventListener('click', () => {
        if (!document.body.contains(navbar)) {
            document.body.appendChild(navbar);
            setTimeout(() => navbar.classList.add('active'), 10);
        } else {
            navbar.classList.remove('active');
            setTimeout(() => {
                document.body.removeChild(navbar);
            }, 300);
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (navbar.classList.contains('active') && 
            !mobileMenuToggle.contains(event.target) && 
            !navbar.contains(event.target)) {
            navbar.classList.remove('active');
            setTimeout(() => {document.addEventListener('DOMContentLoaded', () => {
                const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
                const body = document.body;
                const navbar = document.createElement('nav');
                navbar.className = 'mobile-navbar';
                
                // Create mobile navigation menu
                navbar.innerHTML = `
                    <ul>
                        <li><a href="index.html"><i class="fas fa-home"></i>Home</a></li>
                        <li><a href="games.html"><i class="fas fa-gamepad"></i>Gaming</a></li>
                        <li><a href="reviews.html"><i class="fas fa-laptop"></i>Tech Reviews</a></li>
                        <li><a href="podcast.html"><i class="fas fa-microphone"></i>Podcast</a></li>
                        <li><a href="contact.html"><i class="fas fa-envelope"></i>Contact</a></li>
                    </ul>
                `;
            
                // Mobile Menu Toggle Functionality
                mobileMenuToggle.addEventListener('click', toggleMobileMenu);
            
                function toggleMobileMenu() {
                    // Toggle menu visibility
                    if (!body.contains(navbar)) {
                        body.appendChild(navbar);
                        mobileMenuToggle.classList.add('active');
                        setTimeout(() => navbar.classList.add('active'), 10);
                        
                        // Disable scroll on body
                        body.style.overflow = 'hidden';
                    } else {
                        navbar.classList.remove('active');
                        mobileMenuToggle.classList.remove('active');
                        
                        // Re-enable scroll
                        setTimeout(() => {
                            body.removeChild(navbar);
                            body.style.overflow = 'auto';
                        }, 300);
                    }
                }
            
                // Close mobile menu when a link is clicked
                navbar.addEventListener('click', (event) => {
                    if (event.target.tagName === 'A') {
                        toggleMobileMenu();
                    }
                });
            
                // Close mobile menu when clicking outside
                document.addEventListener('click', (event) => {
                    if (navbar.classList.contains('active') && 
                        !mobileMenuToggle.contains(event.target) && 
                        !navbar.contains(event.target)) {
                        toggleMobileMenu();
                    }
                });
            
                // Highlight active navigation link
                const currentPage = window.location.pathname.split('/').pop();
                const desktopNavLinks = document.querySelectorAll('.navbar a');
                const mobileNavLinks = navbar.querySelectorAll('a');
            
                function setActiveLinks(links) {
                    links.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === currentPage) {
                            link.classList.add('active');
                        }
                    });
                }
            
                setActiveLinks(desktopNavLinks);
                setActiveLinks(mobileNavLinks);
            });
                document.body.removeChild(navbar);
            }, 300);
        }
    });

    // Active navigation link highlighting
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                heroSection.classList.add("fade-in");
            }
        });
    }, {
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    observer.observe(heroSection);
});

document.addEventListener('DOMContentLoaded', () => {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: true,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 2
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});
// Smooth Scroll and Back to Top Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '&#9650;'; // Up arrow
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    // Show/Hide Back to Top Button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Scroll to Top when Button is Clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
