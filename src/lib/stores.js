import {derived, writable} from 'svelte/store'
import {browser} from '$app/env'
import {session} from '$app/stores'

export const alert = writable('Welcome to the To-Do list app!')

//const theme = writable('light')

//export {theme}

export const theme = derived(session,
    ($session, set) => {
        if ($session.theme) {
            set($session.theme)
        } else if (browser) {
            set('light')
        }
    })

export const setTheme = (theme) => {
    session.update(($session) => ({...$session, theme}))
    fetch('/theme', {method: 'PUT', body: theme})
}

export const isOverlayOpen = writable(false)