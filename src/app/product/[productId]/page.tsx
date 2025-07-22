import {
  dehydrate,
  QueryClient,
  HydrationBoundary,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import {
  getProductQueryOptions,
  ProductDetails,
  ProductVariant,
} from "@/features/product";

export const generateMetadata = async ({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string }>;
  searchParams: Promise<ProductVariant>;
}) => {
  const productId = (await params).productId;
  const searchParamsObj = await searchParams;

  return {
    productId,
    searchParams: searchParamsObj,
  };
};

const preloadData = async (productId: string) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    ...getProductQueryOptions(productId),
  });

  const dehydratedState = dehydrate(queryClient);

  return {
    dehydratedState,
    queryClient,
  };
};

const ProductDetailsPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{
    productId: string;
  }>;
  searchParams: Promise<ProductVariant>;
}) => {
  const productId = (await params).productId;
  const searchParamsObj = await searchParams;
  const { dehydratedState, queryClient } = await preloadData(productId);

  const productQuery = queryClient.getQueryData(
    getProductQueryOptions(productId).queryKey
  );

  if (!productQuery) {
    return <div>Product not found</div>;
  }

  return (
    <HydrationBoundary state={dehydratedState}>
      <ErrorBoundary fallback={<div>Error loading product details</div>}>
        <ProductDetails productId={productId} variants={searchParamsObj} />
      </ErrorBoundary>
    </HydrationBoundary>
  );
};

export default ProductDetailsPage;
