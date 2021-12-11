import { roundTime } from "../index.js";

export const daysToWeeks = (days) => {
  return roundTime(days / 7);
};

export const daysToYear = (days) => {
  return roundTime(days / 360);
};
