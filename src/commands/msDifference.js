import { checkParams } from "../components/index.js";

export const msDifference = (dateLeft, dateRight) => {
  checkParams(dateLeft, dateRight);

  const time1 = dateLeft.getTime();
  const time2 = dateRight.getTime();

  if (time1 > time2) {
    return time1 - time2;
  }

  return time2 - time1;
};
