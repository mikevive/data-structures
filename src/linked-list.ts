export class LinkedList<T> {
  head: Item<T> | null = null;
  tail: Item<T> | null = null;

  addFirst(value: T): void {
    const item = new Item<T>(value, null);
    if (this.head === null) {
      this.head = item;
      this.tail = item;
    } else {
      item.next = this.head;
      this.head = item;
    }
  }

  addLast(value: T): void {
    const item = new Item<T>(value, null);
    if (this.tail === null) {
      this.head = item;
      this.tail = item;
    } else {
      this.tail.next = item;
      this.tail = item;
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
    const penultimateItem = this.findPenultimate(this.head);
    if (penultimateItem) penultimateItem.next = null;
  }

  private findPenultimate(item: Item<T>): Item<T> | null {
    if (!item.next) return null;
    if (!item.next.next) return item;
    return this.findPenultimate(item.next);
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
}

export class Item<T> {
  value: T;
  next: Item<T> | null;

  constructor(value: T, next: Item<T> | null) {
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
