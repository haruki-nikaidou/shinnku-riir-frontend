<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import OneOutline from '$lib/components/icons/one-outline.svelte';
	import KrkrOutline from '$lib/components/icons/krkr-outline.svelte';
	import Icon from '@iconify/svelte';
	import { SquareTerminal } from '@lucide/svelte';
</script>


<div class="space-y-4 *:w-full">
	<Button size="ex" href="/files/shinnku/0/win">
		<Icon icon="cib:windows" />
		前 Windows 汉化集合
	</Button>
	<Button size="ex" href="/files/shinnku/zd">
		<Icon icon="cib:windows" />
		后 Windows 汉化集合
	</Button>
	<Button size="ex" href="/files/shinnku/0/apk">
		<Icon icon="cib:android" />
		APK 直装
	</Button>
	<Button size="ex" href="/files/shinnku/0/ons">
		<OneOutline />
		ONS 模拟器
	</Button>
	<Button size="ex" href="/files/shinnku/0/krkr">
		<KrkrOutline />
		KRKR 模拟器
	</Button>
	<Button size="ex" href="/files/shinnku/0/tools">
		<SquareTerminal />
		Galgame 工具
	</Button>
	<Button size="ex" href="/files/galgame0">
		<Icon icon="circle-flags:ja" />
		生肉集合
	</Button>
</div>