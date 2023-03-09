class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class MyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    get(index) {
      if (index < 0 || index >= this.length) {
        return null;
      }
  
      let current = this.head;
      let i = 0;
      while (current != null && i < index) {
        current = current.next;
        i++;
      }
  
      return current != null ? current.data : null;
    }
  
    pushToIndex(data, index) {
      if (index < 0 || index > this.length) {
        return;
      }
  
      const newNode = new Node(data);
  
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        if (this.tail == null) {
          this.tail = newNode;
        }
        this.length++;
        return;
      }
  
      let current = this.head;
      let previous = null;
      let i = 0;
      while (current != null && i < index) {
        previous = current;
        current = current.next;
        i++;
      }
  
      newNode.next = current;
      previous.next = newNode;
      if (current == null) {
        this.tail = newNode;
      }
      this.length++;
    }
  
    removeByIndex(index) {
      if (index < 0 || index >= this.length) {
        return;
      }
  
      if (index === 0) {
        this.head = this.head.next;
        if (this.head == null) {
          this.tail = null;
        }
        this.length--;
        return;
      }
  
      let current = this.head;
      let previous = null;
      let i = 0;
      while (current != null && i < index) {
        previous = current;
        current = current.next;
        i++;
      }
  
      previous.next = current.next;
      if (current.next == null) {
        this.tail = previous;
      }
      this.length--;
    }
  }
  