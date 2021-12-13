import { checkInstance } from "../../components/handleParameters.js";

const isFutureOrPast = (date, isTime) => {
  checkInstance(date, Date);

  const dateNow = new Date();

  if (date < dateNow && isTime === "past") {
    return true;
  } else if (date > dateNow && isTime === "past") {
    return false;
  }

  if (date < dateNow && isTime === "future") {
    return false;
  } else if (date > dateNow && isTime === "future") {
    return true;
  }
};

export const isPast = (date) => {
  return isFutureOrPast(date, "past");
};

export const isFuture = (date) => {
  return isFutureOrPast(date, "future");
};
