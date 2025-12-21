<script lang="ts">
  import Utilization from '$lib/components/Utilization.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<section class="border px-2 py-1">
  <h2 class="text-lg font-semibold">Spend Overview</h2>
</section>

<section class="border px-2 py-1">
  <h2 class="text-lg font-semibold">Savings</h2>
</section>

<Utilization data={data.utilization} />

<section class="border px-2 py-1">
  <h2 class="text-lg font-semibold">Reservations</h2>
</section>
