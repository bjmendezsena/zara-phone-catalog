import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, renderHook, RenderOptions } from "@testing-library/react";
import { RootProvider } from "@/provider";

const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: true,
    },
  },
});

export const queryWrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
);

export const AllProviders = ({ children }: PropsWithChildren) => {
  return <RootProvider>{children}</RootProvider>;
};

export const renderWithProviders = (
  ui: React.ReactElement,
  options?: RenderOptions
) => render(ui, { wrapper: AllProviders, ...options });

export const renderHookWithProviders = (callback: any, options?: any) => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AllProviders>{children}</AllProviders>
  );
  return renderHook(callback, { wrapper, ...options });
};
export { default as userEvent } from "@testing-library/user-event";
export * from "@testing-library/react";
