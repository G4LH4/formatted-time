export const getFormattedTime = (format) => {
  const today = new Date(),
    time = {
      Y: today.getFullYear(),
      M: today.getMonth() + 1,
      D: today.getDate(),
      d: today.getDay(),
      H: today.getHours(),
      m: today.getMinutes(),
      S: today.getSeconds(),
    };

  const splitMsg = format.split("");
  const result = splitMsg.map((v) => time[v] || v);
  const joinStr = result.join("");

  return joinStr;
};
