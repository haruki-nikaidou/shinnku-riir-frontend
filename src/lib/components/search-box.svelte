<script lang="ts">
import { cn } from '@/utils.js';
import Search from '@lucide/svelte/icons/search';
import CornerDownLeft from '@lucide/svelte/icons/corner-down-left';

interface Props {
	searchContent?: string;
	class?: string;
	onSearch?: (value: string) => void;
}

let {
	searchContent = $bindable(''),
	onSearch = () => {},
	class: className,
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
	<Search class="text-muted-foreground" />
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