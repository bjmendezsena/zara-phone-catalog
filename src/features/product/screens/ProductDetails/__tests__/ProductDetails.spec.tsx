import {
  getHtml,
  renderWithProviders,
  mockProductDetailsResponse,
  waitFor,
} from "@/tests";
import { ProductDetails, ProductDetailsProps } from "@/features/product";

describe(`<${ProductDetails.name}/>`, () => {
  const defaultProps: ProductDetailsProps = {
    productId: mockProductDetailsResponse.id,
  };
  const getComponent = (props: Partial<ProductDetailsProps> = {}) =>
    renderWithProviders(<ProductDetails {...defaultProps} {...props} />);

  it("renders without crashing", async () => {
    const { container } = getComponent();
    await waitFor(() => {
      const htmlString = getHtml(container);
      expect(htmlString).toMatchSnapshot();
      expect(htmlString.toString()).toContain(mockProductDetailsResponse.name);
      expect(htmlString.toString()).toContain(mockProductDetailsResponse.brand);
      expect(htmlString.toString()).toContain(
        mockProductDetailsResponse.description
      );
    });
  });
  it("renders with loading", async () => {
    const { getByText } = renderWithProviders(
      <ProductDetails {...defaultProps} />
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });
});
