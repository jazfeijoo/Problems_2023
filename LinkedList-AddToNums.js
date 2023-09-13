// Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

var addTwoNumbers = function(l1, l2) {

  class Node {
    constructor(val){
      this.value = val
      this.next = null;
    }
  }

  class LinkedList {
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val){
      let newNode = new Node(val)
      if (!this.head){
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
    pop(){
      if(! this.head){
        return undefined;
      } else {
        let curr = this.head
        let newTail = curr
        while(curr.next){
          newTail = curr
          curr = curr.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0){
          this.head = null;
          this.tail = null;
        }
        return curr
      }
    }
  }
  const list1 = new LinkedList
  const list2 = new LinkedList

  l1.reverse().map(n => {
    const node = new Node(n)
    list1.push(node)
  })
 //console.log('LIST 1', list1, 'tail', list1.tail.value)
  l2.reverse().map(n => {
    const node = new Node(n)
    list2.push(node)
  })
  let final = new LinkedList
  let rem = 0
  while (list1.length || list2.length || rem){
    let node1 = list1? list1.tail ? list1.tail.value ? list1.tail.value :  0 : 0 : 0
    let node2 = list2 ? list2.tail ? list2.tail.value ? list2.tail.value : 0 : 0 : 0
    let sum = node1.value + node2.value + rem

   //  console.log('SUM', sum,'NODE1', node1.value, node2.value)
    if (rem){
      rem = 0
    }
    if ( 9 < sum ){
      rem = 1
      final.push( new Node(sum-10))
    } else {
      final.push(new Node(sum))
    }
    //console.log('LIST 1', list1, list1.tail)
    list1.pop()
    list2.pop()
  }
  console.log('FINAL', final, final.head.next.value)
  return final
}

addTwoNumbers([2,4,3],[5,6,4]);
// Output: [7,0,8]
// Explanation: 342 + 465 = 807

addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])
Output: [8,9,9,9,0,0,0,1]
