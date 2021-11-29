import {
  checkArgs,
  checkTypeString,
  checkExistenceParam,
} from "../components/handleParameters.js";

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
    ms: date.getMilliseconds(),
  };

  const utcTime = {
    uY: date.getUTCFullYear(),
    uM: date.getUTCMonth() + 1,
    uD: date.getUTCDate(),
    ud: date.getUTCDay(),
    uH: date.getUTCHours(),
    um: date.getUTCMinutes(),
    us: date.getUTCSeconds(),
    ums: date.getUTCMilliseconds(),
  };

  const splitArr = format.split(" ");

  if (splitArr[1] && splitArr[0] === "arr") {
    checkExistenceParam(time, utcTime, splitArr[1]);

    const arrFormat = [];

    const options = switchOptions(splitArr[1], time, utcTime);

    const insertDate = arrFormat.push(options);

    return arrFormat;
  }

  checkExistenceParam(time, utcTime, format);

  return switchOptions(format, time, utcTime);
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
