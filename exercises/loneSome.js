module.exports.run = function(a, b, c) {
/*
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples:
	function(1, 2, 3) => 6
	function(3, 2, 3) => 2
	function(3, 3, 3) => 0

Write your code below the comment.

	check each condition
	if they are all equal return 0
	if one is equal another, return the other number
	if not return sum of numbers
*/

	// Time: O(1) Space: O(1)

	if(a === b && a === c) return 0
	if(a === b) return c
	if(a === c) return b
	if(b === c) return a
	return a + b + c
};
