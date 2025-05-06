class ArrayBasedList {
	constructor() {
		this.elements = [] // Store elements in an array
	}

	// Returns the number of elements in the list
	length() {
		return this.elements.length
	}

	// Adds an element to the end of the list
	append(element) {
		this.elements.push(element)
	}

	// Inserts an element at a specified position
	insert(element, index) {
		if (index < 0 || index > this.elements.length) {
			throw new Error('Invalid index')
		}
		this.elements.splice(index, 0, element)
	}

	// Removes and returns the element at the specified position
	delete(index) {
		if (index < 0 || index >= this.elements.length) {
			throw new Error('Invalid index')
		}
		return this.elements.splice(index, 1)[0]
	}

	// Removes all elements matching the specified value
	deleteAll(element) {
		for (let i = this.elements.length - 1; i >= 0; i--) {
			if (this.elements[i] === element) {
				this.elements.splice(i, 1)
			}
		}
	}

	// Gets the element at the specified position
	get(index) {
		if (index < 0 || index >= this.elements.length) {
			throw new Error('Invalid index')
		}
		return this.elements[index]
	}

	// Creates and returns a copy of the list
	clone() {
		const newList = new ArrayBasedList()
		newList.elements = [...this.elements]
		return newList
	}

	// Reverses the order of elements in the list
	reverse() {
		this.elements.reverse()
	}

	// Finds the first occurrence of the element from the head
	findFirst(element) {
		return this.elements.indexOf(element)
	}

	// Finds the last occurrence of the element from the tail
	findLast(element) {
		return this.elements.lastIndexOf(element)
	}

	// Removes all elements from the list
	clear() {
		this.elements = []
	}

	// Adds all elements from another list
	extend(elements) {
		if (!(elements instanceof ArrayBasedList)) {
			throw new Error('The argument must be an ArrayBasedList')
		}
		// Clone the elements to avoid reference issues
		this.elements = [...this.elements, ...elements.elements]
	}

	// Helper method to display the list for debugging
	toString() {
		return this.elements.join(' → ')
	}
}

module.exports = ArrayBasedList
