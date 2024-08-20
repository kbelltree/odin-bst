class Node {
  constructor(value, leftChild = null, rightChild = null) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class Tree {
  constructor(array) {
    const filteredAndSortedArr = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(
      filteredAndSortedArr,
      0,
      filteredAndSortedArr.length - 1
    );
  }

  buildTree(array, startIndex, endIndex) {
    if (startIndex > endIndex) {
      return null;
    }
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    const node = new Node(array[middleIndex]);
    node.leftChild = this.buildTree(array, startIndex, middleIndex - 1);
    node.rightChild = this.buildTree(array, middleIndex + 1, endIndex);
    return node;
  }

  // Node added in the parameter to auto start from this.root
  insert(value, node = this.root) {
    if (node === null) {
      return new Node(value);
    }
    if (value === node.value) {
      throw new Error(
        `Enter a unique number. This number "${value}" already exists.`
      );
    }
    if (value < node.value) {
      node.leftChild = this.insert(value, node.leftChild);
    } else if (value > node.value) {
      node.rightChild = this.insert(value, node.rightChild);
    }
    return node;
  }

  delete(value, node = this.root) {
    if (node === null) {
      return null;
    }

    // Search left and right by value comparison
    if (value < node.value) {
      node.leftChild = this.delete(value, node.leftChild);
    } else if (value > node.value) {
      node.rightChild = this.delete(value, node.rightChild);

      // Process according to the node's condition once value is found
    } else {
      // 1. Leaf node
      if (node.leftChild === null && node.rightChild === null) {
        return null;
      }

      // 2. Only one child node
      if (node.leftChild === null && node.rightChild !== null) {
        return node.rightChild;
      }
      if (node.rightChild === null && node.leftChild !== null) {
        return node.leftChild;
      }

      // 3. Both side has child node
      // Overwrite with in-order successor value
      node.value = this.getMinOfRSub(node.rightChild);

      // Delete the in-order successor node
      node.rightChild = this.delete(node.value, node.rightChild);
    }
    return node;
  }

  // Helper Function: Get the in-order successor's value
  getMinOfRSub(node) {
    let currentNode = node;
    while (currentNode.leftChild !== null) {
      currentNode = currentNode.leftChild;
    }
    return currentNode.value;
  }

  find(value, node = this.root) {
    if (node === null) {
      return null;
    }
    if (value === node.value) {
      return node;
    }
    if (value < node.value) {
      return this.find(value, node.leftChild);
    } else if (value > node.value) {
      return this.find(value, node.rightChild);
    }
  }

  levelOrder(callback, node = this.root) {
    if (!callback) {
      throw new Error("Undefined is not a function.");
    }
    if (node === null) {
      return;
    }

    // Initialize the queue with the root node
    let queue = [node];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      callback(currentNode);
      if (currentNode.leftChild !== null) {
        queue.push(currentNode.leftChild);
      }
      if (currentNode.rightChild !== null) {
        queue.push(currentNode.rightChild);
      }
    }
  }

  inOrder(callback, node = this.root) {
    if (!callback) {
      throw new Error("Undefined is not a function.");
    }
    if (node === null) {
      return;
    }
    this.inOrder(callback, node.leftChild);
    callback(node);
    this.inOrder(callback, node.rightChild);
  }

  preOrder(callback, node = this.root) {
    if (!callback) {
      throw new Error("Undefined is not a function.");
    }
    if (node === null) {
      return;
    }
    callback(node);
    this.preOrder(callback, node.leftChild);
    this.preOrder(callback, node.rightChild);
  }

  postOrder(callback, node = this.root) {
    if (!callback) {
      throw new Error("Undefined is not a function.");
    }
    if (node === null) {
      return;
    }
    this.postOrder(callback, node.leftChild);
    this.postOrder(callback, node.rightChild);
    callback(node);
  }

  height(node = this.root) {
    if (node === null) {
      return -1;
    }

    // Return the higher number of either side
    return (
      Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1
    );
  }

  depth(targetNode, node = this.root) {
    if (targetNode === null || node === null) {
      return -1;
    }
    if (targetNode.value === node.value) {
      return 0;
    }
    if (targetNode.value < node.value) {
      return this.depth(targetNode, node.leftChild) + 1;
    } else {
      return this.depth(targetNode, node.rightChild) + 1;
    }
  }

  // Helper function: boolean and height is returned in object
  checkBalanceAndHeight(node) {
    // Base: Both null means it is balanced
    if (node === null) {
      return { isTrue: true, height: -1 };
    }

    // Find the height balance left first then right
    const lSubtreeH = this.checkBalanceAndHeight(node.leftChild);

    // Exit in case unbalanced tree is found
    if (!lSubtreeH.isTrue) {
      return lSubtreeH;
    }

    const rSubtreeH = this.checkBalanceAndHeight(node.rightChild);
    if (!rSubtreeH.isTrue) {
      return rSubtreeH;
    }

    // Calculate current node's height
    const currentHeight = Math.max(lSubtreeH.height, rSubtreeH.height) + 1;

    // Check if left / right subtrees are balanced
    const isBalanced = Math.abs(lSubtreeH.height - rSubtreeH.height) <= 1;
    return { isTrue: isBalanced, height: currentHeight };
  }

  isBalanced(node = this.root) {
    return this.checkBalanceAndHeight(node).isTrue;
  }

  rebalance() {
    let array = [];
    this.inOrder((node) => array.push(node.value));
    return this.buildTree(array, 0, array.length - 1);
  }
}

function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.rightChild !== null) {
    prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.leftChild !== null) {
    prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

function makeRandomNumberArray(min, max, lengthValue = 1) {
  return Array.from(
    { length: lengthValue },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}

module.exports = { Tree, prettyPrint, makeRandomNumberArray };
