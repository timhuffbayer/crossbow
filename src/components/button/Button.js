import { html } from "@arrow-js/core"
import css from "../../lib/css.js"

export default function Button({ onClick, color = "", title = "" }) {
  const cssClass = css`
    .${color ? "button-" + color : "button"} {
      background-color: ${color};
    }
  `
  return html` <button class="${cssClass}" @click="${() => onClick()}">${title}</button> `
}
