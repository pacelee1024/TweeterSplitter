const MAX_LINE = 50;

const getPrefixLength = (current, total) => {
  return `${current}/${total} `.length;
}

export const messageSplitter = (str) => {
  let finalResult = [];
  if (str.length <= MAX_LINE) {
    finalResult.push(str);
    return finalResult;
  }

  let words = str.split(' ');
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
      finalResult = result;
      break;
    } else {
      numSplits = result.length;
    }
  }
  let hasError = false;
  finalResult = finalResult.map((line, index) => {
    const newLine = `${index + 1}/${finalResult.length} ${line}`;
    if (newLine.length > MAX_LINE) {
      hasError = true;
    }
    return newLine;
  })
  if (hasError) {
    finalResult = [];
  }
  return finalResult;
}
