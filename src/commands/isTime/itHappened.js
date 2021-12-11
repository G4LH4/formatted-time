// Check if the date given already happened
import { checkInstance } from "../../components/handleParameters.js";

export const alreadyHappened = (date) => {
  checkInstance(date, Date);

  const today = new Date();

  return date > today;
};
