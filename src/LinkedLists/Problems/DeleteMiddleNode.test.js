import LinkedList from '../DataStructure/LinkedList'
import deleteMiddleNode from './DeleteMiddleNode'

test('Delete the middle node', () => {
  let myLinkedList = new LinkedList()
  myLinkedList.push_back(10)
  myLinkedList.push_back(20)
  myLinkedList.push_back(30)
  let nodeToDelete = myLinkedList.push_back(40)
  myLinkedList.push_back(50)
  myLinkedList.push_back(60)
  myLinkedList.push_back(70)
  myLinkedList.push_back(80)
  deleteMiddleNode(myLinkedList, nodeToDelete)
  expect(myLinkedList.toString()).toBe('10 => 20 => 30 => 50 => 60 => 70 => 80')
})