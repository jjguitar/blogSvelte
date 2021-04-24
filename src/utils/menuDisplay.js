const menuDisplay = () => {
  const menuIcon = document.querySelector('.hamburger_menu');
  const navbar = document.querySelector('.navbar');
  const navLink = document.querySelector('.nav-list');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
  });

  navLink.addEventListener('click', () => {
    navbar.classList.remove('change');
  });
}

export default menuDisplay
