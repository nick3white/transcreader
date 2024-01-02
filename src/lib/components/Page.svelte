<script lang="ts">
  import {base } from '$app/paths'
  import { onMount } from 'svelte'
  export let pageData,  itemid
  $: ({ image, text, pageNo, title} = pageData)

</script>
<div class="book-container">
    <div class="image-container" >
      <!-- <div id="magnifying-glass" style="background-image: url('https://collections.newberry.org/IIIF3/Image/{image}/full/max/0/default.jpg')"/> -->
      <img class="page-image" src="https://collections.newberry.org/IIIF3/Image/{image}/full/600,/0/default.jpg" alt="" />
    </div>
  <div class="text-container">
    {#if pageNo[0] === 0}
      <h1>{text}</h1>
      <p>description</p>
    {:else }
      <h1>{title}</h1>
      <p class="transc-text">
        {text}
      </p>
    {/if}
        <div class="page-nav">
          <a href="{base}/rest/{itemid}/{pageNo[0] - 1 < 1 ? 0 : pageNo[0] - 1}" class="back nav-btn">
          <!-- <a href="{base}/id/{itemid}/{pageNo[0] - 1 < 1 ? 0 : pageNo[0] - 1}" class="back nav-btn"> -->

<img src="{base}/arrow-left.svg" alt="" />
      </a>
          <div class="current">
        {#if pageNo[0] === 0}
        cover page; {pageNo[1]} pages total
        { :else }
        page {pageNo[0]} of {pageNo[1]}
{/if}
      </div>
          <a href="{ base }/rest/{ itemid }/{ pageNo[0] + 1 }" class="fwd nav-btn" >
          <!-- <a href="{ base }/id/{ itemid }/{ pageNo[0] + 1 }" class="fwd nav-btn" > -->
<img src="{base}/arrow-left.svg" alt="" />
      </a>
        </div>
  </div>
</div>

<style>
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
  }
  .page-nav {
  width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
  }
</style>
