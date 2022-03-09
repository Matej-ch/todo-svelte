<script>
    import {isOverlayOpen} from "$lib/stores.js";
    import {fade} from "svelte/transition"
</script>

<div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-slate-100 opacity-90 z-10"
     transition:fade
     on:click|stopPropagation={() => isOverlayOpen.set(false)}>
    <div class="bg-slate-900 text-white rounded-md px-8 py-10 relative max-w-lg opacity-95">

        <button class="absolute top-2 right-3 text-4xl text-slate-300 hover:-translate-y-0.5 transition-transform"
                on:click={() => isOverlayOpen.set(false)}>&times;
        </button>

        <slot/>
    </div>
</div>