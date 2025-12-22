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

  it('should display organization name', async () => {
    render(Utilization, {
      props: {
        data: mockUtilizationData
      }
    });

    const orgName = page.getByRole('heading', { level: 3, name: 'North AI' });
    await expect.element(orgName).toBeInTheDocument();
  });

  it('should display month-to-date savings', async () => {
    render(Utilization, {
      props: {
        data: mockUtilizationData
      }
    });

    const savings = page.getByText(/Month-to-Date Savings:/i);
    await expect.element(savings).toBeInTheDocument();
  });

  it('should display utilization percentage', async () => {
    render(Utilization, {
      props: {
        data: mockUtilizationData
      }
    });

    const percentage = page.getByText(/Current utilization:/i);
    await expect.element(percentage).toBeInTheDocument();
  });

  it('should display target percentage', async () => {
    render(Utilization, {
      props: {
        data: mockUtilizationData
      }
    });

    const target = page.getByText(/Target utilization:/i);
    await expect.element(target).toBeInTheDocument();
  });

  it('should display status', async () => {
    render(Utilization, {
      props: {
        data: mockUtilizationData
      }
    });

    const status = page.getByText(/Status:/i);
    await expect.element(status).toBeInTheDocument();
  });
});
