<script lang="ts">
  import type { SavingsType } from '$lib/types';

  let { data }: { data: SavingsType } = $props();
</script>

<section class="border px-2 py-1">
  <h2 class="text-lg font-semibold">Savings</h2>

  <div class="grid grid-cols-1 gap-2 md:grid-cols-3">
    <div class="border px-2 py-1">
      <h3 class="text-sm font-medium">Available Savings</h3>
    </div>

    <div class="border px-2 py-1">
      <h3 class="text-sm font-medium">Reshaping Savings</h3>
    </div>

    <div class="border px-2 py-1">
      <h3 class="text-sm font-medium">Anomalies</h3>
    </div>
  </div>
  <pre>{JSON.stringify(data, null, 4)}</pre>
</section>
