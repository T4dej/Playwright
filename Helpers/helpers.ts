export const randomTimeout = (min = 1000, max = 4000) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
