<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {
        faArchive,
        faList, faListAlt,

    } from "@fortawesome/free-solid-svg-icons";

    export let filter = 'all'
</script>

<div class="inline-flex rounded-md shadow-sm" role="group">
    <button type="button"
            class:btn__primary={filter === 'all'}
            aria-pressed={filter === 'all'}
            on:click={()=> filter = 'all'}
            class="flex items-center gap-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
        <Fa icon={faList}/>
        All
    </button>
    <button type="button"
            class:btn__primary={filter === 'active'}
            aria-pressed={filter === 'active'}
            on:click={()=> filter = 'active'}
            class="flex items-center gap-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-300 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
        <Fa icon={faList}/>
        Active
    </button>
    <button type="button"
            class:btn__primary={filter === 'finished'}
            aria-pressed={filter === 'finished'}
            on:click={()=> filter = 'finished'}
            class="flex items-center gap-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-300 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
        <Fa icon={faListAlt}/>
        Completed
    </button>
    <button type="button"
            class:btn__primary={filter === 'archived'}
            aria-pressed={filter === 'archived'}
            on:click={()=> filter = 'archived'}
            class="flex items-center gap-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-300 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
        <Fa icon={faArchive}/>
        Archived
    </button>
</div>