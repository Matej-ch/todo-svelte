<script context="module">
    import {localStore} from "$lib/actions/localStore.js";

    export async function load() {

        const tags = localStore('todo-tags', []);

        return {props: {tags}}
    }
</script>
<script>
    import {scale} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faTags, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
    import {alert} from "$lib/stores"

    let name = '';

    export let tags;

    $: newTagId = $tags.length > 0 ? Math.max(...$tags.map(t => t.id)) + 1 : 1

    function addTag(e) {
        const formData = new FormData(e.target);

        if (!name.length) {
            return;
        }

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        data['id'] = newTagId;
        $tags = [data, ...$tags];
        $alert = `Tag '${name}' has been added`
        name = '';
    }
</script>


<svelte:head>
    <title>Tags</title>
</svelte:head>

<div class="todos">
    <h1 class="font-bold text-3xl pb-2">Tags </h1>
    <p class="pb-8 mb-4 border-b">There {$tags.length > 1 ? 'are' : 'is'}  <span
        class="font-bold">{$tags.length || 0}</span> tags</p>

    <form
        class="new"
        method="post"
        on:submit|preventDefault={addTag}>

        <input type="text" name="name" bind:value={name} aria-label="Add tag" placeholder="Add tag"
               class="bg-green-50 border border-green-500 text-green-900 placeholder-slate-400 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block w-full p-2.5"/>
    </form>

    <div class="pt-12 flex flex-row flex-wrap gap-6">
        {#each $tags as tag (tag.id) }
            <div class="py-2 flex items-center gap-1 text-slate-800"
                 transition:scale|local={{ start: 0.7 }}
                 animate:flip={{ duration: 200 }}>
                <Fa icon={faTags}/> {tag.name}

                <button class="delete" aria-label="Delete tag" on:click={() => {
                        $tags = $tags.filter((t) => t.id !== tag.id);
                        $alert = `Tag '${tag.name}' has been removed`
                    }}>
                    <Fa icon={faTimesCircle} class="text-red-800"/>
                </button>
            </div>
        {/each}
    </div>

</div>