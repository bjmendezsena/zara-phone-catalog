export const isClientSide = (): boolean => {
  return typeof window !== "undefined";
};

export const getValue = <T extends Record<string, unknown>>(
  source: T,
  key: string
): unknown => {
  const arrKeys = key.split(".") as string[];
  const firstKey = arrKeys.shift() || "";
  const newSource = source[firstKey as keyof typeof source];

  if (arrKeys.length > 0 && newSource && typeof newSource === "object") {
    return getValue(newSource as Record<string, unknown>, arrKeys.join("."));
  }

  return newSource;
};
