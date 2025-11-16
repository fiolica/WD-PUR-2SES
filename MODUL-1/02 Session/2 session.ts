console.log("Github")

console.log("change")

/**
 * This function takes a date string in the format "YYYY-MM-DD" and converts it into a string in the format "DD MMM YYYY".
 * @param {string} date - The date to be converted.
 * @returns {string} - The converted date string.
 */
function convertDate(date: string): string {
  const newDate = new Date(date);
  // use toDateString() to convert the date to a string in the format "DD MMM YYYY"
  return newDate.toDateString();
}
