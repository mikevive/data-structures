export class Stack<T> {
  array: (T | undefined)[];
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

  public push(item: T): void{
    if (this.count === this.array.length) throw new RangeError("Stack overflow")
    this.array[this.count] = item
    this.count++
  }

  public pop(): T {
    if (this.count === 0) throw new RangeError("The stack is empty")
    const lastItem = this.array[this.count - 1]!
    this.count--
    return lastItem
  }

  public peek(): T {
    if (this.count === 0) throw new RangeError("The stack is empty")
    const lastItem = this.array[this.count - 1]!
    return lastItem
  }

  public isEmpty(): boolean {
    return this.count === 0
  }
}

const bracketPairs: Record<string,string> = {
  '(':')',
  '[':']',
  '<':'>',
  '{':'}',
}
const leftBrackets: string[] = Object.keys(bracketPairs)
const rightBrackets: string[] = Object.values(bracketPairs)

export function isBalanced(code: string): boolean {
  const stack = new Stack<string>(code.length)
  for(const letter of code){
    if(leftBrackets.includes(letter)) stack.push(letter)
    else if(rightBrackets.includes(letter)){
      if(stack.isEmpty()) return false
      if(bracketPairs[stack.pop()] !== letter) return false
    }
  }

  return stack.isEmpty()
}