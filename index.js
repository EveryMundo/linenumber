function linenumber() {
  const
    err = new Error(''),
    { stack } = err,
    firstI = stack.indexOf('\n', stack.indexOf('\n') + 1),
    secndI = (stack + '\n').indexOf('\n', firstI + 1),
    firstMatch = stack.substring(firstI, secndI).match(/\s+\(?(\/([^:]+):\d+)/);

  return firstMatch[1].split(':').pop();
}

module.exports = { linenumber };
