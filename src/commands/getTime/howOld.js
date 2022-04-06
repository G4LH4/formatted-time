// TODO: verify the inexistent camps;

export const howOld = ({ year }, { month }, { day }) => {
  const date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();

  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (day > d2) {
    d2 = d2 + months[m2 - 1];
    m2 = m2 - 1;
  }
  if (month > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  const d = d2 - day;
  const m = m2 - month;
  const y = y2 - year;

  return `It is ${y} year ${m} month ${d} day years old`;
};

howOld({ year: 2005 }, { month: 8 }, { day: 23 });
