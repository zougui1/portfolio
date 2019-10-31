// test if the string start with 'function' ignoring whitespaces
const rStartWithFunction = /^\s*function/;
// test if the function has 2 arguments
const rSecondArgArrowFunc = /^\s*\((.+),\s*(.+)\)\s*=>/;
const rSecondArgEs5Func = /^\s*function\s*\((.+),\s*(.+)\)\s*\{/;

export const getSecondArgument = (func: string) => {
  let secondArg = '';

  const isArrowFunc = !rStartWithFunction.test(func);


  // get the second arg of the function
  if (isArrowFunc) {
    // get the match result of the callback
    const match = func.match(rSecondArgArrowFunc);

    if (Array.isArray(match)) {
      secondArg = match[2];
    }
  } else {
    // get the match result of the callback
    const match = func.match(rSecondArgEs5Func);

    if (Array.isArray(match)) {
      secondArg = match[3];
    }
  }

  return secondArg;
}
