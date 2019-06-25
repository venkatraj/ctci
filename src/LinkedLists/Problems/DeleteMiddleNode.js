const deleteMiddleNode = (linkedList, nodeToDelete) => {
  if (nodeToDelete === null || nodeToDelete.next === null) {
    return false
  }
  let nextNode = nodeToDelete.next
  nodeToDelete.data = nextNode.data
  nodeToDelete.next = nextNode.next
  return true
}

export default deleteMiddleNode