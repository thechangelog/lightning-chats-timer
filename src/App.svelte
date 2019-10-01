<script>
	import Timer from './Timer.svelte';
  export let podcast;
  export let duration;
  export let subscribeUrl;
</script>

<style>
 .cta {
   font-size: 0.75em;
   position: absolute;
   bottom: 1vw;
   left: 1vw;
   max-width: 500px;
 }
 .cta p {
   font-size: calc(1em + 0.125vw);
   line-height: 1.5em;
 }
 .cta p:last-child {
   margin-bottom: 0;
 }
 .cta p.small {
   font-size: 0.95em;
 }
</style>

<div class="cta">
  <p>
    Welcome to <em>{podcast}</em> live from <em>Conference Name</em>.<br />
    Listen and subscribe at <u>{subscribeUrl}</u>.
  </p>
  <!-- TODO: We need to buy this license if we end up using this font. -->
  <p class="small">Built with <em>Svelte</em> and typeset in <em>Arnold</em> by <em>Rüdiger</em>.</p>
</div>

<Timer duration={duration} />