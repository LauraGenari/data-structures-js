const Stack = require('./Stack');
const Queue = require('./Queue');

// ------- stack -------
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

const removedStack = stack.pop();
console.log(removedStack)

// ------- queue -------

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

const removedQueue = queue.dequeue();
console.log(removedQueue);