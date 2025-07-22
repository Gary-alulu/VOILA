import Home from '../src/app/page';
import { ThemeProvider } from '../src/components/ThemeProvider';

describe('Home', () => {
  it('renders a heading', async () => {
    await act(async () => {
      render(
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      );
    });

    const heading = await waitFor(() => screen.getByRole('heading', {
      name: /Our Collection/i,
    }));

    expect(heading).toBeInTheDocument();
  });
});