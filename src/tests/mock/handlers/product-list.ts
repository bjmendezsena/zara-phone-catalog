import { HttpResponse, ResponseResolver } from "msw";
import { mockProductListResponse } from "@/tests/mock";

export const getProductListHandler: ResponseResolver = ({ request }) => {
  const { search = "" } = getUrlParams(request.url);
  return HttpResponse.json(
    mockProductListResponse.filter((product) => {
      if (search.length > 0) {
        return (
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.brand.toLowerCase().includes(search.toLowerCase())
        );
      }
      return true;
    })
  );
};

function getUrlParams(url: string): Record<string, string> {
  const urlObj = new URL(url);
  const params = Object.fromEntries(urlObj.searchParams.entries());
  return params;
}
