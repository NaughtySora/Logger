'use strict';

const { colors, dye } = require("./palette.js");
const { blue, green, red, yellow } = colors;
const intl = new Intl.DateTimeFormat(undefined,
  {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

const formatDate = (date = new Date()) => intl.format(date);
const date = () => dye(blue, formatDate());

const logger = Object.assign({}, console, {
  log(...logs) {
    console.log(dye(green, "[log]:"), date(), ...logs);
  },
  error(...logs) {
    console.log(dye(red, "[error]:"), date(), ...logs);
  },
  warn(...logs) {
    console.log(dye(yellow, "[warn]:"), date(), ...logs);
  },
  info(...logs) {
    console.log(dye(blue, "[info]:"), date(), ...logs);
  },
});

module.exports = Object.freeze(logger);
