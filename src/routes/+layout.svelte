<script>
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'
  import '$styles/newberry.css'
  import '$styles/themes.css'

  onMount(async () => {
    await import ('../dark-mode-toggle.js');
  });
</script>

{#if browser}
  <dark-mode-toggle></dark-mode-toggle>
{/if}
  <slot />
