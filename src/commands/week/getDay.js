export const getDay = (day) => {
  if (day instanceof Date === false)
    throw new Error("The param must be a date");

  const dayToStr = day.toString();
  return days[dayToStr.split(" ")[0]]();
};

const days = {
  Mon: () => {
    return "Monday";
  },
  Tue: () => {
    return "Tuesday";
  },
  Wed: () => {
    return "Wednesday";
  },
  Thu: () => {
    return "Thursday";
  },
  Fri: () => {
    return "Friday";
  },
  Sat: () => {
    return "Saturday";
  },
  Sun: () => {
    return "Sunday";
  },
};
