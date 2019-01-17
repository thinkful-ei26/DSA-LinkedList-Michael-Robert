"use strict";

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  //   insertBefore(item, ptr){
  //     let currNode = this.head;
  //     let prevNode = this.head;
  //     while(currNode.next !== ptr){
  //         prevNode = currNode;
  //         currNode = currNode.next;
  //     }
  //     // currNode.next = new _Node(item, ptr);
  //     prevNode.next = new _Node(item,ptr);
  //   }

  insertBefore(newItem, targetItem) {
    // similar stuff
    let tempNode = this.find(targetItem);
    let currNode = this.head;
    let prevNode = this.head;
    while (currNode.next !== tempNode) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    // currNode.next = new _Node(item, ptr);
    currNode.next = new _Node(newItem, tempNode);
  }

  insertAfter(newItem, targetItem) {
    let tempNode = this.find(targetItem);
    let currNode = this.head;
    while (currNode !== tempNode) {
      currNode = currNode.next;
    }
    currNode.next = new _Node(newItem, tempNode.next);
  }

  insertHeadCycle(item){
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, this.head);
    }
  }

  insertAt(newItem, index) {
    let count = 0;
    let currNode = this.head;
    while (count !== index) {
      currNode = currNode.next;
      count++;
    }
    this.insertBefore(newItem, currNode.value);
  }

  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //Check for the item
    while (currNode.value !== item) {
      //return null if end of the list
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }
  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

const newList = new LinkedList();
const testList = new LinkedList();

newList.insertLast("Apollo");
newList.insertLast("Boomer");
newList.insertLast("Helo");
newList.insertLast('middle');
newList.insertLast('not really the middle but kinda');
newList.insertLast("Husker");
newList.insertLast("Starbuck");
newList.insertLast("Tauhida");
// newList.insertLast('Starbuck');
// newList.insertLast('Starbuck');
// newList.remove('squirrel');
// newList.insertAt("michael", 3);
// console.log(newList.find('Helo'));

// console.log(newList);

// function display(ll) {
//   console.log(ll);
// }

function displayValues(ll) {
  let currentNode = ll.head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}

// displayValues(newList);

// function size(ll) {
//   let count = 0;
//   let currNode = ll.head;
//   while (currNode !== null) {
//     currNode = currNode.next;
//     count++;
//   }
//   return count;
// }

// console.log(size(newList));

// function isEmpty(ll) {
//   if(ll.head === null) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEmpty(testList));

// function findPrevious(item, ll) {
//   let currNode = ll.head;
//   while(currNode.next.value !== item) {
//     currNode = currNode.next;
//   }
//   return currNode;
// }

// console.log(findPrevious('Tauhida', newList));

// function findLast(ll) {
//   let currNode = ll.head;
//   while(currNode.next !== null) {
//     currNode = currNode.next;
//   }
//   return currNode;
// }

// console.log(findLast(newList));

// Mystery program

// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the runtime of this algorithm?

// function WhatDoesThisProgramDo(lst) {
//   let current = lst.head;
//   ///
//   while (current !== null) {
//     let newNode = current;
//     //
//     while (newNode.next !== null) {
//       if (newNode.next.value === current.value) {
//         // if the first item is equal to the second we replace the second with the third
//         newNode.next = newNode.next.next;
//       }
//       else {
//         // if the first item is not equal to the second then we replace the first with the second
//         newNode = newNode.next;
//       }
//     }
//     //
//     current = current.next;
//   }
//   //
// }
// displayValues(newList);
// WhatDoesThisProgramDo(newList);
// displayValues(newList);

// function reverseList(ll) {
//   let currNode = ll.head;
//   let prevNode = ll.head;
//   let targetNode = ll.head;

//   if (currNode === ll.head) {
//     console.log('IF STATEMENT: ', currNode.value);
//     targetNode = currNode.next;
//     currNode.next = null;
//     currNode = targetNode;
//   }

//   while (currNode.next !== null) {
//     console.log('While LOOP: ', currNode.value);
//     targetNode = currNode.next;
//     currNode.next = prevNode;
//     prevNode = currNode;
//     currNode = targetNode;
//   }
//   if (currNode.next === null) {
//     currNode.next = prevNode;
//     ll.head = currNode;
//   }
//   return ll;
// }

// displayValues(newList);
// reverseList(newList);
// displayValues(newList);

// Third from the end

// function thirdEnd(ll) {
//   let currNode = ll.head;
//   while (currNode.next.next.next !== null) {
//     currNode = currNode.next;
//   }
//   return currNode;
// }

// console.log(thirdEnd(newList));

// function middle(ll) {
//   let count = 0;
//   let currNode = ll.head;
//   while(currNode !== null) {
//     currNode = currNode.next;
//     count++;
//   }
//   let halfCount = Math.ceil(count/2);
//   count = 0;
//   currNode = ll.head;
//   while(count !== halfCount -1) {
//     currNode = currNode.next;
//     count++;
//   }
//   return currNode.value;
// }

// console.log(middle(newList));



// Cycle in a list


testList.insertLast(1);
testList.insertLast(2);
testList.insertLast(3);
testList.insertLast(4);
testList.insertLast(5);
testList.insertLast(6);
testList.insertLast(7);



function cycle(ll) {
  let tortoise = ll.head;
  let hare = ll.head;
  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if(tortoise === hare){
      return true;
    }
  }
  return false;
}


console.log(cycle(testList));
