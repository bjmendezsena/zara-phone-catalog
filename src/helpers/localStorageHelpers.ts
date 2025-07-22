import { isClientSide, isValidJSON } from "@/utils";

export const getItem = (key: string): string | null => {
  if (!isClientSide()) return null;
  return localStorage.getItem(key);
};

export const getObject = <T>(key: string): T | null => {
  const value = getItem(key);

  if (!isValidJSON(value)) {
    console.warn(`Invalid JSON for key: ${key}`);
    return null;
  }
  return JSON.parse(value) as T;
};

export const setItem = (key: string, value: string): void => {
  if (!isClientSide()) return;
  localStorage.setItem(key, value);
};

export const removeItem = (key: string): void => {
  if (!isClientSide()) return;
  localStorage.removeItem(key);
};

export const clearStorage = (): void => {
  if (!isClientSide()) return;
  localStorage.clear();
};
