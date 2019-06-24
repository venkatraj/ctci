const removeDuplicatesWithOutBuffer = (myLinkedList) => {
  let p1 = myLinkedList.head
  while(p1 !== null) {
    let p2 = p1
    while(p2.next !== null) {
      if (p2.next.data === p1.data) {
        p2.next = p2.next.next
      } else {
        p2 = p2.next
      }
    }
    p1 = p1.next
  }
}

export default removeDuplicatesWithOutBuffer