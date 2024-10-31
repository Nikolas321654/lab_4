'use strict';

const sum = (...args) => args.reduce((sum, num) => num + sum, 0);

module.exports = { sum };
