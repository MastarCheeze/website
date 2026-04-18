export function formatDate(date: Date) {
  const day = date.getDate();

  const ordinal = (() => {
    if (Math.floor(day / 10) === 1) {
      return "th";
    } else if (day % 10 === 1) {
      return "st";
    } else if (day % 10 === 2) {
      return "nd";
    } else if (day % 10 === 3) {
      return "rd";
    } else {
      return "th";
    }
  })();

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][date.getMonth()];

  const year = date.getFullYear();

  return `${day}${ordinal} ${month} ${year}`;
}