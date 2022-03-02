import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Nav from './Nav.jsx';

describe('testing the Nav component', () => {
  it('Should render Nav', () => {
  let title = "Nav"

    render(<Nav />);
    let heading = screen.getByText(title);
    expect(heading).toBeInTheDocument();
  });
});
