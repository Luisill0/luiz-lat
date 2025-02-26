/**
 * @param {number} min - Min number inclusive
 * @param {number} max - Max number inclusive
 * @returns {number} Number between min and max
 */
export const generateRandomInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
