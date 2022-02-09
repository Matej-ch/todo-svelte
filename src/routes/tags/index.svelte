<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faTags} from "@fortawesome/free-solid-svg-icons";

    let tags = [];
    let name = '';

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

        tags = [...tags, data];
        name = '';
    }
</script>


<svelte:head>
    <title>Tags</title>
</svelte:head>

<div class="todos">
    <h1 class="font-bold text-3xl pb-2">Tags </h1>
    <p class="pb-8 mb-4 border-b"></p>

    <form
        class="new"
        method="post" on:submit|preventDefault={addTag}>

        <input type="text" name="name" bind:value={name} aria-label="Add tag" placeholder="Add tag"
               class="bg-green-50 border border-green-500 text-green-900 placeholder-slate-400 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block w-full p-2.5"/>
    </form>

    <div class="pt-12 flex flex-row flex-wrap gap-6">
        {#each tags as tag }
            <div class="py-2 flex items-center gap-1 text-slate-800">
                <Fa icon={faTags}/> {tag.name}</div>
        {/each}
    </div>

</div>