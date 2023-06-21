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
}

const BST = new BinarySearchTree()
BST.insert(10)
BST.insert(20)
BST.insert(5)
BST.insert(15)
BST.levelOrder()
console.log(BST);