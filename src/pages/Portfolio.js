import '../assets/styles/Portfolio.scss'
import portfolio from '../assets/img/portfolioDivider.jpg'
import pr1 from '../assets/img/pr1.jpg'
import pr2 from '../assets/img/pr2.PNG'
import pr3 from '../assets/img/pr3.PNG'
import pr6 from '../assets/img/pr6.PNG'

const Portfolio = () => {
  return `
    <div class="portfolio__divider" style="background: linear-gradient(
      0deg,rgba(0,0,0,.5),rgba(19,19,19,.5) 75%,rgba(33,33,33,.5)), url(${portfolio}); background-repeat: no-repeat; background-position: center; background-size: cover;">
      <h1 class="title">PORTFOLIO</h1>
    </div>
    <div class="portfolio__container">
      <div class="portfolio-item">
        <ul>
          <li>
            <div class="portfolio-card">
              <img src="${pr1}" width="320" height="200">
            </div>
            <div class="portfolio-card-info">
              <div><h1>Spuntify</h1></div>
              <p>This is a clone of Spotify that use their API. Building with JS vanilla and CSS pure. Check a little, is awesome.</p>
              <div><h3><a href="https://jjguitar.github.io/spuntify/" target="_BLANK">Demo</a></h3><h3><a href="https://github.com/jjguitar/spuntify" target="_BLANK">Code</a></h3></div>
              <div><h4>JavaScript</h4><h4>HTML</h4><h4>CSS</h4><h4>API</h4></div>
            </div>
          </li>
          <li>
            <div class="portfolio-card">
              <img src="${pr2}" width="320" height="200">
            </div>
            <div class="portfolio-card-info">
              <div><h1>Pokemón Memory</h1></div>
              <p>Do you like Pokemón? Check this. Building with JS vanilla and use the POKE API, this game is about your memory, enjoy while finding different pairs random.</p>
              <div><h3><a href="https://pokemonmemorybycodejjguitar.netlify.app/" target="_BLANK">Demo</a></h3><h3><a href="https://github.com/jjguitar/pokemonMemory" target="_BLANK">Code</a></h3></div>
              <div><h4>JavaScript</h4><h4>Webpack</h4><h4>CSS</h4><h4>API</h4></div>
            </div>
          </li>
          <li>
            <div class="portfolio-card">
              <img src="${pr6}" width="320" height="200">
            </div>
            <div class="portfolio-card-info">
              <div><h1>eConnect</h1></div>
              <p>This project it was for a church tha need it control the different member ij their community and their process. Building with stack MERN, provide a completed use, login, save in a BD and continuos dynamic information.</p>
              <div><h3><a href="https://ekklesiaconnect.herokuapp.com/" target="_BLANK">Demo</a></h3><h3><a href="https://github.com/jjguitar/eConnect" target="_BLANK">Code</a></h3></div>
              <div><h4>JavaScript</h4><h4>MERN</h4><h4>CSS</h4><h4>API</h4></div>
            </div>
          </li>
          <li>
            <div class="portfolio-card">
              <img src="${pr3}" width="320" height="200">
            </div>
            <div class="portfolio-card-info">
              <div><h1>Rick and Morty</h1></div>
              <p>This page is for lovers of Rick and Morty series, use vanillaJS and Rick and Morty API that provide different information about their characters. Check and learn about awesome series.</p>
              <div><h3><a href="https://ellokilloderickysuscompas.netlify.app/" target="_BLANK">Demo</a></h3><h3><a href="https://github.com/jjguitar/vainillaJS" target="_BLANK">Code</a></h3></div>
              <div><h4>JavaScript</h4><h4>HTML</h4><h4>CSS</h4><h4>API</h4></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `
}

export default Portfolio
