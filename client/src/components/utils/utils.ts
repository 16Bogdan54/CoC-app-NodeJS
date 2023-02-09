export const getIconURL = (unitName: string): string => {
  return `https://clashofclans.js.org/assets/${unitName.replace(
    / /gi,
    "_"
  )}.png`;
};

export const renderStars = (numberOfStars: number): string => {
  return "⭐".repeat(numberOfStars);
};
