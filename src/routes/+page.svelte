<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<h2>Account</h2>
<pre>{JSON.stringify(data.account, null, 2)}</pre>
<h2>Meta</h2>
<pre>{JSON.stringify(data.meta, null, 2)}</pre>
<h2>Period</h2>
<pre>{JSON.stringify(data.period, null, 2)}</pre>
<h2>Reservations</h2>
<pre>{JSON.stringify(data.reservations, null, 2)}</pre>
<h2>Spend</h2>
<pre>{JSON.stringify(data.spend, null, 2)}</pre>
<h2>Savings</h2>
<pre>{JSON.stringify(data.savings, null, 2)}</pre>
<h2>Table Config</h2>
<pre>{JSON.stringify(data.tableConfig, null, 2)}</pre>
<h2>Utilization</h2>
<pre>{JSON.stringify(data.utilization, null, 2)}</pre>
