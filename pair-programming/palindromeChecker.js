/*
	Write a function that takes in an array of strings and checks to see if each string is a palindrome or not. The function should print the string "yes" or "no" for each string.

    Use the driver-navigator model for pair programming: the driver should share their screen and type up the pseudocode and/or code while the navigator directs the problem-solving and coding process. The driver should participate in discussion but not take over the navigating (aka drivergating)! 
*/

let words = ["moon", "mom", "tacocat", "adobo", "agog", "kayak", "bikini", "banana", "level", "garage", "deified", "angora", "radar", "rotator", "dated", "solos", "tenet"];

function findPalindromes(arrOfStrings) {
	// Loop through array
	for (let word of arrOfStrings) {
		let currentString = word.toLowerCase();
		let reversedString = currentString.split("").reverse().join("");
		if (currentString === reversedString) {
			console.log("yes");
		} else {
			console.log("no");
		}
	}
}

findPalindromes(words);
