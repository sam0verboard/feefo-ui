import { render, screen } from "@testing-library/react";
import RatingCountBar from "./RatingCountBar";

jest.mock("../FillBar/FillBar", () => ({
  __esModule: true,
  default: ({ percent }: { percent: number }) => (
    <div aria-label={`fill ${percent}%`} />
  ),
}));

jest.mock("../RatingIcon/RatingIcon", () => ({
  __esModule: true,
  default: ({ rating }: { rating: string }) => <div>{rating}</div>,
}));

describe("RatingCountBar", () => {
  it("renders rating, fill bar and count", () => {
    render(<RatingCountBar rating={5} count={20} total={100} />);

    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
    expect(screen.getByLabelText("fill 20%")).toBeInTheDocument();
  });

  it("formats ratings to one decimal place", () => {
    render(<RatingCountBar rating={4.5} count={10} total={20} />);

    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("clamps percentage between 0 and 100", () => {
    render(<RatingCountBar rating={3} count={200} total={100} />);

    expect(screen.getByLabelText("fill 100%")).toBeInTheDocument();
  });

  it("exposes correct group role and aria-label", () => {
    render(<RatingCountBar rating={4} count={12} total={50} />);

    const group = screen.getByRole("group", {
      name: "Rating 4, 12 counts",
    });

    expect(group).toBeInTheDocument();
  });
});
