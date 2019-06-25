import LinkedList from '../DataStructure/LinkedList'
import returnKthToTheLast from './ReturnKthToTheLast'

test('Return Kth to the last', () => {
  let myLinkedList = new LinkedList()
  myLinkedList.push_back(10)
  myLinkedList.push_back(20)
  myLinkedList.push_back(30)
  myLinkedList.push_back(40)
  myLinkedList.push_back(50)
  myLinkedList.push_back(60)
  myLinkedList.push_back(70)
  myLinkedList.push_back(80)
  expect(returnKthToTheLast(myLinkedList, 1)).toBe(80)
  expect(returnKthToTheLast(myLinkedList, 3)).toBe(60)
  expect(returnKthToTheLast(myLinkedList, 5)).toBe(40)
})