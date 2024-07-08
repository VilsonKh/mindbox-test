// src/components/__tests__/Button.test.js
import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../UI/Button/Button';

describe('Button component', () => {
  test('renders button correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  test('calls onClickEvent when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClickEvent={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('has active styling when isActive is true', () => {
    const { container } = render(<Button isActive={true}>Active</Button>);
    expect(container.firstChild).toHaveClass(/active/);
  });
});
