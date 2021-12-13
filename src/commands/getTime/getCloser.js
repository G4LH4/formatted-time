import {
  checkInstance,
  checkBothCamps,
} from "../../components/handleParameters.js";

export const getCloser = (arrayOfDates, dateToGo) => {
  checkBothCamps(arrayOfDates, dateToGo);
  checkInstance(arrayOfDates, Array);
  checkInstance(dateToGo, String);

  const res = arrayOfDates
    .map((date) => {
      const timeLeft = date - dateToGo;
      return { date, timeLeft };
    })
    .sort((a, b) => b.timeLeft - a.timeLeft);

  return res[0];
};
