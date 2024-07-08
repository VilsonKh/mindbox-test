import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from '../Components/InputField/InputField';
describe('InputField', () => {
  const mockSetTodoList = vi.fn();

  beforeEach(() => {
    mockSetTodoList.mockClear();
    vi.spyOn(window, 'addEventListener');
    vi.spyOn(window, 'removeEventListener');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders with empty input and appropriate placeholder', () => {
    render(<InputField setTodoList={mockSetTodoList} />);
    const inputElement = screen.getByPlaceholderText(/what needs to be done\?/i);
    expect(inputElement.value).toBe('');
  });

  it('updates user input', async () => {
    render(<InputField setTodoList={mockSetTodoList} />);
    const inputElement = screen.getByPlaceholderText(/what needs to be done\?/i);
    await userEvent.type(inputElement, 'New Task');
    expect(inputElement.value).toBe('New Task');
  });

  it('calls setTodoList and clears input on Enter key', async () => {
    const testValue = 'New Task';
    render(<InputField setTodoList={mockSetTodoList} />);
    const inputElement = screen.getByPlaceholderText(/what needs to be done\?/i);
    await userEvent.type(inputElement, testValue + '{enter}');
    
    expect(mockSetTodoList).toHaveBeenCalled();
    expect(inputElement.value).toBe('');
  });
});
