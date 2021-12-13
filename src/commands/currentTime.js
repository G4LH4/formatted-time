import { time, utcTime } from "../dates-json/index.js";
import {
  checkFormat,
  checkStringParam,
  checkOptions,
  checkType,
} from "../components/handleParameters.js";

import FORMATS from "../components/formats.js";

const formats = new FORMATS();

export const currentTime = ({ type, format }) => {
  checkFormat(format);

  if (!checkType(type)) type = "str";

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
  return format.startsWith("u") ? utcTime : time[format];
}
