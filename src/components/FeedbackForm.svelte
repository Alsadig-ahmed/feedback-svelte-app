<script>
import{v4 as uuidv4} from 'uuid'
  import { feedback } from "../store";
  let text = "";
  let rating;

  function handleSubmit() {
    const newFeedback = {
      id: uuidv4(),
      rating,
      text,
    };
    feedback.update((currentFB) => {
      return [newFeedback, ...currentFB];
    });
    text = "";
    rating=null;
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={text} placeholder="tell us your openin" />
  <input type="number" bind:value={rating} placeholder="give us a rating 1 out of 10" />
  <button>send</button>
</form>

<style>
  div {
    display: flex;
    justify-content: space-around;
    color: #fff;
    border: 1px #eee solid;
    padding: 0.2rem 10px;
    margin-bottom: 0.4rem;
    text-align: center;
    /* font-size: 1.15rem; */
  }
  input {
    padding: 0.5rem;
    border-radius: 0.3rem;
    width: 80%;
  }
  button {
    padding: 0.5rem;
    border-radius: 0.3rem;
    width: 20%;
  }
</style>
