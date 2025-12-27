<script lang="ts">
  import type { PageData } from './$types';

  import Utilization from './_components/utilization/Utilization.svelte';
  import Savings from './_components/savings/Savings.svelte';
  import Reservations from './_components/reservations/Reservations.svelte';
  import Spend from './_components/spend/Spend.svelte';

  let { data }: { data: PageData } = $props();
  const { savings, utilization, reservations, spend } = $derived(data);
</script>

<Spend {spend} />

<Savings {savings} />

<Utilization {utilization} />

<Reservations {reservations} />
