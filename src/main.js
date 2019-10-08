import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    podcast: "JS Party",
    conference: "All Things Open",
    subscribeUrl: "changelog.com/jsparty",
    duration: 300 // seconds
  }
});

export default app;
