import { render, screen } from '@testing-library/react';
import React from 'react';
import { Footer } from './Footer.jsx';

describe('<Footer />', () => {
  it('should render footer with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it('should render author name with link', () => {
    render(<Footer />);
    const authorLink = screen.getByText('Elianis Dev');
    expect(authorLink).toBeInTheDocument();
    expect(authorLink.closest('a')).toHaveAttribute('href', 'https://github.com/elianisdev');
    expect(authorLink.closest('a')).toHaveAttribute('target', '_blank');
  });

  it('should render repository link', () => {
    render(<Footer />);
    const repoLink = screen.getByText('challenge-front-meli');
    expect(repoLink).toBeInTheDocument();
    expect(repoLink.closest('a')).toHaveAttribute(
      'href',
      'https://github.com/elianisdev/challenge-front-meli'
    );
    expect(repoLink.closest('a')).toHaveAttribute('target', '_blank');
  });

  it('should render copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/Desarrollado por/)).toBeInTheDocument();
  });

  it('should render repository text', () => {
    render(<Footer />);
    expect(screen.getByText(/Repositorio:/)).toBeInTheDocument();
  });
});
