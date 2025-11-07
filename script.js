// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll + active link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Retire active de tous
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    // Ajoute active
    this.classList.add('active');

    // Scroll doux
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Ferme le menu mobile
    navLinks.classList.remove('active');
  });
});

// Bouton hero → projets
document.querySelector('.btn').addEventListener('click', () => {
  document.querySelector('#projets').scrollIntoView({ behavior: 'smooth' });
});