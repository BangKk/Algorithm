// 链表

class Node {
  constructor(item) {
    this.item = item
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(element) {
    const node = new Node(element)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  // 任意位置插入元素
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element)
      let current = this.head
      let index = 0
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = node
      node.next = current
      this.length++
      return true
    }
    return false
  }

  // 删除指定位置元素
  removeAt(position) {
    if (position >= 0 && position <= this.length) {
      let index = 0
      let current = this.head
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
      this.length--
      return true
    }
    return false
  }

  // 寻找元素下标
  findIndex(element) {
    let current = this.head
    let index = -1
    while (current) {
      if (current.item === element) {
        return index + 1
      }
      index++
      current = current.next
    }
    return -1
  }

  // 删除指定元素
  remove(element) {
    const index = this.findIndex(element)
    return this.removeAt(index)
  }
}

const linkedList = new LinkedList()

console.log(linkedList)
linkedList.append(2)
linkedList.append(6)
linkedList.append(24)
linkedList.append(152)
// 2
// -6
//  -24
//    -152

linkedList.insert(3, 18)
// 2
// -6
//  -24
//    -18
//      -152
linkedList.removeAt(3)

// 2
// -6
//  -24
//    -152
console.log(linkedList)

