export const date = (value: string | Date): string => {
  const dateVal = new Date(value);
  return dateVal.toLocaleDateString('en-GB');
};
