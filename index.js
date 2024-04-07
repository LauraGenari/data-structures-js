const Stack = require('./Stack');
const Queue = require('./Queue');
const SingleLinkedList = require('./LinkedLists/SingleLinkedList');

// ------- stack -------
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

// console.log(stack);

const removedStack = stack.pop();
// console.log(removedStack)

// ------- queue -------

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// console.log(queue);

const removedQueue = queue.dequeue();
// console.log(removedQueue);

// -------- single linked list -------
const singleLinkedList = new SingleLinkedList();

singleLinkedList.push(1);
singleLinkedList.push(2);
singleLinkedList.push(3);
singleLinkedList.push(4);
singleLinkedList.push(5);
singleLinkedList.push(6);
singleLinkedList.push(7);
singleLinkedList.push(8);
singleLinkedList.push(9);

// singleLinkedList.reverse();
singleLinkedList.shift();
singleLinkedList.pop();

singleLinkedList.unshift(10);
// singleLinkedList.set(0, 1)

singleLinkedList.insert(2, 2);
singleLinkedList.remove(3)

singleLinkedList.print();
// console.log(singleLinkedList);

// const removedSingleLinkedList = singleLinkedList.pop();
// console.log(removedSingleLinkedList);