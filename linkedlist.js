'use strict';

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

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}



const newList = new LinkedList();
const testList = new LinkedList();

newList.insertLast('Apollo');
newList.insertLast('Boomer');
newList.insertLast('Helo');
newList.insertLast('Husker');
newList.insertLast('Starbuck');
newList.insertLast('Tauhida');
// newList.remove('squirrel');
newList.insertAt('michael', 3);
// console.log(newList.find('Helo'));

// console.log(newList);



// function display(ll) {
//   console.log(ll);
// }

// function displayValues(ll) {
//   let currentNode = ll.head;
//   while(currentNode !== null) {
//     console.log(currentNode.value);
//     currentNode = currentNode.next;
//   }
// }

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