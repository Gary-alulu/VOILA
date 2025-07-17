import React from 'react';
import FormField from '../../src/components/FormField';

describe('FormField', () => {
  it('renders a text input field with label', () => {
    render(
      <FormField
        label="Test Label"
        name="test"
        type="text"
        placeholder="Test Placeholder"
      />
    );

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(
      <FormField
        label="Test Label"
        name="test"
        type="text"
      />
    );

    const input = container.querySelector('input');
    expect(input).toHaveClass('border-cloudGray');
    expect(input).toHaveClass('focus:ring-imperialGold');
  });
});