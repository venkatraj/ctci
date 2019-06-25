import LinkedList from '../DataStructure/LinkedList'
import deleteMiddleNode from './DeleteMiddleNode'

test('Return Kth to the last', () => {
  let myLinkedList = new LinkedList()
  myLinkedList.push_back(10)
  myLinkedList.push_back(20)
  myLinkedList.push_back(30)
  let nodeToDelete = myLinkedList.push_back(40)
  myLinkedList.push_back(50)
  myLinkedList.push_back(60)
  myLinkedList.push_back(70)
  myLinkedList.push_back(80)
  let frontNode = myLinkedList.front()
  let backNode = myLinkedList.back()
  deleteMiddleNode(myLinkedList, nodeToDelete)
  expect(myLinkedList.toString()).toBe('10 => 20 => 30 => 50 => 60 => 70 => 80')
  deleteMiddleNode(myLinkedList, frontNode)
  expect(myLinkedList.toString()).toBe('10 => 20 => 30 => 50 => 60 => 70 => 80')
  deleteMiddleNode(myLinkedList, backNode)
  expect(myLinkedList.toString()).toBe('10 => 20 => 30 => 50 => 60 => 70 => 80')
})