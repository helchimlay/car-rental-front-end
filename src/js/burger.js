const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  nav.classList.toggle('nav-active');
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
    link.addEventListener('click', () => {
      nav.classList.remove('nav-active');
      navLinks.forEach(item => {
        item.style.animation = '';
        burger.classList.remove('toggle');
      });
    });
  });
  burger.classList.toggle('toggle');
};

export default navSlide;
