import {  render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import createReduxStore from '../../store/index.js';
import Products from './Products.jsx';
import '@testing-library/jest-dom'

describe('Testing the Products Component', () => {

  it('should display the Products Component', () => {
    render(
      <Provider store={createReduxStore()}>
        <Products />
      </Provider>
    );

    let display = screen.getByTestId('Products');
    expect(display).toBeInTheDocument();
  });

  it("Clicking 'show category' should update to 'show all'", () => {
    render(
      <Provider store={createReduxStore()}>
        <Products />
      </Provider>
    );

    let display = screen.getByText('Cat Yums');
    expect(display).toBeInTheDocument();
  });
});