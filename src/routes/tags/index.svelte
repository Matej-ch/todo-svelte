<script context="module">
    import {supabase} from "../../supabase.js";
    import {writable} from "svelte/store";

    export const tags = writable([]);

    export async function load() {

        const {data,error} = await supabase.from('tags').select();

        if(error) {
            return console.log(error);
        }

        tags.set(data);

        return {props: {tags}}
    }
</script>
<script>
    import {scale} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faTags} from "@fortawesome/free-solid-svg-icons";
    import {alert} from "$lib/stores"
    import {user} from "$lib/authStore.js";

    let name = '';

    async function addTag() {

        const user_id = $user.id;
        if (!name.length) {
            return;
        }

        const {data,error} = await supabase.from('tags').insert([{name,user_id}]);

        if(error) {
            return console.log(error);
        }

        tags.update((curr) =>  [data[0], ...curr]);
        $alert = `Tag '${name}' has been added`
    }

    async function deleteTag(tag) {
        const id = tag.id;
        const {error} = await supabase.from('tags').delete().match({id});

        if(error) {
            return console.log(error);
        }

        tags.update((tags) => tags.filter((t) => t.id !== tag.id));
        $alert = `Tag '${tag.name}' has been removed`

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
               class="input input-bordered input-accent w-full max-w-md"/>
    </form>

    <div class="pt-12 flex flex-row flex-wrap gap-6">
        {#each $tags as tag (tag.id) }
            <div class="py-2 flex items-center gap-1"
                 transition:scale|local={{ start: 0.7 }}
                 animate:flip={{ duration: 200 }}>
                <Fa icon={faTags}/> {tag.name}

                <button aria-label="Delete tag" class="btn btn-xs btn-circle btn-outline" on:click={deleteTag(tag)}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        {/each}
    </div>

</div>