import { useQuery, queryOptions } from "@tanstack/react-query";
import { QueryConfig, apiClient } from "@/lib";
import { IProductDetails } from "@/features/product";
import { apiRoutes, apiQueryKeys } from "@/features/product/api/api-utils";

export const getProduct = (id: string) => {
  return apiClient.get<unknown, IProductDetails>(
    apiRoutes.products.one.replace(":id", id)
  );
};

export const getProductQueryOptions = (
  id: string,
  config?: QueryConfig<typeof getProduct>
) => {
  return queryOptions({
    queryKey: apiQueryKeys.getProduct(id),
    queryFn: () => getProduct(id),
    ...config,
  });
};

export const useGetProduct = (
  id: string,
  config?: QueryConfig<typeof getProduct>
) => {
  return useQuery({
    queryFn: () => getProduct(id),
    queryKey: apiQueryKeys.getProduct(id),
    ...config,
  });
};
