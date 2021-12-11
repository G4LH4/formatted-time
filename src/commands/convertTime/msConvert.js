import { checkInstance, checkCamp } from "../../components/handleParameters.js";

export const msToSc = (ms) => {
  checkInstance(ms, Number);
  checkCamp(ms);

  return ms * 0.001;
};

export const msToMinutes = (ms) => {
  checkInstance(ms, Number);
  checkCamp(ms);

  return ms * 0.0000166667;
};
