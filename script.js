document.addEventListener("DOMContentLoaded", () => {
  console.log("Kabsa Portfolio Loaded");

  // Optional: smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
}); 
