/*
#### Doubly linked list
Implement a doubly linked list. The primary functions of the doubly linked
list would be insert (First, Last, Before, After, and insertAt), remove, and find. 
Write a function `mainDLL`. Within the function create a doubly linked list called `DLL` 
and add the following items in your doubly linked list. 
`Aquaria, Caprica, Gemenon, Picon, Sagittaron`
        
        
 #### Reverse a DLL
 Given the doubly linked list above, write a program that reverses the doubly linked list. How is this implementation different than reversing the singly linked list?
        
        
 */

class _Node {
  constructor(value, next, prev) {
    (this.value = value), (this.next = next), (this.prev = prev);
  }
}

class DLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertFirst(item) {
    let newNode = new _Node(item, this.head, null);
    if (this.head !== null) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
  }
  insertLast(item) {
    let newNode = new _Node(item, null, this.tail);
    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (this.head === null) {
      this.head = newNode;
    }
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.value !== item) {
      current = current.next;
      if (current === null) {
        console.log("Item to remove is not on the list");
        return null;
      }
    }
    //found it - now remove it

    //if the node to be removed is head, make the next node head
    if (current === this.head) {
      this.head = current.next;
      //return;
    } else {
      current.prev.next = current.next;
    }

    //delete last node
    if (current === this.tail) {
      this.tail = current.prev;
    } else {
      current.next.prev = current.prev;
    }
  }
}

function displayList(list) {
  let currNode = list.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(lst) {
  let counter = 0;
  let currNode = lst.head;
  if (!currNode) {
    return counter;
  } else counter++;
  while (!(currNode.next == null)) {
    counter++;
    currNode = currNode.next;
  }
  return counter;
}

function reverseDLL(lst) {
  let currNode = lst.head;
  let tempNode = null;

  while (currNode !== null) {
    //swapping nodes
    tempNode = currNode.next;
    currNode.next = currNode.prev;
    currNode.prev = tempNode;

    currNode = tempNode;
  }
  tempNode = lst.head;
  lst.head = lst.tail;
  lst.tail = tempNode;
}

function main() {
  let dll = new DLinkedList();
  dll.insertFirst("Aquaria");
  //add the following items in your doubly linked list.
  //`Aquaria, Caprica, Gemenon, Picon, Sagittaron`

  dll.insertLast("Caprica");
  dll.insertLast("Gemenon");
  dll.insertLast("Picon");
  dll.insertLast("Sagittaron");

  //console.log(dll);

  //* Add `Tauron` to the list
  //* Remove `Picon` from the list

  //dll.remove('Picon');
  //console.log(size(dll));
  //console.log(dll);
  reverseDLL(dll);
  console.log(dll);
}
main();
