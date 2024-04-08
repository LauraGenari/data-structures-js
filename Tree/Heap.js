// everything until now was made with linked lists
// but for practice, heaps will be in arrays, supposing that I will need more
// to be accessing elements, than inserting them (since it is a heap, i am
// interested in the min/max value)

/**
 * [0,1,2,3,4,5,6,7]
 *        0
 *      1   2
*     3  4  5  6
    7
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    let parentIndex = this.getParentIndex(index);
    while (this.hasParent(index) && this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    let smallerChildIndex = this.getLeftChildIndex(index);
    let biggerChildIndex = this.getRightChildIndex(index);
    while (this.heap[index] < this.heap.length) {
      if (
        biggerChildIndex < this.heap.length &&
        this.heap[biggerChildIndex] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = biggerChildIndex;
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  removeMin() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return minValue;
  }
}

module.exports = MinHeap;