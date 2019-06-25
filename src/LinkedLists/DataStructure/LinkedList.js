import Node from './Node'

class LinkedList {
  constructor() {
    this._head = null
    this._tail = null
    this._length = 0
  }

  get head() {
    return this._head
  }

  get tail() {
    return this._tail
  }

  size() {
    return this._length
  }
  
  isEmpty() {
    return !this._length
  }

  push_front(data) {
    let newNode = new Node(data)
    if (!this.isEmpty()) {
      let currentNode = this._head      
      this._head = newNode
      this._head.next = currentNode
    } else {
      this._head = newNode
      this._tail = this._head
    }
    this._length++
    return newNode
  }

  front() {
    return this._head.data
  }

  push_back(data) {
    let newNode = new Node(data)
    if (!this.isEmpty()) {
      let currentTail = this._tail
      this._tail = newNode
      currentTail.next = this._tail
    } else {
      this._head = newNode
      this._tail = this._head
    }
    this._length++
    return newNode
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