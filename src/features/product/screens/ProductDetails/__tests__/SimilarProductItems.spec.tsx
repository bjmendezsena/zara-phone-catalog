import { render, getHtml, mockProductDetailsResponse } from "@/tests";
import {
  SimilarProductItems,
  SimilarProductItemsProps,
} from "@/features/product/screens/ProductDetails/SimilarProductItems";
import { formatCurrency } from "@/utils";

describe(`<${SimilarProductItems.name}/>`, () => {
  const defaultProps: SimilarProductItemsProps = {
    products: mockProductDetailsResponse.similarProducts,
  };

  it("renders without crashing", () => {
    const { container } = render(<SimilarProductItems {...defaultProps} />);
    expect(getHtml(container)).toMatchSnapshot();
  });

  it("displays the correct number of similar products", () => {
    const { getAllByTestId } = render(
      <SimilarProductItems {...defaultProps} />
    );
    const productCards = getAllByTestId("product-card");
    expect(productCards).toHaveLength(defaultProps.products.length);
  });

  it("renders each product card with correct details", () => {
    const { getAllByAltText, getByText, findAllByText } = render(
      <SimilarProductItems {...defaultProps} />
    );

    defaultProps.products.forEach((product) => {
      expect(getAllByAltText(`${product.brand} ${product.name}`)).toBeTruthy();
      expect(getByText(product.name)).toBeTruthy();
      expect(findAllByText(product.brand)).toBeTruthy();
      expect(findAllByText(formatCurrency(product.basePrice))).toBeTruthy();
    });
  });
});
