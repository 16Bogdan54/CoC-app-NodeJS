export const getIconURL = (unitName: string): string => {
  return `https://clashofclans.js.org/assets/${unitName.replace(
    / /gi,
    "_"
  )}.png`;
};
