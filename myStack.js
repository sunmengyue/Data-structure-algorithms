class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

let myStack = new Stack();
myStack.push(5);
myStack.push(3);
myStack.push(2);

myStack.pop();
myStack.pop();
