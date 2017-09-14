class PriorityQueue {
  constructor() {
    this.queue = []
  }

  enqueue(element, priority) {
    const newE = { element, priority }
    if (this.isEmpty) {
      this.queue.push(newE)
    } else {
      const preIndex = this.queue.findIndex(item => priority < item.priority)
      preIndex > -1 ? this.queue.splice(preIndex, 0, newE) : this.queue.push(newE)
    }
  }

  dequeue() {
    return this.queue.shift()
  }

  clear() {
    this.queue = []
  }

  get isEmpty() {
    return !this.queue.length
  }

  get Size() {
    return this.queue.length
  }

  print() {
    console.log(this.queue)
  }

}


// useage
const priorityQueue = new PriorityQueue()
priorityQueue.enqueue('test1', 1)
priorityQueue.enqueue('test2', 2)
priorityQueue.enqueue('test3', 3)
priorityQueue.enqueue('test4', 4)

priorityQueue.enqueue('test5', 1)
priorityQueue.enqueue('test6', 3)

priorityQueue.print()
// [ { element: 'test1', priority: 1 },
//   { element: 'test5', priority: 1 },
//   { element: 'test2', priority: 2 },
//   { element: 'test3', priority: 3 },
//   { element: 'test6', priority: 3 },
//   { element: 'test4', priority: 4 } ]
