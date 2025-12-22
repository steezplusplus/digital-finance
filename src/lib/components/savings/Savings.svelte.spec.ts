import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Savings from './Savings.svelte';
import type { SavingsType } from '$lib/types';

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

describe('Savings.svelte', () => {
  it('should render the heading', async () => {
    render(Savings, {
      props: {
        data: mockSavingsData
      }
    });

    const heading = page.getByRole('heading', { level: 2, name: /Savings/i });
    await expect.element(heading).toBeInTheDocument();
  });
});
