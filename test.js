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

  insertHeadCycle(item) {
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

function cycle(ll) {
  let tortoise = ll.head;
  let hare = ll.head;
  let tick = 0;
  while (hare && hare.next) {
    tick++;
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (tortoise === hare) {
      console.log(tick);
      return true;
    }
  }
  console.log(tick);
  return false;
}

const testList = new LinkedList();

testList.insertLast(1);
testList.insertLast(2);
testList.insertLast(3);
testList.insertLast(4);
testList.insertLast(5);
testList.insertHeadCycle(6);

console.log(cycle(testList));

// function memoize(fn) {
//     const calls = [];
//     const results = [];

//     return (...args) => {
//       const idx = calls.indexOf(args);

//       if (idx >= 0) {
//         return results[idx];
//       }

//       calls.push(args);
//       results.push(fn(...args));
//     };
//   }
