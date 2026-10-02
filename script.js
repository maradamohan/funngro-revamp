// ================================
// FUNNGRO WEBSITE INTERACTIONS
// ================================

// Fade-in animation when sections enter the screen
const animatedElements = document.querySelectorAll(
    ".section, .stats, .benefits, .cta, .project-card, .step"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.12
    }
);

animatedElements.forEach((element) => {
    element.classList.add("animate");
    observer.observe(element);
});


// ================================
// ACTIVE NAVIGATION
// ================================

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


// ================================
// BUTTON CLICK EFFECT
// ================================

const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add("clicked");

        setTimeout(() => {
            button.classList.remove("clicked");
        }, 250);
    });
});


// ================================
// YEAR AUTOMATICALLY UPDATES
// ================================

const yearText = document.querySelector("footer p");

if (yearText) {
    const currentYear = new Date().getFullYear();

    yearText.innerHTML =
        `© ${currentYear} Funngro Revamp. Designed for learning and demonstration.`;
}