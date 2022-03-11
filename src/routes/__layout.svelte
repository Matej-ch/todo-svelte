<script>
    import {navigating} from '$app/stores';
    import Header from '$lib/header/Header.svelte';
    import '../app.css';
    import Footer from "$lib/footer/Footer.svelte";
    import LoadingIndicator from "$lib/LoadingIndicator.svelte";
    import SideBar from "$lib/sideBar/SideBar.svelte";
    import {sync, truncate} from "$lib/actions/db.js";
    import {exportCsv, importCsv} from "$lib/actions/file.js";
    import Alert from "$lib/components/Alert.svelte";
    import {theme, alert} from '$lib/stores'
    import {user} from "$lib/authStore";
    import {supabase} from "../supabase.js";
    import {goto} from "$app/navigation";

    function handleSync() {
        sync();
    }

    async function handleTruncate() {
        const response = await truncate();

        if (response) {
            $alert = response;
        }
    }

    function handleImport() {
        importCsv();
    }

    function handleExport() {
        exportCsv();
    }

    user.set(supabase.auth.user());

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session?.user)
        if (session?.user) {
            goto("/todos");
            //load stuff here todos, tags, etc,
        } else {
            goto("/");
        }
    })
</script>

{#if $navigating }
    <LoadingIndicator/>
{/if}


<div id="theme-container" class="flex flex-col h-screen bg-base-100 text-base-content" data-theme="{$theme}">
    <div id="app-container" class="flex flex-col h-screen bg-base-100 text-base-content">
        <Header/>
        <Alert/>

        <div class="flex flex-row grow">
            <SideBar on:sync={handleSync}
                     on:truncate={handleTruncate}
                     on:export={handleExport}
                     on:import={handleImport}
                     user={$user}/>

            <main class="grow">
                <slot/>
            </main>
        </div>

        <Footer/>
    </div>
</div>

<style>
    main {
        flex: 2;
    }

</style>
