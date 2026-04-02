 
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
  return Array.from(_s)
}

/**
 * Exercice 2:
 * Get the second item of the array.
 *
 * Use: at()
 */
export const getSecondItem = <T>(_arr: T[]): T | undefined => {
  return _arr[1]
}

/**
 * Exercice 3:
 * Get the second to last item t of the array.
 *
 * Use: at()
 */
export const getSecondToLastItem = <T>(_arr: T[]): T | undefined => {
  return _arr[_arr.length - 2]
}

/**
 * Exercice 4:
 * Only keep the strings
 *
 * Use: filter()
 */
export const getStringItems = (_arr: Array<string | unknown>): string[] => {
  return _arr.filter(item => typeof item === "string")
}

/**
 * Exercice 5:
 * Only keep the even indices
 *
 * Use: filter()
 */
export const getItemAtEvenIndices = <T>(_arr: T[]): T[] => {
  return _arr.filter((_, index) => index % 2 === 0)
}

/**
 * Exercice 6:
 * Reverse order ot the items
 *
 * Use: reverse() or toReversed()
 */
export const reverseOrder = <T>(_arr: T[]): T[] => {
  return _arr.toReversed()
}

/**
 * Exercice 7:
 * Sort Array by order
 *
 * Use: sort() or toSorted()
 */
export const sortByOrder = (_arr: TypeEx4[]): TypeEx4[] => {
  return [..._arr].sort((a, b) => a.order - b.order)
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
  return _arr.flat(Infinity)
  // return _arr.flatMap(item => Array.isArray(item) ? flatArray(item) : item)
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
  return _arr.some(item => item > _threshold)
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
  return _arr.every(item => item > _threshold)
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
  return [
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasSpecialChar,
    isLong,
  ].every(p => p(password))
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
  const toto =  Object.values(_data).flat().flatMap(item => item.artist).toSorted((a, b) => a.localeCompare(b))
  return toto
  
}


const removeDiacritics = (str: string) =>
  str.normalize('NFKD').replace(/\p{Diacritic}/gu, '')

const VOWELS = 'aeiouy'

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
  return sortArtists(_data).reduce<Record<number, string[]>>((prev, curr) => {
    const vowelsCount = Array.from(removeDiacritics(curr).toLocaleLowerCase())
      .filter(letter => VOWELS.includes(letter))
      .length
    const preVowelsCountGroup = (prev[vowelsCount] || [])

    return {...prev, [Number(vowelsCount)]: [...preVowelsCountGroup, curr]}
  }, {})
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
 * Use : [...Array()), Array.keys(), map, Math.floor(), Math.sign
 */
export const range = (_start: number, _end: number, _step = 1): number[] => {
  const result: number[] = [_start]
  const isReverse = (_start - _end) > 0
  const getNext = () => result[result.length-1] + (isReverse ? -_step : _step)
  let next = getNext();

  while (isReverse ? next >= _end : next <= _end ) {
    result.push(next)    
    next = getNext()
  } 
  return result
}


export const range2 = (_start: number, _end: number, _step = 1): number[] => {
  const diff = (_end - _start) / _step
  const direction = Math.sign(diff)
  const numberOfElements = Math.floor(diff + 1) * direction
  
  return [...Array(numberOfElements)].map((_, index) => {
    return  _start + (index * _step * direction)
  }) 
}