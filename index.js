const Stack = require('./Stack');

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

const a = stack.pop();
console.log(a)
