function linenumber () {
  const err = new Error('')
  const { stack } = err
  const firstI = stack.indexOf('\n', stack.indexOf('\n') + 1)
  const secndI = (stack + '\n').indexOf('\n', firstI + 1)
  const line = stack.substring(firstI, secndI)
  const firstMatch = line.match(/\s+\(?((?:\/|\w:)([^:]+):\d+)/)

  return firstMatch[1].split(':').pop()
}

module.exports = { linenumber }
