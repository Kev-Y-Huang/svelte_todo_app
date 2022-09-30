<script>
  import TodoItem from "./TodoItem.svelte";
  import { db } from "../firebase";
  import { addDoc, updateDoc, deleteDoc, collection, doc, orderBy, query, where } from "firebase/firestore";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  // User ID prop passed from parent
  export let uid;

  // Form Text
  let text = "some task";

  // Create a reference to the cities collection
  const todosRef = collection(db, "todos");

  // Create a query against the collection filtering on user ID.
  const q = query(todosRef, where("uid", "==", uid), orderBy("created"));

  // Get todos data using the document ID as the todo ID
  const todos = collectionData(q, { idField: 'id' }).pipe(startWith([]));

  // Add function
  async function addTodo() {
    await addDoc(todosRef, {
      uid,
      text,
      complete: false,
      created: Date.now(),
    });
    text = "";
  }

  // Update function
  async function updateTodo(event) {
    const { id, newStatus } = event.detail;
    
    await updateDoc(doc(todosRef, id), { complete: newStatus });
  }

  // Delete function
  async function deleteTodo(event) {
    const { id } = event.detail;
    await deleteDoc(doc(todosRef, id));
  }
</script>

<ul>
  {#each $todos as todo}
    <TodoItem {...todo} on:remove={deleteTodo} on:toggle={updateTodo} />
  {/each}
</ul>

<input bind:value={text} />

<button on:click={addTodo}>Add Task</button>

<style>
  input {
    display: block;
  }
</style>
