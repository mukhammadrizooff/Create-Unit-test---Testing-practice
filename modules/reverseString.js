function reverseString(str) {
  const split = str.split('');
  const reverse = split.reverse();
  const joinString = reverse.join('');

  return joinString;
}

module.exports = reverseString;
