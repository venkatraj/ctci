import LinkedList from '../DataStructure/LinkedList'
import removeDuplicatesWithOutBuffer from './RemoveDuplicatesWithOutBuffer'

test('Remove Duplicates', () => {
  let myLinkedList = new LinkedList()
  myLinkedList.push_back(10)
  myLinkedList.push_back(10)
  myLinkedList.push_back(20)
  myLinkedList.push_back(20)
  myLinkedList.push_back(30)
  myLinkedList.push_back(30)
  myLinkedList.push_back(10)
  removeDuplicatesWithOutBuffer(myLinkedList)
  expect(myLinkedList.toString()).toBe('10 => 20 => 30')
})