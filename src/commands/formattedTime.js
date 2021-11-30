import { time, utcTime } from "../date/index.js";
import {
  checkCamps,
  checkStringParam,
  checkOptions,
  checkFormats,
} from "../components/handleParameters.js";

export const getFormattedTime = ({ type, format }) => {
  checkCamps(type, format);
  checkStringParam(type, format);

  checkFormats(FORMATS, type);

  return FORMATS[type](format);
};

const switchOptions = (format, time, utcTime) => {
  return (format.startsWith("u") ? utcTime : time)[format];
};

const FORMATS = {
  arr: (format) => {
    const arrFormat = [];

    const options = switchOptions(format, time, utcTime);

    checkOptions(options, format);

    // Insert the data into the array
    arrFormat.push(options);

    return arrFormat;
  },
  str: (format) => {
    const options = switchOptions(format, time, utcTime);

    checkOptions(options, format);

    const formatToStr = options.toString();

    return formatToStr;
  },
  nmb: (format) => {
    const options = switchOptions(format, time, utcTime);

    checkOptions(options, format);

    return options;
  },
};
