import { roundTime } from "../index.js";

export const msToSc = (ms) => {
  return roundTime(ms, ms * 0.001);
};

export const msToMinutes = (ms) => {
  return roundTime(ms * 0.0000166667);
};
