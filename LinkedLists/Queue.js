const Node = require('./Node');

// efficient for inserting/removing
// inefficient for listing
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){
        let node = new Node(value);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size += 1
    }

    dequeue(){
        if (!this.last) {
            return null;
        }
        let removed = this.first;
        if(this.last === this.first) {
            this.last = null
        }
        this.first = this.first.next;
        this.size -= 1;
        return removed.value
    }
}

module.exports = Queue;