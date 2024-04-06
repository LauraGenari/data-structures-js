const Node = require('./Node');

// efficient for inserting/removing
// inefficient for listing
class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let node = new Node(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let aux = this.first;
            this.first = node;
            this.first.next = aux;
        }
        this.size += 1;
    }

    pop(){
        if (!this.first) return null;
        let aux = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size -= 1;
        return aux.value;
    }
}

module.exports = Stack;
