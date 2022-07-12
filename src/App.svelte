<script>
  import "./assets/global.css";
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import Feedbackstats from "./components/FeedbackStats.svelte";
  import {app, analytics,db} from './lib/firebase'
  // console.log({app:app}, {analytics:analytics},{db:db});
  // console.clear()
</script>

<main>
  <FeedbackList>
    <FeedbackForm />
    <Feedbackstats />
  </FeedbackList>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
