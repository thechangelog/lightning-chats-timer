<script>
  export let duration;

  let initial = duration;
  let counting = false;
  let pid;

  function tick() {
    if (duration > 0) {
      duration = duration - 1;
    } else {
      finish();
    }
  }

  function play() {
    pid = setInterval(tick, 100);
    counting = true;
  }

  function pause() {
    clearInterval(pid);
    counting = false;
  }

  // just like pause but we can do other cool stuff
  function finish() {
    pause();
    // ...
  }

  function reset() {
    duration = initial;
  }

  function sec2time(timeInSeconds) {
    var pad = function(num, size) { return ('000' + num).slice(size * -1); },
    time = parseFloat(timeInSeconds).toFixed(3),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60);

    return pad(minutes, 1) + ':' + pad(seconds, 2);
  }

  $: displayDuration = sec2time(duration);
  $: scale = (1 - (duration / initial * 0.25));
</script>

<style>
	h1 {
    color: white;
  }

  .countdown {
    align-items: center;
    justify-content: center;
    display: flex;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  time {
    display: block;
    font-family: "Nostrav", "Helvetica Neue", sans-serif;
    font-size: 18vw;
    text-align: center;
    /* transition: all 1s linear; */
  }
</style>

{#if counting}
<button on:click={pause}>Pause</button>
{:else}
<button on:click={play}>Start</button>
{/if}
<button on:click={reset}>Reset</button>

<div class="countdown">
  <time style="transform: scale({scale})">{displayDuration}</time>
</div>
