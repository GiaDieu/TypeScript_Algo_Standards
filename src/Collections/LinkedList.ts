import { Sorter } from "../SorterClass/Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  Head: Node | null = null;
  add(data: number): void {
    const node = new Node(data);
    if (!this.Head) {
      this.Head = node;
      return;
    }

    let tail = this.Head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.Head) {
      return 0;
    }
    let length = 1;
    let node = this.Head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.Head) {
      throw new Error("Index out of bounds");
    }

    let counter = 0;
    let node: Node | null = this.Head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.Head) {
      throw new Error("List is Empty");
    }
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    return leftNode.data > rightNode.data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const leftHand = leftNode.data;

    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.Head) {
      return;
    }

    let node: Node | null = this.Head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
