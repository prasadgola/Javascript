//functional script
if (true) {
	var varVariable = 'This is varVariable'
}

console.log(varVariable)

if (true) {
	let letVariable = 'This is letVariable'
	console.log(letVariable)
}


if (true) {
	const constVariable = 23
	console.log(constVariable)
}

//Reassigning script
var varV = 'first varassign'
var varV = 'second varassign'

console.log(varV)

let leta = 'first letassign'
// let leta = 'second letassign'

console.log(leta)

const constV = 'first constassign'
// const constVar = 'second constassign'

console.log(constV)

//Precalling script
console.log(prevar)
var prevar = 'This var is defined after calling variable'
console.log(prevar)

// console.log(prelet)
let prelet = 'This let is defined after before variable'
console.log(prelet)

// console.log(preconst)
const preconst = 'This const is defined before calling variable'
console.log(preconst)

//let and const difference

// for(const i = 0; i<3; i++) {
// 	console.log(i)
// }

for(let i = 0; i<3; i++) {
	console.log(i)
}

//The difference is let is used inside the block(parentheses, functions, loops) for iterator,
//but we can't use const in the iterator which don't changes
//it's value even inside the block. This is the only difference between let and const.