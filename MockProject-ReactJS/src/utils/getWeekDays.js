import moment from "moment";
export const getWeekDays = () => {
  const date = moment().toString();
  // Start of the week (Monday) for the given date
  let startOfWeek = moment(date).startOf("isoWeek");

  // Array to hold the week days
  let weekDays = [];

  // Loop through the week
  for (let i = 0; i < 7; i++) {
    // Add each day to the array
    weekDays.push(startOfWeek.clone().add(i, "days").format("YYYY-MM-DD"));
  }

  return weekDays;
};
