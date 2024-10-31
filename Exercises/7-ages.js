'use strict';

// const { interfaces } = require('mocha');

const ages = (persons) => {
  const result = {};
  for (const item in persons) {
    result[item] = persons[item].died - persons[item].born;
  }
  return result;

};
module.exports = { ages };
