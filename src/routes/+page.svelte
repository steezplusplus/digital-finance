<script lang="ts">
  import type { PageData } from './$types';

  import Utilization from '$lib/components/utilization/Utilization.svelte';
  import Savings from '$lib/components/savings/Savings.svelte';

  let { data }: { data: PageData } = $props();
</script>

<section class="border px-2 py-1">
  <h2 class="text-lg font-semibold">Spend Overview</h2>
</section>

<Savings data={data.savings} />

<Utilization data={data.utilization} />

<section class="border px-2 py-1">
  <h2 class="text-lg font-semibold">Reservations</h2>
</section>
