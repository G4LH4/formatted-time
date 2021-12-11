import { roundTime } from "../index.js";

export const yrsToLuster = (yrs) => {
  return roundTime(yrs / 5);
};

export const yrsToCentury = (yrs) => {
  return roundTime(yrs / 100);
};

export const yrsToDogYrs = (yrs) => {
  return roundTime(yrs * 7);
};
