<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { goto } from '$app/navigation';
	import SearchBox from '$lib/components/search-box.svelte';

	let loading = $state(false);

	function handleSearch(searchContent: string) {
		loading = true;
		goto(`/search?s=${encodeURIComponent(searchContent)}`);
	}

</script>


<main class="w-full max-w-7xl mx-auto px-4 py-8">
	<Card.Root>
		<Card.Header>
			<h1 class="mt-24" aria-label="真红小站">
				<img src="/shinnku-logo.png" alt="Shinnku Logo" class="w-full max-w-sm mx-auto" />
			</h1>
			<p class="text-center text-muted-foreground">
				真红小站（原 失落小站）一个galgame资源站, <br>收录了大部分的汉化galgame, 大部分的生肉galgame资源，krkr资源，visual
				novel，等等。
			</p>
		</Card.Header>

		<Card.Content>
			<SearchBox
				onSearch={handleSearch}
				bind:isLoading={loading}
				class="my-8 mx-auto"
			/>
			<div class="flex gap-4 my-8 items-center justify-center">
				<Button size="lg" href="/files">
					浏览全部游戏
				</Button>
				<Button size="lg">
					不知道有什么用的按钮
				</Button>
			</div>
			<div class="mt-16 h-16 text-center w-full max-w-2xl mx-auto rounded-xl bg-muted border border-foreground/10 p-4">
				<p>AD</p>
			</div>
		</Card.Content>
	</Card.Root>
</main>
