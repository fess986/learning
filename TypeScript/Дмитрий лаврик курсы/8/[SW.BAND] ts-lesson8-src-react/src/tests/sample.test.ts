import { expect, test } from 'vitest'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function moronSum(a: any, b: any): number{
	return a + b;
}


test('adds 1 + 2 to equal 3', () => {
	expect(moronSum(1, 2)).toBe(3)
	/* expect(moronSum(1, '2')).toBe(3) */
})