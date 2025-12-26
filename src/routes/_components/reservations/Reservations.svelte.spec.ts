import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Reservations from './Reservations.svelte';
import type { ReservationType } from '$lib/types';

const mockReservations: ReservationType[] = [];

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
});
