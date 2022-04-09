import { roundTime } from "../../components/index.js";

export const msToSc = (ms) => {
  return roundTime(ms, ms * 0.001);
};

export const msToMn = (ms) => {
  return roundTime(ms, ms * 1.6667e-5);
};
