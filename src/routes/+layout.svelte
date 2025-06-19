<script lang="ts">
	import '../app.css';

	import { ModeWatcher } from "mode-watcher";
	let { children } = $props();
</script>

<svelte:head>
	<title>
		真红的小站
	</title>
</svelte:head>

<ModeWatcher />
{@render children()}
