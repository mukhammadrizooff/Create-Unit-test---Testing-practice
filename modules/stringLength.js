function stringLength(str) {
  const string = str.length;

  if (string === 0) {
    return 'string is empty';
  }
  if (string > 10) {
    return 'string is too long';
  } return string;
}

module.exports = stringLength;
