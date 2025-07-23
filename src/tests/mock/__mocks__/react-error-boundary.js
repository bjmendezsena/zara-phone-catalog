// Mock for react-error-boundary to avoid ES module issues in Jest
import React from "react";

export const ErrorBoundary = ({ children, fallback, onError }) => {
  try {
    return children;
  } catch (error) {
    if (onError) onError(error);
    if (typeof fallback === "function") {
      return fallback(error);
    }
    return fallback || React.createElement("div", null, "Something went wrong");
  }
};

export const useErrorHandler = () => {
  return (error) => {
    throw error;
  };
};

export const withErrorBoundary = (Component, errorBoundaryConfig) => {
  const WrappedComponent = (props) => {
    return React.createElement(
      ErrorBoundary,
      errorBoundaryConfig,
      React.createElement(Component, props)
    );
  };
  WrappedComponent.displayName = `withErrorBoundary(${
    Component.displayName || Component.name
  })`;
  return WrappedComponent;
};

// Default export
const reactErrorBoundary = {
  ErrorBoundary,
  useErrorHandler,
  withErrorBoundary,
};

export default reactErrorBoundary;
