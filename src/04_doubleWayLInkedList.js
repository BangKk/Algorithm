// 双向链表

class Node {
  constructor(item) {
    this.item = item
    this.prev = null
    this.next = null
  }
}

class DoubWayLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // 任意位置插入元素
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element)
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        if (!current) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          this.head = node
          current.prev = node
        }
      } else if (position === this.length) {
          current = this.tail
          current.next = node
          node.prev = current
          this.tail = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = node
        node.prev = previous
        node.next = current
        current.prev = node
      }
      this.length++
      return true
    }
  }

  // 移除指定位置元素
  removeAt(position) {
    if (position >= 0 && position <= this.length) {
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        this.head = current.next
        this.head.prev = null
        if (this.length === 1) {
          this.tail = null
        }
      } else if (position === this.length) {
        this.tail = this.tail.prev
        this.tail.next = null
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
        current.next.prev = previous
      }
      this.length--
      return current.element
    }
    return null
  }
}
