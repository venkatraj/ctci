import Node from './Node'

class LinkedList {
  constructor() {
    this._head = null
    this._tail = null
    this._length = 0
  }

  size() {
    return this._length
  }
  
  isEmpty() {
    return !this._length
  }

  push_front(data) {
    if (!this.isEmpty()) {
      let currentNode = this._head
      this._head = new Node(data)
      this._head.next = currentNode
    } else {
      this._head = new Node(data)
      this._tail = this._head
    }
    this._length++
  }

  front() {
    return this._head.data
  }

  push_back(data) {
    if (!this.isEmpty()) {
      let currentTail = this._tail
      this._tail = new Node(data)
      currentTail.next = this._tail
    } else {
      this._head = new Node(data)
      this._tail = this._head
    }
    this._length++
  }

  back() {
    return this._tail.data
  }

  toString() {
    let currentNode = this._head
    let output = ''
    while (currentNode.next !== null) {
      output += `${currentNode.data} => `
      currentNode = currentNode.next
    }
    output += `${currentNode.data} => `
    return output.slice(0, output.length - 4)
  }
}

export default LinkedList