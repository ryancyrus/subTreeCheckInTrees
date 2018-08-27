# subTreeCheckInTrees

Coding Challenge

The problem boils down to this: given a tree called dom, and another tree called vdom, is vdom a subtree of dom?

1. Create a working solution using pre-order traversal for binary trees.

2. Now, in the real world, the DOM is a tree with an arbitrary number children on each node. How would you modify this code, which is currently for a binary tree, to make it work for a k-ary tree, where k is the maximum number of children a node can have?

3. Constructing strings and doing string comparisons is immensely expensive, both memory-wise and computation-wise. Devise an algorithm other than comparing generated strings to determine if a k-ary tree is a subtree of another k-ary tree.


Please install required packages.
```
npm install
```
After package installation is complete. All the test can be run using:
```
npm run test
```