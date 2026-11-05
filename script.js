
const progressBar = document.getElementById("progressBar");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Scroll progress bar
function updateProgress() {
    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollHeight > 0
        ? (window.scrollY / scrollHeight) * 100
        : 0;

    progressBar.style.width = progress + "%";
}

window.addEventListener("scroll", updateProgress);
updateProgress();

// Mobile menu
menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");
});

// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("open");
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(function (element) {
    observer.observe(element);
});
