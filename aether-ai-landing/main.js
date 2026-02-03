document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.style.background = "rgba(10, 10, 12, 0.95)";
      navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.1)";
    } else {
      navbar.style.background = "rgba(10, 10, 12, 0.8)";
      navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.05)";
    }
  });

  // Reveal animations on scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-up");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".feature-card, .stat-item, .section-header, .cta-box")
    .forEach((el) => {
      el.style.opacity = "0"; // Initial state for JS-reveal
      observer.observe(el);
    });

  // Simple mobile menu placeholder
  const mobileToggle = document.querySelector(".mobile-toggle");
  mobileToggle.addEventListener("click", () => {
    alert("Mobile menu functionality would go here!");
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
