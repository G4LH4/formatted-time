import { checkType } from "../../components/handleParameters.js";

export const isDate = (date) => {
  if (checkType(date) === null) throw new Error("You must insert a value");

  if (date instanceof Date) {
    return true;
  } else {
    return false;
  }
};
