import { render, screen, act, waitFor } from '@testing-library/react';
import Home from '../src/app/page';


describe('Home', () => {
  it('renders a heading', async () => {
    await act(async () => {
      render(
          <Home />
      );
    });

    const heading = await waitFor(() => screen.getByRole('heading', {
      name: /Welcome to Next\.js!/i,
    }));

    expect(heading).toBeInTheDocument();
  });
});