/**
 * 
 */

console.log(Math.random() * 20);
console.log(Math.floor(Math.random() * 20));

function generateRandomBetweenMinMaxRange(min, max) {
	console.log(Math.floor(Math.random() * (max - min) + min));
}
generateRandomBetweenMinMaxRange(3, 50);