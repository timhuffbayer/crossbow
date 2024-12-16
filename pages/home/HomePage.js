import { html } from 'https://esm.sh/@arrow-js/core'
import Button from '../../components/button/Button.js'

import { homeStore } from './HomeStore.js'

export default function HomePage() {

  const buttons = [
    { title: 'Increment Count 1', color: 'red', onClick: () => homeStore.count1++ },
    { title: 'Increment Count 2', color: 'green', onClick: () => homeStore.count2++ }
  ]

  return html`
    <p>Home Store Count 1: ${() => homeStore.count1}</p>
    <p>Home Store Count 2: ${() => homeStore.count2}</p>
    <section class="grid">
      ${buttons.map(props => Button(props))}
    </section>
  `
}