import { roundTime } from "../index.js";
import { checkInstance, checkCamp } from "../../components/handleParameters.js";

export const daysToWeeks = (days) => {
  checkInstance(days, Number);
  checkCamp(days);

  return roundTime(days / 7);
};

export const daysToYear = (days) => {
  checkInstance(days, Number);
  checkCamp(days);

  return roundTime(days / 360);
};
