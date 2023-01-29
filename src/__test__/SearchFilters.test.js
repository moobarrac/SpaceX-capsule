/** @jest-environment jsdom */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchFilters from '../components/SearchFilters';

jest.mock('react', () => {
  const original = jest.requireActual('react');
  return {
    ...original,
    useContext: jest.fn(),
  };
});

describe('SearchFilters', () => {
  let filters;
  let setFilters;
  let handleSubmit;

  beforeEach(() => {
    filters = {
      status: '',
      date: '',
      type: ''
    }
    setFilters = jest.fn()
    handleSubmit = jest.fn()
    React.useContext.mockImplementation(() => ({ filters, setFilters, handleSubmit }));
  });

  it('should render all form fields', () => {
    render(<SearchFilters />);
    const search = screen.getByTestId('search');
    expect(search).toBeInTheDocument();
    expect(search.querySelectorAll('select')).toHaveLength(1);
    expect(search.querySelectorAll('input[type="date"]')).toHaveLength(1);
    expect(search.querySelectorAll('input[type="text"]')).toHaveLength(1);
    expect(search.querySelectorAll('button')).toHaveLength(1);
  });

  it('should call handleSubmit when search button is clicked', () => {
    render(<SearchFilters />);
    const searchButton = screen.getByTestId('search-button');
    fireEvent.click(searchButton);
    expect(handleSubmit).toHaveBeenCalled();
  });
});
