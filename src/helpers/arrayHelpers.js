export const updateItemInList = (list, predicate, updateItem) => {
  const newList = list.slice()
  const item = newList.find(predicate)
  const indexOfItem = newList.indexOf(item)
  newList.splice(indexOfItem, 1, updateItem(item))
  return newList
}
