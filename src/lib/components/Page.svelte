<script lang="ts">
  import { onMount } from 'svelte'
  export let pageData
  const { image, text, pageNo} = pageData

  onMount(() => {
document.getElementById("page").onmousemove = function(e) {
    document.getElementById("magnify").style.top = e.pageY*1 + "px";
    document.getElementById("magnify").style.left = e.pageX*1 + "px";
}
 })
</script>
<div class="container">
  <div id="image-container" class="image">
    <figure>
      <!-- <div id="magnifying-glass" style="background-image: url('https://collections.newberry.org/IIIF3/Image/{image}/full/max/0/default.jpg')"/> -->
      <img class="magnifiedImg"  id="page-image" src="https://collections.newberry.org/IIIF3/Image/{image}/full/max/0/default.jpg" alt="" />
      <figcaption>
        <p>page {pageNo[0]} / {pageNo[1]}</p>
      </figcaption>
    </figure>
  </div>
  <div class="text">
    {#if pageNo[0] === 0}
      <h1>{text}</h1>
    {:else }
      <p>
        {text}
      </p>
    {/if}
  </div>
</div>

<style>

.magnify{
  border-radius: 50%;
  border: 2px solid black;
  position: absolute;
  z-index: 20;
  background-repeat: no-repeat;
  background-color: white;
  box-shadow: inset 0 0 20px rgba(0,0,0,.5);
  display: none;
  cursor: none;
}


  figure, img {
  position: relative;
  }
#page-image::before {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100px;
height: 100px;
background: transparent;
}
  .container {
  display: flex;
  height: 100%;
  max-height: 90vh;
  overflow: hidden;
  }
  #page-image {
  height: 85vh;
  object-fit: contain;
  }
  .text {
  padding: 33px;


  display: flex;
  justify-content: center;
  align-items: center;
  }
</style>
