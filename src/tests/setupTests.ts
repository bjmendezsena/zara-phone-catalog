import "cross-fetch/polyfill";

const originalError = console.error;

Object.defineProperty(global, "localStorage", {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  },
  writable: true,
});

if (typeof global.beforeAll === "function") {
  global.beforeAll(() => {
    console.error = (...args) => {
      if (
        typeof args[0] === "string" &&
        (args[0].includes("Warning: ReactDOM.render is deprecated") ||
          args[0].includes("Warning: React.createFactory is deprecated"))
      ) {
        return;
      }
      originalError.call(console, ...args);
    };
  });

  global.afterAll(() => {
    console.error = originalError;
  });
}
