import { html } from "@arrow-js/core"
import memo from "./memo.js"

function query(name, body, vars) {
  html`<style type="text/css" data-name="${name}">
    ${body.map((b, i) => b + (vars[i] || ""))}
  </style>`(document.head)
  return name
}
const queryMemo = memo(query)

export default function css(body, ...vars) {
  return queryMemo(vars[0], body, vars)
}
