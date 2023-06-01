export class LinkedList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;

  addFirst(value: T): void {
    const node = new Node<T>(value, null);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  addLast(value: T): void {
    const node = new Node<T>(value, null);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  removeFirst(): void {
    if (this.head === null) return;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.head = this.head.next;
  }

  removeLast(): void {
    if (this.head === null) return;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    const penultimateNode = this.findPenultimate(this.head);
    if (penultimateNode) penultimateNode.next = null;
  }

  private findPenultimate(node: Node<T>): Node<T> | null {
    if (!node.next) return null;
    if (!node.next.next) return node;
    return this.findPenultimate(node.next);
  }

  indexOf(value: T): number {
    if (this.head === null) return -1;
    return this.head.indexOf(value);
  }

  contains(value: T): boolean {
    if (this.head === null) return false;
    return this.head.contains(value);
  }

  size(): number {
    if (this.head === null) return 0;
    return this.head.size();
  }

  toArray(): T[] {
    if (this.head === null) return [];
    return this.head.toArray();
  }

  reverse(): void {
    if(this.head === null) return;
    if (this.head === this.tail) return;
    let previousNode: Node<T> | null = null
    let currentNode: Node<T> | null = this.head;
    let nextNode: Node<T> | null = null
    while(currentNode !== null){
      nextNode = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode
      currentNode = nextNode
    }
    this.tail = this.head;
    this.head = previousNode
  }

  getKthFromTheEnd(k: number): T {
    if ( k < 0 || k >= this.size()) throw new RangeError("Value k is greater than the linked list length")
    let pointer1: Node<T> | null = this.head
    let pointer2: Node<T> | null = this.head
    for (let i = 0; i < k; i++) pointer1 = pointer1!.next
    while(pointer1 !== this.tail){
      pointer1 = pointer1!.next
      pointer2 = pointer2!.next
    }
    return pointer2!.value
  }
}

export class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null) {
    this.value = value;
    this.next = next;
  }

  indexOf(value: T, index: number = 0): number {
    if (this.value === value) return index;
    if (this.next) return this.next.indexOf(value, index + 1);
    return -1;
  }

  contains(value: T): boolean {
    const index = this.indexOf(value);
    return index >= 0;
  }

  size(): number {
    const nextSize = this.next?.size() || 0;
    return nextSize + 1;
  }

  toArray(): T[] {
    const arr = [this.value];
    if (this.next === null) return arr;
    const nextArr = this.next.toArray();
    return arr.concat(nextArr);
  }
}
