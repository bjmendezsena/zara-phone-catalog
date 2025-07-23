import { getProduct } from "@/features/product";
import { mockProductDetailsResponse } from "@/tests";

describe("getProduct", () => {
  it("should return product details for a valid product ID", async () => {
    const productId = "12345";
    const response = await getProduct(productId);

    expect(response).toEqual(mockProductDetailsResponse);
  });
});
