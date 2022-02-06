<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faGithub } from '@fortawesome/free-brands-svg-icons'
</script>

<footer>
    <div class="py-2 px-2 flex flex-wrap flex-col sm:flex-row">
        <p class="text-white text-sm flex flex-row items-center">
            <span>Developed with svelte</span>
            <Fa icon={faGithub}  class="ml-4"/>
            <a href="https://github.com/Matej-ch" rel="noopener noreferrer" class="text-slate-400 ml-1" target="_blank">@Matej-ch</a>
        </p>
    </div>
</footer>

<style>
    footer {
        @apply bg-slate-900 flex flex-col justify-start p-5;
    }
</style>