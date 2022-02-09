<script>
    import {navigating} from '$app/stores';
    import Header from '$lib/header/Header.svelte';
    import '../app.css';
    import Footer from "$lib/footer/Footer.svelte";
    import LoadingIndicator from "$lib/LoadingIndicator.svelte";
    import SideBar from "$lib/sideBar/SideBar.svelte";
    import {sync, truncate} from "$lib/actions/db.js";
    import {exportCsv, importCsv} from "$lib/actions/file.js";

    function handleSync() {
        sync();
    }

    function handleTruncate() {
        truncate();
    }

    function handleImport() {
        importCsv();
    }

    function handleExport() {
        exportCsv();
    }
</script>

{#if $navigating }
    <LoadingIndicator/>
{/if}

<Header/>

<div class="flex flex-row grow">
    <SideBar on:sync={handleSync} on:truncate={handleTruncate} on:export={handleExport} on:import={handleImport}/>

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
