class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }

}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if (root.right === null) {
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    min(root){
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }
}

const BST = new BinarySearchTree()
BST.insert(10)
BST.insert(20)
BST.insert(5)
BST.insert(1)
console.log(BST.min(BST.root));

console.log(BST);