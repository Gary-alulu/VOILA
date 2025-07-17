import React from 'react';
import AnimatedLink from '../../src/components/AnimatedLink';

describe('AnimatedLink', () => {
  it('renders a link with provided text', () => {
    render(
      <AnimatedLink href="/test" animationType="scale">
        Test Link
      </AnimatedLink>
    );

    expect(screen.getByText('Test Link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('applies correct color classes', () => {
    const { container } = render(
      <AnimatedLink href="/test" animationType="scale">
        Test Link
      </AnimatedLink>
    );

    const link = container.querySelector('a');
    expect(link).toHaveClass('text-mistGray');
    expect(link).toHaveClass('hover:text-imperialGold');
    expect(link).toHaveClass('dark:text-cloudedPearl');
    expect(link).toHaveClass('dark:hover:text-imperialGold');
  });
});