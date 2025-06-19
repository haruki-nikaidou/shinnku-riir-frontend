<script lang="ts">
	import { Button } from '@/components/ui/button';
	import * as Card from '$lib/components/ui/card/index.js';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import Markdown from 'svelte-exmarkdown';

	interface Props {
		title: string;
		brief: string;
		detail: string;
	}

	const { title, brief, detail }: Props = $props();

	let showMore = $state(false);

</script>

<style>
		@import 'tailwindcss';

    .mdBlock {
        @apply text-sm space-y-4;
    }

    .mdBlock h1,
    .mdBlock h2,
    .mdBlock h3,
    .mdBlock h4,
    .mdBlock h5,
    .mdBlock h6 {
        @apply font-bold;
    }

    .mdBlock h1 {
        @apply text-lg;
    }

    .mdBlock h2 {
        @apply text-base;
    }

    .mdBlock h3 {
        @apply text-base;
    }

    .mdBlock h4 {
        @apply text-sm;
    }

    .mdBlock h5 {
        @apply text-sm;
    }

    .mdBlock a {
        @apply underline text-primary;
    }

    .mdBlock ul {
        @apply list-disc list-inside;
    }

    .mdBlock ol {
        @apply list-decimal list-inside;
    }
</style>

<Card.Root>
	<Card.Header>
		<Card.Title>{title}</Card.Title>
		<Card.Description>AI 简介</Card.Description>
	</Card.Header>
	<Card.Content>
		{#if showMore}
			<div class="mdBlock">
				<Markdown md={detail} />
			</div>
		{:else}
			<div class="mdBlock">
				<Markdown md={brief} />
			</div>
			<Button onclick={() => (showMore = !showMore)} size="icon" class="mt-2">
				<ChevronDown />
			</Button>
		{/if}
	</Card.Content>
</Card.Root>