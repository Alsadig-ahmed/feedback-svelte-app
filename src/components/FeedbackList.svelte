<script>
  import FeedbackItem from "./FeedbackItem.svelte";
  import{fade ,slide, scale} from 'svelte/transition'
  import {feedback} from '../store'

  // export let feedback = [];
  

//   console.log(feedback);
</script>

Feedback List
<slot />
{#each $feedback as fb}
<div out:fade={{duration:1000,}}  in:scale >
    <FeedbackItem item={fb} on:delete-feedback />
</div>
{/each}
