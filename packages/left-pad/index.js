function leftPad(str, len, ch) {
  let _str = `${str}`;

  return _str.padStart(len, ch);
}

module.exports = leftPad;
