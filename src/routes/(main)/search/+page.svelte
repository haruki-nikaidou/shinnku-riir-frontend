<script lang="ts">
	import { page } from '$app/state';
	import ResultItem from './result-item.svelte';
	import SearchBox from '$lib/components/search-box.svelte';
	import { goto } from '$app/navigation';
	import AiIntro from './ai-intro.svelte';

	let searchContent = $state(page.url.searchParams.get('s') || '');

	function handleSearch(searchContent: string) {
		goto(`/search?s=${encodeURIComponent(searchContent)}`);
	}

	const mockData = [
		{
			title: '9-nine-ここのつここのかここのいろ',
			size: '2.27GB ',
			category: ['熟肉', 'ぱれっと', 'rar'],
			filePath: 'zd/1001-1500/[170428][ぱれっと] 9-nine-ここのつここのかここのいろ.rar'
		},
		{
			title: '9-nine-ここのつここのかここのいろ',
			size: '2.27GB ',
			category: ['熟肉', 'ぱれっと', 'rar'],
			filePath: 'zd/1001-1500/[170428][ぱれっと] 9-nine-ここのつここのかここのいろ2.rar'
		}
	];

	const mockAiIntro = {
		title: 'AI 简介',
		brief: 'AI 简介',
		detail: 'AI 简介'
	}
</script>

<section class="w-full py-6 bg-card/50 backdrop-blur-md border-b border-b-muted-foreground/20">
	<div class="w-full max-w-7xl px-4 mx-auto">
		<SearchBox bind:searchContent={searchContent} onSearch={handleSearch} />
	</div>
</section>

<main class="grid lg:grid-cols-6 gap-2 px-4 max-w-7xl mx-auto">
	<section class="col-span-3 py-8 px-4 space-y-4">
		{#each mockData as item (item.filePath)}
			<ResultItem title={item.title} size={item.size} category={item.category} filePath={item.filePath} />
		{/each}
	</section>
	<section class="col-start-5 col-span-2 py-8 px-4">
		<AiIntro
			title={mockAiIntro.title}
			brief={mockAiIntro.brief}
			detail={mockAiIntro.detail}
		/>
	</section>
</main>