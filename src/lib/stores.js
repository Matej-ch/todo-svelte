import {writable} from 'svelte/store'

export const alert = writable('Welcome to the To-Do list app!')

const theme = writable('light')

export {theme}