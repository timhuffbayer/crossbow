import { html, reactive } from 'https://esm.sh/@arrow-js/core'
import page from 'https://esm.sh/page'
import Layout from './components/layout/Layout.js'

import HomePage from './pages/home/HomePage.js'
import AboutPage from './pages/about/AboutPage.js'

export default function App() {
  const state = reactive({ page: ''})

  // For github pages
  if(location.pathname.includes('quiver')) {
    page.base('/quiver')
  }

  page.redirect('/index.html', '/')
  page('/', () => {
    state.page = Layout(HomePage, { title: 'Home' })
  })
  page('/about', () => {
    state.page = Layout(AboutPage, { title: 'About' })
  })
  page()
  
  return html`${() => state.page}`
}
