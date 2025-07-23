import { render, getHtml, mockProductDetailsResponse } from "@/tests";
import {
  ColorSelector,
  ColorSelectorProps,
} from "@/features/product/screens/ProductDetails/ColorSelector";

describe(`<${ColorSelector.name}/>`, () => {
  const defaultProps: ColorSelectorProps = {
    colorOptions: mockProductDetailsResponse.colorOptions,
    selectedColor: mockProductDetailsResponse.colorOptions[0].name,
    onColorChange: jest.fn(),
  };

  it("renders without crashing", () => {
    const { container } = render(<ColorSelector {...defaultProps} />);
    expect(getHtml(container)).toMatchSnapshot();
  });

  it("displays the correct number of color options", () => {
    const { getAllByRole } = render(<ColorSelector {...defaultProps} />);
    const colorOptions = getAllByRole("button");
    expect(colorOptions).toHaveLength(defaultProps.colorOptions.length);
  });

  it("highlights the selected color option", () => {
    const { getByTestId } = render(<ColorSelector {...defaultProps} />);
    const testId = `color-option-${defaultProps.selectedColor}`;
    const selectedOption = getByTestId(testId);
    expect(selectedOption).toHaveClass("border-primary");
  });
  it("calls onColorChange when a color option is clicked", () => {
    const { getByTestId } = render(<ColorSelector {...defaultProps} />);
    const testId = `color-option-${defaultProps.colorOptions[1].name}`;
    const colorOption = getByTestId(testId);
    colorOption.click();
    expect(defaultProps.onColorChange).toHaveBeenCalledWith(
      defaultProps.colorOptions[1]
    );
  });
});
