<script>
  import { base } from '$app/paths'
  import { page } from '$app/stores'
  $: ( { item, pageNo } = $page.params )
  export let pages
</script>

<nav class="nav-pages-container">
  {#each pages as page, i}
    <a href="{base}/{item}/{i}" class="page-link" class:active={pageNo === i}>
      <figure class="page" style="background-image: url('https://collections.newberry.org/IIIF3/Image/{page.image}/full/,77/0/default.jpg');">
        <!-- <img alt={page.image} src="https://collections.newberry.org/IIIF3/Image/{page.image}/full/,77/0/default.jpg" /> -->
        <figcaption>{i}</figcaption>
      </figure>
    </a>
  {/each}
</nav>
<style>
  .nav-pages-container {
  width: calc(100vw - 20px);
  overflow: scroll;
  margin: 10px 20px;
  display: flex;
  align-items: center;


  }
  .page img {
  height: 75px;
  }
  figcaption {

  }
  .page {
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  flex-basis: 33px;
  min-width: 33px;
  height: 77px;
  border: 1px solid rgb(var(--fg-color-2));
  margin:10px 0;
  background-color: rgb(var(--bg-color-2));
  display: flex;
  justify-content: center;
  align-items: center;
  }
  .page-link:not(.active) {
  opacity: 0.5;
  transition: 150ms;
  }
  .page-link:hover {
  opacity: 1;
  }
</style>
