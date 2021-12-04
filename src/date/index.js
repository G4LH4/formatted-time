const date = new Date();

export const time = {
  currentTime: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  today: `${date.getFullYear()} / ${date.getMonth()} / ${date.getDate()}`,
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
  uCurrentTime: `${date.getUtcHours()}:${date.getUTCMinutes()}:${date.getUtcSeconds()}`,
  uToday: `${date.getUTCFullYear} / ${date.getUTCMonth} / ${date.getUTCDate()}`,
  uY: date.getUTCFullYear(),
  uM: date.getUTCMonth() + 1,
  uD: date.getUTCDate(),
  ud: date.getUTCDay(),
  uH: date.getUTCHours(),
  um: date.getUTCMinutes(),
  us: date.getUTCSeconds(),
  ums: date.getUTCMilliseconds(),
};
