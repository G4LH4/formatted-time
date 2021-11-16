function getTime(options) {
  const date = new Date();

  const todayDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  const time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  if (options === "getDate") {
    return todayDate;
  } else if (options === "getTime") {
    return time;
  } else if (options === "getTime&date") {
    return todayDate + " " + time;
  }
}

export default getTime;
