import Header from '../templates/header.js'
import Hero from '../templates/hero.js'
import About from '../pages/About.js'
import Portfolio from '../pages/Portfolio.js'
import Footer from '../templates/footer.js'
import menuDisplay from '../utils/menuDisplay.js'

const router = async () => {
  const header = document.getElementById('header')
  const iam = document.getElementById('hero')
  const about = document.getElementById('about')
  const portfolio = document.getElementById('portfolio')
  const footer = document.getElementById('footer')

  header.innerHTML = await Header()
  iam.innerHTML = await Hero()
  about.innerHTML = await About()
  portfolio.innerHTML = await Portfolio()
  footer.innerHTML = await Footer()

  menuDisplay()
}

export default router
