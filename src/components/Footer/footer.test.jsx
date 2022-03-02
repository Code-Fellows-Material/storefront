import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Footer from './Footer.jsx';

describe('testing the Footer component', () => {
  it('Should render Footer', () => {
  let title = "Footer"

    render(<Footer />);
    let heading = screen.getByText(title);
    expect(heading).toBeInTheDocument();
  });
});
