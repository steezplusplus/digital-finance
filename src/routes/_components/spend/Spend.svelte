<script lang="ts">
  import * as echarts from 'echarts';
  import { onMount } from 'svelte';

  import type { SpendType } from '$lib/types';
  import { formatCurrency, formatDate } from '$lib/utils/formatters';

  let { spend }: { spend: SpendType } = $props();

  onMount(() => {
    const chartContainer = document.getElementById('chart');
    const lineChart = echarts.init(chartContainer);
    lineChart.setOption({
      tooltip: { trigger: 'axis' },
      legend: { data: ['Actual', 'Projected'] },
      xAxis: {
        type: 'category',
        data: spend.timeSeries.map((d) => d.date),
        axisLabel: {
          formatter: (value: string) => formatDate(value)
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: (value: number) => formatCurrency(value, spend.current.currency)
        }
      },
      series: [
        {
          name: 'Actual',
          type: 'line',
          data: spend.timeSeries.map((d) => d.amount)
        },
        {
          name: 'Projected',
          type: 'line',
          data: spend.timeSeries.map((d) => d.projected)
        }
      ]
    });

    const handleResize = () => lineChart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      lineChart.dispose();
    };
  });
</script>

<section class="border px-2 py-1">
  <div class="flex items-center">
    <h2 class="text-xl font-semibold">Spend Overview</h2>
    <select class="ml-auto border px-2 py-1">
      <option>Last 30 Days</option>
    </select>
  </div>

  <div id="chart" style="height: 25rem"></div>
</section>
