import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../src/components/AddCategory';


describe('AddCategory', () => {
  test('calls onNewCategory with the correct value when form is submitted', () => {
    const onNewCategoryMock = jest.fn();
    render(<AddCategory onNewCategory={onNewCategoryMock} />);
    const inputElement = screen.getByPlaceholderText('Buscar gifs');
    
    const inputValue = 'Test Category';
    

    fireEvent.change(inputElement, { target: { value: inputValue } });
    fireEvent.submit(screen.getByRole('form'));

    expect(onNewCategoryMock).toHaveBeenCalledWith(inputValue.trim());
  });

  test('does not call onNewCategory when input value is less than or equal to 2 characters', () => {
    const onNewCategoryMock = jest.fn();
    render(<AddCategory onNewCategory={onNewCategoryMock} />);
    const inputElement = screen.getByPlaceholderText('Buscar gifs');
    const inputValue = 'ab';
    fireEvent.change(inputElement, { target: { value: inputValue } });
    fireEvent.submit(screen.getByRole('form'));
    expect(onNewCategoryMock).not.toHaveBeenCalled();
  });
});