// Mock for Next.js navigation hooks
const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
};

// Mock search params
const mockSearchParams = new URLSearchParams();

// Export hooks
export const useRouter = () => mockRouter;
export const useSearchParams = () => mockSearchParams;
export const usePathname = () => "/product/12345";
export const useParams = () => ({ productId: "12345" });

// Reset function for tests
export const __resetMocks = () => {
  Object.values(mockRouter).forEach((fn) => {
    if (typeof fn?.mockClear === "function") fn.mockClear();
  });
  mockSearchParams.forEach((value, key) => mockSearchParams.delete(key));
};

// Helper to set search params
export const __setSearchParams = (params) => {
  mockSearchParams.forEach((value, key) => mockSearchParams.delete(key));
  Object.entries(params).forEach(([key, value]) => {
    mockSearchParams.set(key, value);
  });
};
