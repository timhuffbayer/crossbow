import { html } from 'https://esm.sh/@arrow-js/core'
import { layoutStore, login } from './LayoutStore.js'

export default function Nav() {
    
  return html`
  <nav>
    <ul>
    <li><strong>Quiver</strong></li>
      <li> <a href="/">Home</a> </li>
      <li> <a href="/about">About</a> </li>
    </ul>
    <ul>
      <li> <a href="javascript:void(0)" @click="${() => login()}">${() => layoutStore.loggedIn ? 'Logout' : 'Login'}</a> </li>
  </nav>
  `
}