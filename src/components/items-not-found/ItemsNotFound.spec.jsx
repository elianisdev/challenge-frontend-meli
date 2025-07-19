import { render, screen } from '@testing-library/react';
import React from 'react';
import { ItemsNotFound } from './ItemsNotFound';

describe('<ItemsNotFound />', () => {
  it('renders not found message', () => {
    render(<ItemsNotFound />);
    expect(screen.getByText(/no hay publicaciones que coincidan/i)).toBeInTheDocument();
  });

  it('renders the suggestions', () => {
    render(<ItemsNotFound />);
    expect(screen.getByText(/Revisá la ortografía/i)).toBeInTheDocument();
    expect(screen.getByText(/palabras más genéricas/i)).toBeInTheDocument();
  });

  it('renders the not found image', () => {
    render(<ItemsNotFound />);
    const img = screen.getByAltText(/no se encontraron resultados/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      'src',
      'https://http2.mlstatic.com/frontend-assets/search-nordic/not-found.svg'
    );
  });
});
