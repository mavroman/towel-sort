
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) {
    return []
  } else {
    
  }
  for(let i = 0; i < matrix.length; i++) {
    if(i % 2) matrix[i].reverse()
  }
  let x = [].concat(...matrix)
  
 return x
}
