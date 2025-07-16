import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer.jsx';

describe('<Footer />', () => {
  it('should render footer', () => {
    render(<Footer />);
    const footerText = screen.getByText(/footer/i);
    expect(footerText).toBeInTheDocument();
  });
});
