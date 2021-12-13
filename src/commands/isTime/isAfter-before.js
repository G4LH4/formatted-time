import { isParam } from "../../components/index.js";

export const isAfter = (date1, date2) => {
  return isParam(date1, date2, "after");
};

export const isBefore = (date1, date2) => {
  return isParam(date1, date2, "before");
};