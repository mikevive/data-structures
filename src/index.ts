import { writeHeapSnapshot } from 'v8';
import { LinkedList } from './linked-list.js';

const linkedList = new LinkedList<number>();

const register = () => {
  console.log(linkedList);
  // writeHeapSnapshot();
};

register();

for (let i = 0; i < 1_000_000; i++) {
  //if (i === 50_000) register();
  linkedList.addLast(i);
  // if (i >= 10) linkedList.removeFirst();
}

register();

linkedList.toArray()