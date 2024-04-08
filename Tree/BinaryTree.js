const TreeNode = require("./TreeNode");

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new TreeNode(value)
        if(this.root === null) {
            this.root = node;
            return this;
        }
        let current = this.root
        let insertedNode = false;

        while(!insertedNode) {
            if(value === current.value) {
                return null;
            }
            if (value < current.value) {
                if (!current.left) {
                    current.left = node;
                    insertedNode = true;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = node;
                    insertedNode = true;
                }
                current = current.right;
            }
        }
    }

    remove(value) {
        if(this.root === null) {
            return null;
        }
        let current = this.root
        let removedNode = false;
        let parent = this.root

        while(!removedNode) {
            if(value === current.value) {
                removedNode = true
                current.value = null;                
                if (current.left) {
                    parent.left = current.left;
                    current.left = null;
                }                                
                if (current.right) {
                    parent.right = current.right;
                    current.right = null;
                }
                return removedNode;
            }
            if (value < current.value) {
                if (current.left) {
                    parent = current;
                    current = current.left;
                }
            } else if (value > current.value)   {
                if (current.right) {
                    parent = current;
                    current = current.right;
                }
            } else {
                return;
            }
        }
        return false;
    }

    search(value) {
        if(this.root === null) {
            return null;
        }
        let current = this.root
        let found = false;

        while(!found) {
            if(value === current.value) {
                found = true
                return current;
            }
            if (value < current.value) {
                if (current.left) {
                    current = current.left;
                } 
            } else if (value > current.value)  {
                if (current.right) {
                    current = current.right;
                }
            } else {
                return;
            }
        }
        return false;
    } 
}

module.exports = BinaryTree;
    