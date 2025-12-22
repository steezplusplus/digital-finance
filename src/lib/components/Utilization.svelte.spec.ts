import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Utilization from './Utilization.svelte';
import type { UtilizationType } from '$lib/types';

const mockUtilizationData: UtilizationType = {
  organizationName: 'North AI',
  organizationColor: '#D946EF',
  monthToDateSavings: -1943,
  currency: 'USD',
  percentage: 23,
  target: 80,
  status: 'underutilized',
  tooltip: 'Current commitment utilization rate'
};

describe('Utilization.svelte', () => {
  it('should render utilization heading', async () => {
    render(Utilization, {
      props: {
        data: mockUtilizationData
      }
    });

    const heading = page.getByRole('heading', { level: 2, name: /Utilization/i });
    await expect.element(heading).toBeInTheDocument();
  });
});
