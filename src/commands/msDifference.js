import {
  checkBothCamps,
  checkInstance,
} from "../components/handleParameters.js";

export const msDifference = (dateLeft, dateRight) => {
  checkBothCamps(dateLeft, dateRight);

  checkInstance(dateLeft, Date);
  checkInstance(dateLeft, Date);

  const time1 = dateLeft.getTime();
  const time2 = dateRight.getTime();

  if (time1 > time2) {
    return time1 - time2;
  }

  return time2 - time1;
};
