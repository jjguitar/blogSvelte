import router from './routes';

window.addEventListener('load', router);

window.onload = () => {
  document.getElementById('loading').classList.add('hide')
  setTimeout(() => {
    loading.style.display = 'none'
  },600)
}
