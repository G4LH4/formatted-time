import { getMinMax } from "./index.js";

export const getMax = (arrayOfDates) => {
  return getMinMax(arrayOfDates, "max");
};
