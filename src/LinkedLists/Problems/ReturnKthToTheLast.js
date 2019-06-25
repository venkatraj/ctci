const returnKthToTheLast = (myLinkedList, k) => {
  let p1 = myLinkedList.head
  let p2 = p1
  for (let i = 1; i < k; i++) {
    p1 = p1.next
  }
  while (p1.next !== null) {
    p2 = p2.next
    p1 = p1.next
  }
  return p2.data
}

export default returnKthToTheLast
