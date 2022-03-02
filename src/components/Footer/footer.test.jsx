import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Footer from './Footer.jsx';

describe('testing the Footer component', () => {
  it('Should render Footer', () => {
    render(<Footer />);
    let display = screen.getByTestId('Footer');
    expect(display).toBeInTheDocument();
  });
});
