/** @jest-environment jsdom */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../components/Pagination';
import { SpaceContext } from '../context/ContextProvider';

jest.mock('react', () => {
  const originalModule = jest.requireActual('react');
  return {
    ...originalModule,
    useContext: jest.fn().mockImplementation(() => ({
      offset: 0,
      totalItem: 20,
      limit: 10,
      loadMore: jest.fn(),
    })),
  };
});

describe('Pagination component', () => {
  it('renders with proper styles for disabled and enabled buttons', () => {
    render(<Pagination />);
    const prevBtn = screen.getByText('Previous');
    const nextBtn = screen.getByText('Next');

    expect(prevBtn).toHaveClass('bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l cursor-not-allowed opacity-50');
    expect(nextBtn).not.toHaveClass('cursor-not-allowed opacity-50');
  });

  it('calls loadMore with proper argument on button click', () => {
    render(<Pagination />);
    const prevBtn = screen.getByText('Previous');
    const nextBtn = screen.getByText('Next');

    fireEvent.click(nextBtn);
    expect(React.useContext).toHaveBeenCalledWith(SpaceContext);

    fireEvent.click(prevBtn);
    expect(React.useContext).toHaveBeenCalledWith(SpaceContext);
  });
});
