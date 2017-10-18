// FizzBuzz
// Print numbers 1-100, if the number is divisible by 3 print "Fizz", if by 5 print "Buzz", if both print "FizzBuzz"
// for(var i = 1; i <= 100; i++) {
// 	if(i % 3 === 0 && i % 5 === 0) {
// 		console.log("FizzBuzz");
// 	} else if(i % 5 === 0) {
// 		console.log("Buzz");
// 	} else if(i % 3 === 0) {
// 		console.log("Fizz");
// 	} else {
// 		console.log(i);
// 	}
// }

// Birthday Countdown w/While Loop

// var daysUntilMyBirthday = 100;

// while(daysUntilMyBirthday >= 0) {
// 	if(daysUntilMyBirthday === 0) {
// 		console.log("♪ღ♪*•.¸¸¸.•**•.¸¸¸.•*•♪ღ♪¸.•**•.¸¸¸.•*•♪ღ♪•*♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
// 	} else if(daysUntilMyBirthday > 30) {
// 		console.log(daysUntilMyBirthday + " days until my birthday. Such a long time... :(");
// 	} else if(daysUntilMyBirthday < 5) {
// 		console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!!!");
// 	} else if(daysUntilMyBirthday === 1) {
// 		console.log(daysUntilMyBirthday + " DAY UNTIL MY BIRTHDAY!!!");
// 	} else if(daysUntilMyBirthday <= 30) {
// 		console.log(daysUntilMyBirthday + " days until my birthday!");
// 	}

// 	// daysUntilMyBirthday = daysUntilMyBirthday - 1;
// 	// daysUntilMyBirthday -= 1;
// 	daysUntilMyBirthday--;
// }

// Arrays of Objects
var shoppingList = [
	{ 
		item: "eggs",
		price: 3,
		quantity: 2,
		requestedBy: "William",
		organic: false
	},
	{
		item: "milk",
		price: 4.50,
		quantity: 3,
		requestedBy: "Santa Claus",
		organic: true
	},
	{
		item: "cookies",
		price: 1.05,
		quantity: 35000000,
		requestedBy: "Rudy",
		organic: false
	}
]

function printItemByName(objArr) {
	for(var i = 0; i < objArr.length; i++) {
		console.log(objArr[i].item);
	}
}

// printItemByName(shoppingList);

function calculateTotal(objArr) {
	var total = 0;
	for(var i = 0; i < objArr.length; i++) {
		total += objArr[i].price * objArr[i].quantity;
	}
	return total;
}

var calculated = calculateTotal(shoppingList);

function printNonOrganicItems(objArr) {
	for(var i = 0; i < objArr.length; i++) {
		if(!objArr[i].organic) {
			console.log(objArr[i].item);
		}
	}
}
console.log("testing", !false);
printNonOrganicItems(shoppingList);
// console.log(calculateTotal(shoppingList));
// jQuery Selectors