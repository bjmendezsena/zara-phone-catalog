import {
  CartItem,
  ProductCartItem,
  ProductCartItemProps,
} from "@/features/cart";
import { render } from "@/tests";

describe(`<${ProductCartItem.name} />`, () => {
  const onRemoveMock = jest.fn();
  const item: CartItem = {
    productId: "1",
    color: "Black",
    storage: "128GB",
    brand: "BrandX",
    name: "Product Name",
    price: 999.99,
    imageUrl: "/path/to/image.jpg",
    quantity: 2,
  };

  const getComponent = (props: Partial<ProductCartItemProps> = {}) => {
    return render(
      <ProductCartItem item={{ ...item, ...props }} onRemove={onRemoveMock} />
    );
  };
  it("renders product details correctly", async () => {
    const { asFragment } = getComponent();

    expect(asFragment()).toMatchSnapshot();
  });
  it("calls onRemove when remove button is clicked", async () => {
    const { getByTestId } = getComponent();

    const removeButton = getByTestId("remove-cart-item");
    removeButton.click();

    expect(onRemoveMock).toHaveBeenCalledWith(item.productId);
  });
});
