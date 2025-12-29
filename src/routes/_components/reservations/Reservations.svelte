<script lang="ts">
  // TODO: Managed vs unmanaged UI
  // TODO: Test pagination
  import type { ReservationType } from '$lib/types';
  import { formatCurrency, formatDate } from '$lib/utils/formatters';

  const limit = 10;
  const tableHeaders = [
    { label: 'TYPE', key: 'type' },
    { label: 'INSTANCE', key: 'instance' },
    { label: 'END DATE', key: 'endDate' },
    { label: 'COST PER HOUR', key: 'costPerHour' },
    { label: 'MTD SAVINGS', key: 'mtdSavings' }
  ];

  let { reservations }: { reservations: ReservationType[] } = $props();
  let page = $state(1);

  const numPages = $derived(Math.ceil(reservations.length / limit));
  const tableData = $derived(reservations.slice(limit * (page - 1), limit * page));
</script>

<section class="space-y-4 rounded-lg border border-gray-300 p-6">
  <h2 class="text-xl font-semibold">Reservations</h2>

  <table class="w-full table-auto">
    <thead>
      <tr>
        {#each tableHeaders as header (header.key)}
          <th class="text-left tracking-wider">{header.label}</th>
        {/each}
      </tr>
    </thead>
    <tbody class="space-y-4 divide-y divide-gray-200">
      {#each tableData as row (row.id)}
        <tr>
          <td class="p-1">
            {row.type}
          </td>
          <td class="p-1">
            {row.instance}
          </td>
          <td class="p-1">
            {formatDate(row.endDate)}
          </td>
          <td class="p-1">
            {formatCurrency(row.costPerHour, row.currency)}
          </td>
          <td class="p-1 {row.mtdSavings > 0 ? 'text-green-700' : 'text-red-700'}">
            {formatCurrency(row.mtdSavings, row.currency)}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="flex items-center gap-2">
    <button
      class="cursor-pointer rounded-lg border border-gray-300 px-2 py-1 disabled:cursor-not-allowed"
      onclick={() => (page = page - 1)}
      disabled={page === 1}
    >
      Previous
    </button>
    <span>
      Showing page {page} of {numPages}
    </span>
    <button
      class="cursor-pointer rounded-lg border border-gray-300 px-2 py-1 disabled:cursor-not-allowed"
      onclick={() => (page = page + 1)}
      disabled={page === numPages}
    >
      Next
    </button>
  </div>
</section>
