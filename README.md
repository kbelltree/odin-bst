## Project: Binary Search Trees

This project involves the implementation of a Binary Search Tree in JavaScript, using either class or factory functions. For comprehensive details on this project, please refer to [The Odin Project - Project: Binary Search Trees](https://www.theodinproject.com/lessons/javascript-binary-search-trees).

## Key Project Instructions:

Remove duplicates and sort the array before creating the BST.

### Two Classes or Factory Functions

The project consists of two main components:

- `Node`:<br>
  Consists of data, left child, and right child attributes.

- `Tree`:<br>
  Takes an array and stores the BST created from `buildTree` in the root attribute.

### Methods To Implement

- `buildTree(array)`:<br>
  Develop a balanced BST from an array of data. This tree should contain Node instances for each piece of data. The returned value should be the topmost node.

- `insert(value)`:<br>
  Insert a value. The key is to directly manipulate the BST by traversing it, which should achieve a time efficiency of O(log n).

- `delete(value)`:<br>
  Delete a value. This operation should consider time efficiency of O(log n) and include several key factors as conditions to achieve deletion.

- `find(value)`:<br>
  Search for and return a node containing the value.

- `levelOrder(callback)`, `inOrder(callback)`, `preOrder(callback)`, `postOrder(callback)`:<br>
  Traverse each node in their distinctive breadth or depth-first orders, like `Array.prototype.forEach`, and apply a callback on each node. This callback takes a node as its parameter. An error should be thrown if no callback is passed.
- `height(node)`:<br>
  Returns the height of the node passed.

- `depth(node)`:<dr>
  Returns the depth of the node passed.

- `isBalanced`:<dr>
  Inspect if the tree is balanced.

- `rebalance`:<br>
  Fix the unbalanced tree to be balanced. The key is to recreate an array utilizing a traversal method and apply it to `buildTree`.

**[Link to my final solution](./bst.js)**

### Driver Script

1. Create a BST from an array of numbers less than 100.
2. Verify the BST is balanced using `isBalanced`.
3. Print all elements in level, pre, post, and in orders.
4. Add some numbers that are more than 100 to unbalance the tree.
5. Verify the BST is unbalanced using `isBalanced`.
6. Make the BST balanced using `rebalance`.
7. Verify the BST is balanced using `isBalanced`.
8. Print all elements in level, pre, post, and in orders.

**[Link to the driver script](./driver.js)**

## Built With

- JavaScript
- ESLint
- Prettier

---

### Referenced Tutorials

- [What is the fastest way to remove duplicates from an array in javascript? by Mathieu Collette](https://medium.com/@collettemathieu/what-is-the-fastest-way-to-remove-duplicates-from-an-array-in-javascript-9e5b4d3f55e1)

- [Breadth first search by Programiz](https://www.programiz.com/dsa/graph-bfs)

- [Recursive Level-order Traversal by Baeldung](https://www.baeldung.com/cs/level-order-traversal-binary-tree#2-recursive-level-order-traversal)

- [Recursive Binary Tree Traversals: Preorder, Inorder and Postorder by EnjoyAlgorithms](https://www.enjoyalgorithms.com/blog/binary-tree-traversals-preorder-inorder-postorder)

- [Find height of a binary tree by mycodeschool](https://youtu.be/_pnqMz5nrRs?si=EJlci-rvKYeszRZI)

- [Finding height in Binary Search Tree by Stack Overflow](https://stackoverflow.com/questions/2597637/finding-height-in-binary-search-tree)

- [Test If A Binary Tree Is Height Balanced ("Balanced Binary Tree" on LeetCode) by Back To Back SWE](https://youtu.be/LU4fGD-fgJQ?si=Kujoe52ti6EAZmJx);

- [Program to check whether a tree is height balanced or not in C++ by Tutorials Point](https://www.tutorialspoint.com/program-to-check-whether-a-tree-is-height-balanced-or-not-in-cplusplus)

- [Interview Question: Balanced Binary Tree by Byte by Byte](https://youtu.be/nOcFiGl5Vy4?si=Ihn2ABXT4apioIEE)

- [Balanced Binary Tree - Leetcode 110 - Python by NeetCode](https://youtu.be/QfJsau0ItOY?si=dJ73cjLHHd4aB5D7)

- [Generate a JavaScript array of random integers in a given range by 30 seconds of code](https://www.30secondsofcode.org/js/s/random-integer-array-in-range/)
