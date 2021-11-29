import {
  checkArgs,
  checkTypeString,
  checkExistenceParam,
} from "../components/handleParameters.js";

import { time, utcTime } from "../date/index.js";

export const getFormattedTime = (format) => {
  // Check if the format its empty
  checkArgs(format, 1);
  // Check if the format its a string
  checkTypeString(format);

  //Split the format to get the first word and the second one
  const splitArr = format.split(" ");

  // Check if there is a second word and the first one is "arr"
  // Convert the format to array

  if (splitArr[1] && splitArr[0] === "arr") {
    checkExistenceParam(time, utcTime, splitArr[1]);

    const arrFormat = [];

    //
    const options = switchOptions(splitArr[1], time, utcTime);

    // Insert the data into the array
    arrFormat.push(options);

    return arrFormat;
  }

  // Check if there is a second word and the first one is "str"
  // Convert the format to string

  if (splitArr[1] && splitArr[0] === "str") {
    checkExistenceParam(time, utcTime, splitArr[1]);

    const options = switchOptions(splitArr[1], time, utcTime);

    const formatToStr = options.toString();

    return formatToStr;
  }
  // Check if the format exist in the obj of dates (../date/index.js)
  checkExistenceParam(time, utcTime, format);
  // Return the place of the object where the format exists
  return switchOptions(format, time, utcTime);
};

// Runs through all the possible cases
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
