import { roundTime } from "../index.js";
import { checkInstance, checkCamp } from "../../components/handleParameters.js";

export const yrsToLuster = (yrs) => {
  checkInstance(yrs, Number);
  checkCamp(yrs);

  return roundTime(yrs / 5);
};

export const yrsToCentury = (yrs) => {
  checkInstance(yrs, Number);
  checkCamp(yrs);

  return roundTime(yrs / 100);
};

export const yrsToDogYrs = (yrs) => {
  checkInstance(yrs, Number);
  checkCamp(yrs);

  return roundTime(yrs * 7);
};
