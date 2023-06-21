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

    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
}

const BST = new BinarySearchTree()
BST.insert(10)
BST.insert(5)
BST.insert(15)
BST.insert(3)
BST.insert(7)



BST.preOrder(BST.root)
console.log(BST);