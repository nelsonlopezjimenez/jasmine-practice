describe('appendToString', () => {
  describe('Level 1 tests', () => {
    it('It should return a string with appended characters', () => {
      expect(appendToString('Hello', ' World!')).toBe('Hello World!');
      expect(appendToString('Foo', 'bar')).toBe('Foobar');
      expect(appendToString('bar', 'Foo')).toBe('barFoo');
      expect(appendToString('', 'test')).toBe('test');
      expect(appendToString('other test', '')).toBe('other test');
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(appendToString.toString().substring(0, 7)).not.toContain('function');
      expect(appendToString.toString()).toContain('=>');
    });
  });
});

describe('charAt', () => {
  describe('Level 1 tests', () => {
    it('It should return the character at an index', () => {
      expect(charAt('awesome', 2)).toBe('e');
    });
  });

  describe('Level 2 tests', () => {
    it('It should return an empty string if the number is greater than the length', () => {
      expect(charAt('awesome', 12)).toBe('');
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(charAt.toString().substring(0, 7)).not.toContain('function');
      expect(charAt.toString()).toContain('=>');
    });
  });
});

describe('countNumbers', () => {
  describe('Level 2 tests', () => {
    it('It should return the number of valid number types', () => {
      expect(countNumbers(['a', 'b', '3', 'awesome', '4'])).toBe(2);
      expect(countNumbers(['32', '55', 'awesome', 'test', '100'])).toBe(3);
      expect(countNumbers([])).toBe(0);
    });
  });

  describe('Level 3 tests', () => {
    it('It should handle the edge case for empty strings', () => {
      expect(countNumbers(['7', '12', 'a', '', '6', '8', ' '])).toBe(4);
    });

    it('It should handle the edge case that NaN is a typeof number', () => {
      expect(countNumbers(['4', '1', '0', 'NaN'])).toBe(3);
    });

    it('It should return an ES6 function expression', () => {
      expect(countNumbers.toString().substring(0, 7)).not.toContain('function');
      expect(countNumbers.toString()).toContain('=>');
    });
  });
});

describe('countValues', () => {
  describe('Level 2 tests', () => {
    it('It should return the number of times a value appears in an array', () => {
      expect(countValues([4, 1, 4, 2, 3, 4, 4], 4)).toBe(4);
      expect(countValues([4, 1, 4, 2, 3, 4, 4], 100)).toBe(0);
      expect(countValues([], 1)).toBe(0);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(countValues.toString().substring(0, 7)).not.toContain('function');
      expect(countValues.toString()).toContain('=>');
    });
  });
});

describe('entries', () => {
  describe('Level 1 tests', () => {
    it('It should return an array of arrays with keys and values', () => {
      var obj = { a: 1, b: 2, c: 3 };
      expect(entries(obj)).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ]);

      var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
      expect(entries(obj2)).toEqual([
        ['first', 'Matt'],
        ['last', 'Lane'],
        ['isDogOwner', true],
      ]);
    });
  });

  describe('Level 2 tests', () => {
    it('It should return an empty array for an object with no key-value pairs', () => {
      var obj3 = {};
      expect(entries(obj3)).toEqual([]);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(entries.toString().substring(0, 7)).not.toContain('function');
      expect(entries.toString()).toContain('=>');
    });
  });
});

describe('findTheDuplicate', () => {
  describe('Level 2 tests', () => {
    it('It should return the duplicate or undefined if there are no dupes', () => {
      expect(findTheDuplicate([1, 2, 1, 4, 3, 12])).toBe(1);
      expect(findTheDuplicate([6, 1, 9, 5, 3, 4, 9])).toBe(9);
      expect(findTheDuplicate([2, 1, 3, 4])).toBeUndefined;
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(findTheDuplicate.toString().substring(0, 7)).not.toContain('function');
      expect(findTheDuplicate.toString()).toContain('=>');
    });
  });
});

describe('helloWorld', () => {
  describe('Level 1 tests', () => {
    it('It should return hello world', () => {
      expect(helloWorld()).toBe('hello world');
    });
  });

  describe('Level 2 tests', () => {
    it('It should return hello [name], or hello world by default if no name is provided', () => {
      expect(helloWorld('jane')).toBe('hello jane');
      expect(helloWorld()).toBe('hello world');
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(helloWorld.toString().substring(0, 7)).not.toContain('function');
      expect(helloWorld.toString()).toContain('=>');
    });
  });
});

describe('includes', () => {
  describe('Level 2 tests', () => {
    it('It should return true if the value is in the array otherwise false', () => {
      expect(includes([1, 2, 3, 4], 4)).toBe(true);
      expect(includes([1, 2, 3, 4], 14)).toBe(false);
      expect(includes([], 14)).toBe(false);
    });

    it('It should return true if the value is in the string otherwise false', () => {
      expect(includes('abcd', 'b')).toBe(true);
      expect(includes('abcd', 'e')).toBe(false);
      expect(includes('', 'a')).toBe(false);
      expect(includes('abcd', 'a', 2)).toBe(false);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return true if the value is in the object otherwise false', () => {
      expect(includes({ a: 1, b: 2 }, 1)).toBe(true);
      expect(includes({ a: 1, b: 2 }, 'a')).toBe(false);
      expect(includes({}, 1)).toBe(false);
      expect(includes({ a: 1, b: 2 }, 1, 2)).toBe(true);
    });

    it('It should return an ES6 function expression', () => {
      expect(includes.toString().substring(0, 7)).not.toContain('function');
      expect(includes.toString()).toContain('=>');
    });
  });
});

describe('indexOf', () => {
  describe('Level 1 tests', () => {
    it('It should return the index at which the value is or negative 1 if not found', () => {
      var arr = [5, 10, 15, 20];
      expect(indexOf(arr, 20)).toBe(3);

      var arr2 = [1, 2, 3, 4, 5];
      expect(indexOf(arr2, 2)).toBe(1);

      var arr3 = [1, 2];
      expect(indexOf(arr3, 10)).toBe(-1);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(indexOf.toString().substring(0, 7)).not.toContain('function');
      expect(indexOf.toString()).toContain('=>');
    });
  });
});

describe('isAlt', () => {
  describe('Level 3 tests', () => {
    it('It should return true if they are in alternating order', () => {
      expect(isAlt('amazon')).toBe(true);
      expect(isAlt('apple')).toBe(false);
      expect(isAlt('banana')).toBe(true);
    });

    it('It should return an ES6 function expression', () => {
      expect(isAlt.toString().substring(0, 7)).not.toContain('function');
      expect(isAlt.toString()).toContain('=>');
    });
  });
});

describe('keys', () => {
  describe('Level 1 tests', () => {
    it('It should return an array of keys for an object', () => {
      var obj = { a: 1, b: 2, c: 3 };
      expect(keys(obj)).toEqual(['a', 'b', 'c']);

      var obj2 = { first: 'Matt', last: 'Lane' };
      expect(keys(obj2)).toEqual(['first', 'last']);
    });
  });

  describe('Level 2 tests', () => {
    it('It should return an empty array of the object has no keys', () => {
      var obj3 = {};
      expect(keys(obj3)).toEqual([]);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(keys.toString().substring(0, 7)).not.toContain('function');
      expect(keys.toString()).toContain('=>');
    });
  });
});

describe('lastIndexOf', () => {
  describe('Level 1 tests', () => {
    it('It should return the last index at which a value is at or negative one', () => {
      expect(lastIndexOf([1, 2, 3, 4], 2)).toBe(1);
      expect(lastIndexOf([1, 2, 3, 4, 2], 2)).toBe(4);
      expect(lastIndexOf([1, 2, 3, 4], 22)).toBe(-1);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(lastIndexOf.toString().substring(0, 7)).not.toContain('function');
      expect(lastIndexOf.toString()).toContain('=>');
    });
  });
});

describe('max', () => {
  describe('Level 1 tests', () => {
    it('It should return the highest number', () => {
      expect(max([5, 1, 4, 7, 1, 2])).toBe(7);
      expect(max([-1, 6, 3, 2.2, -10, -4])).toBe(6);
      expect(max([3, 4, 12, 1, 8])).toBe(12);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(max.toString().substring(0, 7)).not.toContain('function');
      expect(max.toString()).toContain('=>');
    });
  });
});

describe('min', () => {
  describe('Level 1 tests', () => {
    it('It should return the lowest value in an array of numbers', () => {
      expect(min([5, 1, 4, 7, 1, 2])).toBe(1);
      expect(min([-1, 6, 3, 2.2, -10, -4])).toBe(-10);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(min.toString().substring(0, 7)).not.toContain('function');
      expect(min.toString()).toContain('=>');
    });
  });
});

describe('multiples', () => {
  describe('Level 2 tests', () => {
    it('It should return an array of the first n multiples of the first parameter', () => {
      expect(multiples(3, 4)).toEqual([3, 6, 9, 12]);
      expect(multiples(2, 5)).toEqual([2, 4, 6, 8, 10]);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(multiples.toString().substring(0, 7)).not.toContain('function');
      expect(multiples.toString()).toContain('=>');
    });
  });
});

describe('minMaxKeyInObject', () => {
  describe('Level 2 tests', () => {
    it('It should return an array with the min and max keys in an object', () => {
      expect(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' })).toEqual([1, 10]);
      expect(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' })).toEqual([1, 4]);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(minMaxKeyInObject.toString().substring(0, 7)).not.toContain('function');
      expect(minMaxKeyInObject.toString()).toContain('=>');
    });
  });
});

describe('pluck', () => {
  describe('Level 3 tests', () => {
    it('It should return an array of values for a given key', () => {
      expect(pluck([{ name: 'Tim' }, { name: 'Matt' }, { name: 'Elie' }], 'name')).toEqual(['Tim', 'Matt', 'Elie']);

      expect(
        pluck(
          [{ name: 'Tim', isBoatOwner: true }, { name: 'Matt', isBoatOwner: false }, { name: 'Elie' }],
          'isBoatOwner'
        )
      ).toEqual([true, false, undefined]);
    });

    it('It should return an ES6 function expression', () => {
      expect(pluck.toString().substring(0, 7)).not.toContain('function');
      expect(pluck.toString()).toContain('=>');
    });
  });
});

describe('prependToString', () => {
  describe('Level 1 tests', () => {
    it('It should add the second parameter to the front of the string', () => {
      expect(prependToString('awesome', 'very')).toBe('veryawesome');
      expect(prependToString('world', 'hello ')).toBe('hello world');
      expect(prependToString('nothing', '')).toBe('nothing');
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(prependToString.toString().substring(0, 7)).not.toContain('function');
      expect(prependToString.toString()).toContain('=>');
    });
  });
});

describe('removeFromString', () => {
  describe('Level 2 tests', () => {
    it('It should return a new string with characters removed', () => {
      expect(removeFromString('Elie', 2, 2)).toBe('El');
      expect(removeFromString('Elie', 0, 1)).toBe('lie');
      expect(removeFromString('Rithm School', 0, 6)).toBe('School');
      expect(removeFromString('Rithm School', 2, 4)).toBe('RiSchool');
    });
  });

  describe('Level 3 tests', () => {
    it('It should handle when the range is longer than string length', () => {
      expect(removeFromString('Rithm School', 6, 400)).toBe('Rithm ');
    });

    it('It should return an ES6 function expression', () => {
      expect(prependToString.toString().substring(0, 7)).not.toContain('function');
      expect(prependToString.toString()).toContain('=>');
    });
  });
});

describe('removeVowels', () => {
  describe('Level 3 tests', () => {
    it('It should remove vowels', () => {
      expect(removeVowels('Hello!')).toBe('Hll!');
      expect(removeVowels('Tomatoes')).toBe('Tmts');
      expect(removeVowels('Reverse Vowels In The String')).toBe('Rvrs Vwls n Th Strng');
      expect(removeVowels('aeiou')).toBe('');
      expect(removeVowels('why try, shy fly?')).toBe('why try, shy fly?');
    });

    it('It should return an ES6 function expression', () => {
      expect(removeVowels.toString().substring(0, 7)).not.toContain('function');
      expect(removeVowels.toString()).toContain('=>');
    });
  });
});

describe('repeat', () => {
  describe('Level 2 tests', () => {
    it('repeats the string a certain number of times', () => {
      expect(repeat('Matt', 3)).toBe('MattMattMatt');
      expect(repeat('Elie', 2)).toBe('ElieElie');
      expect(repeat('Tim', 0)).toBe('');
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(repeat.toString().substring(0, 7)).not.toContain('function');
      expect(repeat.toString()).toContain('=>');
    });
  });
});

describe('separate', () => {
  describe('Level 2 tests', () => {
    it('It should return the correct array', () => {
      expect(separate(['dog', 'cat', 'water'])).toEqual(['cat', 'water', 'dog']);
      expect(separate(['dog', 'cat', 'water', 'cat'])).toEqual(['cat', 'cat', 'water', 'dog']);
      expect(separate(['cat', 'cat', 'water', 'dog', 'water', 'cat', 'water', 'dog'])).toEqual([
        'cat',
        'cat',
        'cat',
        'water',
        'water',
        'water',
        'dog',
        'dog',
      ]);
      expect(
        separate([
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'cat',
          'dog',
          'water',
          'water',
          'water',
          'water',
          'water',
          'water',
          'water',
          'water',
          'water',
          'water',
          'water',
          'water',
          'water',
          'water',
        ])
      ).toEqual([
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'cat',
        'water',
        'water',
        'water',
        'water',
        'water',
        'water',
        'water',
        'water',
        'water',
        'water',
        'water',
        'water',

        'water',
        'water',
        'dog',
      ]);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(separate.toString().substring(0, 7)).not.toContain('function');
      expect(separate.toString()).toContain('=>');
    });
  });
});

describe('slice', () => {
  describe('Level 1 tests', () => {
    it('It should return a slice from the second to third parameter', () => {
      expect(slice([1, 2, 3, 4, 5], 0, 2)).toEqual([1, 2]);
      expect(slice([1, 2, 3, 4, 5], 2, 4)).toEqual([3, 4]);
      expect(slice([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
      expect(slice([1, 2, 3, 4, 5], 2, 10)).toEqual([3, 4, 5]);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(slice.toString().substring(0, 7)).not.toContain('function');
      expect(slice.toString()).toContain('=>');
    });
  });
});

describe('squareEvenNumbers', () => {
  describe('Level 1 tests', () => {
    it('It should return the sum of all even numbers squared', () => {
      expect(squareEvenNumbers([1, 2, 3, 4, 5])).toBe(20);
      expect(squareEvenNumbers([1, 3, 5, 7])).toBe(0);
      expect(squareEvenNumbers([5, 6, 7])).toBe(36);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(squareEvenNumbers.toString().substring(0, 7)).not.toContain('function');
      expect(squareEvenNumbers.toString()).toContain('=>');
    });
  });
});

describe('stringFromObject', () => {
  describe('Level 2 tests', () => {
    it('It should return a string of keys and values', () => {
      expect(stringFromObject({ a: 1, b: '2' })).toBe('a = 1, b = 2');
      expect(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false })).toBe(
        'name = Elie, job = Instructor, isCatOwner = false'
      );
      expect(stringFromObject({})).toBe('');
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(stringFromObject.toString().substring(0, 7)).not.toContain('function');
      expect(stringFromObject.toString()).toContain('=>');
    });
  });
});

describe('stringIncludes', () => {
  describe('Level 1 tests', () => {
    it('It should return true if the value is in the array otherwise it It should return false', () => {
      expect(stringIncludes('awesome', 'e')).toBe(true);
      expect(stringIncludes('awesome', 'z')).toBe(false);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(stringIncludes.toString().substring(0, 7)).not.toContain('function');
      expect(stringIncludes.toString()).toContain('=>');
    });
  });
});

describe('stringIndexOf', () => {
  describe('Level 1 tests', () => {
    it('It should return the correct index or negative one', () => {
      expect(stringIndexOf('awesome', 'e')).toBe(2);
      expect(stringIndexOf('awesome', 'z')).toBe(-1);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(stringIndexOf.toString().substring(0, 7)).not.toContain('function');
      expect(stringIndexOf.toString()).toContain('=>');
    });
  });
});

describe('stringLastIndexOf', () => {
  describe('Level 1 tests', () => {
    it('It should return the last index or negative one', () => {
      expect(stringLastIndexOf('awesome', 'e')).toBe(6);
      expect(stringLastIndexOf('awesome', 'z')).toBe(-1);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(stringLastIndexOf.toString().substring(0, 7)).not.toContain('function');
      expect(stringLastIndexOf.toString()).toContain('=>');
    });
  });
});

describe('totalCaps', () => {
  describe('Level 2 tests', () => {
    it('It should return the number of capital letters for every string in the array', () => {
      expect(totalCaps(['AwesomE', 'ThIngs', 'hAppEning', 'HerE'])).toBe(8);
      expect(totalCaps(['Elie', 'Matt', 'Tim'])).toBe(3);
      expect(totalCaps(['hello', 'world'])).toBe(0);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(totalCaps.toString().substring(0, 7)).not.toContain('function');
      expect(totalCaps.toString()).toContain('=>');
    });
  });
});

describe('twoHighest', () => {
  describe('Level 3 tests', () => {
    it('It should return the two highest', () => {
      expect(twoHighest([1, 2, 10, 8])).toEqual([8, 10]);
      expect(twoHighest([6, 1, 9, 10, 4])).toEqual([9, 10]);
      expect(twoHighest([4, 25, 3, 20, 19, 5])).toEqual([20, 25]);
      expect(twoHighest([1, 2, 2])).toEqual([2, 2]);
    });

    it('It should return an ES6 function expression', () => {
      expect(twoHighest.toString().substring(0, 7)).not.toContain('function');
      expect(twoHighest.toString()).toContain('=>');
    });
  });
});

describe('values', () => {
  describe('Level 1 tests', () => {
    it('It should return an array of all the values in the object', () => {
      var obj = { a: 1, b: 2, c: 3 };
      expect(values(obj)).toEqual([1, 2, 3]);

      var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
      expect(values(obj2)).toEqual(['Matt', 'Lane', true]);
    });
  });

  describe('Level 2 tests', () => {
    it('It should return an empty array if the object has no values', () => {
      var obj3 = {};
      expect(values(obj3)).toEqual([]);
    });
  });

  describe('Level 3 tests', () => {
    it('It should return an ES6 function expression', () => {
      expect(values.toString().substring(0, 7)).not.toContain('function');
      expect(values.toString()).toContain('=>');
    });
  });
});
