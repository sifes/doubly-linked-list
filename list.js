class Node {
	constructor(data) {
		this.data = data
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	// Returns the number of elements in the list
	length() {
		return this.size
	}

	// Adds an element to the end of the list
	append(element) {
		const newNode = new Node(element)

		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.prev = this.tail
			this.tail.next = newNode
			this.tail = newNode
		}

		this.size++
	}

	// Inserts an element at a specified position
	insert(element, index) {
		if (index < 0 || index > this.size) {
			throw new Error('Invalid index')
		}

		const newNode = new Node(element)

		// If inserting at the beginning
		if (index === 0) {
			if (!this.head) {
				this.head = newNode
				this.tail = newNode
			} else {
				newNode.next = this.head
				this.head.prev = newNode
				this.head = newNode
			}
		}
		// If inserting at the end
		else if (index === this.size) {
			newNode.prev = this.tail
			this.tail.next = newNode
			this.tail = newNode
		}
		// If inserting in the middle
		else {
			let current = this.head
			for (let i = 0; i < index; i++) {
				current = current.next
			}

			newNode.next = current
			newNode.prev = current.prev
			current.prev.next = newNode
			current.prev = newNode
		}

		this.size++
	}

	// Removes and returns the element at the specified position
	delete(index) {
		if (index < 0 || index >= this.size) {
			throw new Error('Invalid index')
		}

		let removedNode

		// If removing the first element
		if (index === 0) {
			removedNode = this.head

			if (this.size === 1) {
				this.head = null
				this.tail = null
			} else {
				this.head = this.head.next
				this.head.prev = null
			}
		}
		// If removing the last element
		else if (index === this.size - 1) {
			removedNode = this.tail
			this.tail = this.tail.prev
			this.tail.next = null
		}
		// If removing from the middle
		else {
			let current = this.head
			for (let i = 0; i < index; i++) {
				current = current.next
			}

			removedNode = current
			current.prev.next = current.next
			current.next.prev = current.prev
		}

		this.size--
		return removedNode.data
	}

	// Removes all elements matching the specified value
	deleteAll(element) {
		let current = this.head

		while (current) {
			const next = current.next

			if (current.data === element) {
				// If removing the head
				if (current === this.head) {
					this.head = current.next
					if (this.head) {
						this.head.prev = null
					} else {
						this.tail = null
					}
				}
				// If removing the tail
				else if (current === this.tail) {
					this.tail = current.prev
					this.tail.next = null
				}
				// If removing from the middle
				else {
					current.prev.next = current.next
					current.next.prev = current.prev
				}

				this.size--
			}

			current = next
		}
	}

	// Gets the element at the specified position
	get(index) {
		if (index < 0 || index >= this.size) {
			throw new Error('Invalid index')
		}

		let current

		// Optimize traversal - start from the closest end
		if (index < this.size / 2) {
			current = this.head
			for (let i = 0; i < index; i++) {
				current = current.next
			}
		} else {
			current = this.tail
			for (let i = this.size - 1; i > index; i--) {
				current = current.prev
			}
		}

		return current.data
	}

	// Creates and returns a copy of the list
	clone() {
		const newList = new DoublyLinkedList()
		let current = this.head

		while (current) {
			newList.append(current.data)
			current = current.next
		}

		return newList
	}

	// Reverses the order of elements in the list
	reverse() {
		if (this.size <= 1) {
			return
		}

		let current = this.head
		let temp = null

		// Swap next and prev for all nodes
		while (current) {
			// Store next
			temp = current.next

			// Swap next and prev
			current.next = current.prev
			current.prev = temp

			// Move to the next node
			current = temp
		}

		// Swap head and tail
		temp = this.head
		this.head = this.tail
		this.tail = temp
	}

	// Finds the first occurrence of the element from the head
	findFirst(element) {
		let current = this.head
		let index = 0

		while (current) {
			if (current.data === element) {
				return index
			}

			current = current.next
			index++
		}

		return -1
	}

	// Finds the last occurrence of the element from the tail
	findLast(element) {
		let current = this.tail
		let index = this.size - 1

		while (current) {
			if (current.data === element) {
				return index
			}

			current = current.prev
			index--
		}

		return -1
	}

	// Removes all elements from the list
	clear() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	// Adds all elements from another list
	extend(elements) {
		// Make sure we're working with a DoublyLinkedList
		if (!(elements instanceof DoublyLinkedList)) {
			throw new Error('The argument must be a DoublyLinkedList')
		}

		// Clone the elements to avoid reference issues
		const clonedList = elements.clone()
		let current = clonedList.head

		while (current) {
			this.append(current.data)
			current = current.next
		}
	}

	// Helper method to display the list for debugging
	toString() {
		const elements = []
		let current = this.head

		while (current) {
			elements.push(current.data)
			current = current.next
		}

		return elements.join(' → ')
	}
}

module.exports = DoublyLinkedList
