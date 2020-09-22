import { NumberCollection } from "./Collections/NumberCollection";
import { CharacterCollection } from "./Collections/CharacterCollection";
import { LinkedList } from "./Collections/LinkedList";

const numberCollection = new NumberCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numberCollection); // since we created abstract class-> we are not allowed to create instance

//Purpose: We don't want to use sort() method everytime I create instance of class Sorter -> pls look at diagram to convert the class of Sorter to Abstract Class

numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharacterCollection("Xaayab");
// const sorterString = new Sorter(characterCollection);
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sorterLinkedList = new Sorter(linkedList);
// sorterLinkedList.sort();
linkedList.sort();
linkedList.print();
