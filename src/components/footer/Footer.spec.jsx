import { render, screen } from '@testing-library/react';
import React from 'react';
import { Footer } from './Footer.jsx';

describe('<Footer />', () => {
  it('should render repository link', () => {
    render(<Footer />);
    const repoLink = screen.getByText('Challenge Frontend Meli');
    expect(repoLink).toBeInTheDocument();
    expect(repoLink.closest('a')).toHaveAttribute(
      'href',
      'https://github.com/elianisdev/challenge-frontend-meli'
    );
    expect(repoLink.closest('a')).toHaveAttribute('target', '_blank');
  });

  it('should render author name with link', () => {
    render(<Footer />);
    const authorLink = screen.getByText('Eliana Suancha Guzmán');
    expect(authorLink).toBeInTheDocument();
    expect(authorLink.closest('a')).toHaveAttribute('href', 'https://github.com/elianisdev');
    expect(authorLink.closest('a')).toHaveAttribute('target', '_blank');
  });

  it('should render copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/desarrollado por/i)).toBeInTheDocument();
  });
});
