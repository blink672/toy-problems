// Write a method that merges two sorted linked lists into one sorted linked list
// Do not create a new LinkedList

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  push(val) {
    let n = new Node(val);
    this.tail.next = n;
    this.tail = this.tail.next;
  }

  removeHead() {
    this.head = this.head.next;
  }

  getHead() {
    return this.head;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let mergeLinkedLists = (a, b) => {
  // TODO: fill me out

  // return the head node of the single sorted list
  return a.getHead();
}

// Hacky assertion function for now
function assert(expectedBehavior, description){
  if (!expectedBehavior) {
    console.log(description);
    return false;
  } else {
    return true;
  }
}

// Basic test case
let list1 = new LinkedList(1);
list1.push(3);
list1.push(5);
list1.push(7);
list1.push(9);
list1.push(11);
list1.push(13);

let list2 = new LinkedList(2);
list2.push(4);
list2.push(6);
list2.push(8);
list2.push(10);
list2.push(12);
list2.push(14);

let numResult = numPointer = mergeLinkedLists(list1, list2);
let numPass = true;
let i = 1;
while (numPointer && numPass) {
  numPass = assert(numPointer.val === i, 'Should return a sorted list when passed num linked lists');
  numPointer = numPointer.next;
  i++;
}

// Basic test case 2
let listA = new LinkedList('A');
listA.push('D');
listA.push('F');
listA.push('J');
listA.push('L');
listA.push('X');

let listB = new LinkedList('A');
listB.push('B');
listB.push('C');
listB.push('E');
listB.push('G');
listB.push('H');
listB.push('Z');

let expectedCharResults = ['A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'L', 'X', 'Z'];
let charResult = charPointer = mergeLinkedLists(listA, listB);
let charPass = true;
let j = 0;
while (charPointer && charPass) {
  charPass = assert(charPointer.val === expectedCharResults[i], 'Should return a sorted list when passed char linked lists');
  charPointer = charPointer.next;
  i++;
}

