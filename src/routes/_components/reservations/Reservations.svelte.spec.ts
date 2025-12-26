import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';

import Reservations from './Reservations.svelte';
import type { ReservationType } from '$lib/types';

const mockReservations: ReservationType[] = [
  {
    id: 'res_001',
    type: 'SageMaker SP (3yr)',
    category: 'Machine Learning',
    instance: 'Any',
    endDate: '2027-10-03',
    startDate: '2024-10-03',
    costPerHour: 0.01,
    mtdSavings: -4.32,
    currency: 'USD',
    managedByNorth: true,
    status: 'active',
    utilizationPercent: 12
  }
];

describe('Reservations.svelte', () => {
  it('should render the heading', async () => {
    render(Reservations, {
      props: {
        reservations: mockReservations
      }
    });

    const heading = page.getByRole('heading', { level: 2, name: /Reservations/i });
    await expect.element(heading).toBeInTheDocument();
  });

  it('should render the table', async () => {
    render(Reservations, {
      props: {
        reservations: mockReservations
      }
    });

    const table = page.getByRole('table');
    await expect.element(table).toBeInTheDocument();
  });

  it('should render the table headings', async () => {
    render(Reservations, {
      props: {
        reservations: mockReservations
      }
    });

    const headers = [
      'TYPE',
      'INSTANCE',
      'END DATE',
      'COST PER HOUR',
      'MTD SAVINGS'
    ];

    for (const header of headers) {
      const th = page.getByText(header);
      await expect.element(th).toBeInTheDocument();
    }
  });
});
