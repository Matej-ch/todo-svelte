<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faArchive, faFlag, faList} from "@fortawesome/free-solid-svg-icons";
</script>


<svelte:head>
    <title>Projects</title>
</svelte:head>

<div class="todos">
    <h1 class="font-bold text-3xl pb-2">Projects </h1>
    <p class="pb-8 mb-4 border-b">You are seeing X projects per page</p>

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
</div>