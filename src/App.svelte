<script>
	import Timer from './Timer.svelte';
  export let podcast;
  export let duration;
  export let subscribeUrl;
</script>

<style>
 .cta {
   font-family: monospace;
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
    Welcome to <strong>{podcast}</strong> live from <em>Conference Name</em>.<br />
    Listen and subscribe at <u>{subscribeUrl}</u>.
  </p>
  <!-- TODO: We need to buy this license if we end up using this font. -->
  <p class="small">Typeset in <strong>Nostra by Lucas Descroix</strong> and<br />whatever <strong>monospace font is included in this OS</strong>.</p>
</div>

<Timer duration={duration} />