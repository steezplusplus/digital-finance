<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<nav class="px-4">
  <a href="/">
    <h1 class="text-4xl font-bold">Cloud Finance</h1>
  </a>
</nav>

<main class="space-y-2 px-4">
  {@render children()}
</main>
