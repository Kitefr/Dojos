function timeMath(t1, operator, t2) {
  const time1 = getTimeInSeconds(t1);
  const time2 = getTimeInSeconds(t2);
  let result = "";

  if (operator === "+") {
    result = time1 + time2;
  } else {
    result = time1 - time2;
    if (Math.sign(result, "-")) {
      result += 86400;
    }
  }

  return secondToTime(result);
}

function getTimeInSeconds(str) {
  const parts = str.split(":");
  return (
    parseInt(parts[0] * 3600) + parseInt(parts[1] * 60) + parseInt(parts[2])
  );
}

function secondToTime(secs) {
  secs = Math.round(secs);
  const hours = Math.floor(secs / 3600)
    .toString()
    .padStart(2, "0");

  const divisor_for_minutes = secs % (60 * 60);
  const minutes = Math.floor(divisor_for_minutes / 60)
    .toString()
    .padStart(2, "0");

  const divisor_for_seconds = divisor_for_minutes % 60;
  const seconds = Math.ceil(divisor_for_seconds)
    .toString()
    .padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

module.exports = timeMath;
