function testfun (hello) {
	console.log("hello" + hello)
}

testfun(" world")

const testarrow = (hello) => {
	console.log("hello" + hello)
}

testarrow(" world")

// Function inside classes are called as methods and
// they are assigned in different than functions in js

class classcheck {
	constructor (hello) {
		this.hello = hello
	}

	checktest (para) {
		console.log("hello" + para + this.hello)
	}

	checkarrow = (para) => {
		console.log("hello" + para + this.hello)
	}	
}

var objectcheck = new classcheck(" world")
objectcheck.checktest(" class")
objectcheck.checkarrow(" class")

// both class and fucntion are function in js
console.log(typeof testfun)
console.log(typeof classcheck)

// the differece between fuctions and classes
// are the fucntion is hoisted and classes
// aren't hoisted.

// hoisted mean the moving all the declaration
// on the top of the scope. Google it
// For ex: var is hoisted and const and let
// aren't hoisted

// Function inside another function

function firstone (word) {
	console.log("This is from" + word)
	function secondone (words) {
		console.log("This is from" + words)
	}
	return secondone
}

const firstonea = (word) => {
	console.log("This is from" + word)
	const sencodonea = (words) => {
		console.log("This is from" + words)
	}
	return sencodonea
}

firstone(" first Function")(" second Function")
firstonea(" firsta Function")(" sencodonea Function")

// callback fucntion

function top_(string2) {
		console.log('This is from ' + string2)
	}

function below(string1, string2 , inside) {
	console.log('This is from ' + string1)
	inside(string2)
}

below('below function', 'top_ function', top_)