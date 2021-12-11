import { checkInstance, checkCamp } from "../../components/handleParameters.js";

export const mnToHr = (mn) => {
  checkInstance(mn, Number);
  checkCamp(mn);

  return mn * 0.016667;
};

export const mnToSc = (mn) => {
  checkInstance(mn, Number);

  checkCamp(mn);

  return mn * 60;
};

export const mnToMs = (mn) => {
  checkInstance(mn, Number);
  checkCamp(mn);

  return mn * 60000;
};
