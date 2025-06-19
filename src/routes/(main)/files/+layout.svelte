<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Archive, LoaderCircle } from '@lucide/svelte';
	import {beforeNavigate, afterNavigate} from '$app/navigation';

	let { children } = $props();

	let isLoading = $state(false);

	beforeNavigate(() => {
		isLoading = true;
	});

	afterNavigate(() => {
		isLoading = false;
	});

</script>
<main class="w-full max-w-3xl mx-auto my-20 px-4">
	<Card.Root >
		<Card.Header>
			<Card.Title>
				{#if isLoading}
					<LoaderCircle class="inline-block animate-spin" />
				{:else}
					<Archive class="inline-block" />
				{/if}
				文件
			</Card.Title>
			<Card.Description>全部游戏的文件</Card.Description>
		</Card.Header>
		<Card.Content>
			{@render children()}
		</Card.Content>
	</Card.Root>
</main>