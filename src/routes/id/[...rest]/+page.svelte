<script lang="ts">
  import { page } from '$app/stores'
  const { rest } = $page.params
  import Page from '$comps/Page.svelte'
  const [itemid, pageid] = rest.split('/');
  export let data;

  const pageNo = pageid && !isNaN(pageid) && pageid <= data.item.pages.length ? pageid + 1 : 0
  const pageData = pageNo === 0 ? { image: data.item.cover.image, text: data.item.title} : data.item.pages[pageid + 1] 
  pageData.pageNo = [pageNo, data.item.pages.length]

  // console.log(data)
</script>
  <Page { pageData } />

  
  

