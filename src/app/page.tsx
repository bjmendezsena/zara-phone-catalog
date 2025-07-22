import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import { getProductsQueryOptions, ProductGrid } from "@/features/product";

export const metadata: Metadata = {
  title: "Home - Zara Phone Catalog",
  description: "A catalog of Zara phones",
};

const HomeRoute = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    getProductsQueryOptions({
      limit: 20,
    })
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ProductGrid />
    </HydrationBoundary>
  );
};

export default HomeRoute;
