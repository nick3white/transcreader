<script lang="ts">
  import { base} from '$app/paths'
	import { goto, preloadData, pushState } from '$app/navigation'
	import { page } from '$app/stores'
	import Modal from '$comps/Modal.svelte'
	import ItemPage from '../page/[id]/+page.svelte'

	export let data

	let modal: HTMLDialogElement

	async function showModal(e: MouseEvent) {
		// get URL
		const { href } = e.currentTarget as HTMLAnchorElement

		// get result of `load` function
		const result = await preloadData(href)
		console.log(result)

		// create new history entry
		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, { selected: result.data })
			modal.showModal()
		} else {
			goto(href)
		}
	}

	function closeModal() {
		history.back()
	}
</script>

<Modal bind:modal on:close={closeModal}>
	{#if $page.state.selected}
		<ItemPage data={$page.state.selected} />
	{/if}
</Modal>

<div class="feed">
	{#each data.item.pages as page}
		<a on:click|preventDefault={showModal} href="{base}/page/{page.image}">
			<img alt={page.image} src="https://collections.newberry.org/IIIF3/Image/{page.image}/full/,100/0/default.jpg" />
		</a>
	{/each}
</div>

<style>
	.feed {
		max-inline-size: 600px;
		display: grid;
		gap: 2rem;
		margin-inline: auto;
		padding-block: 2rem;
	}
</style>
