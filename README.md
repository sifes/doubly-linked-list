# Linked List Implementation

This repository contains an implementation of a linked list in JavaScript that provides common list operations.

## Features

The list implementation provides the following operations:

- `length()`: Return the number of elements in the list
- `append(element)`: Add an element to the end of the list
- `insert(element, index)`: Insert an element at a specified position
- `delete(index)`: Remove and return the element at a specified position
- `deleteAll(element)`: Remove all occurrences of an element
- `get(index)`: Get the element at a specified position
- `clone()`: Create a copy of the list
- `reverse()`: Reverse the order of elements in the list
- `findFirst(element)`: Find the index of the first occurrence of an element
- `findLast(element)`: Find the index of the last occurrence of an element
- `clear()`: Remove all elements from the list
- `extend(elements)`: Add all elements from another list
- `toString()`: Get a string representation of the list

## Installation

```bash
git clone https://github.com/sifes/doubly-linked-list
cd doubly-linked-list
yarn install
```

## Usage

```javascript
const List = require('./list')

// Create a new list
const list = new List()

// Add elements
list.append('a')
list.append('b')
list.append('c')
console.log(list.toString())

// Insert element at index 1
list.insert('d', 1)
console.log(list.toString())

// Get element at index 2
console.log(list.get(2))
```

For more examples, see the `demo.js` file.

## Testing

Run the tests:

```bash
yarn test
```

The tests are automatically run on every push to the main branch using GitHub Actions.

## Variant Calculation

Student number: 3213
Variant: 3213 % 4 = 1

Variant description: Implementation of a doubly linked list with Character elements supporting operations for determining length, adding elements, inserting at positions, deleting elements by index and value, retrieving elements, cloning, reversing, finding elements from head and tail, clearing, and extending with another list.

## Failed Test Commit

The commit where tests failed on CI can be found here: https://github.com/sifes/doubly-linked-list/actions/runs/14858295000

## Previous Implementations

This repository has been refactored to use a single, optimized implementation. If you want to see the previous implementation (which used a traditional doubly linked list with Node objects), you can check out an earlier commit:

```bash
# Clone the repository (if you haven't already)
git clone https://github.com/sifes/doubly-linked-list
cd doubly-linked-list

# List commits to find the appropriate commit
git log --oneline

# Check out the commit with the old implementation
git checkout <commit-hash>
```

The original implementation used custom Node objects with next/prev pointers, making it efficient for insertions and deletions at any position once you have a reference to the node. The current implementation has been optimized for the specific use cases of this project.

To return to the latest version after exploring the old implementation:

```bash
git checkout main
```

## Conclusions

After completing this project, I found that unit tests were immensely valuable in the development process, far from being a waste of time. Here's why:

1. **Guided Implementation**: Writing tests first helped clarify the exact functionality required for each method. The test specifications served as a detailed guide for implementation, ensuring I didn't miss any edge cases.

2. **Refactoring Confidence**: The most significant benefit came during the refactoring process. When switching from a Node-based implementation to an array-based one, the comprehensive test suite immediately verified that the new implementation maintained the same behavior. Without tests, I would have had to manually verify each method's functionality after refactoring.

3. **Bug Detection**: Several subtle bugs were caught during testing that might have gone unnoticed with manual testing alone. For example, edge cases in the `deleteAll()` method when removing the first or last elements were identified through tests.

4. **Documentation**: The tests serve as living documentation of how the list is supposed to behave. Anyone reading the tests can quickly understand the expected behavior of each method without having to read implementation details.

The CI pipeline also proved valuable by ensuring tests pass on different environments and preventing broken code from being merged. The deliberately failing test demonstrated how CI can catch issues before they affect the main codebase.

Overall, the time invested in writing tests paid off many times over in reduced debugging time and increased confidence in the code's correctness.
