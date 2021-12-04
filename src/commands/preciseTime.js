import {
  checkCamps,
  checkOptions,
  checkStringParam,
  checkType,
  // checkOptions,
} from "../components/handleParameters.js";

import FORMATS from "../components/formats.js";

const formats = new FORMATS();
export const preciseTime = ({ type, format }) => {
  checkCamps(format);

  if (checkType(type) === null) {
    type = "str";
  }

  checkStringParam(type, format);

  return formats.easyFormats(format, type, switchOptions, checkOptions);
};

function switchOptions(format) {
  const date = new Date(format);
  return date;
}
