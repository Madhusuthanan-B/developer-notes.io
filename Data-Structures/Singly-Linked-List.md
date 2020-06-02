## Singly Linked List

* A data structure that contains a head, tail and length property.
* Its ordered like array but in an array each item is mapped to an index. But linked list doesnt have an index. We have to start from the beginning and go towards next ones.
* Linked list consist of nodes.
* Each node has a value and pointer.

#### Simple terminologies and anologies
* A bunch of nodes, where each node point to the next one.
* A sky scraper without elevator (If you want to reach 5th floor, you have to go via 1,2,3,4 floors)

#### Comparision with arrays
-----------------------------------**Linked Lists** ---------------------------------------
 * Do not have indexes
 * Connected via nodes with a next pointer
 * Random access is not allowed
 
 -----------------------------------**Arrays** ---------------------------------------
 * Indexed in order
 * Insertion and deletion can be expensive
 * Can be quickly accessed at a specific index
 
 
 #### Pros
 * Good at insertion / deletion
 
 #### Cons
 * No random access
 
 #### Code
 
 ##### Push
 
 ```js
 class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
     }

     push(val) {
         const node = new Node(val);

         if(!this.head) {
            this.head = node;
            this.tail = node;
         } else {
             // Add nod the the current tail
             this.tail.next = node;
             // Update the tail
             this.tail = node;
         }
         this.length++;
         return this;
     }
}

var list = new SinglyLinkedList();

list.push("5x^2");
list.push("3x");
list.push("2");
 ```
