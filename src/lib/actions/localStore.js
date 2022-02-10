// localStore.js
import {writable} from 'svelte/store';
import {browser} from "$app/env";

export const localStore = (key, initial) => {                 // receives the key of the local storage and an initial value

    const toString = (value) => JSON.stringify(value, null, 2)  // helper function
    const toObj = JSON.parse                                    // helper function

    if (browser && localStorage.getItem(key) === null) {                   // item not present in local storage
        localStorage.setItem(key, toString(initial))              // initialize local storage with initial value
    }

    const saved = toObj(browser && localStorage.getItem(key))              // convert to object

    const {subscribe, set, update} = writable(saved)          // create the underlying writable store

    return {
        subscribe,
        set: (value) => {
            browser && localStorage.setItem(key, toString(value))              // save also to local storage as a string
            return set(value)
        },
        update
    }
}