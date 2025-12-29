import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Tooltip from './Tooltip.svelte';

describe('Tooltip.svelte', () => {
  it('renders the button', async () => {
    render(Tooltip, {
      props: { description: 'Test tooltip' }
    });

    const button = page.getByRole('button', { name: /toggle tooltip/i });
    await expect.element(button).toBeInTheDocument();
    await expect.element(button).toHaveTextContent('?');
  });

  it.todo('renders the tooltip');
});
