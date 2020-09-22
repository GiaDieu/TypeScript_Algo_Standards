import { Sorter } from "../SorterClass/Sorter";

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super(); //initially, we are running the constructors on the parent Class Sorter and making sure that set-up codes are executed
    // this super reference the parent class of Sorter
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
