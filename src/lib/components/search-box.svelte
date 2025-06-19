<script lang="ts">
import { cn } from '@/utils.js';
import Search from '@lucide/svelte/icons/search.svelte';
import CornerDownLeft from '@lucide/svelte/icons/corner-down-left.svelte';

interface Props {
	searchContent?: string;
	onSearch?: (value: string) => void;
}

let {
	searchContent = $bindable('') ,
	onSearch = () => {}
}: Props = $props();
</script>

<search class={cn(
			"flex items-center max-w-2xl mx-auto my-8 gap-2",
			"bg-input/50 px-4 py-2 rounded-full border border-primary/20",

		)}>
	<Search class="text-muted-foreground" />
	<input
		type="text"
		bind:value={searchContent}
		class="flex-1 bg-transparent outline-none tracking-wide"
		placeholder="输入游戏名称或关键词"
	/>
	<div class="border rounded-md border-foreground/20 p-1">
		<CornerDownLeft class="h-3 w-3 text-muted-foreground" />
	</div>
</search>