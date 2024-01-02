<script lang="ts">
  import { page } from '$app/stores'
  const { rest } = $page.params
  import Page from '$comps/Page.svelte'
  import Navipages from '$comps/Navipages.svelte'
  const [itemid, pageid] = rest.split('/');
  export let data;

  const pageNo = pageid && !isNaN(pageid) && pageid <= data.item.pages.length ? pageid + 1 : 0
  const pageData = pageNo === 0 ? { image: data.item.cover.image, title: "", text: data.item.title} : data.item.pages[pageid + 1] 
  pageData.pageNo = [pageNo, data.item.pages.length]
  pageData.tite = data.item.title

  const { pages } = data.item
  // console.log(data)
</script>

  <Page {pageid} {itemid} { pageData } />
  <Navipages {pageid} {pages}/>

  
  

