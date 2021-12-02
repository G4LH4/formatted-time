import {
  checkCamps,
  checkStringParam,
} from "../components/handleParameters.js";

import FORMATS from "../components/formats.js";

const formats = new FORMATS();
export const preciseTime = ({ type, format }) => {
  try {
    checkCamps(type, format);
    checkStringParam(type, format);

    return formats.easyFormats(format, type, switchOptions);
  } catch (error) {
    console.error(error);
  }
};

function switchOptions(format) {
  const date = new Date(format);
  return date;
}
