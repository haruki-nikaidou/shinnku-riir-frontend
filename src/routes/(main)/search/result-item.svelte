<script lang="ts">
	import Download from '@lucide/svelte/icons/download';

	const DOWNLOAD_LINK_BASE = 'https://dl.oo0o.ooo/file/shinnku' as const;
	const BOOSTED_LINK_BASE = 'https://download.shinnku.com/file/shinnku' as const;

	interface Props {
		title: string;
		size: string;
		category: string[];
		filePath: string;
	}

	const { title, size, category, filePath }: Props = $props();

	const downloadLink = DOWNLOAD_LINK_BASE + '/' + encodeURIComponent(filePath);
	const boostedLink = BOOSTED_LINK_BASE + '/' + encodeURIComponent(filePath);
</script>

<div class="bg-card/50 backdrop-blur-md p-4 rounded-lg">
	<p class="text-primary text-xl">
		{title}
	</p>
	<div class="-space-y-1">
		<p class="text-muted-foreground text-sm">
			分类：{category.join(', ')}
		</p>
		<p class="text-muted-foreground text-sm">
			大小：{size}
		</p>
	</div>
	<div class="text-primary text-sm space-x-4">
		<a
			href={downloadLink}
			target="_blank"
		>
			<Download class="h-4 w-4 inline-block" />
			下载
		</a>
		<a
			href={boostedLink}
			target="_blank"
		>
			<Download class="h-4 w-4 inline-block" />
			加速下载
		</a>
	</div>
</div>