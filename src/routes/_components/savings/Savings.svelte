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
  <h2 class="mb-1 text-xl font-semibold">Savings</h2>

  <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
    <div class="space-y-4 rounded-lg border border-gray-300 p-6">
      <h3 class="font-semibold">Available Savings</h3>
      <h4 class="text-sm font-light">{available.description}</h4>

      <p class="text-sm">
        <span class="text-lg font-semibold">
          {formatCurrency(available.amount, available.currency)}
        </span>
        per month
      </p>

      <p class="text-sm">
        <span class="text-lg font-semibold">
          {formatCurrency(available.yearlyEquivalent, available.currency)}
        </span>
        per year
      </p>

      <a class="text-blue-600 underline hover:text-blue-800" href={available.actionUrl}
        >{available.actionLabel}</a
      >
    </div>

    <div class="space-y-4 rounded-lg border border-gray-300 p-6">
      <div class="flex items-center">
        <h3 class="font-semibold">Reshaping Savings</h3>
        <span class="ml-auto">
          <Tooltip description={reshaping.tooltip} />
        </span>
      </div>

      <h4 class="text-sm font-light">{reshaping.description}</h4>

      <p class="text-sm">
        <span class="text-lg font-semibold"
          >{formatCurrency(reshaping.amount, reshaping.currency)}</span
        >
        per month
      </p>

      <p class="text-sm">
        <span class="text-lg font-semibold">
          {formatCurrency(reshaping.yearlyEquivalent, reshaping.currency)}
        </span>
        per year
      </p>
    </div>

    <div class="space-y-4 rounded-lg border border-gray-300 p-6 md:col-span-2 lg:col-span-1">
      <div class="flex items-center">
        <h3 class="font-semibold">Anomalies</h3>
        <span class="ml-auto">
          <Tooltip description={anomalies.tooltip} />
        </span>
      </div>

      <h4 class="text-sm font-light">{anomalies.description}</h4>

      <p class="text-sm">
        <span class="text-lg font-semibold">{anomalies.count}</span>
        Detected issues
      </p>

      <p class="text-sm">
        <span class="text-lg font-semibold">
          {formatCurrency(anomalies.estimatedCostImpact, anomalies.currency)}
        </span>
        estimated impact
      </p>

      <p class="text-sm font-light">
        <span class="text-red-500">{anomalies.severity.high} High</span>,
        <span class="text-orange-500">{anomalies.severity.medium} Medium</span>,
        <span class="text-yellow-500">{anomalies.severity.low} Low</span>
      </p>
    </div>
  </div>
</section>
