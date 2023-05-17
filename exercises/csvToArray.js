module.exports.run = function(csv){
/*
	A stringified CSV file will be passed into this function.
	Parse the string so it is an array of objects and return the array.
	The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.

	split csv into two parts, headers and data
	split headers into array
	loop through data
		split data for each user
		loop through header and set specific value
		push object into result
	return result
*/

	// Time: O(dataRows * headers)  Space: O(n)

	// The example given above uses '\n' but the test cases use '/n'.
	// For my code I followed the test case, but if you wanted to solve it the other way, on line 34 you would split the csv by '\n' instead.


	// split csv to find headers(keys) and data
	const [headerRow, ...dataRows] = csv.split('/n')

	// turn headers into an array
	const headers = headerRow.split(',')

	// map through the data
	const res = dataRows.map(row => {

		// split the data into the user's data
		const user = row.split(',')

		// loop through each header, adding keys to the object with the specific data
		const el = headers.reduce((object, header, index) => {
			object[header] = user[index]
			return object
		}, {})

		// returns the object to put in res
		return el
	})

	return res
};
