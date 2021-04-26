import router from './routes';
import loading from './templates/loading.js'

// window.addEventListener('load', router);

window.onload = () => {
  loading()
  router()
  document.getElementById('loading').classList.add('hide')
  setTimeout(() => {
    loading.style.display = 'none'
  },600)
}
