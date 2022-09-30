<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // Function to dispatch remove action
  function remove() {
    dispatch("remove", { id });
  }

  // Function to dispatch toggle status action
  function toggleStatus() {
    let newStatus = !complete;
    dispatch("toggle", {
      id,
      newStatus,
    });
  }

  // props for the component
  export let id; // document ID
  export let text;
  export let complete;
</script>

<li>
  {#if complete}
    <span class="is-complete">{text}</span>
    <button on:click={toggleStatus}> ✔️ </button>
  {:else}
    <span>{text}</span>
    <button on:click={toggleStatus}> ❌ </button>
  {/if}

  <button on:click={remove}> 🗑 </button>
</li>

<style>
  .is-complete {
    text-decoration: line-through;
    color: green;
  }
</style>
