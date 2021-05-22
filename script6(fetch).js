// let lol

// url = 'http://dummy.restapiexample.com/api/v1/create'
// data = '{"name":"asf23","salary":"123","age":"23"}'
// params = {
// 	method : 'post',
// 	headers : {
// 		'Content-Type': 'application/json'
// 	},
// 	body: data
// }

// fetch(url, params)
// 	.then(res => res.json())
// 	.then(data => lol = data)

// setTimeout(() => {
//   console.log(lol)
// }, 3000)

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(data => console.log(data))