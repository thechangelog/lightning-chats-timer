<script>
	export let podcast;
  export let duration;

  let initial = duration;
  let counting = false;
  let pid;

  function tick() {
    duration = duration - 1;
  }

  function play() {
    pid = setInterval(tick, 1000);
    counting = true;
  }

  function pause() {
    clearInterval(pid);
    counting = false;
  }

  function reset() {
    duration = initial;
  }
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Welcome to {podcast}</h1>

{#if counting}
<button on:click={pause}>Pause</button>
{:else}
<button on:click={play}>Start</button>
{/if}
<button on:click={reset}>Reset</button>

<p>There are {duration} seconds left</p>
