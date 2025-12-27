<script lang="ts">
  import type { SpendType } from '$lib/types';

  let { spend }: { spend: SpendType } = $props();
</script>

<section class="border px-2 py-1">
  <h2 class="text-xl font-semibold">Spend Overview</h2>
  <pre>{JSON.stringify(spend, null, 4)}</pre>
</section>
