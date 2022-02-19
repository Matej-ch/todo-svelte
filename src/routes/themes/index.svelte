<script>

    export const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk"];

</script>

<div class="flex items-center gap-1 flex-row flex-wrap">
    {#each themes as theme }
        <div class="p-4">

            <button>{theme}</button>
        </div>
    {/each}
</div>