import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./src",
});

const config: Config = {
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  testEnvironment: "jest-fixed-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    // Mock react-error-boundary to avoid ES module issues
    "^react-error-boundary$":
      "<rootDir>/src/tests/mock/__mocks__/react-error-boundary.js",
    // Mock Next.js navigation hooks
    "^next/navigation$":
      "<rootDir>/src/tests/mock/__mocks__/next-navigation.js",
    // Mock Next.js Image component
    "^next/image$": "<rootDir>/src/tests/mock/__mocks__/next-image.js",
  },
  testMatch: [
    "**/__tests__/**/*.?([mc])[jt]s?(x)",
    "**/?(*.)+(spec|test).?([mc])[jt]s?(x)",
  ],
  // Add fetch polyfill for MSW
  setupFiles: ["<rootDir>/src/tests/setupTests.ts"],
  watchman: true,
};

export default createJestConfig(config);
