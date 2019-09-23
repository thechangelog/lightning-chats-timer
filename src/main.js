import App from "./App.svelte";

const app = new App({
	target: document.body,
	props: {
		podcast: "JS Party",
    duration: 300, // seconds
    buzzer: ""
	}
});

export default app;
