# Tree #
<br>

> Tree is a widely using non-linear data structure that represents a hierarchical structure and that consists of nodes connected by edges where each node can have zero or more child nodes. The starting point of the tree or topmost node is called the root. The nodes below the root are its children , and nodes that share the same parent are called siblings.<p>Trees can have different variations and properties depending on the specific application and requirements.
<br>
In data structures, there are several <b> types of trees </b>. Here are some commonly encountered tree types:

* Binary Tree: A binary tree is a tree in which each node can have at most two children, referred to as the left child and the right child.

* Binary Search Tree (BST): A binary search tree is a binary tree that follows a specific ordering property. For every node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater than the node's value.

* AVL Tree: An AVL tree is a self-balancing binary search tree. It maintains a balance factor for each node and performs rotations to ensure that the tree remains balanced, providing efficient search, insert, and delete operations.

* Red-Black Tree: A red-black tree is another type of self-balancing binary search tree. It ensures balanced properties by applying colorings to nodes and performing rotations and recoloring operations to maintain balance.

* B-Tree: A B-tree is a self-balancing search tree designed for efficient disk access. It is optimized for systems that read and write large blocks of data from secondary storage, such as databases and file systems.

* Trie: A trie, also known as a prefix tree, is a tree-like data structure used to efficiently store and retrieve strings. It organizes data based on their prefixes, making it useful for tasks like autocomplete, dictionary implementations, and IP routing.

* Heap: A heap is a complete binary tree that satisfies the heap property. It can be either a min-heap, where the value of each node is greater than or equal to the values of its children, or a max-heap, where each node's value is less than or equal to its children.

* N-ary Tree: An N-ary tree is a tree in which each node can have at most N children. Unlike a binary tree, an N-ary tree can have more than two children for each node.

<br>
<hr>

### Features of tree ###
<br>

* Root : Topmost node or starting node

* Parent & Child : A parent node is a node that gives rise to its child nodes all nodes except root are called child. Nodes in a tree are connected in a parent-child relationship.

* Siblings : Nodes that sharing same parent.

* Leaf / Terminal : Nodes that do not have any child node.

* Degree of node : Number of children to its parent.

* Degree of tree : Maximum degree of any node. So degree of entire tree is that.

* Path : sequence of nodes and edges between nodes.

* Level : A level is the number of parent nodes corresponding to a given a node of the tree.

* Height : Total number of edges from leaf to that node in the longest path.

* Dept : Number of edges from root to that leaf in the longest path.
<br>
<hr>

## Binary Search tree ##
<br>

### Operations: ###

* Insertion : To add a node to the tree.

* Search : To check the given node in the tree.

* Traversing : Traversing is the process of visiting each node. BFS and DFS are the different traversal methods.

* Deletion : To remove the given node from the tree.
            There are three scenario's for deletion
            a. removing a leaf node
            b. removing node that have one child node.
            c. removing node that have two child nodes.

* Minimum and maximum : to find the minimum and maximum value from the tree.
<br>
<hr>

### Binary tree traversals ###
<br>
Linear data structure have only one way to traverse them, but trees can be traverse in different ways.

<br>
    <b>1.Depth first Search (DFS)</b><br>
    <b>2.Breadth first Search (BFS)</b>

<br>

> Those are differ in the order in which they visit nodes and the data structure they employ.
<br>

**DFS :**

* The algorithm starts at the root node and examines each branch as far as possible before backtracking.

* Read the root node first , then visit all the nodes in the left subtree and visit all the nodes in the right subtree.

* Typically use less memory than BFS. Because it only needs to store the path from the starting node to the current node.

* Implement using recursion or by maintaining an explicit stack in data structure.
<br>
There are different ways to visit the nodes of a tree in DFS.<br>
1. PreOrder
2. PostOrder
3. InOrder

### Algorithm for InOrder : ###

For InOrder, you traverse from the left subtree to the root then to the right subtree. <br>
```
    inOrder(root){
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
```  

### Algorithm for PreOrder: ###

For PreOrder, you traverse from the root to the left subtree then to the right subtree. <br>
```
    preOrder(root){
            if (root) {
                console.log(root.value);
                this.preOrder(root.left)
                this.preOrder(root.right)
            }
        }
```

### Algorithm for PostOrder: ###

For PostOrder, you traverse from the left subtree to the right subtree then to the root.<br>
```
    postOrder(root){
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
```
**BFS :**

*  It begins at the root of the tree or graph and investigates all nodes at the current depth level before moving on to nodes at the next depth level.

* May use more memory than DFS. Because it needs to store all the at each depth level in the queue.

* Its usually implemented using a queue data structure.

### Algorithm to achieve BFS: ###

1.Create a queue
2.Enqueue the root node
3. As long as a node exists in the queue
    a. Dequeue the node from the front
    b. Read's the nodes value
    c. Enqueue the node's left child if it exists
    d. Enqueue the node's right child if it exists

```
    levelOrder(){
            const queue = []
            queue.push(this.root)
            while(queue.length){
                let curr = queue.shift()
                console.log(curr.value);
                if (curr.left) {
                    queue.push(curr.left)
                }
                if (curr.right) {
                    queue.push(curr.right)
                }
            }
        } 
```
### Minimum and maximum in BST ###

In BST the left child's value is always less than the parent's value and right's child value is always greater than the parent's value.
By that logic, we can safely say the left most leaf node is the smallest value in the tree and right most leaf node is the largest value in the tree. <br>

#### Algorithm for Minimum BST: ####

Just return the value of left most leaf node<br>

```
   min(root){
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }
```

#### Algorithm for Maximum BST: ####

Just return the value of right most leaf node<br>
```
 max(root){
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }
```
<br><hr>

### Binary search tree advantage: ###

* File System Organization: BSTs can be used to organize file systems efficiently. The BST structure allows for quick searching and sorting of files based on their names or other attributes.

* Insertion and Deletion: BSTs allow efficient insertion and deletion of nodes while maintaining the ordering property.

* Searching: BSTs are efficient for searching operations. The BST's ordering property allows for fast search operations, with a time complexity of O(log n) on average and O(n) in the worst case.

* Ordered Iteration: BSTs can be traversed in-order, which results in sorted output. 