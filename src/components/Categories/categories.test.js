import {  render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import createReduxStore from '../../store/index.js';
import Categories from './Categories.jsx';
import '@testing-library/jest-dom'

describe('Testing the Categories Component', () => {

  it('should display the Categories Component', () => {
    render(
      <Provider store={createReduxStore()}>
        <Categories />
      </Provider>
    );

    let display = screen.getByTestId('Categories');
    expect(display).toBeInTheDocument();
  });

  it("Clicking 'show category' should update to 'show all'", () => {
    render(
      <Provider store={createReduxStore()}>
        <Categories />
      </Provider>
    );

    let button = screen.getByTestId('catButton');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(button).toHaveTextContent("Show All");
  });
});