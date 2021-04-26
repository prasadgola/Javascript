/*      normal sync function           */

// console.log("start")

// function fun(name) {
// 	return name
// }

// const name = fun("basavaprasad")
// console.log(name)

// console.log("end")


/*       async function problem          */

// console.log("start")

// function fun(name) {
// 	setTimeout(function () {
// 		return name
// 	},3000)
// }

// const name = fun("basavaprasad")
// console.log(name)

// console.log("end")


/*       async problem solve by callback */

// console.log("start")

// function fun(name,callback) {
// 	setTimeout(function () {
// 		callback(name,callback)
// 	},3000)
// }

// function fun2(callback) {
// 	setTimeout(function () {
// 		callback("gola")
// 	},1000)
// }

// function fun4(surname) {
// 	console.log(surname)
// }

// function fun3(name) {
// 	const surname = fun2(fun4)
// 	console.log(name)
// }
// const name = fun("basavaprasad", fun3)


// console.log("end")


/*       async problem solving by promise*/

// console.log("start")

// function fun(name) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(name)
// 		}, 2000)
// 	})
// }

// fun("basavaprasad").then((name) => console.log(name))

// console.log("end")

/*async problem solving by async, await syntax*/

// console.log("start")

// function fun(name) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(name)
// 		},2000)
// 	})
// }

// async function fun2() {
// 	const namee = await fun("basavaprasad")
// 	console.log(namee)
// }

// fun2()

// console.log("end")

// await works with promise!


/*webdev code for async function which using nested function which will be complicated using Promises*/

function makerequest(location) {
	return new Promise((resolve, reject) => {
		console.log(`making request to ${location}`)
		if (location === 'Google') {
			resolve('google says hi')
		} else {
			reject('we can only talk to google')
		}
	})
}

function processrequest(response) {
	return new Promise((resolve, reject) => {
		console.log('processing response')
		resolve(`extra information + ${response}`)
	})
}

async function fun() {
	try{
		const make = await makerequest('Google')
		console.log(make)
		const processr = await processrequest(make)
		console.log(processr)
	} catch(err) {
		console.log(err)
	}
}

fun()