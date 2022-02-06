<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faFlag } from '@fortawesome/free-solid-svg-icons'
</script>

<footer>
    <div class="bg-slate-900">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-white text-sm text-center sm:text-left"> Developed with svelte
                <Fa icon={faFlag} /> Flag
                <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-slate-400 ml-1" target="_blank">@Developer</a>
            </p>
        </div>
    </div>
</footer>

<style>
    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px;
    }

    @media (min-width: 480px) {
        footer {
            padding: 40px 0;
        }
    }
</style>