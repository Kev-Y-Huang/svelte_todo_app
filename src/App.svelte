<script>
  import Profile from "./Profile.svelte";
  import Todos from "./Todos.svelte";

  import { auth, googleProvider } from "../firebase";
  import { authState } from "rxfire/auth";
  import { signInWithPopup } from "firebase/auth";

  let user;

  // access the auth state to get the current user
  const unsubscribe = authState(auth).subscribe((u) => (user = u));

  // login function using google authentication
  function login() {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // The signed-in user info.
        user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        
        console.log(errorCode, errorMessage, email);
      });
  }
</script>

<section>
  {#if user}
    <Profile {...user} />
    <button on:click={() => auth.signOut()}>Logout</button>
    <hr />
    <Todos uid={user.uid} />
  {:else}
    <button on:click={login}> Signin with Google </button>
  {/if}
</section>
