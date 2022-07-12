<script>
    import { each } from "svelte/internal";
  
    let showTExt = true;
    let color = "green";
    export let name = "alsadig";
    let users = [
      { id: 1, name: "alsadig" },
      { id: 2, name: "ahmed" },
      { id: 3, name: "ali" },
      { id: 4, name: "hasan" },
    ];
    const toggle = () => {
      color = color === "green" ? "blue" : "green";
      showTExt = !showTExt;
      users = [...users, { id: users.length+1, name: "me again" }];
    };
  </script>
  
  <main>
    <h1 style="color: {color};">Hello {name}!</h1>
    {#if showTExt}
      <p>I love svelte sooooooooooooo much.</p>
    {:else}
      <p>no text</p>
    {/if}
    <button on:click={toggle}>click</button>
    <hr />
    {#each users as user}
      <h3>{user.id} : {user.name}</h3>
    {/each}
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
  
    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 4rem;
      font-weight: 100;
      line-height: 1.1;
      margin: 2rem auto;
      max-width: 14rem;
    }
  
    p {
      max-width: 14rem;
      margin: 1rem auto;
      line-height: 1.35;
    }
  </style>
  