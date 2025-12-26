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
  <h2 class="text-lg font-semibold">Savings</h2>

  <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
    <div class="flex flex-col justify-center border px-2 py-1">
      <h3 class="font-semibold">Available Savings</h3>
      <h4 class="font-light">{available.description}</h4>
      <p>
        <span class="text-4xl">{formatCurrency(available.amount, available.currency)}</span> per month
      </p>
      <p class="font-light">
        {formatCurrency(available.yearlyEquivalent, available.currency)} per year
      </p>
      <div class="mt-auto flex justify-center rounded-md bg-purple-500 text-white">
        <a href={available.actionUrl}>{available.actionLabel}</a>
      </div>
    </div>

    <div class="border px-2 py-1">
      <div class="flex items-center">
        <h3 class="font-semibold">Reshaping Savings</h3>
        <span class="ml-auto">
          <Tooltip description={reshaping.tooltip} />
        </span>
      </div>

      <h4 class="font-light">{reshaping.description}</h4>
      <p>
        <span class="text-4xl">{formatCurrency(reshaping.amount, reshaping.currency)}</span> per month
      </p>
      <p class="font-light">
        {formatCurrency(reshaping.yearlyEquivalent, reshaping.currency)} per year
      </p>
    </div>

    <div class="border px-2 py-1 md:col-span-2 lg:col-span-1">
      <div class="flex items-center">
        <h3 class="font-semibold">Anomalies</h3>
        <span class="ml-auto">
          <Tooltip description={anomalies.tooltip} />
        </span>
      </div>

      <h4 class="font-light">{anomalies.description}</h4>
      <p><span class="text-4xl">{anomalies.count}</span> Detected issues</p>
      <p class="font-light">{anomalies.severity.high} High, {anomalies.severity.medium} Medium, {anomalies.severity.low} Low</p>
      <p class="font-light">
        {formatCurrency(anomalies.estimatedCostImpact, anomalies.currency)} estimated impact
      </p>
    </div>
  </div>
</section>
