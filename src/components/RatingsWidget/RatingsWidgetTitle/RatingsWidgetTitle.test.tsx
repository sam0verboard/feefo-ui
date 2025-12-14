import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RatingsWidgetTitle from "./RatingsWidgetTitle";

describe("RatingsWidgetTitle", () => {
  it("renders the title text", () => {
    render(<RatingsWidgetTitle />);

    expect(screen.getByText("Product Rating")).toBeInTheDocument();
  });

  it("renders text and icon together", () => {
    const { container } = render(<RatingsWidgetTitle />);

    expect(container.textContent).toContain("Product Rating");
    expect(
      screen.getByRole("img", { name: /feefo logo/i })
    ).toBeInTheDocument();
  });
});
