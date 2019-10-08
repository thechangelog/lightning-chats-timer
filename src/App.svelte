<script>
  import Timer from "./Timer.svelte";
  export let podcast;
  export let conference;
  export let duration;
  export let subscribeUrl;
</script>

<style>
 .cta, .credit {
   font-size: 0.75em;
   position: absolute;
   max-width: 500px;
 }
 .cta {
  bottom: 1vw;
  left: 1vw;
 }
 .credit {
  bottom: 1vw;
  right: 1vw;
 }
 .cta p, .credit p {
  line-height: 1.5em;
  margin-bottom: 0;
 }
 .cta p {
  font-size: calc(1em + 0.125vw);
 }
 .credit p {
  font-size: 0.95em;
 }
</style>

<div class="cta">
  <p>
    Welcome to <em>{podcast}</em> live from <em>{conference}</em>!<br />
    Listen and subscribe at <u>{subscribeUrl}</u>
  </p>
</div>

<div class="credit">
  <p>A tiny <em>Svelte</em> thing typeset in <em>Arnold</em> by <em>Rüdiger</em></p>
</div>

<Timer duration={duration} />
