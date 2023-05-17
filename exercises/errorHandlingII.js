module.exports.run = async function(url){
/*
	You are given a url. Make a GET call with axios using the given url.
	However, there is something wrong with the url, and it throws an error.
	This error will have a property 'message'. Properly return the message, adding 'Error: ' to the beginning of the message.

    You are welcome to change this function to an async/await.

	Write your code below the comment.
*/

	// import axios using ES5
	const axios = require('axios');

	// try and catch to catch an error if it occurs while fetching the url
	try {
		// using axios to fetch for given url
		const response = await axios.get(url)
		const data = response.data
		console.log("Data", data)
	} catch (e) {
		return `Error: ${e.message}`
	}
};
