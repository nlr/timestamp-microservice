const moment = require("moment");

module.exports = (dateString) => {
  const formats = [
    "MMMM D, YYYY",
    "MMMM D YYYY",
    "MMM D, YYYY",
    "MMM D YYYY",
    "X",
    "x",
  ];

  const time = moment(dateString, formats, true);

  if (!time.isValid()) {
    return { unix: null, natural: null };
  }

  return { unix: time.format("X"), natural: time.format("MMMM D, YYYY") };
};
