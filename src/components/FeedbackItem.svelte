<script>
  // import { createEventDispatcher } from "svelte";

  import Card from "./Card.svelte";
  import { feedback } from "../store";
  import { current_component } from "svelte/internal";

  // const dispatch = createEventDispatcher();
  /** What should we call the user? */
  export let item;
  const Delete = (itemId) => {
    feedback.update((currentFB) => {
      return currentFB.filter((item) => item.id != itemId);
    });
  };
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button on:click={() => Delete(item.id)} class="close">X</button>

  <p class="text-display">{item.id}</p>
  <p class="text-display">{item.text}</p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -0.7rem;
    left: -0.7rem;
    width: 3rem;
    height: 3rem;
    background-color: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 1.15rem;
  }
  .close {
    position: absolute;
    top: 0.7rem;
    right: 1.4rem;
    cursor: pointer;
    background: none;
    border: none;
  }
  .close:hover {
    color: red;
  }
</style>
