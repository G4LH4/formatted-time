import { roundTime } from "../index.js";

export const hrToMn = (hr) => {
  return roundTime(hr, hr * 60);
};

export const hrToMs = (hr) => {
  return roundTime(hr, hr * 3600000);
};

export const hrToSc = (hr) => {
  return roundTime(hr, hr * 3600);
};
