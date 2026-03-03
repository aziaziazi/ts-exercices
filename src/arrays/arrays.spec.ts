import {
  flatArray,
  getArrayFromString,
  getItemAtEvenIndices,
  getSecondItem,
  getSecondToLastItem,
  getStringItems,
  groupByVowelCount,
  hasAllItemAboveThreshold,
  hasItemAboveThreshold,
  isStrongPassword,
  range,
  reverseOrder,
  sortArtists,
  sortByOrder,
} from './arrays.ts'
import { describe, expect, test } from 'vitest'
import { OneHitWonders } from './data.ts'

describe('Array exercices', () => {
  describe('Warmup - 1 to 10', () => {
    test('Ex 1: it should get array from string', () => {
      expect(getArrayFromString('Hello')).toEqual(['H', 'e', 'l', 'l', 'o'])
    })

    test('Ex 2: it should get the second item', () => {
      const array = ['One', 2, 'Three', 4]
      expect(getSecondItem(array)).toEqual(2)
    })

    test('Ex 3: it should get the second to last (penultimate) item', () => {
      const array = ['One', 2, 'Three', 4]
      expect(getSecondToLastItem(array)).toEqual('Three')
    })

    test('Ex 4: it should get only the items of type string', () => {
      expect(getStringItems(['One', 2, 'Three', 4, {}])).toEqual([
        'One',
        'Three',
      ])
      expect(getStringItems([1, 2, 3])).toEqual([])
    })

    test('Ex 5: it should get the items at even index', () => {
      expect(getItemAtEvenIndices([1, 54, 2, 55, 3, 33])).toEqual([1, 2, 3])
      expect(getItemAtEvenIndices(['H', 'RT', 'E', 3, 'Y', 45])).toEqual([
        'H',
        'E',
        'Y',
      ])
    })

    test('Ex 6: it should reverse the order', () => {
      const arr = [1, 2, 3]
      const res = reverseOrder(arr)
      expect(arr).toEqual([1, 2, 3])
      expect(res).toEqual([3, 2, 1])
    })

    test('Ex 7: it should sort by Order property', () => {
      const arr = [
        { name: 'Harry', order: 2 },
        { name: 'Hermione', order: 1 },
        { name: 'Ron', order: 3 },
      ]
      const res = sortByOrder(arr)
      expect(arr.map(i => i.name)).toEqual(['Harry', 'Hermione', 'Ron'])
      expect(res.map(i => i.name)).toEqual(['Hermione', 'Harry', 'Ron'])
    })

    test('Ex 8: it should flatten array', () => {
      const arr = [
        ['Never'],
        ['gonna', 'give'],
        [['You', 'up,'], ['Never', 'gonna'], [['let', ['You', 'down']]]],
      ]
      const res = flatArray(arr)
      expect(arr).toHaveLength(3)
      expect(res.join(' ')).toEqual(
        'Never gonna give You up, Never gonna let You down',
      )
    })
    test('Ex 9: it should indicate if it has an item above the threshold', () => {
      const arr = [1, 4, 5, 8, 2, 3, 1]
      expect(hasItemAboveThreshold(arr, 7)).toBe(true)
      expect(hasItemAboveThreshold(arr, 3)).toBe(true)
      expect(hasItemAboveThreshold(arr, 8)).toBe(false)
    })

    test('Ex 10: it should indicate if it has an item above the threshold', () => {
      const arr = [5, 4, 5, 8, 6, 3, 4]
      expect(hasAllItemAboveThreshold(arr, 2)).toBe(true)
      expect(hasAllItemAboveThreshold(arr, 3)).toBe(false)
      expect(hasAllItemAboveThreshold(arr, 8)).toBe(false)
    })
  })

  describe('Exercice 11 - Password', () => {
    it.each([
      ['azerty', false],
      ['Azerty', false],
      ['Azerty1', false],
      ['Azert1!', false],
      ['azerty1!', false],
      ['Azertyu!', false],
      ['Azertyui!', false],
      ['Azerty1!', true],
      ['Azerty1!', true],
      ['&Aoj8$,?qs34', true],
      ['1 bon Mot de Passe ', true],
    ])('Is %s a good password ?', (pass, res) => {
      expect(isStrongPassword(pass)).toBe(res)
    })
  })

  describe('Exercice 12-13 - One Hit Wonders', () => {
    it('should sort artists by french order', () => {
      const res = sortArtists(OneHitWonders)
      expect(res).toHaveLength(72)
      expect(res.slice(0, 10)).toEqual([
        'À cause des garçons',
        'Animo',
        'Arnold Turboust feat. Zabou',
        'Atlantique',
        'Bandolero',
        'Belgazou',
        'Bernard Menez',
        'Bibie',
        'Blues Trottoir',
        'Bruna Giraldi',
      ])
    })

    it('should group by vowels count', () => {
      const res = groupByVowelCount(OneHitWonders)
      expect(Object.keys(res)).toHaveLength(10)
      expect(res[1]).toBeUndefined()
      expect(res[2]).toEqual([
        'F. R. David',
        'Paco',
        'Patsy',
        'Pijon',
        'Shona',
        'Tristan',
      ])
      expect(res[7]).toContain('À cause des garçons')
    })
  })

  describe('Exercice 14 - Range Generator', () => {
    test('a) it should generate integers from 0 to end', () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4, 5])
    })
    test('b) it should generate integers from start to end', () => {
      expect(range(21, 25)).toEqual([21, 22, 23, 24, 25])
    })
    test('C) it should generate integers from start to end, 2 by 2', () => {
      expect(range(4, 14, 2)).toEqual([4, 6, 8, 10, 12, 14])
      expect(range(1, 12, 3)).toEqual([1, 4, 7, 10])
      expect(range(1, 4, 10)).toEqual([1])
    })
    test('D) it should generate integers from start to end, can be descreasing', () => {
      expect(range(5, 1)).toEqual([5, 4, 3, 2, 1])
      expect(range(5, 1, 2)).toEqual([5, 3, 1])
    })
  })
})
