const removeFromString = (str, start, end) => {
    return str.slice(start, end);
}

// removeFromString

// Write a function called **removeFromString,** which accepts a string, a starting index (number) and a number of characters to remove.

// The function should return a new string with the characters removed.

// Examples:

// ```js
console.log(removeFromString('Elie', 2, 2)); // 'El' slice: 
console.log(removeFromString('Elie', 0, 1)); // 'lie' slice: E
console.log(removeFromString('Rithm School', 0, 6)); // 'School' slice: Rhithm
console.log(removeFromString('Rithm School', 2, 4)); // 'RiSchool' slice: th
console.log(removeFromString('Rithm School', 6, 400)); // 'Rithm ' slice: School

/**Description
The slice() method extracts a part of a string.

The slice() method returns the extracted part in a new string.

The slice() method does not change the original string.

The start and end parameters specifies the part of the string to extract.

The first position is 0, the second is 1, ...

A negative number selects from the end of the string. 
*/

/**Return Value

A string	The extracted part of the string. 
*/