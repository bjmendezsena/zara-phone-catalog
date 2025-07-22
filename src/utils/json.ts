export const isValidJSON = (
  value: unknown
): value is Record<string, unknown> => {
  if (typeof value !== "string") return false;
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
};
