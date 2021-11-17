import { checkArgs } from "./componentes/handleParameters.js";

export const getFormattedTime = (format) => {
  try {
    const date = new Date(),
      time = {
        Y: date.getFullYear(),
        M: date.getMonth() + 1,
        D: date.getDate(),
        d: date.getDay(),
        H: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
        ms: date.getMilliseconds(),
      };

    checkArgs(format, 1);
    const splitMsg = format.split("");
    const result = splitMsg.map((v) => time[v] ?? v);
    const joinStr = result.join("");

    return joinStr;
  } catch (error) {
    console.log(error);
  }
};
