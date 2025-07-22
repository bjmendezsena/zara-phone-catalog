import { useMemo } from "react";
import { useQuery, queryOptions } from "@tanstack/react-query";
import { QueryConfig, apiClient } from "@/lib";
import { Filter } from "@/types";
import { useDebounce } from "@/hooks";
import { IProductItem } from "@/features/product";
import { apiRoutes, apiQueryKeys } from "@/features/product/api/api-utils";

export const getProducts = (filter: Filter, signal: AbortSignal) => {
  return apiClient.get<unknown, IProductItem[]>(apiRoutes.products.all, {
    params: filter,
    signal,
  });
};

export const getProductsQueryOptions = (
  filter: Filter,
  config?: QueryConfig<typeof getProducts>
) => {
  return queryOptions({
    queryKey: apiQueryKeys.getProducts(filter),
    queryFn: ({ signal }) => getProducts(filter, signal),
    ...config,
  });
};

export const useGetProducts = (
  filter?: Filter,
  config?: QueryConfig<typeof getProducts>
) => {
  const { limit = 20, search = "", offset = 0 } = filter || {};

  const debouncedSearch = useDebounce(search);

  const _filters: Filter = useMemo(
    () => ({
      limit,
      search: debouncedSearch,
      offset,
    }),
    [debouncedSearch, offset, limit]
  );

  return useQuery({
    queryFn: ({ signal }) => getProducts(_filters, signal),
    queryKey: apiQueryKeys.getProducts(_filters),
    ...config,
  });
};
