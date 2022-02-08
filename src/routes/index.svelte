<script context="module">
    export const prerender = true;

    export async function load() {
        return {
            status: 302,
            redirect: "/todos",
        };
    }
</script>

<script>
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<section>

</section>

<style>
    section {
        @apply flex flex-col justify-center items-center flex-1;
    }
</style>
