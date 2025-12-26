<script lang="ts">
  import type { PageData } from './$types';

  import Utilization from './_components/utilization/Utilization.svelte';
  import Savings from './_components/savings/Savings.svelte';
  import Reservations from './_components/reservations/Reservations.svelte';

  let { data }: { data: PageData } = $props();
  const { savings, utilization, reservations } = $derived(data);
</script>

<section class="border px-2 py-1">
  <h2 class="text-lg font-semibold">Spend Overview</h2>
</section>

<Savings savings={savings} />

<Utilization data={utilization} />

<Reservations reservations={reservations} />
