import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';
import type { CloudCostDataType, SavingsType, SpendType, UtilizationType } from '$lib/types';

const mockSpend: SpendType = {
  projected: {
    amount: 28477,
    currency: 'USD',
    percentageChange: 46.65,
    trend: 'up',
    comparedTo: 'previous_period'
  },
  current: {
    amount: 17316,
    currency: 'USD',
    period: 'last_30_days',
    periodLabel: 'Last 30 Days'
  },
  timeSeries: [
    {
      date: '2024-11-19',
      amount: 412.5,
      projected: 420
    }
  ]
};

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

const mockSavingsData: SavingsType = {
  available: {
    amount: 1537,
    currency: 'USD',
    yearlyEquivalent: 18440,
    description: 'Potential monthly savings from optimization recommendations',
    actionLabel: 'Save Now',
    actionUrl: '/savings/available'
  },
  reshaping: {
    amount: 1,
    currency: 'USD',
    yearlyEquivalent: 10,
    description: 'Savings from rightsizing recommendations',
    tooltip: 'Reshaping identifies over-provisioned resources'
  },
  anomalies: {
    count: 8,
    estimatedCostImpact: 3330,
    currency: 'USD',
    description: 'Unusual spending patterns detected',
    severity: {
      high: 2,
      medium: 4,
      low: 2
    },
    tooltip: 'Estimated cost change from detected anomalies'
  }
};

const mockCloudCostData: CloudCostDataType = {
  account: {},
  meta: {},
  period: {},
  reservations: [],
  spend: mockSpend,
  savings: mockSavingsData,
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
