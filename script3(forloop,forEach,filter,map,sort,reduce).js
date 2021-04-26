const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// For loop

// for(let i=0; i<=companies.length -1; i++) {
// 	console.log(companies[i]);
// }

// forEach

// companies.forEach(function (company) {
// 	console.log(company)
// })

// companies.forEach(company => console.log(company))

// filter

// let list = [];
// for(let i=0; i<ages.length; i++) {
// 	if (ages[i] >= 21) {
// 		console.log(ages[i])
// 	}
// }

// const selected = ages.filter(function(ages) {
// 	if (ages >= 21) {
// 		console.log(ages)
// 	}
// })

// const selected = ages.filter( ages => ages>=21);
// console.log(selected)

// filter reatail companies

// const selected = companies.filter(function(company) {
// 	if (company.category === "Retail"){
// 		return true
// 	}
// })

// const selected = companies.filter(company => company.category === "Retail")
// console.log(selected)

// Go 80s companies

// const selected = companies.filter(function (argument) {
// 	if (argument.start >= 1980 && argument.start < 1990) {
// 		return true		
// 	}
// })

// const selected = companies.filter(company => (company.start >= 1980 && company.start < 1990))
// console.log(selected)

// const selected = companies.map(function (company) {
// 	return company.name
// })

// const selected = companies.map(company => company.name)
// console.log(selected)

// Templete string using

// const selected = companies.map(function(company) {
// 	return `${company.name} [${company.start} - ${company.end}]`
// })

// const selected = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
// console.log(selected)

// const selected = companies.map(company => -1)
// console.log(selected)

// const agesqrt = ages.map(ages => Math.sqrt(ages))
// const twiceage = ages.map(ages => ages*2)
// console.log(twiceage)

// const agemap = ages
// 	.map(ages => Math.sqrt(ages))
// 	.map(ages => ages*2);

// console.log(agemap)

// sort

// sort takes two argument and sorts based on return value 1 and -1

// const sortedcompanies = companies.sort(function(a, b) {
// 	if (a.start > b.start) {
// 		return 1
// 	} else {
// 		return -1
// 	}
// })

// Important ternary opperator

// const sortedcompanies = companies.sort((a, b) => (a.start > b.start) ? 1 : -1)
// console.log(sortedcompanies)

// const num = 60
// let result

// if (num > 50) {
// 	result = "Numer is big"
// } else {
// 	result = "Number is small"
// }
// console.log(result)

// console.log((num>50) ? "Number is big" : "Number is small")

// Nested if statment with ternery operator(bad case)

// const number = 20
// let result

// if (number === 0) {
// 	result = "you have nothing"
// } else if (number < 10) {
// 	result = "you have little"
// } else {
// 	result = "you have a lot"
// }

// result = number === 0 ? "you have nothing" : (
// 	number < 10 ? "you have little" : "you have a lot"
// )
// console.log(result)

// sort ages

// const sortages = ages.sort((a, b) => b-a)
// console.log(sortages)

// reduce

// let result = 0
// for(let i=0; i < ages.length; i++) {
// 	result += ages[i]
// }
// console.log(result)

// const sumages = ages.reduce(function(a, b) {
// 	return a + b
// },0)

// const sumages = ages.reduce((a, b) => a + b, 0)
// console.log(sumages)

// const totalyears = companies.reduce(function(total, company) {
// 	return total + (company.end - company.start)
// },0)

// const totalyears = companies.reduce((total, company) => total + (company.end - company.start),0)

// console.log(totalyears)

// combined Methods

const combined = ages
	.map(age => age *2)
	.filter(age => age >= 40)
	.sort((a, b) => a - b)
	.reduce((a, b) => a + b,0)

console.log(combined)

/*THe difference between these function in python and js is that we write the condition function
 outside of these function in python and in js we write inside of these functions*/