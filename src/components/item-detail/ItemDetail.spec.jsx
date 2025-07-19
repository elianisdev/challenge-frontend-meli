import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ItemDetail } from './ItemDetail';

describe('<ItemDetail />', () => {
  it('renders the product title', () => {
    render(<ItemDetail />);
    expect(screen.getByRole('heading', { level: 1, name: /apple iphone 14/i })).toBeInTheDocument();
  });

  it('renders the main product image', () => {
    render(<ItemDetail />);
    const mainImage = screen.getByAltText('Apple iPhone 14 (128 GB) - Blanco estelar');
    expect(mainImage).toBeInTheDocument();
    expect(mainImage).toHaveAttribute(
      'src',
      expect.stringContaining('iphone-14-128gb-blanco-estelar.jpg')
    );
  });

  it('renders all thumbnails', () => {
    render(<ItemDetail />);
    const thumbnails = screen.getAllByRole('img', { name: /vista/i });
    expect(thumbnails.length).toBe(4);
  });

  it('renders the product price', () => {
    render(<ItemDetail />);
    expect(screen.getByText(/\$1.362.836/)).toBeInTheDocument();
  });

  it('renders the product description', () => {
    render(<ItemDetail />);
    expect(screen.getByText(/el iphone se es el iphone de 4,7 pulgadas/i)).toBeInTheDocument();
  });

  it('changes main image when thumbnail is clicked', () => {
    render(<ItemDetail />);
    const thumbnails = screen.getAllByRole('img', { name: /vista/i });
    const mainImage = screen.getByAltText('Apple iPhone 14 (128 GB) - Blanco estelar');
    fireEvent.click(thumbnails[2]);
    // La imagen principal debe cambiar al src de la miniatura 3
    expect(mainImage).toHaveAttribute(
      'src',
      expect.stringContaining('iphone-14-128gb-blanco-estelar-3.jpg')
    );
  });
});
