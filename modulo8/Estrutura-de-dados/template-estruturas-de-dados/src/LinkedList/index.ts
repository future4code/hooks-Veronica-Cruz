import { LinkedList, NodeItem } from "./ListNode";

const node = new NodeItem(1)
const linkedList = new LinkedList(node)

linkedList.add(2)
console.log(linkedList)