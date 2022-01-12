import { roundTime } from "../../components/index.js";

export const mnToHr = (mn) => {
  return roundTime(mn, mn * 0.016667);
};

export const mnToSc = (mn) => {
  return roundTime(mn, mn * 60);
};

export const mnToMs = (mn) => {
  return roundTime(mn, mn * 60000);
};
