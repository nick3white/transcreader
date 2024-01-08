<script>

  import { page } from "$app/stores"
  import { onMount } from 'svelte'
  import { base } from '$app/paths'
  // import {moveMagnifier} from '$lib'
  import Navipages from '$comps/Navipages.svelte'

  let img, glass, w, h, bw
  const zoom = 3;
  $: ( { item, pageNo } = $page.params )
  $: pageNo = parseInt(pageNo)


  $: console.log("pageNo", pageNo)
  export let data
  const { pages } = data.item
  // console.log(pages)
  $:  currentPage = pageNo === 0 ? { image: data.item.cover.image, title: "", text: data.item.title}: pages[pageNo - 1]
  $: console.log(currentPage)

  // async function showPage() {
  //
  // }

  // onMount(() => {
  //   img = document.getElementById('page-image');
  //   glass = document.getElementById('magnifying-glass');
  //   glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  //   bw = 3
  //   w = glass.offsetWidth / 2;
  //   h = glass.offsetHeight / 2;
  //
  //   glass.addEventListener("mousemove", (e) => moveMagnifier(e, w, h, img, glass, bw, zoom ));
  //   img.addEventListener("mousemove", (e) => moveMagnifier(e, w, h, img, glass, bw, zoom ));
  //   // img.addEventListener("mousemove", moveMagnifier);
  //
  //   glass.addEventListener("touchmove", (e) => moveMagnifier(e, w, h, img, glass, bw, zoom ));
  //   img.addEventListener("touchmove", (e) => moveMagnifier(e, w, h, img, glass, bw, zoom ));
  //   // img.addEventListener("touchmove", moveMagnifier);
  // })

</script>
{#if pageNo !== 0}

  <h1 class="reader-top">{data.item.title}</h1>
{/if}
<div class="book-container">
  <div class="image-container" >
    <img  class="page-image" id="page-image" src="https://collections.newberry.org/IIIF3/Image/{currentPage.image}/full/600,/0/default.jpg" alt="" />
  </div>
  <div class="text-container">
    {#if pageNo === 0}
      <h1>{data.item.title}</h1>
      <p>description</p>
    {:else }
      <p class="transc-text">
        { currentPage.text}
      </p>
    {/if}
    <div class="page-nav">
      <a href="{base}/{item}/{pageNo - 1 < 1 ? 0 : pageNo - 1}" class="back nav-btn">

        <img src="{base}/arrow-left.svg" alt="" />
      </a>
      <div class="current">
        {#if pageNo === 0}
          cover page; {pages.length} pages total
        { :else }
          page {pageNo} of {pages.length}
        {/if}
      </div>
      <a href="{ base }/{ item }/{ pageNo + 1 }" class="fwd nav-btn" >
        <img src="{base}/arrow-left.svg" alt="" />
      </a>
    </div>
  </div>
</div>
<Navipages {pages} {pageNo}/>
<style>
  .reader-top {
    font-size: 33px;
    margin: 0 auto;
    padding: 0;
    line-height: 43px;
    text-align: center;
  }
  .nav-btn {
    color: rgb(var(--bg-color-2));
    background: rgb(var(--fg-color-2));
    border-radius: 50%;
    transition: all 100ms ease-in-out;

    background: linear-gradient(145deg, rgba(var(--bg-color-2), 1), rgba(var(--bg-color-2), 0.5));
  }
  .nav-btn, .nav-btn img {

    width: 33px;
    height: 33px;
  }
  .fwd img{
    transform: rotate(180deg);
  }
  .nav-btn:hover {
    background: linear-gradient(145deg, rgba(var(--bg-color-2), 0.5), rgba(var(--bg-color-2), 1));

  }
  .image-container, .text-container {
    flex: 1;
  }
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(90vh - 100px);
  }
  img { 
    max-height: 100%;
    object-fit: cover;
    height: calc(90vh - 100px);
  }
  .book-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(90vh - 100px);
    margin: 10px 10px 0 10px;
  }
  .text-container {
    height: calc(90vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .transc-text {
    padding: 33px;
    font-size: 22px;
    line-height: 33px;
  }
  .page-nav {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
  }

  #magnifying-glass {
    background-repeat: no-repeat; 
    position: absolute;
    border: 3px solid #000;
    /* border-radius: 50%; */
    cursor: none;
    /*Set the size of the magnifier glass:*/
    width: 200px;
    height: 200px;
  }
</style>
