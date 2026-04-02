/* eslint-disable @typescript-eslint/no-unused-vars*/
/**
 * Implements the functions.
 * Only replace the `// return *`
 * All the inputs should not be mutated !
 */

/**
 * Exercice 1:
 * Convert string to array of characters.
 *
 * Use: ...
 */
export const getArrayFromString = (_s: string) => {
  return ''
}

/**
 * Exercice 2:
 * Get the second item of the array.
 *
 * Use: at()
 */
export const getSecondItem = <T>(_arr: T[]): T | undefined => {
  return undefined
}

/**
 * Exercice 3:
 * Get the second to last item t of the array.
 *
 * Use: at()
 */
export const getSecondToLastItem = <T>(_arr: T[]): T | undefined => {
  return undefined
}

/**
 * Exercice 4:
 * Only keep the strings
 *
 * Use: filter()
 */
export const getStringItems = (_arr: Array<string | unknown>): string[] => {
  return []
}

/**
 * Exercice 5:
 * Only keep the even indices
 *
 * Use: filter()
 */
export const getItemAtEvenIndices = <T>(_arr: T[]): T[] => {
  return []
}

/**
 * Exercice 6:
 * Reverse order ot the items
 *
 * Use: reverse() or toReversed()
 */
export const reverseOrder = <T>(_arr: T[]): T[] => {
  return []
}

/**
 * Exercice 7:
 * Sort Array by order
 *
 * Use: sort() or toSorted()
 */
export const sortByOrder = (_arr: TypeEx4[]): TypeEx4[] => {
  return []
}
interface TypeEx4 {
  name: string
  order: number
}

/**
 * Exercice 8:
 * Get only one Array with all the values.
 *
 * Use: flatMap() or flat()
 */
export const flatArray = (_arr: unknown[]): unknown[] => {
  return []
}

/**
 * Exercice 9:
 * Indicate if it has a number above threshold.
 *
 * Use: some()
 */
export const hasItemAboveThreshold = (
  _arr: number[],
  _threshold: number,
): boolean => {
  return false
}

/**
 * Exercice 10:
 * Indicate if it has a number above threshold.
 *
 * Use: every()
 */
export const hasAllItemAboveThreshold = (
  _arr: number[],
  _threshold: number,
): boolean => {
  return false
}

const hasLowerCase = (s: string): boolean => /[a-z]/.test(s)
const hasUpperCase = (s: string): boolean => /[A-Z]/.test(s)
const hasNumber = (s: string): boolean => /\d/.test(s)
const hasSpecialChar = (s: string): boolean => /[ *\-?!&'",;:()^$/\\]/.test(s)
const isLong = (s: string): boolean => s.length >= 8
/**
 * Exercice 11:
 * Indicate if the password is strong.
 * A strong password is at least 8-characters long
 * AND satisfies those 4 conditions :
 * - has a lowercase
 * - hase an uppercase
 * - has a number
 * - has a special character
 *
 * Use only : 1 every()
 */
export const isStrongPassword = (password: string): boolean => {
  return false
}

/**
 * Exercice 12:
 * Sort all the artists by french alphabetical order.
 *
 * Use only : 1 flat() or 1 flatMap() , 1 toSorted
 */
export const sortArtists = (
  _data: Record<number, Array<{ artist: string; title: string }>>,
): string[] => {
  return []
}

const removeDiacritics = (s: string): string =>
  s.normalize('NFD').replace(/\p{Diacritic}/gu, '')
/**
 * Exercice 13:
 * Group all artists from Exercice 12 by count of vowels (aeiouy) in their name.
 * Ex:
 * ```
 * {
 *  1: ['Dr. Dre', 'Blink 182']
 *  2: ['Ayo', 'Idriss'],
 *  3: ['Eminem']
 * }
 * ```
 *
 * Use only:1 filter, 1 length, 1 reduce, 1 removeDiacritics,  1 sortArtists
 */
export const groupByVowelCount = (
  _data: Record<number, Array<{ artist: string; title: string }>>,
): Record<number, string[]> => {
  return {}
}

/**
 * Exercice 14:
 * a) Generate all integers from 1 to end included (consider _start always < _end)
 *    use only the `_end` param and start = 1
 * b) Generate all integers from start to end, both included (consider _start always < _end)
 *    use only the `_start` and `_end` param
 * c) Generate all integers from start to end with step (consider _start always < _end)
 * d) Generate all integers from start to end with step (can be decreasing)
 *
 *
 * Use : [...Array()], Array.keys(), map, Math.floor(), Math.sign, Math.abs
 */
export const range = (_start: number, _end: number, _step = 1): number[] => {
  return []
}
