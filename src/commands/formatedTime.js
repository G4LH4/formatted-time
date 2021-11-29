import { time, utcTime } from "../date/index.js";
import { checkExistenceParam } from "../components/handleParameters.js";

export const getFormattedTime = ({ type, format }) => {
  if (!format || !type) {
    throw new Error("Both camps are required");
  }
  if (typeof type !== "string" || typeof format !== "string") {
    throw new Error("Only strings are supported");
  }

  return FORMATS[type](format);
};

const switchOptions = (format, time, utcTime) => {
  switch (format) {
    case "Y":
      return time["Y"];
    case "M":
      return time["M"];
    case "D":
      return time["D"];
    case "d":
      return time["d"];
    case "H":
      return time["H"];
    case "m":
      return time["m"];
    case "s":
      return time["s"];
    case "ms":
      return time["ms"];
    case "uY":
      return utcTime["uY"];
    case "uM":
      return utcTime["uM"];
    case "uD":
      return utcTime["uD"];
    case "ud":
      return utcTime["ud"];
    case "uH":
      return utcTime["uH"];
    case "um":
      return utcTime["um"];
    case "us":
      return utcTime["us"];
    case "ums":
      return utcTime["ums"];
  }
};

const FORMATS = {
  arr: (format) => {
    const arrFormat = [];

    const options = switchOptions(format, time, utcTime);

    if (options === undefined) throw new Error(`${format} is not supported`);

    // Insert the data into the array
    arrFormat.push(options);

    return arrFormat;
  },
  str: (format) => {
    const options = switchOptions(format, time, utcTime);

    if (options === undefined) throw new Error(`${format} is not supported`);

    const formatToStr = options.toString();

    return formatToStr;
  },
  nmb: (format) => {
    const options = switchOptions(format, time, utcTime);

    if (options === undefined) throw new Error(`${format} is not supported`);

    return options;
  },
};
