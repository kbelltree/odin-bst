const { Tree, prettyPrint, makeRandomNumberArray } = require('./bst');
 
// 1. Create a binary search tree from an array of random numbers < 100.
let balanceTest = new Tree(makeRandomNumberArray(-30, 100, 30));
prettyPrint(balanceTest.root);

// 2. Confirm that the tree is balanced by calling isBalanced.
let isBalancedTest = balanceTest.isBalanced();
console.log("balanced? ", isBalancedTest);

// 3. Print out all elements in level, pre, post, and in order.
balanceTest.levelOrder(prettyPrint); 
balanceTest.preOrder(prettyPrint); 
balanceTest.postOrder(prettyPrint);
balanceTest.inOrder(prettyPrint); 

// 4. Unbalance the tree by adding several numbers > 100.
balanceTest.insert(101);
balanceTest.insert(230);
balanceTest.insert(999);

// 5. Confirm that the tree is unbalanced by calling isBalanced.
console.log(balanceTest.isBalanced());

// 6. Balance the tree by calling rebalance.
const rebalanced = balanceTest.rebalance();

// 7. Confirm that the tree is balanced by calling isBalanced.
console.log(balanceTest.isBalanced(rebalanced));

// 8. Print out all elements in level, pre, post, and in order.
balanceTest.levelOrder(prettyPrint, rebalanced); 
balanceTest.preOrder(prettyPrint, rebalanced); 
balanceTest.postOrder(prettyPrint, rebalanced);
balanceTest.inOrder(prettyPrint, rebalanced); 