<script context="module">
    import {browser, dev} from '$app/env';

    // we don't need any JS on this page, though we'll load
    // it in dev so that we get hot module replacement...
    export const hydrate = dev;

    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;

    // since there's no dynamic data here, we can prerender
    // it so that it gets served as a static asset in prod
    export const prerender = true;
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<div class="content">
    <h1>About this todo app</h1>

    <p>
        This is my todo app with functionality i needed, but didn't find anywhere else
    </p>
</div>

<style>
    .content {
        width: 100%;
    }
</style>
