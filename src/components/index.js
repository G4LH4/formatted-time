import {
  checkCamp,
  checkInstance,
  checkBothCamps,
} from "./handleParameters.js";

export const roundTime = (time, operation) => {
  const isNumber = Number.isInteger(time);

  if (!isNumber) throw new Error("The param must be a number");

  checkCamp(time);

  const nm = operation;
  return parseFloat(nm.toFixed(1));
};

export const checkParams = (date1, date2) => {
  checkBothCamps(date1, date2);

  // Check instances
  checkInstance(date1, Date);
  checkInstance(date2, Date);
};

export const isParam = (date1, date2, time) => {
  checkParams(date1, date2);

  const dateNow = new Date();

  const dates = [];

  dates.push(dateNow - date1);
  dates.push(dateNow - date2);

  const max = Math.max(...dates);

  const positionOfMax = dates.indexOf(max);

  return checkTime[time](positionOfMax);
};

const checkTime = {
  after: (positionOfMax) => {
    if (positionOfMax === 1) {
      return true;
    }

    return false;
  },
  before: (positionOfMax) => {
    if (positionOfMax === 1) {
      return false;
    }

    return true;
  },
};
