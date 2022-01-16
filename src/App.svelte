<script>
	import Tailwindcss from './Tailwindcss.svelte';
	import Header from './Header.svelte';
	import SideMenu from './SideMenu.svelte';
	export let name;

	const todos = [
		{
			id: 1,
			name: 'test',
			description: 'this todo description',
			tags: [],
			is_active: 1,
			date: '2030-01-01',
			status: 1,
		},
		{
			id: 2,
			name: 'second todo',
			description: 'this todo description',
			tags: [],
			is_active: 1,
			date: '2030-01-01',
			status: 1,
		},
	];

	const tags = [

	];
</script>

<Tailwindcss />

<Header />

<SideMenu />

<main>
	{#each todos as todo,i }
		<li>
			{i + 1}: {todo.name}
		</li>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>