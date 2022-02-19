<script>
    import {onDestroy} from 'svelte'
    import {alert} from '../stores.js'
    import {fly} from 'svelte/transition'

    export let ms = 3000
    let visible
    let timeout

    const onMessageChange = (message, ms) => {
        clearTimeout(timeout)
        if (!message) {               // hide Alert if message is empty
            visible = false
        } else {
            visible = true                                              // show alert
            if (ms > 0) timeout = setTimeout(() => visible = false, ms) // and hide it after ms milliseconds
        }
    }
    $: onMessageChange($alert, ms)      // whenever the alert store or the ms props changes run onMessageChange

    onDestroy(() => clearTimeout(timeout))
</script>

{#if visible}
    <div class="alert shadow-lg alert-info max-w-sm" on:click={() => visible = false}
         transition:fly="{{delay: 250, duration: 300, x: 0, y: 100, opacity: 0.5}}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             class="stroke-current flex-shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        { $alert }
    </div>
{/if}

<style>
    div {
        position: fixed;
        cursor: pointer;
        margin-right: 1.5rem;
        margin-left: 1.5rem;
        margin-bottom: 1.5rem;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
    }
</style>
