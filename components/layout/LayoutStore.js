import { reactive } from 'https://esm.sh/@arrow-js/core'

export const layoutStore = reactive({
  loggedIn: false
})

export function login() {
  layoutStore.loggedIn = true
}