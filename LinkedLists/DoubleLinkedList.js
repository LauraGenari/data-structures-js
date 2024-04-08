const Node = require("./Node");

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // add tail
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size += 1;
    return this;
  }
  // remove tail
  pop() {
    if (!this.head) return null;
    let current = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return current;
    }
    this.tail = current.prev;
    this.tail.next = null;
    this.size -= 1;

    // current.prev = null;

    return current;
  }
  // remove head
  shift() {
    if (!this.head) return null;
    let removedHead = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    // removedHead.prev = null;
    this.size -= 1;
    if (this.size === 0){
      this.tail = null;
    }
    return removedHead;
  }
  // add head
  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.tail = node;
    }
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.size += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    if (index === this.size) {
      return this.tail;
    }
    if (index <= this.size / 2) {
      let counter = 0;
      let node = this.head;
      while (counter < index) {
        node = node.next;
        counter++;
      }
      return node;
    }
    let counter = this.size - 1;
    let node = this.tail;
    while (counter > index) {
      node = node.prev;
      counter--;
    }
    return node;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.size) {
      this.push(value);
      return true;
    }
    let newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    newNode.prev = beforeNode;
    beforeNode.next = newNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.size += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      return false;
    }
    if (index === 0) {
      return this.shift(value);
    }
    if (index === this.size - 1) {
      return this.pop(value);
    }

    let beforeNode = this.get(index - 1);
    let removedNode = beforeNode.next;
    beforeNode.next = removedNode.next;
    removedNode.next.prev = beforeNode;

    this.size -= 1;
    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null, prev = null;

    for (let i = 0; i < this.size; i++) {
        next = node.next;
        node.next = prev;
        node.prev = next
        prev = node;
        node = next;
    }

    return this;
  }

  print() {
    let node = this.head;
    for (let i = 0; i < this.size; i++) {
      console.log(node);
      node = node?.next;
    }
  }
}

module.exports = DoubleLinkedList;
