export function easierDate(options) {
  const date = new Date();

  const todayDate = `${
    date.getMonth() + 1
  } / ${date.getDate()} / ${date.getFullYear()}`;

  const time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

  switch (options) {
    case "getDate":
      return todayDate;
    case "getTime":
      return time;
    case "getTime&date":
      return `${time} ${todayDate}`;
  }
}
