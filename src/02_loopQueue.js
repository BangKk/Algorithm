// 循环队列

class LoopQueue {
  constructor(queue) {
    this.queue = queue || []
  }

  enqueue(item) {
    this.queue.push(item)
  }

  dequeue() {
    this.queue.shift()
  }

  clear() {
    this.queue = []
  }

  get Size() {
    return this.queue.length
  }

  print() {
    console.log(this.queue)
  }

  find(index) {
    const pos = index > this.queue.length ? index % this.queue.length : index
    return this.queue[pos]
  }
}

const loopQueue = new LoopQueue([1, 2, 3, 4, 5, 6, 7])

loopQueue.print()  // [1, 2, 3, 4, 5, 6, 7]
loopQueue.find(2)  // 3
loopQueue.find(10) // 4
