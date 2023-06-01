import { writeHeapSnapshot } from 'v8';
import { LinkedList } from './linked-list.js';
import { Array } from './array.js'
import { Stack, isBalanced } from './stack.js'
import { Queue } from './queue.js'

const queue = new Queue<number>(5)

queue.add(0)
queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)
console.log(queue)
console.log(queue.remove())
console.log(queue.remove())
queue.add(5)
queue.add(6)
console.log(queue)