// RatingsWidget.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import RatingsWidget from "./RatingsWidget";

// Mock the child components to isolate the test
jest.mock("./RatingChart/RatingsChart", () => () => <div>Mock Chart</div>);
jest.mock("./AverageRatingInfo/AverageRatingInfo", () => (props: any) => (
  <div>{`Rating: ${props.averageRating}`}</div>
));

describe("RatingsWidget", () => {
  it("renders component", () => {
    const ratingCounts = new Map([
      [5, 10],
      [4, 5],
      [3, 2],
    ]);

    render(<RatingsWidget ratingCounts={ratingCounts} />);
    expect(screen.getByLabelText("Ratings Widget")).toBeInTheDocument();
    expect(screen.getByText("Mock Chart")).toBeInTheDocument();
  });

  it("handles empty ratings map", () => {
    const ratingCounts = new Map();
    render(<RatingsWidget ratingCounts={ratingCounts} />);
    expect(screen.getByLabelText("Ratings Widget")).toBeInTheDocument();
    // AverageRatingInfo still renders with average 0
    expect(screen.getByText("Rating: 0")).toBeInTheDocument();
  });

  it("calculates the correct average rating", () => {
    const ratingCounts = new Map([
      [5, 2],
      [3, 1],
      [1, 1],
    ]);
    render(<RatingsWidget ratingCounts={ratingCounts} />);
    // Average = (5*2 + 3*1 + 1*1) = 14/4 = 3.5
    expect(screen.getByText("Rating: 3.5")).toBeInTheDocument();
  });

  it("calculates the correct max rating", () => {
    const ratingCounts = new Map([
      [3, 2],
      [2, 5],
      [1, 3],
    ]);
    render(<RatingsWidget ratingCounts={ratingCounts} />);
    // Average = (3*2 + 2*5 + 1*3) = 19/10 = 1.9
    expect(screen.getByText("Rating: 1.9")).toBeInTheDocument();
  });
});
