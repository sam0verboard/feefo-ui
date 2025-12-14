import { render, screen } from "@testing-library/react";
import RatingsChart from "./RatingsChart";

jest.mock("../RatingsCountBar/RatingCountBar", () => ({
  __esModule: true,
  default: ({
    rating,
    count,
    total,
  }: {
    rating: number;
    count: number;
    total: number;
  }) => (
    <div data-testid="rating-count-bar">
      rating:{rating} count:{count} total:{total}
    </div>
  ),
}));

describe("RatingsChart", () => {
  it("renders a rating bar for each rating entry", () => {
    const ratings = new Map<number, number>([
      [5, 10],
      [4, 20],
      [3, 5],
    ]);

    render(<RatingsChart ratings={ratings} />);

    const bars = screen.getAllByTestId("rating-count-bar");
    expect(bars).toHaveLength(3);
  });

  it("sorts ratings in descending order", () => {
    const ratings = new Map<number, number>([
      [3, 5],
      [5, 10],
      [4, 20],
    ]);

    render(<RatingsChart ratings={ratings} />);

    const bars = screen.getAllByTestId("rating-count-bar");

    expect(bars[0]).toHaveTextContent("rating:5");
    expect(bars[1]).toHaveTextContent("rating:4");
    expect(bars[2]).toHaveTextContent("rating:3");
  });

  it("passes the correct total count to each RatingCountBar", () => {
    const ratings = new Map<number, number>([
      [5, 10],
      [4, 20],
      [3, 5],
    ]);

    // total = 35
    render(<RatingsChart ratings={ratings} />);

    const bars = screen.getAllByTestId("rating-count-bar");
    bars.forEach((bar) => {
      expect(bar).toHaveTextContent("total:35");
    });
  });

  it("renders with an accessible label", () => {
    const ratings = new Map<number, number>([[5, 1]]);

    render(<RatingsChart ratings={ratings} />);

    expect(screen.getByLabelText("Ratings Chart")).toBeInTheDocument();
  });

  it("renders nothing when ratings map is empty", () => {
    render(<RatingsChart ratings={new Map()} />);

    expect(screen.queryAllByTestId("rating-count-bar")).toHaveLength(0);
  });
});
