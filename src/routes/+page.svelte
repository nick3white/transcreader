<script>
  import {onMount} from 'svelte'
  export let data
  var  CORTEX_API_KEY=""
  const urls = data.res.APIResponse.Content.map(c =>   [c.RecordID, `https://collections.newberry.org/API/DataTable/V2.2/Documents.Image.Text-Image:Read?RecordID=${c.RecordID}`])
  const contentas = data.res.APIResponse.Content.map(c =>   [c.RecordID, `https://collections.newberry.org/API/DataTable/V2.2/Documents.Image.Text-Image:Update?RecordID=${c.RecordID}&CoreField.IIIF-Resource-Type:=Canvas&format=json&token=${CORTEX_API_KEY}`]) 

</script>
https://collections.newberry.org/API/DataTable/V2.2/Documents.Image.Text-Image:Update?RecordID=
&CoreField.IIIF-Resource-Type:=Canvas
{#each contentas as c}
  <p>wget -O "{c[0]}.json" "{c[1]}"</p>
{/each}
<!-- <pre>{JSON.stringify(contentas, null, 4)}</pre> -->

  <style>
p {
font-family: monospace;
font-size: 14px;
}
</style>
