<script lang="ts">
import { cn } from '@/utils.js';
import Search from '@lucide/svelte/icons/search';
import CornerDownLeft from '@lucide/svelte/icons/corner-down-left';
import LoaderCircle from '@lucide/svelte/icons/loader-circle';

interface Props {
	searchContent?: string;
	class?: string;
	onSearch?: (value: string) => void;
	isLoading?: boolean;
}

let {
	searchContent = $bindable(''),
	onSearch = () => {},
	class: className,
	isLoading = $bindable(false),
}: Props = $props();

function handleKeyDown(e: KeyboardEvent) {
	if (e.key === 'Enter') {
		onSearch(searchContent);
	}
}
</script>

<search
	class={cn(
			"flex items-center max-w-2xl gap-2",
			"bg-input/50 px-4 py-2 rounded-full border border-primary/20 placeholder:text-muted-foreground",
			"focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
			className
		)}>
	{#if isLoading}
		<LoaderCircle class="text-muted-foreground animate-spin" />
	{:else}
		<Search class="text-muted-foreground" />
	{/if}
	<input
		type="text"
		bind:value={searchContent}
		onkeydown={handleKeyDown}
		class="flex-1 bg-transparent outline-none tracking-wide"
		placeholder="输入游戏名称或关键词"
	/>
	<div class="border rounded-md border-foreground/20 p-1">
		<CornerDownLeft class="h-3 w-3 text-muted-foreground" />
	</div>
</search>