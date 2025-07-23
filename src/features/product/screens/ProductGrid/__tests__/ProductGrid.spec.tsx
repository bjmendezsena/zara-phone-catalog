import {
  getHtml,
  mockProductListResponse,
  renderWithProviders,
  waitFor,
  userEvent,
} from "@/tests";
import { ProductGrid } from "@/features/product";

describe(`<${ProductGrid.name}/>`, () => {
  const getComponent = () => renderWithProviders(<ProductGrid />);

  it("renders without crashing", () => {
    const { container } = getComponent();
    expect(getHtml(container)).toMatchSnapshot();
  });

  it("displays the correct number of products", async () => {
    const { getAllByTestId } = getComponent();

    await waitFor(() => {
      const productItems = getAllByTestId("product-card");
      expect(productItems).toHaveLength(mockProductListResponse.length);
      expect(`${mockProductListResponse.length} Results`).toBe(
        getAllByTestId("search-results-count")[0].textContent
      );
    });
  });

  it("shows loading state initially", () => {
    const { getByText } = getComponent();
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("Can search for products", async () => {
    const { getByTestId, getByText } = getComponent();
    const searchInput = getByTestId("search-input");
    const search = mockProductListResponse[0].name;
    const filtreredProducts = mockProductListResponse.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    await userEvent.type(searchInput, search);
    expect(searchInput).toHaveValue(search);

    await waitFor(() => {
      expect(getByTestId("clear-search-button")).toBeInTheDocument();
      expect(getByText(search)).toBeInTheDocument();

      expect(`${filtreredProducts.length} Results`).toBe(
        getByTestId("search-results-count").textContent
      );
    });
  });

  it("Can clear input for products", async () => {
    const { getByTestId, getByText } = getComponent();
    const searchInput = getByTestId("search-input");
    const search = mockProductListResponse[0].name;
    const filtreredProducts = mockProductListResponse.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    await userEvent.type(searchInput, search);
    expect(searchInput).toHaveValue(search);

    await waitFor(() => {
      expect(getByTestId("clear-search-button")).toBeInTheDocument();
      expect(getByText(search)).toBeInTheDocument();

      expect(`${filtreredProducts.length} Results`).toBe(
        getByTestId("search-results-count").textContent
      );
    });

    await userEvent.click(getByTestId("clear-search-button"));
    expect(searchInput).toHaveValue("");
    await waitFor(() => {
      expect(getByTestId("search-results-count").textContent).toBe(
        `${mockProductListResponse.length} Results`
      );
    });
  });
});
