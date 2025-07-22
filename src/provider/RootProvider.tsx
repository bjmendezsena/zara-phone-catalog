"use client";
import { useMemo, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { queryConfig } from "@/lib/react-query";
import { CartProvider } from "@/features/cart";
import { MainErrorFallback } from "@/components";

export const RootProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
    []
  );

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>{children}</CartProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
