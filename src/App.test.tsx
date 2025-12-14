import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const header = screen.getByText("Feefo UI Ratings Widget");
  expect(header).toBeInTheDocument();
  const header2 = screen.getByText("Drag to resize");
  expect(header2).toBeInTheDocument();
  const input = screen.getByLabelText("Rating Counts Input");
  expect(input).toBeInTheDocument();
  const resizable = screen.getByLabelText("Ratings Widget");
  expect(resizable).toBeInTheDocument();
});
