import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RatingText from "./RatingText";

describe("RatingText", () => {
  it("renders the rating text correctly", () => {
    render(<RatingText averageRating={4} maxRating={5} />);

    expect(screen.getByText("4.0 out of 5")).toBeInTheDocument();
  });

  it("formats the average rating to one decimal place", () => {
    render(<RatingText averageRating={3.456} maxRating={5} />);

    expect(screen.getByText("3.5 out of 5")).toBeInTheDocument();
  });

  it("adds an accessible aria-label", () => {
    render(<RatingText averageRating={2.5} maxRating={5} />);

    const span = screen.getByLabelText("2.5 out of 5");
    expect(span).toBeInTheDocument();
  });
});
