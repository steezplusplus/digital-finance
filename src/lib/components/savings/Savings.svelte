<script lang="ts">
  import type { SavingsType } from '$lib/types';
  import { formatCurrency } from '$lib/utils/formatters';

  let { data }: { data: SavingsType } = $props();
</script>

<section class="border px-2 py-1">
  <h2 class="text-lg font-semibold">Savings</h2>

  <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
    <div class="border px-2 py-1">
      <h3 class="font-medium">Available Savings</h3>
      <h4>{data.available.description}</h4>
      <p>{formatCurrency(data.available.amount, data.available.currency)} per month</p>
      <p>{formatCurrency(data.available.yearlyEquivalent, data.available.currency)} per year</p>
      <p>TODO: available.actionLabel and available.actionUrl</p>
    </div>

    <div class="border px-2 py-1">
      <h3 class="font-medium">Reshaping Savings</h3>
      <h4>{data.reshaping.description}</h4>
      <p>TODO: Tooltip</p>
      <p>{formatCurrency(data.reshaping.amount, data.reshaping.currency)} per month</p>
      <p>{formatCurrency(data.reshaping.yearlyEquivalent, data.reshaping.currency)} per year</p>
    </div>

    <div class="border px-2 py-1 md:col-span-2 lg:col-span-1">
      <h3 class="font-medium">Anomalies</h3>
      <h4>{data.anomalies.description}</h4>
      <p>TODO: Tooltip</p>
      <p>{data.anomalies.count} Detected issues</p>
      <p>{formatCurrency(data.anomalies.estimatedCostImpact, data.anomalies.currency)} estimated impact</p>
      <p>{data.anomalies.severity.high} High</p>
      <p>{data.anomalies.severity.medium} Medium</p>
      <p>{data.anomalies.severity.high} Low</p>
    </div>
  </div>
</section>
