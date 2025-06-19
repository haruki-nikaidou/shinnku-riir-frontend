<script lang="ts">
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import Archive from '@lucide/svelte/icons/archive';
	import Info from '@lucide/svelte/icons/info';
	import Icon from '@iconify/svelte';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';

	let { children } = $props();
</script>


<header class="w-full bg-card/50 backdrop-blur-md border-b border-b-muted-foreground/20">
	<nav class="w-full flex justify-between items-center max-w-7xl mx-auto py-2 px-4">
		<div class="flex items-center gap-2">
			<a class="flex items-center gap-2" href="/">
				<img src="/shinnku-logo.png" alt="Shinnku Logo" class="h-8 sm:h-10" />
			</a>
			<div class="flex sm:hidden items-center gap-1">
				<Button href="/books" size="icon" variant="ghost">
					<BookOpen />
				</Button>
				<Button href="/files" size="icon" variant="ghost">
					<Archive />
				</Button>
				<Button href="/about" size="icon" variant="ghost">
					<Info />
				</Button>
			</div>
			<div class="items-center gap-2 hidden sm:flex">
				<Button href="/docs" variant="ghost">
					<BookOpen />
					文档
				</Button>
				<Button href="/files" variant="ghost">
					<Archive />
					文件
				</Button>
				<Button href="/about" variant="ghost">
					<Info />
					关于
				</Button>
			</div>
		</div>
		<div class="flex items-center gap-1">
			<Button variant="ghost" size="icon" href="https://github.com/shinnku-nikaidou/shinnku-com">
				<Icon icon="simple-icons:github"/>
			</Button>
			<Button onclick={toggleMode} variant="ghost" size="icon">
				<SunIcon
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<MoonIcon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</nav>
</header>

{@render children()}
