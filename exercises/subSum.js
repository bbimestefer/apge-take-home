
module.exports.run = function(x, y) {
/*
	You are given a 2D array. Using the x and y co-ordinates, find the sum of all the numbers from (0, 0) to (x, y)

	Example:

	-1  1  5        function(1, 1) => 12
	 9  3  7		function(1, 0) => 0
	 2  8  4		function(0, 1) => 8

	 Write your code below the comment.

	initialize sum variable
	loop through array in bounds with y variable
		loop through row in bounds with x variable
			add num to sum
	return sum
*/
const twoDArray = [[0,  4,  2,  1],
				   [3, -1,  1,  0],
				   [0,  0,  2,  3],
				   [1,  3, -3,  0]];

/*
	It seems like the X and Y are flipped in this problem. The x value is usually keying into
	the first level of the array and the y value keys into twoDArray[x] to find a value.
	If you wanted to simulate that, switch the 'y' on line 36 with the 'x' on line 40.
*/

	// Time: O(x * y) Space: O(1)

	let sum = 0;

	// loop through the first layer within y
	for (let i = 0; i <= y; i++) {
		const row = twoDArray[i];

		// loop through each element in row within x
		for (let j = 0; j <= x; j++) {

			// add to sum
			sum += row[j];
		}
	}

	return sum;
};
