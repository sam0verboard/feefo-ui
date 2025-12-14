import { render, screen } from "@testing-library/react";
import FillBarComponent from "./FillBar";

describe("FillBarComponent", () => {
  it("renders the fill bar with correct aria-label", () => {
    render(<FillBarComponent percent={60} />);

    const fillBar = screen.getByLabelText("60%");

    expect(fillBar).toBeInTheDocument();
  });

  it("applies the correct width based on percent", () => {
    render(<FillBarComponent percent={75} />);

    const fillBar = screen.getByLabelText("75%");

    expect(fillBar).toHaveStyle("width: 75%");
  });
});
