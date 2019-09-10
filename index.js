const path = require('path')
const findUp = require('find-up')

module.exports = async function () {
  let absolute_path = await findUp('dna', {cwd: path.dirname(process.cwd())})
  return path.dirname(absolute_path)
}
