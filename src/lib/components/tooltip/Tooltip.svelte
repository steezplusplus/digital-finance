<script>
  let { description } = $props();
  let isVisible = $state(false);
  // TODO: Test this.
  // TODO: Tooltip can appear off screen.
</script>

<div class="relative inline-block">
  <button onclick={() => (isVisible = !isVisible)} class="rounded-full border px-2">?</button>
  {#if isVisible}
    <div
      class="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-black px-3 py-2 text-sm whitespace-nowrap text-white"
    >
      {description}
    </div>
  {/if}
</div>
