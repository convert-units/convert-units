module.exports = function (expected, actual) {
  return Math.abs((expected - actual) / actual);
}
