<script>
    import {navigating} from '$app/stores';
    import Header from '$lib/header/Header.svelte';
    import '../app.css';
    import Footer from "$lib/footer/Footer.svelte";
    import LoadingIndicator from "$lib/LoadingIndicator.svelte";
    import SideBar from "$lib/sideBar/SideBar.svelte";
</script>

{#if $navigating }
    <LoadingIndicator/>
{/if}

<Header/>

<div class="flex flex-row grow">
    <SideBar/>

    <main class="grow">
        <slot/>
    </main>
</div>


<Footer/>

<style>
    main {
        flex: 2;
    }

</style>
