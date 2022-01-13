import { checkCamp } from "../../components/handleParameters.js";

export const toDate = (date) => {
  checkCamp(date);

  return new Date(date);
};
