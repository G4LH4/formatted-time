export const isWeekend = (day) => {
  if (day instanceof Date === false)
    throw new Error("The param must be a date");

  const dayToStr = day.toString();

  const getDay = dayToStr.split(" ")[0];

  if (getDay === "Sat" || getDay === "Sun") {
    return true;
  } else {
    return false;
  }
};
