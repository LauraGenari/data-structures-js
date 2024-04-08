const Stack = require('./LinkedLists/Stack');
const Queue = require('./LinkedLists/Queue');
const SingleLinkedList = require('./LinkedLists/SingleLinkedList');
const DoubleLinkedList = require('./LinkedLists/DoubleLinkedList');
const BinaryTree = require('./Tree/BinaryTree');

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

singleLinkedList.reverse();
// singleLinkedList.shift();
// singleLinkedList.pop();

// singleLinkedList.unshift(10);
// singleLinkedList.set(0, 1)

// singleLinkedList.insert(2, 2);
// singleLinkedList.remove(3)

// singleLinkedList.print();

// -------- double linked list -------
const doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.push(1);
doubleLinkedList.push(2);
doubleLinkedList.push(3);
doubleLinkedList.push(4);
doubleLinkedList.push(5);
doubleLinkedList.push(6);
doubleLinkedList.push(7);
doubleLinkedList.push(8);
doubleLinkedList.push(9);

doubleLinkedList.reverse();
// doubleLinkedList.shift();
// doubleLinkedList.pop();

// doubleLinkedList.unshift(10);
// doubleLinkedList.set(0, 1);

// doubleLinkedList.insert(2, 2);
// doubleLinkedList.remove(3)

// doubleLinkedList.print();

// -------- double linked list -------
const binaryTree = new BinaryTree();

binaryTree.insert(2);
binaryTree.insert(9);
binaryTree.insert(7);
binaryTree.insert(4);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(3);
binaryTree.insert(5);
binaryTree.insert(8);

binaryTree.remove(3)

console.log(JSON.stringify(binaryTree))