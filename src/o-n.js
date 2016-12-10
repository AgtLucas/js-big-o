const findItem = (arr, match) => {
  for (let value of arr) {
    if (value === match) return true
  }
  
  return false
}
