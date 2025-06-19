<script lang="ts">
	import * as Table from "$lib/components/ui/table/index.js";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import Download from "@lucide/svelte/icons/download";
	import * as Pagination from "$lib/components/ui/pagination/index.js";
</script>

<div class="mb-4">
	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/files">根目录</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/files/shinnku/0/win">前 Windows 汉化集合</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Page>120日元</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>
</div>

<div>
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>文件名</Table.Head>
				<Table.Head class="w-20">类型</Table.Head>
				<Table.Head class="w-20">大小</Table.Head>
				<Table.Head class="text-right">操作</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			<Table.Row>
				<Table.Cell class="font-medium">11月的理想乡</Table.Cell>
				<Table.Cell>文件</Table.Cell>
				<Table.Cell>4.2 GB</Table.Cell>
				<Table.Cell class="text-right">
					<Button>
						<Download class="h-4 w-4 inline-block" />
					</Button>
				</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table.Root>
</div>

<div class="mt-2">
	<Pagination.Root count={100} perPage={10}>
		{#snippet children({ pages, currentPage })}
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.PrevButton />
				</Pagination.Item>
				{#each pages as page (page.key)}
					{#if page.type === "ellipsis"}
						<Pagination.Item>
							<Pagination.Ellipsis />
						</Pagination.Item>
					{:else}
						<Pagination.Item>
							<Pagination.Link {page} isActive={currentPage === page.value}>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}
				<Pagination.Item>
					<Pagination.NextButton />
				</Pagination.Item>
			</Pagination.Content>
		{/snippet}
	</Pagination.Root>
</div>