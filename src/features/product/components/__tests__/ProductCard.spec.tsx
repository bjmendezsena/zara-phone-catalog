import { render, mockProductListResponse, getHtml } from "@/tests";
import { ProductCard } from "@/features/product";

describe("ProductCard", () => {
  const product = mockProductListResponse[0];

  it("renders product details correctly", () => {
    const { container } = render(<ProductCard product={product} />);
    expect(getHtml(container)).toMatchSnapshot();
  });

  it("has correct link to product details", () => {
    const { getByRole } = render(<ProductCard product={product} />);
    const link = getByRole("link");

    expect(link).toHaveAttribute("href", `/product/${product.id}`);
  });
});
