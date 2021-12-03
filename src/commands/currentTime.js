import { time, utcTime } from "../date/index.js";
import {
  checkCamps,
  checkStringParam,
  checkOptions,
} from "../components/handleParameters.js";

import FORMATS from "../components/formats.js";

const formats = new FORMATS();

//TODO: HANDLE ERRORS

export const currentTime = ({ type, format }) => {
  checkCamps(type, format);
  checkStringParam(type, format);

  return formats.complexFormats(
    format,
    type,
    time,
    utcTime,
    switchOptions,
    checkOptions
  );
};

function switchOptions(format, time, utcTime) {
  return (format.startsWith("u") ? utcTime : time)[format];
}
