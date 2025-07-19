import { render, screen } from '@testing-library/react';
import React from 'react';
import { ItemSearchResult } from './ItemSearchResult';

describe('<ItemSearchResult />', () => {
  const product = {
    id: '1',
    title: 'Test Product',
    image: 'test.jpg',
    price: '$ 1.000',
    shipping: true,
  };

  it('renders product title', () => {
    render(<ItemSearchResult product={product} />);
    expect(screen.getByText(/test product/i)).toBeInTheDocument();
  });

  it('renders product price', () => {
    render(<ItemSearchResult product={product} />);
    expect(screen.getByText('$ 1.000')).toBeInTheDocument();
  });

  it('renders product image with alt', () => {
    render(<ItemSearchResult product={product} />);
    const img = screen.getByAltText(/test product/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test.jpg');
  });

  it('renders shipping label if shipping is true', () => {
    render(<ItemSearchResult product={product} />);
    expect(screen.getByText(/envío gratis/i)).toBeInTheDocument();
  });

  it('does not render shipping label if shipping is false', () => {
    render(<ItemSearchResult product={{ ...product, shipping: false }} />);
    expect(screen.queryByText(/envío gratis/i)).not.toBeInTheDocument();
  });
});
