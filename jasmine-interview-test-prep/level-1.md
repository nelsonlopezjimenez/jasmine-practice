# Intro to Jasmine Code Challenges

Your assignment is to write and annotate code to fulfill each task below.
Each task has been broken into levels by difficulty.

- Level 1: **Make it work** You have no restrictions and don't have to handle any edge cases.
  Simply write some code that makes the test pass.



Good luck!

---

### Here are some resources that may help

- [W3 Schools Arrow Functions](http://localhost:22022/websites/www.w3schools.com/js/js_arrow_function.html)
- [W3 Schools Arrow Functions](http://www.w3schools.com/js/js_arrow_function)

- [MDN Arrow Functions](http://localhost:22022/websites/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions.html)
- [MDN Arrow Functions](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- [W3 Schools Alphabetical JavaScript Reference](http://localhost:22022/websites/www.w3schools.com/jsref/jsref_reference.html)
- [W3 Schools Alphabetical JavaScript Reference](http://localhost:22022/websites/www.w3schools.com/jsref/jsref_reference.html)
- [MDN JavaScript Reference](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

---

### appendToString()

The function should return a new string which consists of the second string appended to the first string.

#### Level 1

Examples:

```js
appendToString('Hello', ' World!'); // "Hello World!"
appendToString('Foo', 'bar'); // "Foobar"
appendToString('bar', 'Foo'); // "barFoo"
appendToString('', 'test'); // "test"
appendToString('other test', ''); // "other test"
```



---

### charAt()

#### Level 1

Write a function called **charAt** which accepts a string and an index (number) and returns the character at that index.

Example:

```js
charAt('awesome', 2); // 'e'
```



---

### entries()

#### Level 1

Write a function called **entries,** which accepts an object and returns an array of arrays of key-value pairs.

In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.

Examples:

```js
let obj = { a: 1, b: 2, c: 3 };
entries(obj);
// [["a",1], ["b",2], ["c",3]]

let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
```


Do not use the built in `Object.entries()` function!

---



---

### helloWorld()

Write a function called **helloWorld** which returns a string of "hello world".

#### Level 1

```js
helloWorld(); // 'hello world'
```



---



---

### indexOf()

Write a function called **indexOf,** which accepts an array and a number.
The function should return the first index at which the value exists or `-1` if the value is not found.

#### Level 1

Examples:

```js
let arr = [5, 10, 15, 20];
indexOf(arr, 20); // 3

let arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2); // 1

let arr3 = [1, 2];
indexOf(arr3, 10); // -1
```



Test for Arrow function usage
Do not use the built in `Array.indexOf()` function!

---


```

---

### keys()

#### Level 1

Write a function called **keys,** which accepts an object and returns an array of all of the keys in the object.

Examples:

```js
let obj = { a: 1, b: 2, c: 3 };
keys(obj); // ["a", "b", "c"]

let obj2 = { first: 'Matt', last: 'Lane' };
keys(obj2); // ["first", "last"]
```



Do not use the built in `Object.keys()` function!

---

### lastIndexOf()

Write a function called **lastIndexOf,** which accepts an array and a number.

The function should return the last index at which the value exists, or `-1` if the value is not found.

#### Level 1

Examples:

```js
lastIndexOf([1, 2, 3, 4], 2); // 1
lastIndexOf([1, 2, 3, 4, 2], 2); // 4
lastIndexOf([1, 2, 3, 4], 22); // -1
```



Do not use the built in `Array.lastIndexOf()` function!

---

### max()

#### Level 1

Write a function called **max,** which accepts an array and returns the highest value.
Examples:

```js
max([5, 1, 4, 7, 1, 2]); // 7
max([3, 4, 12, 1, 8]); // 12
max([-1, 6, 3, 2.2, -10, -4]); // 6
```



Do not use the built-in `Math.max()` function!

---

### min()

#### Level 1

Write a function called **min,** which accepts an array of numbers and returns the lowest value.
Examples:

```js
min([5, 1, 4, 7, 1, 2]); // 1
min([-1, 6, 3, 2.2, -10, -4]); // -10
```



Do note use the built-in `Math.min()` function!

---





---

### prependToString()

#### Level 1

Write a function called **prependToString,** which accepts two strings.
The function should return a new string with the second string prepended to the first string.

Examples:

```js
prependToString('awesome', 'very'); // 'veryawesome'
prependToString('world', 'hello '); // 'hello world'
prependToString('nothing', ''); // 'nothing'
```




---

### repeat()

Write a function called **repeat,** which accepts a string and a number and returns a new string with the string repeated that number of times.

#### Level 1

Examples:

```js
repeat('Matt', 3); // 'MattMattMatt'
repeat('Elie', 2); // 'ElieElie'
repeat('Michael', 0); // ''
```



**Do not use the built in repeat method**

---





---

### slice()

Write a function called **slice,** which accepts an array, and two numbers.

The function should return a new array with the elements starting at the index of the first number and going until the index of the second number.

If a third parameter is not passed to the function, it should slice until the end of the array by default.

If the third parameter is greater than the length of the array, it should slice until the end of the array.

#### Level 1

Examples:

```js
slice([1, 2, 3, 4, 5], 0, 2); // [1, 2]
slice([1, 2, 3, 4, 5], 2, 4); // [3, 4]
slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
slice([1, 2, 3, 4, 5], 2, 10); // [3, 4, 5]
```



Do not use the built in `Array.slice()` function!

---

### squareEvenNumbers()

Write a function called **squareEvenNumbers** which accepts an array and returns the sum of all of the even numbers in the array squared.

#### Level 1

Examples:

```js
squareEvenNumbers([1, 2, 3, 4, 5]); // 20
squareEvenNumbers([1, 3, 5, 7]); // 0
squareEvenNumbers([5, 6, 7]); // 36
```



---



---

### stringIncludes

Write a function called **stringIncludes,** which accepts two strings: the first string is a word and the second string is a single character.

The function should return `true` if the first string includes the character, otherwise it should return `false`.

#### Level 1

Examples:

```js
stringIncludes('awesome', 'e'); // true
stringIncludes('awesome', 'z'); // false
```



Do not use the built in `String.includes()` function!

---

### stringIndexOf()

Write a function called **stringIndexOf,** which accepts two strings: the first is a word and the second is a single character.

The function should return the first index in the word at which the character exists or `-1` if the character is not found.

#### Level 1

Examples:

```js
stringIndexOf('awesome', 'e'); // 2
stringIndexOf('awesome', 'z'); // -1
```


Do not use the built in `"string".indexOf()` function!

---

### stringLastIndexOf()

Write a function called **stringLastIndexOf,** which accepts two strings: the first is a word and the second is a single character.

The function should return the last index at which the character exists or `-1` if the character is not found.

#### Level 1

Examples:

```js
stringLastIndexOf('awesome', 'e'); // 6
stringLastIndexOf('awesome', 'z'); // -1
```



Do not use the built in `"string".lastIndexOf()` **function!**

---


Do **not** convert the array into a string.

---



---

### values()

Write a function called **values,** which accepts an object and returns an array of all of the values in the object.

#### Level 1

Examples:

```js
let obj = { a: 1, b: 2, c: 3 };
values(obj); // [1,2,3]

let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
values(obj2); // ["Matt", "Lane", true]
```


Do not use the built in `Object.values()` function!
