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

<section class="flex flex-col gap-2 border px-2 py-1">
  <h2 class="text-xl font-semibold">Reservations</h2>

  <table class="w-full">
    <thead>
      <tr>
        {#each tableHeaders as header (header.key)}
          <th class="text-left tracking-wider">{header.label}</th>
        {/each}
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      {#each tableData as row (row.id)}
        <tr>
          <td>
            {row.type}
          </td>
          <td>
            {row.instance}
          </td>
          <td>
            {formatDate(row.endDate)}
          </td>
          <td>
            {formatCurrency(row.costPerHour, row.currency)}
          </td>
          <td class={row.mtdSavings > 0 ? 'text-green-400' : 'text-red-400'}>
            {formatCurrency(row.mtdSavings, row.currency)}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="flex items-center gap-2">
    <button class="border p-1" onclick={() => (page = page - 1)} disabled={page === 1}>
      Previous
    </button>
    <span>
      Showing page {page} of {numPages}
    </span>
    <button class="border p-1" onclick={() => (page = page + 1)} disabled={page === numPages}>
      Next
    </button>
  </div>
</section>
