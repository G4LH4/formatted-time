import { roundTime } from "../../components/index";

export const yrsToLuster = (yrs) => {
  return roundTime(yrs, yrs / 5);
};

export const yrsToCentury = (yrs) => {
  return roundTime(yrs, yrs / 100);
};

export const yrsToDogYrs = (yrs) => {
  return roundTime(yrs, yrs * 7);
};
