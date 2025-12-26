<script lang="ts">
  import type { SavingsType } from '$lib/types';
  import { formatCurrency } from '$lib/utils/formatters';
  import Tooltip from '$lib/components/tooltip/Tooltip.svelte';

  let { savings }: { savings: SavingsType } = $props();
  let { available, reshaping, anomalies } = $derived(savings);
  // TODO: Break down into a component for each card. Maybe make a card component.
  // TODO: Test this.
</script>

<section>
  <h2 class="text-xl font-semibold">Savings</h2>

  <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
    <div class="flex flex-col gap-1 border px-2 py-1">
      <h3 class="font-semibold">Available Savings</h3>
      <h4 class="font-light text-sm">{available.description}</h4>
      <p>
        {formatCurrency(available.amount, available.currency)} per month
      </p>
      <p>
        {formatCurrency(available.yearlyEquivalent, available.currency)} per year
      </p>
      <div class="mt-auto flex justify-center border">
        <a href={available.actionUrl}>{available.actionLabel}</a>
      </div>
    </div>

    <div class="flex flex-col gap-1 border px-2 py-1">
      <div class="flex items-center">
        <h3 class="font-semibold">Reshaping Savings</h3>
        <span class="ml-auto">
          <Tooltip description={reshaping.tooltip} />
        </span>
      </div>

      <h4 class="font-light text-sm">{reshaping.description}</h4>
      <p>
        {formatCurrency(reshaping.amount, reshaping.currency)} per month
      </p>
      <p>
        {formatCurrency(reshaping.yearlyEquivalent, reshaping.currency)} per year
      </p>
    </div>

    <div class="flex flex-col gap-1 border px-2 py-1 md:col-span-2 lg:col-span-1">
      <div class="flex items-center">
        <h3 class="font-semibold">Anomalies</h3>
        <span class="ml-auto">
          <Tooltip description={anomalies.tooltip} />
        </span>
      </div>

      <h4 class="font-light text-sm">{anomalies.description}</h4>
      <p>{anomalies.count} Detected issues</p>
      <p>
        {anomalies.severity.high} High, {anomalies.severity.medium} Medium, {anomalies.severity.low} Low
      </p>
      <p>
        {formatCurrency(anomalies.estimatedCostImpact, anomalies.currency)} estimated impact
      </p>
    </div>
  </div>
</section>
