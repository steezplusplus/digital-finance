<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main class="mx-auto max-w-7xl space-y-4 p-4 sm:px-6 lg:px-8">
  <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Digital Finance</h1>
  {@render children()}
</main>
