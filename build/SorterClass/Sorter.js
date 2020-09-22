"use strict";
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
//since we were using const sorter = new Sorter(numberCollection) that is why we need the collection: Sortable in the constructor, but we are using super() => we do not need any collection at all; pls look at 3 Number, Character, Linkedlist collection
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var bubble = true;
        while (bubble) {
            bubble = false;
            for (var i = 0; i < this.length - 1; i++) {
                if (this.compare(i, i + 1)) {
                    this.swap(i, i + 1);
                    bubble = true;
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
