import { render, screen } from "@testing-library/react";
import RatingBar from "./RatingBar";

/**
 * Mock SVG icon import
 */
jest.mock("../../../assets/icons/feefo-star-white.svg", () => ({
  ReactComponent: () => <svg data-testid="rating-star-icon" />,
}));

describe("RatingBar", () => {
  it("renders the correct number of stars based on maxRating", () => {
    render(<RatingBar averageRating={3.5} maxRating={5} />);

    const stars = screen.getAllByTestId("rating-star-icon");
    expect(stars).toHaveLength(5);
  });

  it("renders zero stars when maxRating is 0", () => {
    render(<RatingBar averageRating={3} maxRating={0} />);

    expect(screen.queryByTestId("rating-star-icon")).not.toBeInTheDocument();
  });

  it("sets an accessible label on the container", () => {
    render(<RatingBar averageRating={4.2} maxRating={5} />);

    expect(
      screen.getByRole("img", {
        name: "Average rating 4.2 out of 5",
      })
    ).toBeInTheDocument();
  });

  it("applies partial fill for fractional ratings", () => {
    render(<RatingBar averageRating={2.5} maxRating={5} />);

    const starContainers = screen.getByTestId("rating-star-0-100");
    expect(starContainers).toBeInTheDocument();

    // 1st and 2nd stars should be fully filled (100%)
    checkForStar(0, 100);
    checkForStar(1, 100);

    // 3rd star should be partially filled (50%)
    checkForStar(2, 50);

    // 4th and 5th stars should be empty (0%)
    checkForStar(3, 0);
    checkForStar(4, 0);
  });

  it("clamps fillpercent between 0 and 100", () => {
    render(<RatingBar averageRating={10} maxRating={5} />);

    // All stars should be fully filled (100%)
    checkForStar(0, 100);
    checkForStar(1, 100);
    checkForStar(2, 100);
    checkForStar(3, 100);
    checkForStar(4, 100);
  });

  const checkForStar = (index: number, fillPercent: number) => {
    const star = screen.getByTestId(`rating-star-${index}-${fillPercent}`);
    expect(star).toBeInTheDocument();
  };
});
