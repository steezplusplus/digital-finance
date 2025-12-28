import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

import Spend from './Spend.svelte';
import type { SpendType } from '$lib/types';

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

describe('Spend.svelte', () => {
  it('should render the heading', async () => {
    render(Spend, {
      props: {
        spend: mockSpend
      }
    });

    const heading = page.getByRole('heading', { level: 2, name: /Spend Overview/i });
    await expect.element(heading).toBeInTheDocument();
  });

  it('should render current spend', async () => {
    render(Spend, {
      props: {
        spend: mockSpend
      }
    });

    const currentSpend = page.getByText(/Current Spend:/i);
    await expect.element(currentSpend).toBeInTheDocument();
  });

  it('should render projected spend', async () => {
    render(Spend, {
      props: {
        spend: mockSpend
      }
    });

    const projectedSpend = page.getByText(/Projected Spend:/i);
    await expect.element(projectedSpend).toBeInTheDocument();
  });

  it.todo('should render period selector');
});
