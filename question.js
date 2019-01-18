function indexOf(list, val) {
  let idx = -1;
  const node = list.head;

  while (node) {
    idx++;

    if (node.value === val) {
      return idx;
    }
  }
  return -1;
}

function push(list, val) {
  if(){
      // is empty
  }

  if(){
      // has only one element
  }
  const tail = list.head.previous;
  const newNode = { value: val, next: list.head, previous: tail };
  list.head.previous = newNode;
  tail.next = newNode;

}
