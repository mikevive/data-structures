export class Queue<T>{
  array: (T | undefined)[];
  start = 0;
  count = 0;

  constructor(length: number){
    this.array = this.allocate(length)
  }

  private allocate(length: number){
    const array: (T | undefined)[] = []
    Object.defineProperty(
      array,
      'length',
      { value: length, writable: false }
    );
    for(let i = 0; i < array.length; i++){
      array[i] = undefined
    }
    return array
  }

  public add(item: T): void {
    if (this.count === this.array.length) throw new RangeError("Queue overflow")
    const position = (this.start + this.count) % this.array.length
    this.array[position] = item
    this.count++
  }

  public remove(): T {
    if (this.count === 0) throw new RangeError("The queue is empty")
    const firstItem = this.array[this.start]!
    this.start++
    this.start %= this.array.length
    this.count--
    return firstItem
  }

  public peek(): T {
    if (this.count === 0) throw new RangeError("The queue is empty")
    const firstItem = this.array[this.start]!
    return firstItem
  }

  public isEmpty(): boolean {
    return this.count === 0
  }

  public reverse(): void {

  }
}
