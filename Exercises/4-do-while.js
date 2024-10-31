'use strict';

const sum = (...args) => {
  let res = 0;
  let n = 0;
  if (args.length === 0) return res;
  do {
    res += args[n];
    n++;
  } while (n < args.length);
  return res;
};

module.exports = { sum };
