<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faHome, faInfoCircle, faPowerOff} from "@fortawesome/free-solid-svg-icons";
    import {supabase} from "../../supabase.js";
    import {user} from "$lib/authStore";

    const logout = async () => {
        const {error} = await supabase.auth.signOut()

        console.log('Sign-out:', error);
    }
</script>

<header>

    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 bg-orange-500">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a sveltekit:prefetch href="/todos" class="flex hover:no-underline">
                <span class="self-center text-lg font-semibold whitespace-nowrap text-white">TODOS
                </span>
            </a>

            <div class="flex flex-row gap-4">
                <div class="flex">
                    <div class="hidden relative mr-3 md:mr-0 md:block">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text"
                               class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-3xl border-2 border-orange-700 sm:text-sm placeholder-gray-400 border-none outline-none focus:border-none focus:outline-none focus-visible:outline-none focus-visible:border-none"
                               placeholder="Search...">
                    </div>
                    <button data-collapse-toggle="mobile-menu-3" type="button"
                            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                            aria-controls="mobile-menu-3" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                <a href="/" class="flex hover:no-underline">
                    <span class="self-center text-lg font-semibold whitespace-nowrap text-white">
                        <Fa icon={faHome}/>
                    </span>
                </a>

                <a href="/about" class="flex hover:no-underline">
                    <span class="self-center text-lg font-semibold whitespace-nowrap text-white">
                        <Fa icon={faInfoCircle}/>
                    </span>
                </a>

                {#if $user }
                    <button on:click={logout} class="font-bold text-orange-900 flex items-center">
                        <Fa icon={faPowerOff}/>&nbsp;
                        Log out
                    </button>
                {/if}
            </div>


        </div>
    </nav>
</header>

<style>

</style>
