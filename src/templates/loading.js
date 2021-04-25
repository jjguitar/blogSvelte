import '../assets/styles/Loading.scss'
import rocket from '../assets/img/rocket.png'

const loading = () => {
  return `
  <div class="loading">
    <div class="pulse">
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
      <span style="--i:4;"></span>
      <span style="--i:5;"></span>

      <div class="rocket">
        <img src="${rocket}">
      </div>
    </div>
  </div>
  `
}

export default loading