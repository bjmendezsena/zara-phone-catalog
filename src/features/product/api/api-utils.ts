import { include } from "named-urls";

export const apiQueryKeys = {
  all: () => ["products"],
  getProducts: (filters: unknown) => [
    ...apiQueryKeys.all(),
    "getProducts",
    filters,
  ],
  getProduct: (id: string) => [...apiQueryKeys.all(), "getProduct", id],
};

export const apiRoutes = {
  products: include("/products", {
    all: "",
    one: ":id",
  }),
};
