function comparePowers() {}

function digitalRoot(num) {
  return num > 9
    ? digitalRoot(
        num
          .toString()
          .split("")
          .map(Number)
          .reduce((a, c) => a + c, 0)
      )
    : num;
}

function searchSubstr() {}

function makeLooper() {}

function stripComments() {}

module.exports = {
  comparePowers,
  digitalRoot,
  searchSubstr,
  makeLooper,
  stripComments
};
