import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    podcast: "JS Party",
    slug: "jsparty",
    conference: "All Things Open",
    duration: 300 // seconds
  }
});

export default app;
