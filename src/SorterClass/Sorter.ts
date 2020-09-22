// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

//since we were using const sorter = new Sorter(numberCollection) that is why we need the collection: Sortable in the constructor, but we are using super() => we do not need any collection at all; pls look at 3 Number, Character, Linkedlist collection

export abstract class Sorter {
  // constructor(public collection: Sortable){}

  // the Purpose is the goal of Resusing some implementation of some functions might depend on other some functions
  // that we have not yet implemented

  //tell TypeScript these methods and property Length is eventually going to exist
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    let bubble = true;
    while (bubble) {
      bubble = false;
      for (let i = 0; i < this.length - 1; i++) {
        if (this.compare(i, i + 1)) {
          this.swap(i, i + 1);
          bubble = true;
        }
      }
    }
  }
}
