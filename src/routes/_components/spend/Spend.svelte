<script lang="ts">
  import * as echarts from 'echarts';
  import type { SpendType } from '$lib/types';
  import { onMount } from 'svelte';

  let { spend }: { spend: SpendType } = $props();

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  onMount(() => {
    const chartDom = document.getElementById('chart');
    const myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
  });
</script>

<section class="border px-2 py-1">
  <h2 class="text-xl font-semibold">Spend Overview</h2>
  <!-- <pre>{JSON.stringify(spend, null, 4)}</pre> -->
  <div id="chart" class="h-100 w-full"></div>
</section>
