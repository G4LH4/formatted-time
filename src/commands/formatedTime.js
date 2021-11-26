import { checkArgs, checkTypeString } from "../componentes/handleParameters.js";

export const getFormattedTime = (format) => {
  checkArgs(format, 1);
  checkTypeString(format);

  const date = new Date();
  const time = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    d: date.getDay(),
    H: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  };

  const splitMsg = format.split("");
  const result = splitMsg.map((l) => time[l] ?? l);
  const joinStr = result.join("");

  return joinStr;
};
