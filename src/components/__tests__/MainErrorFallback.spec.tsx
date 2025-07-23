import { MainErrorFallback } from "@/components";
import { render, screen } from "@testing-library/react";

describe("MainErrorFallback", () => {
  it("renders the error message", () => {
    render(<MainErrorFallback />);

    const heading = screen.getByRole("heading", {
      name: /Ooops, something went wrong :\(/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("has the correct role and class names", () => {
    render(<MainErrorFallback />);

    const alertDiv = screen.getByRole("alert");

    expect(alertDiv).toHaveClass(
      "flex h-screen w-screen flex-col items-center justify-center text-red-500"
    );
  });
});
