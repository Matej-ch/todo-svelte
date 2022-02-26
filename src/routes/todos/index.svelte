<script context="module">
    import {writable} from "svelte/store";
    import {supabase} from "../../supabase.js";

    export const todos = writable([]);

    export async function load() {

        const {data, error} = await supabase.from('todos').select();

        if (error) {
            return console.log(error);
        }

        todos.set(data);

        return {props: {todos}}
    }
</script>

<script>
    import {scale} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    import Fa from 'svelte-fa/src/fa.svelte'
    import {
        faArchive, faCalendarDay,
        faCheckCircle, faFile,
        faTag,
        faTrash
    } from "@fortawesome/free-solid-svg-icons";
    import moment from "moment";
    import {alert} from "$lib/stores"
    import FilterButton from "$lib/components/FilterButton.svelte";
    import {user} from "$lib/authStore.js";

    let archivedClassEnabled = 'bg-yellow-500 hover:bg-yellow-700';
    let archivedClassDisabled = 'bg-stone-500 hover:bg-stone-700';
    let finishedClassEnabled = 'bg-green-500 hover:bg-green-700';
    let finishedClassDisabled = 'bg-stone-500 hover:bg-stone-700';
    let name = '';
    let filter = 'all'
    const filterTodos = (filter, todos) => {

        if (filter === 'active') {
            return todos.filter(t => t['state'] === 'new');
        }

        if (filter === 'finished') {
            return todos.filter(t => t['state'] === 'finished');
        }

        if (filter === 'archived') {
            return todos.filter(t => t['state'] === 'archived');
        }

        return todos;
    }

    $: {
        if (filter === 'all') $alert = 'Browsing all todos'
        else if (filter === 'active') $alert = 'Browsing active todos'
        else if (filter === 'finished') $alert = 'Browsing finished todos'
        else if (filter === 'archived') $alert = 'Browsing archived todos'
    }

    //export let todos;

    $: newTagId = $todos.length > 0 ? Math.max(...$todos.map(t => t.id)) + 1 : 1

    async function addTodo(e) {

        const user_id = $user.id;

        ///const formData = new FormData(e.target);

        if (!name.length) {
            return;
        }

        const {data, error} = await supabase.from('tags').insert([{name, user_id}]);

        if (error) {
            return console.log(error);
        }

        todos.update((curr) => [data[0], ...curr]);
        $alert = `Todo '${name}' has been added`

        /*const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        let date = new Date();
        data['id'] = newTagId;
        data['date'] = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        data['state'] = 'new';
        data['tags'] = [];
        $todos = [data, ...$todos];
        $alert = `Todo '${name}' has been added`
        name = '';*/
    }

    function updateState(todo, state) {
        const i = $todos.findIndex(t => t.id === todo.id)
        todo.state = state;

        if (state === 'finished') {
            $alert = `Todo '${todo.text}' is finished`
        }
        if (state === 'archived') {
            $alert = `Todo '${todo.text}' is archived`
        }

        $todos[i] = {...$todos[i], ...todo}
    }

    async function deleteTodo(todo) {
        const id = todo.id;
        const {error} = await supabase.from('todos').delete().match({id});

        if (error) {
            return console.log(error);
        }

        todos.update((todos) => todos.filter((t) => t.id !== todo.id));
        $alert = `TODO '${todo.name}' has been removed`
    }

</script>

<svelte:head>
    <title>Todos</title>
</svelte:head>

<div class="todos">
    <h1 class="font-bold text-3xl pb-1">To-Do List items</h1>
    <p class="pb-4 mb-4 border-b text-sm">You have <span class="font-bold">{$todos.length || 0}</span> todos</p>

    <FilterButton bind:filter/>

    <form
        on:submit|preventDefault={addTodo}
        class="new"
        method="post"
    >
        <input name="text" aria-label="Add todo" bind:value={name} placeholder="+ tap to add a todo"/>
    </form>

    <div class="flex flex-row flex-wrap gap-1 w-full">
        {#each filterTodos(filter, $todos) as todo (todo.id)}
            <div
                class="todo"
                transition:scale|local={{ start: 0.7 }}
                animate:flip={{ duration: 200 }}
            >

                <div class="pt-2">
                    <div class="flex gap-2 text-left text-2xl text-slate-700 font-bold items-center mb-2">
                        {todo.text}
                    </div>

                    <div>
                        <span
                            title="{todo.date}"
                            class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex gap-1 items-baseline px-1.5 py-1 rounded mr-2 dark:bg-gray-700 dark:text-gray-200">
                            <Fa icon={faCalendarDay}/>
                            <span>Created {moment(todo.date, "YYYY-MM-DD h:mm:ss").fromNow()}</span>
                        </span>
                    </div>
                </div>

                <div class="self-start">
                    <button
                        class="inline-flex justify-center items-center {todo.state === 'finished' ? finishedClassEnabled  : finishedClassDisabled}"
                        on:click={() => updateState(todo,'finished')}>
                        <Fa icon={faCheckCircle}/>
                    </button>

                    <button
                        class="inline-flex justify-center items-center {todo.state === 'archived' ? archivedClassEnabled  : archivedClassDisabled} "
                        on:click={() => updateState(todo,'archived')}>
                        <Fa icon={faArchive}/>
                    </button>
                </div>

                <div class="self-end inline-flex gap-1">
                    <span
                        class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex gap-1 items-baseline px-1.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                        <Fa icon={faTag}/>
                        <span>New tag</span>
                    </span>

                    <span
                        class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex gap-1 items-baseline px-1.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                        <Fa icon={faFile}/>
                        New project
                    </span>
                </div>

                <!--<form
                    action="/todos/{todo.uid}.json?_method=PATCH"
                    method="post"
                    use:enhance={{
                        pending: (data) => {
                            todo.done = !!data.get('done');
                        },
                        result: patch
                    }}
                >
                    <input type="hidden" name="done" value={todo.done ? '' : 'true'}/>
                    <button class="toggle" aria-label="Mark todo as {todo.done ? 'not done' : 'done'}"/>
                </form>-->

                <!--<form
                    class="text"
                    action="/todos/{todo.uid}.json?_method=PATCH"
                    method="post"
                    use:enhance={{
                        result: patch
                    }}
                >
                    <input aria-label="Edit todo" type="text" name="text" value={todo.text}/>
                    <button class="save" aria-label="Save todo"/>
                </form>-->

                <button
                    class="inline-flex justify-center items-center bg-red-500 hover:bg-red-900 absolute top-2 right-2"
                    on:click={deleteTodo(todo)}>
                    <Fa icon={faTrash}/>
                </button>
            </div>
        {/each}
    </div>


    <div class="btn-group">
        <button class="btn btn-sm">1</button>
        <button class="btn btn-sm btn-active">2</button>
        <button class="btn btn-sm">3</button>
        <button class="btn btn-sm">4</button>
    </div>

</div>

<style>
    .new {
        @apply my-4;
    }

    input:focus-visible {
        box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ff3e00 !important;
        outline: none;
    }

    .new input {
        @apply w-full text-2xl border-gray-200 border p-3 text-center text-slate-700 justify-start;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
    }

    .todo {
        @apply grid grid-cols-1 items-center bg-white pt-3 pb-2 px-4 max-w-sm h-60 relative;
        min-width: 20rem;
        margin: 0 0 0.5rem 0;
        border-radius: 8px;
        filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
        transform: translate(-1px, -1px);
        transition: filter 0.2s, transform 0.2s;
        text-transform: capitalize;
    }

    .todo button {
        width: 2em;
        height: 2em;
        @apply rounded-sm text-white;
    }
</style>
