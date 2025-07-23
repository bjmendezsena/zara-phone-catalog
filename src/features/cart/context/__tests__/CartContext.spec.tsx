import { render, waitFor, getHtml, userEvent } from "@/tests/utils";
import { CartProvider, CartItem, useCartContext } from "@/features/cart";

type TestComponentProps = {
  items: CartItem[];
};

const mockItem: CartItem = {
  productId: "1",
  name: "Test Product",
  price: 100,
  color: "Red",
  storage: "64GB",
  quantity: 1,
  brand: "Test Brand",
  imageUrl: "http://example.com/image.jpg",
};

describe(`<${CartProvider.name}/>`, () => {
  const TestComponent = ({ items }: TestComponentProps) => {
    const {
      items: cartItems,
      addItem,
      removeItem,
      clearCart,
      totalItems,
    } = useCartContext();
    return (
      <div>
        <h1>Cart Items: {cartItems.length}</h1>
        <button onClick={() => addItem(items[0])}>Add Item</button>
        <button onClick={() => removeItem(items[0].productId)}>
          Remove Item
        </button>
        <button onClick={clearCart}>Clear Cart</button>
        <p>Total Items: {totalItems}</p>
      </div>
    );
  };

  const getComponent = (props: TestComponentProps) =>
    render(
      <CartProvider>
        <TestComponent {...props} />
      </CartProvider>
    );
  it("should render with initial state", () => {
    const items: CartItem[] = [];
    const { getByText } = getComponent({ items });

    expect(getByText("Cart Items: 0")).toBeInTheDocument();
    expect(getByText("Total Items: 0")).toBeInTheDocument();
  });
  it("should add an item to the cart", async () => {
    const { getByText } = getComponent({ items: [mockItem] });

    const addButton = getByText("Add Item");
    await userEvent.click(addButton);

    expect(getByText("Cart Items: 1")).toBeInTheDocument();
    expect(getByText("Total Items: 1")).toBeInTheDocument();
  });

  it("should remove an item from the cart", async () => {
    const { getByText } = getComponent({ items: [mockItem] });

    const addButton = getByText("Add Item");
    await userEvent.click(addButton);

    const removeButton = getByText("Remove Item");
    await userEvent.click(removeButton);

    expect(getByText("Cart Items: 0")).toBeInTheDocument();
    expect(getByText("Total Items: 0")).toBeInTheDocument();
  });
  it("should clear the cart", async () => {
    const { getByText } = getComponent({ items: [mockItem] });

    const addButton = getByText("Add Item");
    await userEvent.click(addButton);

    const clearButton = getByText("Clear Cart");
    await userEvent.click(clearButton);

    expect(getByText("Cart Items: 0")).toBeInTheDocument();
    expect(getByText("Total Items: 0")).toBeInTheDocument();
  });
  it("should handle multiple items correctly", async () => {
    const items: CartItem[] = [{ ...mockItem, productId: "1" }];
    const { getByText } = getComponent({ items });

    expect(getByText("Cart Items: 0")).toBeInTheDocument();
    expect(getByText("Total Items: 0")).toBeInTheDocument();

    await userEvent.click(getByText("Add Item"));

    await waitFor(() => {
      expect(getByText("Cart Items: 1")).toBeInTheDocument();
      expect(getByText("Total Items: 1")).toBeInTheDocument();
    });
  });

  it("should render the cart items correctly", async () => {
    const items: CartItem[] = [mockItem];
    const { getByText, container } = getComponent({ items });

    await userEvent.click(getByText("Add Item"));

    expect(getByText("Cart Items: 1")).toBeInTheDocument();
    expect(getByText("Total Items: 1")).toBeInTheDocument();
    expect(getHtml(container)).toMatchSnapshot();
  });
});
