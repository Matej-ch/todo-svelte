<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faTags} from "@fortawesome/free-solid-svg-icons";

    let tags = [];

    function addTag(e) {
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        tags = [...tags, data];

        e.target.querySelector('input').value = '';
    }
</script>


<svelte:head>
    <title>Projects</title>
</svelte:head>

<div class="todos">
    <h1 class="font-bold text-3xl pb-2">Tags </h1>
    <p class="pb-8 mb-4 border-b">You are seeing X tags per page</p>

    <form
        class="new"
        method="post" on:submit|preventDefault={addTag}>

        <input type="text" name="name" aria-label="Add tag" placeholder="Add tag"
               class="bg-green-50 border border-green-500 text-green-900 placeholder-slate-400 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"/>
    </form>

    <div class="pt-12">
        {#each tags as tag }
            <div class="py-2 flex items-center gap-1">
                <Fa icon={faTags}/> {tag.name}</div>
        {/each}
    </div>

</div>