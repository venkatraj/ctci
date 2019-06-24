const removeDuplicatesWithBuffer = (myLinkedList) => {
  let uniqueNodes = new Set()
  let previousNode = null
  let currentNode = myLinkedList.head
  while(currentNode !== null) {
    if (uniqueNodes.has(currentNode.data)) {
      previousNode.next = currentNode.next
    } else {
      uniqueNodes.add(currentNode.data)
      previousNode = currentNode
    }
    currentNode = currentNode.next
  }
}

export default removeDuplicatesWithBuffer