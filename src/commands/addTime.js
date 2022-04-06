import {
  checkInstance,
  checkBothCamps,
} from "../components/handleParameters.js";

export const addTime = (date, add) => {
  checkInstance(date, Date);
  checkBothCamps(date, add);

  const getDate = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hour: date.getHours(),
    min: date.getMinutes(),
    sec: date.getSeconds(),
    ms: date.getMilliseconds(),
  };

  Object.entries(add).map((item) => {
    const [key, value] = item;

    getDate[key] = getDate[key] + value;
  });

  return getDate;
};
