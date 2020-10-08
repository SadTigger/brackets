module.exports = function check(str, bracketsConfig) {
  let bracketsPatterns = bracketsConfig.map(el => el.join(''));
  let position = 0;
  while (position < bracketsConfig.length ) {
      let currentBracket = bracketsPatterns[position];
      if (str.includes(currentBracket)) {
          str = str.replace(currentBracket,'');
          position = 0;
      } else {
          position++;
      }
  }
  return str.length === 0;
};
