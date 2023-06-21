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

    remove(value){
        this.root = this.removeNode(this.root,value)
    }

    removeNode(root,value){
        if (root == null) {
            return root
        }
        if (value < root.value) {
            root.left = this.removeNode(root.left,value)
        }else if (value > root.value) {
            root.right = this.removeNode(root.right,value)
        }else {
            if (!root.left && root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }else if (root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.removeNode(root.right , root.value)
        }
        return root
    }
    inOrder(root){
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
}

const BST = new BinarySearchTree()
BST.insert(10)
BST.insert(20)
BST.insert(5)
BST.insert(5)
BST.inOrder(BST.root)
BST.remove(20)

BST.inOrder(BST.root)
console.log(BST);