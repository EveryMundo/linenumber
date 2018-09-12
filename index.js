function linenumber() {
  const
    err = new Error(''),
    { stack } = err,
    firstI = stack.indexOf('\n', stack.indexOf('\n') + 1),
    secndI = (stack + '\n').indexOf('\n', firstI + 1),
    line = stack.substring(firstI, secndI),
    firstMatch = line.match(/\s+\(?((?:\/|\w:)([^:]+):\d+)/);

  return firstMatch[1].split(':').pop();
}

module.exports = { linenumber };
