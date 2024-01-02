<script lang="ts">
	export let data
</script>

<div class="center">
	<img alt={data.image} src="https://collections.newberry.org/IIIF3/Image/{data.image}/full/,400/0/default.jpg" />
</div>
<style>
  .center{
  display: flex;
    justify-content: center;
  align-items: center;
  }
</style>
