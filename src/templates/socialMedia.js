import github from '../assets/img/icon-github.svg'
import linkedIn from '../assets/img/linkedin.svg'
import instagram from '../assets/img/instagram.svg'

const social = () => {
  return `
  <div class="hero__social-media">
    <a href="https://www.instagram.com/codejjguitar" target="_blank">
      <img src="${instagram}" width="50" height="50" alt="instagram">
    </a>
    <a href="https://www.linkedin.com/in/jhon-jairo-enrique-trillos-alvarez-68b128148/" target="_blank">
      <img src="${linkedIn}" width="50" height="50" alt="linkedIn">
    </a>
    <a href="https://github.com/jjguitar" target="_blank">
      <img src="${github}" width="50" height="50" alt="github">
    </a>
  </div>
  `
}

export default social
