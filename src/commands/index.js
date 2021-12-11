import { checkCamp } from "../components/handleParameters.js";

export const roundTime = (time, operation) => {
  const isNumber = Number.isInteger(time);

  if (isNumber === false) throw new Error("The param must be a number");

  checkCamp(time);

  const nm = operation;
  return parseFloat(nm.toFixed(1));
};
