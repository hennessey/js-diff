function stringToCharArray(str) {
  return str.split('');
}

function jsdiff(a, b) {
  if (typeof a !== 'string') {
    return new Error('First argument needs to be a string');
  }

  if (typeof b !== 'string') {
    return new Error('second argument needs to be a string');
  }

  const aChars = stringToCharArray(a);
  const bChars = stringToCharArray(b);

  let changeMap = [];
  if (aChars.length > bChars.length) {
    changeMap = aChars.map((aChar, i) => [aChar, bChars[i]]);
  } else {
    changeMap = bChars.map((bChar, i) => [aChars[i], bChar]);
  }

  return changeMap;
}

module.exports = jsdiff;
