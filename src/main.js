function easierDate(options) {
  const date = new Date();

  const todayDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  const time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  if (options.date === "getDate") {
    return todayDate;
  } else if (options.date === "getTime") {
    return time;
  } else if (options.date === "getTime&date") {
    return todayDate + " " + time;
  }
}

const _easierDate = easierDate;
export { _easierDate as easierDate };
