export const formatMXN = (val: number): string => {
  if (isNaN(val) || val === undefined || val === null) return '$0.00 MXN';
  return `$${val.toFixed(2)} MXN`;
};
