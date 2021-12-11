// Check if the date given already happened
import { checkInstance } from "../../components/handleParameters.js";

export const alreadyHappened = (date) => {
  checkInstance(date, Date);

  console.log(date);
  const today = new Date();

  if (today < date) {
    return false;
  }
  return true;
  // return date <= today;
};
