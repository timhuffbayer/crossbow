import { html } from "@arrow-js/core"
import Nav from "./Nav.js"

export default function Layout(Page, { title }) {
  return html`
    <header>App</header>
    <hr />
    <main>
      <h2>${title}</h2>
      ${Page()}
    </main>
  `
}
