<script>
    import {supabase} from "../../supabase.js";

    let loading = false;
    let email;
    let loginMessage = '';

    const handleLogin = async () => {
        try {
            loading = true;
            console.log(email);
            const {error} = await supabase.auth.signIn({email});

            if (error) throw error;
            loginMessage = 'Check email for login link';

        } catch (error) {
            console.error(error);
            alert(error.error_decription || error.message);
        }
    }

</script>

<h1 class="mb-6 mt-12 text-center text-5xl font-extrabold">
    Welcome.
</h1>

<p class="mb-12">Sign in via magic link with your email below</p>

<form on:submit|preventDefault={handleLogin} class="form-control w-full max-w-md">

    <div class="mb-4">
        <label class="block mb-1" for="email">Email-Address</label>
        <input id="email" type="text" placeholder="Enter your email" bind:value={email} name="email"
               class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
    </div>

    <div class="mt-6 mb-2">
        <button type="submit"
                class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
            Sign In
        </button>
    </div>

    {#if loginMessage}
        <p class="mb-4 mt-4 bg-orange-400 text-orange-800 font-bold p-4 rounded">{loginMessage}</p>
    {/if}

</form>

