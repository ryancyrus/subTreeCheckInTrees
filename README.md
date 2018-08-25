# subTreeCheckInTrees

Coding Challenge

The problem boils down to this: given a tree called dom, and another tree called vdom, is vdom a subtree of dom?
A smart way of determining whether a tree is a subtree of another: simply create a string from a preorder traversal of both trees, then check if one string is a subset of another. 

1. Now, in the real world, the DOM is a tree with an arbitrary number children on each node. How would you modify this code, which is currently for a binary tree, to make it work for a k-ary tree, where k is the maximum number of children a node can have?

2. Constructing strings and doing string comparisons is immensely expensive, both memory-wise and computation-wise. Devise an algorithm other than comparing generated strings to determine if a k-ary tree is a subtree of another k-ary tree.
