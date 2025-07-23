import { http } from "msw";
import { apiRoutes } from "@/features/product/api/api-utils";
import { formatString } from "@/utils";
import { getProductListHandler } from "./product-list";
import { getProductHandler } from "./product";

export const handlers = (baseUrl: string) => {
  return [
    http.get(`${baseUrl}${apiRoutes.products.all}`, getProductListHandler),
    http.get(
      formatString(`${baseUrl}${apiRoutes.products.one}`, ":productId"),
      getProductHandler
    ),
  ];
};
