import { render, screen } from "@testing-library/react";
import QualitativeRating from "./QualitativeRating";

describe("QualitativeRating", () => {
  test("renders correct label for a given rating", () => {
    render(<QualitativeRating averageRating={3} maxRating={5} />);
    expect(screen.getByText("Good")).toBeInTheDocument();
  });

  test("renders default label for fractional rating", () => {
    render(<QualitativeRating averageRating={2.5} maxRating={5} />);
    expect(screen.getByText("Average")).toBeInTheDocument();
  });

  test("renders fallback when rating is invalid", () => {
    render(<QualitativeRating averageRating={-1} maxRating={5} />);
    expect(screen.getByText("-")).toBeInTheDocument();
  });

  test("renders custom labels if provided", () => {
    const labels = ["Bad", "Average", "Good"];
    render(
      <QualitativeRating averageRating={2.1} maxRating={5} labels={labels} />
    );
    expect(screen.getByText("Average")).toBeInTheDocument();
  });

  test("has proper aria-label for screen readers", () => {
    render(<QualitativeRating averageRating={4.5} maxRating={5} />);
    expect(screen.getByText("Excellent")).toHaveAttribute(
      "aria-label",
      expect.stringContaining("Rating")
    );
  });
});
