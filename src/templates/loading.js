import '../assets/styles/Loading.scss'
import rocket from '../assets/img/codejjguitar.png'

const loading = () => {
  const loading = document.getElementById('loading')
  let block = `
  <div class="loading">
    <div class="pulse">
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
      <span style="--i:4;"></span>
      <span style="--i:5;"></span>

      <div class="rocket">
        <h1>@codejjguitar</h1>
      </div>
    </div>
  </div>
  `

  loading.innerHTML = block
}

export default loading