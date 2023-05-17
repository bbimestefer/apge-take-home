module.exports.run = function(str) {
/*
A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
Return true if all the g's in the given string are happy, otherwise return false.

	Example:
		function("xxggxx") => true
		function("xxgxx") => false

        Write your code below the comment.

	loop through string
		initialize length variable
		when char == 'g'
			check amount of 'g's after that
				increment length for each 'g'
		if length is still 1 return false
		increment i by length
	if it made it through the whole string return true
*/

	// Time: O(n) Space: O(1)

	// initialize i for while loop
	let i = 0
	while (i < str.length) {

		// grab current character
		const char = str[i]

		// set length for when we find a 'g'
		let length = 1

		if(char === 'g'){

			// use while loop to increase length if the next letter is 'g'
			while (str[i + length] === 'g'){
				length += 1
			}

			// if length didn't increase, 'g' is not happy => return false
			if(length === 1) return false
		}

		// increase i by the amount of g's that were counted
		i += length
	}

	// if we make it through the while loop, all g's are happy
	return true
};
