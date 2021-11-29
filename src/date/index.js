const date = new Date();

export const time = {
  Y: date.getFullYear(),
  M: date.getMonth() + 1,
  D: date.getDate(),
  d: date.getDay(),
  H: date.getHours(),
  m: date.getMinutes(),
  s: date.getSeconds(),
  ms: date.getMilliseconds(),
};

export const utcTime = {
  uY: date.getUTCFullYear(),
  uM: date.getUTCMonth() + 1,
  uD: date.getUTCDate(),
  ud: date.getUTCDay(),
  uH: date.getUTCHours(),
  um: date.getUTCMinutes(),
  us: date.getUTCSeconds(),
  ums: date.getUTCMilliseconds(),
};
