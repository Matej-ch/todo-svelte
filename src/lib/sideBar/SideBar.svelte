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
</script>

<div class="grow-0 flex flex-col gap-4 pl-4 pt-8">

    <div class="flex flex-col">
        <h2 class="uppercase pb-3 text-slate-500">TO-DO list</h2>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-3"><Fa icon={faList} /> All items</div>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-3"><Fa icon={faFolderOpen} /> Projects</div>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-3"><Fa icon={faTags} /> Tags</div>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-5"><Fa icon={faPlusCircle} /> New</div>
    </div>

    <div class="flex flex-col">
        <h2 class="uppercase pb-3 text-slate-500">Calendar</h2>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-3"><Fa icon={faCalendarDay} /> Day Tasks</div>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-3"><Fa icon={faCalendarWeek} /> Week Tasks</div>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-5"><Fa icon={faCalendarAlt} /> Month Tasks</div>
    </div>

    <div class="flex flex-col">
        <h2 class="uppercase pb-3 text-slate-500">File control</h2>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-3"><Fa icon={faFileDownload} /> Export</div>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-5"><Fa icon={faFileUpload} /> Import</div>
    </div>

    <div class="flex flex-col">
        <h2 class="uppercase pb-3 text-slate-500">Settings</h2>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-3"><Fa icon={faCogs} /> General settings</div>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-3"><Fa icon={faPalette} /> Theme</div>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-3"><Fa icon={faSync} /> Database Sync</div>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-3"><Fa icon={faRedo} /> Database reset</div>
        <div class="pl-4 text-slate-700 flex flex-row items-center gap-1 pb-5"><Fa icon={faInfoCircle} /> About</div>
    </div>
</div>
