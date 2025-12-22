<script lang="ts">
  import type { UtilizationType } from '$lib/types';
  import { formatCurrency } from '$lib/utils/formatters';

  let { data }: { data: UtilizationType } = $props();

  const formattedSavings = $derived(formatCurrency(data.monthToDateSavings, data.currency));
</script>

<section class="border px-2 py-1">
  <h2 class="text-lg font-semibold">Utilization</h2>
  <div class="flex items-center gap-1">
    <div
      class="h-3 w-3 rounded-full border"
      style="background-color: {data.organizationColor}"
    ></div>
    <h3 class="font-semibold">{data.organizationName}</h3>
  </div>

  <div class="flex flex-col justify-center gap-1">
    <p>Month-to-Date Savings: {formattedSavings}</p>

    <label for="percentage">Current utilization: {data.percentage}%</label>
    <progress id="percentage" max="100" value={data.percentage}>{data.percentage}</progress>

    <label for="target">Target utilization: {data.target}%</label>
    <progress id="target" max="100" value={data.target}>{data.target}</progress>

    <p>Status: {data.status}</p>
  </div>
</section>
