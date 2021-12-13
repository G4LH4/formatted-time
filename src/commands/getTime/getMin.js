import { getMinMax } from "./index.js";

export const getMin = (arrayOfDates) => {
  return getMinMax(arrayOfDates, "min");
};
