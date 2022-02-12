<script context="module">
    //import {enhance} from '$lib/form';
    import {localStore} from "$lib/actions/localStore.js";

    // see https://kit.svelte.dev/docs#loading
    export async function load() {

        const todos = localStore('todo-todos', []);

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
        faFlag,
        faList,
        faPencilAlt,
        faStickyNote, faTag,
        faTrash
    } from "@fortawesome/free-solid-svg-icons";

    let name = '';

    export let todos;

    $: newTagId = $todos.length > 0 ? Math.max(...$todos.map(t => t.id)) + 1 : 1

    function addTodo(e) {
        const formData = new FormData(e.target);

        if (!name.length) {
            return;
        }

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        let date = new Date();
        data['id'] = newTagId;
        data['date'] = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
        data['state'] = 'new'; // archived, closed,finished, deleted, etc...
        data['tags'] = [];
        $todos = [data, ...$todos];
        name = '';
    }

    /*async function patch(res) {
        const todo = await res.json();

        $todos = $todos.map((t) => {
            if (t.uid === todo.uid) return todo;
            return t;
        });
    }*/

</script>

<svelte:head>
    <title>Todos</title>
</svelte:head>

<div class="todos">
    <h1 class="font-bold text-3xl pb-1">To-Do List items</h1>
    <p class="pb-4 mb-4 border-b text-sm">There {$todos.length > 1 ? 'are' : 'is'} {$todos.length || 0} todos</p>

    <div class="inline-flex rounded-md shadow-sm" role="group">
        <button type="button"
                class="flex items-center gap-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            <Fa icon={faList}/>
            Active
        </button>
        <button type="button"
                class="flex items-center gap-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-300 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            <Fa icon={faFlag}/>
            Finalized
        </button>
        <button type="button"
                class="flex items-center gap-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-300 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            <Fa icon={faArchive}/>
            Archived
        </button>
    </div>

    <form
        on:submit|preventDefault={addTodo}
        class="new"
        method="post"
    >
        <input name="text" aria-label="Add todo" bind:value={name} placeholder="+ tap to add a todo"/>
    </form>

    <div class="flex flex-row flex-wrap gap-1 w-full">
        {#each $todos as todo (todo.id)}
            <div
                class="todo"
                transition:scale|local={{ start: 0.7 }}
                animate:flip={{ duration: 200 }}
            >

                <div class="pt-2">
                    <div class="flex gap-2 text-left text-2xl text-slate-700 font-bold items-center mb-2">
                        <Fa icon={faStickyNote}/>
                        {todo.text}
                    </div>

                    <div>
                        <span
                            class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex gap-1 items-baseline px-1.5 py-1 rounded mr-2 dark:bg-gray-700 dark:text-gray-200">
                            <Fa icon={faCalendarDay}/>
                            <span>Created {todo.date}</span>
                        </span>
                    </div>
                </div>


                <div class="self-start">
                    <button class="inline-flex justify-center items-center bg-green-500">
                        <Fa icon={faCheckCircle}/>
                    </button>

                    <button class="inline-flex justify-center items-center bg-purple-500">
                        <Fa icon={faPencilAlt}/>
                    </button>

                    <button class="inline-flex justify-center items-center bg-yellow-500">
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

                <!--<form
                    action="/todos/{todo.uid}.json?_method=DELETE"
                    method="post"
                    use:enhance={{
                        pending: () => (todo.pending_delete = true),
                        result: () => {
                            $todos = $todos.filter((t) => t.uid !== todo.uid);
                        }
                    }}
                >-->
                <!--<button class="delete" aria-label="Delete todo" disabled={todo.pending_delete}/>-->
                <!--</form>-->

                <button class="inline-flex justify-center items-center bg-red-500 absolute top-2 right-2">
                    <Fa icon={faTrash}/>
                </button>
            </div>
        {/each}
    </div>


    <nav aria-label="Page navigation example" class="my-8">
        <ul class="inline-flex items-center -space-x-px">
            <li>
                <a href="/page"
                   class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a href="/page"
                   class="block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="/page"
                   class="block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="/page" aria-current="page"
                   class="block z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="/page"
                   class="block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
                <a href="/page"
                   class="block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
                <a href="/page"
                   class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
        </ul>
    </nav>

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
