import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter component", () => {
  test("renders with initial value of 0", () => {
    const { getByText } = render(<Counter />);
    const counterValue = getByText("Number :0");
    expect(counterValue).toBeInTheDocument();
  });

  test("increments the counter value", () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText("Increment");
    fireEvent.click(incrementButton);
    const counterValue = getByText("Number :1");
    expect(counterValue).toBeInTheDocument();
  });

  test("decrements the counter value", () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText("Decrement");
    fireEvent.click(decrementButton);
    const counterValue = getByText("Number :0");
    expect(counterValue).toBeInTheDocument();
  });

  test("does not allow counter value to go below 0", () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText("Decrement");
    fireEvent.click(decrementButton);
    const counterValue = getByText("Number :0");
    expect(counterValue).toBeInTheDocument();
  });
});
