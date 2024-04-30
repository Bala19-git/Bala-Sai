import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';


describe('Counter component', () => {

  it('test snapshot', () => {
    const { container } = render(<Counter/>);
    expect(container).toMatchSnapshot();
  });

  it('renders with initial count of 0', () => {
    const { getByText } = render(<Counter />);
    expect(getByText('Number: 0')).toBeInTheDocument();
  });

  it('increments count when increment button is clicked', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Increment');

    fireEvent.click(incrementButton);

    expect(getByText('Number: 1')).toBeInTheDocument();
  });

  it('decrements count when decrement button is clicked', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText('Decrement');

    fireEvent.click(decrementButton);

    expect(getByText('Number: 0')).toBeInTheDocument();
  });

  it('does not allow count to go below 0', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText('Decrement');

    fireEvent.click(decrementButton);

    expect(getByText('Number: 0')).toBeInTheDocument();
  });
});
