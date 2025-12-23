<script lang="ts">
  import type { SavingsType } from '$lib/types';
  import { formatCurrency } from '$lib/utils/formatters';
  import Tooltip from '$lib/components/tooltip/Tooltip.svelte';

  let { savings }: { savings: SavingsType } = $props();
  let { available, reshaping, anomalies } = $derived(savings);
</script>

<section class="border px-2 py-1">
  <h2 class="text-lg font-semibold">Savings</h2>

  <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
    <div class="border px-2 py-1">
      <h3 class="font-medium">Available Savings</h3>
      <h4>{available.description}</h4>
      <p>{formatCurrency(available.amount, available.currency)} per month</p>
      <p>{formatCurrency(available.yearlyEquivalent, available.currency)} per year</p>
      <a href={available.actionUrl}>{available.actionLabel}</a>
    </div>

    <div class="border px-2 py-1">
      <div class="flex items-center">
        <h3 class="font-medium">Reshaping Savings</h3>
        <span class="ml-auto">
          <Tooltip description={reshaping.tooltip} />
        </span>
      </div>

      <h4>{reshaping.description}</h4>
      <p>{formatCurrency(reshaping.amount, reshaping.currency)} per month</p>
      <p>{formatCurrency(reshaping.yearlyEquivalent, reshaping.currency)} per year</p>
    </div>

    <div class="border px-2 py-1 md:col-span-2 lg:col-span-1">
      <div class="flex items-center">
        <h3 class="font-medium">Anomalies</h3>
        <span class="ml-auto">
          <Tooltip description={anomalies.tooltip} />
        </span>
      </div>

      <h4>{anomalies.description}</h4>
      <p>{anomalies.count} Detected issues</p>
      <p>
        {formatCurrency(anomalies.estimatedCostImpact, anomalies.currency)} estimated impact
      </p>
      <p>{anomalies.severity.high} High</p>
      <p>{anomalies.severity.medium} Medium</p>
      <p>{anomalies.severity.low} Low</p>
    </div>
  </div>
</section>