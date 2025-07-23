import { getProducts } from "@/features/product";
import { mockProductListResponse } from "@/tests";

const params = { limit: 10, offset: 0 };
const signal = new AbortController().signal;
describe("getProducts", () => {
  it("should return all product list", async () => {
    const response = await getProducts(params, signal);

    expect(response).toEqual(mockProductListResponse);
  });
  it("should return one filtrered product list", async () => {
    const filtreredProduct = mockProductListResponse[0];
    const response = await getProducts(
      { ...params, search: filtreredProduct.name },
      signal
    );

    expect(response).toEqual([filtreredProduct]);
  });
  it("should return void product list", async () => {
    const response = await getProducts({ ...params, search: "search" }, signal);

    expect(response).toEqual([]);
  });
});
