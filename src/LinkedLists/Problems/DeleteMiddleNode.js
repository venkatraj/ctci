const deleteMiddleNode = (linkedList, nodeToDelete) => {
  if (nodeToDelete.data == linkedList.head.data || nodeToDelete.data == linkedList.tail.data) {
    return
  }
  let currentNode = linkedList.head
  while(currentNode.next !== null) {
    if (currentNode.next.data == nodeToDelete.data) {
      currentNode.next = currentNode.next.next
      break
    }
    currentNode = currentNode.next
  }
}

export default deleteMiddleNode