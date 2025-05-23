// script.js

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a[href^='#']");

  // Smooth scrolling
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });
});
