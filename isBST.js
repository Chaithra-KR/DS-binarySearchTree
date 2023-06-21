class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    isBST() {
        return this.isBstHelper(this.root,0,Infinity);
    }

    isBstHelper(root, min, max) {
        if (root === null) {
            return true;
        }
        if (root.value < min || root.value > max) {
            return false;
        }
        return (
            this.isBstHelper(root.left, min, root.value - 1) &&
            this.isBstHelper(root.right, root.value + 1, max)
        );
    }
}

const BST = new BinarySearchTree();
BST.insert(10);
BST.insert(20);
BST.insert(55);
BST.insert(5);
console.log(BST.isBST());

