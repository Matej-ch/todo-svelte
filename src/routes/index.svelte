<script context="module">
    export const prerender = true;

</script>

<script>
    import Auth from "$lib/components/Auth.svelte";
    import {supabase} from "../supabase.js";
    import {user} from "$lib/authStore";

    user.set(supabase.auth.user());

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session?.user)
        if (session?.user) {
            //load stuff here todos, tags, etc,
        }
    })

</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<section>

    {#if $user }
        <div class="mb-4 mt-4 bg-orange-400 text-orange-800 font-bold p-4 rounded">Your are already logged in</div>
    {:else }
        <Auth/>
    {/if}

</section>

<style>
    section {
        @apply flex flex-col justify-center items-center flex-1;
    }
</style>
