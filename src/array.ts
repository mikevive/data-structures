export class Array<T> {
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

  private reallocate(array: (T | undefined)[]){
    const length = array.length * 2
    const newArray = this.allocate(length)
    for(let i = 0; i < array.length; i++){
      newArray[i] = array[i]
    }
    return newArray
  }

  insert(value: T){
    if(this.count === this.array.length){
      this.array = this.reallocate(this.array)
    }
    this.array[this.count] = value
    this.count++
    console.log(this.array)
  }

  removeAt(index: number){
    if(index < 0) return
    if(index > this.count) return
    for(let i = index; i < this.array.length - 1; i++){
      this.array[i] = this.array[i + 1]
    }
    this.array[this.array.length - 1] = undefined
    this.count--
    console.log(this.array)
  }

  indexOf(value: T){
    for(let i = 0; i < this.array.length; i++){
      if(this.array[i] === value) return i
    }
    return -1
  }
}