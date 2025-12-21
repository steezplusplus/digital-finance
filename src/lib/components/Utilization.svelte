<script lang="ts">
  import type { UtilizationType } from '$lib/types';
  let { data }: { data: UtilizationType } = $props();
</script>

<section class="border px-2 py-1">
  <h2 class="text-lg font-semibold">Utilization</h2>
  <h3 class="font-semibold">{data.organizationName}</h3>
  <p>Month-to-Date Savings: {data.currency} {data.monthToDateSavings}</p>
  <p>Utilization: {data.percentage}%</p>
  <p>Target: {data.target}%</p>
  <p>Status: {data.status}</p>
  <p>Tooltip: {data.tooltip}</p>
</section>
