import {
  checkFormat,
  checkOptions,
  checkStringParam,
  checkType,
} from "../components/handleParameters.js";

import FORMATS from "../components/formats.js";

const formats = new FORMATS();
export const preciseTime = ({ type, format }) => {
  checkFormat(format);

  if (!checkType(type)) {
    type = "str";
  }

  checkStringParam(type, format);

  return formats.easyFormats(format, type, switchOptions, checkOptions);
};

function switchOptions(format) {
  const date = new Date(format);
  return date;
}
