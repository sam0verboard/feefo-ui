import { render, screen } from "@testing-library/react";
import RatingIcon from "./RatingIcon";

describe("RatingIcon", () => {
  it("renders the rating value", () => {
    render(<RatingIcon rating="5" />);

    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("icon is aria hidden", () => {
    render(<RatingIcon rating="3" />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
