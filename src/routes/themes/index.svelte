<script>

    export const themes = ["light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk"];
    import {theme} from '$lib/stores'
</script>

<svelte:head>
    <title>Themes</title>
</svelte:head>

<div class="flex items-center gap-1 flex-row flex-wrap justify-center p-10">
    <label>
        Pick a theme
        <select class="select w-full select-primary max-w-md" bind:value="{$theme}">
            {#each themes as theme }
                <option value="{theme}">{theme}</option>
            {/each}
        </select>
    </label>

</div>