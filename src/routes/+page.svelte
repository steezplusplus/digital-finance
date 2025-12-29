<script lang="ts">
  import type { PageData } from './$types';

  import Utilization from './_components/utilization/Utilization.svelte';
  import Savings from './_components/savings/Savings.svelte';
  import Reservations from './_components/reservations/Reservations.svelte';
  import Spend from './_components/spend/Spend.svelte';

  let { data }: { data: PageData } = $props();
</script>

{#await data.cloudCostData}
  <!-- TODO: Flesh out loading ui -->
  <p>Loading...</p>
{:then cloudData}
  <Spend spend={cloudData.spend} />
  <Savings savings={cloudData.savings} />
  <Utilization utilization={cloudData.utilization} />
  <Reservations reservations={cloudData.reservations} />
{:catch error}
  <!-- TODO: Flesh out fallback ui -->
  <p>Error loading cloud cost data: {error.message}</p>
{/await}
