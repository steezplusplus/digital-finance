<script lang="ts">
  import type { ReservationType } from '$lib/types';

  let { reservations }: { reservations: ReservationType[] } = $props();

</script>

<section class="border px-2 py-1">
  <h2 class="text-lg font-semibold">Reservations</h2>
</section>
