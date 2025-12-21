<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<nav class="px-4">
  <a href='/'>
    <h1 class="text-3xl font-bold">Cloud Finance</h1>
  </a>
</nav>

<main class="px-4 space-y-2">
  {@render children()}
</main>
