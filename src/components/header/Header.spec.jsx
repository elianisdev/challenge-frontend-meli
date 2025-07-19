import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('<Header />', () => {
  it('renders the logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logo = screen.getByAltText(/mercado libre logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders the search input', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText(/buscar productos, marcas y mas/i);
    expect(input).toBeInTheDocument();
  });

  it('renders the search button', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    const searchIcon = screen.getByAltText(/search icon/i);
    expect(searchIcon).toBeInTheDocument();
  });
});
