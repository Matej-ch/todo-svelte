<script context="module">
    export const prerender = true;

    /*export async function load() {
        return {
            status: 302,
            redirect: "/todos",
        };
    }*/
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

    {#if $user}
        Your are login, add ability to log out
    {:else }
        <Auth/>
    {/if}

</section>

<style>
    section {
        @apply flex flex-col justify-center items-center flex-1;
    }
</style>
