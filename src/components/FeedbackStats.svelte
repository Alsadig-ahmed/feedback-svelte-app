<script>
  // let count;
  // let average;
  import { feedback } from "../store";

  $: count = $feedback.length;
  $: average =
    $feedback.reduce((a, { rating }) => a + rating, 0) / $feedback.length;
</script>

<div class="div">
  {#if count == 0}
    <h4 class="c">no Reviews</h4>
  {:else if count == 1}
    <h4>One Review</h4>
  {:else}
    <h4>{count} Reviews</h4>
  {/if}
  {#if average}
    <h4>Rating average {average}</h4>
  {/if}
</div>

<style>
  .c {
    text-align: center;
  }
  .div {
    display: flex;
    justify-content: space-between;
    color: #fff;
    border: 1px #eee solid;
    padding: 10px;
    text-align: center;
    /* font-size: 1.15rem; */
  }
</style>
