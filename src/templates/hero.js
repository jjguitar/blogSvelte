import '../assets/styles/Hero.scss'
import Social from './socialMedia.js'
import background from '../assets/img/landscape.jpg'

const hero = () => {
  return `
    <div id="hero" class="hero" style="background: linear-gradient(0deg,rgba(0,0,0,.7),rgba(19,19,19,.7) 75%,rgba(33,33,33,.7)),url(${background}); background-position: center;background-attachment: scroll; background-repeat: no-repeat; background-size: cover;">
      <div class="hero__container">
        <h1>Hey, I'm Jhon</h1>
        <h2>Front End developer</h2>
        <div class="hero__divider-container">
          <div class="line-divider"></div>
          <span></span>
          <span></span>
          <span></span>
          <div class="line-divider"></div>
        </div>
        ${Social()}
        <div class="arrow__container">
          <a href="#about"><div class="arrow-down"></div></a>
        </div>
      </div>
    </div>
  `
}

export default hero
