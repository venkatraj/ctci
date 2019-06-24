import LinkedList from './LinkedList'

test('Creates a linked list', () => {
  let myLinkedList = new LinkedList()
  expect(myLinkedList).toBeInstanceOf(LinkedList)
})

test('Size of newly created linked list', () => {
  let myLinkedList = new LinkedList()
  expect(myLinkedList.size()).toBe(0)
})

test('Add node to back', () => {
  let myLinkedList = new LinkedList()
  myLinkedList.push_back(20)
  expect(myLinkedList.size()).toBe(1)
})

test('Add node to front', () => {
  let myLinkedList = new LinkedList()
  myLinkedList.push_back(20)
  expect(myLinkedList.size()).toBe(1)
})

test('Retrieving front node', () => {
  let myLinkedList = new LinkedList()
  myLinkedList.push_front(10)
  myLinkedList.push_back(20)
  expect(myLinkedList.front()).toBe(10)
})