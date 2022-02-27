<script>
    import {setTheme, theme} from '$lib/stores'

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

    $: nextTheme = themes[$theme]
    const handleThemeChange = () => {
        setTheme(nextTheme)
    }

</script>

<svelte:head>
    <title>Themes</title>
</svelte:head>

<div class="flex items-center gap-1 flex-row flex-wrap justify-center p-10">
    <label>
        Pick a theme
        <select class="select w-full select-primary max-w-md" on:change={handleThemeChange}>
            {#each themes as theme }
                <option value="{theme}">{theme}</option>
            {/each}
        </select>
    </label>

</div>