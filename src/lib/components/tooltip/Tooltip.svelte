<script>
  let { description } = $props();
  let isVisible = $state(false);
  // TODO: Rebuild this with the Popover API - https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using
</script>

<div class="relative inline-block">
  <button
    onclick={() => (isVisible = !isVisible)}
    aria-pressed={isVisible}
    aria-label="Toggle tooltip"
    class="cursor-pointer rounded-full border px-2 aria-pressed:border-blue-500 aria-pressed:bg-blue-50 aria-pressed:text-blue-600"
  >
    ?
  </button>
  {#if isVisible}
    <div
      class="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-black px-3 py-2 text-sm whitespace-nowrap text-white"
      role="tooltip"
    >
      {description}
    </div>
  {/if}
</div>
