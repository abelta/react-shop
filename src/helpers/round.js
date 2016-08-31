// Rounds a number down to a specified precision.
const round = function (number, precision) {
  const factor = Math.pow(10, precision)
  const tempNumber = number * factor
  const roundedTempNumber = Math.round(tempNumber)
  return roundedTempNumber / factor
}

export default round
