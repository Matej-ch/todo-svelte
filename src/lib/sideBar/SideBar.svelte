<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {
        faCalendarAlt,
        faCalendarDay, faCalendarWeek,
        faCogs,
        faFileDownload, faFileUpload,
        faFolderOpen,
        faInfoCircle, faList,
        faPalette, faPlusCircle,
        faRedo,
        faSync, faTags
    } from "@fortawesome/free-solid-svg-icons";
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

</script>

<div class="grow-0 flex flex-col gap-4 px-4 pt-8">

    <div class="flex flex-col">
        <h2 class="uppercase pb-3 font-bold">TO-DO list</h2>
        <div class="pl-4 flex flex-row items-center gap-1 pb-3">
            <a href="/todos" class="flex gap-1 items-center">
                <Fa icon={faList}/>
                All todos
            </a>
        </div>
        <div class="pl-4 flex flex-row items-center gap-1 pb-3">
            <a href="/projects" class="flex gap-1 items-center">
                <Fa icon={faFolderOpen}/>
                Projects</a>
        </div>
        <div class="pl-4 flex flex-row items-center gap-1 pb-3">
            <a href="/tags" class="flex gap-1 items-center">
                <Fa icon={faTags}/>
                Tags</a>
        </div>
        <div class="pl-4 flex flex-row items-center gap-1 pb-5">
            <a href="/todos" class="flex gap-1 items-center">
                <Fa icon={faPlusCircle}/>
                New</a>
        </div>
    </div>

    <div class="flex flex-col">
        <h2 class="uppercase pb-3 font-bold">Calendar</h2>
        <div class="pl-4 flex flex-row items-center gap-1 pb-3">
            <a href="/todos" class="flex gap-1 items-center">
                <Fa icon={faCalendarDay}/>
                Day Tasks
            </a>
        </div>
        <div class="pl-4 flex flex-row items-center gap-1 pb-3">
            <a href="/todos" class="flex gap-1 items-center">
                <Fa icon={faCalendarWeek}/>
                Week Tasks
            </a>
        </div>
        <div class="pl-4 flex flex-row items-center gap-1 pb-5">
            <a href="/todos" class="flex gap-1 items-center">
                <Fa icon={faCalendarAlt}/>
                Month Tasks
            </a>
        </div>
    </div>

    <div class="flex flex-col">
        <h2 class="uppercase pb-3 font-bold">File control</h2>
        <div class="pl-4 flex flex-row items-center gap-1 pb-3">
            <a href="/todos" class="flex gap-1 items-center" on:click|preventDefault={() => dispatch('export')}>
                <Fa icon={faFileDownload}/>
                Export
            </a>
        </div>
        <div class="pl-4 flex flex-row items-center gap-1 pb-5">
            <a href="/todos" class="flex gap-1 items-center" on:click|preventDefault={() => dispatch('import')}>
                <Fa icon={faFileUpload}/>
                Import
            </a>
        </div>
    </div>

    <div class="flex flex-col">
        <h2 class="uppercase pb-3 font-bold">Settings</h2>
        <div class="pl-4 flex flex-row items-center gap-1 pb-3">
            <a href="/settings" class="flex gap-1 items-center">
                <Fa icon={faCogs}/>
                General settings
            </a>
        </div>
        <div class="pl-4 flex flex-row items-center gap-1 pb-3">
            <a href="/themes" class="flex gap-1 items-center">
                <Fa icon={faPalette}/>
                Theme
            </a>
        </div>
        <div class="pl-4 flex flex-row items-center gap-1 pb-3">
            <a href="/todos" class="flex gap-1 items-center" on:click|preventDefault={() => dispatch('sync')}>
                <Fa icon={faSync}/>
                Database Sync
            </a>
        </div>
        <div class="pl-4 flex flex-row items-center gap-1 pb-3">
            <a href="/todos" class="flex gap-1 items-center" on:click|preventDefault={() => dispatch('truncate')}>
                <Fa icon={faRedo}/>
                Database reset
            </a>
        </div>
        <div class="pl-4 flex flex-row items-center gap-1 pb-5">
            <a href="/about" class="flex gap-1 items-center">
                <Fa icon={faInfoCircle}/>
                About
            </a>
        </div>
    </div>
</div>