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
});

describe('charAt', () => {
  describe('Level 1 tests', () => {
    it('It should return the character at an index', () => {
      expect(charAt('awesome', 2)).toBe('e');
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
});

describe('helloWorld', () => {
  describe('Level 1 tests', () => {
    it('It should return hello world', () => {
      expect(helloWorld()).toBe('hello world');
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
});

describe('lastIndexOf', () => {
  describe('Level 1 tests', () => {
    it('It should return the last index at which a value is at or negative one', () => {
      expect(lastIndexOf([1, 2, 3, 4], 2)).toBe(1);
      expect(lastIndexOf([1, 2, 3, 4, 2], 2)).toBe(4);
      expect(lastIndexOf([1, 2, 3, 4], 22)).toBe(-1);
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
});

describe('min', () => {
  describe('Level 1 tests', () => {
    it('It should return the lowest value in an array of numbers', () => {
      expect(min([5, 1, 4, 7, 1, 2])).toBe(1);
      expect(min([-1, 6, 3, 2.2, -10, -4])).toBe(-10);
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
});

describe('repeat', () => {
  describe('Level 1 tests', () => {
    it('repeats the string a certain number of times', () => {
      expect(repeat('Matt', 3)).toBe('MattMattMatt');
      expect(repeat('Elie', 2)).toBe('ElieElie');
      expect(repeat('Tim', 0)).toBe('');
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
});

describe('squareEvenNumbers', () => {
  describe('Level 1 tests', () => {
    it('It should return the sum of all even numbers squared', () => {
      expect(squareEvenNumbers([1, 2, 3, 4, 5])).toBe(20);
      expect(squareEvenNumbers([1, 3, 5, 7])).toBe(0);
      expect(squareEvenNumbers([5, 6, 7])).toBe(36);
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
});

describe('stringIndexOf', () => {
  describe('Level 1 tests', () => {
    it('It should return the correct index or negative one', () => {
      expect(stringIndexOf('awesome', 'e')).toBe(2);
      expect(stringIndexOf('awesome', 'z')).toBe(-1);
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
});
