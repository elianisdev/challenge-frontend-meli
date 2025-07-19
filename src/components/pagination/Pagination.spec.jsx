import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Pagination } from './Pagination';

describe('<Pagination />', () => {
  it('renders page buttons and handles click', () => {
    const onPageChange = jest.fn();
    render(<Pagination currentPage={2} totalPages={3} onPageChange={onPageChange} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    fireEvent.click(screen.getByText('1'));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it('renders previous and next buttons', () => {
    const onPageChange = jest.fn();
    render(<Pagination currentPage={2} totalPages={3} onPageChange={onPageChange} />);
    expect(screen.getByText('< Anterior')).toBeInTheDocument();
    expect(screen.getByText('Siguiente >')).toBeInTheDocument();
  });

  it('does not render previous button on first page', () => {
    const onPageChange = jest.fn();
    render(<Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />);
    expect(screen.queryByText('< Anterior')).not.toBeInTheDocument();
  });

  it('does not render next button on last page', () => {
    const onPageChange = jest.fn();
    render(<Pagination currentPage={3} totalPages={3} onPageChange={onPageChange} />);
    expect(screen.queryByText('Siguiente >')).not.toBeInTheDocument();
  });
});
