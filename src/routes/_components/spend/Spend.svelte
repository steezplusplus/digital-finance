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
      tooltip: { trigger: 'axis' }, // TODO: Currenct format in tooltip
      legend: { data: ['Actual', 'Projected'] },
      xAxis: {
        type: 'category',
        name: 'Time',
        data: spend.timeSeries.map((d) => d.date),
        axisLabel: {
          formatter: (value: string) => formatDate(value)
        }
      },
      yAxis: {
        type: 'value',
        name: 'Spend',
        axisLabel: {
          formatter: (value: number) => formatCurrency(value, 'USD') // TODO: Should not hardcode
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
    <!-- TODO: Period selector -->
    <label class="ml-auto">
      Period:
      <select class="cursor-pointer border px-2 py-1">
        <option>Last 30 Days</option>
      </select>
    </label>
  </div>

  <div class="flex items-center gap-x-4 text-sm font-light">
    <p>Current Spend: {formatCurrency(spend.current.amount, spend.current.currency)}</p>

    <p>
      Projected Spend: {formatCurrency(spend.projected.amount, spend.projected.currency)}
      <span class={spend.projected.trend === 'up' ? 'text-green-700' : 'text-red-700'}>
        ({spend.projected.percentageChange > 0 ? '+' : '-'}{spend.projected.percentageChange}%)
      </span>
    </p>
  </div>

  <div id="chart" style="width: 100%; height: 30rem;"></div>
</section>
