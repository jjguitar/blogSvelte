import logo from '../assets/img/codejjguitar.png'
import '../assets/styles/Header.scss';

const Header = () => {
  window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('hero');
    let header = document.getElementById('header');
    let screenSize = window.innerHeight;
    // console.log(elements)
    // console.log(`size ${screenSize}`)
      for(var i = 0; i < elements.length; i++) {
        let element = elements[i];
        // console.log(element.getBoundingClientRect().bottom)
        if(element.getBoundingClientRect().bottom < screenSize - 20) {
          header.classList.add('visible');
        } else {
          header.classList.remove('visible');
        }
      }
  });
  return `
      <img class="logo" src="${logo}" width="40" height="40" alt="logo">
      <nav class="navbar">
      <div class="hamburger_menu">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#about" class="nav-link">About me</a>
        </li>
        <li class="nav-item">
          <a href="#portfolio" class="nav-link">Portfolio</a>
        </li>
        <li class="nav-item">
          <a href="#footer" class="nav-link">Contact me</a>
        </li>
      </ul>
    </nav>
  `
}

export default Header
