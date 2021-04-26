import router from './routes';
import loading from './templates/loading.js'

// window.addEventListener('load', router);

window.onload = async () => {
  loading()
  await router()
  setTimeout(() => {
    document.getElementById('loading').classList.add('hide')
  },300)
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none'
  },600)
}
