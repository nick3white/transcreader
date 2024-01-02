<script lang="ts">
  import { onMount } from 'svelte'
  export let pageData
  const { image, text, pageNo} = pageData
let img, glass, w, h, bw
  const zoom = 3;
  onMount(() => {
 img = document.getElementById('page-image');
 glass = document.getElementById('magnifying-glass');
 glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
  
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
  })
  function moveMagnifier(e) {
    var pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;

    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}

    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
 function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
</script>
<div class="container">
  <div class="image">
    <figure>
      <div id="magnifying-glass" style="background-image: url('https://collections.newberry.org/IIIF3/Image/{image}/full/max/0/default.jpg')"/>
      <img id="page-image" src="https://collections.newberry.org/IIIF3/Image/{image}/full/max/0/default.jpg" alt="" />
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
  figure {
  position: relative;
  }
#magnifying-glass {
  background-repeat: no-repeat; 
  position: absolute;
  border: 3px solid #000;
  border-radius: 50%;
  cursor: none;
  /*Set the size of the magnifier glass:*/
  width: 200px;
  height: 200px;
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
