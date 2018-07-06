const MAX_LINE = 50;

const getPrefixLength = (current, total) => {
  return `${current}/${total} `.length;
};

export const messageSplitter = (postStr) => {
  let resultArray = [];
  if (postStr.length <= MAX_LINE) {
    resultArray.push(postStr);
    return resultArray;
  }

  let words = postStr.split(' ');
  let total = words.length;
  let numSplits = total;
  while (true) {
    let pointer = 0;
    let result = [];
    let currentLine = '';
    let counter = 0;
    while (pointer < total) {
      if (getPrefixLength(counter, numSplits) + currentLine.length + words[pointer].length < MAX_LINE) {
        currentLine += ` ${words[pointer]}`;
      } else {
        result.push(currentLine);
        currentLine = words[pointer];
      }
      pointer++;
    }
    if (currentLine) {
      result.push(currentLine);
    }
    if (result.length === numSplits) {
      resultArray = result;
      break;
    } else {
      numSplits = result.length;
    }
  }
  let hasError = false;
  resultArray = resultArray.map((line, index) => {
    const newLine = `${index + 1}/${resultArray.length} ${line}`;
    if (newLine.length > MAX_LINE) {
      hasError = true;
    }
    return newLine;
  });
  if (hasError) {
    resultArray = [];
  }
  return resultArray;
};
