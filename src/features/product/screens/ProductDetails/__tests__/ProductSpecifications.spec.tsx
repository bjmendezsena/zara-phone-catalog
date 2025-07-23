import { render, getHtml, mockProductDetailsResponse } from "@/tests";
import {
  ProductSpecifications,
  ProductSpecificationsProps,
} from "@/features/product/screens/ProductDetails/ProductSpecifications";

describe(`<${ProductSpecifications.name}/>`, () => {
  const defaultProps: ProductSpecificationsProps = {
    product: mockProductDetailsResponse,
  };

  it("renders without crashing", () => {
    const { container } = render(<ProductSpecifications {...defaultProps} />);
    expect(getHtml(container)).toMatchSnapshot();
  });

  it("displays the correct product specifications", () => {
    const { getByText } = render(<ProductSpecifications {...defaultProps} />);

    const specifications = [
      { label: "BRAND", value: mockProductDetailsResponse.brand },
      { label: "NAME", value: mockProductDetailsResponse.name },
      { label: "DESCRIPTION", value: mockProductDetailsResponse.description },
      { label: "SCREEN", value: mockProductDetailsResponse.specs.screen },
      {
        label: "RESOLUTION",
        value: mockProductDetailsResponse.specs.resolution,
      },
      { label: "PROCESSOR", value: mockProductDetailsResponse.specs.processor },
      {
        label: "MAIN CAMERA",
        value: mockProductDetailsResponse.specs.mainCamera,
      },
      {
        label: "SELFIE CAMERA",
        value: mockProductDetailsResponse.specs.selfieCamera,
      },
      { label: "BATTERY", value: mockProductDetailsResponse.specs.battery },
      { label: "OS", value: mockProductDetailsResponse.specs.os },
      {
        label: "SCREEN REFRESH RATE",
        value: mockProductDetailsResponse.specs.screenRefreshRate,
      },
    ];
    specifications.forEach((spec) => {
      expect(getByText(spec.label)).toBeInTheDocument();
      expect(getByText(spec.value)).toBeInTheDocument();
    });
  });

  it("returns null if no product is provided", () => {
    const { container } = render(<ProductSpecifications />);
    expect(container.firstChild).toBeNull();
  });
});
