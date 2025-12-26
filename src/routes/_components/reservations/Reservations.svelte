<script lang="ts">
  // TODO: Managed vs unmanaged UI
  import type { ReservationType } from '$lib/types';
  import { formatCurrency, formatDate } from '$lib/utils/formatters';

  let { reservations }: { reservations: ReservationType[] } = $props();

  const tableHeaders = [
    { label: 'TYPE', key: 'type' },
    { label: 'INSTANCE', key: 'instance' },
    { label: 'END DATE', key: 'endDate' },
    { label: 'COST PER HOUR', key: 'costPerHour' },
    { label: 'MTD SAVINGS', key: 'mtdSavings' }
  ];
</script>

<section class="border px-2 py-1">
  <h2 class="text-lg font-semibold">Reservations</h2>

  <table class="w-full">
    <thead>
      <tr>
        {#each tableHeaders as header (header.key)}
          <th class="text-left tracking-wider">{header.label}</th>
        {/each}
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      {#each reservations as reservation (reservation.id)}
        <tr>
          <td>
            {reservation.type}
          </td>
          <td>
            {reservation.instance}
          </td>
          <td>
            {formatDate(reservation.endDate)}
          </td>
          <td>
            {formatCurrency(reservation.costPerHour, reservation.currency)}
          </td>
          <td class={reservation.mtdSavings > 0 ? 'text-green-400' : 'text-red-400'}>
            {formatCurrency(reservation.mtdSavings, reservation.currency)}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>
