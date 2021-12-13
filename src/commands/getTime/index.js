import {
  checkBothCamps,
  checkInstance,
} from "../../components/handleParameters.js";

export const getMinMax = (arrayOfDates, type) => {
  checkInstance(arrayOfDates, Array);
  checkInstance(type, String);

  checkBothCamps(arrayOfDates, type);

  const res = arrayOfDates.map((date) => {
    return { date };
  });

  if (!type) throw new Error("You must specify if its min or max ");

  return typeOfTime[type](res);
};

const typeOfTime = {
  max: (res) => {
    res.sort((a, b) => b.date - a.date);
    return res[0];
  },
  min: (res) => {
    res.sort((a, b) => a.date - b.date);
    return res[0];
  },
};

console.log(
  getMinMax(
    [new Date(2020, 1, 2), new Date(2022, 1, 2), new Date(2021, 1, 2)],
    "max"
  )
);
