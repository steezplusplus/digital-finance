<script lang="ts">
  import Tooltip from '$lib/components/tooltip/Tooltip.svelte';
  import type { UtilizationType } from '$lib/types';
  import { formatCurrency } from '$lib/utils/formatters';

  let { utilization }: { utilization: UtilizationType } = $props();

  const formattedSavings = $derived(
    formatCurrency(utilization.monthToDateSavings, utilization.currency)
  );
</script>

<section class="border px-2 py-1">
  <div class="flex items-center">
    <h2 class="text-xl font-semibold">Utilization</h2>
    <span class="ml-auto">
      <Tooltip description={utilization.tooltip} />
    </span>
  </div>

  <div class="flex items-center gap-1">
    <div
      class="h-3 w-3 rounded-full border"
      style="background-color: {utilization.organizationColor}"
    ></div>
    <h3 class="font-semibold">{utilization.organizationName}</h3>
  </div>

  <div class="flex flex-col justify-center gap-1">
    <p>Month-to-Date Savings: {formattedSavings}</p>

    <label for="percentage">Current utilization: {utilization.percentage}%</label>
    <progress id="percentage" max="100" value={utilization.percentage}
      >{utilization.percentage}</progress
    >

    <label for="target">Target utilization: {utilization.target}%</label>
    <progress id="target" max="100" value={utilization.target}>{utilization.target}</progress>

    <p>Status: {utilization.status}</p>
  </div>
</section>
