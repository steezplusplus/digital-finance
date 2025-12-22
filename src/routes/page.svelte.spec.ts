import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';
import type { CloudCostDataType, UtilizationType } from '$lib/types';

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

const mockCloudCostData: CloudCostDataType = {
  account: {},
  meta: {},
  period: {},
  reservations: [],
  spend: {},
  savings: {},
  tableConfig: {},
  utilization: mockUtilizationData
};

describe('/+page.svelte', () => {
  it('should render headings', async () => {
    render(Page, {
      props: {
        data: mockCloudCostData
      }
    });

    const utilizationHeading = page.getByRole('heading', { level: 2, name: /Utilization/i });
    await expect.element(utilizationHeading).toBeInTheDocument();
  });
});
