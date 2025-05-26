// 8. reduce() Method
// Every element of the array is subjected to a reducer function using the reduce() method, which produces a single output value. It's a little more intricate, but it has great data aggregation capabilities.

// Example:
const expenses = { rent: 1000, groceries: 200, utilities: 150 };

const total = Object.values(expenses).reduce((sum, expense) => sum + expense, 0);

console.log(`Total expenses: $${total}`);
// Pros:
// Powerful for summing or accumulating object values.
// Useful for aggregating data into a single result.
// Cons:
// Can be less intuitive than other methods.