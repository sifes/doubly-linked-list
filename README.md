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
