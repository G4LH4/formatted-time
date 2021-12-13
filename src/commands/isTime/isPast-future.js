import { checkInstance } from "../../components/handleParameters.js";

const isFutureOrPast = (date, isTime) => {
  checkInstance(date, Date);

  const dateNow = new Date();

  return checkTime[isTime](date, dateNow);
};

const checkTime = {
  past: (date, dateNow) => {
    if (date < dateNow) {
      return true;
    }

    return false;
  },
  future: (date, dateNow) => {
    if (date < dateNow) {
      return false;
    }

    return true;
  },
};

export const isPast = (date) => {
  return isFutureOrPast(date, "past");
};

export const isFuture = (date) => {
  return isFutureOrPast(date, "future");
};
