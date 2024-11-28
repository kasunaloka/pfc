document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");
    const navbar = document.querySelector(".navbar");
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");

    // Intersection Observer for Active Link
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => link.classList.remove("active"));
                const activeLink = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, {
        threshold: 0.5, // Reduced from 0.7 for better mobile experience
    });

    sections.forEach((section) => observer.observe(section));

    // Mobile Menu Toggle
    mobileMenuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
        mobileMenuToggle.classList.toggle("active");
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            mobileMenuToggle.classList.remove("active");
        });
    });

    // Close menu if clicking outside
    document.addEventListener("click", (event) => {
        if (!navbar.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            navbar.classList.remove("active");
            mobileMenuToggle.classList.remove("active");
        }
    });
});