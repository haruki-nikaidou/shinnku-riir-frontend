<script lang="ts">
	import { page } from '$app/state';
	import type { PageProps } from './$types';
	import ResultItem from './result-item.svelte';
	import SearchBox from '$lib/components/search-box.svelte';
	import { goto, afterNavigate } from '$app/navigation';
	import AiIntro from './ai-intro.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';

	const { data }: PageProps = $props();
	const { results, aiIntro } = data;

	let searchContent = $state(page.url.searchParams.get('s') || '');

	let loading = $state(false);

	function handleSearch(searchContent: string) {
		loading = true;
		goto(`/search?s=${encodeURIComponent(searchContent)}`);
	}

	afterNavigate(() => {
		loading = false;
	});
</script>

<section class="w-full py-6 bg-card/50 backdrop-blur-md border-b border-b-muted-foreground/20">
	<div class="w-full max-w-7xl px-4 mx-auto">
		<SearchBox
			bind:isLoading={loading}
			bind:searchContent={searchContent}
			onSearch={handleSearch}
		/>
	</div>
</section>

<main class="grid lg:grid-cols-6 gap-2 px-4 max-w-7xl mx-auto">
	<section class="col-span-3 py-8 px-4 space-y-4">
		{#if loading}
			<Skeleton class="h-32 w-full" />
			<Skeleton class="h-32 w-full" />
			<Skeleton class="h-32 w-full" />
			<Skeleton class="h-32 w-full" />
		{:else}
			{#each results as item (item.filePath)}
				<ResultItem title={item.title} size={item.size} category={item.category} filePath={item.filePath} />
			{/each}
		{/if}
	</section>
	<section class="col-start-5 col-span-2 py-8 px-4">
		{#if !loading}
			{#if aiIntro}
				<AiIntro
					title={aiIntro.title}
					brief={aiIntro.brief}
					detail={aiIntro.detail}
				/>
			{/if}
		{/if}
	</section>
</main>