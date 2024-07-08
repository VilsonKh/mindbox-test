import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ListItemWrapper from '../Components/ListItemWrapper/ListItemWrapper'; 

describe('ListItemWrapper', () => {
  const mockTodo = { id: 1, status: 'active', text: 'Test Todo' };
  const mockCompletedTodo = { ...mockTodo, status: 'completed' };
  const mockMarkAsCompleted = vi.fn();

  it('renders with given children and reacts to click events', () => {
    render(
      <ListItemWrapper todo={mockTodo} markAsCompleted={mockMarkAsCompleted}>
        <div>Test Child</div>
      </ListItemWrapper>
    );
    
    const listItem = screen.getByText('Test Child').parentNode;
    fireEvent.click(listItem);
    expect(mockMarkAsCompleted).toHaveBeenCalledWith(mockTodo.id);
  });

  it('applies the completed class if todo is completed', () => {
    render(
      <ListItemWrapper todo={mockCompletedTodo} markAsCompleted={mockMarkAsCompleted}>
        <div>Test Child</div>
      </ListItemWrapper>
    );

    const listItem = screen.getByText('Test Child').parentNode;
    expect(listItem).toHaveClass(/completed/); 
  });
});
