import '../assets/styles/About.scss'
import draw from '../assets/img/draw.svg'
import tools from '../assets/img/tools.svg'
import maintenance from '../assets/img/maintance.svg'

const About = () => {
  return `
    <div class="title__container">
      <h1 class="title">ABOUT ME</h1>
    </div>
    <p class="about__me_details">Hi there 👋 <br><br>
    I'm Jhon Trillos, Front End developer, passionate about technology and a person who is constantly learning. For more than 4 years I've been working on a financial banking startup developing and leading projects for the main bank entities of my country.</p><br>
    <p class="about__me_details">Electronic engineer with more than 7 years of experience  on the development area.</p><br>
    <p class="about__me_details">I think I'm a constant and persistent person. If you like, take a look of <a href="#portfolio">my work</a>, and if you like it and you have an idea let's talk (<a href="https://www.instagram.com/codejjguitar" target="_blank">instagram</a>, <a href="https://www.linkedin.com/in/jhon-jairo-enrique-trillos-alvarez-68b128148/" target="_blank">
    linkedin</a>), i have many tools at your disposal to make it real.</p>
    <div class="hero__divider-container">
      <div class="line-divider"></div>
      <span></span>
      <span></span>
      <span></span>
      <div class="line-divider"></div>
    </div>
    <div class="about-container__work">
      <div class="about__work">
        <h2><img src="${draw}" width="30" height="30">Design</h2>
        <p class="about__details">I can design the website based on your needs and suggestions. I can also create it from scratch by consulting with you during work.
        </p>
      </div>
      <div class="about__work">
        <h2><img src="${tools}" width="30" height="30">Development</h2>
        <p class="about__details">Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.
        </p>
      </div>
      <div class="about__work">
        <h2><img src="${maintenance}" width="30" height="30">Maintenance</h2>
        <p class="about__details">In case of any problems or changes need, I can introduce new functionalities and solutions.
        </p>
      </div>
    </div>
  `
}

export default About
