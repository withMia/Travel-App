export function pageNum(arr, num) {
  let list = []
  let id = 1
  arr.forEach((item, index) => {
    const page = Math.floor(index / num)
    if (!list[page]) {
      list[page] = []
    }
    list[page].push(item)
    list[page].id = id
    id++
  })
  return list
}
