export class NodeItem {
    constructor(
        public value: any,
        public next: NodeItem | null= null
      
    ) { }

}

export class LinkedList {
    add(arg0: number) {
        throw new Error("Method not implemented.");
    }
    constructor(public start?: NodeItem) { }

    public appendToTail(value: number) {

        const nodeAdd = new NodeItem(value)
        
        if (!this.start) {
            this.start = nodeAdd
        } else {
            let node = this.start;
            while (node.next) {
                node = node.next;
            }
            node.next = nodeAdd;
        } 
    }

    // public print(): void {
    //     let node = this.start;
    //     let i = 1;
    //     while (node !== undefined) {
    //         console.log(`Elemento ${i}: `, node!.getData());
    //         node = node!.getNext();
    //         i++;
    //     }
    // }
}
