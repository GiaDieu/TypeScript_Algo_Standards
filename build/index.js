"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./Collections/NumberCollection");
var CharacterCollection_1 = require("./Collections/CharacterCollection");
var LinkedList_1 = require("./Collections/LinkedList");
var numberCollection = new NumberCollection_1.NumberCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numberCollection); // since we created abstract class-> we are not allowed to create instance
//Purpose: We don't want to use sort() method everytime I create instance of class Sorter -> pls look at diagram to convert the class of Sorter to Abstract Class
numberCollection.sort();
console.log(numberCollection.data);
var characterCollection = new CharacterCollection_1.CharacterCollection("Xaayab");
// const sorterString = new Sorter(characterCollection);
characterCollection.sort();
console.log(characterCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorterLinkedList = new Sorter(linkedList);
// sorterLinkedList.sort();
linkedList.sort();
linkedList.print();
