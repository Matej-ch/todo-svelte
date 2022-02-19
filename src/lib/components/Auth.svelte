<script>
    import {supabase} from "../../supabase.js";

    let loading = false;
    let email;

    const handleLogin = async () => {
        try {
            loading = true;
            console.log(email);
            const {error} = await supabase.auth.signIn({email});

            if (error) throw error;
            alert('Check email for login link');

        } catch (error) {
            console.error(error);
            alert(error.error_decription || error.message);
        }
    }

</script>

<h1 class="text-2xl font-bold text-center md:text-3xl">
    Log In
</h1>

<p>Sign in via magic link with your email below</p>

<form on:submit|preventDefault={handleLogin}>
    <div class="form-control w-full max-w-xs">
        <label class="label" for="email">
            <span class="label-text">Your email address</span>
        </label>
        <input id="email" type="email" placeholder="Your email" bind:value={email}
               class="input input-bordered w-full max-w-xs">
    </div>

    <button class="btn btn-active btn-wide" type="submit">Button</button>
</form>

