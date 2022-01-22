<script>
	import { navigating } from '$app/stores';
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import Footer from "$lib/footer/Footer.svelte";
	import LoadingIndicator from "$lib/LoadingIndicator.svelte";
</script>

{#if $navigating }
	<LoadingIndicator />
{/if}

<Header />

<main>
	<slot />
</main>

<Footer/>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>
