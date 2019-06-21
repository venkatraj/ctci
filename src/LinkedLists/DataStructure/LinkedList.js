import Node from './Node'

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
  isEmpty() {
    return !this.length
  }

  append(data) {
    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    currentNode.next = new Node(data)
    this.length++
  }
}

export default LinkedList