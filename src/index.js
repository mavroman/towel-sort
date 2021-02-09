
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return ((matrix[0]+',' + matrix[1].reverse() + ',' + matrix[2]).split(',')).map(e => parseFloat(e))
}
