import { reactive } from "@arrow-js/core"

export const layoutStore = reactive({
  loggedIn: false,
})

export function login() {
  layoutStore.loggedIn = true
}
