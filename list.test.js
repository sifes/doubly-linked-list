const ArrayBasedList = require('./list.js')

describe('ArrayBasedList', () => {
	let list

	beforeEach(() => {
		list = new ArrayBasedList()
	})

	describe('length()', () => {
		it('returns 0 for empty list', () => {
			expect(list.length()).toBe(0)
		})

		it('returns the correct length after additions', () => {
			list.append('a')
			list.append('b')
			expect(list.length()).toBe(2)
		})
	})

	describe('append()', () => {
		it('adds element to empty list', () => {
			list.append('a')
			expect(list.get(0)).toBe('a')
			expect(list.length()).toBe(1)
		})

		it('adds elements to the end of the list', () => {
			list.append('a')
			list.append('b')
			list.append('c')
			expect(list.get(0)).toBe('a')
			expect(list.get(1)).toBe('b')
			expect(list.get(2)).toBe('c')
			expect(list.length()).toBe(3)
		})
	})

	describe('insert()', () => {
		it('inserts element at the beginning', () => {
			list.insert('a', 0)
			expect(list.get(0)).toBe('a')
			expect(list.length()).toBe(1)
		})

		it('inserts element in the middle', () => {
			list.append('a')
			list.append('c')
			list.insert('b', 1)
			expect(list.get(0)).toBe('a')
			expect(list.get(1)).toBe('b')
			expect(list.get(2)).toBe('c')
			expect(list.length()).toBe(3)
		})

		it('inserts element at the end', () => {
			list.append('a')
			list.append('b')
			list.insert('c', 2)
			expect(list.get(2)).toBe('c')
			expect(list.length()).toBe(3)
		})

		it('throws error for invalid index', () => {
			expect(() => {
				list.insert('a', -1)
			}).toThrow('Invalid index')

			expect(() => {
				list.insert('a', 1)
			}).toThrow('Invalid index')
		})
	})

	describe('Failing Test for List', () => {
		it('should deliberately fail to demonstrate CI failure', () => {
			const list = new List()

			// Add some elements
			list.append('a')
			list.append('b')
			list.append('c')

			// This assertion will fail because the length is 3, not 4
			expect(list.length()).toBe(4)
		})

		// This test will pass, showing that not all tests fail
		it('should still pass', () => {
			const list = new List()
			list.append('a')
			expect(list.length()).toBe(1)
		})
	})

	describe('delete()', () => {
		it('removes and returns the first element', () => {
			list.append('a')
			list.append('b')
			list.append('c')
			const deleted = list.delete(0)
			expect(deleted).toBe('a')
			expect(list.length()).toBe(2)
			expect(list.get(0)).toBe('b')
		})

		it('removes and returns the middle element', () => {
			list.append('a')
			list.append('b')
			list.append('c')
			const deleted = list.delete(1)
			expect(deleted).toBe('b')
			expect(list.length()).toBe(2)
			expect(list.get(0)).toBe('a')
			expect(list.get(1)).toBe('c')
		})

		it('removes and returns the last element', () => {
			list.append('a')
			list.append('b')
			list.append('c')
			const deleted = list.delete(2)
			expect(deleted).toBe('c')
			expect(list.length()).toBe(2)
			expect(list.get(0)).toBe('a')
			expect(list.get(1)).toBe('b')
		})

		it('removes the only element', () => {
			list.append('a')
			const deleted = list.delete(0)
			expect(deleted).toBe('a')
			expect(list.length()).toBe(0)
		})

		it('throws error for invalid index', () => {
			list.append('a')
			expect(() => {
				list.delete(-1)
			}).toThrow('Invalid index')

			expect(() => {
				list.delete(1)
			}).toThrow('Invalid index')
		})
	})

	describe('deleteAll()', () => {
		it('removes all occurrences of an element', () => {
			list.append('a')
			list.append('b')
			list.append('a')
			list.append('c')
			list.append('a')
			list.deleteAll('a')
			expect(list.length()).toBe(2)
			expect(list.get(0)).toBe('b')
			expect(list.get(1)).toBe('c')
		})

		it('does nothing if element is not found', () => {
			list.append('a')
			list.append('b')
			list.append('c')
			list.deleteAll('d')
			expect(list.length()).toBe(3)
		})

		it('handles removing all elements', () => {
			list.append('a')
			list.append('a')
			list.deleteAll('a')
			expect(list.length()).toBe(0)
		})
	})

	describe('get()', () => {
		it('returns element at specified index', () => {
			list.append('a')
			list.append('b')
			list.append('c')
			expect(list.get(0)).toBe('a')
			expect(list.get(1)).toBe('b')
			expect(list.get(2)).toBe('c')
		})

		it('throws error for invalid index', () => {
			list.append('a')
			expect(() => {
				list.get(-1)
			}).toThrow('Invalid index')

			expect(() => {
				list.get(1)
			}).toThrow('Invalid index')
		})
	})

	describe('clone()', () => {
		it('creates a copy of an empty list', () => {
			const cloned = list.clone()
			expect(cloned.length()).toBe(0)
		})

		it('creates an independent copy of the list', () => {
			list.append('a')
			list.append('b')
			list.append('c')

			const cloned = list.clone()
			expect(cloned.length()).toBe(3)
			expect(cloned.get(0)).toBe('a')
			expect(cloned.get(1)).toBe('b')
			expect(cloned.get(2)).toBe('c')

			// Verify changes to original don't affect clone
			list.append('d')
			expect(list.length()).toBe(4)
			expect(cloned.length()).toBe(3)

			// Verify changes to clone don't affect original
			cloned.append('e')
			expect(list.length()).toBe(4)
			expect(cloned.length()).toBe(4)
		})
	})

	describe('reverse()', () => {
		it('reverses the order of the elements', () => {
			list.append('a')
			list.append('b')
			list.append('c')
			list.reverse()
			expect(list.get(0)).toBe('c')
			expect(list.get(1)).toBe('b')
			expect(list.get(2)).toBe('a')
		})

		it('handles reversing empty list', () => {
			list.reverse()
			expect(list.length()).toBe(0)
		})

		it('handles reversing list with one element', () => {
			list.append('a')
			list.reverse()
			expect(list.length()).toBe(1)
			expect(list.get(0)).toBe('a')
		})
	})

	describe('findFirst()', () => {
		it('returns index of first occurrence', () => {
			list.append('a')
			list.append('b')
			list.append('a')
			list.append('c')
			expect(list.findFirst('a')).toBe(0)
		})

		it('returns -1 if element is not found', () => {
			list.append('a')
			list.append('b')
			list.append('c')
			expect(list.findFirst('d')).toBe(-1)
		})
	})

	describe('findLast()', () => {
		it('returns index of last occurrence', () => {
			list.append('a')
			list.append('b')
			list.append('a')
			list.append('c')
			expect(list.findLast('a')).toBe(2)
		})

		it('returns -1 if element is not found', () => {
			list.append('a')
			list.append('b')
			list.append('c')
			expect(list.findLast('d')).toBe(-1)
		})
	})

	describe('clear()', () => {
		it('removes all elements from the list', () => {
			list.append('a')
			list.append('b')
			list.append('c')
			list.clear()
			expect(list.length()).toBe(0)
		})

		it('works on empty list', () => {
			list.clear()
			expect(list.length()).toBe(0)
		})
	})

	describe('extend()', () => {
		it('adds elements from another list', () => {
			list.append('a')
			list.append('b')

			const otherList = new ArrayBasedList()
			otherList.append('c')
			otherList.append('d')

			list.extend(otherList)
			expect(list.length()).toBe(4)
			expect(list.get(0)).toBe('a')
			expect(list.get(1)).toBe('b')
			expect(list.get(2)).toBe('c')
			expect(list.get(3)).toBe('d')
		})

		it('creates independent copy of extended elements', () => {
			list.append('a')

			const otherList = new ArrayBasedList()
			otherList.append('b')
			otherList.append('c')

			list.extend(otherList)

			// Changes to otherList shouldn't affect original
			otherList.append('d')
			expect(list.length()).toBe(3)
			expect(otherList.length()).toBe(3)
		})

		it('throws error for invalid argument', () => {
			expect(() => {
				list.extend('not a list')
			}).toThrow('The argument must be an ArrayBasedList')
		})
	})

	describe('toString()', () => {
		it('returns string representation of the list', () => {
			list.append('a')
			list.append('b')
			list.append('c')
			expect(list.toString()).toBe('a → b → c')
		})

		it('returns empty string for empty list', () => {
			expect(list.toString()).toBe('')
		})
	})
})
