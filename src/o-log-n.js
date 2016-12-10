const findItemBinarySearch = (arr, match) => {
  let low = 0
  let high = arr.length - 1
  
  while (low <= high) {
    let mid = parseInt((low + high) / 2)
    let current = arr[mid]
    
    if (current > match) {
      high = mid - 1
    } else if (current < match) {
      low = mid + 1
    } else {
      return mid
    }
  }
  
  return -1
}
