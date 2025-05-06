const ArrayBasedList = require('./list')

// Create a new list
const list = new ArrayBasedList()
console.log('Empty list length:', list.length())

// Append elements
console.log('\nAppending elements...')
list.append('a')
list.append('b')
list.append('c')
console.log('List:', list.toString())
console.log('Length:', list.length())

// Insert element
console.log('\nInserting element at index 1...')
list.insert('d', 1)
console.log('List:', list.toString())

// Get element
console.log('\nElement at index 2:', list.get(2))

// Find elements
console.log('\nAppending more elements...')
list.append('c')
list.append('e')
console.log('List:', list.toString())
console.log('First occurrence of "c" at index:', list.findFirst('c'))
console.log('Last occurrence of "c" at index:', list.findLast('c'))

// Clone the list
console.log('\nCloning list...')
const clonedList = list.clone()
console.log('Original list:', list.toString())
console.log('Cloned list:', clonedList.toString())

// Reverse the list
console.log('\nReversing original list...')
list.reverse()
console.log('Reversed list:', list.toString())

// Delete element
console.log('\nDeleting element at index 2...')
const deleted = list.delete(2)
console.log('Deleted element:', deleted)
console.log('List after deletion:', list.toString())

// Delete all occurrences
console.log('\nDeleting all occurrences of "c"...')
list.deleteAll('c')
console.log('List after deleting all "c":', list.toString())

// Extend the list
console.log('\nExtending list with cloned list...')
list.extend(clonedList)
console.log('Extended list:', list.toString())

// Clear the list
console.log('\nClearing the list...')
list.clear()
console.log('List after clearing:', list.toString())

// Try to use invalid operations (uncomment to see errors)
/*
console.log('\nTrying invalid operations:');
try {
	list.insert('x', 10);
} catch (error) {
	console.log('Insert error:', error.message);
}

try {
	list.delete(5);
} catch (error) {
	console.log('Delete error:', error.message);
}

try {
	list.get(3);
} catch (error) {
	console.log('Get error:', error.message);
}
*/
