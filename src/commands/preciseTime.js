import {
  checkCamps,
  checkOptions,
  checkStringParam,
  // checkOptions,
} from "../components/handleParameters.js";

import FORMATS from "../components/formats.js";

//TODO: HANDLE ERRORS
const formats = new FORMATS();
export const preciseTime = ({ type, format }) => {
  checkCamps(type, format);
  checkStringParam(type, format);

  const convertedFormat = formats.easyFormats(
    format,
    type,
    switchOptions,
    checkOptions
  );

  return convertedFormat;
};

function switchOptions(format) {
  const date = new Date(format);
  return date;
}
